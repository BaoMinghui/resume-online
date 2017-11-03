<template>
  <div id="index">
    <div id="left"></div>
    <div id="right">
      <p>我叫包明辉
        <br>前端工程师一枚
        <br>var_bmh@outlook.com</p>
    </div>
  </div>
</template>
<style scope>
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
  width: 30%;
  clear:
}

#left {
  border-right: 3px solid white;

}

#right {
  font-size: 1.5em;
  color: white;
}

#right p {
  padding-top: 17%;
  margin-left: 3%;
  float: left;
  text-align: left;
  line-height: 50px;
}

</style>
