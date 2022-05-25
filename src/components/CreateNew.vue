<template>
  <form autocomplete="off">
    <div class="bg-white flex flex-col gap-7 mt-3 mx-auto p-12 rounded-lg shadow w-8/12">
      <div class="flex gap-7">
        <div class="w-40">
          Post title
        </div>
        <input
          v-model="title"
          class="bg-gray-50 focus:outline-2 focus:outline-amber-400 outline outline-amber-200 px-2 py-1 rounded-lg w-full"
          data-cy="title"
        >
      </div>
      <div class="flex gap-7 items-center">
        <div class="w-40">
          Content
        </div>
        <div class="relative w-full">
          <div
            class="absolute bg-gray-50 focus:outline-2 focus:outline-amber-400 h-72 max-h-72 outline outline-amber-200 overflow-y-scroll px-2 py-1 rounded-lg w-full"
            contenteditable="true"
            data-cy="content-editable"
            @input="updateContent"
          />
          <div
            class="focus:outline-2 focus:outline-amber-400 h-72 max-h-72 outline outline-amber-200 overflow-y-auto pointer-events-none px-2 py-1 rounded-lg w-full"
            data-cy="content"
            v-html="content"
          />
        </div>
      </div>
      <div class="flex gap-7 mt-5 place-content-center">
        <button
          class="bg-blue-600 cursor-pointer hover:bg-blue-700 p-1 rounded-lg shadow shadow-blue-100 text-white w-32"
          data-cy="create"
          @click.prevent="create"
        >
          Create
        </button>
        <span
          class="border border-blue-600 cursor-pointer hover:bg-gray-50 hover:border-blue-700 hover:text-blue-700 p-1 rounded text-center w-32"
          data-cy="cancel"
          @click="push({name: 'home'})"
          @keydown.enter="push({name: 'home'})"
        >Cancel</span>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { v4 as uuidV4 } from 'uuid';
import { useRouter } from 'vue-router';
import useStore from '../useStore';

const title = ref('');
const content = ref('');
const { addPost } = useStore();
const { push } = useRouter();

function updateContent(e: KeyboardEvent) {
  content.value = (e.target as HTMLDivElement).innerHTML;
}

function create() {
  addPost({
    uuid: uuidV4(),
    title: title.value,
    content: content.value,
    date: new Date(),
  });

  push({ name: 'home' });
}
</script>
