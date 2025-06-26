<template>
  <article
    :style="{ background: props.bg, color: props.light ? 'white' : 'black' }"
    class="h-[33rem] relative hover:shadow-md rounded-3xl"
    :aria-labelledby="`news-title-${props.news.id}`"
    role="region"
  >
    <img
      :src="props.news.cover"
      :alt="`Cover image for ${props.news.title}`"
      class="!h-64 object-cover w-full rounded-t-3xl"
    >
    <div class="p-6">
      <h3
        :id="`news-title-${props.news.id}`"
        class="line-clamp-2 mb-1 !text-xl"
        tabindex="0"
      >
        {{ route.params.lang === 'zh-CN' ? props.news.titleCN : props.news.title }}
      </h3>
      <time
        :datetime="props.news.date"
        class="opacity-80 text-sm !mb-3"
      >{{ props.news.date }}
      </time>
      <p class="op-80 line-clamp-3 font-serif">
        {{ route.params.lang === 'zh-CN' ? props.news.excerptCN : props.news.excerpt }}
      </p>
    </div>

    <ReadMore
      :color="props.light ? 'white' : 'black'"
      :to="`/${route.params.lang}/news/${props.news.id}`"
      text="newsArticle"
      class="absolute bottom-8 right-8"
      :aria-label="`Read more about ${props.news.title}`"
    />
  </article>
</template>

<script lang="ts" setup>
import ReadMore from '../ReadMore.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const props = defineProps([ 'news', 'bg', 'light' ])
</script>
