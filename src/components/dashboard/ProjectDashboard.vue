<script setup lang="ts">
import ProjectPosts from "@/components/posts/ProjectPosts.vue";
import ProjectTodos from "@/components/todos/ProjectTodos.vue";
</script>

<template>
  <section class="text-center px-5 py-10 lg:px-20">
    <h1 class="text-3xl uppercase">Dashboard</h1>
    <ProjectPosts />
    <ProjectTodos />
  </section>
</template>
