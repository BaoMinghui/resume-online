<template>
<div id="index">
  <div class="left" v-if="isWidthEnough">
    <p v-text='left'></p>
  </div>
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
  text-align: center;
  padding-top: 15%;
}

.right,
.left {
  display: inline-block;
  height: 30%;
}

.left {
  border-right: 3px solid;
  animation: show .9s;
  width: 20%;
}

.right {
  font-size: 2em;
  width: 20%;
  padding-top: 8%;
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

.left p {
  text-align: left;
  line-height: 1.5em;
  font-size: 1.5em;
  width: 80%;
  word-break: break-word;
}

.right p {
  text-indent: 1em;
  display: block;
  text-align: left;
  line-height: 50px;
}
</style>
