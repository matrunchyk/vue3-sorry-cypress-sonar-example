<template>
  <div class="bg-amber-50 h-screen p-3 text-blue-600 w-screen">
    <div class="bg-white flex p-3 place-content-between rounded shadow w-full">
      <router-link
        class="font-bold text-xl"
        data-cy="logo"
        to="/"
      >
        Cypress testing blog
      </router-link>

      <div
        v-if="currentUser"
        class="flex gap-3"
      >
        <router-link
          class="cursor-pointer hover:underline mr-2 mt-1"
          data-cy="create-new"
          to="/create-new"
        >
          Create new
        </router-link>

        <div
          class="cursor-pointer hover:underline mr-2 mt-1"
          data-cy="logout"
          @click="logoutAndReturn"
          @keydown.enter="logoutAndReturn"
        >
          Logout
        </div>

        <div
          class="font-medium mt-1 text-gray-500"
          data-cy="hello-username"
        >
          Hello, {{ currentUser.name }}
        </div>
      </div>

      <router-link
        v-else-if="$route.name !== 'login'"
        class="cursor-pointer hover:underline mr-2 mt-1"
        data-cy="login"
        to="/login"
      >
        Login
      </router-link>
    </div>
    <h1
      class="py-5 text-center text-lg"
      data-cy="page-title"
    >
      {{ $route.meta.title }}
    </h1>
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import useStore from './useStore';

const { currentUser, logout } = useStore();
const { push } = useRouter();

function logoutAndReturn() {
  logout();
  push({ name: 'home' });
}
</script>

<style>
html, body {
  @apply w-screen h-screen p-0 m-0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
