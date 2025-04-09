<template>
  <div class="section !mt-24">
    <h2 class="text-3xl md:text-4xl font-bold !mb-8">
      Start Applying
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-8">
      <a
        class="flex items-center gap-8"
        href="https://ncstatic.clewm.net/rsrc/2025/0218/14/5303fc7f027f5f5bbe901721f68eb344.docx"
      >
        <div
          class="bg-[var(--standard-blue)] rounded-full w-16 h-16 flex-shrink-0 flex justify-center items-center text-white text-2xl"
        >
          1
        </div>
        <div>
          <h3 class="text-2xl font-bold mb-1">
            Download Application Form
          </h3>
          <p class="!text-lg">
            <span class="py-1 px-2 font-sans rounded-full bg-[var(--standard-blue)] text-white">Tap here</span> to
            download the application form.
          </p>
        </div>
      </a>
      <div class="flex items-center gap-8">
        <div
          class="bg-[var(--standard-red)] rounded-full w-16 h-16 flex-shrink-0 flex justify-center items-center text-white text-2xl"
        >
          2
        </div>
        <div>
          <h3 class="text-2xl font-bold mb-1">
            Fill and Submit Application
          </h3>
          <p class="!text-lg">
            Send your application via email to <span class="font-bold">baid<span class="at" />bjacademy.com.cn</span>.
          </p>
        </div>
      </div>
      <div class="flex items-center gap-8">
        <div
          class="bg-[var(--standard-blue)] md:bg-[var(--standard-red)] rounded-full w-16 h-16 flex-shrink-0 flex justify-center items-center text-white text-2xl"
        >
          3
        </div>
        <div>
          <h3 class="text-2xl font-bold mb-1">
            Next Steps
          </h3>
          <p class="!text-lg">
            Our admissions office will contact you regarding next steps.
          </p>
        </div>
      </div>
      <div class="flex items-center gap-8">
        <div
          class="bg-[var(--standard-red)] md:bg-[var(--standard-blue)] rounded-full w-16 h-16 flex-shrink-0 flex justify-center items-center text-white text-2xl"
        >
          4
        </div>
        <div>
          <h3 class="text-2xl font-bold mb-1">
            Decisions Released
          </h3>
          <p class="!text-lg">
            You will be notified if you have been accepted.
          </p>
        </div>
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
