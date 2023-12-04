<template>
  <div>
    <h3>{{ taskStore.currTask.title }}</h3>
    <p>{{ taskStore.currTask?.body }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useTaskStore } from "../../stores/taskStore";

const route = useRoute();
const taskId = ref(route.params.id);
const taskStore = useTaskStore();

onMounted(() => taskStore.getTask(taskId.value));
</script>

<style scoped></style>
