<template>
  <div>
    <HeadSection />
    <HeroSection />
    <section id="curriculums">
      <CurriculumsIntroduction />
    </section>
    <section id="courses">
      <CoursesSection />
    </section>
    <section id="stats">
      <DataSection />
    </section>
    <section id="highlights">
      <HighlightsSection />
    </section>
    <section id="learning-methods">
      <LearningMethods />
    </section>
    <!-- Maybe we should add a section about the very good AP scores we have? -->
  </div>
</template>
<script lang="ts" setup>
import HeroSection from '@/components/DesktopEducationTeaching/HeroSection.vue'
import HeadSection from '@/components/DesktopEducationTeaching/HeadSection.vue'
import CurriculumsIntroduction from '@/components/DesktopEducationTeaching/CurriculumsIntroduction.vue'
import CoursesSection from '@/components/DesktopEducationTeaching/CoursesSection.vue'
import HighlightsSection from '@/components/DesktopEducationTeaching/HighlightsSection.vue'
import LearningMethods from '@/components/DesktopEducationTeaching/LearningMethods.vue'
import DataSection from '@/components/DesktopEducationTeaching/DataSection.vue'

// Data
import dataZH from '@data/zh-CN/Education.json'
import dataEN from '@data/en-US/Education.json'

import { useI18n } from 'vue-i18n'
import { computed, provide } from 'vue'

const { locale } = useI18n({ useScope: 'global' })

// Provide page data
const data = computed(() => (locale.value === 'zh-CN' ? dataZH : dataEN))
provide('data', data)
</script>
