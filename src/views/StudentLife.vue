<template>
  <div>
    <HeroSection />
    <SecondSection />
    <section id="highlights">
      <HighlightsSection />
    </section>
    <MottoSection />
    <section id="activities">
      <ActivitiesSection />
    </section>
    <section id="clubs">
      <ClubsSection />
    </section>
  </div>
</template>

<script lang="ts" setup>
import HeroSection from '@/components/DesktopStudentLife/HeroSection.vue'
import SecondSection from '@/components/DesktopStudentLife/SecondSection.vue'
import HighlightsSection from '@/components/DesktopStudentLife/HighlightsSection.vue'
import MottoSection from '@/components/DesktopStudentLife/MottoSection.vue'
import ClubsSection from '@/components/DesktopStudentLife/ClubsSection.vue'
import ActivitiesSection from '@/components/DesktopStudentLife/ActivitiesSection.vue'

// Data
import dataZH from '@data/zh-CN/StudentLife.json'
import dataEN from '@data/en-US/StudentLife.json'

import { useI18n } from 'vue-i18n'
import { computed, provide } from 'vue'

const { locale } = useI18n({ useScope: 'global' })

// Provide page data
const data = computed(() => (locale.value === 'zh-CN' ? dataZH : dataEN))
provide('data', data)

// i18n

</script>
