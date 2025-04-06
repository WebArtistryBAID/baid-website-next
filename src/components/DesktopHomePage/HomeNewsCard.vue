<template>
  <div
    :style="{ background: props.bg, color: props.light ? 'white' : 'black' }"
    class="h-[33rem] relative hover:shadow-md"
  >
    <img
      :src="props.news.cover"
      alt="Cover image for news"
      class="h-64 object-cover w-full"
    >
    <div class="p-6">
      <h3 class="line-clamp-2 mb-1 !text-xl">
        {{ props.news.title }}
      </h3>
      <p class="opacity-80 text-sm !mb-3">
        {{ props.news.date }}
      </p>
      <p class="op-80 line-clamp-3 !font-serif">
        {{ props.news.intro }}
      </p>
    </div>

    <ReadMore
      :color="props.light ? 'white' : 'black'"
      :to="props.news.href"
      class="absolute bottom-8 right-8"
    />
  </div>
</template>

<script lang="ts" setup>
import ReadMore from '../ReadMore.vue'

const props = defineProps([ 'news', 'bg', 'light' ])
</script>
