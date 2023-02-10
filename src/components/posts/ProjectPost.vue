<script setup lang="ts">
import { computed } from "vue";
import POST_CONSTANTS from "@/constants/posts.json";
import { truncateTextToWord } from "@/helpers/truncate";

const props = defineProps({
  content: String,
  title: String,
});

const truncatedTitle = computed(() =>
  truncateTextToWord(props.title!, POST_CONSTANTS.TITLE_PREVIEW_WORD_COUNT)
);
const truncatedContent = computed(() =>
  truncateTextToWord(props.content!, POST_CONSTANTS.CONTENT_PREVIEW_WORD_COUNT)
);
</script>

<template>
  <article
    class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
  >
    <h3
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      {{ truncatedTitle }}
    </h3>
    <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
      {{ truncatedContent }}
    </p>
  </article>
</template>
