<template>
    <view class="component-product-filter-row filter-row">
        <view class="row1 flex">
            <view class="left flex-1">
                <scroll-view class="scroll-view"
                    :scroll-x="true"
                    :show-scrollbar='false'
                >
                    <selectItem class="filter-item"
                        :value="from_.v1" 
                        @input="(e)=>fieleChange('from_','v1',e)"
                        label="条件"
                        :options="shotOpt"/>
                    <selectItem class="filter-item"
                        :value="from_.v2" 
                        @input="(e)=>fieleChange('from_','v2',e)"
                        label="条件"
                        :options="shotOpt"/>
                    <selectItem class="filter-item"
                        :value="from_.v3" 
                        @input="(e)=>fieleChange('from_','v3',e)"
                        label="条件"
                        :options="shotOpt"/>
                    <selectItem class="filter-item"
                        :value="from_.v4" 
                        @input="(e)=>fieleChange('from_','v4',e)"
                        label="条件"
                        :options="shotOpt"/>
                    <selectItem class="filter-item"
                        :value="from_.v5" 
                        @input="(e)=>fieleChange('from_','v5',e)"
                        label="条件"
                        :options="shotOpt"/>
                    <selectItem class="filter-item"
                        :value="from_.v6" 
                        @input="(e)=>fieleChange('from_','v6',e)"
                        label="条件"
                        :options="shotOpt"/>
                </scroll-view>
            </view>
            <view class="right flex-0">
                <productFilter v-model="filter_" 
                    @clear="filterClear"
                    @confirm="filterConfirm"/>
            </view>
        </view>
        <view class="row2">
            <scroll-view class="scroll-view"
                :scroll-x="true"
                :show-scrollbar='false'
            >
                <selectItem class="filter-item"
                    :value="from_.v1" 
                    @input="(e)=>fieleChange('from_','v1',e)"
                    label="条件"
                    :options="shotOpt"
                    tag/>
                <selectItem class="filter-item"
                    :value="from_.v2" 
                    @input="(e)=>fieleChange('from_','v2',e)"
                    label="条件"
                    :options="shotOpt"
                    tag/>
                <selectItem class="filter-item"
                    :value="from_.v3" 
                    @input="(e)=>fieleChange('from_','v3',e)"
                    label="条件"
                    :options="shotOpt"
                    tag/>
                <selectItem class="filter-item"
                    :value="from_.v4" 
                    @input="(e)=>fieleChange('from_','v4',e)"
                    label="条件"
                    :options="shotOpt"
                    tag/>
                <selectItem class="filter-item"
                    :value="from_.v5" 
                    @input="(e)=>fieleChange('from_','v5',e)"
                    label="条件"
                    :options="shotOpt"
                    tag/>
                <selectItem class="filter-item"
                    :value="from_.v6" 
                    @input="(e)=>fieleChange('from_','v6',e)"
                    label="条件"
                    :options="shotOpt"
                    tag/>
            </scroll-view>
        </view>
    </view>
</template>

<script>
    /* message */
    import {set} from 'lodash'
    import selectItem from "@/components/list/selectItem.vue"
    import productFilter from "./productFilter.vue"

    import {
        times2hOpt,
    } from "@/utils/filterOptions.js"

    export default {
        name: "product-filter-row",
        components:{
            selectItem,
            productFilter,
        },
        props:{
            from:{type:Object,required:true}, // sync
            filter:{type:Object,required:true}, // sync
            shot:{type:Object|String,required:true}, // sync
            shotOpt:{type:Array,required:true}
        },
        data () {
            return {
                times2hOpt,
            };
        },
        computed:{
            from_:{
                get(){
                    return this.from
                },
                set(val){
                    this.$emit('update:from',val)
                }
            },
            filter_:{
                get(){
                    return this.filter
                },
                set(val){
                    this.$emit('update:filter',val)
                }
            },
            shot_:{
                get(){
                    return this.shot
                },
                set(val){
                    this.$emit('update:shot',val)
                }
            },
        },
        methods:{
            fieleChange(target,field,val){
                // field 为空时好像没效果
                if(field){
                    set(this[target], field, val)
                }
                this[target] = this[target] //触发事件 更新模板
            },
            filterClear(val){
                this.$emit('clear',val)
            },
            filterConfirm(val){
                this.$emit('confirm',val)
            },
        },
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "@/components/list/filterRow.scss";
    .component-product-filter-row{
        
    }
</style>