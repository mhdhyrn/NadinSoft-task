<template>
  <div class="flex h-full justify-center items-center dark:bg-slate-700">
    <form
      class="flex flex-col gap-14 w-1/2 items-center"
      @submit.prevent="formSubmitHandler"
    >
      <input
        type="text"
        v-model="userName"
        :placeholder="$t('profilePlaceholderInput')"
        class="w-1/2 h-10 bg-orange-200 text-black placeholder:text-slate-500 rounded-md outline-orange-500 border-2 p-5"
      />
      <select
        v-model="selectedTheme"
        name="themeSelect"
        class="w-1/2 h-10 border-2 bg-orange-200 rounded-md outline-orange-500 px-5"
      >
        <option value="null" disabled>
          {{ $t("profileSelectThemeNull") }}
        </option>
        <option
          v-for="(opt, index) in themeOptions"
          :key="opt.index"
          :value="opt.value"
        >
          {{ opt.label }}
        </option>
      </select>
      <select
        v-model="selectedLang"
        name="langSelect"
        class="w-1/2 h-10 border-2 bg-orange-200 rounded-md outline-orange-500 px-5"
      >
        <option value="null" disabled>{{ $t("profileSelectLangNull") }}</option>
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
        :value="$t('profileSubmitBtn')"
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
      selectedTheme: "",
      selectedLang: "",
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
      if (
        this.userName.trim().length < 3 ||
        this.selectedLang === "null" ||
        this.selectedTheme === "null"
      ) {
        alert("Please fill all inputs!");
      } else {
        localStorage.setItem("userName", JSON.stringify(this.userName));
        localStorage.setItem("theme", JSON.stringify(this.selectedTheme));
        localStorage.setItem("lang", JSON.stringify(this.selectedLang));
        this.$i18n.locale = this.selectedLang;
        const isDark = this.selectedTheme === "dark";
        document.documentElement.classList.toggle("dark", isDark);
        alert("The changes successfully saved!");
      }
    },
  },
  mounted() {
    this.userName =
      localStorage.getItem("userName") === undefined
        ? "null"
        : JSON.parse(localStorage.getItem("userName"));
    this.selectedTheme =
      localStorage.getItem("theme") === undefined
        ? "null"
        : JSON.parse(localStorage.getItem("theme"));
    this.selectedLang =
      localStorage.getItem("lang") === undefined
        ? "null"
        : JSON.parse(localStorage.getItem("lang"));
  },
};
</script>
<style></style>
