<template>
  <div>
    <section id="mission">
      <MissionSection />
    </section>
    <HeroSection />
    <section id="overview">
      <OverviewSection />
    </section>
    <section id="data">
      <DataSection />
    </section>
    <section
      id="accreditation"
      class="bg-[var(--standard-blue)]"
    >
      <AccreditationSection />
    </section>
    <section id="alumni">
      <AlumniSection />
    </section>
    <section id="motto">
      <MottoSection />
    </section>
  </div>
</template>

<script lang="ts" setup>
import OverviewSection from '@/components/DesktopAboutUs/OverviewSection.vue'
import AlumniSection from '@/components/DesktopAboutUs/AlumniSection.vue'
import AccreditationSection from '@/components/DesktopAboutUs/AccreditationSection.vue'
import DataSection from '@/components/DesktopAboutUs/DataSection.vue'

// Data
import dataZH from '@data/zh-CN/AboutUs.json'
import dataEN from '@data/en-US/AboutUs.json'

import { useI18n } from 'vue-i18n'
import { computed, provide } from 'vue'
import MissionSection from '@/components/DesktopAboutUs/MissionSection.vue'
import HeroSection from '@/components/DesktopAboutUs/HeroSection.vue'
import MottoSection from '@/components/DesktopAboutUs/MottoSection.vue'

const { locale } = useI18n({ useScope: 'global' })

// Provide page data
const data = computed(() => (locale.value === 'zh-CN' ? dataZH : dataEN))
provide('data', data)
</script>
