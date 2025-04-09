<template>
  <footer
    class="w-full !font-sans py-16 !text-white"
    style="background-color: var(--standard-blue)"
  >
    <div
      class="mx-auto mb-5"
      style="max-width: 77rem"
    >
      <p class="uppercase tracking-[0.3em] font-sans text-lg">
        BEIJING ACADEMY
      </p>

      <div class="flex w-full mb-8">
        <div class="w-1/4 p-8 border-r border-white/10">
          <p class="font-sans text-xl font-bold !mb-3">
            About Us
          </p>
          <div class="flex flex-col gap-2">
            <router-link :to="`/${locale}/about#overview`">
              <p>Overview</p>
            </router-link>
            <router-link :to="`/${locale}/about#data`">
              <p>BAID in Numbers</p>
            </router-link>
            <router-link :to="`/${locale}/about#accreditation`">
              <p>Accreditation</p>
            </router-link>
            <router-link :to="`/${locale}/about#alumni`">
              <p>Alumni</p>
            </router-link>
          </div>
        </div>
        <div class="w-1/4 p-8 border-r border-white/10">
          <p class="font-sans text-xl font-bold !mb-3">
            Academics
          </p>
          <div class="flex flex-col gap-2">
            <router-link :to="`/${locale}/academics#curriculum`">
              <p>The BAID Curriculum</p>
            </router-link>
            <router-link :to="`/${locale}/academics#courses`">
              <p>Courses</p>
            </router-link>
            <router-link :to="`/${locale}/academics#highlights`">
              <p>Learning, Reimagined</p>
            </router-link>
          </div>
        </div>
        <div class="w-1/4 p-8 border-r border-white/10">
          <p class="font-sans text-xl font-bold !mb-3">
            Student Life
          </p>
          <div class="flex flex-col gap-2">
            <router-link :to="`/${locale}/life#activities`">
              <p>Activities</p>
            </router-link>
            <router-link :to="`/${locale}/life#clubs`">
              <p>Clubs</p>
            </router-link>
          </div>
        </div>
        <div class="w-1/4 p-8">
          <p class="font-sans text-xl font-bold !mb-3">
            Admissions
          </p>
          <div class="flex flex-col gap-2">
            <router-link :to="`/${locale}/admissions#overview`">
              <p>Program Overview</p>
            </router-link>
            <router-link :to="`/${locale}/admissions#application`">
              <p>Application Process</p>
            </router-link>
            <router-link :to="`/${locale}/admissions#contact`">
              <p>Contact Us</p>
            </router-link>
          </div>
        </div>
      </div>

      <div class="mb-5">
        <p>+86 159 1052 4064 (Phone / WeChat)</p>
        <p>baid<span class="at" />bjacademy.com.cn</p>
      </div>

      <p>Copyright (c) Beijing Academy International Division, all rights reserved.</p>
      <p>
        <a href="https://www.beijingacademy.com.cn">Learn more about Beijing Academy's Chinese education offerings.</a>
      </p>
      <p><a href="https://beian.miit.gov.cn">京ICP备12345678号</a></p>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n({ useScope: 'global' })
</script>

<style scoped>
.at:after {
  content: '@';
}
</style>
