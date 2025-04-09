import { createI18n } from 'vue-i18n'
import messagesEN from '@/assets/locales/messages.en.json'
import messagesZH from '@/assets/locales/messages.zh.json'

export default createI18n({
  fallbackLocale: 'zh-CN',
  legacy: false,
  globalInjection: true,
  messages: {
    'en-US': messagesEN,
    'zh-CN': messagesZH
  }
})
