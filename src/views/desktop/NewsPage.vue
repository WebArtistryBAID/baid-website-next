<template>
  <section class="section">
    <NotFancyTitle
      cn="新闻"
      color="blue"
      en="News"
    />
    <div
      v-for="(item, index) in news"
      :key="item.id"
      :class="{
        'flex-row-reverse !border-[var(--standard-blue)]': index % 2
      }"
      class="w-full border-solid border-[var(--standard-red)] flex h-70 my-10 cursor-pointer op-100 hover:op-90 active:op-70 transition"
      @click="router.push(item.href)"
    >
      <img
        :src="item.cover"
        alt=""
        class="w-50% h-full object-cover"
      >
      <div class="p-10 flex-1 flex flex-col">
        <div class="flex">
          <h2 class="mt-0 flex-1">
            {{ item.title }}
          </h2>
          <a
            :class="{ '!text-[var(--standard-blue)]': index % 2 }"
            :href="item.href"
            alt="GOTO"
            class="ml-3 mt--2px text-[var(--standard-red)] op-50 hover:op-100 transition"
          >
            <svg
              height="32"
              viewBox="0 0 24 24"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v9l-3.794-3.793l-5.999 6l-1.414-1.414l5.999-6L12 3h9z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
        <p class="op-80 line-clamp-4">
          {{ item.intro }}
        </p>
        <div class="flex-1" />

        <p class="op-50">
          {{ $t('NewsPage.Publish') }} {{ item.date }}
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import NotFancyTitle from '@/components/NotFancyTitle.vue'
import dbZH from '@data/zh-CN/db.json'
import dbEN from '@data/en-US/db.json'

const route = useRoute()
const router = useRouter()

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

// i18n

</script>
