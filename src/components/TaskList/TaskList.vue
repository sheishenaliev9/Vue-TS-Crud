<script setup lang="ts">
import { onMounted } from "vue";
import { useTaskStore } from "../../stores/taskStore";

const taskStore = useTaskStore();

onMounted(() => taskStore.getTasks());
</script>

<template>
  <div class="tasks">
    <div class="task" v-for="task in taskStore.tasks" :key="task.id">
      <h3>{{ task.title }}</h3>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
