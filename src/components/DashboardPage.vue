<template>
  <div class="w-full">
    <div class="mt-20">
      <h2 class="text-center text-2xl">{{ currentTime }}</h2>
    </div>
    <div class="mt-10">
      <h3 class="text-center text-xl">{{ greeting }}, {{ userName }}</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "DashboardPage",
  data() {
    return {
      currentTime: "",
      greeting: "",
      userName: "",
    };
  },
  methods: {
    updateTime() {
      let now = new Date();
      this.currentTime = now.toLocaleTimeString();
      this.updateGreeting(now.getHours());
    },
    updateGreeting(hour) {
      console.log(hour);
      if (hour >= 5 && hour < 12) {
        this.greeting = "Good Morning";
      } else if (hour >= 12 && hour < 18) {
        this.greeting = "Good Afternoon";
      } else if (hour >= 18 && hour < 21) {
        this.greeting = "Good Evening";
      } else {
        this.greeting = "Good Night";
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
