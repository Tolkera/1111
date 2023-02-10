<script setup lang="ts">
import ProjectDashboard from "@/components/dashboard/ProjectDashboard.vue";
</script>

<template>
  <main>
    <Suspense>
      <ProjectDashboard />
    </Suspense>
  </main>
</template>
