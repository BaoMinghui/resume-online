<template>
<div id="production">
  <h1>我的项目经历</h1>
  <p>要是一开始就只选择自己能做得到的事情，那么什么都没办法开始</p>
  <div class="cards" :class="{phone:!isWidthEnough}"
    >
    <div v-for="(item,index) in myPro"
    :data-id='index'
    :key="index"
    class="hoverBig"
    >
      <p>{{item.title}}</p>
      <span>{{item.describe}}</span>
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
        title: "中石油微信公众号车主服务",
        describe: "技术栈为vue全家桶 + vant，利用微信JSSDK实现了登录、支付等功能，并实现了基于百度地图的路线规划等功能",
        isHv: true
      }, {
        title:"智慧石油后台管理系统",
        describe:"主要技术栈为vue全家桶+element-ui的项目后台管理系统，基于echarts实现了大量数据综示图表，共包含30+页面，封装了数个基于element组件的功能模块，基于动态注册路由实现了根据账号权限动态生成菜单的功能",
        isHv:false
      }, {
        title: "乾坤擂台（微信小程序）",
        describe: "一款算命相关的小程序（因内容审查未上架）"
      }],
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
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: flex-start;
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

.cards {
  margin-top: 5%;
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

.cards div {
  height: auto;
  width: 300px;
  display: inline-block;
  border-radius: 5px;
  margin: 2%;
	background-color: #A2B98D;
	padding: 10px;
  transition: all .3s;
}

.hoverBig:hover{
  transform: scale(1.05,1.05);
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

.cards div p {
  font-size: 1.5em;
  margin: 5px;
}

.cards div span {
  font-size: 1em;
}

a{
  text-decoration: none;
  color: #222;
}
</style>
