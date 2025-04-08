<template>
  <div class="border-b border-gray-200">
    <div class="section">
      <p
        id="quotes"
        class="text-5xl font-serif"
      >
        Life at BAID feels like a shared journey — everyone's growing, exploring, and
        supporting each other every step of the way.
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

const pageData = inject('data')
</script>

<style scoped>
#quotes {
  position: relative;
  padding-left: 6rem;
  padding-right: 6rem;
}

#quotes:before {
  position: absolute;
  top: 0;
  left: 2rem;
  color: var(--standard-blue);
  font-size: inherit;
}

#quotes:after {
  position: absolute;
  bottom: -1rem;
  right: 3rem;
  color: var(--standard-blue);
  font-size: inherit;
}

#quotes:before {
  content: "“";
}

#quotes:after {
  content: "”";
}
</style>
