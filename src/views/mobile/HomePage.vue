<template>
  <HomeSplash>
    <!-- BG -->
    <HomeBackground />
    <MobileHead :img="firstImg">
      {{ $t('views.HomePage') }}
    </MobileHead>
    <section class="section">
      <MobileTitle>{{ data.introduction_title }}</MobileTitle>
      <MobileCard>
        <pre
          class="m-5 text-black"
          v-html="data.introduction"
        />
      </MobileCard>
      <VideoCard
        :cover="firstImg"
        class="m-b-0"
      />
    </section>
    <EducationPhilosophy />
    <PrincipalMessage />
    <NewsSection :news="news" />
  </HomeSplash>
</template>

<script lang="ts" setup>
import HomeBackground from '@/components/MobileHomePage/HomeBackground.vue'
import MobileCard from '@/components/MobileCard.vue'
import MobileHead from '@/components/MobileHead.vue'

import firstImg from '../../assets/images/HomePage/Autumn.jpg'
import VideoCard from '../../components/VideoCard.vue'
import MobileTitle from '../../components/MobileTitle.vue'
import { computed, provide, ref, watchEffect } from 'vue'
import NewsSection from '../../components/MobileHomePage/NewsSection.vue'
import PrincipalMessage from '../../components/MobileHomePage/PrincipalMessage.vue'
import HomeSplash from '../../components/MobileHomePage/HomeSplash.vue'

import { useI18n } from 'vue-i18n'
// Data
import dbZH from '@data/zh-CN/db.json'
import dbEN from '@data/en-US/db.json'
import dataZH from '@data/zh-CN/Home.json'
import dataEN from '@data/en-US/Home.json'
import { useRoute } from 'vue-router'
import EducationPhilosophy from '../../components/MobileHomePage/EducationPhilosophy.vue'

const { locale } = useI18n({ useScope: 'global' })

// Provide page data
const data = computed(() => (locale.value === 'zh-CN' ? dataZH : dataEN))
provide('data', data)

const route = useRoute()

const news = ref<never[]>([])

watchEffect(() => {
  let data: any
  if (route.params.lang === 'zh-CN') {
    data = Object.values(dbZH)
  } else {
    data = Object.values(dbEN)
  }

  // Sort by date
  data.sort((a: any, b: any) => {
    return (new Date(b.date)).getTime() - (new Date(a.date)).getTime()
  })
  news.value = data
})
</script>
