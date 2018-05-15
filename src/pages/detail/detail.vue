<template>
    <div>
        <detail-banner 
            :sightName="sightName"
            :bannerImg="bannerImg"
            :gallaryImgs="gallaryImgs"
        ></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>
<script>
import detailBanner from './components/banner'
import detailHeader from './components/header'
import detailList from './components/list'
import axios from 'axios'
export default {
    name: "detail",
    components: {
        detailBanner,
        detailHeader,
        detailList  
    },
    data () {
        return {
            defultId: '',
            sightName: '',
            bannerImg: '',
            gallaryImgs: '',
            list: []
        }
    },
    methods: {
        getDetailInfo () {
            axios.get('https://api.myjson.com/bins/7x7tq',{
                params: {
                    id: this.$route.params.id
                }
            }).then(this.handleGetDataSucc)
        },
        handleGetDataSucc (res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                this.sightName = data.sightName
                this.bannerImg = data.bannerImg
                this.gallaryImgs = data.gallaryImgs
                this.list = data.categoryList
            }
        }
    },
    activated () {
        if(this.defultId !== this.$route.params.id){
            this.defultId = this.$route.params.id
            this.getDetailInfo()
        }
    }
}
</script>
<style lang="stylus" scoped>
.content
    height 50rem
</style>


