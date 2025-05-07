<template>
  <div>
    <HeadSection />
    <HeroSection />
    <section id="curriculums">
      <CurriculumSection />
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
      <SpecialtiesSection />
    </section>
    <!-- Maybe we should add a section about the very good AP scores we have? -->
  </div>
</template>
<script lang="ts" setup>
import HeroSection from '@/components/academics/HeroSection.vue'
import HeadSection from '@/components/academics/HeadSection.vue'
import CurriculumSection from '@/components/academics/CurriculumSection.vue'
import CoursesSection from '@/components/academics/CoursesSection.vue'
import HighlightsSection from '@/components/academics/HighlightsSection.vue'
import SpecialtiesSection from '@/components/academics/SpecialtiesSection.vue'
import DataSection from '@/components/academics/DataSection.vue'

// Data
import dataZH from '@data/zh-CN/academics.json'
import dataEN from '@data/en-US/academics.json'

import { useI18n } from 'vue-i18n'
import { computed, provide } from 'vue'

const { locale } = useI18n({ useScope: 'global' })

// Provide page data
const data = computed(() => (locale.value === 'zh-CN' ? dataZH : dataEN))
provide('data', data)
</script>
