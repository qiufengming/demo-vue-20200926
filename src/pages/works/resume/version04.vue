<template>
    <div class="version_03_wrap">
            <div class="modal_wrap basic_info">
                <h1 class="t_a_c">邱凤鸣 &nbsp;&nbsp; Web前端开发工程师</h1>
                <table class="basic_info_t">
                    <tbody>
                        <tr> <td class="t_a_r">1994年11月</td> <td class="t_a_l">15820434189</td> </tr>
                        <tr> <td class="t_a_r">籍贯：广西</td> <td class="t_a_l"></td> </tr>
                        <tr> <td class="t_a_r">现居：深圳</td> <td class="t_a_l"></td> </tr>
                        <tr> <td class="t_a_r">学历：本科</td> <td class="t_a_l">cily_qfm@163.com</td> </tr>
                    </tbody>
                </table>
                <div class="t_a_c img_wrap"><img style="width: 100%;" src="https://i.51job.com/resume/ajax/image.php?type=avatar&userid=411595042&1601310043&key=c412f5a23f801ddd3075ecc40bd8259c" alt=""></div>
            </div>
            <el-divider content-position="left">教育背景</el-divider>
            <div class="modal_wrap education_wrap">
                <table>
                    <tbody>
                        <tr>
                            <td class="t-a-r" width="300">
                                <img src="https://pt.tjpu.edu.cn/zfca/login/logo/logo_school.png" alt="天津工业大学">
                            </td>
                            <td>
                                <h3>2012-09 至 2016-06  天津工业大学</h3>
                                <p>学院：电子与信息工程学院</p>
                                <p>专业：生物医学工程</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <el-divider content-position="left">专业技能</el-divider>
            <div class="modal_wrap skill_wrap">
                <div class="border_radius">
                    <dl>
                        <dt><label class="name">【基础技能】</label></dt>
                        <dd>HTML(5)、CSS(3)、LESS、JavaScript、jQuery、VUE</dd>
                        <dt><label class="name">【使用过的框架】</label></dt>
                        <dd>jQuery + Bootstrap、jQuery + Jalor、VUE + Element UI</dd>
                        <dt><label class="name">【使用过的插件】</label></dt>
                        <dd>Bootstrap、jQuery-easyUI、Echarts、百度地图、Element UI</dd>
                        <dt><label class="name">【了解】</label></dt>
                        <dd>ES6、React、AngularJS、gulp、webpack、Photoshop、yarn、npm</dd>
                    </dl>
                </div>
                
            </div>
            <el-divider content-position="left">工作经历</el-divider>
            <div class="modal_wrap work_wrap">
                <el-timeline>
                    <el-timeline-item
                      v-for="(item, i) in workExperienceData"
                      :key="i"
                      :icon="item.icon"
                      :type="item.type"
                      :color="item.color"
                      :size="item.size"
                      :timestamp="item.time">
                      {{ item.company + '&nbsp;&nbsp;' + item.post }}
                    </el-timeline-item>
                </el-timeline>
            </div>
            <div>
                <br/><br/>
            </div>
            
            <el-divider content-position="left">项目经验</el-divider>
            <div class="modal_wrap project_wrap">
                <el-timeline>
                    <el-timeline-item
                        v-for="(item, i) in projectData"
                        :key="i"
                        :icon="item.icon"
                        :type="item.type"
                        :color="item.color"
                        :size="item.size"
                        :timestamp="item.time">
                        <h3 v-text="item.name"></h3>
                        <dl>
                            <dt>项目描述：</dt>
                            <dd v-html="item.discript"></dd>
                            <dt>责任描述：</dt>
                            <dd v-html="item.workContent"></dd>
                        </dl>
                    </el-timeline-item>
                </el-timeline>
            </div>
            <el-divider content-position="left">自我评价</el-divider>
            <div class="modal_wrap self_evaluation_wrap">
                <ol>
                    <li>适应能力较强，自制力较好，执行力强。</li>
                    <li>性格开朗、自信热情、好学、有责任心、能吃苦耐劳、富有时间观念、有团队合作精神和集体荣誉感。</li>
                    <li>优点：执行力强、工作认真、善于团队合作、好学、乐于助人、爱干净。</li>
                    <li>缺点：急性子。</li>
                </ol>
            </div>
    </div>
</template>

<script>
    export default {
        components: {  },
        data(){
            return {
                isShowList: true,
                active: '',
                workExperienceData: [],
                projectData: [],
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
                self.getWorkData();
                self.getProjectData();
            },
            getWorkData(){
                let self = this;
                self.workExperienceData = [
                    {time: '2018-10 至 2020-10', company: '上海易宝软件有限公司深圳分公司', post: 'Web 前端开发工程师', size: 'large', color: '#4285F4'},
                    // {time: '2017-10 至 2018-09', company: '深圳市零壹金数据科技有限公司', post: 'Web 前端开发工程师', color: '#FBBC05'},
                    {time: '2015-12 至 2018-02', company: '天津天地伟业科技有限公司', post: 'Web 前端开发工程师', color: '#34A853'},
                ];
                /*
                self.workExperienceData = [
                    {time: 'YYYY-MM 至今', company: 'AAAAAAAAAAAA公司', post: 'Web 前端开发工程师', size: 'large', color: '#4285F4'},
                    {time: 'YYYY-MM 至 YYYY-MM', company: 'BBBBBBBBBBBBB科技有限公司', post: 'Web 前端开发工程师', color: '#FBBC05'},
                    {time: 'YYYY-MM 至 YYYY-MM', company: 'CCCCCCCCCC科技有限公司', post: 'Web 前端开发工程师', color: '#34A853'},
                ];
                */
            },
            getProjectData(){
                let self = this;
                self.projectData = [
                    {time: '2020-08 至 2020-09', name: '产品主结构设计', post: 'web 前端开发', 
                        discript: '该项目主要功能包含两大类：<br/>1、用户输入数据，根据已定好的公式计算出结果，以柱状图展示结果，并支持数据导出。<br/>2、流程图绘制，用户可绘制流程图并数据每个步骤的相应数据，支持数据导出。', 
                        workContent: '（1）使用vue框架，以及vue-router构建单页面应用。<br/>（2）使用vue+webpack构建项目环境。<br/>（3）使用element插件配合开发。<br/>（4）统计图使用 Echarts展示。<br/>（5）流程图绘制工具为自己编写的功能（因为华为方对外部插件的使用有严格的限制）。', 
                        size: 'large', color: '#4285F4'
                    },
                    {time: '2020-05 至 2020-09', name: '文档结构化', post: 'web 前端开发', 
                        discript: '该系统主要实现功能是在线写作，使得文档结构化，可实现多人同时共同编辑同一篇文档。编写完毕后可进行发布供他人在线预览，并作者或管理员可进行后期维护。', 
                        workContent: '（1）使用vue框架，以及vue-router构建单页面应用。<br/>（2）使用vue+webpack构建项目环境。<br/>（3）使用element插件配合开发。<br/>（4）分别使用UEditor、markdown编辑器实现文档编辑功能。<br/>（5）正文根据滚动定位导航树和相应模块的评论。', 
                        size: 'large', color: '#4285F4'
                    },
                    {time: '2019-09 至 2020-03', name: '评估度量', post: 'web 前端开发', 
                        discript: '该项目主要功能是对个个指标数据的展示，编辑，导出等功能', 
                        workContent: '（1）使用vue框架，以及vue-router构建单页面应用。<br/>（2）使用vue+webpack构建项目环境。<br/>（3）使用element插件配合开发。<br/>（4）使用 echart对数据进行展示，点击柱状图的柱子，统计图显示其子节点的数据。<br/>（5）其中的产品选择使用element的tree实现的。<br/>（6）该项目还有相关的权限配置，及数据导入（上传）功能。上传使用的是element的上传文件组件。', 
                        size: 'large', color: '#4285F4'
                    },
                    {time: '2018-10 至 2020-01', name: '华为公司内部技术标准规范库', post: 'web 前端开发',
                        discript: '规范华为公司内部技术标准规范的管理，指导内部规范的需求、规划、制定、发布、实施、维护等全生命周期活动，形成内部规范端到端的闭环管理机制。', 
                        workContent: '（1）使用jalor（华为内部）框架构建的传统项目；<br/>（2）使用eclipse进行开发；（3）jalor包含前后端的一个框架，包含前端使用的插件，如：人员选择框、部门选择、树结构、下拉框级连等。', 
                        size: 'large', color: '#4285F4'
                    },
                    {time: '2016-10 至 2017-12', name: '功夫中国门户网站', post: 'web 前端开发', 
                        discript: '该平台由三部分组成，即：后台管理系统、PC 端门户网站和手机 APP，其中手机 APP 又包括 android 版和 IOS 版本。该系统是集新闻资讯、赛事直播、直播室聊天、送礼物、发弹幕、视频回放、现场门票购买、特卫预约、学员招募、赛事定制、会员充值、赛事竞猜、词条编写等为一体的门户网站。', 
                        workContent: '（1）前端页面开发使用HTML（5）、CSS（3）、JavaScript、jQuery实现；<br/>（2）通过Ajax实现前后台数据处理；<br/>（3）Web前端页面开发主要使用到的插件：Bootstrap、easyUI、eCharts...<br/>（4）页面的轮播图使用的Bootstrap的Carousel插件；<br/>（5）页面弹出框部分使用了easyUI的dialog，部分使用了Bootstrap的模态框；<br/>（6）安保预约中的地点及联系我们中的地图使用的是百度地图。<br/>（7）管理数据的表格及查询搜索框使用的是jQuery-easyUI插件；<br/>（8）信息添加使用easyUI的dialog插件。', 
                        size: 'large', color: '#34A853'
                    },
                    {time: '2015-12 至 2016-07', name: '株洲市城市建设管理及公共信息平台', post: 'web 前端开发', 
                        discript: '该项目包括以下几个系统：<br/>（1）节能减排评价与推广平台<br/>（2）节能减排评价与推广平台后台管理系统<br/>（3）建筑工程安监应用平台<br/>（4）燃气信息系统<br/>（5）污水处理信息系统<br/>（6）自来水信息系统<br/>（7）垃圾处理信息系统<br/>（8）平台后台管理系统',
                         workContent: '（1）使用HTML（5）、CSS、JavaScript、jQuery实现前端页面的开发；<br/>（2）通过Ajax实现前后台数据处理；<br/>（3）其中的树及部分插件使用的是jQuery-easyUI插件；<br/>（4）能耗统计图使用的是eCharts插件；<br/>（5）首页的电子地图使用的是百度地图；<br/>（6）前端还使用了Bootstrap插件。', size: 'large', color: '#34A853'
                    },
                ];
            },
        },
    };
</script>

<style lang="less" rel="stylesheet/less" type="text/less" scoped>
.version_03_wrap{
    padding: 20px;
    width: 793px; background-color: #fff; padding: 20px; margin: auto;
    .modal_wrap{ padding: 10px 20px; }
    .modal_title{ font-size: 26px; font-weight: bold; color: #166086; }
    .basic_info{
        position: relative;
        h1{ font-size: 36px; margin: 0px auto 30px; }
        .basic_info_t{ margin-left: 50px; width: 400px; color: #166086; }
        td{ padding: 3px 10px; font-size: 20px; }
        td.t_a_r{ border-right: 1px solid #166086; }
        .img_wrap{ position: absolute; width: 100px; height: 140px; line-height:138px; color: #ffd4d4; border:1px solid #ffd4d4; top: 85px; right: 110px;}
    }
    .el-divider--horizontal{ margin: 50px 0 24px; }
    .el-divider__text.is-left{ font-size: 20px; font-weight: 600; color: #166086; }
    .education_wrap{
        table{ width: 100%; }
        td{ padding: 10px;}
    }
    .skill_wrap{
        dt{ padding-bottom: 10px; }
        dd{ padding-bottom: 10px; }
        .name{
            display: inline-block;
            padding: 2px 8px;
            margin: 3px 10px;
            font-size: 16px;
            text-decoration: none;
            color: #333;
            font-weight: 600;
        }
    }
    .work_wrap{}
    .project_wrap{}
    .self_evaluation_wrap{}
    .border_radius{
        border: 1px solid #999; border-radius: 10px; padding: 10px; margin: 5px 0;
        p{ padding: 3px 0; }
    }
}
</style>
