<template>
  <router-link :to="`/news/${props.news.id}`">
    <article
      :aria-labelledby="`news-title-${props.news.id}`"
      class="h-[33rem] group relative hover:bg-red-800 rounded-3xl bg-red-900 text-white transition-colors duration-100"
      role="region"
    >
      <div class="h-64 overflow-hidden">
        <img
          :alt="`Cover image for ${props.news.title}`"
          :src="props.news.cover"
          class="object-cover w-full h-full rounded-t-3xl transform transition-transform duration-300 ease-in-out group-hover:scale-105"
        >
      </div>
      <div class="p-6">
        <h3
          :id="`news-title-${props.news.id}`"
          class="line-clamp-2 mb-1 !text-2xl fancy-link link-white"
          tabindex="0"
        >
          {{ route.params.lang === 'zh-CN' ? props.news.titleCN : props.news.title }}
        </h3>
        <time
          :datetime="props.news.date"
          class="opacity-80 text-sm !mb-3"
        >{{ props.news.date }}
        </time>
        <p class="opacity-80 line-clamp-3">
          {{ route.params.lang === 'zh-CN' ? props.news.excerptCN : props.news.excerpt }}
        </p>
      </div>
    </article>
  </router-link>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const props = defineProps({
  news: {
    type: String,
    required: true
  }
})
</script>
