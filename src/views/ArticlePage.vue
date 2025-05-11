<template>
  <main
    class="mt-24"
    role="main"
  >
    <section aria-labelledby="article-title-heading">
      <img
        :src="content?.cover"
        :alt="`Cover image for article: ${content?.title}`"
        class="w-full h-96 object-cover mb-5"
      >
      <h1
        id="article-title-heading"
        class="text-4xl text-white !font-sans"
      >
        {{ content?.title }}
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
          {{ content?.title }}
        </h2>
        <p aria-hidden="true" />
      </article>
      <article
        id="article-content-heading"
        class="!mb-16"
        v-html="content?.body"
      />
    </section>
  </main>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { ref, watchEffect } from 'vue'
import '@/assets/styles/article.css'
import { useI18n } from 'vue-i18n'

const route = useRoute()

const content = ref<any>(null)
const loading = ref(true)

const { t } = useI18n({ useScope: 'global' })

watchEffect(async () => {
  loading.value = true
  content.value = (
    await import(
        `@data/${route.params.lang}/news-${route.params.title}.json`
      )
  ).default
  document.title = content.value.title + ' | ' + t('brand')

  loading.value = false
})
</script>
