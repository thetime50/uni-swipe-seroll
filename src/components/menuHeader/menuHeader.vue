<template>
    <view class="component-menu-header flex crossCenter mainJustify" :style="blockStyle">
        <view class="left flex crossCenter mainJustify"> 
            <image lazy-load class="kicon-back" v-if="back" :src="icons.list_back"  @click="gotoBack"/>
            <view class="l">
                <slot name="left" />
            </view>
        </view> 
        <view class="center">
            <slot name="center" />
        </view>
        <view class="center-dummy">
            <slot name="center" />
        </view>
        <view class="right">
            <slot name="right" />
        </view>
        <!-- </text> -->
    </view>
</template>

<script>
    /* message */
    import {icons} from '@/utils/kgjIcon.js'
    import {obj2StyleStr} from "@/utils/tool.js"

    export default {
        name: "menu-header",
        props:{
            back:{type:Boolean,default:false},
            wrapStyle:{type:String|Object,default:''},
        },
        data () {
            return {
                icons,
                blockStyle:'',
            };
        },
        mounted () {
            //获取胶囊按钮的布局位置信息
            uni.getSystemInfo({
                success:(e)=>{
                    //获取状态栏高度
                    let statusBarHeight = e.statusBarHeight;
                    //获取胶囊按钮的信息
                    let style = {}
                    let menuButtonInfo = uni.getMenuButtonBoundingClientRect();
                    style = {
                        'padding-top':menuButtonInfo.top+'px',
                        'height':menuButtonInfo.height+'px',
                    }
                    
                    let res = obj2StyleStr(style)
                    
                    let ws = ''
                    if(typeof(this.wrapStyle) == 'string'){
                        ws = this.wrapStyle
                    }
                    if(typeof(this.wrapStyle) == 'object'){
                        ws = obj2StyleStr(this.wrapStyle)
                    }
                    this.blockStyle = res + ws
                    // 绑定style rpx会自动转换px
                }
            });
        },
        methods: {
            gotoBack(){
                uni.navigateBack() // ??
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .component-menu-header{
        // position: relative;
        margin-left: 14rpx;
        margin-right: 14rpx;

        height: 100rpx;
    }
    .center{
        // position: absolute;
        // left: 50%;
        // top: 50%;
        // transform: translateX(-50%) translateY(-50%);
    }
    .center-dummy{
        visibility: hidden;
    }
</style>