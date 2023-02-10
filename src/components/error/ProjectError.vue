<script setup lang="ts">
defineProps({
  content: String,
});
</script>

<template>
  <div
    class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-5"
  >
    {{ content }}
  </div>
</template>
