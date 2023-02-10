<script setup lang="ts">
import { ref } from "vue";
defineProps({
  title: String,
});

const colors = ref(["bg-blue-400", "bg-green-400", "bg-black"]);
</script>

<template>
  <div
    role="progressbar"
    :aria-label="title"
    class="my-20 flex items-center justify-center space-x-2 animate-pulse"
  >
    <div
      :class="`w-8 h-8 ${color} rounded-full`"
      :key="color"
      v-for="color in colors"
    ></div>
  </div>
</template>
