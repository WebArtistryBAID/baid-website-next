import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/unplugin-vue-i18n/vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    vueI18n({
      compositionOnly: false,
      include: [ './src/messages.en.json', './src/messages.zh.json' ]
    }),
  ],
  resolve: {
    alias: {
      '@data': path.resolve(__dirname, 'data'),
      '@': path.resolve(__dirname, 'src')
    },
  },
  define: {
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: false,
    __INTLIFY_PROD_DEVTOOLS__: false,
  },
})
