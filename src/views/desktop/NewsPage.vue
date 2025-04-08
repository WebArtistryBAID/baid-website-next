<template>
  <section class="section">
    <h1 class="!text-7xl border-b border-black mt-24 font-bold !font-sans mr-auto -mb-2">
      News
    </h1>

    <a
      v-for="(item, index) in news"
      :key="item.id"
      :class="{
        'flex-row-reverse': index % 2
      }"
      :href="item.href"
      class="w-full flex items-center my-10"
    >
      <img
        :src="item.cover"
        alt=""
        class="w-1/3 aspect-video h-full object-cover"
      >
      <div class="p-10 w-2/3">
        <h2
          :class="{
            'border-[var(--standard-blue)]': index % 2,
            'border-[var(--standard-red)]': index % 2 === 0
          }"
          class="text-3xl font-bold mb-5 border-l-4 pl-3"
        >
          {{ item.title }}
        </h2>
        <p class="opacity-80 text-sm !mb-3">
          {{ item.date }}
        </p>

        <p class="opacity-80 text-xl font-serif line-clamp-3">
          {{ item.intro }}
        </p>
      </div>
    </a>
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
