<template>
  <!-- 最小缩放到750px -->
  <div class="min-w-[var(--shrink-limit)] overflow-x-hidden">
    <DesktopHeader />
    <main>
      <slot />
    </main>
    <DesktopFooter />
  </div>
</template>

<script lang="ts" setup>
import DesktopHeader from '../components/DesktopHeader.vue'
import DesktopFooter from '../components/DesktopFooter.vue'
</script>
