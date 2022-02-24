<template>
  <div id="conten">
    <section>
      <div class="ig">
        <img :src="musicx.coverImgUrl" />
      </div>
      <div class="riw">
        <h2>{{ musicx.name }}</h2>
        <!-- <div>最近更新：{{uid}}</div> -->
        <div>
          <ul>
            <li>
              <a href="#">
                <div class="bgi">
                  <span>播放</span>
                </div>
                <div class="bgp"></div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="bti">({{ musicx.subscribedCount }})</div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="bts">({{ musicx.shareCount }})</div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="bte">
                  <span>下载</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="btw">({{ musicx.commentCount }})</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <div class="cont">
      <span class="pa">歌曲列表</span>
      <span class="pb">{{ musiclist.length }}首歌</span>
      <!-- <span class="pc">播放：<i>123</i>次</span> -->
    </div>

    <table>
      <tr>
        <th class="ka"></th>
        <th class="kb" align="left">标题</th>
        <th class="kc"></th>
        <th class="kd" align="left">歌手</th>
      </tr>
      <tr v-for="(item, index) in musiclist" :key="index">
        <td class="ka">{{ index + 1 }}</td>
        <td class="kb">{{ item.al.name }}</td>
        <td class="kc"><a href="#" @click="mouse(item.id)"></a></td>
        <td class="kd">{{ item.ar[0].name }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Bus from "../bus";
export default {
  name: "MusicDate",
  data() {
    return {
      musicx: "",
      musiclist: [],
      // bool: false,
      uid: "19723756",
    };
  },
  methods: {
    mouse(musicid) {
      Bus.$emit('mid', musicid);
    },
  },
  mounted() {
    this.$axios
      .get("api/playlist/detail?id=" + this.uid)
      .then((response) => {
        // console.log(response);
        this.musicx = response.data.playlist;
        this.musiclist = response.data.playlist.tracks;
        // console.log(this.musiclist);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  created() {
    Bus.$on("myMsg", (myMsg) => {
      this.$axios
        .get("api/playlist/detail?id=" + myMsg)
        .then((response) => {
          // console.log(response);
          this.musicx = response.data.playlist;
          this.musiclist = response.data.playlist.tracks;
          // console.log(this.musiclist);
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  },
};
</script>

<style>
div {
  box-sizing: border-box;
}
#conten {
  background-color: azure;
  padding-bottom: 50px;
}
section {
  width: 740px;
  height: 238px;
  box-sizing: border-box;
  padding: 40px;
  display: flex;
  justify-content: space-around;
}
section .ig {
  width: 150px;
  height: 150px;
}
section .ig img {
  width: 100%;
  height: 100%;
}
section .riw {
  width: 500px;
  height: 150px;
  padding: 20px;
}
.riw div {
  margin: 20px 0px;
  overflow: hidden;
}
.riw div span {
  display: inline-block;
  height: 18px;
}
.riw div ul li .bgi,
.bgp {
  margin: 0;
  padding: 7px 0 0 24px;
  color: white;
  float: left;
  width: 66px;
  height: 31px;
  background: url("../../public/images/button.png") no-repeat;
  background-position: 0 -633px;
  vertical-align: middle;
}
.riw div ul li .bgp {
  margin: 0;
  padding: 0;
  width: 31px;
  height: 31px;
  background: url("../../public/images/button.png") no-repeat;
  background-position: 0 -1588px;
}
.riw div ul li .bti {
  margin: 0;
  padding: 7px 0 0 24px;
  width: 92px;
  height: 31px;
  background: url("../../public/images/button.png") no-repeat;
  background-position: 0 -978px;
}
.riw div ul li .bts {
  margin: 0;
  padding: 7px 0 0 24px;
  width: 92px;
  height: 31px;
  background: url("../../public/images/button.png") no-repeat;
  background-position: 0 -1225px;
}
.riw div ul li .bte {
  margin: 0;
  padding: 7px 0 0 24px;
  width: 60px;
  height: 31px;
  background: url("../../public/images/button.png") no-repeat;
  background-position: 0 -2761px;
}
.riw div ul li .btw {
  margin: 0;
  padding: 7px 0 0 24px;
  width: 82px;
  height: 31px;
  background: url("../../public/images/button.png") no-repeat;
  background-position: 0 -1465px;
}
section .riw div ul li {
  float: left;
  margin-right: 5px;
  text-align: center;
  box-sizing: border-box;
  height: 30px;
}
/* 歌曲列表头部 */
.cont {
  width: 670px;
  height: 35px;
  margin: 0 auto;
  border-bottom: 2px solid red;
}
.cont span {
  display: inline-block;
  height: 35px;
  line-height: 35px;
}
.cont .pa {
  width: 80px;
  font-size: 20px;
  color: #333333;
}
.cont .pb {
  margin-left: 20px;
  color: #666666;
}
.cont .pc {
  float: right;
  color: #666666;
}
.cont .pc i {
  font-style: normal;
  color: red;
}
/* 歌曲列表 */
table {
  width: 670px;
  margin: 0 auto;
  border-collapse: collapse;
}
table th {
  background-color: rgb(201, 209, 216) !important;
}
table .ka {
  width: 80px;
  height: 30px;
}
table .kb {
  width: 326px;
  height: 30px;
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
table .kd {
  width: 174px;
  height: 30px;
}
table tr:nth-child(odd) {
  background-color: #d3c6c6;
}
</style>