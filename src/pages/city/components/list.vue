<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">{{ this.currentCity }}</div>
						<!-- <div  class="button">{{ this.$store.state.city }}</div> -->
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper" 
						v-for="item in hot" 
						:key="item.id" 
						@click="handleCityClick(item.name)"
					>
						<div class="button">{{ item.name }}</div>
					</div>
				</div>
			</div>
			<div class="area" v-for="( item, key ) in cities" :key="key" :ref="key">
				<div class="title border-topbottom">{{ key }}</div>
				<div class="item-list">
					<div class="item border-bottom" 
						v-for="innnerItem in item" 
						:key="innnerItem.id" 
						@click="handleCityClick(innnerItem.name)"
					>
						{{ innnerItem.name }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default{
	name: 'cityList',
	props: {
		cities: Object,
		hot: Array,
		letter: String
	},
	methods: {
		handleCityClick (city) {
			// this.$store.commit('changeCity', city)
			this.changeCity(city)
			this.$router.push({name: "home"})
		},
		...mapMutations(['changeCity'])
	},
	computed: {
		...mapState({
			currentCity: 'city'
		})
	},
	mounted () {
		this.scroll = new Bscroll(this.$refs.wrapper)
	},
	watch: {
		letter () {
			if (this.letter) {
				const element = this.$refs[this.letter][0]
				this.scroll.scrollToElement(element)
			}
		}
	}
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
	&:before
		border-color #ccc
	&:after
		border-color #ccc
.border-bottom
	&:before
		border-color #ccc
.list
	overflow hidden
	position absolute
	top 1.58rem
	bottom 0
	left 0
	right 0
	.title
		line-height .54rem
		background #eee
		font-size .3rem
		color #666
		padding-left .2rem
	.button-list
		overflow hidden
		padding .1rem .6rem .1rem .1rem
		.button-wrapper
			float left
			width 33.33%
			.button
				margin .1rem
				padding .1rem 0
				text-align center
				border .02rem solid #ccc
	.item-list
		.item
			line-height .76rem
			padding-left .2rem
</style>