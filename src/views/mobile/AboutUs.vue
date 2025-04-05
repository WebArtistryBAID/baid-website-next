<template>
  <MobileTitleSplash
    :bottom="$t('AboutUs.Splash.Bottom')"
    :top="$t('AboutUs.Splash.Top')"
    color="blue"
  >
    <MobileHead :img="imgHeader1" />
    <section>
      <OverviewSection />
      <AlumniSection />
      <AccreditationSection />
      <DataSection />
    </section>
  </MobileTitleSplash>
</template>

<script lang="ts" setup>
import OverviewSection from '../../components/MobileAboutUs/OverviewSection.vue'
import AlumniSection from '../../components/MobileAboutUs/AlumniSection.vue'
import DataSection from '../../components/MobileAboutUs/DataSection.vue'
import AccreditationSection from '../../components/MobileAboutUs/AccreditationSection.vue'
import MobileTitleSplash from '../../components/MobileTitleSplash.vue'
import MobileHead from '../../components/MobileHead.vue'
import imgHeader1 from '../../assets/images/AboutUs/Header_1.jpg'

import dataZH from '@data/zh-CN/AboutUs.json'
import dataEN from '@data/en-US/AboutUs.json'

import { useI18n } from 'vue-i18n'
import { computed, provide } from 'vue'

const { locale } = useI18n({ useScope: 'global' })

// Provide page data
const data = computed(() => (locale.value === 'zh-CN' ? dataZH : dataEN))
provide('data', data)

// i18n

</script>
