<!-- 选择器单元 -->
<template>
    <filterItem class="component-component_name"
        :visible.sync="visible"
        :label="showLabel"
        :active="isActiveSel"
        :tag="tag">
		<scroll-view
		 class="option-wrap"
		 :enable-flex="true"
		 :scroll-y="true"
		 :scroll-x="false">
			<view >
                <template v-for="(item,index) in options">
                    <view :class="{item:true,active:item[valueField] === value_ }" :key="item[valueField]"
                        @click="itemClick(item,index)">
                        <image lazy-load v-show="item[valueField] === value_" class="icon kicon-tick" :src="icons.list_tick" />
                        {{item[labelField]}}
                    </view>
                </template>
            </view>
		</scroll-view>
    </filterItem>
</template>

<script>
    /* message */
    import {icons} from '@/utils/kgjIcon.js'
    import filterItem from "@/components/list/filterItem.vue"

    export default {
        name: "selectItem",
        props:{
            value:{type: String|Number,default: 0},
            label:{type: String,default:"内容标签",},// 选项为空时显示
            tag:{type: Boolean,default: false}, // 标签样式的选择器
            options:{type: Array,default: ()=>([{value:0,label:"不限"}])},

            labelField:{type: String,default:"label",},
            valueField:{type: String,default:"value",},
        },
        components:{
            filterItem,
        },
        data () {
            return {
                icons,
                visible:false,
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
            isActiveSel(){
                // console.log(`this.icons`, this.icons.list_tick)
                return this.value_!=0
            },
            showLabel(){
                const match = this.options.find((v)=>{return v[this.valueField] == this.value_})
                return this.value_ && match ? match[this.labelField] : this.label
            },
        },
        methods:{
            itemClick(item,index){
                this.value_ = item[this.valueField]
                this.visible = false
            },
        },
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .component-component_name{
        
    }
    .option-wrap{
        max-height: 55vh;
    }
    .item{
        padding: 20rpx 8rpx;
        
        font-weight: 500;
        font-size: 24rpx;
        line-height: 36rpx;
        color: #333333;
        &:first-child{
            padding-top: 0;
        }
        &:last-child{
            padding-bottom: 0;
        }
        &.active{
            color: #4975E9;
        }
        
        .icon{
            vertical-align: center;
            margin-right: 12rpx;
        }
    }
</style>