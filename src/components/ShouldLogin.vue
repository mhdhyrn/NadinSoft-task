<template>
  <div class="text-center">
    <h1 class="text-xl pt-36">
      {{ $t("shouldLoginTitle") }}
    </h1>
    <router-link to="/profile" class="w-full text-center">
      <button
        class="text-xl font-semibold rounded-md cursor-pointer text-white bg-rose-500 p-4"
      >
        {{ $t("shouldLoginBtn") }}
      </button>
    </router-link>
  </div>
</template>
<script>
export default {};
</script>
<style scoped></style>
