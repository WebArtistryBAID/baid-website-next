<template>
  <div
    :style="{ backgroundImage: `url(${bg})` }"
    class="bg-cover"
  >
    <div class="section mt-12 md:!mt-24 py-12 md:!py-24">
      <h2 class="text-4xl font-bold mb-5">
        {{ pageData.contact_title }}
      </h2>
      <p class="text-2xl font-serif !mb-3">
        {{ pageData.contact_description }}
      </p>
      <div class="rounded-3xl p-4 md:p-5 bg-white max-w-md w-full">
        <p class="font-bold">
          {{ $t('admissions.email') }}
        </p>
        <ul class="list-inside list-disc mb-2">
          <li
            v-for="email in pageData.contact_emails"
            :key="email.id"
          >
            {{ email.email }}
          </li>
        </ul>
        <p class="font-bold">
          {{ $t('admissions.phone') }}
        </p>
        <ul class="list-inside list-disc">
          <li
            v-for="phone in pageData.contact_phones"
            :key="phone.id"
          >
            {{ phone.phone }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

const pageData = inject('data')
</script>

<style scoped>
.at:after {
  content: '@';
}
</style>
