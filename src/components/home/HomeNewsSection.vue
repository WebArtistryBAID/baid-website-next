<template>
  <section
    aria-labelledby="news-heading"
    class="mt-24 border-black"
  >
    <div
      class="mx-auto flex items-center px-5 md:px-0"
      style="max-width: 77rem"
    >
      <h2
        id="news-heading"
        class="text-4xl lg:text-5xl xl:text-6xl font-bold mr-auto xl:-mb-2"
      >
        {{ $t('home.news') }}
      </h2>

      <router-link
        :to="'/' + $i18n.locale + '/news'"
        class="flex items-center gap-1 text-black decoration-none opacity-80 hover:opacity-100 transition"
        aria-label="Read more news"
      >
        <span class="!font-sans">{{ $t('readMore') }}</span>
        <svg
          height="25"
          viewBox="0 0 16 16"
          width="25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 8a.75.75 0 0 1 .75-.75h8.787L8.25 4.309a.75.75 0 0 1 1-1.118L14 7.441a.75.75 0 0 1 0 1.118l-4.75 4.25a.75.75 0 1 1-1-1.118l3.287-2.941H2.75A.75.75 0 0 1 2 8Z"
            fill="currentColor"
          />
        </svg>
      </router-link>
    </div>
  </section>

  <section
    aria-labelledby="news-heading"
    class="section !mb-24"
  >
    <div class="w-full flex flex-col md:flex-row gap-8">
      <router-link
        :to="`news/${newsList[0].id}`"
        class="w-full md:w-2/3 group block"
      >
        <div class="w-full h-64 md:h-96 overflow-hidden rounded-3xl mb-3">
          <img
            :alt="`Cover image for ${newsList[0].title}`"
            :src="newsList[0].cover"
            class="object-cover w-full h-full rounded-t-3xl transform transition-transform duration-300 ease-in-out group-hover:scale-105"
          >
        </div>
        <p class="text-3xl font-serif fancy-link">
          {{ newsList[0].title }}
        </p>
      </router-link>
      <div class="w-full md:w-1/3">
        <div
          v-for="news in newsList.slice(1, 4)"
          :key="news.id"
          class="pb-3 border-b border-black mb-5"
        >
          <p
            aria-hidden="true"
            class="uppercase text-gray-400 !mb-2 text-sm"
          >
            {{ news.keyword ?? $t('home.newsOther') }}
          </p>
          <router-link
            :to="`news/${news.id}`"
            class="block group"
          >
            <p class="text-xl font-bold fancy-link">
              {{ news.title }}
            </p>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const props = defineProps([ 'newsList' ])
</script>

<style scoped>
.special-bg {
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
}
</style>
