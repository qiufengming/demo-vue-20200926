

import draw from './draw';
export default{
    data(){
        return {
            activeName: '2',
            standardData: [],
            standardDataObj: {},
            stageW: 1572, // 舞台宽度
            stageH: 480, // 舞台高度
            unitW: 100,
            unitH: 120,
            isMoveUnit: false, // 是否正在移动
            currMoveUnit: null, // 当前正在移动的元素
            currMoveUnitData: null, // 当前正在移动的元素数据
            mouseUnit: {  // 鼠标按下时，鼠标位置与单元的位置距离
                l: 0,
                r: 0,
                t: 0,
                b: 0,
            },
            isEndCalc: false, // 计算是否结束
            isLigature: false, // 是否正在连线
            ligatureSUnit: null, // 正在连线的开始的单元
            ligatureSPoint: null, // 正在连线的开始的单元的点
            ligatureSX: 0,
            ligatureSY: 0,
            ligatureSIndex: 0, // 正在连线的开始的单元数据的下标
            ligatureEUnit: null, // 正在连线的结束的单元
            ligatureEPoint: null, // 正在连线的结束的单元的点
            ligatureEX: 0,
            ligatureEY: 0,
            ligatureEIndex: 0, // 正在连线的结束的单元数据的下标
            newArrow: null,
            tTabList: [],
            tTab: {
                editTab: '',
                active: '1',
                currStep: 1,
                editCell: '',
            },
            detailDlg: false,
            detailsData: [],
            detailsTHead: [],
        };
    },
    computed:{
    	// 'arrowArr': function(){
        //     let self = this;
        //     let newArr = [];
        //     if(self.isEndCalc && self.standardData.length){
        //         newArr = self.calcArrow();
        //     }
        //     return newArr;
        // },
    	'arrowArr': function(){
            let self = this;
            let newArr = [];
            if(self.isEndCalc && self.standardData.length){
                newArr = self.calcArrow();
            }
            return newArr;
        },
        'arrowArr2': {
            get: function(){
                let self = this;
                let newArr = [];
                if(self.isEndCalc && self.standardData.length){
                    newArr = self.calcArrow();
                }
                return newArr;
            },
            set: function(newValue){
                // debugger;
                console.log(newValue)
                // this.$nextTick();
                // return newValue;
            },
        },



    },
    created(){
        let self = this;
        self.standardData = JSON.parse(JSON.stringify(draw.defaultData));
        self.tTabList = JSON.parse(JSON.stringify(draw.defaultTab));
        self.calcPointXY();
    },
    mounted(){
        let self = this;
        self.initData();
        document.body.addEventListener('mousemove', self.mousemove);
        document.body.addEventListener('mouseup', self.mouseupUnit);
    },
    methods: {
        initData(){
            let self = this;
            // self.calcPointXY();
            
        },
        // 切换标准流程和自定义流程
        handleClick(tab, event){
            console.log(tab, event);
            let self = this;
            self.$set(self.tTab, 'currStep', 1);
            self.$set(self.tTab, 'editCell', '');

            self.standardData = JSON.parse(JSON.stringify(draw.defaultData));
            self.tTabList = JSON.parse(JSON.stringify(draw.defaultTab));
            self.calcPointXY();

            

        },
        // 计算每个单元连接点的x,y坐标
        calcPointXY(){
            let self = this;
            self.standardDataObj = {};

            self.isEndCalc = false;

            self.standardData.forEach(item => {
                self.$set(item, 'lTopX', item.x);
                self.$set(item, 'lTopY', item.y);
                self.$set(item, 'topX', item.x + self.unitW/2);
                self.$set(item, 'topY', item.y);
                self.$set(item, 'rTopX', item.x + self.unitW);
                self.$set(item, 'rTopY', item.y);

                self.$set(item, 'leftX', item.x);
                self.$set(item, 'leftY', item.y + self.unitH/2);
                self.$set(item, 'rightX', item.x + self.unitW);
                self.$set(item, 'rightY', item.y + self.unitH/2);

                self.$set(item, 'lBottomX', item.x);
                self.$set(item, 'lBottomY', item.y + self.unitH);
                self.$set(item, 'bottomX', item.x + self.unitW/2);
                self.$set(item, 'bottomY', item.y + self.unitH);
                self.$set(item, 'rBottomX', item.x + self.unitW);
                self.$set(item, 'rBottomY', item.y + self.unitH);

                // self.$set(self.standardDataObj, 'sn'+item.SN, JSON.parse(JSON.stringify(item)));
                self.$set(self.standardDataObj, 'sn'+item.SN, item);
            });
            self.isEndCalc = true;


        },
        // 计算出所有箭头
        calcArrow(){
            let self = this;
            let newArr = [];
            self.standardData.forEach(item => {
                if(item.SN == 'mouse'){
                    return false;
                }
                // 左上
                if(item.lTop.length){
                    item.lTop.forEach((line, lineIdx) => {
                        if(!line.isStart){ return false; }
                        newArr.push( self.calcOneArrow(item, line, lineIdx, self.standardDataObj[line.linkUnit], 'lTop') );
                    });
                }
                // 上
                if(item.top.length){
                    item.top.forEach((line, lineIdx) => {
                        if(!line.isStart){ return false; }
                        newArr.push( self.calcOneArrow(item, line, lineIdx, self.standardDataObj[line.linkUnit], 'top') );
                    });
                }
                // 右上
                if(item.rTop.length){
                    item.rTop.forEach((line, lineIdx) => {
                        if(!line.isStart){ return false; }
                        newArr.push( self.calcOneArrow(item, line, lineIdx, self.standardDataObj[line.linkUnit], 'rTop') );
                    });
                }
                // 左
                if(item.left.length){
                    item.left.forEach((line, lineIdx) => {
                        if(!line.isStart){ return false; }
                        newArr.push( self.calcOneArrow(item, line, lineIdx, self.standardDataObj[line.linkUnit], 'left') );
                    });
                }
                // 右
                if(item.right.length){
                    item.right.forEach((line, lineIdx) => {
                        if(!line.isStart){ return false; }
                        newArr.push( self.calcOneArrow(item, line, lineIdx, self.standardDataObj[line.linkUnit], 'right') );
                    });
                }
                // 左下
                if(item.lBottom.length){
                    item.lBottom.forEach((line, lineIdx) => {
                        if(!line.isStart){ return false; }
                        newArr.push( self.calcOneArrow(item, line, lineIdx, self.standardDataObj[line.linkUnit], 'lBottom') );
                    });
                }
                // 下
                if(item.bottom.length){
                    item.bottom.forEach((line, lineIdx) => {
                        if(!line.isStart){ return false; }
                        newArr.push( self.calcOneArrow(item, line, lineIdx, self.standardDataObj[line.linkUnit], 'bottom') );
                    });
                }
                // 右下
                if(item.rBottom.length){
                    item.rBottom.forEach((line, lineIdx) => {
                        if(!line.isStart){ return false; }
                        newArr.push( self.calcOneArrow(item, line, lineIdx, self.standardDataObj[line.linkUnit], 'rBottom') );
                    });
                }
            });

            return newArr;
        },
        calcOneArrow(unit, line, lineIdx, endPoint, type){
            let sX = unit[type+'X'], sY =  unit[type+'Y'], eX = endPoint[line.linkPoint+'X'], eY = endPoint[line.linkPoint+'Y'];
            let oLR = (sX-eX>0) ? 'right' : (sX-eX<0 ? 'left' : 'same');
            let oTB = (sY-eY>0) ? 'bottom' : (sY-eY<0?'top':'same');
            let angle = (oTB=='same') ? (oLR=='left'?0:180) : (oLR=='same'?(oTB=='top'?90:-90):'calc');
            let w = 0;
            if(angle == 'calc'){
                let calcAngle = Math.atan(Math.abs(sY-eY)/Math.abs(sX-eX));
                                calcAngle = (calcAngle*180)/Math.PI;
                                calcAngle = (oLR=='left'&&oTB=='bottom') ? (-calcAngle) : 
                                            (oLR=='left'&&oTB=='top' ? calcAngle:
                                            (oLR=='right'&&oTB=='top'? (180-calcAngle):(-180+calcAngle)));
                                angle = calcAngle;
                w = Math.sqrt(Math.abs(sY-eY)*Math.abs(sY-eY)+Math.abs(sX-eX)*Math.abs(sX-eX));
            }else{
                w = (angle==0||angle==180) ? Math.abs(sX-eX) : Math.abs(sY-eY);
            }

            return {startX: sX, startY: sY, endX: eX, endY: eY, originLR: oLR, originTB: oTB, angle: angle, width: w, unitId: unit.id, unitSN: unit.SN, isSelect: !!line.isSelect, arrowStartPoint: type, lineIdx: lineIdx };
        },
        // 鼠标移入图元
        enterUnit(item){
            let self = this;
            self.$set(item, 'showPoint', true);
        },
        // 鼠标移出图元
        leaveUnit(item){
            let self = this;
            self.$set(item, 'showPoint', false);
        },
        // 鼠标单击图元、箭头
        clickUnit(type, item){
            let self = this;
            if(type == 'unit'){
                self.$set(item, 'isSelect', !item.isSelect);
            }else{
                self.standardData.forEach(d => {
                    if(d.id == item.unitId){
                        self.$set(d[item.arrowStartPoint][item.lineIdx], 'isSelect', !item.isSelect);
                        
                    }
                });
            }
        },
        // 单元鼠标按下事件
        mousedownUnit(evt, item){
            let self = this;
            let stagePosition = self.$refs.flowChartBox.getBoundingClientRect();
            let unitPosition = evt.currentTarget.getBoundingClientRect();
            let downX = evt.x;
            let downY = evt.y;

            self.isMoveUnit = true;
            self.currMoveUnit = evt.currentTarget;
            self.currMoveUnitData = item;
            self.$set(self.mouseUnit, 'l', downX - unitPosition.x);
            self.$set(self.mouseUnit, 'r', unitPosition.x + unitPosition.width - downX);
            self.$set(self.mouseUnit, 't', downY - unitPosition.y);
            self.$set(self.mouseUnit, 'b', unitPosition.y + unitPosition.height - downY);
        },
        // 单元鼠标抬起事件
        mouseupUnit(evt, item){
            let self = this;
            self.isMoveUnit = false;
            self.currMoveUnit = null;
            // self.currMoveUnitData = null;
            self.$set(self.mouseUnit, 'l', null);
            self.$set(self.mouseUnit, 'r', null);
            self.$set(self.mouseUnit, 't', null);
            self.$set(self.mouseUnit, 'b', null);
        },
        // 鼠标移动
        mousemove(e){
            let self = this;
            // 移动图元
            if(self.isMoveUnit){
                let stagePosition = self.$refs.flowChartBox.getBoundingClientRect();
                let stageX = stagePosition.x;
                let stageY = stagePosition.y;
                let stageW = stagePosition.width;
                let stageH = stagePosition.height;
                let unitPosition = self.currMoveUnit.getBoundingClientRect();
                let mouseX = e.clientX;
                let mouseY = e.clientY;
                let dValL = self.mouseUnit.l;
                let dValR = self.mouseUnit.r;
                let dValT = self.mouseUnit.t;
                let dValB = self.mouseUnit.b;
                // 单元移动
                // let left = (mouseX-dValL-8)<=stageX ? (8) : ((mouseX+dValR+8)>=(stageX+stageW) ? (stageW-unitPosition.width-16) : (mouseX-stageX-dValL));
                // let top = (mouseY-dValT-8)<=stageY ? (8) : ((mouseY+dValB+8)>=(stageY+stageH) ? (stageH-unitPosition.height-16) : (mouseY-stageY-dValT));
                let left = (mouseX-dValL-8)<=stageX ? (8) : (mouseX-stageX-dValL);
                let top = (mouseY-dValT-8)<=stageY ? (8) : (mouseY-stageY-dValT);
                
                self.$set(self.currMoveUnitData, 'x', left);
                self.$set(self.currMoveUnitData, 'y', top);
                self.$set(self.currMoveUnitData, 'lTopX', left);
                self.$set(self.currMoveUnitData, 'lTopY', top);
                self.$set(self.currMoveUnitData, 'topX', left + self.unitW/2);
                self.$set(self.currMoveUnitData, 'topY', top);
                self.$set(self.currMoveUnitData, 'rTopX', left + self.unitW);
                self.$set(self.currMoveUnitData, 'rTopY', top);

                self.$set(self.currMoveUnitData, 'leftX', left);
                self.$set(self.currMoveUnitData, 'leftY', top + self.unitH/2);
                self.$set(self.currMoveUnitData, 'rightX', left + self.unitW);
                self.$set(self.currMoveUnitData, 'rightY', top + self.unitH/2);

                self.$set(self.currMoveUnitData, 'lBottomX', left);
                self.$set(self.currMoveUnitData, 'lBottomY', top + self.unitH);
                self.$set(self.currMoveUnitData, 'bottomX', left + self.unitW/2);
                self.$set(self.currMoveUnitData, 'bottomY', top + self.unitH);
                self.$set(self.currMoveUnitData, 'rBottomX', left + self.unitW);
                self.$set(self.currMoveUnitData, 'rBottomY', top + self.unitH);

                self.$set(self.standardDataObj, 'sn'+self.currMoveUnitData.SN, self.currMoveUnitData);
            }
            // 连接线
            if(self.isLigature){
                let stagePosition = self.$refs.flowChartBox.getBoundingClientRect();
                let stageX = stagePosition.x;
                let stageY = stagePosition.y;
                let stageW = stagePosition.width;
                let stageH = stagePosition.height;
                let sX = self.newArrow.startX, sY = self.newArrow.startY, eX = e.clientX-stageX-10, eY = e.clientY-stageY-10;
                eX = eX<=0 ? 0 : (eX>=stageW?stageW:eX);
                eY = eY<=0 ? 0 : (eY>=stageW?stageH:eY);
                let calcResult = self.calcAngleWidth(sX, sY, eX, eY);
                self.$set(self.newArrow, 'endX', eX);
                self.$set(self.newArrow, 'endY', eY);
                self.$set(self.newArrow, 'originLR', sX>eX ? 'right' : (sX<eX ? 'left' : 'same'));
                self.$set(self.newArrow, 'originTB', sY>eY ? 'bottom' : (sX<eX ? 'top' : 'same'));
                self.$set(self.newArrow, 'angle', calcResult.angle);
                self.$set(self.newArrow, 'width', calcResult.arrowW);
            }
        },
        // 点击连接点
        clickPoint(evt, item, index, type){
            let self = this;
            if(!self.isLigature){ // 开始
                self.isLigature = true;
                self.ligatureSIndex = index; 
                self.ligatureSPoint = type;
                self.ligatureEUnit = item.SN;

                self.newArrow = {startX: item[type+'X'], startY: item[type+'Y'], endX: item[type+'X'], endY: item[type+'Y'], originLR: 'same', originTB: 'same', angle: 0, width: 0};
            }else{ // 结束
                self.isLigature = false;
                self.ligatureEIndex = index; 

                // 清空新建
                self.newArrow = null;
                self.$nextTick(() => {});

                // self.isEndCalc = false;
                // 结束
                let newEndLine = {isStart: false, linkUnit: 'sn'+self.ligatureEUnit, linkPoint: self.ligatureSPoint};
                self.$set(self.standardData[index], self.ligatureSPoint, self.standardData[index][type].concat([newEndLine]));
                // 开始
                let newStartLine = {isStart: true, linkUnit: 'sn'+item.SN, linkPoint: type};
                self.$set(self.standardData[self.ligatureSIndex], self.ligatureSPoint, self.standardData[self.ligatureSIndex][self.ligatureSPoint].concat([newStartLine]));
                
                // self.isEndCalc = true;

            }
        },
        // 计算角度和长度
        calcAngleWidth(sX, sY, eX, eY){
            let self = this;
            let angle = 0;
            let arrowW = 0;
            if(sX == eX && sY > eY){
                angle = -90;
                arrowW = Math.abs(sY-eY);
            }else if(sX == eX && sY < eY){
                angle = 90;
                arrowW = Math.abs(sY-eY);
            }else if(sX < eX && sY == eY){
                angle = 0;
                arrowW = Math.abs(sX-eX);
            }else if(sX > eX && sY == eY){
                angle = 180;
                arrowW = Math.abs(sX-eX);
            }else if(sX == eX && sY == eY){
                angle = 0;
                arrowW = 0;
            }else{
                let calcAngle = Math.atan(Math.abs(sY-eY)/Math.abs(sX-eX)); // 计算出角度的弧度制
                calcAngle = (calcAngle*180)/Math.PI; // 计算出角度制
                calcAngle = sX>eX&&sY>eY ? (-180+calcAngle) : 
                            (sX<eX&&sY>eY ? -calcAngle : 
                            (sX<eX&&sY<eY ? calcAngle : 180-calcAngle));
                angle = calcAngle;
                arrowW = Math.sqrt(Math.abs(sY-eY)*Math.abs(sY-eY)+Math.abs(sX-eX)*Math.abs(sX-eX));
            }

            return { angle: angle, arrowW: arrowW };
        },
        // 表格tab页签点击事件
        tTabClick(evt, item){
            let self = this;
            self.$set(self.tTab, 'editTab', '');
            self.$set(self.tTab, 'active', item.id);
        },
        // 表格tab页签双击事件
        tTabDblclick(evt, item){
            let self = this;
            self.$set(self.tTab, 'editTab', item.id);
            self.$set(self.tTab, 'active', item.id);
        },
        // 表格tab页签输入框失焦
        tTabInputBlur(evt, item){
            let self = this;
            self.$set(self.tTab, 'editTab', '');
        },
        // 新增一个tab页签选项
        addTab(){
            let self = this;
            let newTabIndex = self.tTabList.length + 1;

            let newTab = {id: newTabIndex, name: '新建'+newTabIndex};
            self.$set(self, 'tTabList', self.tTabList.concat(newTab));
            // 选中新建tab
            self.$set(self.tTab, 'editTab', '');
            self.$set(self.tTab, 'active', newTabIndex);
            //
            let newDetailTabTabel = {currAnalyse: '', rootCause: '', business: '', improveTec: '', industryMark: ''};
            self.standardData.forEach(item => {
                self.$set(item, 'detailTabTabel', item.detailTabTabel.concat(newDetailTabTabel));
            });

        },
        // 上一步
        prevStep(){
            let self = this;
            let currStep = self.tTab.currStep;
            let newStep = currStep<=1 ? 1 : (currStep-1);
            self.$set(self.tTab, 'currStep', newStep);
        },
        // 下一步
        nextStep(){
            let self = this;
            let currStep = self.tTab.currStep;
            let totalStep = self.standardData.length;
            let newStep = currStep>=totalStep ? totalStep : (currStep+1);
            self.$set(self.tTab, 'currStep', newStep);

        },
        // 双击表格单元格
        cellDblclick(prop){
            let self = this;
            self.$set(self.tTab, 'editCell', prop);
        },
        // 表格单元格输入框失焦
        cellInputBlur(){
            let self = this;
            self.$set(self.tTab, 'editCell', '');
        },
        // 打开详情 dialog
        openDetails(){
            let self = this;
            let data = [
                {id: '1', link: '现状分析（天）'},
                {id: '2', link: '根因分析'},
                {id: '3', link: '业务目标（天）'},
                {id: '4', link: '改进技术目标'},
                {id: '5', link: '业界标杆（天）'}
            ];
            let tHead = [];
            

            self.standardData.forEach(item => {
                tHead.push({label: item.body.text, key: 'step'+Number(item.SN)});

                let d = item.detailTabTabel[self.tTab.active-1];
                self.$set(data[0], 'step'+Number(item.SN), d.currAnalyse);
                self.$set(data[1], 'step'+Number(item.SN), d.rootCause);
                self.$set(data[2], 'step'+Number(item.SN), d.business);
                self.$set(data[3], 'step'+Number(item.SN), d.improveTec);
                self.$set(data[4], 'step'+Number(item.SN), d.industryMark);

            });

            self.detailsData = data;
            self.detailsTHead = tHead;

            self.detailDlg = true;

        },
        // 导出数据
        exportData(){
            let self = this;
            self.detailDlg = false;
        },
        // 新增图元
        addUnit(){
            let self = this;
            let len = self.standardData.length;
            let newId = len+1;
            let newSN = Number(self.standardData[len-1].SN)+1 + '';
            if(newSN.length==1){
                newSN = '00'+newSN
            }else if(newSN.length==2){
                newSN = '0'+newSN
            }
            let newX = self.standardData[len-1].x + 40;
            let newY = self.standardData[len-1].y + 5;
            let newDetailsTabT = [];
            for(let i=0; i<self.tTabList.length; i++){
                newDetailsTabT.push({currAnalyse: '', rootCause: '', business: '', improveTec: '', industryMark: ''});
            }
            let newObj = {};
            newObj = {
                id: newId+'', SN: newSN, x: newX, y: newY, 
                head: {text: newSN+'', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'}, 
                body: {text: Number(newSN)+'的内容', color: '#ffffff', fontFamily: 'Microsoft YaHei', bgColor: '#92d050'}, 
                footer: {text: '标题3', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'},
                lTop: [],
                top: [],
                rTop: [], 
                right: [], 
                rBottom: [], 
                bottom: [], 
                lBottom: [], 
                left: [],
                detailTabTabel: newDetailsTabT,
            };
            self.standardData.push(newObj);
            self.$nextTick();

        },
        // 删除图元
        delUnit(){
            let self = this;
            // self.$set(item, 'isSelect', !item.isSelect);
            // 删除图元
            for(let i=self.standardData.length-1; i>=0; i--){
                let item = self.standardData[i];
                if(item.isSelect){
                    self.standardData.splice(i, 1);
                }
                // 
                for(let iLTop=item.lTop.length-1; iLTop>=0; iLTop--){
                    let lTop = item.lTop[iLTop];
                    if(lTop.isSelect){
                        self.standardData[i].lTop.splice(iLTop, 1);
                    }
                }
                // 
                for(let iTop=item.top.length-1; iTop>=0; iTop--){
                    let top = item.top[iTop];
                    if(top.isSelect){
                        self.standardData[i].top.splice(iTop, 1);
                    }
                }
                // 
                for(let iRTop=item.rTop.length-1; iRTop>=0; iRTop--){
                    let rTop = item.rTop[iRTop];
                    if(rTop.isSelect){
                        self.standardData[i].rTop.splice(iRTop, 1);
                    }
                }
                // 
                for(let iLeft=item.left.length-1; iLeft>=0; iLeft--){
                    let left = item.left[iLeft];
                    if(left.isSelect){
                        self.standardData[i].left.splice(iLeft, 1);
                    }
                }
                // 
                for(let iRight=item.right.length-1; iRight>=0; iRight--){
                    let right = item.right[iRight];
                    if(right.isSelect){
                        self.standardData[i].right.splice(iRight, 1);
                    }
                }
                // 
                for(let iLBottom=item.lBottom.length-1; iLBottom>=0; iLBottom--){
                    let lBottom = item.lBottom[iLBottom];
                    if(lBottom.isSelect){
                        self.standardData[i].lBottom.splice(iLBottom, 1);
                    }
                }
                // 
                for(let iBottom=item.bottom.length-1; iBottom>=0; iBottom--){
                    let bottom = item.bottom[iBottom];
                    if(bottom.isSelect){
                        self.standardData[i].bottom.splice(iBottom, 1);
                    }
                }
                // 
                for(let iRBottom=item.rBottom.length-1; iRBottom>=0; iRBottom--){
                    let rBottom = item.rBottom[iRBottom];
                    if(rBottom.isSelect){
                        self.standardData[i].rBottom.splice(iRBottom, 1);
                    }
                }
            }
        },
        // 编辑图元
        editUnit(){
            let self = this;
        },
        // 清空画布
        cleanUnit(){
            let self = this;
        },
        // 加载标准流程
        loadStandard(){
            let self = this;
        },


        
        // table单元格双击
        cellDblclick2(row, column, cell, event){
            let self = this;
            if(column.property == 'poVal'){
                self.$set(row, 'edit', true);
            }
        },
        


    },
}