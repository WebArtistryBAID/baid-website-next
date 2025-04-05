<template>
  <main>
    <div class="placeholder" />
    <section class="section">
      <MobileTitle>新闻</MobileTitle>

      <div
        v-for="item in news"
        :key="item.id"
      >
        <MobileCard :border="false">
          <div
            :style="{ backgroundImage: 'url(' + item.cover + ')' }"
            class="w-full h-38 bg-cover"
          >
            <div class="w-full h-full bg-black bg-op-60 p-5 box-border">
              <h2 class="m0 text-white truncate">
                {{ item.title }}
              </h2>
              <p class="mt-1 text-white op-80">
                {{ item.description }}
              </p>
              <p class="op-50 text-white">
                {{ t('NewsPage.Publish') }} {{ item.date }}
              </p>
              <p class="text-right mt-5">
                <RouterLink
                  :to="item.href"
                  class="text-sky-1 op-80 decoration-none"
                >
                  <svg
                    height="25"
                    viewBox="0 0 20 20"
                    width="25"
                  >
                    <path
                      d="M6.25 4.5A1.75 1.75 0 0 0 4.5 6.25v7.5c0 .966.784 1.75 1.75 1.75h7.5a1.75 1.75 0 0 0 1.75-1.75v-2a.75.75 0 0 1 1.5 0v2A3.25 3.25 0 0 1 13.75 17h-7.5A3.25 3.25 0 0 1 3 13.75v-7.5A3.25 3.25 0 0 1 6.25 3h2a.75.75 0 0 1 0 1.5h-2Zm4.25-.75a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V5.56l-3.72 3.72a.75.75 0 1 1-1.06-1.06l3.72-3.72h-3.19a.75.75 0 0 1-.75-.75Z"
                      fill="currentColor"
                    />
                  </svg>
                </RouterLink>
              </p>
            </div>
          </div>
        </MobileCard>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import MobileTitle from '../../components/MobileTitle.vue'
import MobileCard from '../../components/MobileCard.vue'

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
