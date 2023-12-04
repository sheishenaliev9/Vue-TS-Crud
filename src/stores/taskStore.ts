import { defineStore } from "pinia";
import { ref } from "vue";
import { ITaskType } from "../types/index.type";
import { useToast } from "vue-toastification";
import axios from "axios";

export const useTaskStore = defineStore("taskStore", () => {
  let tasks = ref<ITaskType[]>([]);
  let currTask = ref({} as ITaskType);

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

  const getTask = async (id: string) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_MAIN_URL}/tasks/${id}`
      );
      currTask.value = data;
    } catch (error) {
      toast.error("Что-то пошло не так...");
    }
  };

  return {
    tasks,
    currTask,
    getTasks,
    getTask,
  };
});
