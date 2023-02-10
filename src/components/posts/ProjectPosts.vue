<script setup lang="ts">
import { getAllPosts } from "@/services/api/posts";
import ProjectPost from "@/components/posts/ProjectPost.vue";
import Error from "@/components/error/projectError.vue";
import Loader from "@/components/loader/projectLoader.vue";
import { useFetch } from "@/composables/useFetch.js";
import { computed, ref } from "vue";
import POST_CONSTANTS from "@/constants/posts.json";
import type { IPost } from "@/types/Post";

const { getData, data, loading, error } = useFetch(getAllPosts, [] as IPost[]);

getData();
const count = ref<number | null>(POST_CONSTANTS.PREVIEW_COUNT);

const posts = computed(() => {
  return count.value ? data.value.slice(0, count.value) : data.value;
});
const loadAllPosts = () => {
  count.value = null;
};
</script>

<template>
  <article class="mt-5">
    <h2 class="text-2xl uppercase mb-10">Posts</h2>
    <Loader :title="`Loading Posts`" v-if="loading" />
    <Error :content="`We got an error fetching the posts`" v-else-if="error" />
    <template v-else>
      <div class="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
        <ProjectPost
          v-for="post in posts"
          :key="post.id"
          :title="post.title"
          :content="post.body"
        />
      </div>
      <button
        v-if="count"
        @click="loadAllPosts"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
      >
        Load All Posts
      </button>
    </template>
  </article>
</template>
