<template>
  <div class="mt-24">
    <section>
      <img
        :src="content?.cover"
        alt="Cover of news article"
        class="w-full h-96 object-cover mb-5"
      >
      <h1 class="text-4xl text-white !font-sans">
        {{ content?.title }}
      </h1>
    </section>
    <section class="section">
      <article>
        <h1 class="!font-sans">
          {{ content?.title }}
        </h1>
        <p />
      </article>
      <article
        class="!mb-16"
        v-html="content?.body"
      />
    </section>
  </div>
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
