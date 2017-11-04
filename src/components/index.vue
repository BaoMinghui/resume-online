<template>
<div id="index">
  <div id="left"></div>
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
        left:[],
        right:[
          '包明辉',
          '前端工程师',
          'var_bmh@outlook.com'
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
  padding-top: 15%;
}

#right,
#left {
  display: inline-block;
  height: 40%;
}

#left {
  border-right: 3px solid;
  width: 30%;
}

#right {
  font-size: 1.5em;
  width: 20%;
  padding-bottom: 5px;
}

#right p {
  text-indent: 1em;
  display: block;
  text-align: left;
  line-height: 50px;
}
</style>
