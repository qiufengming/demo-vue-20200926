<template>
    <div class="left-nav">
        <el-row>
            <el-col :span="20"><el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input></el-col>
            <el-col :span="4" style="font-size: 24px;text-align: center;line-height: 40px;">
                <i class="el-icon-s-tools" @click="openConfNavTreeDlg"></i>
            </el-col>
        </el-row>
        
        
        <el-tree class="filter-tree" :data="navTree" :props="defaultProps" node-key="id"
            @node-click="nodeClick" default-expand-all :filter-node-method="filterNode" ref="tree"
            :expand-on-click-node="false"
        ></el-tree>

        <confNavTreeDlg :confTreeDlg.sync="confTreeDlg"></confNavTreeDlg>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import confNavTreeDlg from './confNavTreeDlg.vue'
    export default {
        components: { confNavTreeDlg },
        data(){
            return {
                filterText: '',
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                confTreeDlg: false,
            };
        },
        computed: {
            ...mapGetters(['navTree', 'activeNav']) // 动态计算属性，相当于this.$store.getters.resturantName
        },
        watch: {
            filterText(val) {
                this.$refs.tree.filter(val);
            }
        },
        created(){},
        mounted(){
            let self = this;
            if(!self.activeNav || self.activeNav==''){
                self.$store.dispatch('setActiveNav', self.navTree[0].id);
                // self.activeNav = self.navTree[0].id;
                self.$refs.tree.setCheckedKeys([self.activeNav]);
            }
        },
        methods: {
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            },
            // 点击树节点
            nodeClick(data, node, treeNode){
                let self = this;
                let id = data.id;
                let hasChild = data.children&&data.children.length ? true : false;
                document.getElementById('nav_'+id).scrollIntoView();

                self.$refs.tree.setCheckedKeys([data.id]);
                // self.activeNav = data.id;
                self.$store.dispatch('setActiveNav', data.id);
            },
            // 打开配置导航树
            openConfNavTreeDlg(){
                let self = this;
                self.confTreeDlg = true;
            },
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .left-nav{
        padding: 2px; background-color: #f7b6ec;
    }
</style>