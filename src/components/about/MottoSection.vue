<template>
  <div class="section !my-12 !md:my-24">
    <h2 class="text-3xl md:text-5xl font-bold !font-sans">
      {{ pageData.quote_title }}
    </h2>
    <div class="!mt-16">
      <div
        id="quotes"
        class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif"
        v-html="pageData.quote"
      />
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
  padding-left: 2rem;
  padding-right: 2rem;
}

@media (min-width: 640px) {
  #quotes {
    padding-left: 4rem;
    padding-right: 4rem;
  }
}

@media (min-width: 768px) {
  #quotes {
    padding-left: 6rem;
    padding-right: 6rem;
  }
}

#quotes:before {
  position: absolute;
  top: 0;
  left: 0.5rem;
  color: var(--standard-blue);
  font-size: inherit;
}

#quotes:after {
  position: absolute;
  bottom: -1rem;
  right: 1rem;
  color: var(--standard-blue);
  font-size: inherit;
}

@media (min-width: 640px) {
  #quotes:before {
    left: 1rem;
  }

  #quotes:after {
    right: 2rem;
  }
}

@media (min-width: 768px) {
  #quotes:before {
    left: 2rem;
  }

  #quotes:after {
    right: 3rem;
  }
}

#quotes:before {
  content: "“";
}

#quotes:after {
  content: "”";
}
</style>
