<template>
    <div class="flowchart_wrap">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="标准流程" name="1"></el-tab-pane>
            <el-tab-pane label="自定义流程" name="2"></el-tab-pane>
        </el-tabs>
        <el-row v-show="activeName == '2'" class="canvas_toolbar">
            <div ref="section" class="section" id="toolbar">
                <el-button ref="add" id="add" size="mini" @click="addUnit">新增图元</el-button>
                <el-button ref="del" id="del" size="mini" @click="delUnit">删除图元</el-button>
                <el-button ref="editProp" id="editProp" size="mini" @click="editUnit">编辑图元</el-button>
                <el-button ref="clear" id="clear" size="mini" @click="cleanUnit">清除画布</el-button>
                <el-button ref="standard" id="standard" size="mini" @click="loadStandard">加载标准流程</el-button>
            </div>
        </el-row>
        <el-row class="flow_chart_wrap">
            <div id="flowChartBox" ref="flowChartBox" class="flow_chart_box">
                <!-- 一个单元 -->
                <div class="unit_wrap" v-for="(item, i) in standardData" :key="i" :style="{left: item.x+'px', top: item.y+'px'}" 
                    @mouseenter="enterUnit(item)" @mouseleave="leaveUnit(item)" @click="clickUnit('unit', item)"
                    @mousedown="mousedownUnit($event, item)" @mouseup="mouseupUnit($event,item)"
                >
                    <div class="unit" v-if="item.SN !='mouse'" :style="{'border-color': item.isSelect?'red':''}">
                        <p class="head" :style="{'background-color': item.head.bgColor, color: item.head.color, 'font-family': item.head.fontFamily}">{{ item.head.text }}</p>
                        <div class="body" :style="{'background-color': item.body.bgColor, color: item.body.color, 'font-family': item.body.fontFamily}">{{ item.body.text }}</div>
                        <p class="foot" :style="{'background-color': item.footer.bgColor, color: item.footer.color, 'font-family': item.footer.fontFamily}">{{ item.footer.text }}</p>
                    </div>
                    <div class="point_wrap" v-show="item.showPoint" v-if="item.SN !='mouse'">
                        <span class="point lTop" @click="clickPoint($event, item, i, 'lTop')"></span>
                        <span class="point top" @click="clickPoint($event, item, i, 'top')"></span>
                        <span class="point rTop" @click="clickPoint($event, item, i, 'rTop')"></span>
                        <span class="point right" @click="clickPoint($event, item, i, 'right')"></span>
                        <span class="point rBottom" @click="clickPoint($event, item, i, 'rBottom')"></span>
                        <span class="point bottom" @click="clickPoint($event, item, i, 'bottom')"></span>
                        <span class="point lBottom" @click="clickPoint($event, item, i, 'lBottom')"></span>
                        <span class="point left" @click="clickPoint($event, item, i, 'left')"></span>
                    </div>
                </div>
                <!-- 箭头 -->
                <div class="arrow_wrap">
                    <!-- <div class="arrow arrow_r" v-for="(item, i) in arrowArr" :key="i" :style="{
                        width: item.width+'px', left: item.startX+8+'px', top: item.startY+8+'px', 
                        transform: 'rotate('+item.angle+'deg)', '-ms-transform': 'rotate('+item.angle+'deg)', '-webkit-transform': 'rotate('+item.angle+'deg)',
                        'background-color':item.isSelect?'red':''
                    }" @click="clickUnit(item)">
                    </div> -->
                    <div class="arrow" v-for="(item, i) in arrowArr" :key="i" :style="{
                        width: item.width+'px', left: item.startX+8+'px', top: item.startY+8+'px', 
                        transform: 'rotate('+item.angle+'deg)', '-ms-transform': 'rotate('+item.angle+'deg)', '-webkit-transform': 'rotate('+item.angle+'deg)',
                        'background-color':item.isSelect?'red':''
                    }" @click.stop="clickUnit('arrow', item)">
                        <div class="arrow_r" :style="{ 'border-left-color':item.isSelect?'red':'' }" @click.stop="clickUnit('arrow', item)"></div>
                    </div>
                    <div v-if="newArrow!==null" class="arrow arrow_r" :style="{
                        width: newArrow.width+'px', left: newArrow.startX+8+'px', top: newArrow.startY+8+'px', 
                        transform: 'rotate('+newArrow.angle+'deg)', '-ms-transform': 'rotate('+newArrow.angle+'deg)', '-webkit-transform': 'rotate('+newArrow.angle+'deg)',
                    }"></div>
                </div>
            </div>
            <div class="props_edit" id="props_edit" ref="propsEdit"></div>
        </el-row>
        <el-row>
            <div class="t_tab_wrap">
                <label v-for="(item, i) in tTabList" :key="'t_tab_'+i" class="t_tab" :class="tTab.active == item.id?'activeTTab': ''">
                    <span v-show="tTab.editTab!=item.id" @dblclick="tTabDblclick($event, item)" @click="tTabClick($event, item)" class="t_tab_text">{{ item.name }}</span>
                    <el-input width="160" v-model="item.name" placeholder="请输入内容" v-show="tTab.editTab==item.id" @blur="tTabInputBlur($event, item)" maxlength="50"></el-input>
                </label>
                <el-button ref="tTabAdd" size="mini" class="t_tab_add" type="text" @click="addTab">+</el-button>
                <el-button ref="tTabDetail" size="mini" class="t_tab_detail" type="text" @click="openDetails"><i class="el-icon-s-operation"></i></el-button>
                
            </div>
        </el-row>
        <el-row class="t_wrap">
            <el-row class="t_head">
                <el-col :span="12" class="t_td">{{ standardData[tTab.currStep-1].body.text }}</el-col>
                <el-col :span="12" class="t_td"></el-col>
            </el-row>
            <el-row class="t_body">
                <el-row class="t_tr">
                    <el-col :span="12" class="t_td">现状分析（天）</el-col> 
                    <el-col :span="12" class="t_td">
                        <el-input v-if="tTab.editCell == 'currAnalyse'" placeholder="请输入内容" v-model="standardData[tTab.currStep-1].detailTabTabel[tTab.active-1].currAnalyse" @blur="cellInputBlur" clearable></el-input>
                        <span v-else class="cell" @dblclick="cellDblclick('currAnalyse')">{{ standardData[tTab.currStep-1].detailTabTabel[tTab.active-1].currAnalyse }}</span>
                    </el-col>
                </el-row>
                <el-row class="t_tr">
                    <el-col :span="12" class="t_td">根因分析</el-col> 
                    <el-col :span="12" class="t_td">
                        <el-input v-if="tTab.editCell == 'rootCause'" placeholder="请输入内容" v-model="standardData[tTab.currStep-1].detailTabTabel[tTab.active-1].rootCause" @blur="cellInputBlur" clearable></el-input>
                        <span v-else class="cell" @dblclick="cellDblclick('rootCause')">{{ standardData[tTab.currStep-1].detailTabTabel[tTab.active-1].rootCause }}</span>
                    </el-col>
                </el-row>
                <el-row class="t_tr">
                    <el-col :span="12" class="t_td">业务目标（天）</el-col> 
                    <el-col :span="12" class="t_td">
                        <el-input v-if="tTab.editCell == 'business'" placeholder="请输入内容" v-model="standardData[tTab.currStep-1].detailTabTabel[tTab.active-1].business" @blur="cellInputBlur" clearable></el-input>
                        <span v-else class="cell" @dblclick="cellDblclick('business')">{{ standardData[tTab.currStep-1].detailTabTabel[tTab.active-1].business }}</span>
                    </el-col>
                </el-row>
                <el-row class="t_tr">
                    <el-col :span="12" class="t_td">改进技术目标</el-col> 
                    <el-col :span="12" class="t_td">
                        <el-input v-if="tTab.editCell == 'improveTec'" placeholder="请输入内容" v-model="standardData[tTab.currStep-1].detailTabTabel[tTab.active-1].improveTec" @blur="cellInputBlur" clearable></el-input>
                        <span v-else class="cell" @dblclick="cellDblclick('improveTec')">{{ standardData[tTab.currStep-1].detailTabTabel[tTab.active-1].improveTec }}</span>
                    </el-col>
                </el-row>
                <el-row class="t_tr">
                    <el-col :span="12" class="t_td">业界标杆（天）</el-col> 
                    <el-col :span="12" class="t_td">
                        <el-input v-if="tTab.editCell == 'industryMark'" placeholder="请输入内容" v-model="standardData[tTab.currStep-1].detailTabTabel[tTab.active-1].industryMark" @blur="cellInputBlur" clearable></el-input>
                        <span v-else class="cell" @dblclick="cellDblclick('industryMark')">{{ standardData[tTab.currStep-1].detailTabTabel[tTab.active-1].industryMark }}</span>
                    </el-col>
                </el-row>
            </el-row>
        </el-row>
        <el-row class="prev_next_wrap">
            <el-button ref="prev" size="mini" type="primary" @click="prevStep" :disabled="tTab.currStep<=1?true:false">上一步</el-button>
            <el-button ref="next" size="mini" type="primary" @click="nextStep" :disabled="tTab.currStep>=standardData.length?true:false">下一步</el-button>
        </el-row>
        <el-row>
            <div ref="nodeData" id="nodeData" class="itable"></div>
        </el-row>
        <el-row></el-row>

        <!-- dialog -->
        <el-dialog :title="tTabList[tTab.active - 1].name" :visible.sync="detailDlg" width="80%" :close-on-click-modal="false" class="dlg_details">
            <div class="table table_wrap" style="padding: 10px 20px;">
                <el-table :data="detailsData" style="width: 100%" border tooltip-effect="light" highlight-current-row>
                    <el-table-column fixed prop="link" label="环节" width="120" key="link"></el-table-column>
                    <el-table-column v-for="(item, i) in detailsTHead" :key="'step'+i" :prop="item.key" :label="item.label" width="120" show-overflow-tooltip>
                        <template slot-scope="scope"> {{ scope.row[scope.column.property]}}</template>
                    </el-table-column>
                </el-table>

            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="exportData" size="mini">导出</el-button>
                <el-button @click="detailDlg = false" size="mini">关闭</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script src="./flowChart.js"></script>

<style lang = "less">
.flowchart_wrap{
    .canvas_toolbar{ padding: 0 10px 10px; }
    .flow_chart_wrap{ background-color: #F0EEEE; overflow: auto; }
    .flow_chart_box{
        position: relative; width: auto; min-width: 1000px; height: auto; min-height: 500px; overflow: auto;
        .unit_wrap{ display: inline-block; position: absolute; cursor: auto; -webkit-user-select:none; -moz-user-select:none; -ms-user-select:none; user-select:none; padding: 8px; }
        .unit{ width: 100px; height: 120px; border: 1px solid blue; }
        .head{ height: 34px; text-align: center; }
        .body{ height: 50px; text-align: center; }
        .foot{ height: 34px; text-align: center; }
        .point_wrap{ z-index: 10; }
        .point{ display: inline-block; width: 8px; height: 8px; border: 1px solid blue; background-color: yellow; position: absolute; }
        .lTop{ left: -0px; top: -0px; }
        .top{ left: 50px; top: -0px; }
        .rTop{ left: 108px; top: -0px; }
        .right{ left: 108px; top: 64px; }
        .rBottom{ left: 108px; top: 128px; }
        .bottom{ left: 50px; top: 128px; }
        .lBottom{ left: -0px; top: 128px; }
        .left{ left: -0px; top: 64px; }
        .arrow{ position: absolute; height: 3px; background-color: #333; transform-origin: top left; }
        .arrow_r{
            position: absolute;
            width: 0; height: 0; border-top: 5px solid transparent; border-bottom: 5px solid transparent; position: absolute; display: inline-block; top: -4px;
            border-left: 10px solid #333; right: -2px;
        }
        /* .arrow:before{ content:''; width: 0; height: 0; border-top: 5px solid transparent; border-bottom: 5px solid transparent; position: absolute; display: inline-block; top: -4px; }
        .arrow_r:before{ 
            border-left: 10px solid #333; right: -2px;
        }
        .arrow_l:before{ 
            border-right: 10px solid #333; left: -2px;
        } */
    }
    .props_edit{
        width: 500px; height: 400px; background-color: #fff; position: absolute; z-index: 10; top: 10px; left: 100px; display: none; border: 1px solid #8d8c8c;
        overflow: auto;
    }
    .t_tab_wrap{
        text-align: center; padding: 10px 10px 0 10px; border-bottom: 1px solid #ddd; position: relative; height: 40px; margin-bottom: 10px;
        .t_tab{ padding: 6px; max-width: 160px; }
        .t_tab.activeTTab{ border: 1px solid #ddd; border-bottom-color: #fff; color: #409EFF; font-weight: bold; border-radius: 4px 4px 0 0; background-color: #fff; }
        .t_tab_text{ cursor: pointer; }
        .el-input{ max-width: 150px; }
        .t_tab_add{ margin-left: 20px; }
        .t_tab_add, .t_tab_detail{ padding: 1px 6px; font-size: 20px; font-weight: bold; }
        .t_tab_add:hover, .t_tab_detail:hover{ text-decoration: underline; }
    }
    .t_wrap{
        .t_head{ background-color: #F1F1F1; }
        .t_tr{}
        .t_td{ padding: 1px 6px; height: 34px; line-height: 32px; border-color: #C8C9CE; border: 1px solid #C8C9CE; }
        .cell{ display: block; height: 100%; }
    }
    .prev_next_wrap{ padding: 10px; text-align: center; }
    .dlg_details{
        .table .el-table th{}
        .el-table .cell{ padding: 6px; }
        .el-table--border th:first-child .cell{ background-color: #E3E5E6; color: #333333; }
        .dialog-footer{ text-align: center; display: block; }
    }
    
    
}
</style>