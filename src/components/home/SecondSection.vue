<template>
  <section
    aria-labelledby="intro-heading"
    class="section"
  >
    <div class="max-w-xl">
      <h2
        id="intro-heading"
        class="text-3xl font-serif font-bold"
      >
        {{ $t('home.introTitle') }}
      </h2>
      <div
        class="text-xl"
        v-html="pageData.intro_text"
      />
      <div class="flex justify-end mt-5">
        <ReadMore
          text="views.about"
          to="/about"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import ReadMore from '../ReadMore.vue'
import { inject } from 'vue'

const pageData = inject('data')
</script>
