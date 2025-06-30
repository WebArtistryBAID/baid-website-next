<template>
  <section
    :class="[
      'w-full bg-gray-950 text-white slide-up-fade-enter-active',
    ]"
  >
    <div
      class="mx-auto px-4 sm:px-6 lg:px-8"
      style="max-width: 77rem"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 mb-8 relative gap-8">
        <div
          class="absolute top-0 bottom-0 pointer-events-none from-white to-transparent bg-gradient-to-b left-1/2 hidden md:block"
          style="width: 1px; height: 65%"
        />
        <div class="hidden md:block px-8 py-16 animate-on-scroll slide-up-fade-enter-active slide-up-fade-enter-from">
          <img
            :src="bg4"
            alt="Temporary"
            class="rounded-3xl w-full h-80 object-cover"
          >
        </div>
        <div
          class="p-8 flex flex-col justify-center animate-on-scroll slide-up-fade-enter-active slide-up-fade-enter-from"
        >
          <p class="uppercase tracking-wide !mb-3 text-sm">
            Science, Technology, and Society
          </p>
          <h2 class="text-2xl mb-4">
            Lin and Benjamin are making the world better through
            an innovative navigation app for
            <span class="text-amber-300 font-bold">people with visual impairments</span>.
          </h2>
          <ReadMore
            color="white"
            icon-color="#ffd230"
            text="Check out the app"
            to="/projects/test"
          />
        </div>

        <div
          class="p-8  flex flex-col justify-center animate-on-scroll slide-up-fade-enter-active slide-up-fade-enter-from"
        >
          <p class="uppercase tracking-wide !mb-3 text-sm">
            Social Activism
          </p>
          <h2 class="text-2xl mb-4">
            Grace and her team are making the world better by
            <span class="text-orange-400 font-bold">saving stray animals at school</span>.
          </h2>
          <ReadMore
            color="white"
            icon-color="#ff8904"
            text="Learn about the journey of Xiaomizhou"
            to="/projects/test"
          />
        </div>
        <div class="hidden md:block px-8 py-16 animate-on-scroll slide-up-fade-enter-active slide-up-fade-enter-from">
          <img
            :src="bg4"
            alt="Temporary"
            class="rounded-3xl w-full h-80 object-cover"
          >
        </div>

        <div class="hidden md:block px-8 py-16 animate-on-scroll slide-up-fade-enter-active slide-up-fade-enter-from">
          <img
            :src="bg4"
            alt="Temporary"
            class="rounded-3xl w-full h-80 object-cover"
          >
        </div>
        <div
          class="p-8  flex flex-col justify-center animate-on-scroll slide-up-fade-enter-active slide-up-fade-enter-from"
        >
          <p class="uppercase tracking-wide !mb-3 text-sm">
            Arts
          </p>
          <h2 class="text-2xl mb-4">
            Rachel and Selina are making the world better by raising awareness for
            <span class="text-red-400 font-bold">ecological feminism</span>.
          </h2>
          <ReadMore
            color="white"
            icon-color="#ff6467"
            text="It's a story of empowerment and change"
            to="/projects/test"
          />
        </div>

        <div class="col-span-1 md:col-span-2 p-8 text-white">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="group">
              <p class="font-bold text-2xl !mb-3">
                Agriculture
              </p>
              <div class="rounded-3xl overflow-hidden mb-5 w-full h-60">
                <img
                  :src="ag"
                  alt="Temporary image"
                  class="rounded-3xl group-hover-scale w-full h-full object-cover"
                >
              </div>
              <p>
                This year, Audrey and her team are developing a new, more effective pesticide.
                There needs to be a longer description of this project. But I hardly know
                what you guys are doing. Can you please write something?
              </p>
            </div>

            <div class="group">
              <p class="font-bold text-2xl !mb-3">
                Gender Identity
              </p>
              <div class="rounded-3xl overflow-hidden mb-5 w-full h-60">
                <img
                  :src="pads"
                  alt="Temporary image"
                  class="rounded-3xl group-hover-scale w-full h-full object-cover"
                >
              </div>
              <p>
                This year, Audrey and her team are developing a new, more effective pesticide.
                There needs to be a longer description of this project. But I hardly know
                what you guys are doing. Can you please write something?
              </p>
            </div>

            <div class="group">
              <p class="font-bold text-2xl !mb-3">
                Music
              </p>
              <div class="rounded-3xl overflow-hidden mb-5 w-full h-60">
                <img
                  :src="delivery"
                  alt="Temporary image"
                  class="rounded-3xl group-hover-scale w-full h-full object-cover"
                >
              </div>
              <p>
                This year, Audrey and her team are developing a new, more effective pesticide.
                There needs to be a longer description of this project. But I hardly know
                what you guys are doing. Can you please write something?
              </p>
            </div>
          </div>
        </div>

        <div
          class="col-span-1 md:col-span-2 flex flex-col items-center justify-center text-center px-8 py-32 sm:px-16 md:px-32"
        >
          <p class="text-lg uppercase tracking-wider text-gray-400 !mb-3">
            {{ $t('home.better.startTopText') }}
          </p>
          <h2
            class="text-4xl md:text-5xl"
            v-html="$t('home.better.startMainText')"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import bg4 from '@/assets/images/home/hero/home-bg-4.webp'
import ag from '@/assets/images/home/better/ag.webp'
import delivery from '@/assets/images/home/better/delivery.webp'
import pads from '@/assets/images/home/better/pads.webp'
import ReadMore from '@/components/ReadMore.vue'
import { onBeforeUnmount, onMounted } from 'vue'

let observer: IntersectionObserver

onMounted(() => {
  observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-up-fade-enter-to')
            observer.unobserve(entry.target)
          }
        })
        {
          0.7
        }
      },
  )
  document.querySelectorAll<HTMLElement>('.animate-on-scroll').forEach((el) => {
    observer.observe(el)
  })
})

onBeforeUnmount(() => {
  observer.disconnect()
})
</script>

<style scoped>
.slide-up-fade-enter-active {
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.slide-up-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.slide-up-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
