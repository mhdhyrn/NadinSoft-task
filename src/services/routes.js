import { createRouter, createWebHashHistory } from "vue-router";

import DashboardPage from "../components/DashboardPage.vue";
import TodosPage from "../components/TodosPage.vue";
import WeatherPage from "../components/WeatherPage.vue";
import ProfilePage from "../components/ProfilePage.vue";

const routes = [
  { path: "/", component: DashboardPage, name: "dashboard" },
  { path: "/todos", component: TodosPage, name: "todos" },
  { path: "/weather", component: WeatherPage, name: "weather" },
  { path: "/profile", component: ProfilePage, name: "profile" },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
