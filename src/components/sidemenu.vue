<template lang="html">
  <div id="nav" v-show='isWidthEnough'>
    <ul @click='eventAgency($event)'>
      <li v-for="item in componentsArr" :class="item"></li>
    </ul>
  </div>
</template>

<script>
import store from '@/store'
import {mapState} from 'vuex'

export default {
  name: 'sidemenu',
  computed: mapState([
    'current',
    'componentsArr',
    'isWidthEnough'
    ]),
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
        store.commit('current_init',index)
    }
  },

  mounted() {
    window.addEventListener('mousewheel', (event) => {
      if (event.wheelDelta < 0) {
        store.commit('viewValue_down')
        this.current < this.componentsArr.length - 1 ? store.commit('current_down') : null;
      } else {
        store.commit('viewValue_up')
        this.current > 0 ? store.commit('current_up') : null
      }
    });
    window.addEventListener('resize',()=>{
      if(window.innerWidth>929&&this.isWidthEnough===false){
        store.commit('showSome',true)
      }else if(window.innerWidth<=729&&this.isWidthEnough===true){
        store.commit('showSome',false)
      }
    })
  }
}
</script>

<style lang="css">
#nav {
  position: absolute;
  height: 100%;
  width: 80px;
  right: 0;
  line-height: 60px;
  z-index: 666;
}

#nav ul {
  top: 35%;
  position: absolute;
  line-height: 0;
}

#nav ul li {
  list-style-type: none;
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
</style>
