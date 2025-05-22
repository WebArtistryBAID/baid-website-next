<template>
  <div>
    <HeroSection />
    <SecondSection />
    <section id="highlights">
      <HighlightsSection />
    </section>
    <MottoSection />
    <PicturesSection />
    <section id="activities">
      <ActivitiesSection />
    </section>
    <section id="clubs">
      <ClubsSection />
    </section>
  </div>
</template>

<script lang="ts" setup>
import HeroSection from '@/components/life/HeroSection.vue'
import SecondSection from '@/components/life/SecondSection.vue'
import HighlightsSection from '@/components/life/HighlightsSection.vue'
import MottoSection from '@/components/life/MottoSection.vue'
import ClubsSection from '@/components/life/ClubsSection.vue'
import ActivitiesSection from '@/components/life/ActivitiesSection.vue'

// Data
import dataZH from '@data/zh-CN/life.json'
import dataEN from '@data/en-US/life.json'

import { useI18n } from 'vue-i18n'
import { computed, provide } from 'vue'
import PicturesSection from '@/components/home/PicturesSection.vue'

const { locale } = useI18n({ useScope: 'global' })

// Provide page data
const data = computed(() => (locale.value === 'zh-CN' ? dataZH : dataEN))
provide('data', data)

// i18n

</script>
