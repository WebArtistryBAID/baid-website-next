<template>
  <MobileSplash>
    <MobileHeader />
    <main>
      <slot />
    </main>
  </MobileSplash>
  <!-- <MobileFooter /> -->
</template>

<script lang="ts" setup>
// import MobileFooter from '../components/MobileFooter.vue'
import MobileHeader from '../components/MobileHeader.vue'
import MobileSplash from '../components/MobileSplash.vue'
</script>
