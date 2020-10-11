<template>
    <div class="rule_wrap">
        规则
        <div>当前规则的ID： {{currNav}}</div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    export default {
        components: {},
        data(){
            return {
                mymsg: '这是第二个页面哦~',
            };
        },
        computed: {
            navData: function(){
                let self = this;
                return self.$store.getters.navTree;
            },
            currNav: function(){
                let self = this;
                return self.$store.getters.activeNav;
            },
            ...mapGetters(['navTree', 'activeNav']) // 动态计算属性，相当于this.$store.getters.resturantName
        },
        methods: {
            getMessage(val){
                alert(val);
            },
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .rule_wrap{
        padding: 20px;
    }
</style>