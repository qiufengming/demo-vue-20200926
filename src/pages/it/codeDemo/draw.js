let draw = {
    defaultData: [
        {
            id: '1', SN: '001', x: 30, y: 100, 
            head: {text: '001-', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'}, 
            body: {text: 'aaaaaaa', color: '#ffffff', fontFamily: 'Microsoft YaHei', bgColor: '#92d050'}, 
            footer: {text: '驱蚊器', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'},
            lTop: [],
            top: [],
            rTop: [], 
            right: [{isStart: true, linkUnit: 'sn002', linkPoint: 'left'}], 
            rBottom: [], 
            bottom: [], 
            lBottom: [], 
            left: [],
            detailTabTabel: [
                {currAnalyse: '0.01', rootCause: '', business: '0.01', improveTec: '', industryMark: '0.01'},
                {currAnalyse: '0.05', rootCause: '', business: '0.05', improveTec: '', industryMark: '0.01'},
                {currAnalyse: '0', rootCause: '', business: '0.01', improveTec: '', industryMark: '0.01'}
            ],
        },
        {id: '2', SN: '002', x: 156, y: 100, head: {text: '002-', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'}, body: {text: 'bbbbbbb', color: '#ffffff', fontFamily: 'Microsoft YaHei', bgColor: '#92d050'}, footer: {text: '滚蛋吧', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'},lTop: [],top: [],rTop: [], right: [{isStart: true, linkUnit: 'sn003', linkPoint: 'left'}], rBottom: [], bottom: [], lBottom: [], left: [{isStart: false, linkUnit: 'sn001', linkPoint: 'right'}], detailTabTabel:[{currAnalyse: '0', rootCause: '', business: '0', improveTec: '', industryMark: '0'},{currAnalyse: '0', rootCause: '', business: '0', improveTec: '', industryMark: '0'},{currAnalyse: '0', rootCause: '', business: '0', improveTec: '', industryMark: '0'}]},
        {id: '3', SN: '003', x: 282, y: 100, head: {text: '003-', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'}, body: {text: 'cccccc', color: '#ffffff', fontFamily: 'Microsoft YaHei', bgColor: '#FF9800'}, footer: {text: '发给你答复', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'},lTop: [],top: [],rTop: [], right: [{isStart: true, linkUnit: 'sn004', linkPoint: 'left'}, {isStart: true, linkUnit: 'sn005', linkPoint: 'left'}], rBottom: [], bottom: [], lBottom: [], left: [{isStart: false, linkUnit: 'sn002', linkPoint: 'right'}], detailTabTabel:[{currAnalyse: '1', rootCause: '刷副本', business: '0.1', improveTec: '闪电风暴', industryMark: '0.1'},{currAnalyse: '1', rootCause: '1.C-S关系多对一、多对多，华为、客户编码的颗粒度不同，需手工生成BOQ', business: '0.2', improveTec: '消除C-S多对多、多对一', industryMark: '0.1'},{currAnalyse: '1', rootCause: '1.C-S关系多对一、多对多，华为、客户编码的颗粒度不同，需手工生成BOQ', business: '0.2', improveTec: '消除C-S多对多、多对一', industryMark: '0.1'}]},
        {id: '4', SN: '004', x: 408, y: 34, head: {text: '004-', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'}, body: {text: 'dddd', color: '#ffffff', fontFamily: 'Microsoft YaHei', bgColor: '#FF9800'}, footer: {text: '打个包大哥', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'},lTop: [],top: [],rTop: [], right: [{isStart: true, linkUnit: 'sn006', linkPoint: 'left'}], rBottom: [], bottom: [], lBottom: [], left: [{isStart: false, linkUnit: 'sn003', linkPoint: 'right'}], detailTabTabel:[{currAnalyse: '2', rootCause: '上刊登', business: '0.1', improveTec: '消除备注、插入和扩位编码', industryMark: '0.1'},{currAnalyse: '1', rootCause: 'djfdhn', business: '0.2', improveTec: '消除备注、插入和扩位编码', industryMark: '0.1'},{currAnalyse: '1', rootCause: '定制与选配件，通过备注/插入，或申请扩位编码，需进行解决方案评审，并且研发要进行定制化开发', business: '0.2', improveTec: '消除备注、插入和扩位编码', industryMark: '0.1'}]},
        {id: '5', SN: '005', x: 408, y: 166, head: {text: '005-', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'}, body: {text: 'ede', color: '#ffffff', fontFamily: 'Microsoft YaHei', bgColor: '#92d050'}, footer: {text: '都送给你的', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'},lTop: [],top: [],rTop: [], right: [{isStart: true, linkUnit: 'sn006', linkPoint: 'left'}], rBottom: [], bottom: [], lBottom: [], left: [{isStart: false, linkUnit: 'sn003', linkPoint: 'right'}], detailTabTabel:[{currAnalyse: '', rootCause: '', business: '', improveTec: '', industryMark: ''},{currAnalyse: '', rootCause: '', business: '', improveTec: '', industryMark: ''},{currAnalyse: '', rootCause: '', business: '', improveTec: '', industryMark: '' }]},
        {id: '6', SN: '006', x: 534, y: 100, head: {text: '006-', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'}, body: {text: 'dsfbd', color: '#ffffff', fontFamily: 'Microsoft YaHei', bgColor: '#FF9800'}, footer: {text: '地方干部', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'},lTop: [],top: [],rTop: [], right: [{isStart: true, linkUnit: 'sn007', linkPoint: 'left'}], rBottom: [], bottom: [], lBottom: [], left: [{isStart: false, linkUnit: 'sn004', linkPoint: 'right'},{isStart: false, linkUnit: 'sn004', linkPoint: 'right'}], detailTabTabel:[{currAnalyse: '0', rootCause: '', business: '0', improveTec: '', industryMark: '0'},{currAnalyse: '0', rootCause: '', business: '0', improveTec: '', industryMark: '0'},{currAnalyse: '0', rootCause: '', business: '0', improveTec: '', industryMark: '0' }]},
        {id: '7', SN: '007', x: 660, y: 100, head: {text: '007-', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'}, body: {text: '哈哈', color: '#ffffff', fontFamily: 'Microsoft YaHei', bgColor: '#FF9800'}, footer: {text: '电饭煲的', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'},lTop: [],top: [],rTop: [], right: [{isStart: true, linkUnit: 'sn008', linkPoint: 'left'},{isStart: true, linkUnit: 'sn009', linkPoint: 'left'}], rBottom: [], bottom: [], lBottom: [], left: [{isStart: false, linkUnit: 'sn006', linkPoint: 'right'}], detailTabTabel:[{currAnalyse: '0.5', rootCause: '', business: '0.01', improveTec: '', industryMark: '0.01'},{currAnalyse: '0.3', rootCause: '', business: '0.3', improveTec: '', industryMark: '0.01'},{currAnalyse: '0', rootCause: '', business: '0.4', improveTec: '', industryMark: '0.2' }]},
        {id: '8', SN: '008', x: 786, y: 34, head: {text: '008-', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'}, body: {text: '听歌', color: '#ffffff', fontFamily: 'Microsoft YaHei', bgColor: '#FF9800'}, footer: {text: '富豪们', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'},lTop: [],top: [],rTop: [], right: [{isStart: true, linkUnit: 'sn010', linkPoint: 'left'}], rBottom: [], bottom: [], lBottom: [], left: [{isStart: false, linkUnit: 'sn007', linkPoint: 'right'}], detailTabTabel:[{currAnalyse: '1', rootCause: '', business: '0.5', improveTec: '', industryMark: '0.01'},{currAnalyse: '0.6', rootCause: '', business: '0.6', improveTec: '', industryMark: '0.01'},{currAnalyse: '0.3', rootCause: '', business: '0.2', improveTec: '', industryMark: '0.01' }]},
        {id: '9', SN: '009', x: 786, y: 166, head: {text: '009-', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'}, body: {text: '恩特', color: '#ffffff', fontFamily: 'Microsoft YaHei', bgColor: '#FF9800'}, footer: {text: '水电费', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'},lTop: [],top: [],rTop: [], right: [{isStart: true, linkUnit: 'sn010', linkPoint: 'left'}], rBottom: [], bottom: [], lBottom: [], left: [{isStart: false, linkUnit: 'sn007', linkPoint: 'right'}], detailTabTabel:[{currAnalyse: '', rootCause: '', business: '', improveTec: '', industryMark: ''},{currAnalyse: '', rootCause: '', business: '', improveTec: '', industryMark: ''},{currAnalyse: '', rootCause: '', business: '', improveTec: '', industryMark: ''}]},
        {id: '10', SN: '010', x: 912, y: 100, head: {text: '010-', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'}, body: {text: 'Ethan', color: '#ffffff', fontFamily: 'Microsoft YaHei', bgColor: '#92d050'}, footer: {text: '撒地方v', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'},lTop: [],top: [],rTop: [], right: [{isStart: true, linkUnit: 'sn011', linkPoint: 'left'}], rBottom: [], bottom: [], lBottom: [], left: [{isStart: false, linkUnit: 'sn008', linkPoint: 'right'},{isStart: false, linkUnit: 'sn009', linkPoint: 'right'}], detailTabTabel:[{currAnalyse: '0.01', rootCause: '', business: '0.01', improveTec: '', industryMark: '0.3'},{currAnalyse: '0.05', rootCause: '', business: '0.05', improveTec: '', industryMark: '0.01'},{currAnalyse: '0.05', rootCause: '', business: '0.05', improveTec: '', industryMark: '0.01' }]},
        {id: '11', SN: '011', x: 1038, y: 100, head: {text: '011-', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'}, body: {text: '让人颓废和', color: '#ffffff', fontFamily: 'Microsoft YaHei', bgColor: '#92d050'}, footer: {text: '是大V', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'},lTop: [],top: [],rTop: [], right: [{isStart: true, linkUnit: 'sn012', linkPoint: 'left'},{isStart: true, linkUnit: 'sn013', linkPoint: 'left'}], rBottom: [], bottom: [], lBottom: [], left: [{isStart: false, linkUnit: 'sn010', linkPoint: 'right'}], detailTabTabel:[{currAnalyse: '0.01', rootCause: '', business: '0.01', improveTec: '', industryMark: '0.02'},{currAnalyse: '0.5', rootCause: '', business: '0.5', improveTec: '', industryMark: '0.01'},{currAnalyse: '0.5', rootCause: '', business: '0.5', improveTec: '', industryMark: '0.01' }]},
        {id: '12', SN: '012', x: 1164, y: 34, head: {text: '012-', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'}, body: {text: '', color: '#ffffff', fontFamily: 'Microsoft YaHei', bgColor: '#92d050'}, footer: {text: '', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'},lTop: [],top: [],rTop: [], right: [{isStart: true, linkUnit: 'sn015', linkPoint: 'left'}], rBottom: [], bottom: [], lBottom: [], left: [{isStart: false, linkUnit: 'sn011', linkPoint: 'right'}], detailTabTabel:[{currAnalyse: '', rootCause: '', business: '', improveTec: '', industryMark: ''},{currAnalyse: '', rootCause: '', business: '', improveTec: '', industryMark: ''},{ currAnalyse: '', rootCause: '', business: '', improveTec: '', industryMark: ''}]},
        {id: '13', SN: '013', x: 1164, y: 166, head: {text: '013-', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'}, body: {text: '发给你', color: '#ffffff', fontFamily: 'Microsoft YaHei', bgColor: '#FF9800'}, footer: {text: '发布', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'},lTop: [],top: [],rTop: [], right: [{isStart: true, linkUnit: 'sn014', linkPoint: 'left'}], rBottom: [], bottom: [], lBottom: [], left: [{isStart: false, linkUnit: 'sn011', linkPoint: 'right'}], detailTabTabel:[{currAnalyse: '0.5', rootCause: '只要走定制开发流程，即使微小变化，走流程也需要3~5天', business: '0.01', improveTec: '客制方案在配置器上即可完成', industryMark: '0.01'},{currAnalyse: '0.5', rootCause: '只要走定制开发流程，即使微小变化，走流程也需要3~5天', business: '0.01', improveTec: '客制方案在配置器上即可完成', industryMark: '0.01'},{currAnalyse: '0.5', rootCause: '只要走定制开发流程，即使微小变化，走流程也需要3~5天', business: '0.01', improveTec: '客制方案在配置器上即可完成', industryMark: '0.01' }]},
        {id: '14', SN: '014', x: 1290, y: 166, head: {text: '014', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'}, body: {text: '的咖啡机', color: '#ffffff', fontFamily: 'Microsoft YaHei', bgColor: '#FF9800'}, footer: {text: '', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'},lTop: [],top: [],rTop: [], right: [{isStart: true, linkUnit: 'sn015', linkPoint: 'left'}], rBottom: [], bottom: [], lBottom: [], left: [{isStart: false, linkUnit: 'sn013', linkPoint: 'right'}], detailTabTabel:[{currAnalyse: '', rootCause: '', business: '', improveTec: '', industryMark: ''},{currAnalyse: '', rootCause: '', business: '', improveTec: '', industryMark: ''},{currAnalyse: '', rootCause: '', business: '', improveTec: '', industryMark: '' }]},
        {id: '15', SN: '015', x: 1416, y: 34, head: {text: '015-', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'}, body: {text: '是发布电饭煲的', color: '#ffffff', fontFamily: 'Microsoft YaHei', bgColor: '#FF9800'}, footer: {text: '撒地方v', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'},lTop: [],top: [],rTop: [], right: [], rBottom: [], bottom: [{isStart: true, linkUnit: 'sn016', linkPoint: 'top'}], lBottom: [], left: [{isStart: false, linkUnit: 'sn012', linkPoint: 'right'}, {isStart: false, linkUnit: 'sn014', linkPoint: 'right'}], detailTabTabel:[{currAnalyse: '1', rootCause: '人工确认信息多：齐套、需求、订单、备注等', business: '1', improveTec: '消除订单备注', industryMark: '0.5'},{currAnalyse: '0.5', rootCause: '人工确认信息多：齐套、需求、订单、备注等', business: '0.5', improveTec: '消除订单备注', industryMark: '0.5'},{ currAnalyse: '0.5', rootCause: '人工确认信息多：齐套、需求、订单、备注等', business: '0.5', improveTec: '消除订单备注', industryMark: '0.5'}]},
        {id: '16', SN: '016', x: 1416, y: 334, head: {text: '016-', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'}, body: {text: '的发布大风', color: '#ffffff', fontFamily: 'Microsoft YaHei', bgColor: '#FF9800'}, footer: {text: '是发v', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'},lTop: [],top: [{isStart: false, linkUnit: 'sn015', linkPoint: 'bottom'}],rTop: [], right: [], rBottom: [], bottom: [], lBottom: [], left: [{isStart: true, linkUnit: 'sn017', linkPoint: 'right'}], detailTabTabel:[{currAnalyse: '0.5', rootCause: '物料齐套、急单、来料缺陷；调仓等操作', business: '0.5', improveTec: '减少低发货物料编码、消除扩位编码、降低来料缺陷', industryMark: '1.667'},{currAnalyse: '5', rootCause: '物料齐套、急单、来料缺陷；调仓等操作', business: '0.5', improveTec: '减少低发货物料编码、消除扩位编码、降低来料缺陷', industryMark: '0.5'},{currAnalyse: '2', rootCause: '物料齐套、急单、来料缺陷；调仓等操作', business: '1', improveTec: '减少低发货物料编码、消除扩位编码、降低来料缺陷', industryMark: '0.5' }]},
        {id: '17', SN: '017', x: 1290, y: 334, head: {text: '017-', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'}, body: {text: '三发挥', color: '#ffffff', fontFamily: 'Microsoft YaHei', bgColor: '#FF9800'}, footer: {text: 'SPS', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'},lTop: [],top: [],rTop: [], right: [{isStart: false, linkUnit: 'sn016', linkPoint: 'left'}], rBottom: [], bottom: [], lBottom: [], left: [{isStart: true, linkUnit: 'sn018', linkPoint: 'right'}], detailTabTabel:[{currAnalyse: '2', rootCause: '只要按订单分料、投递，就至少需要1天时间', business: '0.5', improveTec: '90%订单不需按客户订单投递', industryMark: '0'},{currAnalyse: '0.5', rootCause: '只要按订单分料、投递，就至少需要1天时间', business: '0.5', improveTec: '90%订单不需按客户订单投递', industryMark: '0'},{currAnalyse: '1', rootCause: '只要按订单分料、投递，就至少需要1天时间', business: '0.5', improveTec: '90%订单不需按客户订单投递', industryMark: '0' }]},
        {id: '18', SN: '018', x: 1164, y: 334, head: {text: '018-', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'}, body: {text: '萨芬干撒发v撒发v', color: '#ffffff', fontFamily: 'Microsoft YaHei', bgColor: '#FF9800'}, footer: {text: '是否VB', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'},lTop: [],top: [],rTop: [], right: [{isStart: false, linkUnit: 'sn017', linkPoint: 'left'}], rBottom: [], bottom: [], lBottom: [], left: [{isStart: true, linkUnit: 'sn019', linkPoint: 'right'}], detailTabTabel:[{currAnalyse: '4', rootCause: '急单带来备货齐套问题（PO比20%）EC更改带来备料问题（PO比20%）EC、备注确认等（PO占比10~20%）包材备料7~15天备货到产线1天', business: '1', improveTec: '90%产线实现3天冻结，实现物料准备0天，备货到产线0天，消除EC/备注', industryMark: '1'},{currAnalyse: '3', rootCause: '急单带来备货齐套问题（PO比20%）EC更改带来备料问题（PO比20%）EC、备注确认等（PO占比10~20%）包材备料7~15天备货到产线1天', business: '1', improveTec: '90%产线实现3天冻结，实现物料准备0天，备货到产线0天，消除EC/备注', industryMark: '1'},{currAnalyse: '4', rootCause: '急单带来备货齐套问题（PO比20%）EC更改带来备料问题（PO比20%）EC、备注确认等（PO占比10~20%）包材备料7~15天备货到产线1天', business: '1', improveTec: '90%产线实现3天冻结，实现物料准备0天，备货到产线0天，消除EC/备注', industryMark: '1' }]},
        {id: '19', SN: '019', x: 1038, y: 334, head: {text: '019-', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'}, body: {text: '打副本电饭煲的', color: '#ffffff', fontFamily: 'Microsoft YaHei', bgColor: '#FF9800'}, footer: {text: '电饭煲', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'},lTop: [],top: [],rTop: [], right: [{isStart: false, linkUnit: 'sn018', linkPoint: 'left'}], rBottom: [], bottom: [], lBottom: [], left: [{isStart: true, linkUnit: 'sn020', linkPoint: 'right'}], detailTabTabel:[{currAnalyse: '2', rootCause: '产品种类多，换线多（基本每条线每天换1次，4~8小时。HR每月生产69个编码，半年新导入108个新产品；HH2月126个编码）', business: '0.5', improveTec: '提升效率', industryMark: '0.5'},{currAnalyse: '2', rootCause: '产品种类多，换线多（基本每条线每天换1次，4~8小时。HR每月生产69个编码，半年新导入108个新产品；HH2月126个编码）', business: '0.5', improveTec: '提升效率', industryMark: '0.5'},{ currAnalyse: '2', rootCause: '产品种类多，换线多（基本每条线每天换1次，4~8小时。HR每月生产69个编码，半年新导入108个新产品；HH2月126个编码）', business: '0.5', improveTec: '提升效率', industryMark: '0.5' }]},
        {id: '20', SN: '020', x: 912, y: 334, head: {text: '020-', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'}, body: {text: '我仍然不', color: '#ffffff', fontFamily: 'Microsoft YaHei', bgColor: '#FF9800'}, footer: {text: '是大V', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'},lTop: [],top: [],rTop: [], right: [{isStart: false, linkUnit: 'sn019', linkPoint: 'left'}], rBottom: [], bottom: [], lBottom: [], left: [{isStart: true, linkUnit: 'sn021', linkPoint: 'right'}], detailTabTabel:[{currAnalyse: '5', rootCause: '1. 总装配时间500min 2. 新产品多，装配学习多0.5天 3. 来料不良的生产停顿，一般0.5天（占比10~20%） 4. 插框装配时间长，一般300min', business: '1', improveTec: '消除80%的新品学习周期降低来料不良缺陷 90%订单按客户要求延迟装配按订单装配的总装时间1小时', industryMark: '1'},{currAnalyse: '4', rootCause: '1. 总装配时间500min 2. 新产品多，装配学习多0.5天 3. 来料不良的生产停顿，一般0.5天（占比10~20%） 4. 插框装配时间长，一般300min', business: '2', improveTec: '消除80%的新品学习周期降低来料不良缺陷 90%订单按客户要求延迟装配按订单装配的总装时间1小时', industryMark: '1'},{currAnalyse: '4.6', rootCause: '1. 总装配时间500min 2. 新产品多，装配学习多0.5天 3. 来料不良的生产停顿，一般0.5天（占比10~20%） 4. 插框装配时间长，一般300min', business: '1', improveTec: '消除80%的新品学习周期降低来料不良缺陷 90%订单按客户要求延迟装配按订单装配的总装时间1小时', industryMark: '1' }]},
        {id: '21', SN: '021', x: 786, y: 334, head: {text: '021-', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'}, body: {text: '咦咦了', color: '#ffffff', fontFamily: 'Microsoft YaHei', bgColor: '#FF9800'}, footer: {text: '是大润发', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'},lTop: [],top: [],rTop: [], right: [{isStart: false, linkUnit: 'sn020', linkPoint: 'left'}], rBottom: [], bottom: [], lBottom: [], left: [{isStart: true, linkUnit: 'sn022', linkPoint: 'right'}], detailTabTabel:[{currAnalyse: '2', rootCause: '需预约IQC作检查，一批机柜需要1天', business: '0.5', improveTec: '', industryMark: '0.5'},{currAnalyse: '2', rootCause: '需预约IQC作检查，一批机柜需要1天', business: '0.5', improveTec: '', industryMark: '0.5'},{currAnalyse: '2', rootCause: '需预约IQC作检查，一批机柜需要1天', business: '0.5', improveTec: '', industryMark: '0.5' }]},
        {id: '22', SN: '022', x: 660, y: 334, head: {text: '022-', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'}, body: {text: '温柔哥', color: '#ffffff', fontFamily: 'Microsoft YaHei', bgColor: '#676767'}, footer: {text: '切', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'},lTop: [],top: [],rTop: [], right: [{isStart: false, linkUnit: 'sn021', linkPoint: 'left'}], rBottom: [], bottom: [], lBottom: [], left: [{isStart: true, linkUnit: 'sn023', linkPoint: 'right'}], detailTabTabel:[{currAnalyse: '0.5', rootCause: '', business: '0.01', improveTec: '', industryMark: '0.01'},{currAnalyse: '2', rootCause: '', business: '0.5', improveTec: '', industryMark: '0.5'},{ currAnalyse: '2', rootCause: '', business: '0.5', improveTec: '', industryMark: '0.5'}]},
        {id: '23', SN: '023', x: 534, y: 334, head: {text: '023-', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'}, body: {text: '凶了', color: '#ffffff', fontFamily: 'Microsoft YaHei', bgColor: '#676767'}, footer: {text: '污染', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'},lTop: [],top: [],rTop: [], right: [{isStart: false, linkUnit: 'sn022', linkPoint: 'left'}], rBottom: [], bottom: [], lBottom: [], left: [{isStart: true, linkUnit: 'sn024', linkPoint: 'right'}],detailTabTabel:[{currAnalyse: '2', rootCause: '', business: '0.5', improveTec: '', industryMark: '0.5'},{currAnalyse: '2', rootCause: '', business: '0.5', improveTec: '', industryMark: '0'},{ currAnalyse: '2', rootCause: '', business: '0.5', improveTec: '', industryMark: '0.5' }]},
        {id: '24', SN: '024', x: 408, y: 334, head: {text: '024-', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'}, body: {text: '我说如果', color: '#ffffff', fontFamily: 'Microsoft YaHei', bgColor: '#676767'}, footer: {text: '是否', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'},lTop: [],top: [],rTop: [], right: [{isStart: false, linkUnit: 'sn023', linkPoint: 'left'}], rBottom: [], bottom: [], lBottom: [], left: [{isStart: true, linkUnit: 'sn025', linkPoint: 'right'}], detailTabTabel:[{currAnalyse: '2', rootCause: '', business: '0.5', improveTec: '', industryMark: '0.5'},{currAnalyse: '2', rootCause: '', business: '0.5', improveTec: '', industryMark: '0'},{ currAnalyse: '2', rootCause: '', business: '0.5', improveTec: '', industryMark: '0.5' }]},
        {id: '25', SN: '025', x: 282, y: 334, head: {text: '025-', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'}, body: {text: '爱的发的', color: '#ffffff', fontFamily: 'Microsoft YaHei', bgColor: '#676767'}, footer: {text: 'sdfv ', color: '#0e0d0d', fontFamily: 'Microsoft YaHei', bgColor: '#ffffff'},lTop: [],top: [],rTop: [], right: [{isStart: false, linkUnit: 'sn024', linkPoint: 'left'}], rBottom: [], bottom: [], lBottom: [], left: [], detailTabTabel:[{currAnalyse: '1', rootCause: '', business: '0.5', improveTec: '', industryMark: '0.01'},{currAnalyse: '0.6', rootCause: '', business: '0.6', improveTec: '', industryMark: '0.01'},{ currAnalyse: '0.3', rootCause: '', business: '0.2', improveTec: '', industryMark: '0.01' }]},
    ],
    defaultDataObj: {},
    defaultTab: [
        {id: 1, name: '万能插框分析'},
        {id: 2, name: 'ATN'},
        {id: 3, name: 'IT服务器'},
    ],
};
// 计算每个单元连接点的x,y坐标
draw.calcPointXY = function(data){
    let obj = {};
    let newData = [];
    data.forEach(item => {
        let d = {
            'lTopX': item.x, 'lTopY': item.y, 'topX': item.x + self.unitW/2, 'topY': item.y, 'rTopX': item.x + self.unitW, 'rTopY': item.y,
            'leftX': item.x, 'leftY': item.y + self.unitH/2, 'rightX': item.x + self.unitW, 'rightY': item.y + self.unitH/2,
            'lBottomX': item.x, 'lBottomY': item.y + self.unitH, 'bottomX': item.x + self.unitW/2, 'bottomY': item.y + self.unitH,'rBottomX': item.x + self.unitW, 'rBottomY':  item.y + self.unitH
        };
        let resultObj = _.extend(item, d);
        newData.push(resultObj);
        obj['sn'+item.SN] = resultObj;
    });
    return { data: newData, obj: obj };
};
// 计算箭头
draw.calcArrow = function(data, dataObj){
    let newArr = [];

    data.forEach(item => {
        if(item.SN == 'mouse'){
            return false;
        }
        // 左上
        if(item.lTop.length){
            item.lTop.forEach(line => {
                if(!line.isStart){ return false; }
                newArr.push( draw.calcOneArrow(item, line, dataObj[line.linkUnit], 'lTop') );
            });
        }
        // 上
        if(item.top.length){
            item.top.forEach(line => {
                if(!line.isStart){ return false; }
                newArr.push( draw.calcOneArrow(item, line, dataObj[line.linkUnit], 'top') );
            });
        }
        // 右上
        if(item.rTop.length){
            item.rTop.forEach(line => {
                if(!line.isStart){ return false; }
                newArr.push( draw.calcOneArrow(item, line, dataObj[line.linkUnit], 'rTop') );
            });
        }
        // 左
        if(item.left.length){
            item.left.forEach(line => {
                if(!line.isStart){ return false; }
                newArr.push( draw.calcOneArrow(item, line, dataObj[line.linkUnit], 'left') );
            });
        }
        // 右
        if(item.right.length){
            item.right.forEach(line => {
                if(!line.isStart){ return false; }
                newArr.push( draw.calcOneArrow(item, line, dataObj[line.linkUnit], 'right') );
            });
        }
        // 左下
        if(item.lBottom.length){
            item.lBottom.forEach(line => {
                if(!line.isStart){ return false; }
                newArr.push( draw.calcOneArrow(item, line, dataObj[line.linkUnit], 'lBottom') );
            });
        }
        // 下
        if(item.bottom.length){
            item.bottom.forEach(line => {
                if(!line.isStart){ return false; }
                newArr.push( draw.calcOneArrow(item, line, dataObj[line.linkUnit], 'bottom') );
            });
        }
        // 右下
        if(item.rBottom.length){
            item.rBottom.forEach(line => {
                if(!line.isStart){ return false; }
                newArr.push( draw.calcOneArrow(item, line, dataObj[line.linkUnit], 'rBottom') );
            });
        }
    });
    return newArr;
};
/** 
 * 计算一个箭头
 * unit：一个图元数据, 
 * line：图元的一条连接线, 
 * endPoint：图元连接线的结束点的图元数据
 */
draw.calcOneArrow = function(unit, line, endPoint, type){
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
    debugger;

    return {startX: sX, startY: sY, endX: eX, endY: eY, originLR: oLR, originTB: oTB, angle: angle, width: w};
};


export default draw;
