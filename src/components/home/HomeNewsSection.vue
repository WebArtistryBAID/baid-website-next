<template>
  <section
    aria-labelledby="news-heading"
    class="mt-24 border-b border-black"
  >
    <div
      class="mx-auto flex items-center px-5 md:px-0"
      style="max-width: 77rem"
    >
      <h2
        id="news-heading"
        class="text-4xl lg:text-5xl xl:text-7xl font-bold !font-sans mr-auto xl:-mb-2"
      >
        {{ $t('home.news') }}
      </h2>

      <router-link
        :to="'/' + $i18n.locale + '/news'"
        class="flex items-center gap-1 text-black decoration-none op-80 hover:op-100 transition"
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
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      aria-label="Latest news"
      role="list"
    >
      <HomeNews
        v-if="props.newsList.length >= 1"
        role="listitem"
        :light="true"
        :news="props.newsList[0]"
        bg="var(--standard-blue)"
      />
      <HomeNews
        v-if="props.newsList.length >= 2"
        role="listitem"
        :news="props.newsList[1]"
        bg="#eee"
      />
      <HomeNews
        v-if="props.newsList.length >= 3"
        role="listitem"
        :light="true"
        :news="props.newsList[2]"
        bg="var(--standard-red)"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import HomeNews from './HomeNewsCard.vue'

const props = defineProps([ 'newsList' ])
</script>

<style scoped>
.special-bg {
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
}
</style>
