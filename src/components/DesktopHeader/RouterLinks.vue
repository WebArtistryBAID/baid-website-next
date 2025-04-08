<template>
  <div
    class="flex p-0 relative h-full m-0 links"
    @mouseleave="showBlock = false"
  >
    <div
      v-for="(route, index) in routesComputed"
      :key="route.name"
      class="h-full text-lg"
      @mouseover="onHover(index, route.name)"
    >
      <router-link
        :to="route.path"
        active-class="opacity-100"
        class="inline-block w-30 h-full decoration-none opacity-50 transition-colors text-inherit hover:opacity-100 active:opacity-60"
        style="line-height: 70px"
      >
        <div class="flex items-center justify-center w-full h-full">
          {{ $t(`views.${route.name}`) }}
        </div>
      </router-link>
    </div>

    <!-- Block -->
    <div
      :class="{ 'opacity-10': showBlock }"
      :style="{ left: blockLeft }"
      class="absolute w-30 h-full bg-black opacity-0 z-10 pointer-events-none transition-opacity"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { routes } from '@/router'
import { animate } from 'popmotion'
import { useI18n } from 'vue-i18n'

const routesComputed = computed(() => {
  return routes
    .map((route) => {
      const path = route.path
        .replace(':lang(zh-CN|en-US)', locale.value)
        .replace(':lang(zh-CN|en-US)?', locale.value)
      return { ...route, path }
    })
    .filter(
        (route) => route.name !== 'NotFound' && route.name !== 'ArticlePage' && route.name !== 'HomePage'
    )
})

const showBlock = ref(false)
let blockLeftAnimation: any
const blockLeft = ref()

// const showSubmenu = ref(false)
// let submenuLeftAnimation
const hover = ref()

function onHover(index: number, name: string) {
  // OnHover: Block animation, Submenu animation
  if (!showBlock.value) {
    showBlock.value = true
    blockLeftAnimation = animate({
      from: 7.5 * index + 'rem',
      to: 7.5 * index + 'rem',
      onUpdate: (v) => {
        blockLeft.value = v
      }
    })
  } else {
    blockLeftAnimation.stop()
    blockLeftAnimation = animate({
      from: blockLeft.value,
      to: 7.5 * index + 'rem',
      onUpdate: (v) => {
        blockLeft.value = v
      }
    })
  }
  hover.value = name
}

const { locale } = useI18n({ useScope: 'global' })
</script>
