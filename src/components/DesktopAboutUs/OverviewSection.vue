<template>
  <div class="section">
    <NotFancyTitle
      :cn="$t('AboutUs.Overview.Title')"
      color="blue"
      en="Overview"
    />
    <pre v-html="pageData.overview" />
  </div>
</template>

<script lang="ts" setup>
import NotFancyTitle from '../NotFancyTitle.vue'
import { inject } from 'vue'

const pageData = inject('data')
</script>
