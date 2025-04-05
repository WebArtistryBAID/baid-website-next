<template>
  <section>
    <div class="placeholder" />
    <Transition
      mode="out-in"
      name="fade"
    >
      <JoinNav
        v-if="isNav"
        class="section"
        @faculty="
          ;(isNav = false),
            (title = 'JoinUs.Faculty.Title'),
            (content = data.faculty),
            (join = 'JoinUs.Faculty.Join')
        "
        @student="
          ;(isNav = false),
            (title = 'JoinUs.Student.Title'),
            (content = data.student),
            (join = 'JoinUs.Student.Join')
        "
      />
      <JoinInfo
        v-else
        :content="$t(content)"
        :join="$t(join)"
        :title="$t(title)"
        @back="isNav = true"
      />
    </Transition>
  </section>
</template>

<script lang="ts" setup>
import JoinInfo from '../../components/MobileJoinUs/JoinInfo.vue'
import JoinNav from '../../components/MobileJoinUs/JoinNav.vue'

import { computed, ref } from 'vue'

import dataZH from '@data/zh-CN/JoinUs.json'
import dataEN from '@data/en-US/JoinUs.json'

import { useI18n } from 'vue-i18n'

const title = ref('')
const content = ref('')
const join = ref('')

const isNav = ref(true)

const { locale } = useI18n({ useScope: 'global' })

// Provide page data
const data = computed(() => (locale.value === 'zh-CN' ? dataZH : dataEN))


</script>
