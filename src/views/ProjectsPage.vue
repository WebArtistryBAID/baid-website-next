<template>
  <div id="main-section">
    <HeroSection />
    <SecondSection />
    <FeaturedSection />
    <CategorySection category="Social Activism" />
    <CategorySection category="Computer Science" />
    <CategorySection category="Biomedical Sciences" />
    <CategorySection category="Economics" />
    <CategorySection category="Arts" />
  </div>
</template>
<script lang="ts" setup>
import HeroSection from '@/components/projects/HeroSection.vue'
import SecondSection from '@/components/projects/SecondSection.vue'
import FeaturedSection from '@/components/projects/FeaturedSection.vue'
import CategorySection from '@/components/projects/CategorySection.vue'
</script>
