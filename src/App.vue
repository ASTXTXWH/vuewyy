<template>
  <div id="app">
    <nav>
      <router-link to="/serch" tag="button" class="routerbtn">搜索歌曲</router-link>
      <router-link to="/list" tag="button" class="routerbtn">榜单数据</router-link>
    </nav>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue"
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
  html{font-size: 12px;}
  body{background-color: #f5f5f5;}
  *{margin: 0;padding: 0;}
  a{text-decoration: none;color:black;}
  /* td{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  } */
  nav{
    width: 980px;
    margin: 0 auto;
    overflow: hidden;
  }
  .routerbtn{
    display: inline-block;
    height: 50px;width: 50%;
    text-align: center;line-height: 50px;
    background-color: rgb(170, 187, 187);
    border: 1px solid #d1c5c5;
    box-sizing: border-box;
    cursor: pointer;
  }
  
</style>
