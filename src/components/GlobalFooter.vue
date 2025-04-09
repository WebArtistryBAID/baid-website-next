<template>
  <footer
    class="w-full !font-sans py-16 px-5 !text-white"
    style="background-color: var(--standard-blue)"
  >
    <div
      class="mx-auto mb-5"
      style="max-width: 77rem"
    >
      <p class="uppercase tracking-[0.3em] !mb-5 font-sans text-lg">
        Beijing Academy
      </p>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div class="p-4 md:border-r md:border-white/10">
          <router-link :to="`/${locale}/about`">
            <p class="font-sans text-xl font-bold !mb-3">
              About Us
            </p>
          </router-link>
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
        <div class="p-4 md:border-r md:border-white/10">
          <router-link :to="`/${locale}/academics`">
            <p class="font-sans text-xl font-bold !mb-3">
              Academics
            </p>
          </router-link>
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
        <div class="p-4 md:border-r md:border-white/10">
          <router-link :to="`/${locale}/life`">
            <p class="font-sans text-xl font-bold !mb-3">
              Student Life
            </p>
          </router-link>
          <div class="flex flex-col gap-2">
            <router-link :to="`/${locale}/life#activities`">
              <p>Activities</p>
            </router-link>
            <router-link :to="`/${locale}/life#clubs`">
              <p>Clubs</p>
            </router-link>
          </div>
        </div>
        <div class="p-4">
          <router-link :to="`/${locale}/admissions`">
            <p class="font-sans text-xl font-bold !mb-3">
              Admissions
            </p>
          </router-link>
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
        <a href="https://www.beijingacademy.com.cn">Tap here to learn more about Beijing Academy's Chinese education
          offerings.</a>
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
