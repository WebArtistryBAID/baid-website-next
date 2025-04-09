<template>
  <!-- 最小缩放到750px -->
  <div class="min-w-[var(--shrink-limit)] overflow-x-hidden">
    <GlobalHeader />
    <main>
      <slot />
    </main>
    <GlobalFooter />
  </div>
</template>

<script lang="ts" setup>
import GlobalHeader from '../components/GlobalHeader.vue'
import GlobalFooter from '../components/GlobalFooter.vue'
</script>
