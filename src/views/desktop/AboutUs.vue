<template>
  <div>
    <CarouselHorizontal :images="data.carousel_images || []">
      <h1 class="text-18 font-sans text-white">
        {{ $t('views.AboutUs') }}
      </h1>
    </CarouselHorizontal>
    <section id="overview">
      <OverviewSection />
    </section>
    <section id="alumni">
      <AlumniSection />
    </section>
    <section
      id="accreditation"
      class="bg-[var(--standard-blue)]"
    >
      <AccreditationSection />
    </section>
    <section id="data">
      <div class="section important:p-b-0">
        <NotFancyTitle
          :cn="$t('AboutUs.Data.Title')"
          color="blue"
          en="Data"
        />
      </div>
      <div class="h-90 flex items-center">
        <DataSection />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import OverviewSection from '@/components/DesktopAboutUs/OverviewSection.vue'
import AlumniSection from '@/components/DesktopAboutUs/AlumniSection.vue'
import AccreditationSection from '@/components/DesktopAboutUs/AccreditationSection.vue'
import DataSection from '@/components/DesktopAboutUs/DataSection.vue'

import CarouselHorizontal from '@/components/CarouselHorizontal.vue'
import NotFancyTitle from '@/components/NotFancyTitle.vue'

// Data
import dataZH from '@data/zh-CN/AboutUs.json'
import dataEN from '@data/en-US/AboutUs.json'

import { useI18n } from 'vue-i18n'
import { computed, provide } from 'vue'

const { locale } = useI18n({ useScope: 'global' })

// Provide page data
const data = computed(() => (locale.value === 'zh-CN' ? dataZH : dataEN))
provide('data', data)
</script>
