<template>
  <section
    :style="heroStyle"
    class="h-screen w-screen flex flex-col bg-cover bg-center justify-center relative"
    aria-labelledby="hero-heading"
    role="banner"
  >
    <div
      class="absolute inset-0 pointer-events-none"
      style="background: radial-gradient(ellipse at center, rgba(0,0,0,0) 60%, rgba(0,0,0,0.4) 100%);"
    />
    <div class="absolute bottom-16 text-white w-screen">
      <h1
        id="hero-heading"
        class="font-bold mb-3 text-white text-center !font-sans text-5xl md:leading-[1.1]"
      >
        <span>Better</span> Starts Here
      </h1>
      <p
        class="text-lg md:text-xl text-center"
        v-html="pageData.hero_subtitle"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, inject, onMounted, onUnmounted, ref } from 'vue'
import bg4 from '@/assets/images/home/hero/home-bg-4.webp'

const bg = [ bg4 ]
const usedBg = bg[Math.floor(Math.random() * bg.length)]

const pageData = inject('data')

const scrollY = ref(0)
const onScroll = () => {
  scrollY.value = window.scrollY
}
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
const heroStyle = computed(() => ({
  backgroundImage: `url(${usedBg})`,
  backgroundPosition: `center ${scrollY.value * 0.5}px`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}))
</script>
