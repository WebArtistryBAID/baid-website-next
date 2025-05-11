<template>
  <article
    :style="{ background: props.bg, color: props.light ? 'white' : 'black' }"
    class="h-[33rem] relative hover:shadow-md"
    :aria-labelledby="`news-title-${props.news.id}`"
    role="region"
  >
    <img
      :src="props.news.cover"
      :alt="`Cover image for ${props.news.title}`"
      class="h-64 object-cover w-full"
    >
    <div class="p-6">
      <h3
        :id="`news-title-${props.news.id}`"
        class="line-clamp-2 mb-1 !text-xl"
        tabindex="0"
      >
        {{ props.news.title }}
      </h3>
      <time
        :datetime="props.news.date"
        class="opacity-80 text-sm !mb-3"
      >{{ props.news.date }}
      </time>
      <p class="op-80 line-clamp-3 font-serif">
        {{ props.news.intro }}
      </p>
    </div>

    <ReadMore
      :color="props.light ? 'white' : 'black'"
      :to="props.news.href"
      text="newsArticle"
      class="absolute bottom-8 right-8"
      :aria-label="`Read more about ${props.news.title}`"
    />
  </article>
</template>

<script lang="ts" setup>
import ReadMore from '../ReadMore.vue'

const props = defineProps([ 'news', 'bg', 'light' ])
</script>
