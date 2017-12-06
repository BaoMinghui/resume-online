<template>
<div id="skill">
  <h1>技术栈</h1>
  <p>工欲善其事，必先利其器</p>
  <div class="main">
    <div class="tag" v-if="isWidthEnough">
      <span v-for="tag in _skillTag" :style="{backgroundColor:getColor(),height:17+tag.value/2+'px',width:tag.value*1.8+'px',lineHeight:15+tag.value/2+'px',fontSize:tag.value/3+'px'}">{{tag.title}}</span>
    </div>
    <div class="describe" :class="{phone:!isWidthEnough}">
      <p v-for='item in describe'>{{item}}</p>
    </div>
  </div>
</div>
</template>

<script>
import store from '@/store'
export default {
  data() {
    return {
      skillTag: [{
        title: 'html',
        value: 70
      }, {
        title: 'css',
        value: 70
      }, {
        title: 'javascript',
        value: 75
      }, {
        title: 'vue.js',
        value: 55
      }, {
        title: 'jquery',
        value: 50
      }, {
        title: 'webpack',
        value: 50
      }, {
        title: 'node.js',
        value: 30
      }, {
        title: 'sass',
        value: 40
      }],
      color: [
        '#FFFB00', '#EEFF6B', '#B0FEFB', '#B3ADE9', '#84F168', '#24D197', '#FFB8B8', '#86E65A', '#A2B98D'
      ],
      describe: [
        '能够编写语义化的HTML，准确的还原设计稿',
        '熟悉原生js，了解ES6语法，能脱离jQuery等库编码',
        '了解Vue jQuery的使用',
        '了解使用sass进行css预处理',
        '了解模块化，面向对象编程'
      ]
    }
  },


  methods: {
    getColor() {
      return this.color[Math.floor(Math.random() * this.color.length)]
    }
  },
  computed: {
    _skillTag() {
      return this.skillTag.sort(function() {
        return 0.5 - Math.random()
      });
    },
    isWidthEnough(){
      return store.state.isWidthEnough
    }
  }
}
</script>

<style scoped>
#skill {
  height: 100%;
  width: 100%;
  background-color: #E4E8EB;
  position: absolute;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: flex-start;
}

#skill h1 {
  font-size: 2.5em;
  font-weight: lighter;
  letter-spacing: .3em;
  margin-bottom: 2%;
}

#skill p {
  font-size: 1.1em;
  line-height: 1.5em;
  margin-bottom: 3%;
}

.main {
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  justify-content: center;
}

.tag {
  width: 25%;
  display: inline-block;
  margin-right: 50px;
}

.describe {
  width: 30%;
  display: inline-block;
  line-height: 1.5em;
  font-size: 1.1em;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-start;
  text-align: justify;
}


.phone {
  width: 80%;
  margin-top: 10%;
}

.tag span {
  display: inline-block;
  margin: .4em;
  border-radius: 5%;
  font-size: 1em;
  color: #454545;
}

@media only screen and (max-width:1600px) {
  .tag span {
    transform: scale(1.3,1.3);
  }
}
</style>
