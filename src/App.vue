<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <AppHeader />
  <main class="container">
    <RouterView />
  </main>
</template>

<style scoped>
.container {
  width: min(1120px, calc(100% - 48px));
  margin: 0 auto;
  padding: 64px 0;
}
</style>
