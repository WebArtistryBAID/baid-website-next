<template>
  <div class="section">
    <div
      class="text-3xl md:text-4xl"
      v-html="pageData.application_status_text"
    />
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

const pageData = inject('data')
</script>
