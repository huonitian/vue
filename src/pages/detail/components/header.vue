<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <div class="iconfont header-abs-icon">&#xe624;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>
<script>
export default {
    name: 'detailHeader',
    data () {
        return {
            showAbs: true,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    methods: {
        handleScroll () {
            const top = document.documentElement.scrollTop
            if (top > 60) {
                let opacity = top / 140
                opacity = opacity > 1 ? 1 : opacity
                this.opacityStyle = { opacity }
                this.showAbs = false
            } else {
                this.showAbs = true
            }
        }
    },
    activated () {
        window.addEventListener('scroll', this.handleScroll)
    },
    deactivated () {
        window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    line-height .8rem
    border-radius 50%
    text-align center
    background rgba(0, 0, 0, .8)
    .header-abs-icon
        color #fff
        font-size .4rem
.header-fixed
    z-index 2
    position fixed
    top 0
    left 0
    right 0
    height: $headerHeight
    line-height $headerHeight
    font-size .32rem
    text-align center 
    color #fff
    background $bgColor
	.header-fixed-back
		width .64rem
		text-align center
		font-size .4rem
		color #fff
		position absolute
		top 0
		left 0
</style>


