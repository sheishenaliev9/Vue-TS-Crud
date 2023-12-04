<template>
  <form class="form" @submit.prevent="submitTask">
    <input type="text" v-model="task.title" placeholder="Title" />
    <input type="text" v-model="task.body" placeholder="Body" />
    <button type="submit">Add</button>
  </form>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";

const { createTask } = defineProps(["createTask"]);

const task = ref({
  title: "",
  body: "",
  isCompleted: false,
});

const submitTask = () => {
  createTask(task.value);
  task.value = { title: "", body: "", isCompleted: false };
};
</script>

<style lang="scss" scoped>
.form {
    padding-top: 50px;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 0 auto;

    input {
        width: 40%;
        padding: 5px 15px;
    }
}
</style>
