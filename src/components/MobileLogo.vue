<template>
  <div
    v-if="ready"
    :class="{
      'top-50% m-t--12.5 h-25': stage < 2,
      'top-2.5': stage === 2,
      '!z-13': !dive,
      'transition-all-500': props.animate
    }"
    class="flex items-center justify-center pointer-events-none z-3 fixed w-full"
  >
    <img
      :class="{
        '!w-15 !h-15': stage === 2,
        'transition-all-500': props.animate
      }"
      alt=""
      class="w-25 h-25"
      src="../assets/images/logoNormal.png"
    >

    <div
      :class="{
        '!w-0': stage < 1,
        '!w-60': stage === 1,
        '!text-white': white,
        'transition-all-500': props.animate
      }"
      class="whitespace-nowrap truncate w-40"
    >
      <h1
        :class="{
          '!text-3.5': stage === 2,
          'transition-all-500': props.animate && !dive,
          'transition-all-25': dive
        }"
        class="text-6 m-0"
      >
        北京中学国际部
      </h1>
      <p
        :class="{
          '!text-2 !m-t-0.5': stage === 2,
          'transition-all-500': props.animate && !dive,
          'transition-all-25': dive
        }"
        class="font-sans text-3 m-b-0 m-t-1"
      >
        Beijing Academy International Department
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const props = defineProps([ 'animate' ])
const ready = ref(false)

const stage = ref(0)
// 0: 仅logo 中心
// 1: logo + 文字 中心
// 2: logo + 文字缩小 顶部

const dive = ref(false)
// dive: z-13 => z-3

const white = ref(false)

function onScroll() {
  if (route.meta.header?.alwaysFill) {
    white.value = false
    return
  }
  if (window.scrollY > 170) {
    white.value = false
  } else {
    white.value = true
  }
}

router.afterEach(onScroll)

router.beforeEach((e) => {
  if (e.name === 'AboutUs' || e.name === 'EducationTeaching') {
    setTimeout(() => {
      ready.value = false
    }, 300)
  }
})

router.afterEach((e) => {
  router.isReady().then(() => {
    if (e.name === 'AboutUs' || e.name === 'EducationTeaching') {
      setTimeout(() => {
        ready.value = true
      }, 1000)
    } else {
      ready.value = true
    }
  })
})

onMounted(async () => {
  window.addEventListener('scroll', onScroll)
  // Wait for router
  await router.isReady()
  if (props.animate) {
    ready.value = true
    setTimeout(() => {
      stage.value = 1
      setTimeout(() => {
        stage.value = 2
        setTimeout(() => {
          dive.value = true
          onScroll()
        }, 300)
      }, 500)
    }, 300)
  } else {
    stage.value = 2
    dive.value = true
  }
})
</script>
