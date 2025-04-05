<template>
  <div>
    <MobileHead :img="content?.cover" />

    <section class="section">
      <h3 v-if="loading">
        Now loading...
      </h3>
      <div v-else>
        <article>
          <h1>{{ content.title }}</h1>
          <p />
        </article>
        <article v-html="content.body" />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import MobileHead from '@/components/MobileHead.vue'

import '@/assets/styles/article.css'
import { useRoute } from 'vue-router'
import { ref, watchEffect } from 'vue'

const route = useRoute()

const content = ref<any>(null)
const loading = ref(true)

watchEffect(async () => {
  loading.value = true
  content.value = (
    await import(
        `@/../data/${route.params.lang}/News-${route.params.title}.json`
      )
  ).default

  loading.value = false
})


// i18n

</script>

<style>
article img {
  width: 100%;
}
</style>
