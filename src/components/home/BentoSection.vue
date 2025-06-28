<template>
  <div class="w-full p-3">
    <h2
      aria-level="2"
      class="uppercase text-center tracking-widest mb-8 text-3xl"
      role="heading"
      v-html="$t('home.atAGlance')"
    />

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 auto-rows-min gap-x-6 gap-y-5 mx-auto"
      style="max-width: 77rem"
    >
      <div
        class="col-span-1 md:col-span-3 row-span-5 lg:col-start-1 lg:col-span-3 lg:row-start-1 lg:row-span-5 bg-red-700 rounded-3xl p-8 flex text-center justify-center items-center flex-col text-white"
      >
        <h3
          aria-level="3"
          class="text-4xl font-bold leading-tight mb-5"
          role="heading"
          v-html="$t('home.bento.motto')"
        />

        <img
          alt="Beijing Academy icon"
          loading="lazy"
          class="w-48 h-48 mb-5 p-5 bg-white rounded-full"
          src="/icon.png"
        >

        <p v-html="$t('home.bento.mottoText')" />
      </div>

      <div
        class="col-span-1 md:col-span-5 row-span-4 lg:col-start-4 lg:col-span-5 lg:row-start-1 lg:row-span-4 from-yellow-500/5 to-gray-50 bg-gradient-to-br rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8"
      >
        <div>
          <h3
            aria-level="3"
            class="text-2xl leading-tight mb-3"
            role="heading"
            v-html="$t('home.bento.outcome')"
          />
          <p
            class="opacity-80 text-sm"
            v-html="$t('home.bento.outcomeText')"
          />
        </div>
        <div>
          <img
            :src="stanford"
            alt="Campus of Stanford University, where students from BAID have been admitted"
            loading="lazy"
            class="rounded-3xl w-2xl"
          >
        </div>
      </div>

      <div
        class="col-span-1 md:col-span-3 row-span-1 lg:col-start-1 lg:col-span-3 lg:row-start-6 lg:row-span-1 from-orange-500/5 to-gray-50 bg-gradient-to-br rounded-3xl p-8 flex items-center gap-3"
      >
        <h3
          aria-level="3"
          class="text-lg"
          role="heading"
          v-html="$t('home.bento.faculty')"
        />
        <div
          aria-hidden="true"
          class="relative flex justify-start pr-5 items-center"
        >
          <img
            :src="lj"
            alt=""
            loading="lazy"
            class="w-20 h-20 rounded-full relative z-10 translate-x-8 p-1 bg-yellow-100"
          >
          <img
            :src="rj"
            alt=""
            loading="lazy"
            class="w-20 h-20 rounded-full relative z-20 p-1 bg-amber-100"
          >
          <img
            :src="lx"
            alt=""
            loading="lazy"
            class="w-20 h-20 rounded-full relative z-30 -translate-x-8 p-1 bg-red-100"
          >
        </div>
      </div>

      <div
        class="col-span-1 md:col-span-3 row-span-2 lg:col-start-1 lg:col-span-3 lg:row-start-7 lg:row-span-2 bg-gray-50 rounded-3xl flex items-center gap-3 overflow-hidden"
      >
        <img
          :src="countries"
          alt="Hong Kong SAR China, Australia, Japan, United States, Canada, and United Kingdom"
          loading="lazy"
          class="h-48 transform translate-y-5 -translate-x-5"
        >
        <div
          class="py-8 pr-8"
        >
          <h3
            aria-level="3"
            class="text-lg mb-1 font-bold"
            role="heading"
            v-html="$t('home.bento.countriesTitle')"
          />
          <p
            class="opacity-80 text-sm"
            v-html="$t('home.bento.countriesText')"
          />
        </div>
      </div>

      <div
        class="col-span-1 md:col-span-3 row-span-4 lg:col-start-4 lg:col-span-3 lg:row-start-5 lg:row-span-4 from-red-500/5 to-gray-50 bg-gradient-to-br rounded-3xl overflow-hidden"
      >
        <div class="relative w-full h-48 lg:h-1/2">
          <div
            aria-hidden="true"
            class="flex w-full h-full justify-center items-center text-center"
          >
            <svg
              class="h-24 w-24 bg-red-600 rounded-full p-6"
              fill="none"
              stroke="white"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <svg
            class="-z-10 absolute top-0 left-0"
            height="100%"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="dotPattern"
                height="20"
                patternUnits="userSpaceOnUse"
                width="20"
                x="0"
                y="0"
              >
                <circle
                  cx="3"
                  cy="3"
                  fill="#ccc"
                  r="1"
                />
              </pattern>
              <linearGradient
                id="fadeGrad"
                gradientUnits="objectBoundingBox"
                x1="0"
                x2="0"
                y1="0"
                y2="1"
              >
                <stop
                  offset="60%"
                  stop-color="white"
                  stop-opacity="1"
                />
                <stop
                  offset="100%"
                  stop-color="white"
                  stop-opacity="0"
                />
              </linearGradient>
              <mask
                id="fadeMask"
                maskContentUnits="objectBoundingBox"
                maskUnits="objectBoundingBox"
              >
                <rect
                  fill="url(#fadeGrad)"
                  height="1"
                  width="1"
                  x="0"
                  y="0"
                />
              </mask>
            </defs>
            <rect
              fill="url(#dotPattern)"
              height="100%"
              mask="url(#fadeMask)"
              width="100%"
            />
          </svg>
        </div>

        <div class="px-8 flex items-center justify-center flex-col text-center">
          <h3
            aria-level="3"
            class="text-2xl mb-1"
            role="heading"
            v-html="$t('home.bento.academicsTitle')"
          />
          <p
            class="opacity-80 text-sm"
            v-html="$t('home.bento.academicsText')"
          />
        </div>
      </div>

      <div
        :style="{backgroundImage: `url(${life})`}"
        class="hidden sm:flex col-span-1 md:col-span-2 row-span-2 lg:col-start-7 lg:col-span-2 lg:row-start-5 lg:row-span-2 rounded-3xl p-8 bg-cover flex-col justify-end"
      >
        <h3
          aria-level="3"
          class="text-white text-center"
          role="heading"
          v-html="$t('home.bento.life')"
        />
      </div>

      <div
        class="col-span-1 md:col-span-2 row-span-2 lg:col-start-7 lg:col-span-2 lg:row-start-7 lg:row-span-2 from-sky-500/5 to-gray-50 bg-gradient-to-br rounded-3xl p-8 flex justify-center items-center flex-col text-center"
      >
        <div class="mb-3">
          <svg
            class="w-20 h-20 text-blue-500"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <h3
          aria-level="3"
          class="text-lg"
          role="heading"
          v-html="$t('home.bento.diversity')"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import countries from '@/assets/images/home/bento/countries.png'
import lj from '@/assets/images/home/bento/lj.jpg'
import lx from '@/assets/images/home/bento/lx.jpg'
import rj from '@/assets/images/home/bento/rj.jpg'
import stanford from '@/assets/images/home/bento/stanford.webp'
import life from '@/assets/images/home/highlights/life.webp'

// pageData[key + "_title, _content"]
</script>
