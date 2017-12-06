<template>
<div id="index">
  <div class="right" :class="{phone:!isWidthEnough}" v-html='inner'>
  </div>
</div>
</template>
<script>
import store from '@/store'
export default {
  name: 'index',
  data() {
    return {
      content: [
        '不要停止奔跑，不要回顾来路，来路无可眷恋，值得期待的只有前方',
        '',
        '我叫包明辉',
        '一名前端工程师'
      ],
      inner:''
    }
  },
  computed: {
    isWidthEnough() {
      return store.state.isWidthEnough
    }
  },
  mounted(){
      let time = 100;
      for(let i=0;i<this.content.length;i++){
        let arr = this.content[i].split('');
        arr.push("<br>");
        for(let j=0;j<arr.length;j++){
          setTimeout(()=>{
            this.inner += arr[j];
          },time += 100)
        }
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
  height: 15.3rem;
  font-size: 1.7rem;
  width: 40%;
  animation: show 2s;
  border-left: 3px solid;
  text-align: left;
  line-height: 50px;
  padding-left: 1em;
}

@media only screen and (max-width: 900px) {
    .right {
        font-size: 1.2rem;
    }
}

@keyframes show {
  from {
    height: 0rem
  }
  to {
    height:15.3rem
  }
}

.phone {
  width: 60%;
  margin-top: 30%;
}

</style>
