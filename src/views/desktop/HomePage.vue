<template>
  <div>
    <section id="firstSection">
      <FirstSection />
    </section>
    <section id="secondSection">
      <SecondSection />
    </section>
    <section id="educationPhilosophy">
      <EducationPhilosophy />
    </section>
    <section id="quote">
      <QuoteMessage
        :avatar="avatar"
        author="WHO"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sequi consequatur nisi non? Fugiat magnam dicta laboriosam mollitia corrupti sed! Repellat quidem quae ad iusto natus aliquam maxime iure ex!"
      />
    </section>
    <!-- <section id="admissionResults"> -->
    <!--   <AdmissionResults /> -->
    <!-- </section> -->
    <section
      v-if="news.length"
      id="news"
    >
      <HomeNews :news-list="news" />
    </section>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { computed, provide, ref, watchEffect } from 'vue'
import FirstSection from '@/components/DesktopHomePage/FirstSection.vue'
import SecondSection from '@/components/DesktopHomePage/SecondSection.vue'
import EducationPhilosophy from '@/components/DesktopHomePage/EducationPhilosophy.vue'
import QuoteMessage from '@/components/QuoteMessage.vue'
import HomeNews from '@/components/DesktopHomePage/HomeNews.vue'
import avatar from '@/assets/images/homeBg1.jpg'
import dbZH from '@data/zh-CN/db.json'
import dbEN from '@data/en-US/db.json'
import dataZH from '@data/zh-CN/Home.json'
import dataEN from '@data/en-US/Home.json'

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
