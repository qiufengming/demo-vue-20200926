<template>
    <el-dialog title="配置导航树" :visible.sync="confTreeDlg" width="90%" :close-on-click-modal="false">
        <el-table
            :data="data"
            style="width: 100%;margin-bottom: 20px;" height="300"
            row-key="id"
            border
            default-expand-all
            :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
        >
            <el-table-column prop="label" label="名称" sortable width="230">
                <template slot-scope="scope">
                    <el-input v-if="scope.row.isEdit" type="text" placeholder="请输入导航名称" v-model="scope.row.label" maxlength="255" show-word-limit > </el-input>
                    <span v-else> {{ scope.row.label }} </span>
                </template>
            </el-table-column>
            <el-table-column prop="author" label="作者" sortable width="180">
                <template slot-scope="scope">
                    <el-input v-if="scope.row.isEdit" type="text" placeholder="请输入作者" v-model="scope.row.author" maxlength="255" show-word-limit > </el-input>
                    <span v-else> {{ scope.row.author }} </span>
                </template>
            </el-table-column>
            <el-table-column prop="intro" label="简介" sortable>
                <template slot-scope="scope">
                    <el-input v-if="scope.row.isEdit" type="text" placeholder="请输入简介" v-model="scope.row.intro" maxlength="255" show-word-limit > </el-input>
                    <span v-else> {{ scope.row.intro }} </span>
                </template>
            </el-table-column>

            <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                    <el-button @click="delNavTree(scope.row)" type="text" size="small">删除</el-button>
                    <el-button @click="editNavTree(scope.row)" type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>


        <span slot="footer" class="dialog-footer">
            <el-button @click="closeDlg">取 消</el-button>
            <el-button type="primary" @click="saveDlg">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    export default {
        components: {},
        props: {
            confTreeDlg: {
                type: Boolean,
                default: false
            },
        },
        data(){
            return {
                data: [],
            };
        },
        computed: {
            ...mapGetters(['navTree']) // 动态计算属性，相当于this.$store.getters.resturantName
        },
        watch: {
            'confTreeDlg': function(newVal, oldVal){
                let self = this;
                if(newVal){
                    self.data = JSON.parse(JSON.stringify(self.navTree));
                    // Object.assign(self.data, self.navTree);
                }
            },
        },
        methods: {
            closeDlg(){
                let self = this;
                self.$emit('update:confTreeDlg', false);
            },
            saveDlg(){
                let self = this;
                self.$emit('update:confTreeDlg', false);
                self.$store.dispatch('updateNavTree', self.data)
            },
                // ...mapActions( // 语法糖
                //     ['updateNavTree'] // 相当于this.$store.dispatch('modifyName'),提交这个方法
                // ),
            
            // 编辑
            editNavTree(row){
                let self = this;
                self.$set(row, 'isEdit', true);
            },
            // 删除
            delNavTree(row){
                let self = this;
            },
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
</style>