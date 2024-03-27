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
};
</script>

<template>
  <div id="main" class="">
    <Header></Header>
    <Menu></Menu>
    <DashboardPage></DashboardPage>
  </div>
</template>

<style scoped></style>
