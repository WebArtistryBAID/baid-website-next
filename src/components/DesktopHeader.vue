<template>
  <header
    :class="{
      'fixed top-0 bg-white/50 backdrop-filter backdrop-blur-lg': fixed,
      'absolute top-0 bg-transparent': !fixed && !fixedShow,
      'absolute -top-16 bg-transparent': !fixed && fixedShow
    }"
    class="w-screen px-8 gap-3 flex z-50 transition-all duration-300"
  >
    <div class="mr-auto py-2">
      <SchoolLogo :color="fixedShow ? 'black' : 'white'" />
    </div>

    <div
      :class="{
        'text-black': fixedShow,
        'text-white': !fixedShow
      }"
      class="lg:block hidden"
    >
      <RouterLinks />
    </div>

    <div
      class="h-18 w-24 transition-colors duration-100 opacity-50 hover:opacity-100 active:opacity-80 flex items-center justify-center"
    >
      <router-link
        :style="{
          color: fixedShow ? 'black' : 'white'
        }"
        :to="
          route.path.replace(
            $i18n.locale,
            $i18n.locale === 'zh-CN' ? 'en-US' : 'zh-CN'
          )
        "
        class="decoration-none"
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
  </header>
</template>

<script lang="ts" setup>
import SchoolLogo from '@/components/DesktopHeader/SchoolLogo.vue'
import RouterLinks from '@/components/DesktopHeader/RouterLinks.vue'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const fixed = ref(false)
const fixedShow = ref(false)

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

onMounted(() => {
  handleScroll()
})
watch(() => route.fullPath, () => {
  handleScroll()
})
window.addEventListener('scroll', handleScroll)
</script>
