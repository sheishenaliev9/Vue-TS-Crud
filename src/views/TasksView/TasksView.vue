<script setup lang="ts">
import TaskList from "../../components/TaskList/TaskList.vue";
import { useTaskStore } from "../../stores/taskStore";
import TaskForm from "../../components/TaskForm/TaskForm.vue";

const taskStore = useTaskStore();
</script>
<template>
  <div>
    <TaskForm :createTask="taskStore.createTask" />
    <TaskList
      :getTasks="taskStore.getTasks"
      :tasks="taskStore.tasks"
      :deleteTask="taskStore.deleteTask"
    />
  </div>
</template>

<style scoped></style>
