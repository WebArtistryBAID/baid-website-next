<template>
  <div class="font-sans">
    <MobileTitleSplash
      :bottom="t('EducationTeaching.Splash.Bottom')"
      :top="t('EducationTeaching.Splash.Top')"
      color="red"
    >
      <div class="placeholder" />
      <section class="section">
        <Curriculums />
        <LearningMethod />
        <StudentGuidance />
        <WonderfulMoment />
      </section>
    </MobileTitleSplash>
  </div>
</template>

<script lang="ts" setup>
import Curriculums from '../../components/MobileEducationTeaching/CurriculumsIntroduction.vue'
import LearningMethod from '../../components/MobileEducationTeaching/LearningMethod.vue'
import StudentGuidance from '../../components/MobileEducationTeaching/StudentGuidance.vue'
import WonderfulMoment from '../../components/MobileEducationTeaching/WonderfulMoments.vue'
import MobileTitleSplash from '../../components/MobileTitleSplash.vue'

import dataZH from '@data/zh-CN/Education.json'
import dataEN from '@data/en-US/Education.json'

import { useI18n } from 'vue-i18n'
import { computed, provide } from 'vue'

const { locale } = useI18n({ useScope: 'global' })

// Provide page data
const data = computed(() => (locale.value === 'zh-CN' ? dataZH : dataEN))
provide('data', data)

// i18n
const { t } = useI18n()
</script>
