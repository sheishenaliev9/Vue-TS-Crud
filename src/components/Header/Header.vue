<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="header">
    <div class="logo">LOGO</div>

    <nav>
      <RouterLink to="/"> Home </RouterLink>
      <RouterLink to="/tasks"> Tasks </RouterLink>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px 0;
  border-bottom: 2px solid #242424;

  nav {
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
