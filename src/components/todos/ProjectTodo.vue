<script setup lang="ts">
import { computed, ref } from "vue";
import TODOS from "@/constants/todos.json";
const props = defineProps({
  status: String,
  title: String,
});

const todoStatus = ref(props.status);

const isCompleted = computed(() => {
  return todoStatus.value === TODOS.STATUS.COMPLETED;
});

const changeToDoStatus = () => {
  //TODO: api call instead of local toggle
  todoStatus.value =
    todoStatus.value === TODOS.STATUS.COMPLETED
      ? TODOS.STATUS.PENDING
      : TODOS.STATUS.COMPLETED;
};
</script>

<template>
  <article
    class="p-6 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
  >
    <label class="mb-2 text-left dark:text-white flex items-start">
      <input
        type="checkbox"
        class="mr-2 mt-1.5"
        @change="changeToDoStatus"
        :checked="isCompleted"
      />
      <span :class="isCompleted ? 'line-through ' : ''">{{ title }}</span>
    </label>
  </article>
</template>
