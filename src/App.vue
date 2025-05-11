<template>
  <div class="">
    <component :is="GlobalLayout">
      <router-view v-slot="{ Component }">
        <transition
          mode="out-in"
          name="fade"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </component>
  </div>
</template>

<script lang="ts" setup>
import GlobalLayout from './layouts/GlobalLayout.vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { locale, t } = useI18n({ useScope: 'global' })

const router = useRouter()
router.beforeEach((to) => {
  const lang = to.params.lang || navigator.language
  locale.value = lang as string
  document.title = t('views.' + (to.name as string)) + ' | ' + t('brand')

  if (to.path === '/') {
    document.title = 'Beijing Academy International Division'
    return { path: '/' + lang + '/' }
  }
})
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.fade-enter-active,
.fade-leave-active {
  /* transition: opacity 0.5s ease; */
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
