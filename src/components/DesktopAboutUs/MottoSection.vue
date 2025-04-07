<template>
  <div class="section !my-24">
    <h2 class="font-bold font-sans !text-4xl mb-8">
      The BAID Value
    </h2>
    <!-- 让人成为人，让自己成为自己，让世界因我更美好。 -->
    <div>
      <p
        id="quotes"
        class="text-5xl font-serif"
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
