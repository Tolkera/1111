<script setup lang="ts">
import ProjectDashboard from "@/components/dashboard/ProjectDashboard.vue";
import { provide } from "vue";
import UserMocks from '@/mocks/user.json'
//mock user id
provide("user-id", UserMocks.userId);
</script>

<template>
  <main>
    <Suspense>
      <ProjectDashboard />
    </Suspense>
  </main>
</template>
