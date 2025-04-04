<template>
  <div
    :class="{ 'left-0': props.show, 'left--100%': !props.show }"
    class="fixed top-0 w-full h-full transition-all-300 flex z-4"
  >
    <div
      class="bg-[var(--standard-blue)] w-70% flex flex-col justify-between py-20 px-12"
    >
      <div class="h-full">
        <li
          v-for="route in routesComputed"
          :key="route.name"
          class="font-500 text-6 text-white font-sans list-none"
        >
          <router-link
            :to="route.path"
            active-class="important-opacity-100"
            class="inline-block decoration-none opacity-50 transition-colors transition-opacity text-inherit hover:opacity-100 active:opacity-60 leading-16"
            @click="emit('close')"
          >
            {{ $t(`views.${route.name}`) }}
          </router-link>
        </li>
      </div>
      <div class="text-white">
        <transition
          mode="out-in"
          name="fast-fade"
        >
          <router-link
            v-if="$i18n.locale === 'zh-CN'"
            :to="route.path.replace('zh-CN', 'en-US')"
            class="decoration-none opacity-50 transition-colors transition-opacity text-inherit hover:opacity-100 active:opacity-60 text-5 text-white font-sans leading-16"
          >
            English
          </router-link>
          <router-link
            v-else
            :to="route.path.replace('en-US', 'zh-CN')"
            class="decoration-none opacity-50 transition-colors transition-opacity text-inherit hover:opacity-100 active:opacity-60 text-5 text-white font-sans leading-16"
          >
            中文
          </router-link>
        </transition>
      </div>
    </div>
    <div
      class="w-30% h-full"
      style="backdrop-filter: blur(3px)"
      @click="emit('close')"
    >
      <!-- Click -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { routes } from '@/router'
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  show: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits([ 'close' ])

const routesComputed = computed(() => {
  return routes
    .map((route) => {
      const path = route.path
        .replace(':lang(zh-CN|en-US)', locale.value)
        .replace(':lang(zh-CN|en-US)?', locale.value)
      return { ...route, path }
    })
    .filter(
      (route) => route.name !== 'NotFound' && route.name !== 'ArticlePage'
    )
})

const router = useRouter()
const lineLeft = ref()
const showLine = ref(false)

router.beforeResolve((to, from) => {
  if (to.name === from.name) {
    return
  }
  showLine.value = false
  const index = routesComputed.value.findIndex((item) => item.name === to.name)
  setTimeout(() => {
    lineLeft.value = 7.5 * index + 'rem'
  }, 300) // Wait for the line fadeout animation to finish
})

router.afterEach((to) => {
  const index = routesComputed.value.findIndex((item) => item.name === to.name)
  if (index !== -1) {
    setTimeout(() => {
      showLine.value = true
    }, 300)
  }
})

const { locale } = useI18n({ useScope: 'global' })

const route = useRoute()
</script>

<style>
.fast-fade-enter-active,
.fast-fade-leave-active {
  /* transition: opacity 0.5s ease; */
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.fast-fade-enter-from,
.fast-fade-leave-to {
  opacity: 0;
}
</style>
