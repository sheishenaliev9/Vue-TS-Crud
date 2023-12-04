<script setup lang="ts">
import { onMounted } from "vue";
import { RouterLink } from "vue-router";
import { defineProps } from "vue";

const { getTasks, tasks } = defineProps(["getTasks", "tasks"]);

onMounted(getTasks);
</script>

<template>
  <div class="tasks">
    <h2>Your tasks list</h2>
    <div class="task" v-for="task in tasks" :key="task.id">
      <RouterLink :to="`/tasks/${task.id}`">{{ task.title }}</RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
