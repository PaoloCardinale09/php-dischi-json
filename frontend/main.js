const { createApp } = Vue;

createApp({
  data() {
    return {
      discs: [],
    };
  },

  created() {
    axios
      .get("http://localhost:8888/php-dischi-json/API/get-list.php")
      .then((response) => {
        this.discs = response.data;
        console.log("response" + this.discs);
      });
  },
}).mount("#app");
