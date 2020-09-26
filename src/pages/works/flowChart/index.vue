<template>
    <div class="flow_chart_wrap">
        <p>https://www.cnblogs.com/maqunjing/p/3160325.html</p>
        <el-row class="canvas_wrap">
            <div class="canvas" id="canvas" ref="canvas"></div> 
        </el-row>
    </div>
</template>

<script>
    export default {
        components: {},
        data(){
            return {
                stage: null,
                layer: null,
                stageW: 1550,
                stageH: 600,
                groupObj:{},
                startX: 50,
                startY: 50,
                spaceX: 100,
                spaceY: 100,
                heightH: 50,
                heightB: 100,
                heightF: 50,
                unitW: 150,
                standardData: [
                    {id: '01', SN: '001',x: 50, y: 50, head: {text: 'PO-01',color: '#333333', bgColor: '#ffffff'}, body: {}, footer: {}},
                ],
                standardData1: [
                    {id: '01', head: 'PO-01', body: '专员审批01', footer: '你好'},
                    {id: '02', head: 'PO-02', body: '专员审批02', footer: '张三'},
                    {id: '03', head: 'PO-03', body: '专员审批03', footer: '李四'},
                    {id: '04', head: 'PO-04', body: '专员审批04', footer: '王五'},
                    {id: '05', head: 'PO-05', body: '专员审批05', footer: 'qqq'},
                    {id: '06', head: 'PO-06', body: '专员审批06', footer: 'www'},
                    {id: '07', head: 'PO-07', body: '专员审批07', footer: 'eee'},
                    {id: '08', head: 'PO-08', body: '专员审批08', footer: 'rrr'},
                    {id: '09', head: 'PO-09', body: '专员审批09', footer: 'ttt'},
                    {id: '10', head: 'PO-10', body: '专员审批10', footer: 'yyy'},
                    {id: '11', head: 'PO-11', body: '专员审批11', footer: 'uuu'},
                    {id: '12', head: 'PO-12', body: '专员审批12', footer: 'iii'},
                    {id: '13', head: 'PO-13', body: '专员审批13', footer: 'ooo'},
                    {id: '14', head: 'PO-14', body: '专员审批14', footer: 'ppp'},
                    {id: '15', head: 'PO-15', body: '专员审批15', footer: 'lll'},
                    {id: '16', head: 'PO-16', body: '专员审批16', footer: 'kkk'},
                    {id: '17', head: 'PO-17', body: '专员审批17', footer: 'jjj'},
                    {id: '18', head: 'PO-18', body: '专员审批18', footer: 'hhh'},
                    {id: '19', head: 'PO-19', body: '专员审批19', footer: 'ggg'},
                    {id: '20', head: 'PO-20', body: '专员审批20', footer: 'fff'},
                    {id: '21', head: 'PO-21', body: '专员审批21', footer: 'ddd'},
                    {id: '22', head: 'PO-22', body: '专员审批22', footer: 'sss'},
                    {id: '23', head: 'PO-23', body: '专员审批23', footer: 'aaa'},
                    {id: '24', head: 'PO-24', body: '专员审批24', footer: 'zzz'},
                    {id: '25', head: 'PO-25', body: '专员审批25', footer: 'xxx'},
                    {id: '26', head: 'PO-26', body: '专员审批26', footer: 'ccc'},
                    {id: '27', head: 'PO-27', body: '专员审批27', footer: 'vvv'},
                    {id: '28', head: 'PO-28', body: '专员审批28', footer: 'bbb'},
                    {id: '29', head: 'PO-29', body: '专员审批29', footer: 'nnn'},
                    {id: '30', head: 'PO-30', body: '专员审批30', footer: 'mmm'},
                    {id: '31', head: 'PO-31', body: '专员审批31', footer: 'xxx'},
                ],
            };
        },
        created(){},
        mounted(){
            let self = this;
        },
        methods: {
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .flow_chart_wrap{
        padding: 20px;
    }
</style>