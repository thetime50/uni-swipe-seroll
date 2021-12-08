<template>
    <view class="component-product list-page">
        <view class="header flex-0">
            <pageTabs :tabs="tabs" v-model="current"/>
        </view>
        <view class="flex-1">
            <swiper class="swiper" :indicator-dots="false" :autoplay="false"
                :current="current"
                @change="swipChanger">
                <swiper-item>
                    <productList :routeParam="param"/>
                </swiper-item>
                <swiper-item>
                    <productList :routeParam="param"/>
                </swiper-item>
            </swiper>
        </view>
    </view>
</template>

<script>
    /* message */
    import pageTabs from "@/components/list/pageTabs.vue"
    import productList from "./components/productList.vue"

    export default {
        name: "product",
        components:{
            pageTabs,
            productList,
        },
        data () {
            return {
                current:0,
                tabs:['page2','page3'],
                param:null,
            };
        },
        methods:{
            swipChanger(event){
                this.current = event.detail.current
            },
        },
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "@/components/list/list.scss";
    .component-product{
        height: 100vh;
    }
    .swiper{
        height: 100%;
    }
</style>