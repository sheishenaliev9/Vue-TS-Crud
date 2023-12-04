export const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("../views/HomeView/HomeView.vue"),
  },
  {
    name: "Tasks",
    path: "/tasks",
    component: () => import("../views/TasksView/TasksView.vue"),
  },
  {
    name: "OneTask",
    path: "/tasks/:id",
    component: () => import("../views/OneTaskView/OneTaskView.vue"),
  },
];
