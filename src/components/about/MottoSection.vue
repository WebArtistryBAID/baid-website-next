<template>
  <div class="section !my-12 !md:my-24">
    <h2 class="font-bold font-sans !text-xl !md:text-2xl mb-4 md:mb-8">
      The BAID Value
    </h2>
    <!-- 让人成为人，让自己成为自己，让世界因我更美好。 -->
    <div>
      <p
        id="quotes"
        class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif"
      >
        Let people be who they are, let me be who I am, and let the world be better because of me. Better me, better
        world.
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
