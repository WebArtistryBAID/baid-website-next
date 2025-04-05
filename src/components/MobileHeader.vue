<template>
  <div v-if="ready">
    <NavMenu
      :show="showMenu"
      @close="showMenu = !showMenu"
    />
    <SearchScreen
      :show="showSearch"
      @close="showSearch = !showSearch"
    />
    <!-- BG -->
    <div
      :class="{
        'bg-white shadow-md': bgWhite
      }"
      class="fixed z-3 top-0 w-screen h-20 transition-colors"
    />
    <header>
      <!-- Menu -->
      <div
        :class="{ 'z-3': !showMenuDelay, 'z-4': showMenuDelay }"
        class="left-5 top-7.5 fixed"
        @click="showMenu = !showMenu"
      >
        <div
          :class="{
            'rotate-45 translate-y-2 !bg-white': showMenu,
            '!bg-white': !bgWhite
          }"
          class="line"
        />
        <div
          :class="{ 'op-0': showMenu, '!bg-white': !bgWhite }"
          class="line my-1.2"
        />
        <div
          :class="{
            'rotate--45 translate-y--2 !bg-white': showMenu,
            '!bg-white': !bgWhite
          }"
          class="line"
        />
      </div>

      <!-- Search -->
      <div
        :class="{
          'z-3': !showSearchDelay,
          'z-4': showSearchDelay
        }"
        class="right-5 top-7 fixed w-7 h-7 z-3"
        @click="showSearch = !showSearch"
      >
        <svg
          :class="{ 'op-0': showSearchDelay, 'text-white': !bgWhite }"
          class="transition-opacity-300"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <circle
              cx="10"
              cy="10"
              r="7"
            />
            <path d="M21 21l-6-6" />
          </g>
        </svg>
        <!-- Close -->
        <svg
          :class="{ 'op-0': !showCloseSearch }"
          class="relative top--8 transition-opacity-300 text-white"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
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
          </g>
        </svg>
      </div>
    </header>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import NavMenu from './MobileHeader/NavMenu.vue'
import SearchScreen from './MobileHeader/SearchScreen.vue'

const route = useRoute()
const router = useRouter()

const ready = ref(false)
const showMenu = ref(false)
const showMenuDelay = ref(false)

const showSearch = ref(false)
const showSearchDelay = ref(false)
const showCloseSearch = ref(false)

function makeDelay(src, dest) {
  watch(src, (val) => {
    if (val) {
      dest.value = true
    } else {
      setTimeout(() => {
        dest.value = val
      }, 300)
    }
  })
}

makeDelay(showMenu, showMenuDelay)
makeDelay(showSearch, showSearchDelay)

watch(showSearch, (val) => {
  if (val) {
    setTimeout(() => {
      showCloseSearch.value = true
    }, 300)
  } else {
    showCloseSearch.value = false
  }
})

const bgWhite = ref(false)

function onScroll() {
  if (route.meta.header?.alwaysFill) {
    bgWhite.value = true
    return
  }
  if (window.scrollY > 170) {
    bgWhite.value = true
  } else {
    bgWhite.value = false
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
})
</script>

<style scoped>
.line {
  width: 1.5rem;
  height: 3px;
  background: #000;
  border-radius: 6px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>
