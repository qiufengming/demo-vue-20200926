<template>
    <div class="vuex_demo_wrap">
        
    </div>
</template>

<script>
    export default {
        components: {},
        data(){
            return {
                isShowDemo: false,
                activeDemo: '',
            };
        },
        created(){
            this.initData();
        },
        mounted(){},
        methods: {
            // 初始化数据
            initData(){
                let self = this;
            },
        },
    };
</script>

<style lang="less" rel="stylesheet/less" type="text/less" scoped>
.vuex_demo_wrap{
    padding: 20px;
    
}
</style>
