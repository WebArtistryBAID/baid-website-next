<template>
  <div
    :class="{
      'left-full': !props.show,
      'left-0': props.show
    }"
    class="fixed top-0 w-full h-screen bg-[var(--standard-red)] transition-all-300 z-4 px-10 py-6 box-border"
  >
    <input
      v-model="text"
      class="h-10 w-[calc(100vw-6.8rem)] text-white bg-white bg-op-10 border-none rounded-xl px-5 box-border focus:bg-op-0 transition-all-300 placeholder-white op-80 focus:op-100 tracking-wide"
      placeholder="搜索内容"
      type="text"
    >

    <Transition
      mode="out-in"
      name="fade"
    >
      <div
        v-if="results.length"
        class="mt-15 text-white transition-opacity"
      >
        <h2 class="truncate">
          关键词 {{ text }} 的搜索结果
        </h2>
        <RouterLink
          v-for="result in results"
          :key="result.ref"
          :to="db[locale][result.ref].href"
          class="block bg-white bg-op-10 w-full rounded-xl pa-5 box-border !decoration-none mb-5"
          @click="emit('close')"
        >
          <h3 class="text-5 m0">
            {{ db[locale][result.ref].title }}
          </h3>
          <p class="op-80 mt-3">
            {{ db[locale][result.ref].intro }}
          </p>
        </RouterLink>
      </div>
      <div
        v-else-if="text.length"
        class="text-white mt-15"
      >
        <h2 class="truncate">
          找不到 {{ text }}
        </h2>
        <p class="op-80">
          可以看看
          <a href="https://www.bilibili.com/video/BV1GJ411x7h7">百度站内搜索</a>
          或者
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Google Insite</a>
          如何评价
        </p>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
// Identical to SearchBox

import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import lunr from 'lunr'
import { RouterLink } from 'vue-router'

const props = defineProps([ 'show' ])

const emit = defineEmits([ 'close' ])

const { locale } = useI18n({ useScope: 'global' })

const idx = {}

async function loadIndex(lang) {
  if (!idx[lang]) {
    // Load search index
    idx[lang] = lunr.Index.load(
      await import(`../../../data/${lang}/search.json`)
    )
    console.log('Loaded index for', lang)
  }
}

const db = {}

async function loadDb(lang) {
  if (!db[lang]) {
    // Load search index
    db[lang] = (await import(`../../../data/${lang}/db.json`)).default
    console.log('Loaded db for', lang)
  }
}

watch(locale, loadIndex)
watch(locale, loadDb)

const text = ref('')

const results = ref([])

watch(text, (text) => {
  if (idx[locale.value] && db[locale.value] && text.length > 0) {
    console.log('Searching for', text)
    results.value = idx[locale.value].search(text)
  } else {
    loadIndex(locale.value)
    loadDb(locale.value)
    results.value = []
  }
})
</script>

<style scoped>
input {
  outline: 3px solid rgba(255, 255, 255, 0.1);
}

input:focus {
  outline: 3px solid rgba(255, 255, 255, 0.3);
}

a {
  color: white !important;
  text-decoration: underline;
}
</style>
