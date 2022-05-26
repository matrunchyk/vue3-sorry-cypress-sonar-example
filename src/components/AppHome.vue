<template>
  <article
    v-for="(post, index) in sortedPosts"
    :key="post.uuid"
    :data-cy="`post-${index}`"
    data-cy-type="post"
    class="bg-white mx-auto my-2 p-5 relative rounded shadow w-8/12"
  >
    <div
      v-if="currentUser"
      class="absolute cursor-pointer font-xs mt-2 right-3 text-pink-500 top-1"
      :data-cy="`remove-post-${index}`"
      title="Remove post"
      @click="removePost(post)"
    >
      [x]
    </div>
    <h2
      class="font-bold mt-1 text-center"
      :data-cy="`post-${index}-title`"
    >
      {{ post.title }}
    </h2>
    <h5
      :title="post.date"
      class="p-1 text-gray-700 text-right text-xs"
      :data-cy="`post-${index}-date`"
    >
      {{
        formatDate(post.date)
      }}
    </h5>
    <div
      :data-cy="`post-${index}-content`"
      v-html="nlToBr(post.content)"
    />
  </article>
</template>

<script setup>
import { computed } from 'vue';
import cloneDeep from 'lodash.clonedeep';
import useStore from '../useStore';
import { formatDate, nlToBr } from '../helpers';

const { posts, currentUser, removePost } = useStore();
const sortedPosts = computed(() => cloneDeep(posts.value).sort((a, b) => b.date.getTime() - a.date.getTime()));

</script>
