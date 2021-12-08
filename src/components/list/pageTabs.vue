<template>
    <!-- <view class="component-page-tabs mlr-20">
    </view> -->
    <menuHeader :wrapStyle="{
        'margin-left':'40rpx',
        'margin-right':'40rpx',
    }"
    >
        <template v-slot:left>
            <view class="content flex crossCenter">
                <template v-for="(item,index) in tabs">
                    <text :class="{text:true,active: value_==index}" :key="item"
                        @click="itemClick(index)">{{item}}</text>
                </template>
            </view>
        </template>
        <!-- <template v-slot:center>
            center
        </template>
        <template v-slot:right>
            right
        </template> -->
    </menuHeader>
</template>

<script>
    /* message */
    import menuHeader from "@/components/menuHeader/menuHeader.vue"

    export default {
        name: "page-tabs",
        components:{
            menuHeader,
        },
        props:{
            value:{type: Number,default:0},
            tabs:{type: Array,required: true},
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
            }
        },
        methods:{
            itemClick(val){
                this.value_ = val
            },
        },
    }
</script>

<style lang="scss" scoped>
    .component-page-tabs{
    }
    .text{
        font-weight: 600;
        font-size: 32rpx;
        line-height: 44rpx;
        color: #999999;
        margin-right: 32rpx;
        &:last-child{
            margin-right: 0rpx;
        }
        &.active{
            font-weight: 600;
            font-size: 40rpx;
            line-height: 56rpx;
            color: #333333;
        }
        &:first-child:not(.active){
            margin-left: 16rpx;
        }
    }
    .content{
        width: 100%;
    }
</style>