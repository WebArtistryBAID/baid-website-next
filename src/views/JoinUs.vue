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
import HeadSection from '@/components/DesktopJoinUs/HeadSection.vue'
import HeroSection from '@/components/DesktopJoinUs/HeroSection.vue'
import SecondSection from '@/components/DesktopJoinUs/SecondSection.vue'
import HighlightsSection from '@/components/DesktopJoinUs/HighlightsSection.vue'
import DataSection from '@/components/DesktopJoinUs/DataSection.vue'
import OverviewSection from '@/components/DesktopJoinUs/OverviewSection.vue'
import DeadlineSection from '@/components/DesktopJoinUs/DeadlineSection.vue'
import ApplicationSection from '@/components/DesktopJoinUs/ApplicationSection.vue'
import ContactSection from '@/components/DesktopJoinUs/ContactSection.vue'

import dataZH from '@data/zh-CN/JoinUs.json'
import dataEN from '@data/en-US/JoinUs.json'

import { useI18n } from 'vue-i18n'
import { computed, provide } from 'vue'

const { locale } = useI18n({ useScope: 'global' })

// Provide page data
const data = computed(() => (locale.value === 'zh-CN' ? dataZH : dataEN))
provide('data', data)

// i18n

</script>
