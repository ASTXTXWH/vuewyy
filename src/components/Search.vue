<template>
  <header>
    <div class="sh">
      <input type="search" placeholder="搜索歌曲" v-model="inputvalue" @keyup.enter="stest()"/>
      <button @click="stest()">搜索</button>
    </div>
    <div class="list">
      <table>
        <tr v-for="(items,index) in datalist" :key="index">
          <td>{{index+1}}</td>
          <td>{{items.name}}</td>
          <td class="kc"><a href="#" @click="mouse(items.id)"></a></td>
          <td>{{items.artists[0].name}}</td>
        </tr>
      </table>
    </div>
  </header>
</template>

<script>
import Bus from "../bus";
export default {
  name: "Search",
  data() {
    return {
      inputvalue: "",
      datalist: []
    };
  },
  methods: {
    stest() {
      this.$axios
        .get("api/search?keywords="+ this.inputvalue)
        .then((response) => {
            // console.log(response);
            this.datalist = response.data.result.songs;
            // console.log(this.datalist);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    mouse(musicid) {
      Bus.$emit('mid', musicid);
    },
  },
};
</script>

<style>
header {
  width: 980px;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid #d1c5c5;
  text-align: center;
}
header .sh {
  height: 30px;
  border: 1px solid #d1c5c5;
}
header input {
  outline: none;
  height: 100%;
  padding-left: 20px;
  border-radius: 10px;
}
header button {
  margin-left: 20px;
  width: 50px;
  height: 100%;
  border-radius: 5px;
  background-color: rgb(133, 114, 184);
  color: white;
  cursor: pointer;
}
::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #d1c5c5;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #d1c5c5;
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #d1c5c5;
}
:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #d1c5c5;
}
header .list {
  width: 600px;
  margin: 40px auto;
  background-color: aquamarine;
}
header .list table {
  width: 100%;
}
header .list table tr{
    border: 1px solid red;
}
table .kc {
  width: 90px;
  height: 30px;
}
table .kc a {
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url("../../public/images/table.png") no-repeat;
  background-position: 0 -102px;
}
table .kc a:hover {
  background-position: 0 -128px;
}
</style>