<template>
  <div class="w-screen h-screen bg-amber-50 text-blue-600 p-3">
    <div class="p-3 bg-white w-full shadow rounded flex place-content-between">
      <router-link
          data-cy="logo"
          class="font-bold text-xl"
          to="/">Cypress testing blog
      </router-link>

      <div
          v-if="currentUser"
          class="flex gap-3"
      >
        <router-link
            data-cy="create-new"
            class="mt-1 hover:underline cursor-pointer mr-2"
            to="/create-new">Create new
        </router-link>

        <div
            data-cy="logout"
            class="mt-1 hover:underline cursor-pointer mr-2"
            @click="logoutAndReturn">Logout
        </div>

        <div
            data-cy="hello-username"
            class="font-medium text-gray-500 mt-1"
        >
          Hello, {{ currentUser.name }}
        </div>
      </div>

      <router-link
          v-else-if="$route.name !== 'login'"
          data-cy="login"
          class="mt-1 hover:underline cursor-pointer mr-2"
          to="/login">Login
      </router-link>
    </div>
    <h1
        data-cy="page-title"
        class="text-center text-lg py-5">{{ $route.meta.title }}</h1>
    <router-view/>
  </div>
</template>

<script setup lang="ts">
import useStore from "./useStore";
import {useRouter} from "vue-router";

const {currentUser, logout} = useStore();
const {push} = useRouter();

function logoutAndReturn() {
  logout();
  push({name: 'home'});
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
