<template>
  <section class="section">
    <MobileTitle>{{ $t('HomePage.EducationPhilosophy.Title') }}</MobileTitle>
    <MobileCard
      :autoplay="true"
      :bg="swiperBg"
      :items="
        ['motto', 'spirit', 'key_competency', 'cultivation'].map((key) => ({
          key
        }))
      "
      @change="swiperBg = swiperBg === 'white' ? 'blue' : 'white'"
    >
      <template #item="{ key }">
        <div class="m-5 m-b-8">
          <h3
            :class="{
              'text-[var(--standard-blue)]': swiperBg === 'white',
              'text-white': swiperBg === 'blue'
            }"
            class="m-y-0"
          >
            {{ pageData[key + '_title'] }}
          </h3>
          <p
            :class="{
              'text-black': swiperBg === 'white',
              'text-white': swiperBg === 'blue'
            }"
            class="m-y-3"
            v-html="pageData[key + '_content']"
          />
        </div>
      </template>
    </MobileCard>
  </section>
</template>
<script lang="ts" setup>
import { inject, ref } from 'vue'
import MobileTitle from '../MobileTitle.vue'
import MobileCard from '../MobileCard.vue'

const pageData = inject('data')
const swiperBg = ref('white')
</script>
