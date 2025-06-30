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
        A better world starts here
      </h2>
      <div class="text-xl">
        At BAID, our students bring their passions to life through projects that solve real problems and make the world
        a little better — one innovation at a time.
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

const pageData = inject('data')
</script>
