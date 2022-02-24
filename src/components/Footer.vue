<template>
  <footer>
    <div>
      <audio :src="url" loop controls autoplay></audio>
    </div>
  </footer>
</template>

<script>
import Bus from "../bus";
export default {
  name: "Footer",
  data() {
    return {
      url: ""
    };
  },
  created() {
    Bus.$on("mid", (mid) => {
       this.$axios
        .get("api/song/url?id=" + mid)
        .then((response) => {
        //   console.log(response);
          this.url = response.data.data[0].url;
        //   console.log(this.url);
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  },
};
</script>

<style>
footer {
  width: 100%;
  height: 40px;
  background-color: rgba(66, 64, 64, 0.7);
  position: fixed;
  bottom: 0px;
}
footer > div {
  width: 500px;
  height: 100%;
  margin: 0 auto;
}
</style>