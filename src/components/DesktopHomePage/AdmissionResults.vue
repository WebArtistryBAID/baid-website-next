<template>
  <div class="section">
    <NotFancyTitle
      cn="遇见BAID"
      color="red"
      en="Meet BAID"
    />
    <div class="flex items-center md:flex-row flex-col m-t-20">
      <div class="w-full bg-gray-300 h-60" />
      <div class="w-full h-max bg-[var(--standard-red)] p-8">
        <h3 class="text-white text-8">
          {{ $t('HomePage.AdmissionResults.TitleSub') }}
        </h3>
        <pre
          class="text-white op-90 m-b-10"
          v-html="pageData.admission_results_content"
        />
        <router-link
          :to="`${locale}/about`"
          class="text-white op-70 hover:op-100 active:op-80 transition-opacity font-sans"
        >
          Read More
        </router-link>
      </div>
      <div class="w-full bg-gray-300 h-90" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import NotFancyTitle from '../NotFancyTitle.vue'
import { useI18n } from 'vue-i18n'
import { inject } from 'vue'

const { locale } = useI18n({ useScope: 'global' })

const pageData = inject('data')
</script>
