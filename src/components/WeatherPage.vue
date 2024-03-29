<template>
  <ShouldLogin v-if="!isLogin"></ShouldLogin>
  <div class="flex w-full flex-col items-center dark:bg-slate-700 h-screen" v-else>
    <div class="w-full text-center mt-20">
      <input
        type="text"
        v-model="inputValue"
        :placeholder="$t('weatherPlaceholderInput')"
        class="w-1/4 h-10 mx-5 bg-stone-300 text-black placeholder:text-slate-500 rounded-md outline-blue-500 p-5"
      />
      <button
        @click="fetchData"
        class="h-10 w-44 px-5 py-2 bg-green-500 rounded-md text-white"
        ref="searchBtn"
      >
        <span class="mx-2">{{ $t("weatherSearchBtn") }}</span>
        <svg
          v-if="isLoading"
          aria-hidden="true"
          class="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </button>
    </div>
    <div class="bg-orange-300 mt-32 p-16 rounded-md">
      <p v-if="!weather && !windSpeed">{{ $t("weatherNoEnteryTitle") }}</p>
      <div v-else>
        <p>{{ $t("weatherTempTitle") }} {{ weather }} °C</p>
        <p>{{ $t("weatherSWTitel") }} {{ windSpeed }} km/h</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import cityAddress from "../services/cityAddress";
import utils from "../services/utils";
import ShouldLogin from "./ShouldLogin.vue";
export default {
  name: "WeatherPage",
  data() {
    return {
      weather: "",
      windSpeed: "",
      inputValue: "",
      isLoading: false,
      isLogin: utils(),
    };
  },
  components: {
    ShouldLogin,
  },
  methods: {
    async fetchData() {
      if (this.inputValue.trim().length < 3) {
        alert("Name is Invalid!");
      } else {
        this.isLoading = true;
        let foundedCity = cityAddress.find(
          (city) => city.city.toLowerCase() === this.inputValue.toLowerCase()
        );
        if (foundedCity) {
          try {
            const res = await axios.get(
              `https://api.open-meteo.com/v1/forecast?latitude=${foundedCity.lat}8&longitude=${foundedCity.lng}&current_weather=true`
            );
            if (res.status == "200") {
              this.weather = res.data.current_weather.temperature;
              this.windSpeed = res.data.current_weather.windspeed;
              this.isLoading = false;
            }
          } catch (err) {
            console.log(err);
          }
        } else {
          this.isLoading = false;
          alert("Your City Not Found!");
        }
      }
    },
  },
};
</script>
<style></style>
