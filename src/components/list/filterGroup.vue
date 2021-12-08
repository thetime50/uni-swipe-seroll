<template>
    <filterItem class="component-filter-group" :visible.sync="visible" 
        :active="isActive"
        :showIcon="false">
        <template v-slot:label>
            <view class="label">
                筛选<image lazy-load v-if="isActive" class="icon kicon-filter_b" :src="icons.list_filter_b" />
                <image lazy-load v-else class="icon kicon-filter" :src="icons.list_filter" />
            </view>
        </template>
        <!-- <view class="filter-group-content">
            <slot />
        </view> -->
        
		<scroll-view
		 class="scontent"
		 :enable-flex="true"
		 :scroll-y="true"
		 :scroll-x="false">
			<view class="scroll-content"><slot></slot></view>
		</scroll-view>
        <view class="btn-wrap flex">
            <view class="btn clear flex-0" @click="clearClick">重置</view>
            <view class="btn confirm flex-1" @click="confirmClick">完成</view>
        </view>
    </filterItem>
</template>

<script>
    /* message */
    import filterItem from "@/components/list/filterItem.vue"
    import {cloneDeep} from 'lodash'
    import {icons} from '@/utils/kgjIcon.js'

    export default {
        name: "filter-group",
        components:{
            filterItem,
        },
        props:{
            value:{type: Object,default: ()=>({})},
            verify:{type: Function,default: ()=>(()=>{})},
        },
        data () {
            return {
                icons,
                visible:false,
                backData:{} // clear 用的
            };
        },
        created(){
            this.backData = cloneDeep(this.value_)
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
            isActive(){
                // console.log(`JSON.stringify(this.value_) != JSON.stringify(this.backData)`, JSON.stringify(this.value_) , JSON.stringify(this.backData))
                return JSON.stringify(this.value_) != JSON.stringify(this.backData)
            },
        },
        methods:{
            clearClick(){
                this.value_ = cloneDeep(this.backData)
                this.visible= false
                this.$emit('clear',this.value_)
            },
            confirmClick(){
                try{
                    this.verify()
                    this.visible= false
                    this.$emit('confirm',this.value_)
                }catch (error) {
                    uni.showToast({
                        title: error.message,
                        icon: 'none'
                    })
                }
            },
        },
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .component-filter-group{
        
    }
    .icon{
        margin-left: 4rpx;
        position: relative;
        top: 2rpx;
        vertical-align: center;
    }
    .scroll-content{
        padding-bottom: 24rpx;
    }
    .btn-wrap{
        margin-top: 36rpx;
        .btn {
            padding:18rpx;
            font-weight: 500;
            font-size: 28rpx;
            line-height: 44rpx;
            text-align: center;
            color: #666666;
            border: 0;
            background-color: #F8F8F8;
            border-radius: 8rpx;
        }
        .clear{
            width: 192rpx;
            margin-right: 24rpx;
        }
        .confirm{
            color: #FFFFFF;
            background: #4975E9;
        }
    }
    // .filter-group-content{
    //     overflow: auto;
    //     max-height: 45vh;
    // }
    .scontent{
        max-height: 45vh;
    }
</style>