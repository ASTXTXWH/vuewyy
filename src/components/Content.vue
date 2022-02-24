<template>
  <div class="content">
      <Header/>
      <MusicDate/>
  </div>
</template>

<script>
import Header from "./Header.vue"
import MusicDate from "./MusicDate.vue"
export default {
    components: {
        Header,
        MusicDate
    }
};
</script>

<style>
.content {
  width: 980px;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid #d1c5c5;
  display: flex;
}
</style>