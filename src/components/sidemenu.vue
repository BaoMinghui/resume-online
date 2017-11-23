<template lang="html">
<div>
  <div id="nav" v-show='isWidthEnough'>
    <ul @click='eventAgency($event)'>
      <li v-for="item in componentsArr" :class="item"> <span></span> </li>
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
      if (index < this.current) {
        store.commit('viewValue_up')
      } else {
        store.commit('viewValue_down')
      }
      store.commit('current_init', index)
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

  mounted() {
    let mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel";
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


    window.addEventListener('resize', () => {
      if (window.innerWidth > 929 && this.isWidthEnough === false) {
        store.commit('showSome', true)
      } else if (window.innerWidth <= 929 && this.isWidthEnough === true) {
        store.commit('showSome', false)
      }
    })
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
</style>
