<template>
  <div>
    <CarouselHorizontal :images="data.carousel_images || []">
      <h1 class="text-18 font-sans text-white">
        {{ $t('views.JoinUs') }}
      </h1>
    </CarouselHorizontal>
    <div class="max-w-5xl mx-auto">
      <section id="apply">
        <JoinStudentSection />
      </section>
      <section id="faculty">
        <JoinFacultySection />
      </section>
    </div>
  </div>
</template>
<script lang="ts" setup>
import CarouselHorizontal from '@/components/CarouselHorizontal.vue'
import JoinStudentSection from '@/components/DesktopJoinUs/JoinStudentSection.vue'
import JoinFacultySection from '@/components/DesktopJoinUs/JoinFacultySection.vue'

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
