<script setup lang="ts">
import { onMounted } from "vue";
import { RouterLink } from "vue-router";
import { defineProps } from "vue";

const { getTasks, deleteTask, tasks } = defineProps([
  "getTasks",
  "deleteTask",
  "tasks",
]);

onMounted(getTasks);
</script>

<template>
  <div class="tasks">
    <h2>Your tasks list</h2>
    <div class="task" v-for="task in tasks" :key="task.id">
      <RouterLink :to="`/tasks/${task.id}`">{{ task.title }}</RouterLink>
      <button @click="deleteTask(task.id)">Удалить</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tasks {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  .task {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
  }
}
</style>
