<template>
  <div
    :style="{ backgroundImage: `url(${pageData.contact_image})` }"
    class="bg-cover"
    aria-labelledby="contact-heading"
    role="region"
  >
    <section
      aria-labelledby="contact-heading"
      class="section mt-12 md:!mt-24 py-12 md:!py-24"
    >
      <h2
        id="contact-heading"
        class="text-4xl font-bold mb-5"
      >
        {{ pageData.contact_title }}
      </h2>
      <p class="text-2xl !mb-3">
        {{ pageData.contact_description }}
      </p>
      <div class="rounded-3xl p-4 md:p-5 bg-white max-w-md w-full">
        <p class="font-bold">
          {{ $t('admissions.email') }}
        </p>
        <ul
          aria-label="Contact emails"
          class="list-inside list-disc mb-2"
          role="list"
        >
          <li
            v-for="email in pageData.contact_emails"
            :key="email.id"
            role="listitem"
            tabindex="0"
          >
            {{ email.email }}
          </li>
        </ul>
        <p class="font-bold">
          {{ $t('admissions.phone') }}
        </p>
        <ul
          aria-label="Contact phone numbers"
          class="list-inside list-disc"
          role="list"
        >
          <li
            v-for="phone in pageData.contact_phones"
            :key="phone.id"
            role="listitem"
            tabindex="0"
          >
            {{ phone.phone }}
          </li>
        </ul>
      </div>
    </section>
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
