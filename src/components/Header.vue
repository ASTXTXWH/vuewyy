<template>
  <div id="content">
    <h4>云音乐特色榜</h4>
    <ul>
      <li v-for="(items,index) in music" :key="index">
        <div class="imgs">
          <img :src="items.coverImgUrl" @click="bus(items.id)"/>
        </div>
        <div class="right">
          <p>
            <a href="#" @click="bus(items.id)">{{items.name}}</a>
          </p>
          <p>
            <a href="#">{{items.updateFrequency}}</a>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Bus from '../bus'
export default {
  name: "Header",
  data() {
    return {
      music: [],
    };
  },
  methods: {
    bus (id){
      // console.log(id);
      Bus.$emit('myMsg', id);
    }
  },
  mounted() {
    this.$axios
      .get("api/toplist/detail")
      .then((response) => {
        // console.log(response);
        this.music = response.data.list;
        this.music.length = 4;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style>
#content {
  overflow: hidden;
  border: 1px solid #d1c5c5;
}
div > h4 {
  width: 240px;
  height: 40px;
  line-height: 40px;
  margin-left: 10px;
}
div > ul {
  list-style: none;
}
#content ul li {
  width: 240px;
  height: 62px;
  border: 1px solid white;
  margin-top: -1px;
  box-sizing: border-box;
  padding: 10px 0 10px 20px;
  display: flex;
  background-color: #fff;
}
div ul li:hover{
  background-color: #f0f0f0;
}
div ul li .imgs {
  width: 40px;height: 40px;
  cursor: pointer;
}
div ul li .imgs img{
  width: 100%;height: 100%;
}
div ul li .right {
  height: 40px;
  flex: 1;
  /* background-color: rgb(204, 58, 114); */
}
div ul li .right p {
  margin: 2px 8px;
}
</style>