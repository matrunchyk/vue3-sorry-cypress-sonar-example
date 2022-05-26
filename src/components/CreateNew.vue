<template>
  <form autocomplete="off">
    <div class="flex flex-col gap-7 w-8/12 mx-auto mt-3 bg-white rounded-lg p-12 shadow">
      <div class="flex gap-7">
        <div class="w-40">Post title</div>
        <input
            data-cy="title"
            class="outline outline-amber-200 rounded-lg focus:outline-amber-400 focus:outline-2 px-2 py-1 w-full bg-gray-50"
            v-model="title">
      </div>
      <div class="flex gap-7 items-center">
        <div class="w-40">Content</div>
        <div class="relative w-full">
          <div
              data-cy="content-editable"
              contenteditable="true"
              class="absolute outline outline-amber-200 rounded-lg focus:outline-amber-400 focus:outline-2 px-2 py-1 h-72 bg-gray-50 w-full max-h-72 overflow-y-scroll"
              @input="updateContent"
          />
          <div
              data-cy="content"
              class="outline outline-amber-200 rounded-lg focus:outline-amber-400 focus:outline-2 px-2 py-1 w-full h-72 max-h-72 pointer-events-none overflow-y-auto"
              v-html="content">
          </div>
        </div>
      </div>
      <div class="flex gap-7 mt-5 place-content-center">
        <button
            data-cy="create"
            class="shadow shadow-blue-100 cursor-pointer p-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg w-32"
            @click.prevent="create">
          Create
        </button>
        <span
            data-cy="cancel"
            @click="push({name: 'home'})"
            class="hover:border-blue-700 hover:text-blue-700 hover:bg-gray-50 cursor-pointer p-1 border border-blue-600 text-center rounded w-32">Cancel</span>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {v4 as uuidV4} from 'uuid';
import useStore from "../useStore";
import {useRouter} from "vue-router";

const title = ref('')
const content = ref('')
const {addPost} = useStore();
const {push} = useRouter();

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

  push({name: 'home'})
}
</script>

