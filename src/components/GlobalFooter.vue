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

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 mb-8">
        <div class="md:p-4 md:border-r md:border-white/10">
          <router-link :to="`/${locale}/about`">
            <p class="font-sans text-xl font-bold !mb-3">
              {{ $t('views.about') }}
            </p>
          </router-link>
          <div class="flex flex-col md:gap-2">
            <router-link :to="`/${locale}/about#overview`">
              <p>{{ $t('footer.about_overview') }}</p>
            </router-link>
            <router-link :to="`/${locale}/about#data`">
              <p>{{ $t('footer.about_data') }}</p>
            </router-link>
            <router-link :to="`/${locale}/about#accreditation`">
              <p>{{ $t('footer.about_accreditation') }}</p>
            </router-link>
            <router-link :to="`/${locale}/about#alumni`">
              <p>{{ $t('footer.about_alumni') }}</p>
            </router-link>
          </div>
        </div>
        <div class="md:p-4 md:border-r md:border-white/10">
          <router-link :to="`/${locale}/academics`">
            <p class="font-sans text-xl font-bold !mb-3">
              {{ $t('views.academics') }}
            </p>
          </router-link>
          <div class="flex flex-col md:gap-2">
            <router-link :to="`/${locale}/academics#curriculum`">
              <p>{{ $t('footer.academics_curriculum') }}</p>
            </router-link>
            <router-link :to="`/${locale}/academics#courses`">
              <p>{{ $t('footer.academics_courses') }}</p>
            </router-link>
            <router-link :to="`/${locale}/academics#highlights`">
              <p>{{ $t('footer.academics_highlights') }}</p>
            </router-link>
          </div>
        </div>
        <div class="md:p-4 md:border-r md:border-white/10">
          <router-link :to="`/${locale}/life`">
            <p class="font-sans text-xl font-bold !mb-3">
              {{ $t('views.life') }}
            </p>
          </router-link>
          <div class="flex flex-col md:gap-2">
            <router-link :to="`/${locale}/life#activities`">
              <p>{{ $t('footer.life_activities') }}</p>
            </router-link>
            <router-link :to="`/${locale}/life#clubs`">
              <p>{{ $t('footer.life_clubs') }}</p>
            </router-link>
          </div>
        </div>
        <div class="md:p-4">
          <router-link :to="`/${locale}/admissions`">
            <p class="font-sans text-xl font-bold !mb-3">
              {{ $t('views.admissions') }}
            </p>
          </router-link>
          <div class="flex flex-col md:gap-2">
            <router-link :to="`/${locale}/admissions#overview`">
              <p>{{ $t('footer.admissions_overview') }}</p>
            </router-link>
            <router-link :to="`/${locale}/admissions#application`">
              <p>{{ $t('footer.admissions_application') }}</p>
            </router-link>
            <router-link :to="`/${locale}/admissions#contact`">
              <p>{{ $t('footer.admissions_contact') }}</p>
            </router-link>
          </div>
        </div>
      </div>

      <div class="mb-5">
        <p>+86 159 1052 4064 {{ $t('footer.contact') }}</p>
        <p>baid<span class="at" />bjacademy.com.cn</p>
      </div>

      <p>{{ $t('footer.copyright') }}</p>
      <p>
        <a href="https://www.beijingacademy.com.cn">
          {{ $t('footer.chn') }}
        </a>
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
