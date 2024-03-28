<template>
  <div class="flex h-full justify-center items-center">
    <form class="flex flex-col gap-14 w-1/2 items-center" @submit.prevent="formSubmitHandler">
      <input
        type="text"
        v-model="userName"
        placeholder="Your Name..."
        class="w-1/2 h-10 bg-orange-200 text-black placeholder:text-slate-500 rounded-md outline-orange-500 border-2 p-5"
      />
      <select
        v-model="selectedTheme"
        name="themeSelect"
        class="w-1/2 h-10 border-2 bg-orange-200 rounded-md outline-orange-500"
      >
        <option value="null" disabled>Select theme...</option>
        <option
          v-for="(opt, index) in themeOptions"
          :key="index"
          :value="opt.value"
        >
          {{ opt.label }}
        </option>
      </select>
      <select
        v-model="selectedLang"
        name="langSelect"
        class="w-1/2 h-10 border-2 bg-orange-200 rounded-md outline-orange-500"
      >
        <option value="null" disabled>Select language...</option>
        <option
          v-for="(opt, index) in langOptions"
          :key="index"
          :value="opt.value"
        >
          {{ opt.label }}
        </option>
      </select>
      <input
        type="submit"
        value="Save"
        class="h-10 px-5 bg-green-500 rounded-md text-white cursor-pointer"
      />
    </form>
  </div>
</template>
<script>
export default {
  name: "ProfilePage",
  data() {
    return {
      userName: "",
      selectedTheme: "null",
      selectedLang: "null",
      themeOptions: [
        { value: "light", label: "Light" },
        { value: "dark", label: "Dark" },
      ],
      langOptions: [
        { value: "eng", label: "English" },
        { value: "fa", label: "فارسی" },
      ],
    };
  },
  methods: {
    formSubmitHandler() {
        
    }
  },
};
</script>
<style></style>