<template>
<div id="index">
  <div id="left">
    <p v-text='left'></p>
  </div>
  <div id="right">
    <p v-for='item in right'>{{item}}</p>
  </div>
</div>
</template>
<script>
  export default{
    name:'index',
    data(){
      return{
        left:'hellohellohellohellohellohellohellohellosdf',
        right:[
          '包明辉',
          '前端工程师'
        ]
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
  padding-top: 20%;
}

#right,
#left {
  float: left;
  display: inline-block;
  height: 30%;
}

#left {
  margin-left: 30%;
  border-right: 3px solid;
  width: 20%;
}

#right {
  font-size: 1.5em;
  width: 20%;
  padding-top: 8%;
}

#left p {
  text-align: left;
  line-height: 1.5em;
  font-size: 1.5em;
  width: 80%;
  word-break:break-word;
}

#right p {
  text-indent: 1em;
  display: block;
  text-align: left;
  line-height: 50px;
}
</style>
