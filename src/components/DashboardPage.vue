<template>
  <ShouldLogin v-if="!isLogin"></ShouldLogin>
  <div
    class="w-full dark:bg-slate-700 dark:text-white h-screen flex items-center flex-col justify-center"
    v-else
  >
    <div>
      <h2 class="text-center text-2xl">{{ currentTime }}</h2>
    </div>
    <div class="mt-10">
      <h3 class="text-center text-xl">{{ greeting }}, {{ userName }}</h3>
    </div>
  </div>
</template>
<script>
import utils from "../services/utils";
import ShouldLogin from "./ShouldLogin.vue";
export default {
  name: "DashboardPage",
  data() {
    return {
      currentTime: "",
      greeting: "",
      userName: "",
      isLogin: utils(),
    };
  },
  components: {
    ShouldLogin,
  },
  methods: {
    updateTime() {
      let now = new Date();
      this.currentTime = now.toLocaleTimeString();
      this.updateGreeting(now.getHours());
    },
    updateGreeting(hour) {
      if (hour >= 5 && hour < 12) {
        this.greeting = this.$t("dashboardGreeting.morning");
      } else if (hour >= 12 && hour < 18) {
        this.greeting = this.$t("dashboardGreeting.afternoon");
      } else if (hour >= 18 && hour < 21) {
        this.greeting = this.$t("dashboardGreeting.evening");
      } else {
        this.greeting = this.$t("dashboardGreeting.night");
      }
    },
  },
  beforeMount() {
    this.updateTime();
    this.userName = JSON.parse(localStorage.getItem("userName"));
  },
  mounted() {
    this.intervalId = setInterval(() => {
      this.updateTime();
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
};
</script>
<style></style>
<style scoped></style>
