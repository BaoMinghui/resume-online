<template lang="html">
<div>
  <div id="nav" v-show='isWidthEnough'>
    <ul @click='eventAgency($event)'>
      <li v-for="item in componentsArr"
      :class="item" ref="item"
      @mouseenter="spanShow[item]=true"
      @mouseleave="spanShow[item]=false">
        <transition name="tag">
          <span v-show="spanShow[item]">{{cpnTitle[item]}}</span>
        </transition>
      </li>
    </ul>
  </div>
  <div class="btn">
    <div class="up" v-if="showUp" @click='current_up'>
    </div>
    <div class="down" v-if="showDown" @click='current_down'>
    </div>
  </div>
</div>
</template>

<script>
import store from '@/store'
import {
  mapState
} from 'vuex'

export default {
  name: 'sidemenu',
  data() {
    return {
      cpnTitle: {
        index: '首页',
        aboutme: '关于我',
        skill: '技术栈',
        production: '个人作品',
        contact: '联系我'
      },
      spanShow: {
        index: false,
        aboutme: false,
        skill: false,
        production: false,
        contact: false
      }
    }
  },
  computed: {
    ...mapState([
      'current',
      'componentsArr',
      'isWidthEnough'
    ]),
    showUp() {
      return this.current !== 0
    },
    showDown() {
      return this.current !== this.componentsArr.length - 1
    }
  },
  methods: {
    eventAgency: function(ev) {
      const event = ev || window.event;
      const target = ev.target || window.srcElement;
      const index = this.componentsArr.indexOf(target.className);
      if (index >= 0) {
        if (index < this.current) {
          store.commit('viewValue_up')
        } else {
          store.commit('viewValue_down')
        }
        store.commit('current_init', index)
      }
    },
    current_up() {
      store.commit('current_up');
      store.commit('viewValue_up');
    },
    current_down() {
      store.commit('current_down');
      store.commit('viewValue_down');
    }
  },

  watch: {
    current: function(val, oldval) {

    }
  },
  mounted() {
    let mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel";

    // //节流函数
    // const throttle = (fun, delay, time) => {
    //   let timeout,
    //     startTime = new Date();
    //   return () => {
    //     let context = this,
    //       args = arguments,
    //       curTime = new Date();
    //     clearTimeout(timeout);
    //     if (curTime - startTime >= time) {
    //       fun.apply(context, args);
    //       startTime = curTime;
    //     } else {
    //       timeout = setTimeout(fun, delay);
    //     }
    //   }
    // }
    //
    // const pageGo = (event) => {
    //   if (event.wheelDelta) {
    //     if (event.wheelDelta < 0) {
    //       store.commit('viewValue_down')
    //       store.commit('current_down');
    //     } else {
    //       store.commit('viewValue_up')
    //       store.commit('current_up')
    //     }
    //   } else if (event.detail) {
    //     if (event.detail > 0) {
    //       store.commit('viewValue_down')
    //       store.commit('current_down')
    //     } else {
    //       store.commit('viewValue_up')
    //       store.commit('current_up')
    //   }
    // }

    window.addEventListener(mousewheelevt, (event) => {
      if (event.wheelDelta) {
        if (event.wheelDelta < 0) {
          store.commit('viewValue_down')
          store.commit('current_down');
        } else {
          store.commit('viewValue_up')
          store.commit('current_up')
        }
      } else if (event.detail) {
        if (event.detail > 0) {
          store.commit('viewValue_down')
          store.commit('current_down')
        } else {
          store.commit('viewValue_up')
          store.commit('current_up')
        }
      }
    });

    if (window.innerWidth <= 768) {
      store.commit('showSome', false)
    }


    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && this.isWidthEnough === false) {
        store.commit('showSome', true)
      } else if (window.innerWidth <= 768 && this.isWidthEnough === true) {
        store.commit('showSome', false)
      }
    });


  }
}
</script>

<style lang="css" scoped>
#nav {
  position: absolute;
  height: 100%;
  width: 80px;
  right: 0;
  line-height: 60px;
  z-index: 666;
}

#nav ul {
  top: 45%;
  position: absolute;
}

#nav ul li {
  list-style-type: none;
  display: block;
  background-image: url(./../assets/point.svg);
  background-size: cover;
  width: 13px;
  height: 13px;
  margin-bottom: 20px;
  opacity: 0.3;
  cursor: pointer;
}

span {
  display: inline-block;
  position: absolute;
  height: 30px;
  width: 100px;
  float: left;
  background-color: #666;
  color: #eee;
  line-height: 30px;
  margin-left: -120px;
  margin-top: -10px;
  border-radius: 5px 0 0 5px;
}

span:after{
  content: '';
  display: inline-block;
  height: 0;
  width: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 12px solid #666;
  position: absolute;
  left: 100px;
  top: 5px;
}

.index {
  background-image: url(./../assets/home.svg);
}

.aboutme {
  background-image: url(./../assets/aboutme.svg);
}

.skill {
  background-image: url(./../assets/skill.svg);
}

.contact {
  background-image: url(./../assets/contect.svg);
}
.production{
  background-image: url(./../assets/project.svg);
}

.btn{
  margin-left: 49%;
}

.btn div{
  width:30px;
  height: 30px;
  position: absolute;
  z-index: 555;
}

.up{
  background-image: url(./../assets/up.svg);
  background-size: cover;
  top: 2%;
  animation: upup 2s infinite ;
}

.down{
  background-image: url(./../assets/down.svg);
  background-size: cover;
  top: 90%;
  animation: downdown 2s infinite ;
}

.tag-enter-active {
  animation: tagshow .2s;
}

.tag-leave-active {
  animation: tagshow .2s reverse;
}

@keyframes upup {
  0% {
    transform: translateY(20px);
    opacity: .7;
  }

  100% {
    transform: translateY(0px);
    opacity: 0;
  }
}

@keyframes downdown {
  0%{
    transform: translateY(10px);
    opacity: .7;
  }

  100%{
    transform: translateY(30px);
    opacity: 0;
  }
}

@keyframes tagshow {
  0% {
    transform: translateX(-20px);
    opacity: 0.3;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
