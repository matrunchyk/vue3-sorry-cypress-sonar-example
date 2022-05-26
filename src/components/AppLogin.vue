<template>
  <form autocomplete="off">
    <div class="flex flex-col gap-7 w-min mx-auto mt-3 bg-white rounded-lg p-12 shadow">
      <div class="flex gap-7">
        <div class="w-40">Username</div>
        <input
            data-cy="username"
            role="presentation"
            autoComplete="off"
            class="outline rounded-lg focus:outline-2 px-2 py-1 bg-gray-50"
            :class="hasErrors ? 'outline-pink-300 focus:outline-pink-400' : 'outline-amber-200 focus:outline-amber-400'"
            v-model="username">
      </div>

      <div class="flex gap-7 items-center">
        <div class="w-40">Password</div>
        <input
            data-cy="password"
            type="text"
            autoComplete="new-password"
            class="outline rounded-lg focus:outline-2 px-2 py-1 bg-gray-50"
            :class="hasErrors ? 'outline-pink-300 focus:outline-pink-400' : 'outline-amber-200 focus:outline-amber-400'"
            style="-webkit-text-security: disc;"
            v-model="password">
      </div>

      <div
          v-if="hasErrors"
          class="text-pink-600 text-center"
          data-cy="error-message"
      >Invalid credentials
      </div>

      <div
          class="grid grid-cols-2 gap-4 align-middle place-content-between"
          :class="hasErrors ? 'mt-0' : 'mt-12'"
      >
        <button
            data-cy="login-submit"
            class="shadow shadow-blue-100 cursor-pointer p-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            @click.prevent="login">
          Login
        </button>
        <span
            data-cy="forgot"
            @click="forgot"
            class="hover:underline cursor-pointer p-1">Forgot password?</span>
      </div>

      <div
          class="mt-4 cursor-pointer hover:underline text-center"
          data-cy="go-back"
          @click="push({name: 'home'})"
      >
        Back to posts
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import useStore from "../useStore";
import {useRouter} from "vue-router";

const username = ref('')
const password = ref('')
const isDirty = ref(false);
const hasErrors = computed(() => isDirty.value)
const {currentUser} = useStore();
const {push} = useRouter();

function login() {
  isDirty.value = true;
  if (username.value !== 'demo' || password.value !== 'demo') return;

  currentUser.value = {
    name: username.value,
  };
  push({name: 'home'})
}

function forgot() {
  push({name: 'forgot'})
}
</script>

