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
          class="absolute top-0 bottom-0 pointer-events-none bg-white left-1/2 hidden md:block"
          style="width: 1px; height: 80%"
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

        <div
          class="col-span-1 md:col-span-2 flex flex-col items-center justify-center text-center px-8 py-32 sm:px-16 md:px-32 animate-on-scroll slide-up-fade-enter-active slide-up-fade-enter-from"
        >
          <p class="text-lg uppercase tracking-wider text-gray-400 !mb-3">
            {{ $t('home.startTopText') }}
          </p>
          <h2
            class="text-4xl md:text-5xl"
            v-html="$t('home.startMainText')"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import bg4 from '@/assets/images/home/hero/home-bg-4.webp'
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
