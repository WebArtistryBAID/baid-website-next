<template>
  <section
    class="relative flex flex-col-reverse gap-5 md:flex-row mx-auto py-24 px-4 md:px-36 my-12 md:my-24 items-center"
    style="max-width: 77rem"
    aria-labelledby="principal-quote-heading"
  >
    <h2
      id="principal-quote-heading"
      class="sr-only"
    >
      Principal’s Quote
    </h2>
    <div class="w-full md:w-1/2">
      <p
        class="tracking-wide !text-3xl !mb-3"
        aria-label="Principal’s quote"
        role="region"
        tabindex="0"
        v-html="pageData.principal_quote"
      />
      <p class="w-full text-right font-sans text-xl">
        — {{ pageData.principal_name }}
      </p>
    </div>
    <div class="w-full md:w-1/2 flex justify-center items-center">
      <img
        :src="pageData.principal_avatar"
        :alt="`Portrait of ${pageData.principal_name}`"
        class="object-contain w-64 rounded-3xl"
      >
    </div>

    <!-- The quotes -->
    <div class="absolute left-4 top-0">
      <svg
        fill="none"
        height="53"
        viewBox="0 0 56.55765920826161 53"
        width="56.55765920826161"
      >
        <defs>
          <rect
            id="path_0"
            height="53"
            width="56.55765920826162"
            x="0"
            y="0"
          />
        </defs>
        <g
          opacity="1"
          transform="translate(0 0)  rotate(0 28.27882960413081 26.5)"
        >
          <mask
            id="bg-mask-0"
            fill="white"
          >
            <use xlink:href="#path_0" />
          </mask>
          <g mask="url(#bg-mask-0)">
            <g
              opacity="1"
              transform="translate(0 0)  rotate(0 28.27882960413081 26.5)"
            >
              <path
                id="path 1"
                d="M0,53L8.98,53C17.66,53 24.69,46.41 24.69,38.28L24.69,27.75L12.8,27.75C13.1,19.28 19.42,11.52 24.69,9.99L24.69,0C15.06,1.8 0,11.79 0,28.72L0,53Z "
                fill-rule="evenodd"
                opacity="1"
                style="fill: #122a28"
                transform="translate(31.867098865540292 0)  rotate(0 12.345280171360663 26.5)"
              />
              <path
                id="path 2"
                d="M0,53L8.83,53C17.51,53 24.54,46.41 24.54,38.28L24.54,27.75L12.8,27.75C13.1,19.28 19.42,11.52 24.69,9.99L24.69,0C15.06,1.8 0,11.79 0,28.72L0,53Z "
                fill-rule="evenodd"
                opacity="1"
                style="fill: #122a28"
                transform="translate(0 0)  rotate(0 12.345280171360665 26.5)"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
    <div class="absolute right-4 bottom-0">
      <svg
        fill="none"
        height="53"
        viewBox="0 0 56.55765920826161 53"
        width="56.55765920826161"
      >
        <defs>
          <rect
            id="path_0"
            height="53"
            width="56.55765920826162"
            x="0"
            y="0"
          />
        </defs>
        <g
          opacity="1"
          transform="translate(0 0)  rotate(0 28.27882960413081 26.5)"
        >
          <mask
            id="bg-mask-0"
            fill="white"
          >
            <use xlink:href="#path_0" />
          </mask>
          <g mask="url(#bg-mask-0)">
            <g
              opacity="1"
              transform="translate(0 0)  rotate(0 28.27882960413081 26.5)"
            >
              <path
                id="path 1"
                d="M24.69,0L15.71,0C7.03,0 0,6.59 0,14.72L0,25.25L11.89,25.25C11.59,33.72 5.27,41.48 0,43.01L0,53C9.64,51.2 24.69,41.21 24.69,24.28L24.69,0Z "
                fill-rule="evenodd"
                opacity="1"
                style="fill: #122a28"
                transform="translate(0 0)  rotate(0 12.345280171360665 26.5)"
              />
              <path
                id="path 2"
                d="M24.69,0L15.86,0C7.18,0 0.15,6.59 0.15,14.72L0.15,25.25L11.89,25.25C11.59,33.72 5.27,41.48 0,43.01L0,53C9.64,51.2 24.69,41.21 24.69,24.28L24.69,0Z "
                fill-rule="evenodd"
                opacity="1"
                style="fill: #122a28"
                transform="translate(31.867098865540356 0)  rotate(0 12.345280171360667 26.5)"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

const pageData = inject('data')
</script>
