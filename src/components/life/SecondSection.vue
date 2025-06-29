<template>
  <section
    aria-labelledby="intro-heading"
    class="section"
  >
    <div class="max-w-xl">
      <h2
        id="intro-heading"
        class="text-3xl font-serif font-bold"
        v-html="pageData.intro_title"
      />
      <div
        class="text-xl"
        v-html="pageData.intro_text"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

const pageData = inject('data')
</script>
