<template>
  <section class="section">
    <MobileTitle>{{ $t('about.Accreditation.Title') }}</MobileTitle>
    <pre v-html="pageData.accreditation" />
    <MobileCard
      :autoplay="true"
      :border="false"
      :items="accs"
    >
      <template #item="{ image, name }">
        <div class="bg-yellow flex flex-col justify-center items-center h-45">
          <img
            :src="image"
            class="max-h-15 w-auto h-auto object-cover m-b-2"
          >
          <span class="!font-sans">{{ $t(name) }}</span>
        </div>
      </template>
    </MobileCard>
  </section>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import MobileCard from '../MobileCard.vue'
import MobileTitle from '../MobileTitle.vue'
import imgACT from '@/assets/images/about/act.svg'
import imgAP from '@/assets/images/about/ap.svg'
import imgCIS from '@/assets/images/about/CIS.png'
import imgApple from '@/assets/images/about/apple.svg'
import imgCam from '@/assets/images/about/cambridge.png'

const pageData = inject('data')

const accs = [
  {
    image: imgAP,
    name: 'about.Accreditation.AP'
  },
  {
    image: imgACT,
    name: 'about.Accreditation.ACT'
  },
  {
    image: imgCIS,
    name: 'about.Accreditation.CIS'
  },
  {
    image: imgCam,
    name: 'about.Accreditation.Cambridge'
  },
  {
    image: imgApple,
    name: 'about.Accreditation.Apple'
  }
]
</script>
