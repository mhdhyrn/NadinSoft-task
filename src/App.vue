<template>
  <div id="main" class="h-screen w-screen overflow-hidden main">
    <Header></Header>
    <Menu></Menu>
    <div class="w-[85%]">
      <router-view></router-view>
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
  mounted() {
    if (JSON.parse(localStorage.getItem("lang")) === "fa") {
      this.$i18n.locale = "fa";
    } else {
      this.$i18n.locale = "en";
    }
    const isDark = JSON.parse(localStorage.getItem("theme"))  === "dark";
        document.documentElement.classList.toggle("dark", isDark);
  },
};
</script>

<style scoped></style>
