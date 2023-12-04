<script setup lang="ts">
import TaskList from "../../components/TaskList/TaskList.vue";
import { useTaskStore } from "../../stores/taskStore";

const taskStore = useTaskStore();
</script>
<template>
  <div>
    <TaskList :getTasks="taskStore.getTasks" :tasks="taskStore.tasks" />
  </div>
</template>

<style scoped></style>
