<template>
  <div>
    <HeadSection />
    <HeroSection />
    <SecondSection />
    <DataSection />
    <HighlightsSection />
    <div id="overview">
      <OverviewSection />
    </div>
    <DeadlineSection />
    <div id="application">
      <ApplicationSection />
    </div>
    <div id="contact">
      <ContactSection />
    </div>
  </div>
</template>
<script lang="ts" setup>
import HeadSection from '@/components/admissions/HeadSection.vue'
import HeroSection from '@/components/admissions/HeroSection.vue'
import SecondSection from '@/components/admissions/SecondSection.vue'
import HighlightsSection from '@/components/admissions/HighlightsSection.vue'
import DataSection from '@/components/admissions/DataSection.vue'
import OverviewSection from '@/components/admissions/OverviewSection.vue'
import DeadlineSection from '@/components/admissions/DeadlineSection.vue'
import ApplicationSection from '@/components/admissions/ApplicationSection.vue'
import ContactSection from '@/components/admissions/ContactSection.vue'

import dataZH from '@data/zh-CN/admissions.json'
import dataEN from '@data/en-US/admissions.json'

import { useI18n } from 'vue-i18n'
import { computed, provide } from 'vue'

const { locale } = useI18n({ useScope: 'global' })

// Provide page data
const data = computed(() => (locale.value === 'zh-CN' ? dataZH : dataEN))
provide('data', data)

// i18n

</script>
