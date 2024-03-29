<template>
  <div id="main" class="h-screen w-screen overflow-hidden main">
    <Header></Header>
    <Menu></Menu>
    <div class="w-[85%]">
      <router-view ></router-view>
    </div>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import Header from "./components/Header.vue";
import DashboardPage from "./components/DashboardPage.vue";

export default {
  name: "App",
  components: {
    Menu,
    Header,
    DashboardPage,
  },
  beforeMount() {
  },
};
</script>

<style scoped></style>
