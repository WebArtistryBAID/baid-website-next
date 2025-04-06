<template>
  <footer
    :style="{ 'background-image': 'url(' + imgFooter + ')' }"
    class="w-full bg-black h-70 mt-45px !font-sans"
  >
    <div class="cover w-full h-full">
      <div class="flex text-white w-full h-full justify-center items-center">
        <div class="w-50% mx-24 flex items-center justify-end">
          <div>
            <a
              class="text-white !decoration-none"
              href="https://beian.miit.gov.cn"
              target="_blank"
            >
              京ICP备 - 1324564856
            </a>
            <p>@2024 BJZX All rights reserved.</p>
          </div>
        </div>
        <div class="w-50% mx-24 flex items-center">
          <img
            :src="logoFullWhite"
            alt="logo"
            class="w-sm inline object-cover"
          >
          <span class="m-x-2 text-8 font-bold">国际部</span>
        </div>
      </div>
    </div>
  </footer>
</template>
<script lang="ts" setup>
import logoFullWhite from '../assets/images/logoFullWhite.png'
import imgFooter from '../assets/images/Footer-blue.jpg'
</script>
<style>
footer {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.cover {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
