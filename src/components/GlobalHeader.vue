<template>
  <header
    role="banner"
    :class="{
      'fixed top-0 bg-white/50 backdrop-filter backdrop-blur-lg': fixed,
      'absolute top-0 bg-transparent': !fixed && !fixedShow,
      'absolute -top-16 bg-transparent': !fixed && fixedShow
    }"
    class="w-screen px-4 sm:px-8 gap-3 flex z-50 transition-all duration-300"
  >
    <div class="mr-auto py-2">
      <SchoolLogo :color="fixedShow ? 'black' : 'white'" />
    </div>

    <nav
      :class="{ 'text-black': fixedShow, 'text-white': !fixedShow }"
      class="hidden lg:flex"
      aria-label="Primary navigation"
    >
      <RouterLinks />
      <div class="flex items-center justify-center text-lg ml-3">
        <a
          class="bg-[var(--standard-blue)] rounded-full p-2 text-white"
          href="https://link.beijing.academy"
          target="_blank"
        >
          {{ $t('views.login') }}
        </a>
      </div>
    </nav>

    <div
      class="h-18 w-24 flex items-center justify-center gap-2"
    >
      <button
        class="lg:hidden transition-colors duration-100 opacity-50 hover:opacity-100 active:opacity-80 pt-1.5"
        :aria-expanded="mobileOpen"
        aria-controls="mobile-menu"
        aria-haspopup="true"
        @click="mobileOpen = !mobileOpen"
      >
        <svg
          :stroke="fixedShow ? '#000' : '#fff'"
          aria-label="Menu"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6h16M4 12h16M4 18h16"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
      </button>

      <router-link
        :style="{ color: fixedShow ? 'black' : 'white' }"
        :to="
          route.path.replace(
            $i18n.locale,
            $i18n.locale === 'zh-CN' ? 'en-US' : 'zh-CN'
          )
        "
        class="decoration-none transition-colors duration-100 opacity-50 hover:opacity-100 active:opacity-80"
      >
        <svg
          class="w-6 h-10"
          height="32"
          viewBox="0 0 24 18"
          width="32"
          aria-label="Switch Language"
        >
          <path
            d="m12.87 15.07l-2.54-2.51l.03-.03A17.52 17.52 0 0 0 14.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5l3.11 3.11l.76-2.04M18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12m-2.62 7l1.62-4.33L19.12 17h-3.24Z"
            fill="currentColor"
          />
        </svg>
      </router-link>
    </div>

    <transition name="fade">
      <div
        v-if="mobileOpen"
        id="mobile-menu"
        aria-label="Mobile menu"
        aria-modal="true"
        class="fixed inset-0 bg-[var(--standard-blue)] h-screen overflow-y-auto z-50"
        role="dialog"
      >
        <button
          ref="closeButton"
          aria-label="Close menu"
          class="lg:hidden transition-colors text-white duration-100 opacity-50 hover:opacity-100 active:opacity-80 absolute top-4 right-4"
          @click="mobileOpen = !mobileOpen"
        >
          <svg
            aria-label="Close"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
          >
            <line
              x1="18"
              x2="6"
              y1="6"
              y2="18"
            />
            <line
              x1="6"
              x2="18"
              y1="6"
              y2="18"
            />
          </svg>
        </button>

        <GlobalFooter />
      </div>
    </transition>
  </header>
</template>

<script lang="ts" setup>
import SchoolLogo from '@/components/header/SchoolLogo.vue'
import RouterLinks from '@/components/header/RouterLinks.vue'
import GlobalFooter from '@/components/GlobalFooter.vue'
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const fixed = ref(false)
const fixedShow = ref(false)
const mobileOpen = ref(false)

const route = useRoute()

const handleScroll = () => {
  if (route.meta.headerAnimate === false) {
    fixed.value = true
    fixedShow.value = true
    return
  }
  fixedShow.value = window.scrollY > 24 * 16
  fixed.value = window.scrollY > window.innerHeight
}

const closeButton = ref<HTMLElement | null>(null)
watch(mobileOpen, async (open: boolean) => {
  document.body.style.overflow = open ? 'hidden' : ''
  if (open) {
    await nextTick()
    closeButton.value?.focus()
  }
})
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && mobileOpen.value) {
    mobileOpen.value = false
  }
}

onMounted(() => {
  handleScroll()
  window.addEventListener('keydown', handleKeydown)
})
watch(() => route.fullPath, () => {
  handleScroll()
  mobileOpen.value = false
})
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown))
window.addEventListener('scroll', handleScroll)
</script>
