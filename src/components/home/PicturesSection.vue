<template>
  <section
    class="lg:pb-8 xl:pb-24 px-8 rounded-t-3xl bg-[#103c7405]"
    style="box-shadow: 0 -24px 40px 0 #103c7415"
  >
    <div
      class="mx-auto py-16"
      style="max-width: 77rem"
    >
      <h2 class="text-5xl !font-sans text-right  relative mb-12">
        {{ $t('home.picturesPart1') }}
        <span class="font-bold text-[var(--standard-red)] relative">
          BAID

          <svg
            class="absolute top-0 left-0 w-full"
            viewBox="0 0 90 112.5"
          ><path
            d="M73.529,46.831c0.428-0.098,0.875-0.162,1.334-0.213c0.963-0.115,1.953-0.142,2.818-0.256  c-2.631-0.395-5.303-0.28-7.434-0.291c-2.525-0.011-5.484,0.01-9.316-0.038c-7.313-0.088-17.271-0.14-27.152,0.303  c-2.921,0.136-5.844,0.254-8.754,0.469c-1.093,0.083-2.188,0.167-3.281,0.25c-1.917,0.151-3.833,0.303-5.751,0.438  c-1.624,0.114-3.624,0.693-5.374,0.646c-1.995-0.054-3.385-1.032-3.818-2.912c-0.161-0.683-0.265-1.683,0.088-2.265  c0.355-0.584,0.552-0.75,0.767-0.907c0.52-0.369,1.162-0.656,1.468-0.667c4.218-0.12,8.926-0.016,12.702,0.088  c2.964,0.084,5.934,0.163,9.838,0.167c4.678,0.073,18.688,0.324,23.364,0.329c3.1,0.004,6.193,0.261,9.277,0.594  c2.566,0.276,5.16,0.568,7.797,0.896c2.551,0.312,4.066,0.333,6.645,0.692c0.402,0.052,0.875,0.104,1.387,0.167  c0.426,0.041,0.979,0.114,1.395,0.141c0.418,0.02,0.996,0.333,1.771,1.197c0.041,1.287-0.313,1.958-0.885,1.98  c-0.521,0.254-0.938,0.38-1.209,0.427c-1.041,0.229-2.016,0.301-2.75,0.187c-0.494-0.077-1.975,0.157-3.271,0.329  c-0.957,0.135-1.5,0.156-2.984-0.026c-0.781-0.203-0.801-0.803,0.109-1.307C72.717,47.066,73.182,46.91,73.529,46.831z"
          /></svg>
        </span>
      </h2>

      <div class="grid gap-5 grid-cols-1 grid-rows-3 md:grid-cols-2 xl:grid-rows-2 xl:grid-cols-3">
        <a
          :href="newsLinks[0]"
          class="flex justify-center items-center"
        >
          <img
            :alt="newsNames[0]"
            :src="images[0]"
            class="w-full md:w-2xs"
          >
        </a>
        <a
          :href="newsLinks[1]"
          class="flex justify-center items-center"
        >
          <img
            :alt="newsNames[1]"
            :src="images[1]"
            class="w-full md:w-lg xl:w-3xs"
          >
        </a>
        <a
          :href="newsLinks[2]"
          class="flex justify-center items-center"
        >
          <img
            :alt="newsNames[2]"
            :src="images[2]"
            class="w-full md:w-sm xl:w-md"
          >
        </a>
        <a
          :href="newsLinks[3]"
          class="hidden md:flex justify-center items-center"
        >
          <img
            :alt="newsNames[3]"
            :src="images[3]"
            class="w-3xs lg:w-xl"
          >
        </a>
        <a
          :href="newsLinks[4]"
          class="hidden md:flex justify-center items-center"
        >
          <img
            :alt="newsNames[4]"
            :src="images[4]"
            class="w-3xs"
          >
        </a>
        <a
          :href="newsLinks[5]"
          class="hidden md:flex justify-center items-center"
        >
          <img
            :alt="newsNames[5]"
            :src="images[5]"
            class="w-2xs"
          >
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import db from '@data/news/db.json'
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const images = ref<string[]>([])
const newsNames = ref<string[]>([])
const newsLinks = ref<string[]>([])

const route = useRoute()

watchEffect(() => {
  const data = Object.values(db)
  data.sort((a: any, b: any) => {
    return (new Date(b.date)).getTime() - (new Date(a.date)).getTime()
  })

  const img = []
  const newsN = []
  const newsL = []
  for (const news of data) {
    for (const image of (news as any).images) {
      img.push(`https://cms.beijing.academy/news/${(news as any).id}/images/${image}`)
      newsN.push((news as any).title)
      newsL.push(`/${route.params.lang}/news/${(news as any).id}`)
      if (img.length >= 6) {
        break
      }
    }
    if (img.length >= 6) {
      break
    }
  }
  images.value = img
  newsNames.value = newsN
  newsLinks.value = newsL
})
</script>
