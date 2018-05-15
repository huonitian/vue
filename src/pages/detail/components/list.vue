<template>
    <div>
        <div class="item" v-for="(item, index) in list" :key="index">
            <div class="item-title border-bottom">
                <span class="tiem-title-icon"></span>
                {{ item.title }}
            </div>
            <div v-if="item.children">
                <detail-list class="item-children" :list="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'detailList',
    props: {
        list: Array
    }
}
</script>
<style lang="stylus" scoped>
.item-title
    line-height .8rem
    font-size .32rem
    padding 0 .2rem
    .tiem-title-icon
        position relative
        left .06rem
        top .06rem
        display inline-block
        width .36rem
        height .36rem
.item-children
    margin-left .2rem
</style>


