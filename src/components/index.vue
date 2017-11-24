<template>
<div id="index">
  <div class="right" :class="{phone:!isWidthEnough}">
    <p v-for='item in right'>{{item}}</p>
  </div>
</div>
</template>
<script>
import store from '@/store'
export default {
  name: 'index',
  data() {
    return {
      left: '',
      right: [
        '',
        '',
        '包明辉',
        '前端工程师'
      ]
    }
  },
  computed: {
    isWidthEnough() {
      return store.state.isWidthEnough
    }
  }
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

#index {
  height: 100%;
  width: 100%;
  background-color: #B0C7D1;
  position: absolute;
  padding-top: 15%;
  display: flex;
  justify-content: center;
  align-self: center;
  flex-wrap: nowrap;
}

.right {
  display: inline-block;
  height: 30%;
  font-size: 2em;
  width: 40%;
  animation: show 2s;
  border-left: 3px solid;
}

@keyframes show {
  from {
    height: 0
  }
  to {
    height:30%
  }
}

.phone {
  width: 60%;
  margin-top: 30%;
}


.right p {
  text-indent: 1em;
  display: block;
  text-align: left;
  line-height: 50px;
}

.right p:first-child{
  margin-top: 18%;
}
</style>
