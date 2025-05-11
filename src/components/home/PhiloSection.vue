<template>
  <section aria-labelledby="philo-heading">
    <div class="mx-auto max-w-[77rem] px-5 md:px-0 mb-5 md:mb-0">
      <h2
        id="philo-heading"
        class="text-3xl md:text-5xl font-bold !font-sans"
      >
        {{ $t('home.philo') }}
      </h2>
    </div>
    <div class="bg-[var(--standard-blue)] mb-16">
      <div class="mx-auto max-w-[77rem]">
        <div
          aria-label="Philosophy values"
          class="hidden md:flex mt-10 m-auto justify-items-center"
          role="list"
        >
          <PhilosophyBlock
            v-for="(key, index) in blocks"
            :key="key"
            :active="active"
            :content="pageData[key + '_content']"
            :image="pageData[key + '_bg']"
            :index="index"
            :title="pageData[key + '_title']"
            role="listitem"
            tabindex="0"
            @activate="active = index"
            @deactivate="active = null"
          />
        </div>
        <div
          aria-label="Philosophy mobile values"
          class="flex gap-10 md:hidden p-10 text-white flex-col"
          role="list"
        >
          <PhilosophyBlockMobile
            v-for="key in blocks"
            :key="key"
            :content="pageData[key + '_content']"
            :title="pageData[key + '_title']"
            role="listitem"
            tabindex="0"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { inject, ref } from 'vue'
import PhilosophyBlock from './PhilosophyBlock.vue'
import PhilosophyBlockMobile from '@/components/home/PhilosophyBlockMobile.vue'

const pageData = inject('data')
const blocks = [ 'motto', 'spirit', 'literacy', 'pathway' ]

const active = ref(null)

// pageData[key + "_title, _content"]
</script>
