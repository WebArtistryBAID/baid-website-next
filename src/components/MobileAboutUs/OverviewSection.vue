<template>
  <section class="section">
    <MobileTitle>{{ $t('AboutUs.Overview.Title') }}</MobileTitle>
    <pre v-html="pageData.overview" />
  </section>
</template>

<script lang="ts" setup>
import MobileTitle from '../MobileTitle.vue'

import { inject } from 'vue'

const pageData = inject('data')
</script>
