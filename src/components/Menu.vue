<template>
  <div
    class="w-[15%] h-[calc(100vh-70px)] flex flex-col gap-4 border-r-2 border-blue-900 bg-blue-300 items-center pt-4"
  >
    <button :class="buttonStyleClasses">Dashboard</button>
    <button :class="buttonStyleClasses">Todos</button>
    <button :class="buttonStyleClasses">Weather</button>
    <button :class="buttonStyleClasses">Profile</button>
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
};
</script>

<style scoped></style>
