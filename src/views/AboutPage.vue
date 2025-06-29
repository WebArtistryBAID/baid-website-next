<template>
  <div>
    <div id="main-content">
      <section id="mission">
        <MissionSection />
      </section>
    </div>
    <HeroSection />
    <section id="overview">
      <OverviewSection />
    </section>
    <section id="data">
      <DataSection />
    </section>
    <section
      id="accreditation"
      class="bg-red-900"
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
import OverviewSection from '@/components/about/OverviewSection.vue'
import AlumniSection from '@/components/about/AlumniSection.vue'
import AccreditationSection from '@/components/about/AccreditationSection.vue'
import DataSection from '@/components/about/DataSection.vue'

// Data
import dataZH from '@data/zh-CN/about.json'
import dataEN from '@data/en-US/about.json'

import { useI18n } from 'vue-i18n'
import { computed, provide } from 'vue'
import MissionSection from '@/components/about/MissionSection.vue'
import HeroSection from '@/components/about/HeroSection.vue'
import MottoSection from '@/components/about/MottoSection.vue'

const { locale } = useI18n({ useScope: 'global' })

// Provide page data
const data = computed(() => (locale.value === 'zh-CN' ? dataZH : dataEN))
provide('data', data)
</script>
