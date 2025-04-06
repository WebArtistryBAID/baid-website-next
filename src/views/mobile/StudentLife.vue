<template>
  <div class="w-screen h-[calc(100vh-5rem)] !font-sans">
    <div class="placeholder" />
    <SplashBlock
      :image="archery"
      :items="data.activities"
      title="特色活动"
    />
    <SplashBlock
      :image="camping"
      :items="data.clubs"
      title="学生社团"
    />
  </div>
</template>

<script lang="ts" setup>
import camping from '@/assets/images/StudentLife/Activities/Camping.jpg'
import archery from '@/assets/images/StudentLife/Activities/ZWTZY.jpg'
import SplashBlock from '@/components/MobileStudentLife/SplashBlock.vue'

import dataZH from '@data/zh-CN/StudentLife.json'
import dataEN from '@data/en-US/StudentLife.json'

import { useI18n } from 'vue-i18n'
import { computed, provide } from 'vue'

const { locale } = useI18n({ useScope: 'global' })

// Provide page data
const data = computed(() => (locale.value === 'zh-CN' ? dataZH : dataEN))
provide('data', data)
</script>
