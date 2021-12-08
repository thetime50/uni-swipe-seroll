<template>
    <view class="component-product-list list-page">
        <view class="header flex-0 pb-12">
            <view class="pt-12 mlr-20">
                search
            </view>
            <view class="filter-wrap pt-12 plr-20">
                <productFilterRow
                    :from.sync="from"
                    :filter.sync="filter"
                    :shot.sync="shot"
                    :shotOpt="shotOpt"
                />
            </view>
        </view>
        <view class="flex-1">
            list
        </view>
    </view>
</template>

<script>
    /* message */
    import {productShotOpt} from "@/utils/filterOptions.js"
    import productFilterRow from "./productFilterRow.vue"

    export default {
        name: "product-list",
        components:{
            productFilterRow,
        },
        props:{
            routeParam:{type: Object|null,},
        },
        data () {
            const shotOpt = productShotOpt
            return {
                keyword:"",
                from:{
                    v1:0,
                    v2:0,
                    v3:0,
                    v4:0,
                    v5:0,
                    v6:0,
                 }, // 外层的筛选选项
                filter:{ },
                shot:shotOpt[0].value, // 排序

                shotOpt,

            };
        },
        methods:{
        },
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "@/components/list/list.scss";
    .component-product-list{
        
    }
    .list-page{
        height: 100%;
    }
</style>