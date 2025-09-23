<template>
  <section
    aria-labelledby="overview-heading"
    class="section !py-16 !mb-24"
  >
    <h2
      id="overview-heading"
      class="text-4xl font-sans font-bold mb-5"
    >
      {{ $t('about.overview.title') }}
    </h2>
    <div
      class="w-full grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 !text-2xl md:!text-xl lg:!text-2xl"
      aria-label="Overview items"
      role="list"
    >
      <p
        role="listitem"
        tabindex="0"
      >
        {{ $t('about.overview.text1') }}
      </p>
      <p
        role="listitem"
        tabindex="0"
      >
        {{ $t('about.overview.text2') }}
      </p>
      <p
        role="listitem"
        tabindex="0"
      >
        {{ $t('about.overview.text3') }}
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

const pageData = inject('data')
</script>
