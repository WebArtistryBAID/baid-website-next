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
        {{ $t('life.topTitle') }}
      </h2>
      <p
        class="text-xl"
      >
        {{ $t('life.topText') }}
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

const pageData = inject('data')
</script>
