<template>
  <section
    :style="heroStyle"
    class="w-screen flex flex-col bg-cover bg-center justify-center relative"
    aria-labelledby="hero-heading"
    role="banner"
  >
    <transition name="fade">
      <div
        v-show="animationStart"
        class="absolute inset-0 pointer-events-none from-transparent to-gray-950 bg-gradient-to-b"
      />
    </transition>
    <div class="absolute bottom-0 text-white w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div class="w-full md:max-w-2xl flex flex-col justify-center items-center">
        <transition name="slide-up-fade">
          <h1
            v-show="animationStart"
            id="hero-heading"
            class="mb-3 text-white text-center font-bold font-serif text-5xl md:text-7xl"
          >
            {{ $t('home.title') }}
          </h1>
        </transition>
        <transition name="slide-up-fade-2">
          <p
            v-show="animationStart"
            class="text-lg md:text-xl text-center !mb-8"
          >
            {{ $t('home.subtitle') }}
          </p>
        </transition>
        <transition name="slide-up-fade-2">
          <div
            v-show="animationStart"
            class="mb-8"
          >
            <ReadMore
              color="white"
              icon-color="#fb2c36"
              text="home.projects"
              to="/projects"
            />
          </div>
        </transition>

        <div
          class="border-l border-white h-32"
          style="width: 1px"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, inject, onMounted, onUnmounted, ref } from 'vue'
import bg4 from '@/assets/images/home/hero/home-bg-4.webp'
import ReadMore from '@/components/ReadMore.vue'

const pageData = inject('data')

// Parallax
const scrollY = ref(0)
const onScroll = () => {
  scrollY.value = window.scrollY
}
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
const heroStyle = computed(() => ({
  backgroundImage: `url(${bg4})`,
  backgroundPosition: `center ${scrollY.value * 0.5}px`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '105vh'
}))

// Animation
const animationStart = ref(false)
setTimeout(() => {
  animationStart.value = true
}, 200)

</script>
