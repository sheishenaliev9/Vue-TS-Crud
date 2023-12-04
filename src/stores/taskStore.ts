import { defineStore } from "pinia";
import { ref } from "vue";
import { ITaskType } from "../types/index.type";
import { useToast } from "vue-toastification";
import axios from "axios";

export const useTaskStore = defineStore("taskStore", () => {
  let tasks = ref<ITaskType[]>([]);
  const toast = useToast();

  const getTasks = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_MAIN_URL}/tasks`
      );
      tasks.value = data;
    } catch (error) {
      toast.error("Что-то пошло не так...");
    }
  };

  return {
    tasks,
    getTasks,
  };
});
