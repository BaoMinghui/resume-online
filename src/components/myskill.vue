<template>
<div id="skill">
  <h1>技能栈</h1>
  <p>要是一开始就只选择自己能做得到的事情，那么什么都将不能开始</p>
  <div class="tag">
    <span v-for="tag in _skillTag" :style="{backgroundColor:getColor(),height:15+tag.value/2+'px',width:tag.value*1.8+'px',lineHeight:15+tag.value/2+'px',fontSize:tag.value/3+'px'}">{{tag.title}}</span>
  </div>
	<div class="describe">
		<p v-for='item in describe'>{{item}}</p>
	</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      skillTag: [{
        title: 'html',
        value: 80
      }, {
        title: 'css',
        value: 80
      }, {
        title: 'javascript',
        value: 80
      }, {
        title: 'vue.js',
        value: 50
      }, {
        title: 'jquery',
        value: 50
      }, {
        title: 'webpack',
        value: 50
      }, {
        title: 'node.js',
        value: 30
      },{
				title:'sass',
				value:40
			}],
      color: [
        '#FF7C00', '#BF3D30', '#BF7630','#206876','#FFC440'
      ],
			describe:[
				'能够编写语义化的 HTML，完成较复杂的布局',
				'熟悉原生js，能脱离jQuery等库编码',
				'了解使用sass进行css预处理',
				'了解模块化，面向对象编程',
				'了解Vue jQuery的使用'
			]
    }
  },
  methods: {
    getColor() {
      return this.color[Math.floor(Math.random() * 5)]
    }
  },
	computed:{
		_skillTag(){
			return this.skillTag.sort(function(){ return 0.5 - Math.random() })
		}
	}
}
</script>

<style scoped>
#skill {
  height: 100%;
  width: 100%;
  background-color: #E4E8EB;
  position: absolute;
  padding-top: 5%;
}

#skill h1 {
  font-size: 2.5em;
  font-weight: lighter;
  letter-spacing: .3em;
  margin-bottom: 2%;
}

#skill p {
  font-size: 1.1em;
	line-height: 1.5em;
	margin-bottom: 3%;
}

.tag {
	width: 30%;
  position: relative;
	display: inline-block;
	margin-right: 5%;
}

.describe {
	width: 30%;
	display: inline-block;
	position: relative;
	text-align: left;
	line-height: 1.5em;
	font-size: 1.1em;
}

.tag span {
  display: inline-block;
  margin: .4em;
  border-radius: 5%;
	font-size: 1em;
	color: #DEDEDE;
}


</style>
