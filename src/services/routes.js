import { createRouter, createWebHashHistory } from "vue-router";

import DashboardPage from "../components/DashboardPage.vue";
import TodosPage from "../components/TodosPage.vue";
import WeatherPage from "../components/WeatherPage.vue";
import ProfilePage from "../components/ProfilePage.vue";

const routes = [
  { path: "/", component: DashboardPage },
  { path: "/dashboard", component: DashboardPage },
  { path: "/todos", component: TodosPage },
  { path: "/weather", component: WeatherPage },
  { path: "/profile", component: ProfilePage },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
