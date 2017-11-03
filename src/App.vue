<template>
<div id="app">
  <div id="nav">
    <ul @click='eventAgency($event)'>
      <li><span class="index"></span></li>
      <li><span class="aboutme"></span></li>
      <li><span class="skill"></span></li>
      <li><span class="production"></span></li>
      <li><span class="contact"></span></li>
    </ul>
  </div>
  <transition :name="viewValue">
    <component :is="componentsArr[current]"></component>
  </transition>
</div>
</template>
<script>
import aboutme from "@/components/aboutme"
import index from "@/components/index"
import contact from "@/components/contactme"
import skill from "@/components/myskill"
import production from "@/components/production"

export default {
  name: 'app',
  components: {
    aboutme,
    index,
    contact,
    production,
    skill
  },
  data() {
    return {
      current: 0,
      componentsArr: [
        'index',
        'aboutme',
        'skill',
        'production',
        'contact'
      ],
      viewValue: 'view-up'
    }
  },

  methods: {
    eventAgency: function(ev) {
      const event = ev || window.event;
      const target = ev.target || window.srcElement;
      const index = this.componentsArr.indexOf(target.className);
      if(index<this.current){
        this.viewValue = 'view-up'
      }else{
        this.viewValue = 'view-down'
      }
      this.current = index
    }
  },

  mounted() {
    window.addEventListener('mousewheel', (event) => {
      if (event.wheelDelta < 0) {
        this.viewValue = 'view-down'
        this.current < this.componentsArr.length-1 ? this.current += 1 : null
      } else {
        this.viewValue = 'view-up'
        this.current > 0 ? this.current -= 1 : null
      }
    })
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

#nav {
  position: absolute;
  height: 100%;
  width: 80px;
  background-color: #B8FFB8;
  right: 0;
  line-height: 60px;
  z-index: 3;
}

#nav ul {
  top: 35%;
  position: absolute;
}

#nav ul li {
  list-style-type: none;
  line-height: 0;
}

#nav ul li span {
  height: 40px;
  width: 80px;
  display: inline-block;
}

.index {
  background-color: #B0C7D1;
}

.aboutme {
  background-color: #8aa1ab;
}

.skill {
  background-color: #E4E8EB;
}

.contact {
  background-color: #c9c88f;
}
.production{
  background-color: #D4D392;
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
