<template>
  <div
    class="w-[15%] h-[calc(100vh-70px)] flex flex-col gap-4 border-r-2 border-blue-900 bg-blue-300 items-center pt-4 dark:bg-slate-400"
  >
    <router-link to="/" class="w-full text-center">
      <button :class="setButtonActiveClass('dashboard')">
        {{ $t("menuDashboard") }}
      </button>
    </router-link>
    <router-link to="/todos" class="w-full text-center">
      <button :class="setButtonActiveClass('todos')">
        {{ $t("menuTodos") }}
      </button>
    </router-link>
    <router-link to="/weather" class="w-full text-center">
      <button :class="setButtonActiveClass('weather')">
        {{ $t("menuWeather") }}
      </button>
    </router-link>
    <router-link to="/profile" class="w-full text-center">
      <button :class="setButtonActiveClass('profile')">
        {{ $t("menuProfile") }}
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      buttonStyleClasses:
        "border-none outline-none w-3/4 h-8 text-xl font-semibold rounded-md cursor-pointer bg-transparent transition-all text-blue-900 hover:bg-blue-500 hover:text-blue-50 duration-300 py-4 box-content",
    };
  },
  methods: {
    setButtonActiveClass(routeName) {
      return {
        [this.buttonStyleClasses]: true,
        "!bg-blue-500 !text-blue-50 underline": this.$route.name === routeName,
      };
    },
  },
};
</script>

<style scoped></style>
