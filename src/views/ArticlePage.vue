<template>
  <main
    class="mt-24"
    role="main"
  >
    <section aria-labelledby="article-title-heading">
      <img
        :alt="`Cover image for article: ${metadata?.title}`"
        :src="metadata?.cover"
        class="w-full h-96 object-cover mb-5 cover-image"
      >
      <h1
        id="article-title-heading"
        class="text-4xl text-white !font-sans"
      >
        {{ route.params.lang === 'zh-CN' ? metadata?.titleCN : metadata?.title }}
      </h1>
    </section>
    <section
      aria-labelledby="article-content-heading"
      class="section"
      role="region"
    >
      <article aria-labelledby="article-intro-heading">
        <h2
          id="article-intro-heading"
          class="!font-sans"
        >
          {{ route.params.lang === 'zh-CN' ? metadata?.titleCN : metadata?.title }}
        </h2>
        <p aria-hidden="true" />
      </article>
      <article
        id="article-content-heading"
        class="!mb-16"
      >
        <vue-markdown :source="content" />
      </article>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { ref, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import VueMarkdown from 'vue-markdown-render'
import '@/assets/styles/article.css'


// FIXME Image rendering has issues - the root is incorrect
const route = useRoute()

const content = ref<any>(null)
const metadata = ref<any>(null)
const loading = ref(true)

const { t } = useI18n({ useScope: 'global' })

watchEffect(async () => {
  loading.value = true
  metadata.value = (
      await import(
          `@data/news/${route.params.id}/metadata.json`
          )
  ).default
  content.value = (
      await import(
          `@data/news/${route.params.id}/content${route.params.lang === 'zh-CN' ? '-zh' : ''}.md?raw`
          )
  ).default
  console.log(metadata.value)
  console.log(content.value)
  document.title = route.params.lang === 'zh-CN' ? metadata.value.titleCN : metadata.value.title + ' | ' + t('brand')

  loading.value = false
})
</script>

<style scoped>
img:not(.cover-image) {
  max-width: 800px !important;
  width: 100% !important;
  height: auto !important;
  margin: 0 auto !important;
  display: block !important;
}
</style>
