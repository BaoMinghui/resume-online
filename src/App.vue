<template>
<div id="app">
  <sidemenu v-if="side"></sidemenu>
  <transition :name="viewValue">
    <component :is="componentsArr[current]" :class="{wphone:!isWidthEnough,nophone:isWidthEnough}"></component>
  </transition>
</div>
</template>
<script>
import aboutme from "@/components/aboutme"
import index from "@/components/index"
import contact from "@/components/contactme"
import skill from "@/components/myskill"
import production from "@/components/production"
import sidemenu from "@/components/sidemenu"
import store from "@/store"
import {
  mapState
} from 'vuex'

export default {
  name: 'app',
  components: {
    aboutme,
    index,
    contact,
    production,
    skill,
    sidemenu
  },
  data() {
    return {
      side: true
    }
  },

  computed:{
    ...mapState([
      'current',
      'viewValue',
      'componentsArr',
      'isWidthEnough'
    ])
  },

  methods:{
    nextPage(){
      if(this.current<this.componentsArr.length-1){
        store.commit('current_down')
        store.commit('viewValue_down')
      }
    }
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

body {
  overflow: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}


.nophone{
  padding-top: 10%;
}

.wphone {
  padding-top: 20%;
}

.view-up-enter-active {
  animation: downdown 0.4s
}

.view-up-leave-active {
  animation: upup 0.4s
}

.view-down-enter-active {
  animation: upup 0.4s reverse
}

.view-down-leave-active {
  animation: downdown 0.4s reverse
}

@keyframes upup {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
}

@keyframes downdown {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
