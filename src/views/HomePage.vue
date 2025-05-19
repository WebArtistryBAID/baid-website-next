<template>
  <div>
    <section id="firstSection">
      <HeroSection />
    </section>
    <section id="secondSection">
      <SecondSection />
    </section>
    <section id="highlightsSection">
      <HighlightsSection />
    </section>
    <section
      v-if="news.length"
      id="news"
    >
      <HomeNewsSection :news-list="news" />
    </section>
    <section id="educationPhilosophy">
      <PhiloSection />
    </section>
    <section id="quote">
      <QuoteSection
        :avatar="avatar"
        author="WHO"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sequi consequatur nisi non? Fugiat magnam dicta laboriosam mollitia corrupti sed! Repellat quidem quae ad iusto natus aliquam maxime iure ex!"
      />
    </section>
    <!-- <section id="admissionResults"> -->
    <!--   <AdmissionResults /> -->
    <!-- </section> -->
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { computed, provide, ref, watchEffect } from 'vue'
import HeroSection from '@/components/home/HeroSection.vue'
import SecondSection from '@/components/home/SecondSection.vue'
import PhiloSection from '@/components/home/PhiloSection.vue'
import QuoteSection from '@/components/home/QuoteSection.vue'
import HomeNewsSection from '@/components/home/HomeNewsSection.vue'
import db from '@data/news/db.json'
import dataZH from '@data/zh-CN/home.json'
import dataEN from '@data/en-US/home.json'
import HighlightsSection from '@/components/home/HighlightsSection.vue'

const { locale } = useI18n({ useScope: 'global' })

// Provide page data
const data = computed(() => (locale.value === 'zh-CN' ? dataZH : dataEN))
provide('data', data)

const route = useRoute()
const news = ref<any[]>([])

watchEffect(() => {
  const data = Object.values(db)

  // Sort by date
  data.sort((a: any, b: any) => {
    return (new Date(b.date)).getTime() - (new Date(a.date)).getTime()
  })
  news.value = data
})
</script>
