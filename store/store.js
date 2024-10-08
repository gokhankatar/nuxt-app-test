import { defineStore } from "pinia";

const store = defineStore("pinia", {
  state() {
    return {
      theme: "light",
    };
  },
  actions: {
    changeTheme() {
      this.theme === "light" ? this.theme = "dark" : this.theme = "light";
    },
  },
  persist: true,
});

export default store;
