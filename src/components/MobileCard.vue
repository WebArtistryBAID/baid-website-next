<template>
  <div
    :class="{
      'bg-[var(--standard-blue)] !text-white': props.bg === 'blue',
      'bg-white !text-[var(--standard-blue)] border-[var(--standard-blue)]':
        props.bg === 'white',
      'border-solid': props.border
    }"
    class="rounded-4 min-h-35 w-full shadow-lg box-border overflow-hidden relative transition-colors m-y-5 text-black"
  >
    <slot v-if="!items" />
    <Swiper
      v-else
      :auto-height="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false
      }"
      :loop="true"
      :modules="modules"
      :slides-per-view="1"
      @slide-change="(e) => change(e.activeIndex)"
    >
      <SwiperSlide
        v-for="(item, index) in props.items"
        :key="index"
      >
        <slot
          :index="index"
          name="item"
          v-bind="item"
        />
      </SwiperSlide>
    </Swiper>
    <div
      v-if="items"
      class="absolute bottom-3 flex left-50% translate-x--50% z-1"
    >
      <!-- DOTS -->
      <div
        v-for="(_, index) in props.items"
        :key="index"
        :class="{
          'bg-[var(--standard-blue)]': props.bg === 'white',
          'bg-white': props.bg === 'blue',
          'w-6': current % props.items.length === index,
          'w-2 op-70': current % props.items.length != index
        }"
        class="h-2 m-x-1 rounded-1 transition-all z-1"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y, Autoplay } from 'swiper'
import 'swiper/css'

const props = defineProps({
  bg: {
    type: String,
    default: 'white'
  },
  border: {
    type: Boolean,
    default: true
  },
  items: {
    default: undefined
  },
  autoplay: {
    default: false
  }
})

const modules = computed(() => {
  if (props.autoplay) {
    return [ Autoplay, A11y ]
  } else {
    return [ A11y ]
  }
})

const current = ref(0)
const emit = defineEmits([ 'change' ])

function change(index) {
  if (current.value !== index) {
    current.value = index
    emit('change')
  }
}
</script>
