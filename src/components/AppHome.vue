<template>
  <article
      v-for="post in sortedPosts"
      data-cy="article"
      :data-cy-uuid="post.uuid"
      :key="post.uuid"
      class="rounded bg-white w-8/12 mx-auto my-2 shadow p-5 relative">
    <div
        v-if="currentUser"
        class="mt-2 font-xs text-pink-500 cursor-pointer absolute right-3 top-1"
        data-cy="remove-post"
        title="Remove post"
        @click="removePost(post)"
    >[x]
    </div>
    <h2 data-cy="article-title" class="font-bold text-center mt-1">{{ post.title }}</h2>
    <h5 data-cy="article-date"  class="text-xs text-gray-700 text-right p-1" :title="post.date">{{ formatDate(post.date) }}</h5>
    <div data-cy="article-content"  v-html="nlToBr(post.content)"/>
  </article>
</template>

<script setup>
import useStore from "../useStore";
import {formatDate, nlToBr} from "../helpers";
import {computed} from "vue";

const {posts, currentUser, removePost} = useStore();
const sortedPosts = computed(() => {
  return posts.value.sort((a, b) => b.date.getTime() - a.date.getTime())
})
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
