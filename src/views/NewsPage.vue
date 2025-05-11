<template>
  <section
    aria-labelledby="news-heading"
    class="section"
  >
    <h1
      id="news-heading"
      class="!text-7xl border-b border-black mt-24 font-bold !font-sans mr-auto -mb-2"
    >
      News
    </h1>
    <div
      aria-label="News articles"
      role="list"
    >
      <router-link
        v-for="(item, index) in news"
        :key="item.id"
        :class="{ 'md:flex-row-reverse': index % 2 }"
        :to="item.href"
        class="w-full flex flex-col md:flex-row items-center my-10"
        role="listitem"
      >
        <img
          :alt="`Cover image for ${item.title}`"
          :src="item.cover"
          class="w-full md:w-1/3 aspect-video object-cover"
        >
        <div class="md:px-10 py-10 w-full md:w-2/3">
          <h2
            :class="{
              'border-[var(--standard-blue)]': index % 2,
              'border-[var(--standard-red)]': index % 2 === 0
            }"
            class="text-3xl font-bold mb-5 border-l-4 pl-3"
          >
            {{ item.title }}
          </h2>
          <time
            :datetime="item.date"
            class="opacity-80 text-sm !mb-3"
          >{{ item.date }}
          </time>

          <p class="opacity-80 text-xl font-serif line-clamp-3">
            {{ item.intro }}
          </p>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import dbZH from '@data/zh-CN/db.json'
import dbEN from '@data/en-US/db.json'

const route = useRoute()
const news = ref<any[]>([])

watchEffect(() => {
  let data: any
  if (route.params.lang === 'zh-CN') {
    data = Object.values(dbZH)
  } else {
    data = Object.values(dbEN)
  }

  // Sort by date
  data.sort((a: any, b: any) => {
    return (new Date(b.date)).getTime() - (new Date(a.date)).getTime()
  })
  news.value = data
})
</script>
