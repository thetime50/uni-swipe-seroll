<template>
    <view class="component-filter-item ">
        <view class="item inline-flex crossCenter" :class="{active,tag}" @click="itemClick">
            <view class="label">
                <slot name="label">
                    {{label}}
                </slot>
            </view>
            <template v-if="showIcon">
                <template v-if="!tag">
                    <image lazy-load v-if="active" :class="{'icon':true ,'kicon-more_icon_b':true,t180:visible_}" 
                    :src="icons.list_more_icon_b" />
                    <image lazy-load v-else :class="{'icon':true ,'kicon-more_icon':true,t180:visible_}" 
                    :src="icons.list_more_icon" />
                </template>
                <template v-else>
                    <image lazy-load v-if="active" :class="{'icon':true ,'kicon-more_icon_w':true,t180:visible_}" 
                    :src="icons.list_more_icon_w" />
                    <image lazy-load v-else :class="{'icon':true ,'kicon-more_icon':true,t180:visible_}" 
                    :src="icons.list_more_icon" />
                </template>
            </template>
        </view>
        <view class="mask" v-if="visible_" @click="maskClick" @touchmove.stop.prevent="dummy"> 
            <view class="mask-1" :style="maskStyle">
                <view class="content" @click.stop="dummy">
                    <slot></slot>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    /* message */
    import {obj2StyleStr} from "@/utils/tool.js"
    import {icons} from '@/utils/kgjIcon.js'

    export default {
        name: "filter-item",
        props:{
            visible:{type:Boolean, default: false}, // sync
            tag:{type: Boolean,default: false}, // 标签样式的选择器
            active:{type: Boolean,default:false,},
            label:{type: String,default:"内容标签",},
            showIcon:{type:Boolean, default: true},//显示折叠图标
        },
        data () {
            return {
                icons,
                position:{
                    bottom:0,
                },
                maskEl:{
                    top:0,
                }
            };
        },
        mounted(){
            // this.$nextTick(async ()=>{
            //     this.position = await this.getElement(".component-filter-item")
            // })
            setTimeout(async ()=>{
                this.position = await this.getElement(".component-filter-item")
            },2)
        },
        computed:{
            maskStyle(){
                let res = {
                    top:this.position.bottom - this.maskEl.top + uni.upx2px(2) + 'px',
                    bottom:0,
                };
                return obj2StyleStr(res)
            },
            visible_:{
                get(){
                    return this.visible
                },
                set(val){
                    this.$emit('update:visible',val)
                }
            },
        },
        methods:{
            dummy(){},
            itemClick(){
                this.visible_ = !this.visible_
            },
            getElement(sel,vm){
                 return new Promise((resulve,reject)=>{
                    uni.createSelectorQuery()  
                        .in(vm || this)  
                        .select(sel)  
                        .boundingClientRect((data) => {  
                            resulve(data)                            
                        })  
                        .exec();  
                 })
            },
            maskClick(){
                this.visible_ = false
            },
        },
        watch: {
            visible_(after){
                if(after){
                    this.$nextTick(async ()=>{
                        this.maskEl = await this.getElement('.mask')
                    })
                }
            },
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .component-filter-item{
        display: inline-block;
        // padding-left: 24rpx;
        // &:first-child{
        //     padding-left: 0rpx;
        // }
    }
    .label{
        display: inline-block;
    }
    .item{
        font-size: 24rpx;
        line-height: 36rpx;
        /* identical to box height, or 150% */
        color: #333333;
        &.active{
            font-weight: 600;
            color: #4975E9;
        }
        .icon{
            // display: inline-block;
            vertical-align: bottom;
            translate: transform ease 0.2s; // todo
        }
    }
    .t180{
        transform: rotate(180deg);
    }
    .mask{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 500;
        background: rgba(0, 0, 175, 0.2);
    }
    .mask-1{
        position: absolute;
        background: rgba(0, 0, 0, 0.5);
        left: 0;
        width: 100%;
    }
    .content{
        background-color: #fff;
        padding: 36rpx 32rpx;
    }
    .item.tag{
        .label{
            padding-left: 24rpx;
        }
        .label:last-child{
            padding-right: 24rpx;
        }
        padding:6rpx;
        background: #F8F8F8;
        border-radius: 100rpx;
        &.active{
            color: #fff;
            background-color: #4975E9;
        }
    }
</style>



