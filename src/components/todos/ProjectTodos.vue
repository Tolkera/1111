<script setup lang="ts">
import TodoService from "@/services/api/todos";
import Error from "@/components/error/ProjectError.vue";
import Loader from "@/components/loader/ProjectLoader.vue";
import { useFetch } from "@/composables/useFetch.js";
import { computed, ref, inject } from "vue";
import type { ITodo } from "@/types/Todo";
import Todo from "@/components/todos/ProjectTodo.vue";
const { getData, data, loading, error } = useFetch(
  TodoService.getToDos,
  [] as ITodo[]
);
getData();

const userId = inject("user-id");

const todos = computed(() => {
  return data.value.filter((i) => i.user_id === userId);
});
</script>

<template>
  <article class="mt-10">
    <h2 class="text-2xl uppercase mb-10">Todos</h2>
    <Loader :title="`Loading Your Todos`" v-if="loading" />
    <Error
      :content="`We got an error fetching your todos`"
      v-else-if="!!error"
    />
    <template v-else>
      <div class="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
        <Todo
          v-for="item in todos"
          :key="item.id"
          :title="item.title"
          :status="item.status"
        />
      </div>
    </template>
  </article>
</template>
