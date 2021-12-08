<template>
    <filterGroup class="component-product-filter"
        v-model="value_"
        :verify="verify"
        @clear="onClear"
        @confirm="onConfirm">
        <view class="h1">h1</view>
        <view class="h2">h2</view>
    </filterGroup>
</template>

<script>
    /* message */
    import filterGroup from "@/components/list/filterGroup.vue"
    export default {
        name: "product-filter",
        components:{
            filterGroup,
        },
        props:{
            value:{type: Object,default: ()=>({})},
        },
        data () {
            return {
            };
        },
        computed:{
            value_:{
                get(){
                    return this.value
                },
                set(val){
                    this.$emit('input',val)
                }
            },
        },
        methods:{
            verify(){
                // 
            },
            onClear(val){
                this.$emit('clear',val)
            },
            onConfirm(val){
                this.$emit('confirm',val)
            },
        },
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "@/components/list/filterGroup.scss";
    .component-product-filter{
        
    }
    .price-row{
        font-size: 24rpx;
        line-height: 36rpx;
        color: #666666;
        .diveder{
        //     width: 20rpx;
        //     border: 2rpx solid #333333;
            padding: 0 24rpx;
        }
    }
    .price-item{
        width: 200rpx;
        padding-bottom: 12rpx;
        border-bottom: 2rpx solid #dddddd;
        .text{
            margin-right: 12rpx;
        }
        input{

        }
    }
</style>