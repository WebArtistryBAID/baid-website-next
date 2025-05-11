<template>
  <footer
    aria-labelledby="footer-heading"
    class="w-full !font-sans py-16 px-5 !text-white"
    style="background-color: var(--standard-blue)"
  >
    <h2
      id="footer-heading"
      class="sr-only"
    >
      Footer
    </h2>
    <div
      class="mx-auto mb-5"
      style="max-width: 77rem"
    >
      <p class="uppercase tracking-[0.3em] !mb-5 font-sans text-lg">
        Beijing Academy
      </p>

      <nav
        aria-label="Footer navigation"
        role="navigation"
      >
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 mb-8">
          <div class="md:p-4 md:border-r md:border-white/10">
            <router-link :to="`/${locale}/about`">
              <h3 class="text-lg font-bold mb-2">
                {{ $t('views.about') }}
              </h3>
            </router-link>
            <ul
              class="flex flex-col md:gap-2"
              role="list"
            >
              <li role="listitem">
                <router-link :to="`/${locale}/about#overview`">
                  {{ $t('footer.about_overview') }}
                </router-link>
              </li>
              <li role="listitem">
                <router-link :to="`/${locale}/about#data`">
                  {{ $t('footer.about_data') }}
                </router-link>
              </li>
              <li role="listitem">
                <router-link :to="`/${locale}/about#accreditation`">
                  {{ $t('footer.about_accreditation') }}
                </router-link>
              </li>
              <li role="listitem">
                <router-link :to="`/${locale}/about#alumni`">
                  {{ $t('footer.about_alumni') }}
                </router-link>
              </li>
            </ul>
          </div>
          <div class="md:p-4 md:border-r md:border-white/10">
            <router-link :to="`/${locale}/academics`">
              <h3 class="text-lg font-bold mb-2">
                {{ $t('views.academics') }}
              </h3>
            </router-link>
            <ul
              class="flex flex-col md:gap-2"
              role="list"
            >
              <li role="listitem">
                <router-link :to="`/${locale}/academics#curriculum`">
                  {{ $t('footer.academics_curriculum') }}
                </router-link>
              </li>
              <li role="listitem">
                <router-link :to="`/${locale}/academics#courses`">
                  {{ $t('footer.academics_courses') }}
                </router-link>
              </li>
              <li role="listitem">
                <router-link :to="`/${locale}/academics#highlights`">
                  {{ $t('footer.academics_highlights') }}
                </router-link>
              </li>
            </ul>
          </div>
          <div class="md:p-4 md:border-r md:border-white/10">
            <router-link :to="`/${locale}/life`">
              <h3 class="text-lg font-bold mb-2">
                {{ $t('views.life') }}
              </h3>
            </router-link>
            <ul
              class="flex flex-col md:gap-2"
              role="list"
            >
              <li role="listitem">
                <router-link :to="`/${locale}/life#activities`">
                  {{ $t('footer.life_activities') }}
                </router-link>
              </li>
              <li role="listitem">
                <router-link :to="`/${locale}/life#clubs`">
                  {{ $t('footer.life_clubs') }}
                </router-link>
              </li>
            </ul>
          </div>
          <div class="md:p-4">
            <router-link :to="`/${locale}/admissions`">
              <h3 class="text-lg font-bold mb-2">
                {{ $t('views.admissions') }}
              </h3>
            </router-link>
            <ul
              class="flex flex-col md:gap-2"
              role="list"
            >
              <li role="listitem">
                <router-link :to="`/${locale}/admissions#overview`">
                  {{ $t('footer.admissions_overview') }}
                </router-link>
              </li>
              <li role="listitem">
                <router-link :to="`/${locale}/admissions#application`">
                  {{ $t('footer.admissions_application') }}
                </router-link>
              </li>
              <li role="listitem">
                <router-link :to="`/${locale}/admissions#contact`">
                  {{ $t('footer.admissions_contact') }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <address class="mb-5">
        <p>+86 159 1052 4064 {{ $t('footer.contact') }}</p>
        <p>baid<span class="at" />bjacademy.com.cn</p>
      </address>

      <p>{{ $t('footer.copyright') }}</p>
      <p>
        <a href="https://www.beijingacademy.com.cn">
          {{ $t('footer.chn') }}
        </a>
      </p>
      <!--<p><a href="https://beian.miit.gov.cn">京ICP备12345678号</a></p>-->
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n({ useScope: 'global' })
</script>

<style scoped>
.at:after {
  content: '@';
}
</style>
