<template>
  <form autocomplete="off">
    <div class="bg-white flex flex-col gap-7 mt-3 mx-auto p-12 rounded-lg shadow w-min">
      <div class="flex gap-7">
        <div class="w-40">
          Username
        </div>
        <input
          v-model="username"
          :class="hasErrors ? 'outline-pink-300 focus:outline-pink-400' : 'outline-amber-200 focus:outline-amber-400'"
          autoComplete="off"
          class="bg-gray-50 focus:outline-2 outline px-2 py-1 rounded-lg"
          data-cy="username"
          role="presentation"
        >
      </div>

      <div class="flex gap-7 items-center">
        <div class="w-40">
          Password
        </div>
        <!-- eslint-disable vuejs-accessibility/form-control-has-label -->
        <input
          v-model="password"
          :class="hasErrors ? 'outline-pink-300 focus:outline-pink-400' : 'outline-amber-200 focus:outline-amber-400'"
          autoComplete="new-password"
          class="bg-gray-50 focus:outline-2 outline password-field px-2 py-1 rounded-lg"
          data-cy="password"
          type="text"
        >
      </div>

      <div
        v-if="hasErrors"
        class="text-center text-pink-600"
        data-cy="error-message"
      >
        Invalid credentials
      </div>

      <div
        :class="hasErrors ? 'mt-0' : 'mt-12'"
        class="align-middle gap-4 grid grid-cols-2 place-content-between"
      >
        <button
          class="bg-blue-600 cursor-pointer hover:bg-blue-700 p-1 rounded-lg shadow shadow-blue-100 text-white"
          data-cy="login-submit"
          @click.prevent="login"
        >
          Login
        </button>
        <span
          class="cursor-pointer hover:underline p-1"
          data-cy="forgot"
          @click="forgot"
          @keydown.enter="forgot"
        >Forgot password?</span>
      </div>

      <div
        class="cursor-pointer hover:underline mt-4 text-center"
        data-cy="go-back"
        @click="push({name: 'home'})"
        @keydown.enter="push({name: 'home'})"
      >
        Back to posts
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import useStore from '../useStore';

const username = ref('');
const password = ref('');
const isDirty = ref(false);
const hasErrors = computed(() => isDirty.value);
const { currentUser } = useStore();
const { push } = useRouter();

function login() {
  isDirty.value = true;
  if (username.value !== 'demo' || password.value !== 'demo') return;

  currentUser.value = {
    name: username.value,
  };
  push({ name: 'home' });
}

function forgot() {
  push({ name: 'forgot' });
}
</script>

<style scoped>
.password-field {
  -webkit-text-security: disc;
}
</style>
