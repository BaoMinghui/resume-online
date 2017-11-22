<template>
<div id="production">
  <h1>我的个人作品</h1>
  <p>要是一开始就只选择自己能做得到的事情，那么什么都没办法开始</p>
  <div class="card" :class="{phone:!isWidthEnough}">
    <div v-for="item in myPro">
      <p>{{item.title}}</p>
      <span>{{item.describe}}</span><br>
      <span><a :href="item.url">地址</a></span>
    </div>
  </div>
</div>
</template>

<script>
import store from '@/store'
export default {
  name: 'production',
  data() {
    return {
      myPro: [{
        title: "个人在线简历",
        describe: "一款基于vue的个性在线简历",
        url: "https://github.com/BaoMinghui/resume-online"
      }, {
        title: "2048小游戏",
        describe: "用vue实现的2048",
        url: "https://github.com/BaoMinghui/vue-2048"
      }]
    }
  },
  computed:{
    isWidthEnough(){
      return store.state.isWidthEnough
    }
  }
}
</script>

<style scoped>
#production {
  height: 100%;
  width: 100%;
  background-color: #D4D392;
  position: absolute;
	text-align: center;
}

#production h1 {
  font-size: 2.5em;
  font-weight: lighter;
  letter-spacing: .3em;
  margin-bottom: 1%;
}

#production p {
  font-size: 1.1em;
  line-height: 1.5em;
  margin-bottom: 3%;
}

.card {
  width: 50%;
	height: 50%;
  padding-top: 5%;
	margin-left: 25%;
}

.card div {
  height: auto;
  width: 300px;
  display: inline-block;
  border-radius: 5px;
  margin: 2%;
	background-color: #A2B98D;
	padding: 10px;
}

.phone {
  margin-left: 5%;
}

.phone div{
  height: auto;
  width: 250px;
  display: inline-block;
  border-radius: 5px;
  margin: 2%;
  background-color: #A2B98D;
  padding: 10px;
}

.card div p {
  font-size: 1.5em;
  margin: 5px;
}

.card div span {
  font-size: 1em;
}

a{
  text-decoration: none;
  color: #000;
}
</style>
