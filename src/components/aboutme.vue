<template>
  <div id="aboutme">
    <h1>关于我</h1>
    <br />
    <p>唯独咱在写bug这件事，请务必保密</p>
    <div class="msg" :class="{phone:!isWidthEnough,pc:isWidthEnough}">
      <ul>
        <li v-for="(value,key) in msg" :key="key">{{key}} : {{value}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  data() {
    return {
      msg: {
        姓名: "包明辉",
        性别: "男",
        户籍: "宁波",
        学历: "本科",
        状态: "在职",
        邮箱: "var_bmh@outlook.com"
      }
    };
  },
  computed: {
    isWidthEnough() {
      return store.state.isWidthEnough;
    }
  }
};
</script>
<style scoped>
#aboutme {
  height: 100%;
  width: 100%;
  background-color: #8aa1ab;
  position: absolute;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: center;
}

#aboutme h1 {
  font-size: 3rem;
  font-weight: lighter;
  letter-spacing: 0.3rem;
  margin-bottom: 1%;
}

#aboutme p {
  font-size: 1.3em;
  text-decoration: line-through;
  margin-bottom: 6%;
}

.msg {
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  flex-grow: 1;
}

.msg ul {
  list-style-type: none;
  line-height: 1.7em;
  text-align: left;
}

.pc::before {
  content: "";
  display: inline-block;
  float: left;
  width: 45%;
  height: 400px;
}

.phone::before {
  content: "";
  display: inline-block;
  float: left;
  width: 70px;
  height: 300px;
}

@media only screen and (max-width: 900px) {
  .msg {
    margin-left: 80px;
  }
}
</style>
