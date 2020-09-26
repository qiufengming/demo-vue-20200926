<template>
    <div class="jsplumb_wrap">
        jsplumb
    </div>
</template>

<script>
    export default {
        components: {},
        data(){
            return {
                showDemo: {},
                stage16: null,
            };
        },
        created(){
            
        },
        mounted(){
            let self = this;
        },
        methods: {
            // 初始化数据
            initData(){
                let self = this;
            },
            // 切换显示demo
            changeDemoState(demoNum){
                let self = this;
                self.$set(self.showDemo, demoNum, !self.showDemo[demoNum]);
            },


        },
    };
</script>

<style lang="less" rel="stylesheet/less" type="text/less" scoped>
.jsplumb_wrap{
    padding: 20px;
}
</style>
