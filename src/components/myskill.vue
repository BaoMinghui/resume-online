<template>
  <div id="skill">
    <h1>技术栈</h1>
    <p>工欲善其事，必先利其器</p>
    <div class="main">
      <div class="tag" v-if="isWidthEnough">
        <span
          v-for="(tag,i) in _skillTag"
          :key="i"
          :style="{backgroundColor:getColor(),height:17+tag.value/2+'px',width:tag.value*1.8+'px',lineHeight:15+tag.value/2+'px',fontSize:tag.value/3+'px'}"
        >{{tag.title}}</span>
      </div>
      <div class="describe" :class="{phone:!isWidthEnough}">
        <p v-for="(item,i) in describe" :key="i">{{item}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  data() {
    return {
      skillTag: [
        {
          title: "javascript",
          value: 75
        },
        {
          title: "vue.js",
          value: 55
        },
        {
          title: "node.js",
          value: 30
        },
        {
          title: "sass",
          value: 40
        },
        {
          title: '微信小程序',
          value: 50
        },
        {
          title: "koa",
          value: 40
        },{
          title: "element-ui",
          value: 80
        }, {
          title: 'vant',
          value: 60
        }
      ],
      color: [
        "#FFFB00",
        "#EEFF6B",
        "#B0FEFB",
        "#B3ADE9",
        "#84F168",
        "#24D197",
        "#FFB8B8",
        "#86E65A",
        "#A2B98D"
      ],
      describe: [
        "熟悉vue技术栈, 熟悉用element-ui快速构建系统后台",
        "熟悉scss等css预处理工具",
        "有小程序及公众号页面开发经历,了解使用微信JSSDK",
        "了解react技术栈",
        "了解java"
      ]
    };
  },

  methods: {
    getColor() {
      return this.color[Math.floor(Math.random() * this.color.length)];
    }
  },
  computed: {
    _skillTag() {
      return this.skillTag.sort(function() {
        return 0.5 - Math.random();
      });
    },
    isWidthEnough() {
      return store.state.isWidthEnough;
    }
  }
};
</script>

<style scoped>
#skill {
  height: 100%;
  width: 100%;
  background-color: #e4e8eb;
  position: absolute;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: flex-start;
}

#skill h1 {
  font-size: 2.5em;
  font-weight: lighter;
  letter-spacing: 0.3em;
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
  margin: 0.4em;
  border-radius: 5%;
  font-size: 1em;
  color: #454545;
}

@media only screen and (max-width: 1600px) {
  .tag span {
    transform: scale(1.3, 1.3);
  }
}
</style>
