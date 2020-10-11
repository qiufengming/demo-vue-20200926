// *as的意思是 导入这个文件里面的所有内容，就不用一个个实例来导入了。
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters' // 导入响应的模块，*相当于引入了这个组件下所有导出的事例
import * as actions from './actions'
import * as mutations from './mutations'


Vue.use(Vuex)
// 首先声明一个需要全局维护的状态 state,比如 我这里举例的resturantName
const state = {
    resturantName: '飞歌餐馆', // 默认值
    // id: xxx  如果还有全局状态也可以在这里添加
    // name:xxx
    // 路由 /works/docstructure 的数据
    navTree: [{
        id: 100000,
        label: '单片机原理及其应用​',
        author: '张三',
        intro: 'qqqqqqqqqq',
        children: [{
            id: 110000,
            label: '1 单片机的基础知识',
            author: '黄蓉',
            intro: 'llllllllll',
            children: [{
                id: 110001,
                label: '1.1 不同进位计数制及其互换',
                author: '李飞',
                intro: 'kkkkkkkkkkkkkkk',
            }, {
                id: 110002,
                label: '1.2 带符号的二进制数',
                author: '菲比',
                intro: 'jjjjjjjjjjj',
            },{
                id: 110003,
                label: '1.3 BCD码及文字符号代码',
                author: '寻常',
                intro: 'hhhhhhhhhhhhhh',
            }, {
                id: 110004,
                label: '1.4 单片机系统的组成',
                author: '南瓜',
                intro: 'ggggggggggggggggg',
            },{
                id: 110005,
                label: '1.5 8051单片机的结构',
                author: '西瓜',
                intro: 'fffffffffffffff',
            }, {
                id: 110006,
                label: '1.6 8051单片机的复位和低功耗工作方式',
                author: '苹果',
                intro: 'ddddddddddddddd',
            }]
        }, {
            id: 120000,
            label: '2 MCS．51指令系统',
            author: '小强',
            intro: 'sssssssssssssss',
            children: [{
                id: 120001,
                label: '2.1 概述',
                author: '小样',
                intro: 'aaaaaaaaaaaaaaaaa',
            }, {
                id: 120002,
                label: '2.2 数据传送指令',
                author: 'cily',
                intro: 'ppppppppppppppp',
            },{
                id: 120003,
                label: '2.3 算术与逻辑运算指令',
                author: '小明',
                intro: 'ooooooooooooooooo',
            }, {
                id: 120004,
                label: '2.4 控制转移指令',
                author: '小红',
                intro: 'iiiiiiiiiiiiii',
            },{
                id: 120005,
                label: '2.5 位操作指令',
                author: '赵六',
                intro: 'uuuuuuuuuuuu',
            }]
        }, {
            id: 130000,
            label: '3 汇编语言程序设计',
            author: 'cily',
            intro: 'yyyyyyyyyy',
            children: [{
                id: 130001,
                label: '3.1 汇编语言程序的格式',
                author: '赵柳',
                intro: 'ttttttttttttt',
            }, {
                id: 130002,
                label: '3.2 伪指令',
                author: '王五',
                intro: 'rrrrrrrrrrr',
            },{
                id: 130003,
                label: '3.3 汇编语言程序的编写步骤及基本结构',
                author: '王伟',
                intro: 'eeeeeeeeeee',
            }, {
                id: 130004,
                label: '3.4 程序设计举例',
                author: '李四',
                intro: 'wwwwwwwwwwwwwww',
            }]
        }]
    }],
    activeNav: '',
}

// 注册上面引入的各大模块
const store = new Vuex.Store({
    state,    // 共同维护的一个状态，state里面可以是很多个全局状态
    getters,  // 获取数据并渲染
    actions,  // 数据的异步操作
    mutations  // 处理数据的唯一途径，state的改变或赋值只能在这里
})

export default store  // 导出store并在 main.js中引用注册。
