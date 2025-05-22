<template>
  <div class="hidden lg:block">
    <section aria-labelledby="philo-heading">
      <div class="bg-[var(--standard-blue)] mb-16 flex items-center">
        <div class="py-8 px-16 xl:px-24">
          <h2
            id="philo-heading"
            class="text-3xl font-bold !font-sans text-white w-1/2"
          >
            {{ $t('home.philo') }}
          </h2>
        </div>
        <div class="w-3/4">
          <div
            aria-label="Philosophies"
            class="flex m-auto justify-items-center"
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
        </div>
      </div>
    </section>
  </div>

  <div class="lg:hidden">
    <section aria-labelledby="philo-heading-mob">
      <div class="bg-[var(--standard-blue)] mb-16 flex">
        <div class="mx-auto max-w-[77rem]">
          <div class="px-10 pt-8">
            <h2
              id="philo-heading-mob"
              class="text-3xl font-bold !font-sans text-white"
            >
              {{ $t('home.philo') }}
            </h2>
          </div>

          <div
            aria-label="Philosophies"
            class="flex gap-10 p-10 text-white flex-col"
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
  </div>
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
