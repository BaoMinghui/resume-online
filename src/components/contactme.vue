<template>
	<div id="contect">
		<h1>务必联系在下</h1>
		<div class="msg">
			<p v-for="msg in msgs">{{ msg }}</p>
		</div>
		<a href="resume.pdf" download="包明辉.pdf">点击下载我的简历</a><br>
		<div class="finger"></div>
	</div>
</template>

<script type="text/javascript">
	export default({
		data(){
			return{
				msgs:['与其感慨路难行，不如马上出发']
			}
		}
	})
</script>

<style scoped>
  #contect{
  	height: 100%;
  	width: 100%;
  	background-color: #c9c88f;
  	position: absolute;
  }

	#contect h1 {
		font-size: 2.5em;
		font-weight: lighter;
		letter-spacing: .3em;
		margin-bottom: 1%;
	}

	.msg {
		margin-top: 5%;
		font-size: 1.3em;
	}

	#contect a{
		margin-top: 10%;
		display: inline-block;
		width: 12em;
		height: 2em;
		color: #555;
		text-decoration: none;
		font-size: 1.5rem;
	}

	.finger {
		background-image: url("./../assets/finger.svg");
		background-size: cover;
		width: 50px;
		height: 50px;
		display: inline-block;
		animation: up 1s infinite;
		margin-top: 10px;
	}

	@keyframes up{
		0% {
			transform: translateY(-20px);
		}
		50% {
			transform: translateY(0px);
		}
		100% {
			transform: translateY(-20px);
		}
	}
</style>
