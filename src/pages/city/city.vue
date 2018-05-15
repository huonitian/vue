<template>
	<div>
		<city-header></city-header>
		<city-search :cities="cities"></city-search>
		<city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
		<city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
	</div>
</template>
<script>
import axios from 'axios'
import cityHeader from './components/header'
import citySearch from './components/search'
import cityList from './components/list'
import cityAlphabet from './components/alphabet'
export default{
	name: 'city',
	components: {
		cityHeader,
		citySearch,
		cityList,
		cityAlphabet
	},
	data () {
		return {
			cities: {},
			hotCities: [],
			letter: ''
		}
	},
	methods: {
		getCityInfo () {
			axios.get("https://api.myjson.com/bins/13cwke")
			.then(this.handleGetCityInfoSucc)
		},
		handleGetCityInfoSucc (res) {
			res = res.data
			if(res.ret && res.data){
				const data = res.data
				this.cities = data.cities
				this.hotCities = data.hotCities
			}
		},
		handleLetterChange (letter) {
			this.letter = letter
		}
	},
	mounted () {
		this.getCityInfo()
	}
}
</script>
<style></style>