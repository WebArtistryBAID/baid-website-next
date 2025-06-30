<template>
  <section
    class="mx-auto my-24 section"
    style="max-width: 77rem"
  >
    <h2 class="text-3xl font-bold !mb-5">
      {{ props.category }}
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  </section>
</template>
<script lang="ts" setup>
import ProjectCard from '@/components/projects/ProjectCard.vue'

const props = defineProps({
  category: {
    type: String,
    required: true
  }
})
</script>
