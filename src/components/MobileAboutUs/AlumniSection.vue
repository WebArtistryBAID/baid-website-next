<template>
  <section class="section">
    <MobileTitle>{{ $t('AboutUs.Alumni.Title') }}</MobileTitle>
    <MobileCard
      :border="false"
      :items="pageData.alumni"
    >
      <template #item="{ content, name }">
        <div class="flex flex-col h-auto text-black m-5">
          <p
            class="p-3 box-border overflow-auto"
            v-html="content"
          />
          <p class="text-right">
            ——{{ name }}
          </p>
          <!-- <img :src="image" class="w-40% object-cover" /> -->
        </div>
      </template>
    </MobileCard>
  </section>
</template>

<script lang="ts" setup>
import MobileCard from '../MobileCard.vue'
import MobileTitle from '../MobileTitle.vue'

import { inject } from 'vue'

const pageData = inject('data')
</script>
