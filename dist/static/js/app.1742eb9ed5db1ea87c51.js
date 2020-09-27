webpackJsonp([1],Array(192).concat([
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'App'
});

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    components: {},
    data: function data() {
        return {
            data1: [],
            data2: [],
            data3: []
        };
    },
    created: function created() {
        this.initData();
    },
    mounted: function mounted() {},

    methods: {
        // 初始化数据
        initData: function initData() {
            var self = this;
        },

        // 页面跳转
        goPage: function goPage(pathName) {
            var self = this;
            var routeUrl = self.$router.resolve({
                name: pathName
            });
            window.open(routeUrl.href, '_blank');

            // html 取参  $route.query.id
            // script 取参  this.$route.query.id

            // vue路由跳转有四种方式
            // 1. router-link
            // 2. this.$router.push() (函数里面调用)
            // 3. this.$router.replace() (用法同push)
            // 4. this.$router.go(n)
        }
    }
});

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    components: {},
    data: function data() {
        return {
            data1: [],
            data2: [],
            data3: []
        };
    },
    created: function created() {
        this.initData();
    },
    mounted: function mounted() {},

    methods: {
        // 初始化数据
        initData: function initData() {
            var self = this;
            self.getData1();
            self.getData2();
            self.getData3();
        },

        // 获取data1 数据
        getData1: function getData1() {
            var self = this;
            self.data1 = [{ name: 'Ueditor 富文本编辑器', routeName: 'Ueditor', routePath: '/ueditor' }, { name: 'Git', routeName: 'git', routePath: '/it/git' }, { name: 'React', routeName: 'react', routePath: '/it/react' }, { name: 'codeDemo', routeName: 'codeDemo', routePath: '/it/codeDemo' }, { name: 'Vue', routeName: 'vue', routePath: '/it/vue' }, { name: '面试题', routeName: 'interviewQuestions', routePath: '/it/interviewQuestions' }, { name: 'Kinetic.js', routeName: 'kinetic', routePath: '/it/kinetic' }, { name: 'jsplumb.js', routeName: 'jsplumb', routePath: '/it/jsplumb' }];
        },

        // 获取data2 数据
        getData2: function getData2() {
            var self = this;
            self.data2 = [{ name: '工作 - 条目化', routeName: 'docStructure', routePath: '/works/docstructure' }, { name: '简历', routeName: 'resume', routePath: '/works/resume' }, { name: 'KineticJS画流程图', routeName: 'kineticFlowCahrt', routePath: '/works/kineticFlowCahrt' }];
        },

        // 获取data3 数据
        getData3: function getData3() {
            var self = this;
            self.data3 = [{ name: '公务员', routeName: 'gongwuyuan', routePath: '/learn/gongwuyuan' }, { name: '旅游', routeName: 'travel', routePath: '/travel' }];
        },

        // 页面跳转
        goPage: function goPage(pathName) {
            var self = this;
            var routeUrl = self.$router.resolve({
                name: pathName
            });
            window.open(routeUrl.href, '_blank');

            // html 取参  $route.query.id
            // script 取参  this.$route.query.id

            // vue路由跳转有四种方式
            // 1. router-link
            // 2. this.$router.push() (函数里面调用)
            // 3. this.$router.replace() (用法同push)
            // 4. this.$router.go(n)
        }
    }
});

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'HelloWorld',
  data: function data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
});

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sub_Confirm__ = __webpack_require__(197);
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'First',
    components: {
        Confirm: __WEBPACK_IMPORTED_MODULE_0__sub_Confirm__["a" /* default */]
    },
    data: function data() {
        return {
            mymsg: '欢迎来到第一个页面呢~'
        };
    },

    methods: {
        getMessage: function getMessage(val) {
            alert(val);
        }
    }
});

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Confirm_vue__ = __webpack_require__(198);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_157c318d_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Confirm_vue__ = __webpack_require__(420);
function injectStyle (ssrContext) {
  __webpack_require__(419)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Confirm_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_157c318d_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Confirm_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'confirm-button',
    props: ['text'],
    data: function data() {
        return {
            msg: true
        };
    },

    methods: {
        getButtonClick: function getButtonClick() {
            this.$emit('message', this.msg);
        }
    }
});

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sub_Confirm__ = __webpack_require__(197);
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'First',
    components: {
        Confirm: __WEBPACK_IMPORTED_MODULE_0__sub_Confirm__["a" /* default */]
    },
    data: function data() {
        return {
            mymsg: '这是第二个页面哦~'
        };
    },

    methods: {
        getMessage: function getMessage(val) {
            alert(val);
        }
    }
});

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//

// import './static/UE/ueditor.config.js'
// import 'static/UE/ueditor.all.min.js'

/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            initValue: '',
            defaultConfig: {
                // VUE CLI 3 会添加 process.env.BASE_URL 的环境变量，而 VUE CLI 2 没有，所以借此设置 UEDITOR_HOME_URL，能涵盖大部分 Vue 开发者的使用场景
                UEDITOR_HOME_URL: Object({"NODE_ENV":"production"}).BASE_URL ? Object({"NODE_ENV":"production"}).BASE_URL + 'UEditor/' : '/static/UEditor/',
                enableAutoSave: false
            },
            ueditorCont: '',
            ueditorHtml: ''
        };
    },

    props: {},
    computed: {},
    created: function created() {},
    mounted: function mounted() {
        this.initUEditor();
    },

    methods: {
        // 实例化编辑器
        initUEditor: function initUEditor() {
            this.$refs.script.id = this.id = 'editor_' + Math.random().toString(16).slice(-6); // 这么做是为了支持 Vue SSR，因为如果把 id 属性放在 data 里会导致服务端和客户端分别计算该属性的值，而造成 id 不匹配无法初始化的 BUG
            this.editor = UE.getEditor(this.id, {});
        },

        // 获取内容
        getEditorHtml: function getEditorHtml() {
            var self = this;
            self.ueditorCont = self.editor.getContent();
            self.ueditorHtml = self.editor.getAllHtml();
        }
    }
});

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__leftNav_vue__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__centerTab_vue__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__right_vue__ = __webpack_require__(439);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
    components: { leftNav: __WEBPACK_IMPORTED_MODULE_0__leftNav_vue__["a" /* default */], centerTab: __WEBPACK_IMPORTED_MODULE_1__centerTab_vue__["a" /* default */], right: __WEBPACK_IMPORTED_MODULE_2__right_vue__["a" /* default */] },
    data: function data() {
        return {
            mymsg: '这是第二个页面哦~'
        };
    },

    methods: {
        getMessage: function getMessage(val) {
            alert(val);
        }
    }
});

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    components: {},
    data: function data() {
        return {
            filterText: '',
            data: [{
                id: 100000,
                label: '单片机原理及其应用​',
                children: [{
                    id: 110000,
                    label: '1 单片机的基础知识',
                    children: [{
                        id: 110001,
                        label: '1.1 不同进位计数制及其互换'
                    }, {
                        id: 110002,
                        label: '1.2 带符号的二进制数'
                    }, {
                        id: 110003,
                        label: '1.3 BCD码及文字符号代码'
                    }, {
                        id: 110004,
                        label: '1.4 单片机系统的组成'
                    }, {
                        id: 110005,
                        label: '1.5 8051单片机的结构'
                    }, {
                        id: 110006,
                        label: '1.6 8051单片机的复位和低功耗工作方式'
                    }]
                }, {
                    id: 120000,
                    label: '2 MCS．51指令系统',
                    children: [{
                        id: 120001,
                        label: '2.1 概述'
                    }, {
                        id: 120002,
                        label: '2.2 数据传送指令'
                    }, {
                        id: 120003,
                        label: '2.3 算术与逻辑运算指令'
                    }, {
                        id: 120004,
                        label: '2.4 控制转移指令'
                    }, {
                        id: 120005,
                        label: '2.5 位操作指令'
                    }]
                }, {
                    id: 130000,
                    label: '3 汇编语言程序设计',
                    children: [{
                        id: 130001,
                        label: '3.1 汇编语言程序的格式'
                    }, {
                        id: 130002,
                        label: '3.2 伪指令'
                    }, {
                        id: 130003,
                        label: '3.3 汇编语言程序的编写步骤及基本结构'
                    }, {
                        id: 130004,
                        label: '3.4 程序设计举例'
                    }]
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        };
    },

    watch: {
        filterText: function filterText(val) {
            this.$refs.tree.filter(val);
        }
    },
    methods: {
        filterNode: function filterNode(value, data) {
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
        },

        // 点击树节点
        nodeClick: function nodeClick(data, node, treeNode) {
            var self = this;
            var id = data.id;
            var hasChild = data.children && data.children.length ? true : false;
            document.getElementById('nav_' + id).scrollIntoView();
        }
    }
});

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fullText_vue__ = __webpack_require__(435);
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    components: { fullText: __WEBPACK_IMPORTED_MODULE_0__fullText_vue__["a" /* default */] },
    data: function data() {
        return {
            mymsg: '这是第二个页面哦~',
            isRule: false
        };
    },

    methods: {
        getMessage: function getMessage(val) {
            alert(val);
        }
    }
});

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    components: {},
    data: function data() {
        return {
            docName: '<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);">单片机原理及其应用</span></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本书是根据普通高等院校机电类的教学计划，以及对“单片机原理及其应用”课程的基本要求而编写的教材。内容包括单片机的基本原理、<a target="_blank" href="https://baike.baidu.com/item/8051/3624046" style="color: rgb(19, 110, 194); text-decoration-line: none;">8051</a>系列单片机的结构、MCS-51指令系统、编程技巧、存储器的扩展方法、中断、并口、串口、定时/计数器的结构与原理、功能器件的应用、<a target="_blank" href="https://baike.baidu.com/item/C/7252092" style="color: rgb(19, 110, 194); text-decoration-line: none;">C</a>语言编程，以及单片机控制系统的硬件设计、软件调试等。由于本课程是实践性较强的课程，所以在内容上既注意讲述有关单片机的基础理论，也注意介绍在开发应用中会遇到的实际问题。 为适应近年来单片机技术的发展，本书强调功能器件的原理与应用、存储器与接口的串行扩展技术、对PC的串行通信、KEIL C51软件的使用以及有关操作调试方面的内容，同时有小少应用实例，以提高学生开发单片机应用系统的能力。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本书可作为普通高等院校本科机电类专业有关“单片机原理及应用”、“单片机控制系统”、“单片机接口”之类课程的教材，也可以供高职、高专、电大作为教学参考书或教材使用。此外，也可供从事单片机控制系统开发工作的工程技术人员学习参考。</p><p><br/></p>',
            chapter1: '<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 24px;">1 单片机的基础知识</span></p>',
            chapter2: '<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 24px;">2 MCS. 51指令系统</span></p>',
            chapter3: '<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 24px;">3 汇编语言程序设计</span></p>',
            rule1_1: '<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 20px;">1.1 不同进位计数制及其互换</span></p><p></p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在学习51之前，最先接接触到的是Arduino，这个东西上手确实十分的简单，可以做出来一些小玩意，但是它的性能终究是不够强大，对于一些比较厉害的作品，用Arduino就显得心有余而力不足了，所以现在开始学习51和stm32。51的学习在大学本科阶段，在学校课堂上学到的基本上是一些理论知识，这些东西也确实有一定的必要，毕竟掌握了都是自己的。所以说我准备对这些理论的知识进行一个整理。好，废话不多说，现在切入正题。</p><p>&nbsp; &nbsp; &nbsp; 对于一般的大学教材，前面两章基本上都是对单片机的一些基本的介绍，主要就是一些对单片机硬件结构认识过程，这个主要是让我们有个总体的认识，开始适应单片机的学习。这些东西就忽略了吧。就从51系列单片机的指令系统开始吧。这里使用汇编语言编写程序的。（以上都是废话，自动忽略）</p><p><br/></p>',
            rule1_2: '<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 20px;">1.2 带符号的二进制</span></p><p></p><p>&nbsp; （1）总共111条指令</p><p>（单字节指令49条，双字节指令45条，三字节指令17条）</p><p>（一个机器周期、12个时钟震荡周期指令64条，两个机器周期、24个时钟震荡周期指令45条、乘除两条指令位4个机器周期）</p><p>（12MHZ晶振：机器周期位1us）</p><p>（2）51指令不区分大小写</p><p>（3）指令格式：操作码+操作数</p>',
            rule1_3: '<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 20px;">1.3 BCD码及文字符号代码</span></p><p></p><p>（1）寄存器寻址方式：MOV A,Rn<br/></p><p>（2）直接寻址方式：MOV A,40H</p><p>（寻址范围：第一：内部RAM的128个单元、第二：特殊功能寄存器SFR，除了以单元形式外还能用寄存器符号形式：即MOV A,80H==MOV A,P0）</p><p>（3）寄存器间接寻址：（寄存器中放的是操作数地址、寄存器前面加标志符@）例如：MOV R1,#40H MOV A ,@R1</p><p>（寻址范围：第一：访问内部RAM、第二：片外数据存储器的64k字节的间接寻址、第三：片外的数据存储器的低256字节、第四：堆栈区）</p><p>（4）立即寻址方式：（操作数在指令中直接给出，需在操作数前面加上#，如果首位是A-F，前面还加0）例如：MOV A,#40H MOV A,#0FFH</p><p>（5）基址寄存器加变址寄存器间址寻址方式：（以DPTR\PC作为基址寄存器，以累加器A作为变址寄存器）</p><p>（6）位寻址方式：例如：MOV A,40H 把40H的值送到进位位C</p><p>（寻址范围：第一：内部RAM位寻址区、第二：特殊功能寄存器中的可寻址位）</p><p>（7）相对寻址方式：（目的地址=转移指令所在地址+转移指令字节数+rel（带符号的8位二进制数的补码数））</p><p>（1）总共111条指令<br/></p><p>（单字节指令49条，双字节指令45条，三字节指令17条）</p><p>（一个机器周期、12个时钟震荡周期指令64条，两个机器周期、24个时钟震荡周期指令45条、乘除两条指令位4个机器周期）</p><p>（12MHZ晶振：机器周期位1us）</p><p>（2）51指令不区分大小写</p><p>（3）指令格式：操作码+操作数</p>',
            rule1_4: '<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 20px;">1.4 单片机系统的组成</span></p><p></p><p>（1）分类介绍：</p><p>数据传送类（28条）</p><p>算数操作类（24条）</p><p>逻辑运算类（25条）</p><p>控制转移类（17条）</p><p>位操作类 （17条）</p><p>（2）指令中符号的意义：</p><p>Rn当前寄存器区8个工作寄存器</p><p>Ri当前选中的寄存器区中可做间接寻址寄存器的2个寄存器</p><p>Direct 直接地址，即8位内部数据存储单元或者特殊功能寄存器地址</p><p>#data包含指令中的8位立即数</p><p>#data包含指令中的16位立即数</p><p>rel相对转移指令中的偏移量，8位带符号的补码数</p><p>DPTR数据指针，可用作16位的数据地址寄存器</p><p>bit内部RAM或者SFR中直接寻址位</p><p>C（Cy）进位标志位或者位处理机制中的累加器</p><p>addr11 11位目的地址</p><p>addr16 16位目的地址</p><p>@间接寻址寄存器</p><p>（x）x中的内容</p><p>（（X））由X寻址的单元中的内容</p><p>----&gt;箭头右边内容被箭头左边所替代</p><p>（1）寄存器寻址方式：MOV A,Rn<br/></p><p>（2）直接寻址方式：MOV A,40H</p><p>（寻址范围：第一：内部RAM的128个单元、第二：特殊功能寄存器SFR，除了以单元形式外还能用寄存器符号形式：即MOV A,80H==MOV A,P0）</p><p>（3）寄存器间接寻址：（寄存器中放的是操作数地址、寄存器前面加标志符@）例如：MOV R1,#40H MOV A ,@R1</p><p>（寻址范围：第一：访问内部RAM、第二：片外数据存储器的64k字节的间接寻址、第三：片外的数据存储器的低256字节、第四：堆栈区）</p><p>（4）立即寻址方式：（操作数在指令中直接给出，需在操作数前面加上#，如果首位是A-F，前面还加0）例如：MOV A,#40H MOV A,#0FFH</p><p>（5）基址寄存器加变址寄存器间址寻址方式：（以DPTR\PC作为基址寄存器，以累加器A作为变址寄存器）</p><p>（6）位寻址方式：例如：MOV A,40H 把40H的值送到进位位C</p><p>（寻址范围：第一：内部RAM位寻址区、第二：特殊功能寄存器中的可寻址位）</p><p>（7）相对寻址方式：（目的地址=转移指令所在地址+转移指令字节数+rel（带符号的8位二进制数的补码数））</p><p>（1）总共111条指令<br/></p><p>（单字节指令49条，双字节指令45条，三字节指令17条）</p><p>（一个机器周期、12个时钟震荡周期指令64条，两个机器周期、24个时钟震荡周期指令45条、乘除两条指令位4个机器周期）</p><p>（12MHZ晶振：机器周期位1us）</p><p>（2）51指令不区分大小写</p><p>（3）指令格式：操作码+操作数</p>',
            rule1_5: '<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 20px;">1.5 8051单片机的结构</span></p><p></p><p><img src="https://img-blog.csdnimg.cn/20191127153757118.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNjkyMzE5,size_16,color_FFFFFF,t_70"/></p><p>80C51单片机的内部资源主要包括：</p><p>·1个8位中央处理器（CPU）；</p><p>·1个内震荡器和时钟电路；</p><p>·4KB片内程序存储器（ROM）；</p><p>·256字节的片内RAM；</p><p>·2个16位定时器/计时器；</p><p>·可寻址64KB外部程序存储器和64KB数据存储空间的控制电路；</p><p>·4个8位双向I/O口；</p><p>·1个全双工串行口；</p><p>·5个中断源。</p>',
            rule1_6: '<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 20px;">1.5 8051单片机的复位和低功耗工作方式</span></p><p></p><p>CPU可分为运算器和控制器两部分</p><p>2.1 控制器</p><p>（1）程序计数器PC（Program Counter）</p><p>16位的专用寄存器，其中存放着下一条要执行的指令的首地址，即PC内容决定着程序的运行轨迹。当CPU要取指令时,PC的内容就会出现在地址总线上；取出指令后，PC内容可自动加1，以保证程序顺序执行。</p><p>系统复位后，PC的内容会被自动赋为0000H，这表明复位后CPU将程序存储器的0000H地址处的指令开始运行。</p><p>（2）指令寄存器IR（Instruction Register）</p><p>一个8位寄存器，用于暂存待执行的指令，等待译码。</p><p>（3）指令译码器ID（Instruction Decoder）</p><p>（4）数据指针DPTR（Data Pointer）</p><p>DATR可以用来存放内ROM的地址，也可以用来存放片外RAM和片外ROM的地址。</p><p>2.2运算器</p><p>（1）累加器ACC（Accumulator）</p><p>（2）算术逻辑部件ALU（Arithmetic Logic Unit）</p><p>（3）程序状态字寄存器PSW（Program State Word）</p><p>MCS-51外部引脚及功能</p><p>采用HMOS制造工艺的51单片机一般采用40只引脚的双列直插封装（DIP）。</p><p>采用CHMOS制造工艺51单片机还可采用44只引脚方形封装方式。</p><p>存储器划分的方法</p><p>4.1 存储结构</p><p>普林斯顿结构：指令存储器和程序存储合并在一起。</p><p>哈佛结构：指令存储器和数据存储器分开设置。</p><p>4.2 存储空间的划分</p><p>物理地址：4个存储空间。即片内ROM,片外ROM,片内RAM，片外RAM。</p><p>逻辑地址：由于片内、片外程序存储器是统一编址的，因此逻辑上只有3个存储空间，即程序存储器，片内数据存储器，片外存数据储器。</p><p>80C51单片机的内部资源主要包括：<br/></p><p>·1个8位中央处理器（CPU）；</p><p>·1个内震荡器和时钟电路；</p><p>·4KB片内程序存储器（ROM）；</p><p>·256字节的片内RAM；</p><p>·2个16位定时器/计时器；</p><p>·可寻址64KB外部程序存储器和64KB数据存储空间的控制电路；</p><p>·4个8位双向I/O口；</p><p>·1个全双工串行口；</p><p>·5个中断源。</p>',
            rule2_1: '<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 20px;">2.1 概述</span></p><p></p><p><span style="color: rgba(0, 0, 0, 0.75); font-family: &quot;Microsoft YaHei&quot;, &quot;SF Pro Display&quot;, Roboto, Noto, Arial, &quot;PingFang SC&quot;, sans-serif; font-variant-ligatures: common-ligatures; background-color: rgb(255, 255, 255);">&nbsp;&nbsp;&nbsp;&nbsp;P0~P3口都可作为准双向通用I/O口提供给用户，其中只有P0需要外接上拉电阻；在需要扩展片外存储器时，P2口作为其他地址先接口，P0口作为其他地址线/数据线复用接口，此时它是真正的双向口。P3口用第二输出功能。</span></p>',
            rule2_2: '<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 20px;">2.2 数据传送指令</span></p><p></p><p>第一节介绍了一些预备知识，如下：<br/></p><p>各种名词定义</p><p>各进制转化及与或非运算关系</p><p>介绍了8051的内部结构及引脚定义</p><p>C语言语法知识</p><p>其中各名词定义如下：</p><p>单片机：集成CPU、存储器芯片、I/O接口芯片的微处理器。</p><p>CPU：由运算和控制逻辑组成，同时还包括中断系统和部分外部特殊功能寄存器；</p><p>RAM：用以存放可以读写的数据，如运算的中间结果、最终结果以及欲显示的数据；</p><p>ROM：用以存放程序、一些原始数据和表格；</p><p>I/O口：四个8位并行I/O口，既可用作输入，也可用作输出；</p><p>T/C：两个定时/记数器，既可以工作在定时模式，也可以工作在记数模式；</p><p>各进制转换已有知识储备不再做介绍，其中与或非关系有简便表示方法</p><table><tbody><tr class="firstRow"><td width="567" valign="middle" style="word-break: break-all; background-color: rgb(237, 245, 250); border-width: 1px; border-style: solid;" align="center">运算关系</td><td width="567" valign="middle" style="word-break: break-all; background-color: rgb(237, 245, 250); border-width: 1px; border-style: solid;" align="center">数学表示</td></tr><tr><td width="567" valign="middle" style="word-break: break-all; background-color: rgb(237, 245, 250); border-width: 1px; border-style: solid;" align="center">与</td><td width="567" valign="middle" style="word-break: break-all; background-color: rgb(237, 245, 250); border-width: 1px; border-style: solid;" align="center">*</td></tr><tr><td width="567" valign="middle" style="word-break: break-all; background-color: rgb(237, 245, 250); border-width: 1px; border-style: solid;" align="center">或</td><td width="567" valign="middle" style="word-break: break-all; background-color: rgb(237, 245, 250); border-width: 1px; border-style: solid;" align="center">+</td></tr><tr><td width="567" valign="middle" style="word-break: break-all; background-color: rgb(237, 245, 250); border-width: 1px; border-style: solid;" align="center">非</td><td width="567" valign="middle" style="word-break: break-all; background-color: rgb(237, 245, 250); border-width: 1px; border-style: solid;" align="center">反</td></tr><tr><td width="567" valign="middle" style="word-break: break-all; background-color: rgb(237, 245, 250); border-width: 1px; border-style: solid;" align="center">异或</td><td width="567" valign="middle" style="word-break: break-all; background-color: rgb(237, 245, 250); border-width: 1px; border-style: solid;" align="center">-</td></tr></tbody></table><p>引脚定义视不同单片机而定</p><p>C语言语法知识已储备不再做笔记</p>',
            rule2_3: '<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 20px;">2.3 算术与逻辑运算指令</span></p><p></p><p>单片机主要掌握以下几点</p><p><br/></p><p>最小系统能够运行起来的必要条件。</p><p>1.电源 2.晶振3.复位电路</p><p>对单片机任意IO口的随意操作</p><p>1.输出控制电平高低2.输出检测电平高低。</p><p>定时器：重点掌握最常用的方式</p><p>中断：外部中断、定时器中断、串口中断</p><p>串口通信：单片机之间、单片机与计算机间</p><p>单片机工作的基本时序</p><p><br/></p><p>机器周期和指令周期</p><p>（1） 振荡周期: 也称时钟周期, 是指为单片机提供时钟脉冲信号的振荡源的周期，TX实验板上为11.0592MHZ。</p><p>（2） 状态周期: 每个状态周期为时钟周期的 2 倍, 是振荡周期经二分频后得到的。</p><p>（3） 机器周期: 一个机器周期包含 6 个状态周期S1~S6, 也就是 12 个时钟周期。 在一个机器周期内, CPU可以完成一个独立的操作。</p><p>（4） 指令周期: 它是指CPU完成一条操作所需的全部时间。 每条指令执行时间都是有一个或几个机器周期组成。MCS - 51 系统中, 有单周期指令、双周期指令和四周期指令。</p>',
            rule2_4: '<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 20px;">2.4 控制转移指令</span></p><p></p><p><span style="color: rgb(85, 86, 102); font-family: &quot;Microsoft YaHei&quot;, &quot;SF Pro Display&quot;, Roboto, Noto, Arial, &quot;PingFang SC&quot;, sans-serif; font-size: 14px; white-space: pre-wrap; background-color: rgb(255, 255, 255);"></span></p><p>Led的工作原理:</p><p>二极管通常的正向导通电压是1.8V到2.2V之间，工作电流一般在1mA～20mA之间。其中，当电流在1mA～5mA之间变化时，随着通过发光二极管(LED)的电流越来越大，我们的肉眼会感觉到这个小灯越来越亮，当电流从5mA～20mA之间变化时，我们看到的发光二极管的亮度基本上没有什么太大变化了。当电流超过20mA时，LED就会有烧坏的危险了，电流越大，烧坏的也就越快。所以我们在使用过程中应该特别注意他在电流参数上的设计要求。</p><p><br/></p><p>四、特殊功能寄存器声明</p><p><br/></p><p>第一条语句是： sfr P0 = 0x80；</p><p>SFR这个关键字，是51单片机特有的，他的作用是定义一个单片机特殊功能寄存器(special function register)。51单片机内部有很多个小模块，每个模块有8个开关。每个模块呢，都有一个房间和唯一的房间号。那么P0就是一个功能模块，就住在了0x80这个房间里，我们就是通过设置P0的内部这个模块的8个开关，来让单片机的P0这8个IO口输出高电平或者低电平的。</p><p>第二条语句是： sbit LED = P0^0;</p><p>这个sbit，就是对刚才所说的SFR里边的8个开关其中的一个进行定义。经过上边第二条语句后，以后只要在程序里写LED，就代表了P0.0口(“^”这个符号在数字键6上边)，注意这个P必须大写，也就是说我们给P0.0又取了一个更形象的名字叫做LED。</p><p><br/></p><p>五、keil软件的使用及模板搭建</p><p>建立如图所示的工程文件：</p>',
            rule2_5: '<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 20px;">2.5 位操作指令</span></p><p></p><p><span style="color: rgb(85, 86, 102); font-family: &quot;Microsoft YaHei&quot;, &quot;SF Pro Display&quot;, Roboto, Noto, Arial, &quot;PingFang SC&quot;, sans-serif; font-size: 14px; white-space: pre-wrap; background-color: rgb(255, 255, 255);"></span></p><p>51单片机的特点</p><p><br/></p><p>集成度高，抗干扰能力强，可靠性高。</p><p>开发性能好，开发周期短，控制能力强。</p><p>低功耗，低电压，具有掉电保护功能，广泛用于智能仪器仪表中。</p><p>通用性和灵活性好。</p><p>电平特性</p><p><br/></p><p>TTL电平 ：+5V（1） 0V（0）。’</p><p>RS-232C对电器特性、逻辑电平和各种信号线功能都作了规定。</p><p>在TxD和RxD上：逻辑1(MARK)=-3V～-15V</p><p>逻辑0(SPACE)=+3～+15V</p><p>51单片机的数制：二进制</p><p>51单片机的数据类型：</p><p><br/></p><p>unsigned int，int</p><p>unsigned short ，short</p><p>unsigned long， long</p><p>unsigned char ， char</p><p>unsigned float ，float</p><p>unsigned double，double</p><p>51单片机是定点芯片，所以计算浮点数据是比较慢的，51主要用于控制</p><p>51单片机的结构（哈弗结构）</p><p><br/></p><p>内部资源</p><p><br/></p><p>8位的CPU</p><p>片内振荡器和时钟电路</p><p>4KB片内程序存储器（ROM）</p><p>256字节的片内RAM</p><p>2个16位定时器/计数器（52有3个定时器）</p><p>可寻址64KB外部程序存储器和64KB数据存储空间的控制电路</p><p>4个8位双向I/O口</p><p>1个USART</p><p>5个中断源</p><p>特殊寄存器</p><p><br/></p><p>程序计数器PC：存放下一条要执行指令的地址。</p><p><br/></p><p>指令寄存器IR：8位，用于暂存待执行的指令，等待译码</p><p>指令译码器：对指令寄存器中的指令进行译码，降指令转变成执行该指令所需的电信号</p><p>数据指针DPTR：16位专用地址指针寄存器，由2个8位DPH和DPL拼装而成，可分开使用。DPTR可以用来存放片内ROM地址，也可以存放片外的RAM，ROM地址。</p><p>累加器ACC：8位，通过暂存器与ALU相连。是CPU工作中使用最频繁的寄存器，用来存放一个操作数或中间结果。</p><p>算数逻辑部件ALU：由加法器和其他部件组成，用于四则运算和逻辑运算等功能，两个操作数一个由A通过暂存器2输入，另一个有暂存器1输入，运算结果的状态传给PSW</p><p>程序状态字寄存器PSW：8位，用于存放共享在运行时的各种状态信息。</p><p>CY（7th）：进位标志位，操作结果有进位或借位时CY置1，否则清0</p><p>AC（6th）：辅助进位，低4位产生进位是置1</p><p>RS1，RS0（4th，3rd）:工作寄存器组指针，用于选择CPU当前工作的寄存器组（R0~R7）</p><p>OV（2nd）：溢出标志，指示运算时是否发生溢出，OV = 第七位和第六位的异或</p><p>P（0ro）：奇偶校验位</p><p>储存器结构：哈弗结构</p><p><br/></p><ul class=" list-paddingleft-2" style="list-style-type: disc;"><li><p>片内数据存储器：00H~ FFH -&gt;片内RAM256B</p></li><li><p>片外数据存储器：0000H~FFFFH -&gt;片外RAM64KB</p></li><li><p>片内程序存储器 ：0000H~0FFFH（EA = 1）-&gt;片内ROM4KB</p></li><li><p>片外程序存储器：0000H~0FFFH（EA= 0） 1000H~FFFFH -&gt;片外ROM64KB</p></li></ul><p><br/></p>',
            rule3_1: '<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 20px;">3.1 汇编语言程序的格式</span></p><p></p><p><span style="color: rgb(85, 86, 102); font-family: &quot;Microsoft YaHei&quot;, &quot;SF Pro Display&quot;, Roboto, Noto, Arial, &quot;PingFang SC&quot;, sans-serif; font-size: 14px; white-space: pre-wrap; background-color: rgb(255, 255, 255);"></span></p><ol class="custom_num list-paddingleft-1"><li class="list-num-1-1 list-num-paddingleft-1"><p><span style="font-size: 14px;">1 单片机与其他常见微机（如ＰＣ机）有什么不同？它是什么独特优点？80C51系列单片机在片内集成了哪些主要逻辑功能部件？各个逻辑部件的主要功能是什么？</span></p></li><li class="list-num-1-2 list-num-paddingleft-1"><p><span style="font-size: 14px;">2 80C51系列单片机有哪些信号需要芯片引脚以第二功能的方式提供？</span></p></li><li class="list-num-1-3 list-num-paddingleft-1"><p><span style="font-size: 14px;">3 80C51单片机的“ALE”信号、“/EA”信号有何功能？在使用80C31时，它们的信号引脚应如何处理？</span></p></li><li class="list-num-1-4 list-num-paddingleft-1"><p><span style="font-size: 14px;">4 80C51存储器在结构上有何特点？在物理上和逻辑上各有哪几种地址空间？访问片内RAM和片外RAM的指令格式有何区别？</span></p></li><li class="list-num-1-5 list-num-paddingleft-1"><p><span style="font-size: 14px;">5 片内RAM低128单元划分为哪三个主要部分？各部分主要功能是什么？</span></p></li><li class="list-num-1-6 list-num-paddingleft-1"><p><span style="font-size: 14px;">6 80C51设有4个通用工作寄存器组，有什么特点？如何选用？如何实现工作寄存器现场保护？</span></p></li><li class="list-num-1-7 list-num-paddingleft-1"><p><span style="font-size: 14px;">7 特殊功能寄存器的地址范围是多少？哪些特殊功能寄存器可以位操作？</span></p></li><li class="list-num-1-8 list-num-paddingleft-1"><p><span style="font-size: 14px;">8 堆栈有哪些功能？堆栈指示器（SP）的作用是什么？在程序设计时，为什么还要对SP重新赋值？</span></p></li><li class="list-num-1-9 list-num-paddingleft-1"><p><span style="font-size: 14px;">9 为什么说80C51具有很强的布尔（位）处理功能？共有多少单元可以位寻址？采用布尔处理有哪些优点？</span></p></li><li class="list-num-1-10 list-num-paddingleft-1"><p><span style="font-size: 14px;">10 80C51单片机的时钟周期、机器周期、指令周期有何区别？它们之间有何关系？单片机晶振频率与哪些工作参数有关？</span></p></li><li class="list-num-1-11 list-num-paddingleft-1"><p><span style="font-size: 14px;">11 单片机有几种复位方法？对复位信号有何要求？复位后机器的初始状态如何，即各寄存器的状态如何？</span></p></li><li class="list-num-1-12 list-num-paddingleft-1"><p><span style="font-size: 14px;">12 80C51的4个I/O口P0~P3在使用上有哪些分工和特点？试比较各口的特点？何谓分时复用总线？P3口的第二变异功能有哪些？</span></p></li><li class="list-num-1-13 list-num-paddingleft-1"><p><span style="font-size: 14px;">13 80C51端口P0~P3作通用I/O口时，在输入引脚数据时，应注意什么？</span></p></li><li class="list-num-1-14 list-num-paddingleft-1"><p><span style="font-size: 14px;">14 “读—改—写”指令有何优点？请至少列出五条不同操作的“读—改—写”指令。</span></p></li><li class="list-num-1-15 list-num-paddingleft-1"><p><span style="font-size: 14px;">15 为什么当P2作为扩展程序存储器的高8位地址后，就不再适宜作通用I/O了？</span></p></li><li class="list-num-1-16 list-num-paddingleft-1"><p><span style="font-size: 14px;">16 程序计数器PC作为不可寻址寄存器，它有哪些特点？地址指针DPTR有哪些特点？与程序计数器PC有何异同？</span></p></li><li class="list-num-1-17 list-num-paddingleft-1"><p><span style="font-size: 14px;">17 程序状态字PSW的含义是什么？如何利用它们？</span></p></li><li class="list-num-1-18 list-num-paddingleft-1"><p><span style="font-size: 14px;">18 80C51单片机运行出错或程序进入死循环，如何摆脱困境？</span></p></li><li class="list-num-1-19 list-num-paddingleft-1"><p><span style="font-size: 14px;">19 单片机在工业控制系统中有哪些掉电保护措施？</span></p></li><li class="list-num-1-20 list-num-paddingleft-1"><p><span style="font-size: 14px;">20 举例说明单片机在工业控制系统中低功耗工作方式的意义及方法。</span></p></li><li class="list-num-1-21 list-num-paddingleft-1"><p><span style="font-size: 14px;">21 单片机“面向控制”应用的特点，在硬件结构方面有哪些体现？</span></p></li><li class="list-num-1-22 list-num-paddingleft-1"><p><span style="font-size: 14px;">22 如何判断单片机是否处在运行工作状态？</span></p></li></ol>',
            rule3_2: '<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 20px;">3.2 伪指令</span></p><p><span style="color: rgb(85, 86, 102); font-family: &quot;Microsoft YaHei&quot;, &quot;SF Pro Display&quot;, Roboto, Noto, Arial, &quot;PingFang SC&quot;, sans-serif; font-size: 14px; white-space: pre-wrap; background-color: rgb(255, 255, 255);"></span></p><ol class="custom_num1 list-paddingleft-1"><li class="list-num-2-1 list-num1-paddingleft-1"><p>1. 80C51有几个中断源，各中断标志是如何产生的，又如何清除的？CPU响应中断时，其中断入口地址各是多少？</p></li><li class="list-num-2-2 list-num1-paddingleft-1"><p>2. 哪些特殊功能寄存器对单片机的中断有影响？如何设置它们？</p></li><li class="list-num-2-3 list-num1-paddingleft-1"><p>3. CPU如何响应中断？对软件编程有河要求？哪些情况会影响中断的响应？如何估算最快的中断响应时间？</p></li><li class="list-num-2-4 list-num1-paddingleft-1"><p>4. 51系列单片机对中断信号有何要求？外部中断请求有哪两种触发方式？对跳变触发和电平触发信号有什么要求？如何选择和设置？</p></li><li class="list-num-2-5 list-num1-paddingleft-1"><p>5. 80C51提供哪几种中断？在中断管理上有何特点？什么是同级内的优先权管理？中断请求被封存的条件有哪些？</p></li><li class="list-num-2-6 list-num1-paddingleft-1"><p>6. 程序查询方式与程序中断方式有何异同之处？在程序中应该如何编写中断程序？</p></li><li class="list-num-2-7 list-num1-paddingleft-1"><p>7. 80C51单片机内部设有几个定时器/计数器？它们各由哪些特殊功能寄存器所组成？有哪几种工作方式？简述各种工作方式的功能特点。如何选择？</p></li><li class="list-num-2-8 list-num1-paddingleft-1"><p>8. 定时器/计数器作定时使用时，定时时间与哪些因素有关？作计数用时，对外界计数频率有何限制？如何启动它们？</p></li><li class="list-num-2-9 list-num1-paddingleft-1"><p>9. 定时器T0为方式3时，由于TH1位已被T0占用，如何控制定时器T1的开启和关闭？</p></li><li class="list-num-2-10 list-num1-paddingleft-1"><p>10. 在80C51单片机系统中，已知时钟频率为6MHz；选用定时器T0设置方式3，请编程P1.1口分别输出周期为1ms和400μs的方波。</p></li><li class="list-num-2-11 list-num1-paddingleft-1"><p>11. 用80C51的定时器测量某正单脉冲的宽度，采用何种方式可得最大量程？若时钟频率为6MHz，求允许测量的最大脉冲宽度是多少？</p></li></ol>',
            rule3_3: '<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 20px;">3.3 汇编语言程序的编写步骤及基础结构</span></p><p><span style="color: rgb(85, 86, 102); font-family: &quot;Microsoft YaHei&quot;, &quot;SF Pro Display&quot;, Roboto, Noto, Arial, &quot;PingFang SC&quot;, sans-serif; font-size: 14px; white-space: pre-wrap; background-color: rgb(255, 255, 255);"></span></p><p><span style="font-size: 12px;">1. 在80C51扩展系统中，片外程序存储器和片外数据存储器用相同的编制方法，是否会在数据总线上出现总线竞争现象？为什么？</span></p><p><span style="font-size: 12px;">2. 试绘出以并行方式对80C31单片机系统扩展8KB的片外数据存储器的电路原理图。</span></p><p><span style="font-size: 12px;">3. 你能以串行方式对80C31单片机系统扩展8KB的片外数据存储器吗？试绘出电路原理图。</span></p><p><span style="font-size: 12px;">4. 如何设计扩展两片以上片外数据存储器的电路？试绘出电路原理图。</span></p><p><span style="font-size: 12px;">5. 请用80C51的P1口设计一个16个键的键盘电路，并编写出相应的键盘程序。</span></p><p><span style="font-size: 12px;">6. LED显示器结构有何特点？如何设计才能正确工作？</span></p><p><span style="font-size: 12px;">7. 现有一静态显示接口电路，以74HC273为输出芯片。试问它应如何与LED管连接,为什么？试画出以80C51为控制器的完整电路。</span></p><p><span style="font-size: 12px;">8. 单片机用于外界过程控制中，为何要进行A/D、D/A转换？</span></p><p><span style="font-size: 12px;">9. A/D转换器有哪几个重要指标？</span></p><p><span style="font-size: 12px;">10. A/D转换接口中采样保持电路的作用是什么？</span></p><p><span style="font-size: 12px;">11. 试分析A/D转换器产生量化误差的原因和误差的大小。</span></p><p><span style="font-size: 12px;">12. 试分别画出利用ADC0801和ADC0809芯片与80C51组成的A/D转换电路。</span></p><p><span style="font-size: 12px;">13. D/A转换器为什么必须有锁存器？有锁存器和无锁存器的D/A转换器与80C51接口的电路有什么不同？</span></p><p><span style="font-size: 12px;">14. 在什么情况下要使用D/A转换器的双缓冲方式？试以DAC0832为例绘出双缓冲方式的接口电路。</span></p><p><span style="font-size: 12px;">15. 若某8位D/A转换器的输出满刻度电压为+5V，则该D/A转换器的分辩率是多少伏？如果用12位D/A转换器其分辩率又是多少伏？</span></p><p><span style="font-size: 12px;">16. 10位的D/A芯片如何与8位数据总线相连？请说明设计要点。</span></p><p><span style="font-size: 12px;">17. 试分别编写出使DAC0832输出锯齿波、三角波和阶梯波的程序。</span></p><p><span style="font-size: 12px;">18. 拟将A/D和D/A转换器用于数字音频技术。例如先把人的声音写入EPROM芯片，然后在需要时送到喇叭上播放。试分析实现该功能的设计思路（画出方框图）和技术要点。</span></p><p><span style="font-size: 12px;">19. 串行数据传送的主要优点和用途是什么？它们分别适用于什么场合？如何实现？</span></p><p><span style="font-size: 12px;">20. 什么是串行数据通讯的波特率？如何设置？</span></p><p><span style="font-size: 12px;">12. 何谓波特率、溢出率？如何计算和设置80C51串行通信的波特率？</span></p><p><span style="font-size: 12px;">21. 串行数据传送有哪几种工作方式?各有什么特点？如何应用？</span></p><p><span style="font-size: 12px;">22. 哪些特殊功能寄存器对单片机的串行数据传送有影响？编程时必须考虑哪些参数？</span></p><p><span style="font-size: 12px;">13. 为什么定时器T1用做串行口波特率发生器时，常采用方式2？若已知系统时钟频率和通信波特率，如何计算其初始值？</span></p><p><span style="font-size: 12px;">14. 某异步通信接口，其帧格式由一个起始位0、七个数据位、一个奇偶校验位和一位停止位1所组成，当该口每分钟传送1800个字符时，计算其传送波特率。</span></p><p><span style="font-size: 12px;">15. 在80C51的应用系统中时钟频率为6MHz，现需利用定时器T1产生波特率为1200波特。请计算初值，实际得到的波特率误差是多少？</span></p><p><span style="font-size: 12px;">23. 试分别编写出8031单片机发送和接收数据的子程序。</span></p>',
            rule3_4: '<p><span style="color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 34px; background-color: rgb(255, 255, 255);"></span></p><p><span style="background-color: rgb(255, 255, 255); color: rgb(51, 51, 51); font-family: arial, tahoma, &quot;Microsoft Yahei&quot;, 宋体, sans-serif; font-size: 20px;">3.4 程序设计举例</span></p><p><span style="color: rgb(85, 86, 102); font-family: &quot;Microsoft YaHei&quot;, &quot;SF Pro Display&quot;, Roboto, Noto, Arial, &quot;PingFang SC&quot;, sans-serif; font-size: 14px; white-space: pre-wrap; background-color: rgb(255, 255, 255);"></span></p><p><span style="font-size: 12px;"></span></p><p><span style="font-size: 12px;">1. 80C51的指令系统有哪几种类型的指令？写出其汇编指令格式。</span></p><p><br/></p><p><span style="font-size: 12px;">2. 简述80C51的寻址方式和所涉及的寻址空间。</span></p><p><br/></p><p><span style="font-size: 12px;">3. 什么是变址寻址？举例说明变址寻址方式的应用。</span></p><p><br/></p><p><span style="font-size: 12px;">4. 简述 MOV、MOVC和MOVX指令的异同之处。</span></p><p><br/></p><p><span style="font-size: 12px;">5. 访问特殊功能寄存器和外部数据存储器，应采用哪种寻址方式？</span></p><p><br/></p><p><span style="font-size: 12px;">6. 对80C51片内RAM的128～255字节区的地址空间寻址时应注意些什么？对特殊功能寄存器应采用何种寻址方式进行访问？</span></p><p><br/></p><p><span style="font-size: 12px;">7. 在80C51的片内RAM中，已知（30H）=38H, （38H）=40H, （40H）=48H, （40H）=90H。分析下面各条指令，说明源操作数的寻址方式，按顺序执行各条指令后的结果。</span></p><p><br/></p><p><span style="font-size: 12px;">8. 设计一段程序，其功能是：将寄存器R7的内容移到R6中。</span></p><p><br/></p><p><span style="font-size: 12px;">9. 现需将外部数据存储器200DH单元中的内容传送到280DH单元中，请设计程序。</span></p><p><br/></p><p><span style="font-size: 12px;">10. 已知当前PC（程序计数器）值1010H，请用两种方法将程序存储器10FFH中的常数送入累加器A.</span></p><p><br/></p><p><span style="font-size: 12px;">11. 已知累加器A中存放两位BCD码数，请编写程序实现十进制数减1。</span></p><p><br/></p><p><span style="font-size: 12px;">12. 请编写程序，将片外数据存储器中20H单元中的内容和21H单元的内容相乘，并将结果存放再22H和23H单元中，高位存放在高地址中。</span></p><p><br/></p><p><span style="font-size: 12px;">13. 已知延时程序为：</span></p>',
            docContent: '',
            docContentArr: []
        };
    },
    beforeCreate: function beforeCreate() {// 生命周期函数，表示实例完全被创建出来之前，会执行它
        // 注意： 在 beforeCreate 生命周期函数执行的时候，data 和 methods 中的 数据都还没有没初始化
    },
    created: function created() {//生命周期函数
        //  在 created 中，data 和 methods 都已经被初始化好了！
        // 如果要调用 methods 中的方法，或者操作 data 中的数据，最早，只能在 created 中操作
    },
    beforeMount: function beforeMount() {// 生命周期函数，表示 模板已经在内存中编辑完成了，但是尚未把 模板渲染到 页面中
        // 在 beforeMount 执行的时候，页面中的元素，还没有被真正替换过来，只是之前写的一些模板字符串
    },
    mounted: function mounted() {
        // 生命周期函数，表示，内存中的模板，已经真实的挂载到了页面中，用户已经可以看到渲染好的页面了
        // 注意： mounted 是 实例创建期间的最后一个生命周期函数，当执行完 mounted 就表示，实例已经被完全创建好了，此时，如果没有其它操作的话，这个实例，就静静的 躺在我们的内存中，一动不动
        this.getDoc();
    },

    // 接下来的是运行中的两个事件
    beforeUpdate: function beforeUpdate() {// 这时候，表示 我们的界面还没有被更新【数据被更新了吗？  数据肯定被更新了】
        // 得出结论： 当执行 beforeUpdate 的时候，页面中的显示的数据，还是旧的，此时 data 数据是最新的，页面尚未和 最新的数据保持同步
    },
    updated: function updated() {
        // updated 事件执行的时候，页面和 data 数据已经保持同步了，都是最新的
    },

    methods: {
        getDoc: function getDoc() {
            var self = this;

            self.docContentArr = [{
                id: 100000,
                content: self.docName,
                children: [{
                    id: 110000,
                    content: self.chapter1,
                    children: [{
                        id: 110001,
                        content: self.rule1_1
                    }, {
                        id: 110002,
                        content: self.rule1_2
                    }, {
                        id: 110003,
                        content: self.rule1_3
                    }, {
                        id: 110004,
                        content: self.rule1_4
                    }, {
                        id: 110005,
                        content: self.rule1_5
                    }, {
                        id: 110006,
                        content: self.rule1_6
                    }]
                }, {
                    id: 120000,
                    content: self.chapter2,
                    children: [{
                        id: 120001,
                        content: self.rule2_1
                    }, {
                        id: 120002,
                        content: self.rule2_2
                    }, {
                        id: 120003,
                        content: self.rule2_3
                    }, {
                        id: 120004,
                        content: self.rule2_4
                    }, {
                        id: 120005,
                        content: self.rule2_5
                    }]
                }, {
                    id: 130000,
                    content: self.chapter3,
                    children: [{
                        id: 130001,
                        content: self.rule3_1
                    }, {
                        id: 130002,
                        content: self.rule3_2
                    }, {
                        id: 130003,
                        content: self.rule3_3
                    }, {
                        id: 130004,
                        content: self.rule3_4
                    }]
                }]
            }];
            self.docContent = '';
            self.dealData(self.docContentArr);
        },
        dealData: function dealData(data) {
            var self = this;
            if (!data || !data.length) return false;
            data.forEach(function (item) {
                self.docContent += '<div id="nav_' + item.id + '">' + item.content + '</div>';
                if (item.children && item.children.length) {
                    self.dealData(item.children);
                }
            });
        }
    }
});

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    components: {},
    data: function data() {
        return {
            mymsg: '这是第二个页面哦~'
        };
    },

    methods: {
        getMessage: function getMessage(val) {
            alert(val);
        }
    }
});

/***/ }),
/* 206 */
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import leftNav from './leftNav.vue';
// import centerTab from './centerTab.vue';
// import right from './right.vue';
/* harmony default export */ __webpack_exports__["a"] = ({
    // components: {leftNav, centerTab, right},
    data: function data() {
        return {
            mymsg: '这是第二个页面哦~',
            data: []
        };
    },
    created: function created() {
        this.initData();
    },
    mounted: function mounted() {},

    methods: {
        // 初始化数据
        initData: function initData() {
            var self = this;
            self.data = [{
                id: 1, name: '1、方法精讲', isLink: false,
                children: [{
                    id: 11, name: '1、方法精讲-言语-郭熙', isLink: false, children: [{ id: 111, name: '公务员考试·笔试系统讲义（2021国考）-言语讲义', isLink: true, pdfId: 'yanyu' }, { id: 112, name: '2020.03.09 方法精讲-言语1 郭熙 （全部讲义+本节课笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1' }, { id: 113, name: '2020.03.10 方法精讲-言语2 郭熙 （笔记）（2021国考笔试大班-1期)', isLink: true, pdfId: '1' }, { id: 114, name: '2020.03.11 方法精讲-言语3 郭熙 （笔记）（2021国考笔试大班-1期) ', isLink: true, pdfId: '1' }, { id: 115, name: '2020.03.12 方法精讲-言语4 郭熙 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1' }, { id: 116, name: '2020.03.13 方法精讲-言语5 郭熙 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1' }, { id: 117, name: '2020.03.14 方法精讲-言语6 郭熙 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1' }]
                }, {
                    id: 12, name: '2、方法精讲-判断-宋文涛、徐来', isLink: false, children: [{ id: 121, name: '公务员考试·笔试系统讲义（2021国考）-判断讲义', isLink: true, pdfId: 'panduan' }, { id: 122, name: '2020.03.16 方法精讲-判断1 宋文涛 （全部讲义+本节课笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1' }, { id: 123, name: '2020.03.17 方法精讲-判断2 宋文涛 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1' }, { id: 124, name: '2020.03.18 方法精讲-判断3 宋文涛 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1' }, { id: 125, name: '2020.03.19 方法精讲-判断4 宋文涛 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1' }, { id: 126, name: '2020.03.20 方法精讲-判断5 徐来 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1' }, { id: 127, name: '2020.03.21 方法精讲-判断6 徐来 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1' }, { id: 128, name: '2020.03.23 方法精讲-判断7 徐来 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1' }, { id: 129, name: '2020.03.24 方法精讲-判断8 徐来 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1' }]
                }, {
                    id: 13, name: '3、方法精讲-资料分析-杜岩', isLink: false, children: [{ id: 131, name: '2020.03.25 方法精讲-资料1 杜岩 （全部讲义+本节课笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: 'ziliaofenxi' }, { id: 132, name: '2020.03.26 方法精讲-资料2 杜岩（笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1' }, { id: 133, name: '2020.03.27 方法精讲-资料3 杜岩 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1' }, { id: 134, name: '2020.03.28 方法精讲-资料4 杜岩 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1' }]
                }, {
                    id: 14, name: '4、方法精讲-申论-李梦圆', isLink: false, children: [{ id: 141, name: '2020.03.30 方法精讲-申论1 李梦圆 （全部讲义+本节课笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: 'shenlun' }, { id: 142, name: '2020.03.31 方法精讲-申论2 李梦圆 （笔记）（2021国考笔试大班1期）', isLink: true, pdfId: '1' }, { id: 143, name: '2020.04.01  方法精讲-申论3 李梦圆 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1' }, { id: 144, name: '2020.04.02 方法精讲-申论4 李梦圆 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1' }, { id: 145, name: '2020.04.03 方法精讲-申论5 李梦圆 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1' }, { id: 146, name: '2020.04.04 方法精讲-申论6 李梦圆 （笔记）（2021国考笔试大班1期）', isLink: true, pdfId: '1' }, { id: 147, name: '2020.04.06 方法精讲-申论7 李梦圆 （笔记）（2021国考笔试大班1期）', isLink: true, pdfId: '1' }]
                }, {
                    id: 15, name: '5、方法精讲-数量关系-唐宋', isLink: false, children: [{ id: 151, name: '2020.04.07  方法精讲-数量1 唐宋 （全部讲义+本节课笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: 'shuliangguanxi' }, { id: 152, name: '2020.04.08 方法精讲-数量2 唐宋 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1' }, { id: 153, name: '2020.04.09 方法精讲-数量3 唐宋 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1' }, { id: 154, name: '2020.04.10 方法精讲-数量4 唐宋 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1' }]
                }]
            }, {
                id: 2, name: '2、强化练习', isLink: false,
                children: [{
                    id: 21, name: '1、言语理解-常新雨', isLink: false, children: [{ id: 211, name: '2020.04.11 强化练习-言语1 常新雨 （全部讲义+本节课笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1' }, { id: 212, name: '2020.04.13 强化练习-言语2 常新雨 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1' }, { id: 213, name: '2020.04.14  强化练习-言语3 常新雨 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1' }, { id: 214, name: '2020.04.15 强化练习-言语4 常新雨 （笔记）', isLink: true, pdfId: '1' }]
                }, {
                    id: 22, name: '2、判断推理-魏倩', isLink: false, children: [{ id: 221, name: '2020.04.16 强化练习-判断1 魏倩 （全部讲义+本节课笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1' }, { id: 222, name: '2020.04.17 强化练习-判断2 魏倩 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1' }, { id: 223, name: '2020.04.18 强化练习-判断3  魏倩 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1' }, { id: 224, name: '2020.04.20 强化练习-判断4 魏倩 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1' }]
                }, {
                    id: 23, name: '3、申论-陈苏', isLink: false, children: [{ id: 231, name: '2020.04.21 强化练习-申论1 陈苏 （全部讲义+本节课笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1' }, { id: 232, name: '2020.04.22 强化练习-申论2 陈苏 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1' }, { id: 233, name: '2020.04.23 强化练习-申论3 陈苏 （笔记）', isLink: true, pdfId: '1' }, { id: 234, name: '2020.04.24 强化练习-申论4 陈苏 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1' }]
                }, {
                    id: 24, name: '4、数资-程梓', isLink: false, children: [{ id: 241, name: '2020.04.25 强化练习-数资1 程梓 （全部讲义+本节课笔记）', isLink: true, pdfId: '1' }, { id: 242, name: '2020.04.27 强化练习-数资2 程梓 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1' }, { id: 243, name: '2020.04.28 强化练习-数资3 程梓 （笔记）', isLink: true, pdfId: '1' }, { id: 244, name: '2020.04.29 强化练习-数资4 程梓 （笔记）（2021国考笔试大班-1期）', isLink: true, pdfId: '1' }]
                }, {
                    id: 25, name: '02 强化练习题（国考版）上册', isLink: true, pdfId: '1'
                }, {
                    id: 26, name: '03 强化练习题（国考版）下册', isLink: true, pdfId: '1'
                }]
            }, {
                id: 3, name: '3、真题实践', isLink: false,
                children: [{ id: 31, name: '04行测极致真题题本（国考卷）', isLink: true, pdfId: '1' }, { id: 32, name: '05行测极致真题解析（国考卷）', isLink: true, pdfId: '1' }, { id: 33, name: '06申论极致真题题本（国考卷）', isLink: true, pdfId: '1' }, { id: 34, name: '07申论极致真题解析（国考卷）', isLink: true, pdfId: '1' }]
            }, {
                id: 4, name: '课上讲义7本（配套视频书本）', isLink: false,
                children: [{ id: 41, name: '01笔试系统讲义（2021国考版）', isLink: true, pdfId: '1' }, { id: 42, name: '02 强化练习题（国考版）上册', isLink: true, pdfId: '1' }, { id: 43, name: '03 强化练习题（国考版）下册', isLink: true, pdfId: '1' }, { id: 44, name: '04行测极致真题题本（国考卷）', isLink: true, pdfId: '1' }, { id: 45, name: '05行测极致真题解析（国考卷）', isLink: true, pdfId: '1' }, { id: 46, name: '06申论极致真题题本（国考卷）', isLink: true, pdfId: '1' }, { id: 47, name: '07申论极致真题解析（国考卷）', isLink: true, pdfId: '1' }]
            }];
        },

        // 跳转到pdf
        toPdf: function toPdf(id) {
            var self = this;
            var routeUrl = self.$router.resolve({
                name: 'pdf',
                query: { id: id }
            });
            window.open(routeUrl.href, '_blank');
            // html 取参  $route.query.id
            // script 取参  this.$route.query.id

            // vue路由跳转有四种方式
            // 1. router-link
            // 2. this.$router.push() (函数里面调用)
            // 3. this.$router.replace() (用法同push)
            // 4. this.$router.go(n)
        }
    }
});

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fangfajingjiang_yanyu_pdf01_vue__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fangfajingjiang_panduan_pdf02_vue__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fangfajingjiang_ziliaofenxi_pdf03_vue__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fangfajingjiang_shenlun_pdf04_vue__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fangfajingjiang_shuliangguanxi_pdf05_vue__ = __webpack_require__(467);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
    components: { fFJJYanyu: __WEBPACK_IMPORTED_MODULE_0__fangfajingjiang_yanyu_pdf01_vue__["a" /* default */], fFJJPanduan: __WEBPACK_IMPORTED_MODULE_1__fangfajingjiang_panduan_pdf02_vue__["a" /* default */], fFJJZiliaofenxi: __WEBPACK_IMPORTED_MODULE_2__fangfajingjiang_ziliaofenxi_pdf03_vue__["a" /* default */], fFJJShenlun: __WEBPACK_IMPORTED_MODULE_3__fangfajingjiang_shenlun_pdf04_vue__["a" /* default */], fFJJShenliangguanxi: __WEBPACK_IMPORTED_MODULE_4__fangfajingjiang_shuliangguanxi_pdf05_vue__["a" /* default */] },
    data: function data() {
        return {
            mymsg: '这是第二个页面哦~',
            data: [],
            pdfId: ''
        };
    },
    created: function created() {
        var self = this;
        this.initData();
        self.pdfId = self.$route.query.id;
    },
    mounted: function mounted() {},

    methods: {
        // 初始化数据
        initData: function initData() {
            var self = this;
            self.data = [];
        }
    }
});

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            mymsg: '这是第二个页面哦~',
            summary: {
                d1: [],
                d2: [],
                d3: [],
                d4: [],
                d5: [],
                d6: [],
                d7: [],
                d8: [],
                d9: [],
                d10: [],
                d11: [],
                d12: [],
                d13: [],
                d14: []
            },
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            sectionOpen: {}
        };
    },
    created: function created() {
        this.initData();
    },
    mounted: function mounted() {},

    methods: {
        sectionOpenClose: function sectionOpenClose(sectionNum) {
            var self = this;
            self.$set(self.sectionOpen, sectionNum, !self.sectionOpen[sectionNum]);
        },

        // 初始化数据
        initData: function initData() {
            var self = this;
            self.getSummary1();
            self.getSummary2();
            self.getSummary3();
            self.getSummary4();
            self.getSummary5();
            self.getSummary6();
            self.getSummary7();
            self.getSummary8();
            self.getSummary9();
            self.getSummary10();
            self.getSummary11();
            self.getSummary12();
            self.getSummary13();
        },

        // 总结1内容(转折关系)
        getSummary1: function getSummary1() {
            var self = this;
            var data = [{
                label: '典型标志词',
                children: [{ label: '虽然...但是...' }, { label: '尽管...可是...' }, { label: '不过' }, { label: '然而' }, { label: '却' }, { label: '其实/事实上/实际上' }]
            }, {
                label: '非典型标志词',
                children: [{ label: '殊不知' }, { label: '截然不同' }, { label: '截然相反' }, { label: '全新的研究' }, { label: '一种误读' }, { label: '相对而言' }]
            }, {
                label: '提示',
                children: [{
                    label: '错误选项特征',
                    children: [{ label: '转折前的内容' }, { label: '围绕例子的表述' }, { label: '围绕原因的表述' }, { label: '无中生有' }]
                }, {
                    label: '略读句子特征： 例子、原因……'
                }]
            }];
            self.$set(self.summary, 'd1', data);
        },

        // 总结2内容(主题词)
        getSummary2: function getSummary2() {
            var self = this;
            var data = [{
                label: '特征',
                children: [{ label: '文段围绕其展开' }, { label: '一般高频出现' }, { label: '多为名词' }, { label: '前有引入或后有解释说明' }]
            }, {
                label: '理论要点',
                children: [{ label: '正确选项中需包含文段主题词' }]
            }, {
                label: '干扰选项',
                children: [{
                    label: '范围扩大/缩小/偷换'
                }]
            }];
            self.$set(self.summary, 'd2', data);
        },

        // 总结3内容(因果关系)
        getSummary3: function getSummary3() {
            var self = this;
            var data = [{
                label: '典型标志词',
                children: [{ label: '因为...所以...' }, { label: '由于...因此...' }]
            }, {
                label: '因果标志词',
                children: [{ label: '所以、因此、因而、故而、于是、可见、看来（为什么、为何）' }, { label: '导致、致使、使得、造成' }]
            }, {
                label: '文段特征',
                children: [{
                    label: '结论句在结尾：多为文段中心句'
                }, {
                    label: '结论句在开头/中间',
                    children: [{ label: '后为进一步解释说明：结论句为中心句' }, { label: '后有其他关联关系：需结合多种关联词共同分析' }]
                }]
            }];
            self.$set(self.summary, 'd3', data);
        },

        // 总结4内容(必要条件关系)
        getSummary4: function getSummary4() {
            var self = this;
            var data = [{
                label: '典型格式',
                children: [{ label: '只有……才……' }]
            }, {
                label: '对策标志词',
                children: [{ label: '应该、应当、必须、需要、亟须、亟待+做法' }, { label: '通过/采取……手段/途径/措施/方式/方法/渠道，才能……' }, { label: '呼吁、倡导、提倡、提醒、建议+做法' }, { label: '前提、基础、保障、关键' }]
            }, {
                label: '文段特征',
                children: [{ label: '对策在结尾：提出问题+分析问题+解决问题' }, { label: '对策在中间：提出问题+解决问题+解释说明（意义效果）' }, { label: '对策在开头：对策+正反论证/原因论证' }]
            }, {
                label: '反面论证',
                children: [{ label: '典型格式：如果/倘若/一旦……+不好的结果' }, { label: '具体应用：把前面的做法反过来，即为正确答案' }]
            }, {
                label: '知识链接',
                children: [{ label: '文段中只出现“提出问题+分析问题”，“解决问题”可能出现在选项中作为正确答案' }, { label: '对策不万能，一定要注意' }]
            }];
            self.$set(self.summary, 'd4', data);
        },

        // 总结5内容(程度词)
        getSummary5: function getSummary5() {
            var self = this;
            var data = [{
                label: '标志词',
                children: [{ label: '更、尤其、正是、特别是、真正、根本、最（核心、突出）等' }]
            }, {
                label: '理论要点',
                children: [{ label: '程度词所在的语句通常为重点' }]
            }];
            self.$set(self.summary, 'd5', data);
        },

        // 总结6内容(并列关系)
        getSummary6: function getSummary6() {
            var self = this;
            var data = [{
                label: '文段特征',
                children: [{ label: '包含并列关联词及标点，如此外、另外、同时、以及、“；”' }, { label: '句式相同或相近' }, { label: '无明显其他关联词' }]
            }, {
                label: '选项特征',
                children: [{ label: '两方面情况：和、及、与、同' }, { label: '更多种情况：许多、一些、不同、各种、一系列' }]
            }, {
                label: '提示',
                children: [{ label: '表述片面的选项需排除' }]
            }];
            self.$set(self.summary, 'd6', data);
        },

        // 总结7内容(程度词)
        getSummary7: function getSummary7() {
            var self = this;
            var data = [{
                label: '理论要点',
                children: [{ label: '把握中心句及分述句的特征' }]
            }, {
                label: '中心句特征：观点',
                children: [{ label: '对策' }, { label: '结论' }, { label: '评价' }]
            }, {
                label: '分述句特征',
                children: [{ label: '举例子：“比如”“例如”“……就是例证”等' }, { label: '调查报告、数据资料等' }, { label: '正反论证' }, { label: '原因解释' }, { label: '并列分述' }]
            }, {
                label: '提示：选项陷阱总结',
                children: [{ label: '非重点，迷你眼' }, { label: '无中生有不能选' }]
            }];
            self.$set(self.summary, 'd7', data);
        },

        // 总结8内容(细节判断题)
        getSummary8: function getSummary8() {
            var self = this;
            var data = [{
                label: '提问方式',
                children: [{ label: '以下对文段理解正确/不正确的是...' }, { label: '符合/不符合这段话意思的是...' }, { label: '从文段中可以得知/推出的是...' }]
            }, {
                label: '错误选项类型',
                children: [{ label: '无中生有' }, {
                    label: '偷换概念',
                    children: [{ label: '替换' }, { label: '混搭' }]
                }, {
                    label: '偷换时态',
                    children: [{ label: '将来时（将要、立刻、趋势、以后）' }, { label: '完成时（已、已经、了、完成）' }, { label: '进行时（正在、在...中、着）' }]
                }, { label: '偷换逻辑' }]
            }, {
                label: '快速解题技巧',
                children: [{ label: '对比项' }, { label: '相对绝对项' }, { label: '表述与实际不符项' }]
            }, {
                label: '细节主旨化',
                children: [{ label: '优选契合主旨的选项' }]
            }];
            self.$set(self.summary, 'd8', data);
        },

        // 总结9内容(语句排序题)
        getSummary9: function getSummary9() {
            var self = this;
            var data = [{
                label: '提问方式',
                children: [{ label: '将以上/以下几个句子重新排序,语序正确的是...' }]
            }, {
                label: '解题要点：从选项入手',
                children: [{ label: '确定首句' }, { label: '确定捆绑集团/确定顺序/确定尾句' }]
            }, {
                label: '确定首句',
                children: [{
                    label: '首句特征',
                    children: [{ label: '下定义：...就是/是指' }, { label: '背景引入：随着、近年来、在...大背景/环境下' }]
                }, {
                    label: '非首句特征',
                    children: [{ label: '指代词：这、那、他、其、该、此' }, { label: '关联词后半部分：但、却、而且' }]
                }]
            }, {
                label: '确定捆绑集团',
                children: [{
                    label: '指代词',
                    children: [{ label: '这、那、他、其、该、此' }]
                }, {
                    label: '关联词',
                    children: [{ label: '配套出现确定捆绑' }, { label: '单个出现分析句意' }]
                }]
            }, {
                label: '确定顺序',
                children: [{ label: '时间顺序' }, {
                    label: '逻辑顺序',
                    children: [{ label: '观点+解释说明' }, { label: 'A和B' }]
                }]
            }, {
                label: '确定尾句',
                children: [{ label: '因此、所以、看来、于是、这...引导的总结性尾句' }, { label: '对策' }]
            }];
            self.$set(self.summary, 'd9', data);
        },

        // 总结10内容(语句填空题)
        getSummary10: function getSummary10() {
            var self = this;
            var data = [{
                label: '提问方式',
                children: [{ label: '填入画横线部分最恰当的一项是' }]
            }, {
                label: '横线在结尾',
                children: [{ label: '总结前文' }, { label: '提出对策' }]
            }, {
                label: '横线在开头：需概括文段的中心内容'
            }, {
                label: '横线在中间',
                children: [{
                    label: '注意与上下文的联系'
                }, {
                    label: '把握好主题词，保证与文段话题一致'
                }]
            }];
            self.$set(self.summary, 'd10', data);
        },

        // 总结11内容(接语选择题)
        getSummary11: function getSummary11() {
            var self = this;
            var data = [{
                label: '提问方式',
                children: [{ label: '作者接下来最有可能讲述的是……' }]
            }, {
                label: '理论要点',
                children: [{ label: '重点关注文段最后一句话' }]
            }, {
                label: '干扰项特征',
                children: [{ label: '文段中已经论述过的内容' }]
            }, {
                label: '提示',
                children: [{ label: '理解要紧紧依托文段，不能无中生有' }]
            }];
            self.$set(self.summary, 'd11', data);
        },

        // 总结12内容(词的辨析)
        getSummary12: function getSummary12() {
            var self = this;
            var data = [{
                label: '词义侧重：辨析方法',
                children: [{ label: '第一种：拆字组词：用不一样的字单独组词' }, { label: '第二种：整词搭配：用整个词进行组词搭配' }]
            }, {
                label: '固定搭配',
                children: [{
                    label: '搭配一个词：瞻前顾后找准搭配对象'
                }, {
                    label: '搭配多个词',
                    children: [{ label: '横线所填词语搭配由“和”“及”“与”引导的并列结构' }, { label: '需与并列结构搭配恰当' }]
                }]
            }, {
                label: '程度轻重',
                children: [{
                    label: '区分词的程度轻重',
                    children: [{ label: '程度轻：大相径庭：相差很大，相差很多' }, { label: '程度重：截然不同：完全相反，完全不同' }]
                }, {
                    label: '理论要点：所填词语的程度轻重与文段意思的轻重保持一致'
                }]
            }, {
                label: '感情色彩',
                children: [{
                    label: '区分词的感情色彩',
                    children: [{ label: '褒义：成果' }, { label: '贬义：后果' }, { label: '中性：结果' }]
                }, { label: '理论要点：所填词语的感情色彩与文段的感情色彩保持一致' }]
            }];
            self.$set(self.summary, 'd12', data);
        },

        // 总结13内容(语境分析)
        getSummary13: function getSummary13() {
            var self = this;
            var data = [{
                label: '关联关系',
                children: [{
                    label: '转折',
                    children: [{ label: '标志词：但是、然而、却等' }, { label: '理论要点：前后语义相反' }]
                }, {
                    label: '递进',
                    children: [{ label: '标志词：而且、甚至、更等' }, { label: '理论要点：语义程度前轻后重' }]
                }, {
                    label: '并列',
                    children: [{
                        label: '标志词：而且、甚至、更等',
                        children: [{ label: '同义并列：顿号（、）、逗号（，）' }, { label: '反义并列：不是……而是……、是……不是……、相反、反之等' }]
                    }, { label: '理论要点：同义并列连接前后语义相近；反义并列连接前后语义相反' }, { label: '提示：相同句式也可表示并列' }]
                }]
            }, {
                label: '对应关系',
                children: [{
                    label: '解释类对应',
                    children: [{ label: '题干特点：分句， ，分句' }, { label: '标志词：即、就是、可以说、可谓、无异于、比如、例如等' }, { label: '标点：冒号（：）、破折号（——）' }]
                }, {
                    label: '重点词句对应',
                    children: [{ label: '重点词：指代词、主题词、形象表达' }, { label: '重点句：完整语句' }]
                }, {
                    label: '提示',
                    children: [{ label: '找准对应关系，要基于对整个文段意思的理解与把握' }]
                }]
            }];
            self.$set(self.summary, 'd13', data);
        }
    }
});

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            mymsg: '这是第二个页面哦~',
            summary: {
                d1: [],
                d2: [],
                d3: [],
                d4: [],
                d5: [],
                d6: [],
                d7: [],
                d8: [],
                d9: [],
                d10: [],
                d11: [],
                d12: [],
                d13: [],
                d14: []
            },
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            sectionOpen: {}
        };
    },
    created: function created() {
        this.initData();
    },
    mounted: function mounted() {},

    methods: {
        sectionOpenClose: function sectionOpenClose(sectionNum) {
            var self = this;
            self.$set(self.sectionOpen, sectionNum, !self.sectionOpen[sectionNum]);
        },

        // 初始化数据
        initData: function initData() {
            var self = this;
            self.getSummary1();
            self.getSummary2();
            self.getSummary3();
            self.getSummary4();
            self.getSummary5();
            self.getSummary6();
            self.getSummary7();
            self.getSummary8();
            self.getSummary9();
            self.getSummary10();
            self.getSummary11();
            self.getSummary12();
        },

        // 总结1内容(图形推理)
        getSummary1: function getSummary1() {
            var self = this;
            var data = [{
                label: '题目特征：元素组成相同'
            }, {
                label: '考点',
                children: [{
                    label: '平移',
                    children: [{ label: '方向：直线（上下、左右、对角线）、绕圈（顺逆时针）' }, { label: '步数：恒定、递增' }]
                }, {
                    label: '旋转',
                    children: [{ label: '方向：顺逆时针' }, { label: '角度：30°、45°、60°、90°、180°' }]
                }, {
                    label: '翻转',
                    children: [{ label: '方向：上下翻转（图形沿横轴对称）、左右翻转（图形沿竖轴对称）' }]
                }, {
                    label: '技巧',
                    children: [{ label: '比较思维：既可以比较题干，也可以比较选项' }]
                }]
            }];
            self.$set(self.summary, 'd1', data);
        },

        // 总结2内容(样式规律)
        getSummary2: function getSummary2() {
            var self = this;
            var data = [{
                label: '题目特征：元素组成相似'
            }, {
                label: '考点',
                children: [{
                    label: '加减同异',
                    children: [{ label: '相加、相减' }, { label: '求同' }, { label: '求异' }, { label: '注意：位置+样式的复合考法' }]
                }, {
                    label: '黑白运算',
                    children: [{ label: '（1）特征：图形轮廓和分割区域相同，内部的颜色不同' }, { label: '（2）方法：相同位置运算' }, { label: '（3）小技巧：优先考虑黑白运算后，从问号处着手解题更快，边找边验证' }, { label: '注意：位置+样式的复合考法' }]
                }]
            }];
            self.$set(self.summary, 'd2', data);
        },

        // 总结3内容(属性规律)
        getSummary3: function getSummary3() {
            var self = this;
            var data = [{
                label: '题目特征：元素组成不相同、不想似'
            }, {
                label: '考点',
                children: [{
                    label: '对称性',
                    children: [{
                        label: '轴对称',
                        children: [{ label: '对称轴方向、数量' }, { label: '对称轴和图形的关系' }]
                    }, { label: '中心对称' }, { label: '轴对称 + 中心对称' }]
                }, {
                    label: '曲直线：优先全直线或全曲线'
                }, {
                    label: '开闭性：优先全开放或全封闭'
                }]
            }];
            self.$set(self.summary, 'd3', data);
        },

        // 总结4内容(特殊规律)
        getSummary4: function getSummary4() {
            var self = this;
            var data = [{
                label: '图形间关系',
                children: [{ label: '题目特征：题干每幅图都出现两个或多个封闭图形连在一起' }, {
                    label: '考点',
                    children: [{ label: '相离：图形分开，没有公共部分' }, {
                        label: '相交',
                        children: [{ label: '相交于点' }, {
                            label: '相交于点',
                            children: [{ label: '相交边数量' }, { label: '相交边样式：长/短' }]
                        }, { label: '相交于面：相交面的形状' }]
                    }]
                }]
            }, {
                label: '功能元素',
                children: [{ label: '题目特征：题干每幅图都出现小黑点或小箭头等小元素' }, { label: '考点：标记位置' }]
            }];
            self.$set(self.summary, 'd4', data);
        },

        // 总结5内容(数量规律)
        getSummary5: function getSummary5() {
            var self = this;
            var data = [{
                label: '题目特征',
                children: [{ label: '元素组成不同且无属性规律' }, { label: '数量规律明显' }]
            }, {
                label: '考点',
                children: [{
                    label: '面数量',
                    children: [{ label: '图形被分割，封闭面明显' }, { label: '注意面的细化考法' }]
                }, {
                    label: '线数量',
                    children: [{ label: '直线数特征图：多边形、单一直线' }, { label: '曲线数特征图：曲线图形（全曲线图、圆、弧）' }, {
                        label: '笔画数',
                        children: [{
                            label: '一笔画图形',
                            children: [{ label: '（1）连通图' }, { label: '（2）奇点数=0或2' }]
                        }, {
                            label: '多笔画图形',
                            children: [{ label: '笔画数=奇点数÷2' }, { label: '如果存在多部分，则每个部分的笔画单独算，再相加' }]
                        }, {
                            label: '常见特征图',
                            children: [{ label: '五角星、“日”、“田”、“日”、和“田”的变形图、圆和圆相切与相交、多端点图形' }]
                        }]
                    }]
                }, {
                    label: '点数量',
                    children: [{
                        label: '特征图',
                        children: [{
                            label: '（1）线条交叉明显'
                        }, {
                            label: '（2）乱糟糟一团线交叉'
                        }, {
                            label: '（3）相切较多'
                        }]
                    }, { label: '细化考点：曲直交点、内外交点' }]
                }, {
                    label: '素数量',
                    children: [{ label: '元素种类' }, { label: '元素个数' }, {
                        label: '部分数',
                        children: [{
                            label: '线条连在一起叫一部分'
                        }, {
                            label: '常考查生活化粗线条图形'
                        }]
                    }]
                }]
            }];
            self.$set(self.summary, 'd5', data);
        },

        // 总结6内容(空间类 - 六面体)
        getSummary6: function getSummary6() {
            var self = this;
            var data = [{
                label: '想对面',
                children: [{ label: '（1）两个面在同一行或同一列，且中间隔了一个面' }, { label: '（2）两个面在“Z”字形两端，且紧靠着“Z”字形中间那条线' }, { label: '应用：在立体图只能看到三个面的情况，想对面只能出现一个' }]
            }, {
                label: '想邻面',
                children: [{ label: '（1）平面图中直接相邻的两个面的公共边' }, { label: '（2）平面图中构成直角的两条边是同一条边' }, { label: '（3）一排四个面，两头的两条边是同一条边' }, { label: '相对位置法：图形方向明显时可考虑相对位置' }, {
                    label: '画边法',
                    children: [{ label: '（1）结合选项，找一个特殊面的唯一点或唯一边' }, { label: '（2）顺/逆时针方向描边标号（描同一个面）' }, { label: '（3）题干与选项对应面不一致 ———— 排除' }]
                }]
            }, {
                label: '提示',
                children: [{ label: '表述片面的选项需排除' }]
            }];
            self.$set(self.summary, 'd6', data);
        },

        // 总结7内容(类比推理)
        getSummary7: function getSummary7() {
            var self = this;
            var data = [{
                label: '解题方法：',
                children: [{
                    label: '语义关系',
                    children: [{ label: '近义/反义关系  感情色彩' }, { label: '比喻义、象征义' }]
                }, {
                    label: '逻辑关系',
                    children: [{ label: '全同关系' }, {
                        label: '并列关系',
                        children: [{ label: '矛盾关系：非A即B' }, { label: '反对关系：除了A、B，还有其他情况' }]
                    }, {
                        label: '包容关系',
                        children: [{ label: '种属关系：小技巧：用“是”造句，造的通顺' }, { label: '组成关系' }]
                    }, { label: '交叉关系： 小技巧：用“有的A是B”与“有的A不是B”造句，正反都能造得通' }, {
                        label: '对应关系',
                        children: [{ label: '材料' }, { label: '工艺：物理变化、化学变化' }, { label: '属性：必然属性、或然属性' }, { label: '功能' }, { label: '时间顺序：主体一致、主体不一致' }, { label: '因果' }]
                    }]
                }, {
                    label: '语法关系',
                    children: [{ label: '主谓关系' }, { label: '动宾关系' }, { label: '主宾关系' }]
                }]
            }, {
                label: '解题技巧：词语拆分 ⇒ 什么时候拆分看？',
                children: [{ label: '单字拆分' }, { label: '成语被拆分' }, { label: '两组词语之间没有明显逻辑关系' }]
            }];
            self.$set(self.summary, 'd7', data);
        },

        // 总结8内容(定义判断)
        getSummary8: function getSummary8() {
            var self = this;
            var data = [{
                label: '解题思路',
                children: [{ label: '看清提问方式：属于/符合；不属于/不符合' }, { label: '识别有效信息：找准关键字、关键句' }, { label: '逐一分析选项：对比选项' }]
            }, {
                label: '快速识别有效信息',
                children: [{ label: '主体、客体' }, { label: '句式' }, { label: '包含定义的句子优先看' }, { label: '补充说明' }, { label: '多定义问谁先看谁' }]
            }, {
                label: '小技巧',
                children: [{ label: '拆词' }, { label: '同构选项' }]
            }];
            self.$set(self.summary, 'd8', data);
        },

        // 总结9内容(翻译推理)
        getSummary9: function getSummary9() {
            var self = this;
            var data = [{
                label: '题型特征',
                children: [{ label: '题干和选项中出现比较明显的逻辑关联词' }, { label: '提问方式是“可以推出” “不能推出” 等' }]
            }, {
                label: '解题思维',
                children: [{ label: '先翻译，后推理 ：  注意：不要通过理解语义来解题' }]
            }, {
                label: '翻译规则',
                children: [{
                    label: '前推后',
                    children: [{ label: '（1）如果……那么……' }, { label: '（2）若……则……' }, { label: '（3）只要……就……' }, { label: '（4）所有……都……' }, { label: '（5）为了……一定（必须）……' }, { label: '（6）……是……的充分条件' }]
                }, {
                    label: '后推前',
                    children: [{ label: '（1）只有……才……' }, { label: '（2）不……不……' }, { label: '（3）除非……否则不……' }, { label: '（4）……是……的基础 / 假设 / 前提 / 关键' }, { label: '（5）……是……的必要条件 / 必不可少的条件' }, { label: '（6）……是……的充分条件' }]
                }, {
                    label: '易错点',
                    children: [{ label: '谁是必要条件，谁放在箭头后面' }, { label: '除非……否则……' }]
                }]
            }, {
                label: '推理规则',
                children: [{
                    label: '逆否等价',
                    children: [{ label: 'A → B = － B →－ A' }, { label: '肯前必肯后，否后必否前，否前肯后无必然结论' }]
                }, {
                    label: '传递规则',
                    children: [{ label: '① → ②，② → ③ ⇒ ① → ③' }, { label: '关联词后半部分：但、却、而且' }]
                }]
            }, {
                label: '且和或关系',
                children: [{
                    label: '“且”关系',
                    children: [{ label: '（1）……和……' }, { label: '（2）……并且……' }, { label: '（3）既……又……' }, { label: '（4）不仅……而且……' }, { label: '（5）虽然……但是……' }]
                }, {
                    label: '“或”关系',
                    children: [{ label: '（1）……或者……' }, { label: '（2）或者……或者……' }, { label: '（3）……和……至少一个' }, { label: '当“或”关系为真时，否定一项可以推出另一项，即“否一推一”' }]
                }, {
                    label: '德·摩根定律',
                    children: [{ label: '-（A 且 B）＝ -A 或 -B' }, { label: '-（A 或 B）＝ -A 且 -B' }]
                }]
            }, {
                label: '推理方式',
                children: [{ label: '提问方式：推理方式/结构与题干的推理方式/结构相同' }, { label: '解题思路：不要考虑推理是否正确，只考虑与题干是否一致' }]
            }];
            self.$set(self.summary, 'd9', data);
        },

        // 总结10内容(组合排列)
        getSummary10: function getSummary10() {
            var self = this;
            var data = [{
                label: '题型特征：题干中给出一组对象和相关信息，要求把对象和信息进行匹配'
            }, {
                label: '常用方法',
                children: [{
                    label: '排除法',
                    children: [{ label: '何时用：题干信息确定' }, { label: '如何用：读一句，排一句' }]
                }, {
                    label: '代入法',
                    children: [{
                        label: '何时用',
                        children: [{ label: '（1）题干信息不确定' }, { label: '（2）提问为“可能/不可能”' }, { label: '（3）提问为“补充以下哪个条件”' }]
                    }, {
                        label: '如何用：把选项代入题干验证'
                    }]
                }]
            }, {
                label: '辅助技巧',
                children: [{ label: '最大信息：以题干中出现次数最多的信息为推理起点' }, { label: '符号：出现大小比较，借助“>” “=” “<” 推理' }, { label: '列表格：对象和信息比较多，借助列表推理' }]
            }, {
                label: '特殊题型：材料题',
                children: [{
                    label: '与非材料题的解题方法一致'
                }, {
                    label: '通过材料直接推出来的结论可以直接应用于多有题目'
                }]
            }];
            self.$set(self.summary, 'd10', data);
        },

        // 总结11内容(削弱论证)
        getSummary11: function getSummary11() {
            var self = this;
            var data = [{
                label: '题型特征：提问中包含“削弱” “质疑” “反驳” “否定” 等'
            }, {
                label: '削弱方式',
                children: [{
                    label: '否定论点',
                    children: [{ label: '选项特征：与论点表述的意思相反' }, {
                        label: '解题步骤：',
                        children: [{ label: '（1）找出论点' }, { label: '（2）想出与论点相反意思的表述' }, { label: '（3）寻找对应选项' }]
                    }]
                }, {
                    label: '拆桥',
                    children: [{ label: '题型特征：论点和论据讨论的话题不一致' }, { label: '选项特征：同时包含论点和论据中的关键词，并否定论点和论据之间的必然联系' }, { label: '注：提问方式为问“削弱论证”时，优先考虑拆桥' }]
                }]
            }, {
                label: '否定论证',
                children: [{
                    label: '题型论证',
                    children: [{ label: '题干中出现支持方、反对方观点相反，经常采用否定论据来削弱' }, { label: '题干存在论据并且在找不到否定论点和拆桥的情况下，考虑否定论据' }]
                }, { label: '选项特征：与论据表述的意思相反' }]
            }, {
                label: '因果类',
                children: [{ label: '因果倒置：将论点中的因果关系顺序颠倒' }, { label: '他因削弱：在原来原因1的基础上，选项增加另一个同时存在的原因2也能导致相同的结果，削弱的是原来原因的重要性或者唯一性' }]
            }];
            self.$set(self.summary, 'd11', data);
        },

        // 总结12内容(加强论证)
        getSummary12: function getSummary12() {
            var self = this;
            var data = [{
                label: '题型特征：提问中包含“支持” “加强” “前提/假设” 等'
            }, {
                label: '加强方式：',
                children: [{
                    label: '补充论据',
                    children: [{ label: '题型特征：论点和论据讨论的话题一致' }, { label: '解释 ： 选项特征 ： 说明论点成立的原因' }, { label: '举例 ： 选项特征 ： 证明论点成立的例子' }]
                }, {
                    label: '搭桥',
                    children: [{ label: '题型特征：论点和论据讨论的话题不一致' }, { label: '选项特征：同时包含论点和论据中的关键词，并肯定论点和论据之间的关系' }, { label: '注：提问方式为问前提、假设、必要条件、支持论证时，优先考虑搭桥' }]
                }, {
                    label: '必要条件',
                    children: [{ label: '题型特征：提问方式为问前提、假设、必要条件、支持论证，无搭桥项' }, { label: '选项判断：没它不行' }]
                }, {
                    label: '小贴士',
                    children: [{ label: '类比加强的力度非常弱，类比加强只有在其他加强方式都没有的情况下，才有可能是正确答案' }]
                }]
            }];
            self.$set(self.summary, 'd12', data);
        }
    }
});

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            mymsg: '这是第二个页面哦~',
            summary: {
                d1: [],
                d2: [],
                d3: [],
                d4: [],
                d5: [],
                d6: [],
                d7: [],
                d8: [],
                d9: [],
                d10: [],
                d11: [],
                d12: [],
                d13: [],
                d14: []
            },
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            sectionOpen: {}
        };
    },
    created: function created() {
        this.initData();
    },
    mounted: function mounted() {
        var self = this;
        if (self.commonsVariable.isMathjaxConfig) {
            //判断是否初始配置，若无则配置。
            self.commonsVariable.initMathjaxConfig();
        }
        self.commonsVariable.MathQueue('pdf03');
        this.drawLine('echart01');
    },

    methods: {
        sectionOpenClose: function sectionOpenClose(sectionNum) {
            var self = this;
            self.$set(self.sectionOpen, sectionNum, !self.sectionOpen[sectionNum]);
        },

        // 初始化数据
        initData: function initData() {
            var self = this;
            self.getSummary1();
            self.getSummary2();
            self.getSummary3();
            self.getSummary4();
            self.getSummary5();
            self.getSummary6();
            self.getSummary7();
            self.getSummary8();
            self.getSummary9();
            self.getSummary10();
            self.getSummary11();
            self.getSummary12();
            self.getSummary13();
        },

        // 总结1内容(截位直除)
        getSummary1: function getSummary1() {
            var self = this;
            var data = [{
                label: '截谁',
                children: [{ label: '一步除法：建议只截分母' }, { label: '多步计算：建议上下都截' }]
            }, {
                label: '截几位',
                children: [{
                    label: '选项差距大，截两位',
                    children: [{ label: '选项首位不同' }, { label: '选项首位相同，次位差大于首位' }]
                }, { label: '选项差距小，截三位：选项首位相同且次位差小于等于首位' }]
            }];
            self.$set(self.summary, 'd1', data);
        },

        // 总结2内容(分数比较)
        getSummary2: function getSummary2() {
            var self = this;
            var data = [{
                label: '一大一小直接看',
                children: [{ label: '根据分子比大小' }, { label: '分子大的分数大，分子小的分数小' }]
            }, {
                label: '同大同小',
                children: [{ label: '竖着直接除' }, { label: '横着看速度' }, { label: '横竖哪个好看看哪个' }]
            }];
            self.$set(self.summary, 'd2', data);
        },

        // 总结3内容(材料阅读)
        getSummary3: function getSummary3() {
            var self = this;
            var data = [{
                label: '文字材料',
                children: [{ label: '标记段落主题词，与题干进行匹配' }, { label: '注意相近词、时间、单位等' }]
            }, {
                label: '表格材料',
                children: [{ label: '横纵标目、标题、单位、备注' }]
            }, {
                label: '图形材料',
                children: [{ label: '标题、单位、图例' }]
            }, {
                label: '结合材料',
                children: [{ label: '不同类型材料之间的关系、材料结构' }]
            }];
            self.$set(self.summary, 'd3', data);
        },

        // 总结4内容(基期与现期)
        getSummary4: function getSummary4() {
            var self = this;
            var data = [{
                label: '基期量',
                children: [{ label: '识别：求前面某个时期的量' }, { label: '公式：基期量=现期量-增长量； 基期量=现期量÷(1+r)' }, { label: '速算：r大截位直除，r小化除为乘' }, { label: '基期和差：先用现期量和正负排除再计算' }]
            }, {
                label: '现期量',
                children: [{ label: '识别：求后面某个时期的量' }, { label: '公式：现期量=基期量+增长量； 现期量=基期量×(1+r)' }, { label: '速算：截位计算，特殊数字' }]
            }];
            self.$set(self.summary, 'd4', data);
        },

        // 总结5内容(一般增长率)
        getSummary5: function getSummary5() {
            var self = this;
            var data = [{
                label: '计算',
                children: [{ label: '识别：增长/下降+%，乘，倍；增长最快/慢' }, {
                    label: '方法：',
                    children: [{ label: '给百分点，直接加减' }, { label: '无百分点，r=增长量÷基期量' }]
                }, { label: '速算：截位直除' }]
            }, {
                label: '比较',
                children: [{ label: '识别：增长最快/慢；增长率最高/低' }, {
                    label: '方法：',
                    children: [{ label: '现期量÷基期量≥2，比较“现期量÷基期量”' }, { label: '现期量÷基期量＜2，比较“增长量÷基期量”' }]
                }, { label: '速算：分数比较法' }]
            }];
            self.$set(self.summary, 'd5', data);
        },

        // 总结6内容(并列关系)
        getSummary6: function getSummary6() {
            var self = this;
            var data = [{
                label: '计算',
                children: [{ label: '识别：增长+单位（人/元/吨）' }, {
                    label: '公式',
                    children: [{ label: '增长量=现期量-基期量=基期量×r=`((现期量)/(1+r))×r`' }, { label: '年均增长量=(现期量-基期量)÷年份差' }]
                }, {
                    label: '速算',
                    children: [{ label: '百分数化分数：近似转化、区中转化、倍数转化' }, { label: '若|r|≈`1/N`，增长量≈`(现期量)/(N+1)`；下降量≈`(现期量)/(N-1)`' }]
                }, {
                    label: '比较',
                    children: [{ label: '识别：增长最多/少' }, {
                        label: '速算',
                        children: [{ label: '给出每年数据：直接两两相减，柱状图还可用直尺标注' }, { label: '给出现期量和r：两者都大则增量必然大，否则百分化计算' }]
                    }]
                }]
            }];
            self.$set(self.summary, 'd6', data);
        },

        // 总结7内容(比重)
        getSummary7: function getSummary7() {
            var self = this;
            var data = [{
                label: '现期比重',
                children: [{ label: '识别：问题时间和材料一致，占，比重' }, { label: '公式：比重=`(部分)/(总体)`；总体=`(部分)/(比重)`；部分=总体×比重' }, { label: '速算：截位直除' }]
            }, {
                label: '基期比重',
                children: [{ label: '识别：问题时间在材料之前，占，比重' }, { label: '公式：`A/(1+a)÷B/(1+b)=A/B×(1+b)/(1+a)`' }, { label: '速算：（1）截位直除；（2）先计算现期比重，再判断大小' }]
            }, {
                label: '两期比重',
                children: [{ label: '识别：两个年份，一个比重' }, { label: '公式：`A/B×(a-b)/(1+a)`' }, { label: '升降判断：比较部分与总体增长率，部分大则升、小则降' }, { label: '速算：比重差的绝对值小于增长率之差的绝对值，即`|A/B×(a-b)/(1+a)|＜|a-b|`' }]
            }];
            self.$set(self.summary, 'd7', data);
        },

        // 总结8内容(平均数)
        getSummary8: function getSummary8() {
            var self = this;
            var data = [{
                label: '现期平均数',
                children: [{ label: '识别：问题时间与材料一致+平均（均/每/单位）' }, { label: '公式：平均数=总数÷个数  后面÷前面' }, { label: '技巧：（1）截位直除；（2）削峰填谷' }]
            }, {
                label: '基期平均数',
                children: [{ label: '识别：问题时间在材料之前+平均（均/每/单位）' }, { label: '公式：`A/(1+a)÷B/(1+b)=A/B×(1+b)/(1+a)`' }, { label: '速算：（1）截位直除；（2）先计算现期平均数，再判断大小' }]
            }, {
                label: '两期平均数',
                children: [{ label: '识别：问题中涉及两个时间+平均（均/每/单位）' }, { label: '升降判断：看分子、分母增长率，分子大则升、小则降' }, {
                    label: '平均数的增长率',
                    children: [{ label: '（1）先找出分子的增速a和分母的增速b' }, { label: '（2）代入公式：`(a-b)/(1+b)`' }]
                }]
            }];
            self.$set(self.summary, 'd8', data);
        },

        // 总结9内容(倍数)
        getSummary9: function getSummary9() {
            var self = this;
            var data = [{
                label: '现期倍数',
                children: [{ label: '识别：问题时间与材料一致，A是B的多少倍' }, { label: '公式：A÷B' }, { label: '速算：截位直除' }]
            }, {
                label: '基期倍数',
                children: [{ label: '识别：问题时间在材料之前，A是B的所少倍' }, { label: '公式：`A/(1+a)÷B/(1+b)=A/B×(1+b)/(1+a)`' }, { label: '速算：（1）截位直除；（2）先算现期倍数，再判断大小' }]
            }, {
                label: '倍数与增长',
                children: [{ label: 'A是B的n倍：n=A÷B' }, { label: 'A比B增长（多）r倍：r=A÷B-1' }]
            }];
            self.$set(self.summary, 'd9', data);
        },

        // 总结10内容(特殊增长率)
        getSummary10: function getSummary10() {
            var self = this;
            var data = [{
                label: '间隔增长率',
                children: [{ label: '识别：中间隔一年求增长率' }, { label: '公式：`r_(间隔)=r_1+r_2+r_1×r_2`' }, {
                    label: '速算：',
                    children: [{ label: '（1）`r_1`、`r_2`绝对值均小于10%，结合选项`r_1×r_2`可忽略' }, { label: '（2）百分化' }]
                }]
            }, {
                label: '年均增长率',
                children: [{ label: '识别：年均增长最快、年均增速排序' }, { label: '公式：`(1+r)^n=现期量÷基期量`' }, { label: '比较方法：比较“现期量÷基期量”（n相同）' }]
            }, {
                label: '混合增长率',
                children: [{ label: '识别：部分增速与总体增速之间的关系' }, { label: '口诀：居中但不中，偏向基期较大的' }]
            }];
            self.$set(self.summary, 'd10', data);
        },

        // 总结11内容(简单计算)
        getSummary11: function getSummary11() {
            var self = this;
            var data = [{
                label: '直接找数',
                children: [{ label: '注意范围等表述陷阱' }]
            }, {
                label: '简单加减',
                children: [{ label: '选项与材料精度相同：尾数法' }, { label: '选项与材料精度不同：估算' }]
            }, {
                label: '排序题',
                children: [{ label: '时间、单位、主体、顺序' }]
            }];
            self.$set(self.summary, 'd11', data);
        },

        // 总结12内容(词的辨析)
        getSummary12: function getSummary12() {
            var self = this;
            var data = [{
                label: '词义侧重：辨析方法',
                children: [{ label: '第一种：拆字组词：用不一样的字单独组词' }, { label: '第二种：整词搭配：用整个词进行组词搭配' }]
            }, {
                label: '固定搭配',
                children: [{
                    label: '搭配一个词：瞻前顾后找准搭配对象'
                }, {
                    label: '搭配多个词',
                    children: [{ label: '横线所填词语搭配由“和”“及”“与”引导的并列结构' }, { label: '需与并列结构搭配恰当' }]
                }]
            }, {
                label: '程度轻重',
                children: [{
                    label: '区分词的程度轻重',
                    children: [{ label: '程度轻：大相径庭：相差很大，相差很多' }, { label: '程度重：截然不同：完全相反，完全不同' }]
                }, {
                    label: '理论要点：所填词语的程度轻重与文段意思的轻重保持一致'
                }]
            }, {
                label: '感情色彩',
                children: [{
                    label: '区分词的感情色彩',
                    children: [{ label: '褒义：成果' }, { label: '贬义：后果' }, { label: '中性：结果' }]
                }, { label: '理论要点：所填词语的感情色彩与文段的感情色彩保持一致' }]
            }];
            self.$set(self.summary, 'd12', data);
        },

        // 总结13内容(语境分析)
        getSummary13: function getSummary13() {
            var self = this;
            var data = [{
                label: '关联关系',
                children: [{
                    label: '转折',
                    children: [{ label: '标志词：但是、然而、却等' }, { label: '理论要点：前后语义相反' }]
                }, {
                    label: '递进',
                    children: [{ label: '标志词：而且、甚至、更等' }, { label: '理论要点：语义程度前轻后重' }]
                }, {
                    label: '并列',
                    children: [{
                        label: '标志词：而且、甚至、更等',
                        children: [{ label: '同义并列：顿号（、）、逗号（，）' }, { label: '反义并列：不是……而是……、是……不是……、相反、反之等' }]
                    }, { label: '理论要点：同义并列连接前后语义相近；反义并列连接前后语义相反' }, { label: '提示：相同句式也可表示并列' }]
                }]
            }, {
                label: '对应关系',
                children: [{
                    label: '解释类对应',
                    children: [{ label: '题干特点：分句， ，分句' }, { label: '标志词：即、就是、可以说、可谓、无异于、比如、例如等' }, { label: '标点：冒号（：）、破折号（——）' }]
                }, {
                    label: '重点词句对应',
                    children: [{ label: '重点词：指代词、主题词、形象表达' }, { label: '重点句：完整语句' }]
                }, {
                    label: '提示',
                    children: [{ label: '找准对应关系，要基于对整个文段意思的理解与把握' }]
                }]
            }];
            self.$set(self.summary, 'd13', data);
        },

        // 画图
        drawLine: function drawLine(elId) {
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echarts.init(document.getElementById(elId));
            // 绘制图表
            myChart.setOption({
                title: { text: '在Vue中使用echarts' },
                tooltip: {},
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });
        }
    }
});

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            mymsg: '这是第二个页面哦~',
            summary: {
                d1: [],
                d2: [],
                d3: [],
                d4: [],
                d5: [],
                d6: [],
                d7: [],
                d8: [],
                d9: [],
                d10: [],
                d11: [],
                d12: [],
                d13: [],
                d14: []
            },
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            sectionOpen: {}
        };
    },
    created: function created() {},
    mounted: function mounted() {
        var self = this;
        if (self.commonsVariable.isMathjaxConfig) {
            //判断是否初始配置，若无则配置。
            self.commonsVariable.initMathjaxConfig();
        }
        self.commonsVariable.MathQueue('pdf04');
    },

    methods: {
        sectionOpenClose: function sectionOpenClose(sectionNum) {
            var self = this;
            self.$set(self.sectionOpen, sectionNum, !self.sectionOpen[sectionNum]);
        },

        // 初始化数据
        initData: function initData() {
            var self = this;
            self.getSummary1();
            self.getSummary2();
            self.getSummary3();
            self.getSummary4();
            self.getSummary5();
            self.getSummary6();
            self.getSummary7();
            self.getSummary8();
            self.getSummary9();
            self.getSummary10();
            self.getSummary11();
            self.getSummary12();
            self.getSummary13();
        },

        // 总结1内容(截位直除)
        getSummary1: function getSummary1() {
            var self = this;
            var data = [{
                label: '截谁',
                children: [{ label: '一步除法：建议只截分母' }, { label: '多步计算：建议上下都截' }]
            }, {
                label: '截几位',
                children: [{
                    label: '选项差距大，截两位',
                    children: [{ label: '选项首位不同' }, { label: '选项首位相同，次位差大于首位' }]
                }, { label: '选项差距小，截三位：选项首位相同且次位差小于等于首位' }]
            }];
            self.$set(self.summary, 'd1', data);
        },

        // 总结2内容(分数比较)
        getSummary2: function getSummary2() {
            var self = this;
            var data = [{
                label: '一大一小直接看',
                children: [{ label: '根据分子比大小' }, { label: '分子大的分数大，分子小的分数小' }]
            }, {
                label: '同大同小',
                children: [{ label: '竖着直接除' }, { label: '横着看速度' }, { label: '横竖哪个好看看哪个' }]
            }];
            self.$set(self.summary, 'd2', data);
        },

        // 总结3内容(材料阅读)
        getSummary3: function getSummary3() {
            var self = this;
            var data = [{
                label: '文字材料',
                children: [{ label: '标记段落主题词，与题干进行匹配' }, { label: '注意相近词、时间、单位等' }]
            }, {
                label: '表格材料',
                children: [{ label: '横纵标目、标题、单位、备注' }]
            }, {
                label: '图形材料',
                children: [{ label: '标题、单位、图例' }]
            }, {
                label: '结合材料',
                children: [{ label: '不同类型材料之间的关系、材料结构' }]
            }];
            self.$set(self.summary, 'd3', data);
        },

        // 总结4内容(基期与现期)
        getSummary4: function getSummary4() {
            var self = this;
            var data = [{
                label: '基期量',
                children: [{ label: '识别：求前面某个时期的量' }, { label: '公式：基期量=现期量-增长量； 基期量=现期量÷(1+r)' }, { label: '速算：r大截位直除，r小化除为乘' }, { label: '基期和差：先用现期量和正负排除再计算' }]
            }, {
                label: '现期量',
                children: [{ label: '识别：求后面某个时期的量' }, { label: '公式：现期量=基期量+增长量； 现期量=基期量×(1+r)' }, { label: '速算：截位计算，特殊数字' }]
            }];
            self.$set(self.summary, 'd4', data);
        },

        // 总结5内容(一般增长率)
        getSummary5: function getSummary5() {
            var self = this;
            var data = [{
                label: '计算',
                children: [{ label: '识别：增长/下降+%，乘，倍；增长最快/慢' }, {
                    label: '方法：',
                    children: [{ label: '给百分点，直接加减' }, { label: '无百分点，r=增长量÷基期量' }]
                }, { label: '速算：截位直除' }]
            }, {
                label: '比较',
                children: [{ label: '识别：增长最快/慢；增长率最高/低' }, {
                    label: '方法：',
                    children: [{ label: '现期量÷基期量≥2，比较“现期量÷基期量”' }, { label: '现期量÷基期量＜2，比较“增长量÷基期量”' }]
                }, { label: '速算：分数比较法' }]
            }];
            self.$set(self.summary, 'd5', data);
        },

        // 总结6内容(并列关系)
        getSummary6: function getSummary6() {
            var self = this;
            var data = [{
                label: '计算',
                children: [{ label: '识别：增长+单位（人/元/吨）' }, {
                    label: '公式',
                    children: [{ label: '增长量=现期量-基期量=基期量×r=`((现期量)/(1+r))×r`' }, { label: '年均增长量=(现期量-基期量)÷年份差' }]
                }, {
                    label: '速算',
                    children: [{ label: '百分数化分数：近似转化、区中转化、倍数转化' }, { label: '若|r|≈`1/N`，增长量≈`(现期量)/(N+1)`；下降量≈`(现期量)/(N-1)`' }]
                }, {
                    label: '比较',
                    children: [{ label: '识别：增长最多/少' }, {
                        label: '速算',
                        children: [{ label: '给出每年数据：直接两两相减，柱状图还可用直尺标注' }, { label: '给出现期量和r：两者都大则增量必然大，否则百分化计算' }]
                    }]
                }]
            }];
            self.$set(self.summary, 'd6', data);
        },

        // 总结7内容(比重)
        getSummary7: function getSummary7() {
            var self = this;
            var data = [{
                label: '现期比重',
                children: [{ label: '识别：问题时间和材料一致，占，比重' }, { label: '公式：比重=`(部分)/(总体)`；总体=`(部分)/(比重)`；部分=总体×比重' }, { label: '速算：截位直除' }]
            }, {
                label: '基期比重',
                children: [{ label: '识别：问题时间在材料之前，占，比重' }, { label: '公式：`A/(1+a)÷B/(1+b)=A/B×(1+b)/(1+a)`' }, { label: '速算：（1）截位直除；（2）先计算现期比重，再判断大小' }]
            }, {
                label: '两期比重',
                children: [{ label: '识别：两个年份，一个比重' }, { label: '公式：`A/B×(a-b)/(1+a)`' }, { label: '升降判断：比较部分与总体增长率，部分大则升、小则降' }, { label: '速算：比重差的绝对值小于增长率之差的绝对值，即`|A/B×(a-b)/(1+a)|＜|a-b|`' }]
            }];
            self.$set(self.summary, 'd7', data);
        },

        // 总结8内容(平均数)
        getSummary8: function getSummary8() {
            var self = this;
            var data = [{
                label: '现期平均数',
                children: [{ label: '识别：问题时间与材料一致+平均（均/每/单位）' }, { label: '公式：平均数=总数÷个数  后面÷前面' }, { label: '技巧：（1）截位直除；（2）削峰填谷' }]
            }, {
                label: '基期平均数',
                children: [{ label: '识别：问题时间在材料之前+平均（均/每/单位）' }, { label: '公式：`A/(1+a)÷B/(1+b)=A/B×(1+b)/(1+a)`' }, { label: '速算：（1）截位直除；（2）先计算现期平均数，再判断大小' }]
            }, {
                label: '两期平均数',
                children: [{ label: '识别：问题中涉及两个时间+平均（均/每/单位）' }, { label: '升降判断：看分子、分母增长率，分子大则升、小则降' }, {
                    label: '平均数的增长率',
                    children: [{ label: '（1）先找出分子的增速a和分母的增速b' }, { label: '（2）代入公式：`(a-b)/(1+b)`' }]
                }]
            }];
            self.$set(self.summary, 'd8', data);
        },

        // 总结9内容(倍数)
        getSummary9: function getSummary9() {
            var self = this;
            var data = [{
                label: '现期倍数',
                children: [{ label: '识别：问题时间与材料一致，A是B的多少倍' }, { label: '公式：A÷B' }, { label: '速算：截位直除' }]
            }, {
                label: '基期倍数',
                children: [{ label: '识别：问题时间在材料之前，A是B的所少倍' }, { label: '公式：`A/(1+a)÷B/(1+b)=A/B×(1+b)/(1+a)`' }, { label: '速算：（1）截位直除；（2）先算现期倍数，再判断大小' }]
            }, {
                label: '倍数与增长',
                children: [{ label: 'A是B的n倍：n=A÷B' }, { label: 'A比B增长（多）r倍：r=A÷B-1' }]
            }];
            self.$set(self.summary, 'd9', data);
        },

        // 总结10内容(特殊增长率)
        getSummary10: function getSummary10() {
            var self = this;
            var data = [{
                label: '间隔增长率',
                children: [{ label: '识别：中间隔一年求增长率' }, { label: '公式：`r_(间隔)=r_1+r_2+r_1×r_2`' }, {
                    label: '速算：',
                    children: [{ label: '（1）`r_1`、`r_2`绝对值均小于10%，结合选项`r_1×r_2`可忽略' }, { label: '（2）百分化' }]
                }]
            }, {
                label: '年均增长率',
                children: [{ label: '识别：年均增长最快、年均增速排序' }, { label: '公式：`(1+r)^n=现期量÷基期量`' }, { label: '比较方法：比较“现期量÷基期量”（n相同）' }]
            }, {
                label: '混合增长率',
                children: [{ label: '识别：部分增速与总体增速之间的关系' }, { label: '口诀：居中但不中，偏向基期较大的' }]
            }];
            self.$set(self.summary, 'd10', data);
        },

        // 总结11内容(简单计算)
        getSummary11: function getSummary11() {
            var self = this;
            var data = [{
                label: '直接找数',
                children: [{ label: '注意范围等表述陷阱' }]
            }, {
                label: '简单加减',
                children: [{ label: '选项与材料精度相同：尾数法' }, { label: '选项与材料精度不同：估算' }]
            }, {
                label: '排序题',
                children: [{ label: '时间、单位、主体、顺序' }]
            }];
            self.$set(self.summary, 'd11', data);
        },

        // 总结12内容(词的辨析)
        getSummary12: function getSummary12() {
            var self = this;
            var data = [{
                label: '词义侧重：辨析方法',
                children: [{ label: '第一种：拆字组词：用不一样的字单独组词' }, { label: '第二种：整词搭配：用整个词进行组词搭配' }]
            }, {
                label: '固定搭配',
                children: [{
                    label: '搭配一个词：瞻前顾后找准搭配对象'
                }, {
                    label: '搭配多个词',
                    children: [{ label: '横线所填词语搭配由“和”“及”“与”引导的并列结构' }, { label: '需与并列结构搭配恰当' }]
                }]
            }, {
                label: '程度轻重',
                children: [{
                    label: '区分词的程度轻重',
                    children: [{ label: '程度轻：大相径庭：相差很大，相差很多' }, { label: '程度重：截然不同：完全相反，完全不同' }]
                }, {
                    label: '理论要点：所填词语的程度轻重与文段意思的轻重保持一致'
                }]
            }, {
                label: '感情色彩',
                children: [{
                    label: '区分词的感情色彩',
                    children: [{ label: '褒义：成果' }, { label: '贬义：后果' }, { label: '中性：结果' }]
                }, { label: '理论要点：所填词语的感情色彩与文段的感情色彩保持一致' }]
            }];
            self.$set(self.summary, 'd12', data);
        },

        // 总结13内容(语境分析)
        getSummary13: function getSummary13() {
            var self = this;
            var data = [{
                label: '关联关系',
                children: [{
                    label: '转折',
                    children: [{ label: '标志词：但是、然而、却等' }, { label: '理论要点：前后语义相反' }]
                }, {
                    label: '递进',
                    children: [{ label: '标志词：而且、甚至、更等' }, { label: '理论要点：语义程度前轻后重' }]
                }, {
                    label: '并列',
                    children: [{
                        label: '标志词：而且、甚至、更等',
                        children: [{ label: '同义并列：顿号（、）、逗号（，）' }, { label: '反义并列：不是……而是……、是……不是……、相反、反之等' }]
                    }, { label: '理论要点：同义并列连接前后语义相近；反义并列连接前后语义相反' }, { label: '提示：相同句式也可表示并列' }]
                }]
            }, {
                label: '对应关系',
                children: [{
                    label: '解释类对应',
                    children: [{ label: '题干特点：分句， ，分句' }, { label: '标志词：即、就是、可以说、可谓、无异于、比如、例如等' }, { label: '标点：冒号（：）、破折号（——）' }]
                }, {
                    label: '重点词句对应',
                    children: [{ label: '重点词：指代词、主题词、形象表达' }, { label: '重点句：完整语句' }]
                }, {
                    label: '提示',
                    children: [{ label: '找准对应关系，要基于对整个文段意思的理解与把握' }]
                }]
            }];
            self.$set(self.summary, 'd13', data);
        }
    }
});

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            mymsg: '这是第二个页面哦~',
            summary: {
                d1: [],
                d2: [],
                d3: [],
                d4: [],
                d5: [],
                d6: [],
                d7: [],
                d8: [],
                d9: []
            },
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            sectionOpen: {}
        };
    },
    created: function created() {
        this.initData();
    },
    mounted: function mounted() {
        var self = this;
        if (self.commonsVariable.isMathjaxConfig) {
            //判断是否初始配置，若无则配置。
            self.commonsVariable.initMathjaxConfig();
        }
        self.commonsVariable.MathQueue('pdf05');
    },

    methods: {
        sectionOpenClose: function sectionOpenClose(sectionNum) {
            var self = this;
            self.$set(self.sectionOpen, sectionNum, !self.sectionOpen[sectionNum]);
        },

        // 初始化数据
        initData: function initData() {
            var self = this;
            self.getSummary1();
            self.getSummary2();
            self.getSummary3();
            self.getSummary4();
            self.getSummary5();
            self.getSummary6();
            self.getSummary7();
            self.getSummary8();
            self.getSummary9();
        },

        // 总结1内容(代入排除法)
        getSummary1: function getSummary1() {
            var self = this;
            var data = [{
                label: '1.范围：',
                children: [{ label: '（1）典型题：多位数（例 1，个位、十位变化）、年龄（例 2，已知四个人的年龄情况）、不定方程（例 3）、余数（例 3）。' }, { label: '（2）看选项：选项为一组数（例 4）。' }, { label: '（3）剩两项：只剩两项时，代入一项即得答案，假设选项为 A.3、B.4、C.5、D.6，根据偶数排除 A、C 项，代入一项即得答案，B 项正确则 B 项当选，B 项错误即 D 项当选，即剩二代一。' }]
            }, {
                label: '2.方法：',
                children: [{ label: '（1）优先排除：尾数（几百+几千的结果不是 3 个 0）、奇偶（偶数*任何数=偶数）、倍数（使用最多、切入点多，从整除、余数、比例都可切入）。' }, { label: '（2）直接代入：最值（问最大，从大的开始代，可能有 2 个选项满足题干，需要选其中最大的，若从小往大代入可能会选择了较小的错误选项；问最小从小的代）、好算（整千、整百，有零头的难算）。' }]
            }];
            self.$set(self.summary, 'd1', data);
        },

        // 总结2内容(倍数特性法)
        getSummary2: function getSummary2() {
            var self = this;
            var data = [{
                label: '.基础知识：',
                children: [{ label: '（1）当 B、C 为整数时，如果 A=B*C，则 A 能被 B、C 整除，用于三量关系、平均数的题目中。' }, { label: '（2）口诀：3、9 看各位数字之和，4 看末两位，5 看末位。8*125=1000，几千、几万的数一定可以被 8、125 整除，8、125 的倍数只看末三位。' }, { label: '（3）因式分解：12=3*4≠2*6，分解时必须互质。' }, { label: '（4）拆分：拆成两个数的和或差。' }]
            }, {
                label: '余数型：',
                children: [{ label: '（1）若 y=ax+b，则 y-b 能被 a 整除（多退少补，y=a 的倍数多 b，y 退掉 b 后可以被 a 整除）；若 y=ax-b，则 y+b 能被 a 整除。' }, { label: '（2）前提：a、x 均为整数。' }]
            }, {
                label: '3.比例型：条件中存在比例（m/n、m：n、%、倍），问题与比例有关，问分子或分母。',
                children: [{ label: '（1）若 A/B=m/n，则 A 是 m 的倍数，B 是 n 的倍数。A±B 是 m±n 的倍数。' }, { label: '（2）前提：A、B 均为整数，m/n 是最简整数比。' }]
            }];
            self.$set(self.summary, 'd2', data);
        },

        // 总结3内容(方程法)
        getSummary3: function getSummary3() {
            var self = this;
            var data = [{
                label: '普通方程：设 x',
                children: [{ label: '（1）设小不设大（避免分数）。' }, { label: '（2）设中间量（方便列式）。' }, { label: '（3）求谁设谁（避免陷阱）。' }]
            }, {
                label: '不定方程：代入排除。',
                children: [{ label: '（1）奇偶特性，系数一奇一偶。' }, { label: '（2）倍数特性：系数与常数有公因子。' }, { label: '（3）尾数特性：系数尾数为 5 或 0。' }, { label: '（4）直接代入选项。' }]
            }, {
                label: '不定方程组：',
                children: [{ label: '（1）未知数一定是整数，有限解，用消元。' }, { label: '（2）未知数不一定是整数，用特值法（一般赋 0）。例 3 中人数是整数，为有限解，不能用赋零法。' }]
            }];
            self.$set(self.summary, 'd3', data);
        },

        // 总结4内容(工程问题)
        getSummary4: function getSummary4() {
            var self = this;
            var data = [{
                label: '给完工时间型：给多个完成工作的时间。',
                children: [{ label: '（1）先赋总量（公倍数）。' }, { label: '（2）再算效率=总量/时间。' }, { label: '（3）根据工作过程列方程。' }]
            }, {
                label: '给效率比例型：可能是直接给效率关系，或者间接给效率关系。',
                children: [{ label: '（1）先赋效率（满足比例即可）。' }, { label: '（2）再算总量=效率*时间。' }, { label: '（3）根据工作过程列方程。' }]
            }, {
                label: '给具体单位型：设未知数，找等量关系列方程。'
            }, {
                label: '其他工程：同时开始同时结束，整体分析。不是看细节，而是先分析整体的工作量、效率和，得到整体的时间。'
            }];
            self.$set(self.summary, 'd4', data);
        },

        // 总结5内容(行程问题)
        getSummary5: function getSummary5() {
            var self = this;
            var data = [{
                label: '普通行程',
                children: [{ label: '（1）路程=速度*时间（S=V*t）。' }, { label: '（2）火车过桥：路程=车长+桥长。' }, {
                    label: '（3）平均速度：',
                    children: [{ label: '①总路程/总时间。' }, { label: '②等距离平均速度=`(2*V_1*V_2)/(V_1+V_2)`。' }]
                }]
            }, {
                label: '相对行程',
                children: [{
                    label: '（1）相遇追及：不管是环形还是直线，公式右半部分是没有任何区别，区别在于左边，直线上是两点之间的距离或者追及的距离，环形上就是几圈。',
                    children: [{ label: '①相遇（反向）：`S_和=V_和*t`。' }, { label: '②追及（同向）：`S_差=V_差*t`。' }]
                }, {
                    label: '（2）多次运动',
                    children: [{ label: '①线形两端出发第 n 次相遇：`（2n-1）*S=V_和*t`；线形同端出发第 n 次相遇：`2n*S=V_和*t`（假设甲、乙从 A 点出发，甲走的快，甲先到达 B 点后返回，然后与乙相遇，此时两人的路程和是 2 个全程，第二次相遇两人的路程和是 4 个全程）。' }, { label: '②环形第 n 次相遇：`n 圈=V_和*t`。' }, { label: '③环形第 n 次追及：`n 圈=V_差*t`。' }]
                }, {
                    label: '（3）顺水、逆水：',
                    children: [{ label: '①顺水：`S=（V_船+V_水）*t_顺`。' }, { label: '②逆水：`S=（V_船-V_水）*t_逆`。' }]
                }]
            }, {
                label: '比例行程',
                children: [{ label: '（1）S 一定，V、t 成反比。' }, { label: '（2）V 一定，S、t 成正比。' }, { label: '（3）t 一定，S、V 成正比。' }]
            }];
            self.$set(self.summary, 'd5', data);
        },

        // 总结6内容(经济利润问题)
        getSummary6: function getSummary6() {
            var self = this;
            var data = [{
                label: '基础经济：',
                children: [{
                    label: '（1）常见公式：',
                    children: [{ label: '①利润=售价-进价。' }, { label: '②利润率=利润/进价。' }, { label: '③折扣=折后价/折前价。' }, { label: '④总价=单价*个数。' }]
                }, {
                    label: '（2）解题方法：方程法（例 1～例 3）、赋值法（例 4、例 5）'
                }]
            }, {
                label: '分段计费：',
                children: [{
                    label: '（1）常见题型：水电费（例 6）、出租车费、税费（例 7）。'
                }, {
                    label: '（2）解题方法：分段计费、汇总求和。例 8 是对比求差问题。'
                }]
            }];
            self.$set(self.summary, 'd6', data);
        },

        // 总结7内容(最值问题)
        getSummary7: function getSummary7() {
            var self = this;
            var data = [{
                label: '函数最值：往往出现在经济利润问题。',
                children: [{
                    label: '（1）特征：',
                    children: [{ label: '①单价和数量此消彼长。' }, { label: '②求最大利润或售价。' }]
                }, { label: '（2）方法：两点式。令两个括号为 0，求出 `x_1`、`x_2`，`x=(x_1+x_2)/2`。' }]
            }, {
                label: '构造数列：',
                children: [{
                    label: '（1）特征：某个主体最多/最少；排名第几……最……。'
                }, {
                    label: '（2）方法：',
                    children: [{ label: '①构造一个名次。' }, { label: '②求谁设谁。' }, { label: '③反向推其他。' }, { label: '④加和求解。' }]
                }, {
                    label: '（3）注意：',
                    children: [{ label: '①答案非整数时：问最少向上取整、问最多向下取整。' }, { label: '②条件中是否给出主体个数互不相同。如果没有说明互不相同，则可以并列。' }]
                }]
            }, {
                label: '最不利构造：',
                children: [{ label: '（1）特征：至少……保证……，吉林可能直接问“最多”。' }, { label: '（2）方法：最倒霉的情况+1。' }]
            }];
            self.$set(self.summary, 'd7', data);
        },

        // 总结8内容(容斥原理)
        getSummary8: function getSummary8() {
            var self = this;
            var data = [{
                label: '公式：',
                children: [{ label: '（1）两集合：A+B-A∩B=总数-都不。' }, {
                    label: '（2）三集合：',
                    children: [{ label: '①标准型：A+B+C-A∩B-A∩C-B∩C+A∩B∩C=总数-都不。' }, { label: '②非标准型：A+B+C-满足两项-满足三项*2=总数-都不。' }, { label: '③常识型：满足一项+满足两项+满足三项=总数-都不。' }]
                }]
            }, {
                label: '.画图：',
                children: [{ label: '（1）画圈圈，标数据。' }, { label: '（2）从里到外，注意去重' }]
            }];
            self.$set(self.summary, 'd8', data);
        },

        // 总结9内容(排列组合与概率)
        getSummary9: function getSummary9() {
            var self = this;
            var data = [{
                label: '排列组合：',
                children: [{
                    label: '（1）概念：',
                    children: [{ label: '①分类用加法（要么„„要么„„）。' }, { label: '②分步用乘法（既„„又„„）。' }, { label: '③有序用排列（不可互换）。举例理解用排列还是组合。' }, { label: '④无序用组合（可以互换）。' }]
                }, {
                    label: '（2）题型：放的两个题型是重要题型，还有环形排列、错位排列、重复剔除、插板法等，都考的较少，会添加到学霸养成课中。',
                    children: [{ label: '①必须相邻：捆绑法，先捆再排。' }, { label: '②不能相邻：插空法，先排再插。' }]
                }, {
                    label: '（3）正难反易：总情况数-反面情况数。'
                }]
            }, {
                label: '2.概率：',
                children: [{ label: '（1）给情况求概率：满足要求的情况数/总情况数。' }, { label: '（2）给概率求概率：分类用加法，分步用乘法。' }, { label: '（3）正难反易：1-反面情况概率。' }]
            }];
            self.$set(self.summary, 'd9', data);
        }
    }
});

/***/ }),
/* 214 */
/***/ (function(module, exports) {

//
//
//
//
//
//

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    components: {},
    data: function data() {
        return {};
    },
    created: function created() {
        this.initData();
    },
    mounted: function mounted() {},

    methods: {
        // 初始化数据
        initData: function initData() {
            var self = this;
        }
    }
});

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    components: {},
    data: function data() {
        return {};
    },
    created: function created() {
        this.initData();
    },
    mounted: function mounted() {},

    methods: {
        // 初始化数据
        initData: function initData() {
            var self = this;
        }
    }
});

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__elWidthChange_vue__ = __webpack_require__(483);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    components: { elWidthChange: __WEBPACK_IMPORTED_MODULE_0__elWidthChange_vue__["a" /* default */] },
    data: function data() {
        return {
            isShowDemo: false,
            activeDemo: ''
        };
    },
    created: function created() {
        this.initData();
    },
    mounted: function mounted() {},

    methods: {
        // 初始化数据
        initData: function initData() {
            var self = this;
        },
        showDemo: function showDemo(demoNum) {
            var self = this;
            self.isShowDemo = true;
            self.activeDemo = demoNum;
            // self.$set(self, 'activeDemo', demoNum);
        },
        backDemoList: function backDemoList() {
            var self = this;
            self.isShowDemo = false;
            self.activeDemo = '';
        }
    }
});

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    components: {},
    data: function data() {
        return {
            isMove: false
        };
    },
    created: function created() {
        this.initData();
    },
    mounted: function mounted() {
        var self = this;
        window.addEventListener('mousemove', this.move);
    },

    methods: {
        // 初始化数据
        initData: function initData() {
            var self = this;
        },
        move: function move(e) {
            var self = this;
            var containerW = self.$refs.container.clientWidth;
            if (self.isMove && e.clientX > 190 && e.clientX <= 390 && containerW > 450) {
                self.$refs.cover.style.display = 'block';
                self.$refs.left.style.width = e.clientX + 'px';
                self.$refs.cover.style.width = containerW - e.clientX - 40 + 'px';
            }
        },
        beginMove: function beginMove(e) {
            var self = this;
            self.isMove = true;
            var rightW = self.$refs.right.clientWidth;
            self.$refs.cover.style.display = 'block';
            self.$refs.cover.style.width = rightW - 40 + 'px';
        },
        stopMove: function stopMove(e) {
            var self = this;
            self.isMove = false;
            var containerW = self.$refs.container.clientWidth;
            self.$refs.left.style.width = e.clientX + 'px';
            self.$refs.cover.style.display = 'none';
            self.$refs.right.style.width = containerW - e.clientX + 'px';
        }
    }
});

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__elWidthChange_vue__ = __webpack_require__(489);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    components: { elWidthChange: __WEBPACK_IMPORTED_MODULE_0__elWidthChange_vue__["a" /* default */] },
    data: function data() {
        return {
            isShowDemo: false,
            activeDemo: ''
        };
    },
    created: function created() {
        this.initData();
    },
    mounted: function mounted() {},

    methods: {
        // 初始化数据
        initData: function initData() {
            var self = this;
        },
        showDemo: function showDemo(demoNum) {
            var self = this;
            self.isShowDemo = true;
            self.activeDemo = demoNum;
            // self.$set(self, 'activeDemo', demoNum);
        },
        backDemoList: function backDemoList() {
            var self = this;
            self.isShowDemo = false;
            self.activeDemo = '';
        }
    }
});

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    components: {},
    data: function data() {
        return {
            isMove: false
        };
    },
    created: function created() {
        this.initData();
    },
    mounted: function mounted() {
        var self = this;
        window.addEventListener('mousemove', this.move);
    },

    methods: {
        // 初始化数据
        initData: function initData() {
            var self = this;
        },
        move: function move(e) {
            var self = this;
            var containerW = self.$refs.container.clientWidth;
            if (self.isMove && e.clientX > 190 && e.clientX <= 390 && containerW > 450) {
                self.$refs.cover.style.display = 'block';
                self.$refs.left.style.width = e.clientX + 'px';
                self.$refs.cover.style.width = containerW - e.clientX - 40 + 'px';
            }
        },
        beginMove: function beginMove(e) {
            var self = this;
            self.isMove = true;
            var rightW = self.$refs.right.clientWidth;
            self.$refs.cover.style.display = 'block';
            self.$refs.cover.style.width = rightW - 40 + 'px';
        },
        stopMove: function stopMove(e) {
            var self = this;
            self.isMove = false;
            var containerW = self.$refs.container.clientWidth;
            self.$refs.left.style.width = e.clientX + 'px';
            self.$refs.cover.style.display = 'none';
            self.$refs.right.style.width = containerW - e.clientX + 'px';
        }
    }
});

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__travel01_vue__ = __webpack_require__(495);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    components: { travel01: __WEBPACK_IMPORTED_MODULE_0__travel01_vue__["a" /* default */] },
    data: function data() {
        return {
            isShowList: true,
            active: ''
        };
    },
    created: function created() {
        this.initData();
    },
    mounted: function mounted() {},

    methods: {
        // 初始化数据
        initData: function initData() {
            var self = this;
        },
        showOne: function showOne(demoNum) {
            var self = this;
            self.isShowList = false;
            self.active = demoNum;
            // self.$set(self, 'active', demoNum);
        },
        backList: function backList() {
            var self = this;
            self.isShowList = true;
            self.active = '';
        }
    }
});

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    components: {},
    data: function data() {
        return {
            isShowList: true,
            active: ''
        };
    },
    created: function created() {
        this.initData();
    },
    mounted: function mounted() {},

    methods: {
        // 初始化数据
        initData: function initData() {
            var self = this;
        }
    }
});

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__version01_vue__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__version02_vue__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__version03_vue__ = __webpack_require__(507);
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
    components: { version01: __WEBPACK_IMPORTED_MODULE_0__version01_vue__["a" /* default */], version02: __WEBPACK_IMPORTED_MODULE_1__version02_vue__["a" /* default */], version03: __WEBPACK_IMPORTED_MODULE_2__version03_vue__["a" /* default */] },
    data: function data() {
        return {
            isShowList: true,
            active: '',
            workExperienceData: [],
            projectData: []
        };
    },
    created: function created() {
        this.initData();
    },
    mounted: function mounted() {},

    methods: {
        // 初始化数据
        initData: function initData() {
            var self = this;
            self.getWorkData();
            self.getProjectData();
        },
        getWorkData: function getWorkData() {
            var self = this;
            self.workExperienceData = [{ time: '2018-10 至今', company: '上海易宝软件有限公司深圳分公司', post: 'Web 前端开发工程师', size: 'large', color: '#4285F4' }, { time: '2018-03 至 2018-09', company: '深圳市零壹金数据科技有限公司', post: 'Web 前端开发工程师', color: '#EA4335' }, { time: '2017-10 至 2018-02', company: '深圳市更元科技有限公司', post: 'Web 前端开发工程师', color: '#FBBC05' }, { time: '2015-12 至 2017-09', company: '天津天地伟业科技有限公司', post: 'Web 前端开发工程师', color: '#34A853' }];
        },
        getProjectData: function getProjectData() {
            var self = this;
            self.projectData = [{ time: '2020-05 至今', name: '文档结构化', post: 'web 前端开发', discript: '', workContent: '', size: 'large', color: '#4285F4' }, { time: '2019-02 至今', name: 'DFX系统平台（工作空间服务）', post: 'web 前端开发', discript: '', workContent: '', size: 'large', color: '#4285F4' }, { time: '2019-02 至今', name: 'DFX系统平台（项目服务）', post: 'web 前端开发', discript: '', workContent: '', size: 'large', color: '#4285F4' }, { time: '2019-02 至今', name: 'DFX系统平台（组件服务）', post: 'web 前端开发', discript: '', workContent: '', size: 'large', color: '#4285F4' }, { time: '2019-07 至今', name: '多样性管理服务平台', post: 'web 前端开发', discript: '主要是管理各产品信息实时查查看各产品的状态轨迹图，通过自动和手动同步 SBOM、EBOM，实时查看 SBOM、EBOM 对应编码的发货量信息。', workContent: '参与需求澄清，输出 story 和 todoList，参与 story 串讲和反串讲，参与测试用例评审，并进行功能开发。', size: 'large', color: '#4285F4' }, { time: '2019-07 至 2019-08', name: '产品配置', post: 'web 前端开发', discript: '基于产品、编码、同步 PDM 物料信息进行配置整合。对已有逻辑规则提交评审，启动评审流程，有专家和主审人进行评审，给出评审意见。', workContent: '参与需求澄清，输出 story 和 todoList，参与 story 串讲和反串讲，参与测试用例评审，并进行功能开发。', size: 'large', color: '#4285F4' }, { time: '2018-10 至今', name: '华为公司内部技术标准规范库', post: 'web 前端开发', discript: '规范华为公司内部技术标准规范的管理，指导内部规范的需求、规划、制定、发布、实施、维护等全生命周期活动，形成内部规范端到端的闭环管理机制。 担任角色：web 前端开发', workContent: '参与需求澄清，输出 story 和 todoList，参与 story 串讲和反串讲，参与测试用例评审，并进行功能开发；学习到了 Jalor5 框架。', size: 'large', color: '#4285F4' }, { time: '2018-10 至 2019-07', name: 'DigiSMART 设计平台', post: 'web 前端开发', discript: '建立公司级统一的 DFSC 设计平台（WEB 界面），清晰定义各项可供应性设计活动的输入输出及其关联数据库，支持 step by step 的设计，通过 DFSC 设计平台，实现跨产品线知识共享，指导产品设计人员 step by step 进行可供应性设计，提升设计人员工作效率，实现产品可供应性能力的提升。', workContent: '：参与需求澄清，输出 story 和 todoList，参与 story 串讲和反串讲，参与测试用例评审，并进行功能开发，并对整个平台进行 UI 整改。', size: 'large', color: '#4285F4' }, { time: '2018-06 至 2018-09', name: '国际数字资产交易中心后台', post: 'web 前端开发', discript: '该系统实现基本的运营管理、数据统计、交易查询等功能', workContent: '该系统参与度较低，主要是帮助修改添加一些内容。另外单独做了发行方的移动端页面，和大 BOSS 专用系统', size: 'large', color: '#4285F4' }, { time: '2018-03 至 2018-05', name: '国际区块链 IBC（https://bak.ibcasset.io/）', post: 'web 前端开发', discript: 'IBC 是基于稳定价值货币美元（USD）的数字货币，1IBC=1 美元，用户可以随时使用 IBC 与美元进行 1:1 兑换。国际区块链严格遵守 1:1 准备金保证，即每发行1 个 IBC，其银行账户都会有 1 美元的资金 保障。用户可以在 IBC 平台进行资金查询，以保障透明度。', workContent: '：负责编写前端页面代码及前后台数据交互。主要用到 mui、jquery.localize、artTemplate、bootstrap、clipboard 等插件。该项目适应 PC 端和移动端，第一次使用模板（template），第一次实现多语言切换。', size: 'large', color: '#4285F4' }, { time: '2017-10 至 2018-01', name: '朗威物流系统（http://www.lonways.com）', post: 'web 前端开发', discript: '这是一个货运代理平台，该系统功能主要是实现用户在该平台上下单，可以减少传统手写订单中的失误，用户还可以在该平台上实时查询运费了解该公司及行业动态等。', workContent: '设计并开发系统的页面，及前后端联调。', size: 'large', color: '#4285F4' }, { time: '2017-11 至 2017-12', name: 'LED 灯产品官网（http://wixure.com）', post: 'web 前端开发', discript: '该系统的主要功能是实现公司产品的展示，用户可以在这里查看该公司的所有产品信息及报价，还可以给公司留言、下载产品的相关说明书及相关软件。', workContent: '首次接触 UI 设计工作', size: 'large', color: '#4285F4' }, { time: '2016-10 至 2017-09', name: '功夫中国门户网站（http://www.chinakung.com/）', post: 'web 前端开发', discript: '该平台由三部分组成，即：后台管理系统、PC 端门户网站和手机 APP，其中手机 APP 又包括 android 版和 IOS 版本。该系统是集新闻资讯、赛事直播、直播室聊天、送礼物、发弹幕、视频回放、现场门票购买、特卫预约、学员招募、赛事定制、会员充值、赛事竞猜、词条编写等为一体的门户网站。', workContent: '工作内容/收获：在该项目中我提高了自己的代码可读性，学会了使用百度地图插件，用前端代码实现各种效果，学习到了一些规范。', size: 'large', color: '#4285F4' }, { time: '2015-12 至 2016-07', name: '株洲市城市建设管理及公共信息平台', post: 'web 前端开发', discript: '该项目包括以下几个系统：<br/>（1）节能减排评价与推广平台<br/>（2）节能减排评价与推广平台后台管理系统<br/>（3）建筑工程安监应用平台<br/>（4）燃气信息系统<br/>（5）污水处理信息系统<br/>（6）自来水信息系统<br/>（7）垃圾处理信息系统<br/>（8）平台后台管理系统', workContent: '负责平台展示页面和后台管理系统页面开发部分实现一些简单的动态效果，并实现前后台数据交互。主要用到 easyUI、eCharts、bootstrap 等插件。在该项目的开发中我了解到了什么是插件，学会了使用 easyUI、eCharts 等插件、学会了看 API 文档，更重要的是学会了如何团队合作。', size: 'large', color: '#4285F4' }];
        }
    }
});

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    components: {},
    data: function data() {
        return {
            isShowList: true,
            active: '',
            workExperienceData: [],
            projectData: []
        };
    },
    created: function created() {
        this.initData();
    },
    mounted: function mounted() {},

    methods: {
        // 初始化数据
        initData: function initData() {
            var self = this;
            self.getWorkData();
            self.getProjectData();
        },
        getWorkData: function getWorkData() {
            var self = this;
            self.workExperienceData = [{ time: '2018-10 至今', company: '上海易宝软件有限公司深圳分公司', post: 'Web 前端开发工程师', size: 'large', color: '#4285F4' }, { time: '2018-03 至 2018-09', company: '深圳市零壹金数据科技有限公司', post: 'Web 前端开发工程师', color: '#EA4335' }, { time: '2017-10 至 2018-02', company: '深圳市更元科技有限公司', post: 'Web 前端开发工程师', color: '#FBBC05' }, { time: '2015-12 至 2017-09', company: '天津天地伟业科技有限公司', post: 'Web 前端开发工程师', color: '#34A853' }];
        },
        getProjectData: function getProjectData() {
            var self = this;
            self.projectData = [{ time: '2020-05 至今', name: '文档结构化', post: 'web 前端开发', discript: '', workContent: '', size: 'large', color: '#4285F4' }, { time: '2019-02 至今', name: 'DFX系统平台（工作空间服务）', post: 'web 前端开发', discript: '', workContent: '', size: 'large', color: '#4285F4' }, { time: '2019-02 至今', name: 'DFX系统平台（项目服务）', post: 'web 前端开发', discript: '', workContent: '', size: 'large', color: '#4285F4' }, { time: '2019-02 至今', name: 'DFX系统平台（组件服务）', post: 'web 前端开发', discript: '', workContent: '', size: 'large', color: '#4285F4' }, { time: '2019-07 至今', name: '多样性管理服务平台', post: 'web 前端开发', discript: '主要是管理各产品信息实时查查看各产品的状态轨迹图，通过自动和手动同步 SBOM、EBOM，实时查看 SBOM、EBOM 对应编码的发货量信息。', workContent: '参与需求澄清，输出 story 和 todoList，参与 story 串讲和反串讲，参与测试用例评审，并进行功能开发。', size: 'large', color: '#4285F4' }, { time: '2019-07 至 2019-08', name: '产品配置', post: 'web 前端开发', discript: '基于产品、编码、同步 PDM 物料信息进行配置整合。对已有逻辑规则提交评审，启动评审流程，有专家和主审人进行评审，给出评审意见。', workContent: '参与需求澄清，输出 story 和 todoList，参与 story 串讲和反串讲，参与测试用例评审，并进行功能开发。', size: 'large', color: '#4285F4' }, { time: '2018-10 至今', name: '华为公司内部技术标准规范库', post: 'web 前端开发', discript: '规范华为公司内部技术标准规范的管理，指导内部规范的需求、规划、制定、发布、实施、维护等全生命周期活动，形成内部规范端到端的闭环管理机制。 担任角色：web 前端开发', workContent: '参与需求澄清，输出 story 和 todoList，参与 story 串讲和反串讲，参与测试用例评审，并进行功能开发；学习到了 Jalor5 框架。', size: 'large', color: '#4285F4' }, { time: '2018-10 至 2019-07', name: 'DigiSMART 设计平台', post: 'web 前端开发', discript: '建立公司级统一的 DFSC 设计平台（WEB 界面），清晰定义各项可供应性设计活动的输入输出及其关联数据库，支持 step by step 的设计，通过 DFSC 设计平台，实现跨产品线知识共享，指导产品设计人员 step by step 进行可供应性设计，提升设计人员工作效率，实现产品可供应性能力的提升。', workContent: '：参与需求澄清，输出 story 和 todoList，参与 story 串讲和反串讲，参与测试用例评审，并进行功能开发，并对整个平台进行 UI 整改。', size: 'large', color: '#4285F4' }, { time: '2018-06 至 2018-09', name: '国际数字资产交易中心后台', post: 'web 前端开发', discript: '该系统实现基本的运营管理、数据统计、交易查询等功能', workContent: '该系统参与度较低，主要是帮助修改添加一些内容。另外单独做了发行方的移动端页面，和大 BOSS 专用系统', size: 'large', color: '#4285F4' }, { time: '2018-03 至 2018-05', name: '国际区块链 IBC（https://bak.ibcasset.io/）', post: 'web 前端开发', discript: 'IBC 是基于稳定价值货币美元（USD）的数字货币，1IBC=1 美元，用户可以随时使用 IBC 与美元进行 1:1 兑换。国际区块链严格遵守 1:1 准备金保证，即每发行1 个 IBC，其银行账户都会有 1 美元的资金 保障。用户可以在 IBC 平台进行资金查询，以保障透明度。', workContent: '：负责编写前端页面代码及前后台数据交互。主要用到 mui、jquery.localize、artTemplate、bootstrap、clipboard 等插件。该项目适应 PC 端和移动端，第一次使用模板（template），第一次实现多语言切换。', size: 'large', color: '#4285F4' }, { time: '2017-10 至 2018-01', name: '朗威物流系统（http://www.lonways.com）', post: 'web 前端开发', discript: '这是一个货运代理平台，该系统功能主要是实现用户在该平台上下单，可以减少传统手写订单中的失误，用户还可以在该平台上实时查询运费了解该公司及行业动态等。', workContent: '设计并开发系统的页面，及前后端联调。', size: 'large', color: '#4285F4' }, { time: '2017-11 至 2017-12', name: 'LED 灯产品官网（http://wixure.com）', post: 'web 前端开发', discript: '该系统的主要功能是实现公司产品的展示，用户可以在这里查看该公司的所有产品信息及报价，还可以给公司留言、下载产品的相关说明书及相关软件。', workContent: '首次接触 UI 设计工作', size: 'large', color: '#4285F4' }, { time: '2016-10 至 2017-09', name: '功夫中国门户网站（http://www.chinakung.com/）', post: 'web 前端开发', discript: '该平台由三部分组成，即：后台管理系统、PC 端门户网站和手机 APP，其中手机 APP 又包括 android 版和 IOS 版本。该系统是集新闻资讯、赛事直播、直播室聊天、送礼物、发弹幕、视频回放、现场门票购买、特卫预约、学员招募、赛事定制、会员充值、赛事竞猜、词条编写等为一体的门户网站。', workContent: '工作内容/收获：在该项目中我提高了自己的代码可读性，学会了使用百度地图插件，用前端代码实现各种效果，学习到了一些规范。', size: 'large', color: '#4285F4' }, { time: '2015-12 至 2016-07', name: '株洲市城市建设管理及公共信息平台', post: 'web 前端开发', discript: '该项目包括以下几个系统：<br/>（1）节能减排评价与推广平台<br/>（2）节能减排评价与推广平台后台管理系统<br/>（3）建筑工程安监应用平台<br/>（4）燃气信息系统<br/>（5）污水处理信息系统<br/>（6）自来水信息系统<br/>（7）垃圾处理信息系统<br/>（8）平台后台管理系统', workContent: '负责平台展示页面和后台管理系统页面开发部分实现一些简单的动态效果，并实现前后台数据交互。主要用到 easyUI、eCharts、bootstrap 等插件。在该项目的开发中我了解到了什么是插件，学会了使用 easyUI、eCharts 等插件、学会了看 API 文档，更重要的是学会了如何团队合作。', size: 'large', color: '#4285F4' }];
        }
    }
});

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    components: {},
    data: function data() {
        return {
            isShowList: true,
            active: '',
            workExperienceData: [],
            projectData: []
        };
    },
    created: function created() {
        this.initData();
    },
    mounted: function mounted() {},

    methods: {
        // 初始化数据
        initData: function initData() {
            var self = this;
            self.getWorkData();
            self.getProjectData();
        },
        getWorkData: function getWorkData() {
            var self = this;
            self.workExperienceData = [{ time: '2018-10 至今', company: '上海易宝软件有限公司深圳分公司', post: 'Web 前端开发工程师', size: 'large', color: '#4285F4' }, { time: '2018-03 至 2018-09', company: '深圳市零壹金数据科技有限公司', post: 'Web 前端开发工程师', color: '#EA4335' }, { time: '2017-10 至 2018-02', company: '深圳市更元科技有限公司', post: 'Web 前端开发工程师', color: '#FBBC05' }, { time: '2015-12 至 2017-09', company: '天津天地伟业科技有限公司', post: 'Web 前端开发工程师', color: '#34A853' }];
        },
        getProjectData: function getProjectData() {
            var self = this;
            self.projectData = [{ time: '2020-05 至今', name: '文档结构化', post: 'web 前端开发', discript: '', workContent: '', size: 'large', color: '#4285F4' }, { time: '2019-02 至今', name: 'DFX系统平台（工作空间服务）', post: 'web 前端开发', discript: '', workContent: '', size: 'large', color: '#4285F4' }, { time: '2019-02 至今', name: 'DFX系统平台（项目服务）', post: 'web 前端开发', discript: '', workContent: '', size: 'large', color: '#4285F4' }, { time: '2019-02 至今', name: 'DFX系统平台（组件服务）', post: 'web 前端开发', discript: '', workContent: '', size: 'large', color: '#4285F4' }, { time: '2019-07 至今', name: '多样性管理服务平台', post: 'web 前端开发', discript: '主要是管理各产品信息实时查查看各产品的状态轨迹图，通过自动和手动同步 SBOM、EBOM，实时查看 SBOM、EBOM 对应编码的发货量信息。', workContent: '参与需求澄清，输出 story 和 todoList，参与 story 串讲和反串讲，参与测试用例评审，并进行功能开发。', size: 'large', color: '#4285F4' }, { time: '2019-07 至 2019-08', name: '产品配置', post: 'web 前端开发', discript: '基于产品、编码、同步 PDM 物料信息进行配置整合。对已有逻辑规则提交评审，启动评审流程，有专家和主审人进行评审，给出评审意见。', workContent: '参与需求澄清，输出 story 和 todoList，参与 story 串讲和反串讲，参与测试用例评审，并进行功能开发。', size: 'large', color: '#4285F4' }, { time: '2018-10 至今', name: '华为公司内部技术标准规范库', post: 'web 前端开发', discript: '规范华为公司内部技术标准规范的管理，指导内部规范的需求、规划、制定、发布、实施、维护等全生命周期活动，形成内部规范端到端的闭环管理机制。 担任角色：web 前端开发', workContent: '参与需求澄清，输出 story 和 todoList，参与 story 串讲和反串讲，参与测试用例评审，并进行功能开发；学习到了 Jalor5 框架。', size: 'large', color: '#4285F4' }, { time: '2018-10 至 2019-07', name: 'DigiSMART 设计平台', post: 'web 前端开发', discript: '建立公司级统一的 DFSC 设计平台（WEB 界面），清晰定义各项可供应性设计活动的输入输出及其关联数据库，支持 step by step 的设计，通过 DFSC 设计平台，实现跨产品线知识共享，指导产品设计人员 step by step 进行可供应性设计，提升设计人员工作效率，实现产品可供应性能力的提升。', workContent: '：参与需求澄清，输出 story 和 todoList，参与 story 串讲和反串讲，参与测试用例评审，并进行功能开发，并对整个平台进行 UI 整改。', size: 'large', color: '#4285F4' }, { time: '2018-06 至 2018-09', name: '国际数字资产交易中心后台', post: 'web 前端开发', discript: '该系统实现基本的运营管理、数据统计、交易查询等功能', workContent: '该系统参与度较低，主要是帮助修改添加一些内容。另外单独做了发行方的移动端页面，和大 BOSS 专用系统', size: 'large', color: '#4285F4' }, { time: '2018-03 至 2018-05', name: '国际区块链 IBC（https://bak.ibcasset.io/）', post: 'web 前端开发', discript: 'IBC 是基于稳定价值货币美元（USD）的数字货币，1IBC=1 美元，用户可以随时使用 IBC 与美元进行 1:1 兑换。国际区块链严格遵守 1:1 准备金保证，即每发行1 个 IBC，其银行账户都会有 1 美元的资金 保障。用户可以在 IBC 平台进行资金查询，以保障透明度。', workContent: '：负责编写前端页面代码及前后台数据交互。主要用到 mui、jquery.localize、artTemplate、bootstrap、clipboard 等插件。该项目适应 PC 端和移动端，第一次使用模板（template），第一次实现多语言切换。', size: 'large', color: '#4285F4' }, { time: '2017-10 至 2018-01', name: '朗威物流系统（http://www.lonways.com）', post: 'web 前端开发', discript: '这是一个货运代理平台，该系统功能主要是实现用户在该平台上下单，可以减少传统手写订单中的失误，用户还可以在该平台上实时查询运费了解该公司及行业动态等。', workContent: '设计并开发系统的页面，及前后端联调。', size: 'large', color: '#4285F4' }, { time: '2017-11 至 2017-12', name: 'LED 灯产品官网（http://wixure.com）', post: 'web 前端开发', discript: '该系统的主要功能是实现公司产品的展示，用户可以在这里查看该公司的所有产品信息及报价，还可以给公司留言、下载产品的相关说明书及相关软件。', workContent: '首次接触 UI 设计工作', size: 'large', color: '#4285F4' }, { time: '2016-10 至 2017-09', name: '功夫中国门户网站（http://www.chinakung.com/）', post: 'web 前端开发', discript: '该平台由三部分组成，即：后台管理系统、PC 端门户网站和手机 APP，其中手机 APP 又包括 android 版和 IOS 版本。该系统是集新闻资讯、赛事直播、直播室聊天、送礼物、发弹幕、视频回放、现场门票购买、特卫预约、学员招募、赛事定制、会员充值、赛事竞猜、词条编写等为一体的门户网站。', workContent: '工作内容/收获：在该项目中我提高了自己的代码可读性，学会了使用百度地图插件，用前端代码实现各种效果，学习到了一些规范。', size: 'large', color: '#4285F4' }, { time: '2015-12 至 2016-07', name: '株洲市城市建设管理及公共信息平台', post: 'web 前端开发', discript: '该项目包括以下几个系统：<br/>（1）节能减排评价与推广平台<br/>（2）节能减排评价与推广平台后台管理系统<br/>（3）建筑工程安监应用平台<br/>（4）燃气信息系统<br/>（5）污水处理信息系统<br/>（6）自来水信息系统<br/>（7）垃圾处理信息系统<br/>（8）平台后台管理系统', workContent: '负责平台展示页面和后台管理系统页面开发部分实现一些简单的动态效果，并实现前后台数据交互。主要用到 easyUI、eCharts、bootstrap 等插件。在该项目的开发中我了解到了什么是插件，学会了使用 easyUI、eCharts 等插件、学会了看 API 文档，更重要的是学会了如何团队合作。', size: 'large', color: '#4285F4' }];
        }
    }
});

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    components: {},
    data: function data() {
        return {
            isShowList: true,
            active: '',
            workExperienceData: [],
            projectData: []
        };
    },
    created: function created() {
        this.initData();
    },
    mounted: function mounted() {},

    methods: {
        // 初始化数据
        initData: function initData() {
            var self = this;
            self.getWorkData();
            self.getProjectData();
        },
        getWorkData: function getWorkData() {
            var self = this;
            self.workExperienceData = [{ time: '2018-10 至 2020-10', company: '上海易宝软件有限公司深圳分公司', post: 'Web 前端开发工程师', size: 'large', color: '#4285F4' }, { time: '2017-10 至 2018-09', company: '深圳市零壹金数据科技有限公司', post: 'Web 前端开发工程师', color: '#FBBC05' },
            // {time: '2018-03 至 2018-09', company: '深圳市零壹金数据科技有限公司', post: 'Web 前端开发工程师', color: '#EA4335'},
            // {time: '2017-10 至 2018-02', company: '深圳市更元科技有限公司', post: 'Web 前端开发工程师', color: '#FBBC05'},
            { time: '2015-12 至 2017-09', company: '天津天地伟业科技有限公司', post: 'Web 前端开发工程师', color: '#34A853' }];
            /*
            self.workExperienceData = [
                {time: 'YYYY-MM 至今', company: 'AAAAAAAAAAAA公司', post: 'Web 前端开发工程师', size: 'large', color: '#4285F4'},
                {time: 'YYYY-MM 至 YYYY-MM', company: 'BBBBBBBBBBBBB科技有限公司', post: 'Web 前端开发工程师', color: '#FBBC05'},
                {time: 'YYYY-MM 至 YYYY-MM', company: 'CCCCCCCCCC科技有限公司', post: 'Web 前端开发工程师', color: '#34A853'},
            ];
            */
        },
        getProjectData: function getProjectData() {
            var self = this;
            self.projectData = [{ time: '2020-05 至今', name: '文档结构化', post: 'web 前端开发', discript: '该系统主要实现功能是在线写作，使得文档结构化，可实现多人同时共同编辑同一篇文档。编写完毕后可进行发布供他人在线预览，并作者或管理员可进行后期维护。', workContent: '（1）输出 story 和 todoList，参与 story 串讲和反串讲，参与测试用例评审，进行功能开发（web前端）；并进行 Code Review。<br/>（2）该项目的前端使用 <b>Vue</b> 进行开发的微服务，实现前后台分离。使用 <b>Element UI</b> 为基础组件', size: 'large', color: '#4285F4' },
            // {time: '2019-02 至今', name: 'DFX系统平台（工作空间服务）', post: 'web 前端开发', discript: '', workContent: '', size: 'large', color: '#4285F4'},
            // {time: '2019-02 至今', name: 'DFX系统平台（项目服务）', post: 'web 前端开发', discript: '', workContent: '', size: 'large', color: '#4285F4'},
            // {time: '2019-02 至今', name: 'DFX系统平台（组件服务）', post: 'web 前端开发', discript: '', workContent: '', size: 'large', color: '#4285F4'},
            // {time: '2019-07 至今', name: '多样性管理服务平台', post: 'web 前端开发', discript: '主要是管理各产品信息实时查查看各产品的状态轨迹图，通过自动和手动同步 SBOM、EBOM，实时查看 SBOM、EBOM 对应编码的发货量信息。', workContent: '参与需求澄清，输出 story 和 todoList，参与 story 串讲和反串讲，参与测试用例评审，并进行功能开发。', size: 'large', color: '#4285F4'},
            // {time: '2019-07 至 2019-08', name: '产品配置', post: 'web 前端开发', discript: '基于产品、编码、同步 PDM 物料信息进行配置整合。对已有逻辑规则提交评审，启动评审流程，有专家和主审人进行评审，给出评审意见。', workContent: '参与需求澄清，输出 story 和 todoList，参与 story 串讲和反串讲，参与测试用例评审，并进行功能开发。', size: 'large', color: '#4285F4'},
            { time: '2018-10 至今', name: '华为公司内部技术标准规范库', post: 'web 前端开发', discript: '规范华为公司内部技术标准规范的管理，指导内部规范的需求、规划、制定、发布、实施、维护等全生命周期活动，形成内部规范端到端的闭环管理机制。', workContent: '（1）参与需求澄清，输出 story 和 todoList，参与 story 串讲和反串讲，参与测试用例评审，并进行功能开发。<br/>（2）该项目的前端以华为的 <b>Jalor</b> 框架为基础搭建，Jalor 框架是以 <b>jQuery</b> 框架为基础的。', size: 'large', color: '#4285F4' },
            // {time: '2018-10 至 2019-07', name: 'DigiSMART 设计平台', post: 'web 前端开发', discript: '建立公司级统一的 DFSC 设计平台（WEB 界面），清晰定义各项可供应性设计活动的输入输出及其关联数据库，支持 step by step 的设计，通过 DFSC 设计平台，实现跨产品线知识共享，指导产品设计人员 step by step 进行可供应性设计，提升设计人员工作效率，实现产品可供应性能力的提升。', workContent: '参与需求澄清，输出 story 和 todoList，参与 story 串讲和反串讲，参与测试用例评审，并进行功能开发，并对整个平台进行 UI 整改。', size: 'large', color: '#4285F4'},
            // {time: '2018-06 至 2018-09', name: '国际数字资产交易中心后台', post: 'web 前端开发', discript: '该系统实现基本的运营管理、数据统计、交易查询等功能', workContent: '该系统参与度较低，主要是帮助修改添加一些内容。另外单独做了发行方的移动端页面，和大 BOSS 专用系统', size: 'large', color: '#4285F4'},
            // {time: '2018-03 至 2018-05', name: '国际区块链 IBC', post: 'web 前端开发', discript: 'IBC 是基于稳定价值货币美元（USD）的数字货币，1IBC=1 美元，用户可以随时使用 IBC 与美元进行 1:1 兑换。国际区块链严格遵守 1:1 准备金保证，即每发行1 个 IBC，其银行账户都会有 1 美元的资金 保障。用户可以在 IBC 平台进行资金查询，以保障透明度。', workContent: '：负责编写前端页面代码及前后台数据交互。主要用到 mui、jquery.localize、artTemplate、bootstrap、clipboard 等插件。该项目适应 PC 端和移动端，第一次使用模板（template），第一次实现多语言切换。', size: 'large', color: '#4285F4'},
            // {time: '2017-10 至 2018-01', name: '朗威物流系统', post: 'web 前端开发', discript: '这是一个货运代理平台，该系统功能主要是实现用户在该平台上下单，可以减少传统手写订单中的失误，用户还可以在该平台上实时查询运费了解该公司及行业动态等。', workContent: '设计并开发系统的页面，及前后端联调。', size: 'large', color: '#4285F4'},
            { time: '2017-11 至 2017-12', name: 'LED 灯产品官网', post: 'web 前端开发', discript: '该系统的主要功能是实现公司产品的展示，用户可以在这里查看该公司的所有产品信息及报价，还可以给公司留言、下载产品的相关说明书及相关软件。', workContent: '首次接触 <b>UI</b> 设计工作', size: 'large', color: '#FBBC05' }, { time: '2016-10 至 2017-09', name: '功夫中国门户网站', post: 'web 前端开发', discript: '该平台由三部分组成，即：后台管理系统、PC 端门户网站和手机 APP，其中手机 APP 又包括 android 版和 IOS 版本。该系统是集新闻资讯、赛事直播、直播室聊天、送礼物、发弹幕、视频回放、现场门票购买、特卫预约、学员招募、赛事定制、会员充值、赛事竞猜、词条编写等为一体的门户网站。', workContent: '（1）该项目的前端以 <b>jQuery</b>、<b>Boostrap</b> 为基础进行开发的。<br/>（2）在该项目中我提高了自己的代码可读性，学会了使用<b>百度地图</b>插件，用前端代码实现各种效果，学习到了一些规范。', size: 'large', color: '#34A853' }, { time: '2015-12 至 2016-07', name: '株洲市城市建设管理及公共信息平台', post: 'web 前端开发', discript: '该项目包括以下几个系统：<br/>（1）节能减排评价与推广平台<br/>（2）节能减排评价与推广平台后台管理系统<br/>（3）建筑工程安监应用平台<br/>（4）燃气信息系统<br/>（5）污水处理信息系统<br/>（6）自来水信息系统<br/>（7）垃圾处理信息系统<br/>（8）平台后台管理系统', workContent: '（1）责平台展示页面和后台管理系统页面开发部分实现一些简单的动态效果，并实现前后台数据交互。<br/>（2）主要用到 <b>easyUI</b>、<b>eCharts</b>、<b>bootstrap</b> 等插件。在该项目的开发中我了解到了什么是插件，学会了使用 easyUI、eCharts 等插件、学会了看 API 文档，更重要的是学会了如何团队合作。', size: 'large', color: '#34A853' }];
        }
    }
});

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_vue__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__es6_vue__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vue_vue__ = __webpack_require__(519);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
    components: { js: __WEBPACK_IMPORTED_MODULE_0__js_vue__["a" /* default */], es6: __WEBPACK_IMPORTED_MODULE_1__es6_vue__["a" /* default */], vue: __WEBPACK_IMPORTED_MODULE_2__vue_vue__["a" /* default */] },
    data: function data() {
        return {
            isShowList: false,
            active: 'vue'
        };
    },
    created: function created() {
        this.initData();
    },
    mounted: function mounted() {},

    methods: {
        // 初始化数据
        initData: function initData() {
            var self = this;
        },

        // 
        showOne: function showOne(demoNum) {
            var self = this;
            self.isShowList = false;
            self.active = demoNum;
            // self.$set(self, 'active', demoNum);
        },

        // 返回列表
        backList: function backList() {
            var self = this;
            self.isShowList = true;
            self.active = '';
        },

        // 页面跳转
        goPage: function goPage(pathName) {
            var self = this;
            var routeUrl = self.$router.resolve({
                name: pathName
            });
            window.open(routeUrl.href, '_blank');

            // html 取参  $route.query.id
            // script 取参  this.$route.query.id

            // vue路由跳转有四种方式
            // 1. router-link
            // 2. this.$router.push() (函数里面调用)
            // 3. this.$router.replace() (用法同push)
            // 4. this.$router.go(n)
        }
    }
});

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    components: {},
    data: function data() {
        return {
            activeNames: ['19'],
            isShowList: true,
            active: ''
        };
    },
    created: function created() {},
    mounted: function mounted() {},

    methods: {
        handleChange: function handleChange(val) {
            console.log(val);
        }
    }
});

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    components: {},
    data: function data() {
        return {
            activeNames: ['19'],
            isShowList: true,
            active: ''
        };
    },
    created: function created() {},
    mounted: function mounted() {},

    methods: {
        handleChange: function handleChange(val) {
            console.log(val);
        }
    }
});

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    components: {},
    data: function data() {
        return {
            activeNames: ['19'],
            isShowList: true,
            active: ''
        };
    },
    created: function created() {},
    mounted: function mounted() {},

    methods: {
        handleChange: function handleChange(val) {
            console.log(val);
        }
    }
});

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    components: {},
    data: function data() {
        return {
            showDemo: {},
            stage16: null
        };
    },
    created: function created() {},
    mounted: function mounted() {
        var self = this;
        self.start1();
        self.start2();
        self.start3();
        self.start4();
        self.start5();
        self.start6();
        self.start7();
        self.start8();
        self.start9();
        self.start10();
        self.start11();
        self.start12();
        self.start13();
        self.start14();
        self.start15();
        self.start16();
        self.start17();
        self.start18();
        self.start19();
        self.start20();
        self.start21();
        self.start22();
        self.start23();
        self.start24();
        self.start25();
        self.start26();
        self.start27();
        self.start28();
        self.start29();
        self.start30();
        self.start31();
        self.start32();
        self.start33();
        self.start34();
        self.start35();
        self.start36();
        self.start37();
        self.start38();
    },

    methods: {
        // 初始化数据
        initData: function initData() {
            var self = this;
        },

        // 切换显示demo
        changeDemoState: function changeDemoState(demoNum) {
            var self = this;
            self.$set(self.showDemo, demoNum, !self.showDemo[demoNum]);
        },

        // demo1
        start1: function start1() {
            var self = this;
            // 创建Kinetic舞台，绑定我们添加的<div>容器 
            var stage = new Kinetic.Stage({
                container: 'canvas1', // <div>的id 
                width: 600, //创建的舞台宽度 
                height: 400 //创建的舞台高度 
            });
            // 创建Kinetic用户层
            var layer = new Kinetic.Layer();
            var rect = new Kinetic.Rect({
                x: 200, // 矩形左上角x坐标 
                y: 150, // 矩形左上角y坐标 
                width: 200, // 矩形的宽度 
                height: 100, // 矩形的高度 
                fill: 'red', // 矩形的填充色 
                stroke: 'black', // 矩形边缘线的颜色
                strokeWidth: 4 // 矩形边缘线的宽度
            });
            // 向用户层中添加上面的矩形 
            layer.add(rect);
            // 将上面的用户层添加到舞台上 
            stage.add(layer);
            stage.draw();
        },

        // demo2
        start2: function start2() {
            var self = this;
            var stage = new Kinetic.Stage({
                container: 'canvas2',
                width: 500,
                height: 500
            });
            var circleLayer = new Kinetic.Layer({
                id: 'circleLayer2'
            });
            stage.add(circleLayer);

            var circle = new Kinetic.Circle({
                x: 500 / 2,
                y: 500 / 2,
                radius: 30,
                fill: 'red',
                stroke: 'black',
                strokeWidth: 7,
                name: 'circle',
                draggable: true
            });
            circleLayer.add(circle);
            circleLayer.draw();
            var myJson = stage.toJSON();

            for (var i = 0; i < 1000; i++) {
                stage.destroy();
                stage = Kinetic.Node.create(myJson, 'canvas2');
            }

            console.log("done");
        },

        // demo3
        start3: function start3() {
            var self = this;
            var stage = new Kinetic.Stage({
                container: 'canvas3',
                width: 600,
                height: 400
            });

            var layer = new Kinetic.Layer();

            // 创建一个要加进组中的圆
            var circle = new Kinetic.Circle({
                x: 200,
                y: 100,
                radius: 50,
                fill: 'red'
            });

            // 创建一个要加进组中的矩形
            var rect = new Kinetic.Rect({
                x: 300,
                y: 200,
                width: 100,
                height: 100,
                fill: 'blue'
            });

            // 创建group对象
            var group = new Kinetic.Group({ draggable: true });
            // 把多个图形对象添加到group里
            group.add(circle);
            group.add(rect);
            // 把group对象添加到层里
            layer.add(group);
            // 将层添加到舞台中
            stage.add(layer);
        },

        // demo4
        start4: function start4() {
            var self = this;
            var stage = new Kinetic.Stage({
                container: 'canvas4',
                width: 600,
                height: 400
            });

            var layer = new Kinetic.Layer();
            // 创建第一个矩形对象的config参数
            var config1 = {
                x: 100,
                y: 150,
                width: 100,
                height: 100,
                // 填充色
                fill: 'blue',
                draggable: true
            };

            // 创建第一个矩形对象
            var rect1 = new Kinetic.Rect(config1);
            // 创建第二个矩形对象的config参数
            var config2 = {
                x: 400,
                y: 150,
                width: 100,
                height: 100,
                //填充色
                fill: 'red',
                draggable: true
            };

            // 创建第二个矩形对象
            var rect2 = new Kinetic.Rect(config2);

            // 修改第二个矩形对象的颜色
            rect2.setFill('green');

            layer.add(rect1);
            layer.add(rect2);
            stage.add(layer);
        },

        // demo5
        start5: function start5() {
            var self = this;
            var stage = new Kinetic.Stage({
                container: 'canvas5',
                width: 600,
                height: 400
            });

            var layer = new Kinetic.Layer({ draggable: true });
            // 创建第一个矩形对象的config参数
            var config1 = {
                x: 100,
                y: 50,
                width: 400,
                height: 100,
                //渐变色
                fillLinearGradientStartPoint: { x: 0, y: 50 }, // "填充线性渐变起始点坐标，可以用数组[a,b]或对象{x:a,y:b}来表示",
                // fillLinearGradientStartPointX: "填充线性渐变起始点x坐标",
                // fillLinearGradientStartPointY: "填充线性渐变起始点y坐标",
                fillLinearGradientEndPoint: { x: 400, y: 50 }, //"填充线性渐变终点坐标，可以用数组[a,b]或对象{x:a,y:b}来表示",
                // fillLinearGradientEndPointX: "填充线性渐变终点x坐标",
                // fillLinearGradientEndPointY: "填充线性渐变终点y坐标",
                fillLinearGradientColorStops: [0, "red", 0.5, "green", 1, "blue"] // "填充线性渐变颜色位置数组，[a,colorA,b,colorB]",
            };
            // 创建第一个矩形对象
            var rect1 = new Kinetic.Rect(config1);

            // 创建第二个矩形对象的config参数
            var config2 = {
                x: 100,
                y: 200,
                width: 400,
                height: 100,
                //渐变色
                fillLinearGradientStartPoint: { x: 0, y: 50 },
                fillLinearGradientEndPoint: { x: 400, y: 50 },
                fillLinearGradientColorStops: [0, 'red', 0.5, 'green', 1, 'blue']
            };
            // 创建第二个矩形对象
            var rect2 = new Kinetic.Rect(config2);

            // 修改第二个矩形对象的颜色变化模式
            rect2.setFillLinearGradientStartPoint({ x: 100, y: 50 });
            rect2.setFillLinearGradientEndPoint({ x: 400, y: 50 });
            rect2.setFillLinearGradientColorStops([0, 'yellow', 0.5, 'cyan', 1, 'purple']);
            // setFillLinearGradientColorStops(colorStops)：设置线性渐变位置颜色数组。
            // setFillLinearGradientEndPoint(endPoint)：设置线性渐变终点坐标。
            // setFillLinearGradientEndPointX(x)：设置线性渐变终点横坐标。
            // setFillLinearGradientEndPointY(y)：设置线性渐变终点纵坐标。
            // setFillLinearGradientStartPoint(startPoint)：设置线性渐变起点坐标。
            // setFillLinearGradientStartPointX(x)：设置线性渐变起点横坐标。
            // setFillLinearGradientStartPointY(y)：设置线性渐变起点纵坐标。


            layer.add(rect1);
            layer.add(rect2);
            stage.add(layer);
        },

        // demo6
        start6: function start6() {
            var self = this;
            var stage = new Kinetic.Stage({
                container: 'canvas6',
                width: 600,
                height: 400
            });

            var layer = new Kinetic.Layer({ draggable: true });
            // 创建第一个圆形对象的config参数
            var config1 = {
                x: 150,
                y: 200,
                radius: 100,
                //渐变色
                fillRadialGradientStartPoint: { x: 0, y: 0 }, //"填充径向渐变起始点坐标，可以用数组[a,b]或对象{x:a,y:b}来表示",
                // fillRadialGradientStartPointX: "填充径向渐变起始点x坐标",
                // fillRadialGradientStartPointY: "填充径向渐变起始点y坐标",
                fillRadialGradientEndPoint: { x: 0, y: 0 }, //"填充径向渐变终点坐标，可以用数组[a,b]或对象{x:a,y:b}来表示",
                // fillRadialGradientEndPointX: "填充径向渐变终点x坐标",
                // fillRadialGradientEndPointY: "填充径向渐变终点y坐标",
                fillRadialGradientStartRadius: 0, // "填充径向渐变起始圆半径",
                fillRadialGradientEndRadius: 100, // "填充径向渐变结束圆半径",
                fillRadialGradientColorStops: [0, 'red', 0.5, 'green', 1, 'blue'] // "填充径向渐变颜色位置数组，[a,colorA,b,colorB]",
            };
            // 创建第一个圆形对象
            var circle1 = new Kinetic.Circle(config1);

            // 创建第二个圆形对象的config参数
            var config2 = {
                x: 450,
                y: 200,
                radius: 100,
                //渐变色
                fillRadialGradientStartPoint: { x: 0, y: 0 },
                fillRadialGradientEndPoint: { x: 0, y: 0 },
                fillRadialGradientStartRadius: 0,
                fillRadialGradientEndRadius: 100,
                fillRadialGradientColorStops: [0, 'red', 0.5, 'green', 1, 'blue']
            };
            // 创建第二个圆形对象
            var circle2 = new Kinetic.Circle(config2);

            // 修改第二个圆形对象的颜色变化模式
            circle2.setFillRadialGradientStartPoint({ x: 0, y: 0 }); // ：设置径向渐变起点坐标。
            circle2.setFillRadialGradientStartRadius(0); // ：设置径向渐变起点半径。
            circle2.setFillRadialGradientEndPoint({ x: 0, y: 0 }); // ：设置径向渐变终点坐标。
            circle2.setFillRadialGradientEndRadius(100); // ：设置径向渐变终点半径。
            circle2.setFillRadialGradientColorStops([0, 'yellow', 0.5, 'cyan', 1, 'purple']); // ：设置径向渐变位置颜色数组。
            // setFillRadialGradientEndPointX(x)：设置径向渐变终点横坐标。
            // setFillRadialGradientEndPointY(y)：设置径向渐变终点纵坐标。
            // setFillRadialGradientStartPointX(x)：设置径向渐变起点横坐标。
            // setFillRadialGradientStartPointY(y)：设置径向渐变起点纵坐标。


            layer.add(circle1);
            layer.add(circle2);
            stage.add(layer);
        },

        // demo7
        start7: function start7() {
            var self = this;
            var stage = new Kinetic.Stage({
                container: 'canvas7',
                width: 600,
                height: 400
            });

            var layer = new Kinetic.Layer({ draggable: true });
            // 创建第一个矩形对象的config参数
            var config1 = {
                x: 50,
                y: 100,
                width: 180,
                height: 180
                // 填充图像
                // fillPatternImage: "填充图案",
                // fillPatternX: "填充图案横坐标",
                // fillPatternY: "填充图案纵坐标",
                // fillPatternOffset: "填充图案偏移量，可以用数组[a,b]或对象{x:a,y:b}来表示",
                // fillPatternOffsetX: "填充图案x偏移量",
                // fillPatternOffsetY: "填充图案y偏移量",
                // fillPatternScale: "填充图案缩放量，可以用数组[a,b]或对象{x:a,y:b}来表示",
                // fillPatternScaleX: "填充图案x缩放量",
                // fillPatternScaleY: "填充图案y缩放量",
                // fillPatternRotation: "填充图案旋转幅度",
                // fillPatternRepeat: "填充图案平铺方式，可以是repeat、repeat-x、repeat-y或no-repeat，默认是no-repeat",
            };
            // 创建第一个矩形对象
            var rect1 = new Kinetic.Rect(config1);

            // 创建第二个矩形对象的config参数
            var config2 = {
                x: 350,
                y: 100,
                width: 180,
                height: 180
                // 填充图像
                // fillPatternImage: "填充图案",
                // fillPatternX: "填充图案横坐标",
                // fillPatternY: "填充图案纵坐标",
                // fillPatternOffset: "填充图案偏移量，可以用数组[a,b]或对象{x:a,y:b}来表示",
                // fillPatternOffsetX: "填充图案x偏移量",
                // fillPatternOffsetY: "填充图案y偏移量",
                // fillPatternScale: "填充图案缩放量，可以用数组[a,b]或对象{x:a,y:b}来表示",
                // fillPatternScaleX: "填充图案x缩放量",
                // fillPatternScaleY: "填充图案y缩放量",
                // fillPatternRotation: "填充图案旋转幅度",
                // fillPatternRepeat: "填充图案平铺方式，可以是repeat、repeat-x、repeat-y或no-repeat，默认是no-repeat",
            };
            // 创建第二个矩形对象
            var rect2 = new Kinetic.Rect(config2);

            // 将填充图像向左上移动50个像素

            layer.add(rect1);
            layer.add(rect2);
            stage.add(layer);
        },

        // demo8
        start8: function start8() {
            var self = this;
            /*
            // 使用构造方法的config参数设置
            let shape = new Kinetic.Circle({
                stroke: 'black',
                strokeWidth: 4
            });
             // 用图形对象的方法设置
            shape.setStroke('blue');
            shape.setStrokeWidth(20);
            */
        },

        // demo9
        start9: function start9() {
            var self = this;
            // 创建Kinetic舞台，绑定我们添加的<div>容器 
            var stage = new Kinetic.Stage({
                container: 'canvas9', // <div>的id 
                width: 600, //创建的舞台宽度 
                height: 400 //创建的舞台高度 
            });
            // 创建Kinetic用户层
            var layer = new Kinetic.Layer();
            var rect = new Kinetic.Rect({
                x: 100,
                y: 50,
                width: 100,
                height: 50,
                fill: 'green',
                stroke: 'blue',
                shadowColor: 'red',
                shadowBlur: 10,
                shadowOffset: { x: 5, y: 5 },
                shadowOpacity: 0.5,
                opacity: 0.1,
                cornerRadius: 5
            });

            // 向用户层中添加上面的矩形 
            layer.add(rect);
            // 将上面的用户层添加到舞台上 
            stage.add(layer);
            stage.draw();

            /*
                            // 使用构造方法的config参数设置
                            let shape = new Kinetic.Circle({
                                alpha: 0.5
                            });
                            // 用图形对象的方法设置
                            shape.setAlpha(1);
                            */
        },

        // demo10
        start10: function start10() {
            var self = this;
            // 创建Kinetic舞台，绑定我们添加的<div>容器 
            var stage = new Kinetic.Stage({
                container: 'canvas10', // <div>的id 
                width: 600, //创建的舞台宽度 
                height: 400 //创建的舞台高度 
            });
            // 创建Kinetic用户层
            var layer = new Kinetic.Layer();
            var rect = new Kinetic.Rect({
                x: 100, // 矩形左上角x坐标 
                y: 100, // 矩形左上角y坐标 
                width: 150, // 矩形的宽度 
                height: 150, // 矩形的高度 
                fill: 'red', // 矩形的填充色 
                stroke: 'blue', // 矩形边缘线的颜色
                strokeWidth: 4, // 矩形边缘线的宽度
                shadowColor: 'black', // "阴影色",
                // shadowColorRGB: "rgb阴影色。用对象字面量表示{r:0,g:0,b:0}",
                // shadowColorR: "r阴影色",
                // shadowColorG: "g阴影色",
                // shadowColorB: "b阴影色",
                shadowBlur: 10, // "阴影模糊值",
                shadowOffset: [10, 10], // "填充图案偏移量，可以用数组[a,b]或对象{x:a,y:b}来表示",
                // shadowOffsetX: "阴影模糊x偏移量",
                // shadowOffsetY: "阴影模糊y偏移量",
                shadowOpacity: 0.5 // "阴影透明度，取值范围为0-1",
                // shadowEnabled: "是否启用blob的阴影功能，默认为true",
            });
            // 向用户层中添加上面的矩形 
            layer.add(rect);
            // 将上面的用户层添加到舞台上 
            stage.add(layer);
            stage.draw();

            /*
                            // 使用构造方法的config参数设置
                            let shape = new Kinetic.Circle({
                                shadow: {
                                    color: 'black',
                                    blur: 10,
                                    offset: [10, 10],
                                    alpha: 0.5
                                }
                            });
                            // 用图形对象的方法设置
                            shape.setShadow({
                                color: 'black',
                                blur: 10,
                                offset: [10, 10],
                                alpha: 0.5
                            });
                            */
        },

        // demo11
        start11: function start11() {
            var self = this;
            // 创建Kinetic舞台，绑定我们添加的<div>容器 
            var stage = new Kinetic.Stage({
                container: 'canvas11', // <div>的id 
                width: 1000, //创建的舞台宽度 
                height: 400 //创建的舞台高度 
            });
            // 创建Kinetic用户层
            var layer = new Kinetic.Layer();

            var triangle1 = new Kinetic.RegularPolygon({
                x: 100,
                y: 100,
                sides: 3,
                radius: 70,
                fill: 'red',
                stroke: 'black',
                strokeWidth: 20,
                lineJoin: 'bevel'
            });
            triangle1.on('mouseover', function () {
                this.setLineJoin('round');
                layer.draw();
            });
            triangle1.on('mouseout', function () {
                this.setLineJoin('bevel');
                layer.draw();
            });
            var triangle2 = new Kinetic.RegularPolygon({
                x: 300,
                y: 100,
                sides: 3,
                radius: 70,
                fill: 'red',
                stroke: 'black',
                strokeWidth: 20,
                lineJoin: 'bevel'
            });
            var triangle3 = new Kinetic.RegularPolygon({
                x: 500,
                y: 100,
                sides: 3,
                radius: 70,
                fill: 'red',
                stroke: 'black',
                strokeWidth: 20,
                lineJoin: 'round'
            });
            var triangle4 = new Kinetic.RegularPolygon({
                x: 700,
                y: 100,
                sides: 3,
                radius: 70,
                fill: 'red',
                stroke: 'black',
                strokeWidth: 20,
                lineJoin: 'miter'
            });
            // add the shape to the layer, and then the layer to stage
            stage.add(layer.add(triangle1).add(triangle2).add(triangle3).add(triangle4));
        },

        // demo12
        start12: function start12() {
            /*
            // 使用构造方法的config参数设置
            var shape = new Kinetic.Circle({
                visible: false
            });
            // 用图形对象的show方法显示图形
            shape.show();
            // 用图形对象的hide方法隐藏图形
            shape.hide();
            */
        },

        // demo13
        start13: function start13() {
            var stage = new Kinetic.Stage({
                container: 'canvas13',
                width: 600,
                height: 400
            });
            var layer = new Kinetic.Layer();
            //创建config参数
            var config = {
                x: 50,
                y: 50,
                width: 100,
                height: 100,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 4
            };
            //创建矩形对象
            var rect = new Kinetic.Rect(config);
            //绑定事件响应方法
            // 所支持的事件类型包括: mouseover， mouseout， mousemove， mousedown，mouseup， click， dblclick， dragstart 以及 dragend 事件
            rect.on('click', function (evt) {
                alert('clicked');
            });
            //把矩形对象添加到层里
            layer.add(rect);
            //将层添加到舞台中
            stage.add(layer);
        },

        // demo14
        start14: function start14() {
            var stage = new Kinetic.Stage({
                container: 'canvas14',
                width: 600,
                height: 400
            });
            var rect = new Kinetic.Rect({
                x: 100,
                y: 100,
                width: 100,
                height: 100,
                fill: 'red',
                detectionType: 'pixel'
            });
            // 绑定事件响应方法
            rect.on('click', function () {
                alert('rect clicked');
            });
            var layer = new Kinetic.Layer();
            layer.add(rect);
            stage.add(layer);
            // 保存数据以相应事件
            // rect.saveData();

            var image = new Image();
            image.onload = function () {
                var kimage = new Kinetic.Image({
                    x: 100,
                    y: 100,
                    image: image,
                    detectionType: 'pixel'
                });
                //绑定事件响应方法
                kimage.on('click', function () {
                    alert('image clicked');
                });
                var layer = new Kinetic.Layer();
                layer.add(kimage);
                stage.add(layer);
                // 保存数据以相应事件
                // kimage.saveData();
            };
            // 图像需要与此页面在同一个服务器上，否则会Javascript会抛出安全异常
            image.src = './01.PNG';
        },

        // demo15
        start15: function start15() {
            var stage = new Kinetic.Stage({
                container: 'canvas15',
                width: 600,
                height: 400
            });
            var layer = new Kinetic.Layer();
            //创建config参数
            var config = {
                x: 50,
                y: 50,
                width: 100,
                height: 100,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 4
            };
            //创建矩形对象
            var rect = new Kinetic.Rect(config);
            //绑定事件响应方法
            // 所支持的事件类型包括: mouseover， mouseout， mousemove， mousedown，mouseup， click， dblclick， dragstart 以及 dragend 事件
            rect.on('click.a', function (evt) {
                alert('clicked A');
            });
            rect.on('click.b', function (evt) {
                alert('clicked B');
            });
            //把矩形对象添加到层里
            layer.add(rect);
            //将层添加到舞台中
            stage.add(layer);
        },

        // demo16
        start16: function start16() {
            var self = this;
            // let stage = new Kinetic.Stage({
            self.stage16 = new Kinetic.Stage({
                container: 'canvas16',
                width: 600,
                height: 400
            });
            var layer = new Kinetic.Layer();
            //创建config参数
            var config = {
                x: 50,
                y: 50,
                width: 100,
                height: 100,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 4,
                draggable: true,
                dragBoundFunc: function dragBoundFunc(pos, evt) {
                    // let mousePos = stage.getMousePosition();
                    // let msg = 'x:' + mousePos.x + ' | ' + 'y:' + mousePos.y;
                    // return { y : Math.round(pos.y/60)*60, x : this.getX() };
                    return { y: pos.y, x: pos.x };
                }
            };
            //创建矩形对象
            var rect = new Kinetic.Rect(config);
            //绑定事件响应方法
            // 所支持的事件类型包括: mouseover， mouseout， mousemove， mousedown，mouseup， click， dblclick， dragstart 以及 dragend 事件
            rect.on('dragstart', function (evt) {
                // let mousePos = stage.getMousePosition();
                // let msg = 'x:' + mousePos.x + ' | ' + 'y:' + mousePos.y;
            });
            rect.on('dragend', function (evt) {
                // let mousePos = stage.getMousePosition();
                // let msg = 'x:' + mousePos.x + ' | ' + 'y:' + mousePos.y;
            });
            //把矩形对象添加到层里
            layer.add(rect);
            //将层添加到舞台中
            self.stage16.add(layer);
        },

        // demo17
        start17: function start17() {
            var self = this;
            var stage = new Kinetic.Stage({
                container: 'canvas17',
                width: 600,
                height: 400
            });
            var layer = new Kinetic.Layer();
            //创建config参数
            var config = {
                x: 50,
                y: 50,
                width: 100,
                height: 100,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 4
            };
            //创建矩形对象
            var rect = new Kinetic.Rect(config);
            //绑定事件响应方法
            // 所支持的事件类型包括: mouseover， mouseout， mousemove， mousedown，mouseup， click， dblclick， dragstart 以及 dragend 事件
            rect.on('mousedown mouseover', function (evt) {
                alert('mousedown 或 mouseover');
            });
            //把矩形对象添加到层里
            layer.add(rect);
            //将层添加到舞台中
            stage.add(layer);
        },

        // demo18
        start18: function start18() {
            var self = this;
            var stage = new Kinetic.Stage({
                container: 'canvas18',
                width: 600,
                height: 400
            });
            var layer = new Kinetic.Layer();
            //创建config参数
            var config = {
                x: 50,
                y: 50,
                width: 100,
                height: 100,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 4
            };
            //创建矩形对象
            var rect = new Kinetic.Rect(config);
            //绑定事件响应方法
            // 所支持的事件类型包括: mouseover， mouseout， mousemove， mousedown，mouseup， click， dblclick， dragstart 以及 dragend 事件
            rect.on('mouseover.a', function (evt) {
                alert('mousedown.a');
            });
            rect.on('click', function (evt) {
                rect.off('mouseover.a');
            });
            //把矩形对象添加到层里
            layer.add(rect);
            //将层添加到舞台中
            stage.add(layer);
        },

        // demo19
        start19: function start19() {
            var self = this;
            var stage = new Kinetic.Stage({
                container: 'canvas19',
                width: 600,
                height: 400
            });
            var layer = new Kinetic.Layer();
            //创建config参数
            var config = {
                x: 50,
                y: 50,
                width: 100,
                height: 100,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 4
                // listening: false, // "是否处于事件监听状态",
            };
            //创建矩形对象
            var rect = new Kinetic.Rect(config);
            //绑定事件响应方法
            // 所支持的事件类型包括: mouseover， mouseout， mousemove， mousedown，mouseup， click， dblclick， dragstart 以及 dragend 事件
            rect.on('mouseover', function (evt) {
                alert('mousedown');
            });

            //把矩形对象添加到层里
            layer.add(rect);
            //将层添加到舞台中
            stage.add(layer);

            // 使用对象方法设置
            setTimeout(function () {
                rect.setListening(false);
            }, 3000);
        },

        // demo20
        start20: function start20() {
            var self = this;
            var stage = new Kinetic.Stage({
                container: 'canvas20',
                width: 600,
                height: 400
            });

            var layer = new Kinetic.Layer();
            layer.on('click', function (evt) {
                evt.cancelBubble = true;
                alert('点击图层了');
            });

            // 创建一个要加进组中的圆
            var circle = new Kinetic.Circle({
                x: 100,
                y: 100,
                radius: 50,
                fill: 'red'
            });
            circle.on('click', function (evt) {
                evt.cancelBubble = true;
                alert('点击圆形了');
            });

            // 创建一个要加进组中的矩形
            var rect = new Kinetic.Rect({
                x: 300,
                y: 100,
                width: 100,
                height: 100,
                fill: 'blue'
            });
            rect.on('click', function (evt) {
                evt.cancelBubble = true;
                alert('点击矩形了');
            });

            // 创建group对象
            var group = new Kinetic.Group({ draggable: true });
            group.on('click', function (evt) {
                evt.cancelBubble = true;
                alert('点击组了');
            });

            // 把多个图形对象添加到group里
            group.add(circle);
            group.add(rect);
            // 把group对象添加到层里
            layer.add(group);
            // 将层添加到舞台中
            stage.add(layer);
        },

        // demo21
        start21: function start21() {
            var self = this;
            var stage = new Kinetic.Stage({
                container: 'canvas21',
                width: 600,
                height: 400
            });

            var layer = new Kinetic.Layer();

            var circle = new Kinetic.Circle({
                x: 100,
                y: 100,
                radius: 50,
                fill: 'red'
            });
            circle.on('click', function (evt) {
                var shape = evt.shape;
                console.log(shape);
            });

            layer.add(circle);
            stage.add(layer);
        },

        // demo22
        start22: function start22() {
            var self = this;
            var stage = new Kinetic.Stage({
                container: 'canvas22',
                width: 600,
                height: 400
            });

            var layer = new Kinetic.Layer();

            var circle = new Kinetic.Circle({
                x: 100,
                y: 100,
                radius: 50,
                fill: 'red'
            });
            circle.on('click', function (evt) {
                alert('触发鼠标点击事件');
            });

            layer.add(circle);
            stage.add(layer);

            // 触发事件鼠标点击事件
            // circle.simulate('click');
        },

        // demo23
        start23: function start23() {
            var self = this;
            var stage = new Kinetic.Stage({
                container: 'canvas23',
                width: 600,
                height: 400
            });
            var layer = new Kinetic.Layer();
            var line = new Kinetic.Line({
                points: [100, 150, 340, 230],
                stroke: 'blue',
                strokeWidth: 10,
                draggable: true
            });
            layer.add(line);
            stage.add(layer);
            //保存像素数据
            // line.saveData();
            //必须在每次拖拽完毕后执行一次saveData
            line.on('dragend', function () {
                // blueLine.saveData();
            });
        },

        // demo24
        start24: function start24() {
            var self = this;
            var stage = new Kinetic.Stage({
                container: 'canvas24',
                width: 600,
                height: 400
            });
            var layer = new Kinetic.Layer();
            var line = new Kinetic.Line({
                points: [100, 150, 340, 230],
                stroke: 'red',
                strokeWidth: 10,
                draggable: true
            });
            layer.add(line);
            stage.add(layer);
            line.on('dragstart', function () {
                console.log('开始拖拽');
            });
            line.on('dragmove', function () {
                console.log('拖拽中...');
            });
            line.on('dragend', function () {
                console.log('拖拽结束');
            });
        },

        // demo25
        start25: function start25() {
            var self = this;
            var stage = new Kinetic.Stage({
                container: 'canvas25',
                width: 600,
                height: 400
            });
            var layer = new Kinetic.Layer();
            var line = new Kinetic.Line({
                points: [100, 150, 340, 230],
                stroke: 'red',
                strokeWidth: 10,
                draggable: true,
                dragConstraint: 'horizontal' // none， horizontal和 vertical
            });
            layer.add(line);
            stage.add(layer);
        },

        // demo26
        start26: function start26() {
            var self = this;
            var stage = new Kinetic.Stage({
                container: 'canvas26',
                width: 600,
                height: 400
            });
            var layer = new Kinetic.Layer();
            var line = new Kinetic.Line({
                points: [100, 150, 340, 230],
                stroke: 'red',
                strokeWidth: 10,
                draggable: true,
                dragBounds: {
                    top: 50
                }
            });
            layer.add(line);
            stage.add(layer);
        },

        // demo27
        start27: function start27() {
            var stage = new Kinetic.Stage({
                container: 'canvas27',
                width: 600,
                height: 400
            });
            var layer = new Kinetic.Layer();
            var hexagon = new Kinetic.RegularPolygon({
                x: 300,
                y: 200,
                sides: 6,
                radius: 70,
                fill: 'red',
                stroke: 'black',
                strokeWidth: 4
            });
            layer.add(hexagon);
            stage.add(layer);

            var amplitude = 150;
            var period = 2000;
            var centerX = 300;
            var anim = new Kinetic.Animation(function (frame) {
                hexagon.setX(amplitude * Math.sin(new Date().getTime() * 2 * Math.PI / period) + centerX);
            }, layer);
            anim.start();
        },

        // demo28
        start28: function start28() {
            var stage = new Kinetic.Stage({
                container: 'canvas28',
                width: 600,
                height: 400
            });
            var layer = new Kinetic.Layer();
            var rect = void 0;
            for (var n = 0; n < 100; n++) {
                rect = new Kinetic.Rect({
                    x: Math.random() * 400,
                    y: Math.random() * 400,
                    width: 100,
                    height: 50,
                    fill: 'red',
                    stroke: 'black',
                    strokeWidth: 4
                });
                layer.add(rect);
            }

            stage.add(layer);
            var velocity = 360; // 1 rev per second
            var anim = new Kinetic.Animation(function (frame) {
                layer.find('Rect').rotate(velocity * frame.timeDiff / 1000);
            }, layer);
            anim.start();
            // anim.stop();
        },

        // demo29
        start29: function start29() {
            var stage = new Kinetic.Stage({
                container: 'canvas29',
                width: 600,
                height: 400
            });
            var layer = new Kinetic.Layer();
            var spline = new Kinetic.Line({
                points: [73, 160, 340, 23, 500, 109, 300, 109],
                stroke: 'blue',
                strokeWidth: 10,
                lineCap: 'round',
                lineJoin: 'round',
                draggable: true,
                tension: 1
            });
            layer.add(spline);
            stage.add(layer);
            var tween = new Kinetic.Tween({
                node: spline,
                duration: 1,
                //x: 100,
                points: [200, 160, 200, 23, 500, 109, 100, 10],
                easing: Kinetic.Easings.BackEaseOut,
                yoyo: false
            });
            // stage.getContent().addEventListener('mouseover', function() {
            //   tween.play();
            // });
            // stage.getContent().addEventListener('mouseout', function() {
            //   tween.reverse();
            // });
            tween.play();
        },

        // demo30
        start30: function start30() {
            var stage = new Kinetic.Stage({
                container: 'canvas30',
                width: 600,
                height: 400
            });
            var layer = new Kinetic.Layer();
            var spline = new Kinetic.Line({
                points: [73, 160, 340, 23, 500, 109, 300, 109],
                stroke: 'blue',
                strokeWidth: 10,
                lineCap: 'round',
                lineJoin: 'round',
                draggable: true,
                tension: 1
            });
            layer.add(spline);
            stage.add(layer);
            spline.cache({
                width: stage.width(),
                height: stage.height()
            });
            spline.filters([Kinetic.Filters.Blur]).blurRadius(40);
            layer.draw();
            layer.on('beforeDraw', function () {
                spline.cache({
                    width: stage.width(),
                    height: stage.height()
                });
            });
            var tween = new Kinetic.Tween({
                node: spline,
                duration: 2,
                //x: 100,
                points: [200, 160, 200, 23, 500, 109, 100, 10],
                blurRadius: 0,
                easing: Kinetic.Easings.BackEaseOut,
                yoyo: false
            });
            // stage.getContent().addEventListener('mouseover', function() {
            //   tween.play();
            // });
            // stage.getContent().addEventListener('mouseout', function() {
            //   tween.reverse();
            // });
            tween.play();
        },

        // demo31
        start31: function start31() {
            var stage = new Kinetic.Stage({
                container: 'canvas31',
                width: 600,
                height: 400
            });
            var layer = new Kinetic.Layer();
            var hexagon = new Kinetic.RegularPolygon({
                id: 'id1',
                x: 50,
                y: 50,
                sides: 6,
                radius: 70,
                fill: 'red',
                stroke: 'black',
                strokeWidth: 4
            });
            layer.add(hexagon);
            stage.add(layer);

            var obj = stage.get('#id1')[0];
            // let obj = layer.get('#id1')[0];
            // let obj = group.get('#id1')[0];
        },

        // demo32
        start32: function start32() {
            var stage = new Kinetic.Stage({
                container: 'canvas32',
                width: 600,
                height: 400
            });
            var layer = new Kinetic.Layer();
            var hexagon = new Kinetic.RegularPolygon({
                name: 'name1',
                x: 50,
                y: 50,
                sides: 6,
                radius: 70,
                fill: 'red',
                stroke: 'black',
                strokeWidth: 4
            });
            layer.add(hexagon);
            stage.add(layer);

            var objs = stage.get('.name1')[0];
            // let objs = layer.get('.name1')[0];
            // let objs = group.get('.name1')[0];
        },

        // demo33
        start33: function start33() {
            var stage = new Kinetic.Stage({
                container: 'canvas33',
                width: 1000,
                height: 600
            });
            var layer = new Kinetic.Layer();
            var group = new Kinetic.Group();
            var drawTriangle = function drawTriangle(context) {
                context.beginPath();
                context.moveTo(200, 50);
                context.lineTo(420, 80);
                context.quadraticCurveTo(300, 100, 260, 170);
                context.closePath();
                context.fillStrokeShape(this);
            };
            var triangle = new Kinetic.Shape({
                drawFunc: drawTriangle,
                fill: "#00D2FF",
                stroke: "black",
                strokeWidth: 4,
                id: 'myTriangle'
            });
            group.add(triangle);
            layer.add(group);
            stage.add(layer);
            // assert.equal(triangle.getId(), 'myTriangle');
            // let expectedJson = '{"attrs":{"width":578,"height":200},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{},"className":"Group","children":[{"attrs":{"fill":"#00D2FF","stroke":"black","strokeWidth":4,"id":"myTriangle"},"className":"Shape"}]}]}]}';

            // assert.equal(stage.toJSON(), expectedJson);
            layer.draw();
        },

        // demo34
        start34: function start34() {
            var stage = new Kinetic.Stage({
                container: 'canvas34',
                width: 1000,
                height: 600
            });;
            var blueLayer = new Kinetic.Layer();
            var greenLayer = new Kinetic.Layer();
            var bluecircle = new Kinetic.Circle({
                x: 200,
                y: stage.getHeight() / 2,
                radius: 70,
                fill: 'blue',
                stroke: 'black',
                strokeWidth: 4
            });
            var greencircle = new Kinetic.Circle({
                x: 280,
                y: stage.getHeight() / 2,
                radius: 70,
                fill: 'green',
                stroke: 'black',
                strokeWidth: 4
            });
            blueLayer.add(bluecircle);
            greenLayer.add(greencircle);
            stage.add(blueLayer);
            stage.add(greenLayer);
            blueLayer.moveToTop();
        },

        // demo35
        start35: function start35() {
            var stage = new Kinetic.Stage({
                container: 'canvas35',
                width: 600,
                height: 400
            });
            var layer1 = new Kinetic.Layer();
            var layer2 = new Kinetic.Layer();
            var layer3 = new Kinetic.Layer();
            var config1 = {
                x: 200,
                y: 200,
                radius: 100,
                height: 100,
                fill: "red",
                stroke: "black",
                strokeWidth: 4
            };
            var circle1 = new Kinetic.Circle(config1);
            var config2 = {
                x: 250,
                y: 200,
                radius: 100,
                height: 100,
                fill: "green",
                stroke: "black",
                strokeWidth: 4
            };
            var circle2 = new Kinetic.Circle(config2);
            var config3 = {
                x: 300,
                y: 200,
                radius: 100,
                height: 100,
                fill: "blue",
                stroke: "black",
                strokeWidth: 4
            };
            var circle3 = new Kinetic.Circle(config3);
            layer1.add(circle1);
            layer2.add(circle2);
            layer3.add(circle3);
            layer1.on("click", function () {
                alert("from Z index:" + this.getZIndex());
                //将本层移动至最上层
                this.moveToTop();
                alert("to Z index:" + this.getZIndex());
            });
            layer2.on("click", function () {
                alert("from Z index:" + this.getZIndex());
                //将本层移动至最上层
                this.moveToTop();
                alert("to Z index:" + this.getZIndex());
            });
            layer3.on("click", function () {
                alert("from Z index:" + this.getZIndex());
                //将本层移动至最上层
                this.moveToTop();
                alert("to Z index:" + this.getZIndex());
            });
            //将层添加到舞台中
            stage.add(layer1);
            stage.add(layer2);
            stage.add(layer3);
        },

        // demo36
        start36: function start36() {
            var stage = new Kinetic.Stage({
                container: 'canvas36',
                width: 600,
                height: 400
            });
            var layer = new Kinetic.Layer();
            var config1 = {
                x: 200,
                y: 200,
                radius: 100,
                height: 100,
                fill: "red",
                stroke: "black",
                strokeWidth: 4
            };
            var circle1 = new Kinetic.Circle(config1);
            circle1.on("click", function () {
                alert("from Z index:" + this.getZIndex());
                //将本对象移动到本层所有对象中的最上面
                this.moveToTop();
                //重绘对象所在本层
                layer.draw();
                alert("to Z index:" + this.getZIndex());
            });
            var config2 = {
                x: 250,
                y: 200,
                radius: 100,
                height: 100,
                fill: "green",
                stroke: "black",
                strokeWidth: 4
            };
            var circle2 = new Kinetic.Circle(config2);
            circle2.on("click", function () {
                alert("from Z index:" + this.getZIndex());
                //将本对象移动到本层所有对象中的最上面
                this.moveToTop();
                //重绘对象所在本层
                layer.draw();
                alert("to Z index:" + this.getZIndex());
            });
            var config3 = {
                x: 300,
                y: 200,
                radius: 100,
                height: 100,
                fill: "blue",
                stroke: "black",
                strokeWidth: 4
            };
            var circle3 = new Kinetic.Circle(config3);
            circle3.on("click", function () {
                alert("from Z index:" + this.getZIndex());
                //将本对象移动到本层所有对象中的最上面
                this.moveToTop();
                //重绘对象所在本层
                layer.draw();
                alert("to Z index:" + this.getZIndex());
            });
            layer.add(circle1);
            layer.add(circle2);
            layer.add(circle3);
            //将层添加到舞台中
            stage.add(layer);
        },

        // demo37
        start37: function start37() {
            // 创建Kinetic舞台，绑定我们添加的<div>容器 
            var stage = new Kinetic.Stage({
                container: 'canvas37', // <div>的id 
                width: 600, // 创建的舞台宽度 
                height: 400 // 创建的舞台高度 
            });
            // 创建Kinetic用户层
            var layer = new Kinetic.Layer();
            // 创建一个Kinetic矩形对象 
            var rect = new Kinetic.Rect({
                x: 200, // 矩形左上角x坐标 
                y: 150, // 矩形左上角y坐标 
                width: 200, // 矩形的宽度 
                height: 100, // 矩形的高度 
                fill: "red", // 矩形的填充色 
                stroke: "black", // 矩形边缘线的颜色
                strokeWidth: 4 // 矩形边缘线的宽度
            });
            // 向用户层中添加上面的矩形 
            layer.add(rect);
            // 将上面的用户层添加到舞台上 
            stage.add(layer);
            stage.draw();

            // stage.load(json);// 加载舞台
        },

        // demo38
        start38: function start38() {},

        // demo39
        start39: function start39() {},

        // demo40
        start40: function start40() {}
    }
});

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    components: {},
    data: function data() {
        return {
            stage: null,
            layer: null,
            stageW: 1550,
            stageH: 600,
            groupObj: {},
            startX: 50,
            startY: 50,
            spaceX: 100,
            spaceY: 100,
            heightH: 50,
            heightB: 100,
            heightF: 50,
            unitW: 150,
            standardData: [{ id: '01', head: 'PO-01', body: '专员审批01', footer: '你好' }, { id: '02', head: 'PO-02', body: '专员审批02', footer: '张三' }, { id: '03', head: 'PO-03', body: '专员审批03', footer: '李四' }, { id: '04', head: 'PO-04', body: '专员审批04', footer: '王五' }, { id: '05', head: 'PO-05', body: '专员审批05', footer: 'qqq' }, { id: '06', head: 'PO-06', body: '专员审批06', footer: 'www' }, { id: '07', head: 'PO-07', body: '专员审批07', footer: 'eee' }, { id: '08', head: 'PO-08', body: '专员审批08', footer: 'rrr' }, { id: '09', head: 'PO-09', body: '专员审批09', footer: 'ttt' }, { id: '10', head: 'PO-10', body: '专员审批10', footer: 'yyy' }, { id: '11', head: 'PO-11', body: '专员审批11', footer: 'uuu' }, { id: '12', head: 'PO-12', body: '专员审批12', footer: 'iii' }, { id: '13', head: 'PO-13', body: '专员审批13', footer: 'ooo' }, { id: '14', head: 'PO-14', body: '专员审批14', footer: 'ppp' }, { id: '15', head: 'PO-15', body: '专员审批15', footer: 'lll' }, { id: '16', head: 'PO-16', body: '专员审批16', footer: 'kkk' }, { id: '17', head: 'PO-17', body: '专员审批17', footer: 'jjj' }, { id: '18', head: 'PO-18', body: '专员审批18', footer: 'hhh' }, { id: '19', head: 'PO-19', body: '专员审批19', footer: 'ggg' }, { id: '20', head: 'PO-20', body: '专员审批20', footer: 'fff' }, { id: '21', head: 'PO-21', body: '专员审批21', footer: 'ddd' }, { id: '22', head: 'PO-22', body: '专员审批22', footer: 'sss' }, { id: '23', head: 'PO-23', body: '专员审批23', footer: 'aaa' }, { id: '24', head: 'PO-24', body: '专员审批24', footer: 'zzz' }, { id: '25', head: 'PO-25', body: '专员审批25', footer: 'xxx' }, { id: '26', head: 'PO-26', body: '专员审批26', footer: 'ccc' }, { id: '27', head: 'PO-27', body: '专员审批27', footer: 'vvv' }, { id: '28', head: 'PO-28', body: '专员审批28', footer: 'bbb' }, { id: '29', head: 'PO-29', body: '专员审批29', footer: 'nnn' }, { id: '30', head: 'PO-30', body: '专员审批30', footer: 'mmm' }, { id: '31', head: 'PO-31', body: '专员审批31', footer: 'xxx' }]
        };
    },
    created: function created() {},
    mounted: function mounted() {
        var self = this;
        self.createStage();
    },

    methods: {
        // 创建舞台
        createStage: function createStage() {
            var self = this;
            self.stage = new Kinetic.Stage({
                container: 'canvas',
                width: self.stageW,
                height: self.stageH
            });
            self.layer = new Kinetic.Layer();
            var oneRowCount = parseInt(self.stageW / (self.unitW + self.spaceX));
            var rowH = self.heightH + self.heightB + self.heightF + self.spaceY;
            var rowNum = Math.ceil(self.standardData / oneRowCount);
            var isOddRow = true; // 是否为奇数行

            var startX = self.startX;
            var startY = self.startY;
            var spaceX = self.spaceX;
            var spaceY = self.spaceY;

            var x = void 0,
                y = void 0,
                currRowNum = void 0;
            self.standardData.forEach(function (item, i) {
                self.$set(self.groupObj, 'group' + i, new Kinetic.Group({ draggable: true }));
                currRowNum = parseInt(i / oneRowCount) + 1;
                var idx = i % oneRowCount;
                if (currRowNum % 2 == 1) {
                    // 奇数行
                    x = startX + (self.unitW + self.spaceX) * idx;
                    y = startX + rowH * (currRowNum - 1);
                } else {
                    // 偶数行
                    x = startX + (self.unitW + self.spaceX) * (oneRowCount - 1) - (self.unitW + self.spaceX) * idx;
                    y = startX + rowH * (currRowNum - 1);
                }

                self.oneGroup(x, y, item.head, item.body, item.footer, 'group' + i);
                /*
                rect = new Kinetic.Rect({
                    x: 50+i*250, // 矩形左上角x坐标 
                    y: 50, // 矩形左上角y坐标 
                    width: 150, // 矩形的宽度 
                    height: 200, // 矩形的高度 
                    fill: 'red', // 矩形的填充色 
                    stroke: 'black', // 矩形边缘线的颜色
                    strokeWidth: 1 // 矩形边缘线的宽度
                });
                self.layer.add(rect);
                */
            });
            self.stage.add(self.layer);
            self.stage.draw();
        },

        // 一个单元
        oneGroup: function oneGroup() {
            var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;
            var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
            var hText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
            var bText = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
            var fText = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
            var group = arguments[5];

            var self = this;
            var rowH = self.heightH + self.heightB + self.heightF;
            var head = void 0,
                headText = void 0,
                body = void 0,
                bodyText = void 0,
                footer = void 0,
                footerText = void 0,
                top = void 0,
                right = void 0,
                bottom = void 0,
                left = void 0;

            head = new Kinetic.Rect({
                x: x,
                y: y,
                width: self.unitW,
                height: self.heightH,
                fill: '#aed2f7',
                stroke: '#333333',
                strokeWidth: 1
            });
            headText = new Kinetic.Text({
                x: x,
                y: y,
                text: hText,
                fill: 'black',
                width: self.unitW,
                height: self.heightH,
                padding: 10,
                align: 'center'
            });
            body = new Kinetic.Rect({
                x: x,
                y: y + self.heightH,
                width: self.unitW,
                height: self.heightB,
                fill: '#e1f7ae',
                stroke: '#333333',
                strokeWidth: 1
            });
            bodyText = new Kinetic.Text({
                x: x,
                y: y + self.heightH,
                text: bText,
                fill: 'black',
                width: self.unitW,
                height: self.heightB,
                padding: 10,
                align: 'center'
            });
            footer = new Kinetic.Rect({
                x: x,
                y: y + self.heightH + self.heightB,
                width: self.unitW,
                height: self.heightF,
                fill: '#f7e4ae',
                stroke: '#333333',
                strokeWidth: 1
            });
            footerText = new Kinetic.Text({
                x: x,
                y: y + self.heightH + self.heightB,
                text: fText,
                fill: 'black',
                width: self.unitW,
                height: self.heightF,
                padding: 10,
                align: 'center'
            });
            top = new Kinetic.Rect({
                x: x + (self.unitW / 2 - 5),
                y: y - 10,
                width: 10,
                height: 10,
                fill: '#efefef',
                stroke: '#333333',
                strokeWidth: 1
            });
            right = new Kinetic.Rect({
                x: x + self.unitW,
                y: y + (rowH / 2 - 5),
                width: 10,
                height: 10,
                fill: '#efefef',
                stroke: '#333333',
                strokeWidth: 1
            });
            bottom = new Kinetic.Rect({
                x: x + (self.unitW / 2 - 5),
                y: y + rowH,
                width: 10,
                height: 10,
                fill: '#efefef',
                stroke: '#333333',
                strokeWidth: 1
            });
            left = new Kinetic.Rect({
                x: x - 10,
                y: y + (rowH / 2 - 5),
                width: 10,
                height: 10,
                fill: '#efefef',
                stroke: '#333333',
                strokeWidth: 1
            });

            self.groupObj[group].add(head).add(headText).add(body).add(bodyText).add(footer).add(footerText).add(top).add(right).add(bottom).add(left);
            self.layer.add(self.groupObj[group]);
        },

        // 画箭头
        drawArrow: function drawArrow() {
            var stage = addStage();
            var layer = new Kinetic.Layer();
            var arrow = new Kinetic.Arrow({
                points: [73, 160, 340, 23],
                stroke: 'blue',
                fill: 'blue',
                strokeWidth: 1,
                draggable: true,
                tension: 0
            });
            layer.add(arrow);
            stage.add(layer);
            arrow.setPoints([1, 2, 3, 4]);
            assert.equal(arrow.points()[0], 1);
            arrow.setPoints([5, 6, 7, 8]);
            assert.equal(arrow.getPoints()[0], 5);
            arrow.setPoints([73, 160, 340, 23, 50, 100, 80, 50]);
            arrow.tension(0);
            arrow.pointerLength(15);
            assert.equal(arrow.pointerLength(), 15);
            arrow.pointerWidth(15);
            assert.equal(arrow.pointerWidth(), 15);
            assert.equal(arrow.getClassName(), 'Arrow');
            layer.draw();
            showHit(layer);
        }
    }
});

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    components: {},
    data: function data() {
        return {
            showDemo: {},
            stage16: null
        };
    },
    created: function created() {},
    mounted: function mounted() {
        var self = this;
    },

    methods: {
        // 初始化数据
        initData: function initData() {
            var self = this;
        },

        // 切换显示demo
        changeDemoState: function changeDemoState(demoNum) {
            var self = this;
            self.$set(self.showDemo, demoNum, !self.showDemo[demoNum]);
        }
    }
});

/***/ }),
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_chalk_index_css__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_chalk_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_chalk_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_common_css__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_common_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__style_common_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_index__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__script_globalVariable__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_echarts__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_echarts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_echarts__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.






// 引入vuex-store

// globalVariable.js 这样就可以在项目内任何地方都可以使用了。

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].prototype.commonsVariable = __WEBPACK_IMPORTED_MODULE_7__script_globalVariable__["a" /* default */];
// 引入echarts

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].prototype.$echarts = __WEBPACK_IMPORTED_MODULE_8_echarts___default.a;

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_element_ui___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_6__store_index__["a" /* default */],
  components: { App: __WEBPACK_IMPORTED_MODULE_2__App__["a" /* default */] },
  template: '<App/>'
});

/***/ }),
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(192);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_820137de_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(405);
function injectStyle (ssrContext) {
  __webpack_require__(403)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_820137de_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 403 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 404 */,
/* 405 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 406 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_index__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_index__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_HelloWorld__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_views_First__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_views_Second__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_ueditor_Ueditor__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_works_docStructure_index__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_learn_index__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_learn_gongwuyuan_index__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_learn_gongwuyuan_pdf__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_it_index__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_it_git_index__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_it_react_index__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_it_codeDemo_index__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_it_vue_index__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_other_travel_index__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_works_resume_index__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_it_interviewQuestions_index__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_it_kinetic_index__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_works_kineticjs_index__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_it_jsplumb_index__ = __webpack_require__(529);


// import index from '@/pages/home/index'






















__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'index',
    component: __WEBPACK_IMPORTED_MODULE_2__pages_index__["a" /* default */],
    redirect: 'home',
    children: [{
      path: 'home',
      name: 'home',
      component: __WEBPACK_IMPORTED_MODULE_3__pages_home_index__["a" /* default */]
    }, {
      path: '/first',
      name: 'First',
      component: __WEBPACK_IMPORTED_MODULE_5__components_views_First__["a" /* default */]
    }, {
      path: '/second',
      name: 'Second',
      component: __WEBPACK_IMPORTED_MODULE_6__components_views_Second__["a" /* default */]
    }, {
      path: '/ueditor',
      name: 'Ueditor',
      component: __WEBPACK_IMPORTED_MODULE_7__pages_ueditor_Ueditor__["a" /* default */]
    }, {
      path: '/works/docstructure',
      name: 'docStructure',
      component: __WEBPACK_IMPORTED_MODULE_8__pages_works_docStructure_index__["a" /* default */]
    }, {
      path: '/learn',
      component: __WEBPACK_IMPORTED_MODULE_9__pages_learn_index__["default"],
      children: [{
        path: 'gongwuyuan',
        name: 'gongwuyuan',
        component: __WEBPACK_IMPORTED_MODULE_10__pages_learn_gongwuyuan_index__["a" /* default */]
      }, {
        path: 'gongwuyuan/pdf',
        name: 'pdf',
        component: __WEBPACK_IMPORTED_MODULE_11__pages_learn_gongwuyuan_pdf__["a" /* default */]
      }]
    }, {
      path: '/it',
      component: __WEBPACK_IMPORTED_MODULE_12__pages_it_index__["default"],
      children: [{
        path: 'git',
        name: 'git',
        component: __WEBPACK_IMPORTED_MODULE_13__pages_it_git_index__["a" /* default */]
      }, {
        path: 'react',
        name: 'react',
        component: __WEBPACK_IMPORTED_MODULE_14__pages_it_react_index__["a" /* default */]
      }, {
        path: 'codeDemo',
        name: 'codeDemo',
        component: __WEBPACK_IMPORTED_MODULE_15__pages_it_codeDemo_index__["a" /* default */]
      }, {
        path: 'vue',
        name: 'vue',
        component: __WEBPACK_IMPORTED_MODULE_16__pages_it_vue_index__["a" /* default */]
      }, {
        path: 'interviewQuestions',
        name: 'interviewQuestions',
        component: __WEBPACK_IMPORTED_MODULE_19__pages_it_interviewQuestions_index__["a" /* default */]
      }, {
        path: 'kinetic',
        name: 'kinetic',
        component: __WEBPACK_IMPORTED_MODULE_20__pages_it_kinetic_index__["a" /* default */]
      }, {
        path: 'jsplumb',
        name: 'jsplumb',
        component: __WEBPACK_IMPORTED_MODULE_22__pages_it_jsplumb_index__["a" /* default */]
      }]
    }, {
      path: 'travel',
      name: 'travel',
      component: __WEBPACK_IMPORTED_MODULE_17__pages_other_travel_index__["a" /* default */]
    }, {
      path: '/works/resume',
      name: 'resume',
      component: __WEBPACK_IMPORTED_MODULE_18__pages_works_resume_index__["a" /* default */]
    }, {
      path: '/works/kineticFlowCahrt',
      name: 'kineticFlowCahrt',
      component: __WEBPACK_IMPORTED_MODULE_21__pages_works_kineticjs_index__["a" /* default */]
    }]
  }]
}));
/*
export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld', 
      // component: HelloWorld
      name: 'index',
      component: index
    }, 
    {
      path: '/first',
      name: 'First',
      component: First
    }, {
      path: '/second',
      name: 'Second',
      component: Second
    }, {
      path: '/ueditor',
      name: 'Ueditor',
      component: Ueditor
    }, {
      path: '/works/docstructure',
      name: 'docStructure',
      component: docStructure
    }, 
    // {
    //   path: '/learn/gongwuyuan',
    //   name: 'gongwuyuan',
    //   component: gongwuyuan
    // },
    {
      path: '/learn',
      component: learn,
      children: [
        {
          path: 'gongwuyuan',
          name: 'gongwuyuan',
          component: gongwuyuan
        },
        {
          path: 'gongwuyuan/pdf',
          name: 'pdf',
          component: pdf
        },
      ],
    },
    {
      path: '/it',
      component: it,
      children: [
        {
          path: 'git',
          name: 'git',
          component: git
        },
        {
          path: 'react',
          name: 'react',
          component: react
        },
        {
          path: 'codeDemo',
          name: 'codeDemo',
          component: codeDemo
        },
      ],
    },
    // {
    //   path: '/',
    //   name: 'index',
    //   component: Ueditor,
    //   children: [
    //     {
    //       path: '/learn',
    //       component: learn,
    //       children: [
    //         {
    //           path: 'gongwuyuan',
    //           name: 'gongwuyuan',
    //           component: gongwuyuan
    //         },
    //         {
    //           path: 'ueditor',
    //           name: 'Ueditor',
    //           component: Ueditor
    //         },
    //       ],
    //     },
    //   ],
    // },
  ]
})
*/

/***/ }),
/* 407 */,
/* 408 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(193);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5b8a6036_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(410);
function injectStyle (ssrContext) {
  __webpack_require__(409)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5b8a6036"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5b8a6036_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 409 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 410 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page_wrap"},[_c('el-container',[_c('el-main',{staticClass:"main"},[_c('router-view')],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 411 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(194);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1cf5bae6_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(413);
function injectStyle (ssrContext) {
  __webpack_require__(412)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1cf5bae6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1cf5bae6_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 412 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 413 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home_wrap"},[_c('table',[_c('tbody',[_c('tr',{staticClass:"row1"},[_c('td',[_c('el-row',_vm._l((_vm.data1),function(item,i){return _c('el-link',{key:i,staticClass:"font",on:{"click":function($event){return _vm.goPage(item.routeName)}}},[_vm._v(_vm._s(item.name))])}),1)],1)]),_vm._v(" "),_c('tr',{staticClass:"row2"},[_c('td',[_c('el-row',_vm._l((_vm.data2),function(item,i){return _c('el-link',{key:i,staticClass:"font",on:{"click":function($event){return _vm.goPage(item.routeName)}}},[_vm._v(_vm._s(item.name))])}),1)],1)]),_vm._v(" "),_c('tr',{staticClass:"row3"},[_c('td',[_c('el-row',_vm._l((_vm.data3),function(item,i){return _c('el-link',{key:i,staticClass:"font",on:{"click":function($event){return _vm.goPage(item.routeName)}}},[_vm._v(_vm._s(item.name))])}),1)],1)])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 414 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_HelloWorld_vue__ = __webpack_require__(195);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d8ec41bc_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_HelloWorld_vue__ = __webpack_require__(416);
function injectStyle (ssrContext) {
  __webpack_require__(415)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d8ec41bc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_HelloWorld_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d8ec41bc_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_HelloWorld_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* unused harmony default export */ var _unused_webpack_default_export = (Component.exports);


/***/ }),
/* 415 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 416 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('h1',[_vm._v(_vm._s(_vm.msg))]),_vm._v(" "),_c('h2',[_vm._v("Essential Links")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('h2',[_vm._v("Ecosystem")]),_vm._v(" "),_vm._m(1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://vuejs.org","target":"_blank"}},[_vm._v("\n        Core Docs\n      ")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://forum.vuejs.org","target":"_blank"}},[_vm._v("\n        Forum\n      ")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://chat.vuejs.org","target":"_blank"}},[_vm._v("\n        Community Chat\n      ")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://twitter.com/vuejs","target":"_blank"}},[_vm._v("\n        Twitter\n      ")])]),_vm._v(" "),_c('br'),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://vuejs-templates.github.io/webpack/","target":"_blank"}},[_vm._v("\n        Docs for This Template\n      ")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_c('a',{attrs:{"href":"http://router.vuejs.org/","target":"_blank"}},[_vm._v("\n        vue-router\n      ")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://vuex.vuejs.org/","target":"_blank"}},[_vm._v("\n        vuex\n      ")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://vue-loader.vuejs.org/","target":"_blank"}},[_vm._v("\n        vue-loader\n      ")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/vuejs/awesome-vue","target":"_blank"}},[_vm._v("\n        awesome-vue\n      ")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 417 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_First_vue__ = __webpack_require__(196);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_38637f3e_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_First_vue__ = __webpack_require__(421);
function injectStyle (ssrContext) {
  __webpack_require__(418)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-38637f3e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_First_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_38637f3e_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_First_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 418 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 419 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 420 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"confirm-button"},[_c('button',{on:{"click":_vm.getButtonClick}},[_vm._v(" "+_vm._s(_vm.text || '确认'))])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 421 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"first-app"},[_vm._v("\n    "+_vm._s(_vm.mymsg)+"\n    "),_c('Confirm',{attrs:{"text":"注册"},on:{"message":_vm.getMessage}}),_vm._v(" "),_c('p',[_c('router-link',{attrs:{"to":"/second"}},[_vm._v("去第二个页面")])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 422 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Second_vue__ = __webpack_require__(199);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_27eb54da_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Second_vue__ = __webpack_require__(424);
function injectStyle (ssrContext) {
  __webpack_require__(423)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Second_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_27eb54da_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Second_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 423 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 424 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"second-app"},[_vm._v("\n    "+_vm._s(_vm.mymsg)+"\n    "),_c('p',[_c('router-link',{attrs:{"to":"/first"}},[_vm._v("去第一个页面")])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 425 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Ueditor_vue__ = __webpack_require__(200);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c5c9b6ca_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Ueditor_vue__ = __webpack_require__(427);
function injectStyle (ssrContext) {
  __webpack_require__(426)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c5c9b6ca"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Ueditor_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c5c9b6ca_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Ueditor_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 426 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 427 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ueditor-app"},[_c('script',{ref:"script",attrs:{"name":"myueditor","type":"text/plain"}}),_vm._v(" "),_c('el-row',[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.getEditorHtml}},[_vm._v("获取编辑器内容")])],1),_vm._v(" "),_c('p',[_vm._v("getContent:")]),_vm._v(" "),_c('div',{domProps:{"innerHTML":_vm._s(_vm.ueditorCont)}}),_vm._v(" "),_c('p',[_vm._v("getAllHtml:")]),_vm._v(" "),_c('div',{domProps:{"innerHTML":_vm._s(_vm.ueditorHtml)}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 428 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(201);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5fde45cd_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(442);
function injectStyle (ssrContext) {
  __webpack_require__(429)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5fde45cd"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5fde45cd_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 429 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 430 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_leftNav_vue__ = __webpack_require__(202);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_186c6947_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_leftNav_vue__ = __webpack_require__(432);
function injectStyle (ssrContext) {
  __webpack_require__(431)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-186c6947"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_leftNav_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_186c6947_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_leftNav_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 431 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 432 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"left-nav"},[_c('el-input',{attrs:{"placeholder":"输入关键字进行过滤"},model:{value:(_vm.filterText),callback:function ($$v) {_vm.filterText=$$v},expression:"filterText"}}),_vm._v(" "),_c('el-tree',{ref:"tree",staticClass:"filter-tree",attrs:{"data":_vm.data,"props":_vm.defaultProps,"default-expand-all":"","filter-node-method":_vm.filterNode},on:{"node-click":_vm.nodeClick}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 433 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_centerTab_vue__ = __webpack_require__(203);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e07d966_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_centerTab_vue__ = __webpack_require__(438);
function injectStyle (ssrContext) {
  __webpack_require__(434)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0e07d966"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_centerTab_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e07d966_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_centerTab_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 434 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 435 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_fullText_vue__ = __webpack_require__(204);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5987a6de_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_fullText_vue__ = __webpack_require__(437);
function injectStyle (ssrContext) {
  __webpack_require__(436)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5987a6de"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_fullText_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5987a6de_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_fullText_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 436 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 437 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"full-text"},[_c('div',{staticClass:"doc-content",domProps:{"innerHTML":_vm._s(_vm.docContent)}})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 438 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"center-tab"},[_c('el-tabs',{attrs:{"type":"border-card"}},[_c('el-tab-pane',[_c('span',{attrs:{"slot":"label"},slot:"label"},[_c('i',{staticClass:"el-icon-date"}),_vm._v(" 全文")]),_vm._v(" "),_c('fullText')],1),_vm._v(" "),_c('el-tab-pane',{attrs:{"label":"规则","disabled":!_vm.isRule}},[_vm._v("规则")]),_vm._v(" "),_c('el-tab-pane',{attrs:{"label":"相关规则"}},[_vm._v("相关规则")])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 439 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_right_vue__ = __webpack_require__(205);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0d2e1bee_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_right_vue__ = __webpack_require__(441);
function injectStyle (ssrContext) {
  __webpack_require__(440)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0d2e1bee"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_right_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0d2e1bee_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_right_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 440 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 441 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"right-wrap"},[_vm._v("\n    右侧评论\n")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 442 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"doc-structure"},[_c('el-container',[_c('el-header',{staticClass:"header"},[_vm._v("Header")]),_vm._v(" "),_c('el-main',{staticClass:"main"},[_c('el-row',[_c('el-col',{attrs:{"span":5}},[_c('leftNav')],1),_vm._v(" "),_c('el-col',{attrs:{"span":14}},[_c('centerTab')],1),_vm._v(" "),_c('el-col',{attrs:{"span":5}},[_c('right')],1)],1)],1),_vm._v(" "),_c('el-footer',{staticClass:"footer"},[_vm._v("Footer")])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 443 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9b17dd54_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(445);
function injectStyle (ssrContext) {
  __webpack_require__(444)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9b17dd54"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9b17dd54_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 444 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 445 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"learn-wrap"},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 446 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(207);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4a4507e7_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(448);
function injectStyle (ssrContext) {
  __webpack_require__(447)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4a4507e7"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4a4507e7_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 447 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 448 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"gongwuyuan-wrap"},[_c('el-container',[_c('el-header',{staticClass:"header"},[_vm._v("Header")]),_vm._v(" "),_c('el-main',{staticClass:"main"},_vm._l((_vm.data),function(item,i){return _c('div',{key:i},[_c('el-divider',{attrs:{"content-position":"left"}},[_vm._v(_vm._s(item.name))]),_vm._v(" "),_vm._l((item.children),function(obj,j){return _c('dl',{key:j},[(obj.isLink)?_c('dt',[_c('el-link',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.toPdf(obj.pdfId)}}},[_vm._v(_vm._s(obj.name))])],1):_c('dt',[_vm._v(_vm._s(obj.name))]),_vm._v(" "),_vm._l((obj.children),function(pdf,n){return (obj.children && obj.children.length)?_c('dd',{key:n},[(pdf.isLink)?_c('el-link',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.toPdf(pdf.pdfId)}}},[_vm._v(_vm._s(pdf.name))]):_c('span',[_vm._v(_vm._s(pdf.name))])],1):_vm._e()})],2)})],2)}),0),_vm._v(" "),_c('el-footer',{staticClass:"footer"},[_vm._v("Footer")])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 449 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pdf_vue__ = __webpack_require__(208);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_171da455_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pdf_vue__ = __webpack_require__(471);
function injectStyle (ssrContext) {
  __webpack_require__(450)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-171da455"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pdf_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_171da455_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pdf_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 450 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 451 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pdf01_vue__ = __webpack_require__(209);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_621db5c4_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pdf01_vue__ = __webpack_require__(454);
function injectStyle (ssrContext) {
  __webpack_require__(452)
  __webpack_require__(453)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-621db5c4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pdf01_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_621db5c4_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pdf01_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 452 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 453 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 454 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pdf-wrap"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"chapter-wrap"},[_vm._m(1),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('c1s1')}}},[_vm._v("第一节  中心理解题 ")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.c1s1),expression:"sectionOpen.c1s1"}],staticClass:"section-c"},[_vm._m(3),_vm._v(" "),_vm._m(4),_vm._v(" "),_c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("一、重点词语之关联词")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_vm._m(5),_vm._v(" "),_vm._m(6),_vm._v(" "),_vm._m(7),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("转折关系（转折之后是重点）")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d1,"props":_vm.defaultProps,"default-expand-all":""}})],1),_vm._v(" "),_vm._m(8),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("主题词")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d2,"props":_vm.defaultProps,"default-expand-all":""}})],1),_vm._v(" "),_vm._m(9),_vm._v(" "),_vm._m(10),_vm._v(" "),_vm._m(11),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("因果关系（结论是重点）")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d3,"props":_vm.defaultProps,"default-expand-all":""}})],1),_vm._v(" "),_vm._m(12),_vm._v(" "),_vm._m(13),_vm._v(" "),_vm._m(14),_vm._v(" "),_vm._m(15),_vm._v(" "),_vm._m(16),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("必要条件关系（“只有...才”中间是重点）")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d4,"props":_vm.defaultProps,"default-expand-all":""}})],1),_vm._v(" "),_vm._m(17),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("程度词")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d5,"props":_vm.defaultProps,"default-expand-all":""}})],1),_vm._v(" "),_vm._m(18),_vm._v(" "),_vm._m(19),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("并列关系（概括全面完整）")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d6,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1)]),_vm._v(" "),_c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、行文脉络")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_vm._m(20),_vm._v(" "),_vm._m(21),_vm._v(" "),_vm._m(22),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("行文脉络")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d7,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1)])])]),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('c1s2')}}},[_vm._v("第二节  细节判断题")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.c1s2),expression:"sectionOpen.c1s2"}],staticClass:"section-c"},[_vm._m(23),_vm._v(" "),_vm._m(24),_vm._v(" "),_vm._m(25),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("细节判断题")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d8,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1)])]),_vm._v(" "),_c('div',{staticClass:"chapter-wrap"},[_vm._m(26),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('c2s1')}}},[_vm._v("第一节  语句排序题 ")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.c2s1),expression:"sectionOpen.c2s1"}],staticClass:"section-c"},[_vm._m(27),_vm._v(" "),_vm._m(28),_vm._v(" "),_vm._m(29),_vm._v(" "),_vm._m(30),_vm._v(" "),_vm._m(31),_vm._v(" "),_vm._m(32),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("语句排序题")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d9,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1)]),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('c2s2')}}},[_vm._v("第二节  语句填空题")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.c2s2),expression:"sectionOpen.c2s2"}],staticClass:"section-c"},[_vm._m(33),_vm._v(" "),_vm._m(34),_vm._v(" "),_vm._m(35),_vm._v(" "),_vm._m(36),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("语句填空题")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d10,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1)]),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('c2s3')}}},[_vm._v("第三节  接语选择题")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.c2s3),expression:"sectionOpen.c2s3"}],staticClass:"section-c"},[_vm._m(37),_vm._v(" "),_vm._m(38),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("接语选择题")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d11,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1)])]),_vm._v(" "),_c('div',{staticClass:"chapter-wrap"},[_vm._m(39),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('c3s1')}}},[_vm._v("第一节  词的辨析")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.c3s1),expression:"sectionOpen.c3s1"}],staticClass:"section-c"},[_vm._m(40),_vm._v(" "),_vm._m(41),_vm._v(" "),_vm._m(42),_vm._v(" "),_vm._m(43),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("词的辨析")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d12,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1)]),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('c3s2')}}},[_vm._v("第二节  语境分析")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.c3s2),expression:"sectionOpen.c3s2"}],staticClass:"section-c"},[_vm._m(44),_vm._v(" "),_vm._m(45),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("语境分析")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d13,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1)])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pdf-cover"},[_c('h1',{staticClass:"text-c pdf-t"},[_c('span',[_vm._v("第一篇  言语理解与表达")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{staticClass:"text-c chapter-t"},[_c('span',[_vm._v("第一章 | 片段阅读")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("解题顺序：")]),_vm._v(" "),_c('p',[_vm._v("提问—文段—选项")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dl',{staticClass:"outline"},[_c('dt',[_vm._v("【提问方式】")]),_vm._v(" "),_c('dd',[_vm._v("这段文字主要 / 旨在 / 重在 / 意在 / 想要说明（论述、强调）的是……")]),_vm._v(" "),_c('dd',[_vm._v("这段文字的主旨 / 主题 / 观点是……")]),_vm._v(" "),_c('dd',[_vm._v("对这段文字概括最恰当的一项是……")]),_vm._v(" "),_c('dd',[_vm._v("……")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("1. 重点词语")]),_vm._v(" "),_c('p',[_vm._v("2. 行文脉络")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dl',{staticClass:"knowledge"},[_c('dt',[_vm._v("（一）转折关系")]),_vm._v(" "),_c('dd',[_vm._v("典型标志词：")]),_vm._v(" "),_c('dd',[_vm._v("虽然……但是……")]),_vm._v(" "),_c('dd',[_vm._v("尽管……可是……")]),_vm._v(" "),_c('dd',[_vm._v("…………不过……")]),_vm._v(" "),_c('dd',[_vm._v("…然而……")]),_vm._v(" "),_c('dd',[_vm._v("…却…… ")]),_vm._v(" "),_c('dd',[_vm._v("其实 / 事实上 / 实际上")]),_vm._v(" "),_c('dd',[_vm._v("……")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("理论要点：")]),_vm._v(" "),_c('p',[_vm._v("转折之后是重点")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("粉笔提示：")]),_vm._v(" "),_c('p',[_vm._v("错误选项特征：")]),_vm._v(" "),_c('p',[_vm._v("1. 转折前的内容")]),_vm._v(" "),_c('p',[_vm._v("2. 围绕例子的表述")]),_vm._v(" "),_c('p',[_vm._v("3. 围绕原因的表述")]),_vm._v(" "),_c('p',[_vm._v("4. 无中生有")]),_vm._v(" "),_c('p',[_vm._v("略读句子特征：例子、原因……")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("重点词语之主题词：")]),_vm._v(" "),_c('p',[_vm._v("1. 文段围绕其展开")]),_vm._v(" "),_c('p',[_vm._v("2. 一般高频出现")]),_vm._v(" "),_c('p',[_vm._v("3. 多为名词")]),_vm._v(" "),_c('p',[_vm._v("4. 前有引入或后有解释说明")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dl',{staticClass:"knowledge"},[_c('dt',[_vm._v("（二）因果关系")]),_vm._v(" "),_c('dd',[_vm._v("典型标志词：")]),_vm._v(" "),_c('dd',[_vm._v("因为……所以……")]),_vm._v(" "),_c('dd',[_vm._v("由于……因此……")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("理论要点：结论是重点")]),_vm._v(" "),_c('p',[_vm._v("引导结论的标志词：")]),_vm._v(" "),_c('p',[_vm._v("1. 所以、因此、因而、故而、于是、可见、看来（为什么、为何）")]),_vm._v(" "),_c('p',[_vm._v("2. 导致、致使、使得、造成")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("知识链接：")]),_vm._v(" "),_c('p',[_vm._v("结论句出现在文段开头 / 中间，之后仍有其他语句")]),_vm._v(" "),_c('p',[_vm._v("1. 之后的语句是进一步解释说明，此时中心句仍为结论句")]),_vm._v(" "),_c('p',[_vm._v("2. 之后又出现并列、因果、转折、对策等，需结合多种关联词共同分析")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dl',{staticClass:"knowledge"},[_c('dt',[_vm._v("（三）必要条件关系")]),_vm._v(" "),_c('dd',[_vm._v("典型格式：只有……才……")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("理论要点：")]),_vm._v(" "),_c('p',[_vm._v("必要条件是重点")]),_vm._v(" "),_c('p',[_vm._v("必要条件即“只有”和“才”之间的部分")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("知识链接：对策常考，很重要")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("对策标志词：")]),_vm._v(" "),_c('p',[_vm._v("1. 应该、应当、必须、需要、亟（jí）须、亟待 + 做法")]),_vm._v(" "),_c('p',[_vm._v("2. 通过 / 采取……手段 / 途径 / 措施 / 方式 / 方法 / 渠道，才能……")]),_vm._v(" "),_c('p',[_vm._v("3. 呼吁、倡导、提倡、提醒、建议 + 做法")]),_vm._v(" "),_c('p',[_vm._v("4. 前提、基础、保障 、关键")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("行文脉络：")]),_vm._v(" "),_c('p',[_vm._v("1. 提出问题 + 分析问题 + 解决问题")]),_vm._v(" "),_c('p',[_vm._v("2. 提出问题 + 解决问题 + 解释说明（意义效果）")]),_vm._v(" "),_c('p',[_vm._v("3. 对策 + 正反论证 / 原因论证")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("知识链接：反面论证")]),_vm._v(" "),_c('p',[_vm._v("典型格式：如果 / 倘若 / 一旦……+ 不好的结果")]),_vm._v(" "),_c('p',[_vm._v("具体应用：把前面的做法反过来，即为正确答案")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("知识链接：")]),_vm._v(" "),_c('p',[_vm._v("当文段中只有“提出问题 + 分析问题”的部分时，“解决问题”通常会作为正确答案出现在选项里")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("重点词语之程度词 :")]),_vm._v(" "),_c('p',[_vm._v("标志词：更、尤其、正是、特别是、真正、根本、最（核心、突出）等")]),_vm._v(" "),_c('p',[_vm._v("理论要点：程度词所在的语句通常为重点")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dl',{staticClass:"knowledge"},[_c('dt',[_vm._v("（四）并列关系")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("理论要点：概括全面完整")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("文段特征：")]),_vm._v(" "),_c('p',[_vm._v("1. 包含并列关联词及标点，如此外、另外、同时、以及、“ ；”")]),_vm._v(" "),_c('p',[_vm._v("2. 句式相同或相近")]),_vm._v(" "),_c('p',[_vm._v("3. 无明显其他关联词语")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("选项特征：")]),_vm._v(" "),_c('p',[_vm._v("1. 两方面情况：和、及、与、同")]),_vm._v(" "),_c('p',[_vm._v("2. 更多种情况：许多、一些、不同、各种、一系列")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("理论要点：把握中心句及分述句的特征")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("中心句特征：")]),_vm._v(" "),_c('p',[_vm._v("观点（对策、结论、评价）")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("分述句特征：")]),_vm._v(" "),_c('p',[_vm._v("1. 举例子：“比如”“例如”“……就是例证”等")]),_vm._v(" "),_c('p',[_vm._v("2. 调查报告、数据资料等")]),_vm._v(" "),_c('p',[_vm._v("3. 正反论证")]),_vm._v(" "),_c('p',[_vm._v("4. 原因解释")]),_vm._v(" "),_c('p',[_vm._v("5. 并列分述")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("知识链接：总—分（观点 + 解释说明）")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("中心句后为不同类型的解释说明")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("知识链接：分—总")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("1. 结论、对策")]),_vm._v(" "),_c('p',[_vm._v("2. 代词（“这”“此”）引导的尾句需关注")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dl',{staticClass:"outline"},[_c('dt',[_vm._v("【提问方式】")]),_vm._v(" "),_c('dd',[_vm._v("以下对文段理解正确 / 不正确的是……")]),_vm._v(" "),_c('dd',[_vm._v("符合 / 不符合这段话意思的是……")]),_vm._v(" "),_c('dd',[_vm._v("从文段中可以得知 / 推出的是……")]),_vm._v(" "),_c('dd',[_vm._v("……")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("一、典型细节题")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("错误选项类型：")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("1. 无中生有")]),_vm._v(" "),_c('p',[_vm._v("2. 偷换概念（替换、混搭）")]),_vm._v(" "),_c('p',[_vm._v("3. 偷换时态")]),_vm._v(" "),_c('p',[_vm._v(" - 将来时（将要、立刻、趋势、以后）")]),_vm._v(" "),_c('p',[_vm._v(" - 完成时（已、已经、了、完成）")]),_vm._v(" "),_c('p',[_vm._v(" - 进行时（正在、在……中、着）")]),_vm._v(" "),_c('p',[_vm._v("4. 偷换逻辑")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("快速解题技巧：")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("1. 对比项")]),_vm._v(" "),_c('p',[_vm._v("标志词：A 比 B 更……")]),_vm._v(" "),_c('p',[_vm._v(" - A 高于 / 优于 B")]),_vm._v(" "),_c('p',[_vm._v(" - 利大于弊")]),_vm._v(" "),_c('p',[_vm._v(" - ……")]),_vm._v(" "),_c('p',[_vm._v("2. 相对绝对项")]),_vm._v(" "),_c('p',[_vm._v(" - 绝对表述：一定、必定、都……")]),_vm._v(" "),_c('p',[_vm._v(" - 相对表述：可能、也许、往往……")]),_vm._v(" "),_c('p',[_vm._v("3. 表述与实际不符项")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、细节主旨化")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("理论要点：")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("优选契合主旨的选项")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{staticClass:"text-c chapter-t"},[_c('span',[_vm._v("第二章 | 语言表达")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dl',{staticClass:"outline"},[_c('dt',[_vm._v("【提问方式】")]),_vm._v(" "),_c('dd',[_vm._v("将以上 / 以下几个句子重新排列，语序正确的是……")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("理论要点：")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("1. 根据选项提示，对比后确定首句")]),_vm._v(" "),_c('p',[_vm._v("2. 确定捆绑集团 / 确定顺序 / 确定尾句")]),_vm._v(" "),_c('p',[_vm._v("3. 验证（只验证你基本锁定的答案，而非全部验证）")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("一、确定首句")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('dl',{staticClass:"knowledge"},[_c('dt',[_vm._v("（一）下定义（……就是 / 是指）")])]),_vm._v(" "),_c('dl',{staticClass:"knowledge"},[_c('dt',[_vm._v("（二）背景引入（随着、近年来、在……大背景 / 环境下）")])]),_vm._v(" "),_c('dl',{staticClass:"knowledge"},[_c('dt',[_vm._v("（三）非首句特征（指代词、关联词后半部分）")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、确定捆绑集团")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('dl',{staticClass:"knowledge"},[_c('dt',[_vm._v("（一）指代词捆绑")])]),_vm._v(" "),_c('dl',{staticClass:"knowledge"},[_c('dt',[_vm._v("（二）关联词捆绑")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("三、确定顺序")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('dl',{staticClass:"knowledge"},[_c('dt',[_vm._v("（一）时间顺序")])]),_vm._v(" "),_c('dl',{staticClass:"knowledge"},[_c('dt',[_vm._v("（二）逻辑顺序")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("四、确定尾句（因此、所以、看来、于是、这、应该、需要）")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dl',{staticClass:"outline"},[_c('dt',[_vm._v("【提问方式】")]),_vm._v(" "),_c('dd',[_vm._v("填入画横线部分最恰当的一句 / 项是……")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("理论要点：")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("横线在结尾：")]),_vm._v(" "),_c('p',[_vm._v("1. 总结前文")]),_vm._v(" "),_c('p',[_vm._v("2. 提出对策")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("理论要点：")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("横线在开头：")]),_vm._v(" "),_c('p',[_vm._v("需概括文段的中心内容")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("理论要点：")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("横线在中间：")]),_vm._v(" "),_c('p',[_vm._v("1. 注意与上下文的联系")]),_vm._v(" "),_c('p',[_vm._v("2. 把握好主题词，保证与文段话题一致")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('dl',{staticClass:"outline"},[_c('dt',[_vm._v("【提问方式】")]),_vm._v(" "),_c('dd',[_vm._v("作者接下来最有可能讲述的是……")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("理论要点：重点关注文段最后一句话")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("干扰项特征：文段中已经论述过的内容")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{staticClass:"text-c chapter-t"},[_c('span',[_vm._v("第三章 | 逻辑填空")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("一、词义侧重")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("辨析方法：")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("1. 用不一样的字组词")]),_vm._v(" "),_c('p',[_vm._v("2. 整体进行搭配组词")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、固定搭配")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("理论要点：")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("找准搭配对象（常用词、热点词）")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("三、程度轻重")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("理论要点：")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("所填词语的程度轻重与文段意思的轻重保持一致")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("四、感情色彩")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("理论要点：")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("1. 褒义、贬义、中性")]),_vm._v(" "),_c('p',[_vm._v("2. 所填词语的感情色彩与文段的感情色彩保持一致")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("一、关联关系")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("转折")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("理论要点：前后语义相反")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("递进")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("理论要点：语义程度前轻后重")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("并列")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("理论要点：")]),_vm._v(" "),_c('p',[_vm._v("1. 同义并列：顿号（、）、逗号（，）")]),_vm._v(" "),_c('p',[_vm._v("2. 反义并列：不是……而是……、是……不是……、相反、反之等")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、对应关系")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("解释类对应")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("题干特点：分句，______，分句")]),_vm._v(" "),_c('p',[_vm._v("标志词：即、就是、可以说、可谓、无异于、比如、例如等")]),_vm._v(" "),_c('p',[_vm._v("标点：冒号（ ：）、破折号（——）")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("重点词句对应")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("1. 重点词：指代词 / 主题词 / 形象表达")]),_vm._v(" "),_c('p',[_vm._v("2. 重点句：完整语句")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("提示：")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("文段中的完整语句可作为解题的提示")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 455 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pdf02_vue__ = __webpack_require__(210);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_49dba7ed_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pdf02_vue__ = __webpack_require__(458);
function injectStyle (ssrContext) {
  __webpack_require__(456)
  __webpack_require__(457)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-49dba7ed"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pdf02_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_49dba7ed_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pdf02_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 456 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 457 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 458 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pdf-wrap"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"chapter-wrap"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('c1s1')}}},[_vm._v("第一节  位置规律")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.c1s1),expression:"sectionOpen.c1s1"}],staticClass:"section-c"},[_vm._m(2),_vm._v(" "),_vm._m(3),_vm._v(" "),_vm._m(4),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("位置规律")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d1,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1)]),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('c1s2')}}},[_vm._v("第二节  样式规律")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.c1s2),expression:"sectionOpen.c1s2"}],staticClass:"section-c"},[_vm._m(5),_vm._v(" "),_vm._m(6),_vm._v(" "),_vm._m(7),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("样式规律")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d2,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1)]),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('c1s3')}}},[_vm._v("第三节  属性规律")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.c1s3),expression:"sectionOpen.c1s3"}],staticClass:"section-c"},[_vm._m(8),_vm._v(" "),_vm._m(9),_vm._v(" "),_vm._m(10),_vm._v(" "),_vm._m(11),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("属性规律")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d3,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1)]),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('c1s4')}}},[_vm._v("第四节  特殊规律")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.c1s4),expression:"sectionOpen.c1s4"}],staticClass:"section-c"},[_vm._m(12),_vm._v(" "),_vm._m(13),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("特殊规律")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d4,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1)]),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('c1s5')}}},[_vm._v("第五节  数量规律")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.c1s5),expression:"sectionOpen.c1s5"}],staticClass:"section-c"},[_vm._m(14),_vm._v(" "),_vm._m(15),_vm._v(" "),_vm._m(16),_vm._v(" "),_vm._m(17),_vm._v(" "),_vm._m(18),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("数量规律")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d5,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1)]),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('c1s6')}}},[_vm._v("第六节  空间重构")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.c1s6),expression:"sectionOpen.c1s6"}],staticClass:"section-c"},[_vm._m(19),_vm._v(" "),_vm._m(20),_vm._v(" "),_vm._m(21),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("空间类 - 六面体")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d6,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1)])]),_vm._v(" "),_c('div',{staticClass:"chapter-wrap"},[_vm._m(22),_vm._v(" "),_vm._m(23),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('c2s1')}}},[_vm._v("第一节  语义关系")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.c2s1),expression:"sectionOpen.c2s1"}],staticClass:"section-c"},[_vm._m(24),_vm._v(" "),_vm._m(25)])]),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('c2s2')}}},[_vm._v("第二节   逻辑关系")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.c2s2),expression:"sectionOpen.c2s2"}],staticClass:"section-c"},[_vm._m(26),_vm._v(" "),_vm._m(27),_vm._v(" "),_vm._m(28),_vm._v(" "),_vm._m(29),_vm._v(" "),_vm._m(30)])]),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('c2s3')}}},[_vm._v("第三节  语法关系")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.c2s3),expression:"sectionOpen.c2s3"}],staticClass:"section-c"},[_c('h4',[_vm._v("技巧：造句子")]),_vm._v(" "),_vm._m(31)])]),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('c2s4')}}},[_vm._v("第四节  词语拆分")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.c2s4),expression:"sectionOpen.c2s4"}],staticClass:"section-c"},[_c('h4',[_vm._v("技巧：造句子")]),_vm._v(" "),_vm._m(32)])]),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("类比推理")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d7,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1),_vm._v(" "),_c('div',{staticClass:"chapter-wrap"},[_c('h2',{staticClass:"text-c chapter-t",on:{"click":function($event){return _vm.sectionOpenClose('c3')}}},[_c('span',[_vm._v("第三章 | 定义判断")])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.c3),expression:"sectionOpen.c3"}],staticClass:"chapter-c"},[_vm._m(33),_vm._v(" "),_vm._m(34),_vm._v(" "),_vm._m(35),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("定义判断")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d8,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1)]),_vm._v(" "),_c('div',{staticClass:"chapter-wrap"},[_vm._m(36),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('c4s1')}}},[_vm._v("第一节  翻译推理")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.c4s1),expression:"sectionOpen.c4s1"}],staticClass:"section-c"},[_vm._m(37),_vm._v(" "),_vm._m(38),_vm._v(" "),_vm._m(39),_vm._v(" "),_vm._m(40),_vm._v(" "),_vm._m(41),_vm._v(" "),_vm._m(42),_vm._v(" "),_vm._m(43),_vm._v(" "),_vm._m(44),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("翻译推理")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d9,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1)]),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('c4s2')}}},[_vm._v("第二节  组合排列")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.c4s2),expression:"sectionOpen.c4s2"}],staticClass:"section-c"},[_vm._m(45),_vm._v(" "),_vm._m(46),_vm._v(" "),_vm._m(47),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("组合排列")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d10,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1)]),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('c4s3')}}},[_vm._v("第三节  逻辑论证")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.c4s3),expression:"sectionOpen.c4s3"}],staticClass:"section-c"},[_vm._m(48),_vm._v(" "),_vm._m(49),_vm._v(" "),_vm._m(50),_vm._v(" "),_vm._m(51),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("削弱论证")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d11,"props":_vm.defaultProps,"default-expand-all":""}})],1),_vm._v(" "),_vm._m(52),_vm._v(" "),_vm._m(53),_vm._v(" "),_vm._m(54),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("加强论证")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d12,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1)])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pdf-cover"},[_c('h1',{staticClass:"text-c pdf-t"},[_c('span',[_vm._v("第二篇  判断推理")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{staticClass:"text-c chapter-t"},[_c('span',[_vm._v("第一章 | 图形推理")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("题目特征：元素组成相同")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("一、平移")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("1. 方向：上下、左右、对角线、顺逆时针")]),_vm._v(" "),_c('p',[_vm._v("2. 常见步数：恒定、递增")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、旋转、翻转")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("旋转：")]),_vm._v(" "),_c('p',[_vm._v("1. 方向：顺时针、逆时针")]),_vm._v(" "),_c('p',[_vm._v("2. 常见角度：30°、45°、60°、90°、180°")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("翻转：")]),_vm._v(" "),_c('p',[_vm._v("1. 左右翻转：图形沿竖轴对称")]),_vm._v(" "),_c('p',[_vm._v("2. 上下翻转：图形沿横轴对称")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("题目特征：元素组成相似")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("一、加减同异")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("图形特征：线条重复出现")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("1. 相加、相减")]),_vm._v(" "),_c('p',[_vm._v("2. 求同、求异")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、黑白运算")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("1. 题目特征：图形轮廓和分割区域相同，不同区域“黑白”颜色不同，且黑块数量不成规律")]),_vm._v(" "),_c('p',[_vm._v("2. 解题技巧：按照对应位置进行“黑白”相加运算，将所得规律应用于所求图形")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("题目特征：元素组成不相同、不相似")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("一、对称性")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("1. 轴对称（沿着线折叠后，线两边的部分能够完全重合）")]),_vm._v(" "),_c('p',[_vm._v("2. 中心对称（图形旋转 180°后和原图形完全重合）")]),_vm._v(" "),_c('p',[_vm._v("3. 轴对称 + 中心对称：有两条相互垂直的对称轴")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、曲直性")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("题目特征：题干图形由全曲线图、全直线图或者既有曲线又有直线的图形构成")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("三、开闭性")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("题目特征：题干图形由全开放图、全封闭图或半开半闭图构成")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("一、图形间关系")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("题目特征：题干每幅图都出现两个或多个封闭图形连在一起")]),_vm._v(" "),_c('p',[_vm._v("考点：")]),_vm._v(" "),_c('p',[_vm._v("1. 相离：图形分开，没有公共部分")]),_vm._v(" "),_c('p',[_vm._v("2. 相交：")]),_vm._v(" "),_c('p',[_vm._v("（1）相交于点")]),_vm._v(" "),_c('p',[_vm._v("（2）相交于线")]),_vm._v(" "),_c('p',[_vm._v("（3）相交于面：相交面的形状")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、功能元素")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("观察功能元素对其他图形的标记作用")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("题目特征：元素组成不相同、不相似且无属性规律")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("一、面数量")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("特征图：图形被分割，封闭面明显")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、线数量")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("特征图：")]),_vm._v(" "),_c('p',[_vm._v("1. 直线数：多边形、单一直线")]),_vm._v(" "),_c('p',[_vm._v("2. 曲线数：曲线图形（全曲线图、圆、弧）")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("一笔画：")]),_vm._v(" "),_c('p',[_vm._v("1. 线条之间全部连通")]),_vm._v(" "),_c('p',[_vm._v("2. 奇点数为 0 或 2 个")]),_vm._v(" "),_c('p',[_vm._v("奇点：发射出奇数条线的点")]),_vm._v(" "),_c('p',[_vm._v("注：所有的端点都是奇点，数奇点时要数上端点")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("多笔画：")]),_vm._v(" "),_c('p',[_vm._v("连通图笔画数 = 奇点数 ÷2（任何图形的奇点数一定为偶数）")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("常见笔画数特征图：")]),_vm._v(" "),_c('p',[_vm._v("五角星、“日”、“田”、“日”和“田”的变形图、圆和圆相切与相交、多端点图形")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("三、点数量")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("特征图：线条和线条交叉明显")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("四、素数量")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("1. 元素种类")]),_vm._v(" "),_c('p',[_vm._v("2. 元素个数")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("3. 部分数")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("解题思维：")]),_vm._v(" "),_c('p',[_vm._v("1. 注意折向——平面图为纸盒的外表面")]),_vm._v(" "),_c('p',[_vm._v("2. 利用相对关系和相邻关系排除错误选项")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("一、相对面")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("应用：一组相对面出现 2 个的选项——排除")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("展开图中如何判断相对面？")]),_vm._v(" "),_c('p',[_vm._v("1. 同行或同列相隔一个面")]),_vm._v(" "),_c('p',[_vm._v("2. “Z”字形两端")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、相邻面")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("应用：折叠前后相邻关系保持不变")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("画边法排除错误相邻关系")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{staticClass:"text-c chapter-t"},[_c('span',[_vm._v("第二章 | 类比推理")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("题目要求：")]),_vm._v(" "),_c('p',[_vm._v("给出一组相关的词，要求通过观察分析，在备选答案中找出一组与之在逻辑关系上最为贴近或相似的词")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("常见题型：")]),_vm._v(" "),_c('p',[_vm._v("1. 两词型——A ∶ B")]),_vm._v(" "),_c('p',[_vm._v("2. 三词型——A ∶ B ∶ C")]),_vm._v(" "),_c('p',[_vm._v("3. 填空型——A  对于  （    ） 相当于  （    ）  对于  B")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("一、近义关系、反义关系")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("1. 近义关系：词语意义相近")]),_vm._v(" "),_c('p',[_vm._v("例：理想∶梦想 锲而不舍∶坚持不懈")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("2. 反义关系：词语意义相反")]),_vm._v(" "),_c('p',[_vm._v("例：成功∶失败 半途而废∶有始有终")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、比喻义、象征义")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("比喻义、象征义：把一种事物比喻成另外的事物，或者词语本身的含义同时是另外一种事物的象征")]),_vm._v(" "),_c('p',[_vm._v("例：月亮∶玉盘  松鹤∶长寿")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("一、全同关系")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v(" 全同关系：词语意义完全相同")]),_vm._v(" "),_c('p',[_vm._v("例：西红柿∶番茄")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、并列关系")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("1. 矛盾关系：是指对立的两种情况，不存在第三种情况，二者是非此即彼的关系")]),_vm._v(" "),_c('p',[_vm._v("例：生∶死  正义∶非正义")]),_vm._v(" "),_c('p',[_vm._v("2. 反对关系：是指在对立的两种情况之外，还存在其他情况，二者不是非此即彼的关系")]),_vm._v(" "),_c('p',[_vm._v("例：红色∶白色  苹果∶香蕉")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("三、包容关系")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("1. 种属关系：A 是 B 的一种")]),_vm._v(" "),_c('p',[_vm._v("例：苹果∶水果义")]),_vm._v(" "),_c('p',[_vm._v("2. 组成关系∶ A 是 B 的一个组成部分")]),_vm._v(" "),_c('p',[_vm._v("例：轮胎∶汽车")]),_vm._v(" "),_c('p',[_vm._v("区分：包容关系中如果能用“是”造句子造得通顺，那么就是种属关系")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("四、交叉关系")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("高频对应关系：")]),_vm._v(" "),_c('p',[_vm._v("1. 材料    ⇒ 例：木材∶家具")]),_vm._v(" "),_c('p',[_vm._v("2. 工艺    ⇒ 例：蚕丝∶织造")]),_vm._v(" "),_c('p',[_vm._v("3. 属性    ⇒ 例：盐∶咸")]),_vm._v(" "),_c('p',[_vm._v("4. 功能    ⇒ 例：银行卡∶支付")]),_vm._v(" "),_c('p',[_vm._v("5. 时间顺序 ⇒ 例：预习∶上课")]),_vm._v(" "),_c('p',[_vm._v("6. 因果    ⇒ 例：炎热∶中暑")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("五、对应关系")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("交叉关系：有的 A 是 B 并且有的 A 不是 B")]),_vm._v(" "),_c('p',[_vm._v("   有的 B 是 A 并且有的 B 不是 A")]),_vm._v(" "),_c('p',[_vm._v("例：女士∶公务员")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("1. 主谓关系")]),_vm._v(" "),_c('p',[_vm._v("例：学生∶学习")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("2. 动宾关系")]),_vm._v(" "),_c('p',[_vm._v("例：学习∶功课")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("3. 主宾关系")]),_vm._v(" "),_c('p',[_vm._v("例：学生∶功课")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("拆分思维：")]),_vm._v(" "),_c('p',[_vm._v("什么时候拆分看？")]),_vm._v(" "),_c('p',[_vm._v("1. 单字拆分")]),_vm._v(" "),_c('p',[_vm._v("例：寒∶寒冷")]),_vm._v(" "),_c('p',[_vm._v("2. 成语被拆分")]),_vm._v(" "),_c('p',[_vm._v("例：南征∶北战")]),_vm._v(" "),_c('p',[_vm._v("3. 两组词语之间没有明显逻辑关系")]),_vm._v(" "),_c('p',[_vm._v("例：成败∶呼吸")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("解题思维：")]),_vm._v(" "),_c('p',[_vm._v("1. 看清提问方式，为“属于 / 符合”“不属于 / 不符合”定义等/p>\n                ")]),_c('p',[_vm._v("2. 识别有效信息——找准关键词、关键句")]),_vm._v(" "),_c('p',[_vm._v("3. 逐一分析选项，当纠结时采用对比的思维进行排除，最终选择更符合题干要求的选项")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("一、快速识别有效信息")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("方法一：关键词——主体、客体")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("主体、客体错误的选项一定不符合定义")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("方法二：句式")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("常见关键词：")]),_vm._v(" "),_c('p',[_vm._v("通过、利用")]),_vm._v(" "),_c('p',[_vm._v("以、达到")]),_vm._v(" "),_c('p',[_vm._v("因为、由于")]),_vm._v(" "),_c('p',[_vm._v("导致、从而")]),_vm._v(" "),_c('p',[_vm._v("当……时、在……过程中、在……前 / 后")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("方法三：句号与补充说明")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("1. 优先看定义所在的句子")]),_vm._v(" "),_c('p',[_vm._v("2. 当定义所在句子不好理解时，可重点关注后面的补充说明部分")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("常见补充说明关键词：即、包括、也就是说、换言之……")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("多定义：")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("1. 问哪个定义优先看哪个定义")]),_vm._v(" "),_c('p',[_vm._v("2. 在两个选项中纠结时，再与其他定义做对比")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、小技巧——拆词 / 同构选项排除法")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("1. 拆词")]),_vm._v(" "),_c('p',[_vm._v("2. 同构选项特征：")]),_vm._v(" "),_c('p',[_vm._v("（1）意思相近")]),_vm._v(" "),_c('p',[_vm._v("（2）结构相似")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{staticClass:"text-c chapter-t"},[_c('span',[_vm._v("第四章 | 逻辑判断")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("题型特征：")]),_vm._v(" "),_c('p',[_vm._v("1. 题干和选项中出现比较明显的逻辑关联词")]),_vm._v(" "),_c('p',[_vm._v("2. 提问方式为“可以推出”“不能推出”等")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("解题思维：")]),_vm._v(" "),_c('p',[_vm._v("1. 先翻译（将题干中逻辑关联词所在句子翻译成用箭头推出的关系）")]),_vm._v(" "),_c('p',[_vm._v("2. 再推理")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("一、翻译规则之“前推后”")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("典型逻辑关联词：")]),_vm._v(" "),_c('p',[_vm._v("如果……那么……")]),_vm._v(" "),_c('p',[_vm._v("若……则……")]),_vm._v(" "),_c('p',[_vm._v("只要……就……")]),_vm._v(" "),_c('p',[_vm._v("所有……都……")]),_vm._v(" "),_c('p',[_vm._v("为了……一定（必须）……")]),_vm._v(" "),_c('p',[_vm._v("……是……的充分条件")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、推理规则之“逆否等价”")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("符号表示：A → B = － B →－ A")]),_vm._v(" "),_c('p',[_vm._v("文字表示：肯前必肯后，否后必否前，否前肯后无必然结论（可能 / 可能不）")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("三、翻译规则之“后推前”")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("典型逻辑关联词：")]),_vm._v(" "),_c('p',[_vm._v("只有……才……")]),_vm._v(" "),_c('p',[_vm._v("不……不……")]),_vm._v(" "),_c('p',[_vm._v("除非……否则不……")]),_vm._v(" "),_c('p',[_vm._v("……是……的基础 / 假设 / 前提 / 关键")]),_vm._v(" "),_c('p',[_vm._v("……是……的必要条件 / 必不可少的条件")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("四、翻译规则之“且、或”")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("二者同时成立")]),_vm._v(" "),_c('p',[_vm._v("符号表示：A 且 B")]),_vm._v(" "),_c('p',[_vm._v("典型逻辑关联词：")]),_vm._v(" "),_c('p',[_vm._v("……和……")]),_vm._v(" "),_c('p',[_vm._v("……并且……")]),_vm._v(" "),_c('p',[_vm._v("既……又……")]),_vm._v(" "),_c('p',[_vm._v("不仅……而且……")]),_vm._v(" "),_c('p',[_vm._v("虽然……但是……")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("二者至少一个成立")]),_vm._v(" "),_c('p',[_vm._v("符号表示：A 或 B")]),_vm._v(" "),_c('p',[_vm._v("典型逻辑关联词：")]),_vm._v(" "),_c('p',[_vm._v("……或者……")]),_vm._v(" "),_c('p',[_vm._v("或者……或者……")]),_vm._v(" "),_c('p',[_vm._v("……和……至少一个")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("五、推理规则之“否一推一”")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("文字表示：当“或”关系为真时，否定一项可以得到另一项")]),_vm._v(" "),_c('p',[_vm._v("符号表示：A 或 B 为真，-A → B/-B → A")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("六、推理规则之“德·摩根定律”")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("-（A 且 B）＝ -A 或 -B")]),_vm._v(" "),_c('p',[_vm._v("-（A 或 B）＝ -A 且 -B")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("七、推理方式")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("提问方式：以下哪项的推理方式 / 结构与题干的推理方式 / 结构相同")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("一、排除法、代入法")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("1. 排除法")]),_vm._v(" "),_c('p',[_vm._v("2. 代入法")]),_vm._v(" "),_c('p',[_vm._v("题干信息确定优先使用排除法，题干信息不确定优先使用代入法")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、辅助技巧")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("（1）最大信息：以题干中出现次数最多的信息为推理起点")]),_vm._v(" "),_c('p',[_vm._v("（2）符号：＞、＝、＜")]),_vm._v(" "),_c('p',[_vm._v("（3）列表格")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("三、特殊题型：材料题")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("1. 与非材料题的解题方法一致")]),_vm._v(" "),_c('p',[_vm._v("2. 通过材料直接推出来的结论可以直接应用于所有题目")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("一、削弱之否定论点")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("选项特征：与论点表述的意思相反")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、削弱之拆桥")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("题型特征：论点和论据讨论的话题不一致")]),_vm._v(" "),_c('p',[_vm._v("   提问方式为问“削弱论证”时，优先考虑拆桥")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("选项特征：同时包含论点和论据中的关键词，并否定论点和论据之间的必然联系")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("三、削弱之否定论据")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("题型特征：题干中出现支持方、反对方观点相反，经常采用否定论据来削弱")]),_vm._v(" "),_c('p',[_vm._v("   题干存在论据并且在找不到否定论点和拆桥的情况下，考虑否定论据")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("选项特征：与论据表述的意思相反")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("四、削弱之因果倒置和他因削弱")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("题型特征：论点具有因果关系")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("选项特征：")]),_vm._v(" "),_c('p',[_vm._v("1. 因果倒置：将论点中的因果关系顺序颠倒")]),_vm._v(" "),_c('p',[_vm._v("2. 他因削弱：在原来原因 1 的基础上，选项增加另一个同时存在的原因 2 也能导致相同的结果，削弱的是原来原因的重要性或者唯一性")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("五、加强之补充论据")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("1. 解释：说明论点成立的原因")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("2. 举例：证明论点成立的例子")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("六、加强之搭桥")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("题型特征：论点和论据讨论的话题不一致")]),_vm._v(" "),_c('p',[_vm._v("  提问方式为问前提、假设、必要条件、支持论证时，优先考虑搭桥")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("选项特征：同时包含论点和论据中的关键词，并肯定论点和论据之间的关系")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("七、加强之必要条件")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("必要条件：选项为论点成立的必要条件")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 459 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pdf03_vue__ = __webpack_require__(211);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1f1bbe37_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pdf03_vue__ = __webpack_require__(462);
function injectStyle (ssrContext) {
  __webpack_require__(460)
  __webpack_require__(461)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1f1bbe37"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pdf03_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1f1bbe37_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pdf03_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 460 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 461 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 462 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pdf-wrap",attrs:{"id":"pdf03"}},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"chapter-wrap"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('s1')}}},[_vm._v("第一节  速算技巧")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.s1),expression:"sectionOpen.s1"}],staticClass:"section-c"},[_c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("一、截位直除")]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("截位直除")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d1,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1),_vm._v(" "),_c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、分数比较")]),_vm._v(" "),_vm._m(3),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("分数比较")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d2,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1)])]),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('s2')}}},[_vm._v("第二节  材料阅读")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.s2),expression:"sectionOpen.s2"}],staticClass:"section-c"},[_vm._m(4),_vm._v(" "),_vm._m(5),_vm._v(" "),_vm._m(6)]),_vm._v(" "),_c('el-card',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.s2),expression:"sectionOpen.s2"}],staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("材料阅读")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d3,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('s3')}}},[_vm._v("第三节 基期与现期")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.s3),expression:"sectionOpen.s3"}],staticClass:"section-c"},[_vm._m(7),_vm._v(" "),_vm._m(8),_vm._v(" "),_vm._m(9),_vm._v(" "),_vm._m(10)]),_vm._v(" "),_c('el-card',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.s3),expression:"sectionOpen.s3"}],staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("基期与现期")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d4,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('s4')}}},[_vm._v("第四节 一般增长率")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.s4),expression:"sectionOpen.s4"}],staticClass:"section-c"},[_vm._m(11),_vm._v(" "),_vm._m(12),_vm._v(" "),_vm._m(13),_vm._v(" "),_c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、比较")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】增长率比较：")]),_vm._v(" "),_c('p',[_vm._v("1.识别：增长最快（增长率找最大）/增长最慢（增长率找最小）；增速最快/最慢，增长率最高/最低。")]),_vm._v(" "),_c('p',[_vm._v("2.比较方法：r=增长量/基期量（基础公式，计算出增长量，再除以基期量，最后比较大小）=（现期- 基期）/基期=现期/基期- 基期/基期=现期/基期-1。假设第一个主体的现期为 A1，基期为 B1，第二个主体的现期为 A2，基期为 B2，则第一个主体的增长率=A1/B1-1，第二个主体的增长率=A2/B2-1，大家都有-1，则-1可以不看，直接比较“现期量/基期量”，“现期量/基期量”越大，增长率越大。")]),_vm._v(" "),_c('p',[_vm._v("（1）当现期/基期≥2，倍数关系明显，用“现期量/基期量”比较，“现期量/基期量”越大，增长率越大。")]),_vm._v(" "),_vm._m(14),_vm._v(" "),_c('p',[_vm._v("3.例：问（2012～2015）哪一年的同比增速最快？")]),_vm._v(" "),_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":12}},[_c('div',{staticClass:"my-echarts",attrs:{"id":"echart01"}})]),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('div',{staticClass:"my-echarts",attrs:{"id":"echart02"}})])],1),_vm._v(" "),_c('p',[_vm._v("（1）同比增速最快即增长率比较大小，已知每一年的现期和基期，当“现期/基期”倍数关系明显，用“现期量/基期量”比较，当“现期/基期”倍数关系不明显，用“增长量/基期量”比较。")]),_vm._v(" "),_vm._m(15),_vm._v(" "),_c('p',[_vm._v("（3）结论：资料分析中斜率没有意义，左图的 2013 年到 2014 年的斜率最大，斜率=△y/△x，横轴是年份，没有意义，故斜率在柱状图中没有意义。假设数值分别为 100、200、300，斜率相同，增长率分别为 100%、50%，故斜率和增长率无关。")]),_vm._v(" "),_vm._m(16)],1)])])]),_vm._v(" "),_c('el-card',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.s4),expression:"sectionOpen.s4"}],staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("一般增长率")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d5,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('s5')}}},[_vm._v("第五节 增长量")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.s5),expression:"sectionOpen.s5"}],staticClass:"section-c"},[_vm._m(17),_vm._v(" "),_vm._m(18),_vm._v(" "),_vm._m(19)]),_vm._v(" "),_c('el-card',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.s5),expression:"sectionOpen.s5"}],staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("增长量")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d6,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('s6')}}},[_vm._v("第六节 比重")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.s6),expression:"sectionOpen.s6"}],staticClass:"section-c"},[_vm._m(20),_vm._v(" "),_vm._m(21),_vm._v(" "),_vm._m(22),_vm._v(" "),_vm._m(23),_vm._v(" "),_vm._m(24)]),_vm._v(" "),_c('el-card',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.s6),expression:"sectionOpen.s6"}],staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("比重")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d7,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('s7')}}},[_vm._v("第七节 平均数")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.s7),expression:"sectionOpen.s7"}],staticClass:"section-c"},[_vm._m(25),_vm._v(" "),_vm._m(26),_vm._v(" "),_vm._m(27),_vm._v(" "),_vm._m(28),_vm._v(" "),_vm._m(29)]),_vm._v(" "),_c('el-card',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.s7),expression:"sectionOpen.s7"}],staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("平均数")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d8,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('s8')}}},[_vm._v("第八节 倍数")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.s8),expression:"sectionOpen.s8"}],staticClass:"section-c"},[_vm._m(30),_vm._v(" "),_vm._m(31),_vm._v(" "),_vm._m(32),_vm._v(" "),_vm._m(33),_vm._v(" "),_vm._m(34),_vm._v(" "),_vm._m(35)]),_vm._v(" "),_c('el-card',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.s8),expression:"sectionOpen.s8"}],staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("倍数")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d9,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('s9')}}},[_vm._v("第九节 特殊增长率")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.s9),expression:"sectionOpen.s9"}],staticClass:"section-c"},[_vm._m(36),_vm._v(" "),_vm._m(37),_vm._v(" "),_vm._m(38),_vm._v(" "),_vm._m(39),_vm._v(" "),_vm._m(40),_vm._v(" "),_vm._m(41)]),_vm._v(" "),_c('el-card',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.s9),expression:"sectionOpen.s9"}],staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("特殊增长率")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d10,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('s10')}}},[_vm._v("第十节 其他")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.s10),expression:"sectionOpen.s10"}],staticClass:"section-c"},[_c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("一、简单计算")]),_vm._v(" "),_vm._m(42),_vm._v(" "),_vm._m(43),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("简单计算")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d11,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1),_vm._v(" "),_c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、综合分析")]),_vm._v(" "),_vm._m(44),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("简单计算")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d11,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1)])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pdf-cover"},[_c('h1',{staticClass:"text-c pdf-t"},[_c('span',[_vm._v("方法精讲 - 资料")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h2',{staticClass:"text-c chapter-t"},[_c('span',[_vm._v("第二章 | 资料分析")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('dl',{staticClass:"outline"},[_c('dt',[_vm._v("【知识点】截位直除：")]),_vm._v(" "),_c('dd',[_vm._v("1.什么是截位？")]),_vm._v(" "),_c('dd',[_vm._v("（1）保留有效数字（从左边不是 0 的数字开始），看下一位进行四舍五入。")]),_vm._v(" "),_c('dd',[_vm._v("  - ①142857 截两位：截两位就是保留两位有效数字，保留 14，根据四舍五入，2 太小了就舍去，截两位为 14。")]),_vm._v(" "),_c('dd',[_vm._v("  - ②142857 截三位：截三位就是保留三位有效数字，保留 142，根据四舍五入，8 可以进位，截三位为 143。")]),_vm._v(" "),_c('dd',[_vm._v("  - ③在考场上要么截两位，要么截三位，没有必要截四位，选项差距大就截两位，选项差距小就截三位，截一位误差太大。")]),_vm._v(" "),_c('dd',[_vm._v("（2）练：")]),_vm._v(" "),_c('dd',[_vm._v("  - ①34517，截两位：35、截三位：345。")]),_vm._v(" "),_c('dd',[_vm._v("  - ②1.3368，截两位：1.3、截三位：1.34。")]),_vm._v(" "),_c('dd'),_vm._v(" "),_c('dd',[_vm._v("2.如何截位？看选项。截位直除是估算，选项差距大，说明对结果要求不高，估算的时候可以“浪”一点，所以选项差距大的时候可以截两位计算。")]),_vm._v(" "),_c('dd',[_vm._v("（1）首位不同（选项差距大，截两位）。")]),_vm._v(" "),_c('dd',[_vm._v("（2）首位相同，看次位差（最接近两项的次位差）：")]),_vm._v(" "),_c('dd',[_vm._v("  - ①次位差＞首位（选项差距大，截两位）。")]),_vm._v(" "),_c('dd',[_vm._v("  - ②次位差≤首位（选项差距小，截三位）。")]),_vm._v(" "),_c('dd'),_vm._v(" "),_c('dd',[_vm._v("3.练一练：判断以下选项差距。")]),_vm._v(" "),_c('dd',[_vm._v("……")]),_vm._v(" "),_c('dd',[_vm._v("4.截谁？看算式。")]),_vm._v(" "),_c('dd',[_vm._v("（1）一步除法：只截分母，比如形式为 A/B、A/（B+C）、A/（B-C）。")]),_vm._v(" "),_c('dd',[_vm._v("  - ①32345/26189")]),_vm._v(" "),_c('dd',[_vm._v("  - ②4286/（1+21%）。")]),_vm._v(" "),_c('dd',[_vm._v("  - ③为什么只截分母：假设选项差距大，则 32345/26189 转化为 32345/26，首位商 1；如果分子也截位转化为 32/26，首位商 1，与前面的计算没有区别，并且分子需要补 0，还会造成结果的不准确，所以一步除法只截分母。")]),_vm._v(" "),_c('dd',[_vm._v("  - ④截分子的情况：比如 32345678/26189，假设选项差距大，一般只截分母，分母截两位为 26，但是分子没必要抄那么多数，一般计算出前两位就可以确定答案了，此时可以有选择性的对分子进行截位，保留 3～4 位即可。")]),_vm._v(" "),_c('dd',[_vm._v("（2）多步除法：连除或者连乘，，比如：A/B*（C/D）、A/B÷（C/D）、A/B÷C，此时分子、分母都需要截位，然后约分、化简。")])])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('dl',{staticClass:"outline"},[_c('dt',[_vm._v("【注意】截位直除：")]),_vm._v(" "),_c('dd',[_vm._v("1.截谁：")]),_vm._v(" "),_c('dd',[_vm._v("（1）一步除法：建议只截分母。")]),_vm._v(" "),_c('dd',[_vm._v("（2）多步计算：建议上下都截。")]),_vm._v(" "),_c('dd',[_vm._v("2.截几位：看选项差距。")]),_vm._v(" "),_c('dd',[_vm._v("（1）选项差距大，截两位：")]),_vm._v(" "),_c('dd',[_vm._v("  - ①选项首位不同。")]),_vm._v(" "),_c('dd',[_vm._v("  - ②首位相同，次位差大于首位。")]),_vm._v(" "),_c('dd',[_vm._v("（2）选项差距小，截三位：首位相同且次位差小于等于首位。")]),_vm._v(" "),_c('dd',[_vm._v("3.步骤：看式子（截谁）→判选项（差距大：两位；差距小：三位）→再计算（不做硬算小笨蛋）。")])])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('dl',{staticClass:"outline"},[_c('dt',[_vm._v("【注意】")]),_vm._v(" "),_c('dd',[_vm._v("1.选项存在约 10 倍、100 倍等倍数关系时，保留位数进行截位。")]),_vm._v(" "),_c('dd',[_vm._v("2.原来是几位数截位之后仍为几位数。比如：14%截两位为 0.14（截后补小数点、不够位数补零）。")]),_vm._v(" "),_c('dd',[_vm._v("3.两组之间首数不同，只需截 2 位，每组中有 10、100、1000……等倍数关系，保留小数点和“0”。")]),_vm._v(" "),_c('dd'),_vm._v(" "),_c('dd',[_vm._v("选项之间没有 10 倍关系，不需要看小数点。")])]),_vm._v(" "),_c('dl',{staticClass:"outline"},[_c('dt',[_vm._v("【知识点】多步计算：同截分子、分母，好约分。")])]),_vm._v(" "),_c('dl',{staticClass:"outline"},[_c('dt',[_vm._v("【知识点】截位直除就是找到数字是多少，具体是几十、几百是没有关系的。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('dl',{staticClass:"outline"},[_c('dt',[_vm._v("【知识点】分数比较：")]),_vm._v(" "),_c('dd',[_vm._v("1.一大一小，直接看：分子大的分数大。")]),_vm._v(" "),_c('dd',[_vm._v("  - ①例：253/31 和 677/22 比大小，分子和分子比大小，677 大，分母和分母比大小，22 小，677/22 的分子大、分母小，所以分数值大，253/31＜677/22。")]),_vm._v(" "),_c('dd',[_vm._v("  - ②逻辑推导：有一个搭桥的过程。分子相同，分母小的分数大，所以 253/31＜253/22；分母相同，分子大的分数大，253/22＜677/22。所以 253/31＜677/22，253/31 是桥梁。如果做题时每次都想桥梁会影响速度，知道原理，考试时直接想结果。")]),_vm._v(" "),_c('dd'),_vm._v(" "),_c('dd',[_vm._v("2.同大同小：")]),_vm._v(" "),_c('dd',[_vm._v("（1）竖着直接除。例：253/22 和 677/31 比大小。分子 253 小，分母 22 小，所以 253/22 的分子小、分母也小。竖着除：253/22=10+，677/31=20+，所以 253/22＜677/31。")]),_vm._v(" "),_c('dd',[_vm._v("（2）横着看速度：谁快谁牛气，慢的看成 1。")]),_vm._v(" "),_c('dd',[_vm._v("  - ①例：253/22 和 677/44 比大小。分子分母同大同小，竖着直接除，\n                                    253/22=10+，677/44=10+，竖着直除结果都是十几的数，可以横向比较。横着看\n                                    速度，速度指的是变化倍数：分子 253 到 677，变化 2 倍多；分母 22 到 44，变\n                                    化刚好 2 倍。所以分子变化快，也就是分子变化速度快，分母变化速度慢，谁快\n                                    谁牛气，慢的看成 1，分母变化慢，将分母通通看成 1，253/1＜677/1，所以 253/22\n                                    ＜677/44。\n                                    ")]),_vm._v(" "),_c('dd',[_vm._v("  - ②横向比较的本质是分母化同思路：如果将分母化统一，253/22 的分母变\n                                    成 44，保证分数值不变，需要分子分母同时乘以 2，转化为（253*2）/44，分母\n                                    相同，直接比较分子，分母无论是几，都看成 1 即可。")]),_vm._v(" "),_c('dd',[_vm._v("（3）横竖哪个好看看哪个（倍数关系明显）。")]),_vm._v(" "),_c('dd'),_vm._v(" "),_c('dd',[_vm._v("3.理论示例：")]),_vm._v(" "),_c('dd',[_vm._v("（1）45.1/372.6 和 47.2/369.3。")]),_vm._v(" "),_c('dd',[_vm._v("  - 答：分子比较，47.2 大；分母比较，369.3 小。出现一大一小，分子大的分\n                                    数大，45.1/372.6＜47.2/369.3。")]),_vm._v(" "),_c('dd',[_vm._v("（2）45.1/372.6 和 138.6/765.4")]),_vm._v(" "),_c('dd',[_vm._v("  - 答：分子 138.6 大，分母 765.4 大，分子分母同大同小（分子大的分数值也\n                                    大），可以横向看（也可以竖着直接除），分子 45.1 到 138.6 变化 3 倍多，分母\n                                    372.6 到 765.4 变化 2 倍多，分子变化快，谁快谁牛气，慢的看成 1，分母都看\n                                    成 1，45.1/1＜138.6/1，所以 45.1/372.6＜138.6/765.4。")]),_vm._v(" "),_c('dd',[_vm._v("（3）45.1/372.6 和 89.3/765.4。")]),_vm._v(" "),_c('dd',[_vm._v("  - 答：分子 89.3 大，分母 765.4 大，分子分母同大同小，可以横向看，分子\n                                    45.1 到 89.3 变化接近 2 倍，分母 372.6 到 765.4 变化 2 倍多，分子变化慢，分\n                                    母变化快，慢的看成 1，1/372.6＞1/765.4，所以 45.1/372.6＞89.3/765.4。")]),_vm._v(" "),_c('dd',[_vm._v("（4）45.1/372.6 和 64.9/396.7。")]),_vm._v(" "),_c('dd',[_vm._v("  - 答：分子 64.9 大，分母 396.7 大，分子分母同大同小。")]),_vm._v(" "),_c('dd',[_vm._v("  - ①可以横着看，分子 45.1 到 64.9 变化 1 倍多，分母 372.6 到 396.7 变化也\n                                    是 1 倍多，倍数关系不明显改为竖着除，45.1/372.6≈1/8，64.9/396.7≈\n                                    65/390=1/6，1/8＜1/6，所以 45.1/372.6＜64.9/396.7。\n                                    ")]),_vm._v(" "),_c('dd',[_vm._v("  - ②横向也可以看出结果，分子 45.1 到 64.9 变化约 1.5 倍，分母 372.6 到396.7 变化不到 1.1 倍。分子变化快，分母变化慢，慢的看成 1，45.1/1＜64.9/1，\n                                    45.1/372.6＜64.9/396.7。可以通过增长率（明天内容）推出结果，45.1 到 64.9\n                                    增长约 50%，分母 372.6 到 396.7 增长 10-\n                                    %。")])])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('dt',[_vm._v("【注意】分数比较：")]),_vm._v(" "),_c('dd',[_vm._v("1.一大一小直接看：")]),_vm._v(" "),_c('dd',[_vm._v("（1）根据分子比大小。")]),_vm._v(" "),_c('dd',[_vm._v("（2）分子大的分数大，分子小的分数小。")]),_vm._v(" "),_c('dd',[_vm._v("2.同大同小比速度：")]),_vm._v(" "),_c('dd',[_vm._v("（1）竖着直接除。")]),_vm._v(" "),_c('dd',[_vm._v("（2）横着看速度。")]),_vm._v(" "),_c('dd',[_vm._v("（2）横竖哪个好看看哪个。")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("一、文字材料")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】文字材料：字数比较稠密，有些同学看着会比较难受，要先进行分段，做题前用 10 秒钟左右的时间找到每个段落的重点。")]),_vm._v(" "),_c('p',[_vm._v("1.三要素（重点）：时间、主体、数据。")]),_vm._v(" "),_c('p',[_vm._v("2.做题和逛商场一样，先看楼层介绍，吃饭要找到美食天地，买男士衣服要找到绅士馆，女士衣服要找到淑女馆，买化妆品要找到美妆馆，逛商场要根据楼层索引找到地方，材料就是根据三要素建立索引。")]),_vm._v(" "),_c('p',[_vm._v("3.文字材料——找主体（关键词）。")]),_vm._v(" "),_c('p',[_vm._v("（1）时间：材料中所有时间。")]),_vm._v(" "),_c('p',[_vm._v("（2）主体（关键词）：数据、单位、变化、联系。")]),_vm._v(" "),_c('p',[_vm._v("（3）操作：5～10 秒内，圈出每段关键词。")]),_vm._v(" "),_c('p',[_vm._v("（4）关键词：要与众不同的，方便定位。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、图表材料")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】图表材料：找数简单很多，但要注意不要看串行，可以用尺子比着看。")]),_vm._v(" "),_c('p',[_vm._v("1.表头：")]),_vm._v(" "),_c('p',[_vm._v("（1）时间：年份、月份、时间段。")]),_vm._v(" "),_c('p',[_vm._v("（2）主体：有无“标志性”词语。")]),_vm._v(" "),_c('p',[_vm._v("2.图例：主体——量（是今年还是去年，深色柱子还是浅色柱子）、率（环比还是同比）。")]),_vm._v(" "),_c('p',[_vm._v("3.单位：是否一致。例：给出铁路、公路、水运、民航等多种运输方式。铁路、公路、水运承载量比较大，民航的承载量比较小，可能是铁路 30、公路 20、水运 1、民航 500，从数字上看民航比较大，但要注意单位，通常都是 30 亿、20亿、1 亿、500 万，民航最小。")]),_vm._v(" "),_c('p',[_vm._v("4.备注：对材料的解释、补充。有注释一定要看注释，有时候是帮助解决概念问题，有时候是帮助解决公式问题，都是大家不常见的东西。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("三、综合材料")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】综合材料：既有文字，又有图表的材料。")]),_vm._v(" "),_c('p',[_vm._v("【注意】快速找数：")]),_vm._v(" "),_c('p',[_vm._v("1.文字材料：")]),_vm._v(" "),_c('p',[_vm._v("（1）标记段落主题词，与题干进行匹配。")]),_vm._v(" "),_c('p',[_vm._v("（2）注意相近词、时间、单位等。")]),_vm._v(" "),_c('p',[_vm._v("2.表格材料：横纵标目、标题、单位、备注。")]),_vm._v(" "),_c('p',[_vm._v("3.图形材料：标题、单位（人口出生率死亡率一般都是‰）、图例。")]),_vm._v(" "),_c('p',[_vm._v("4.综合材料：不同类型材料之间的关系、材料结构。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("基本术语：")]),_vm._v(" "),_c('p',[_vm._v("基期量与现期量")]),_vm._v(" "),_c('p',[_vm._v("资料分析中常涉及两个量的比较，作为对比参照的时期称为基期，对应的量称为基期量；而相对于基期的时期称为现期，所对应的量称为现期量。")]),_vm._v(" "),_c('p',[_vm._v("增长量与增长率")]),_vm._v(" "),_c('p',[_vm._v("增长量：用来表述基期量与现期量变化的绝对量。")]),_vm._v(" "),_c('p',[_vm._v("增长率：用来表述基期量与现期量变化的相对量。")]),_vm._v(" "),_c('p',[_vm._v("同比与环比")]),_vm._v(" "),_c('p',[_vm._v("同比：一般与上年同一时期相比较。")]),_vm._v(" "),_c('p',[_vm._v("环比：与相邻的上一个时期相比较。")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("【知识点】基期与现期：作为对比参照的是基期，而相对于基期比较的是现期。")]),_vm._v(" "),_c('p',[_vm._v("1.现期与基期，考试中 90%都用时间作为区分。例：2020 年我的体重 120斤，2019 年我的体重 100 斤。2020 年是现在的时间，2019 年是过去的时间，所以 2020 年为现期，2019 年为基期。要有时间轴概念，如果给 2019 年，求 2017、2012 年，向 2019 年左侧推就是基期；现期是未来的、没有发生的事情，给 2019年，求 2020 年，向 2019 年右侧推就是求现期。")]),_vm._v(" "),_c('p',[_vm._v("2.2020 年比 2019 年增长了 20 斤（增长量），增长的具体值就是增长量。增长量=现在-过去=现期- 基期=120-100=20 斤。")]),_vm._v(" "),_c('p',[_vm._v("3.2020 年比 2019 年增长 20%（增长率）。增长率（rate）就是增长的比例，用 r 表示，增长率=增长量/基期量=（现期量- 基期量）/基期量=（120-100）/100=20%。增长量和增长率问题下节课具体讲。")]),_vm._v(" "),_c('p',[_vm._v("4.有一种特殊表述：比如马云比我有钱，作为对比参照的是基期，“我”就是基期，“马云”就是现期；再比如我比马云帅，马云作为对比参照，所以“马云”就是基期，“我”就是现期。对比型题目总结：“比”字后面是基期，出现“A比 B……”，B 是基期，A 是现期。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("一、基期量")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】基期量：")]),_vm._v(" "),_c('p',[_vm._v("1.题型识别：给现在，求以前某时期的值。做题第一步先确定时间，圈出时间，问题时间在材料之前，比如材料给 2019 年，问 2018 年或者 2017年，求以前的时间（通过时间去区分），就是基期。")]),_vm._v(" "),_c('p',[_vm._v("2.计算公式：基期量=现期-增长量（最简单）。比如现在体重 120 斤，比过去增长了 20 斤，过去就是 120-20=100 斤。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】资料分析中加减做差的问题，选项精度和材料精度保持一致时，可以用尾数法解题。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】基期量：")]),_vm._v(" "),_c('p',[_vm._v("1.题型识别：给现期，求前面某个时期的值。")]),_vm._v(" "),_c('p',[_vm._v("2.列式：")]),_vm._v(" "),_c('p',[_vm._v("（1）给现期量和增长量：基期量=现期量-增长量（尾数法、估算）。")]),_vm._v(" "),_c('p',[_vm._v("（2）给现期量和增长率：基期量=现期量/（1+r）（今天的重点）。")]),_vm._v(" "),_c('p',[_vm._v("3.速算：r 为 rate，代表增长率。")]),_vm._v(" "),_c('p',[_vm._v("（1）|r|＞5%，截位直除。")]),_vm._v(" "),_c('p',[_vm._v("（2）|r|≤5%（选项差距小），化除为乘（后面会讲到）。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】同比与环比：")]),_vm._v(" "),_c('p',[_vm._v("1.同比：与上年同期相比。比如 2019 年的 7 月同比对应的是 2018 年 7 月；2019 年一季度同比对应的是 2018 年一季度。")]),_vm._v(" "),_c('p',[_vm._v("2.环比：与紧紧相邻的上一统计周期相比（月不环比、季度环比）。环比类似于“铁链子”，环环相扣。比如 2019 年 7 月的环比，7 月的“上一环”是 6 月，环比对应的是 2019 年 6 月；2019 年一季度的环比，一季度的“上一环”是四季度，环比对应的是 2018 年四季度。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】一旦增长率比较小的时候，除起来很麻烦，可以用化除为乘计算。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】化除为乘：")]),_vm._v(" "),_c('p',[_vm._v("1.应用：求基期，选项差距小，|r|≤5%。")]),_vm._v(" "),_c('p',[_vm._v("2.方法：A/（1-r）≈A+A*r；A/（1+r）≈A-A*r。A 为现期量。")]),_vm._v(" "),_c('p',[_vm._v("3.推导：分子分母同时乘以（1+r），分数值不变，A/（1-r）=A*（1+r）/[（1+r）*（1-r）]，根据平方差公式（a+b）*（a-b）=a²-b²，可以得到：（1+r）*（1-r）=1-r²，原式=（A+A*r）/（1-r²）。当|r|≤5%，r²=5%²=0.05²=0.0025，1-0.0025≈1，因此（A+A*r）/（1-r²）≈（A+A*r）/1=A+A*r。")]),_vm._v(" "),_c('p',[_vm._v("同理：A/（1+r）=A*（1-r）/[（1+r）*（1-r）]=A*（1-r）/（1-r²）≈A-A*r。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】基期和差：")]),_vm._v(" "),_c('p',[_vm._v("1.以坑治坑：先观察现期坑，排除；再看大小关系，选择。")]),_vm._v(" "),_c('p',[_vm._v("2.截位直除：60%以上的基期和差类问题，都可以用以坑治坑的思路做，但也不是 100%能用，如果以坑治坑，不好用了，再去截位直除。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、现期量")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】现期量：")]),_vm._v(" "),_c('p',[_vm._v("1.题型识别：给现在，求后面某时间的值。考试 80%都是基期计算，剩下 20%才是极个别的现期计算，所有的现期问题是基期的翻版。比如 2020 年体重是 120斤，按照同样的增长标准，问 10 年之后的体重。")]),_vm._v(" "),_c('p',[_vm._v("2.计算公式：")]),_vm._v(" "),_c('p',[_vm._v("（1）现期量=基期量+增长量。")]),_vm._v(" "),_c('p',[_vm._v("（2）现期量=基期量*（1+增长率）。")]),_vm._v(" "),_c('p',[_vm._v("3.举例")]),_vm._v(" "),_c('p',[_vm._v("（1）示例 1：2016 年产值为 100 万，2017 年比 2016 年多 50 万，则 2017年产值为多少？")]),_vm._v(" "),_c('p',[_vm._v("  - 答：给 2016 年，问未来的 2017 年，即时间轴右侧的 2017 年，求现期。现期=基期+增长量=100+50=150。")]),_vm._v(" "),_c('p',[_vm._v("（2）示例 2：2016 年产值为 100 万，2017 年比 2016 年增长了 50%，则 2017年产值为多少？")]),_vm._v(" "),_c('p',[_vm._v("  - 答：给了基期和增长率，2017 年=2016 年*（1+r）=100*（1+50%）。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】基期与现期：")]),_vm._v(" "),_c('p',[_vm._v("1.基期量：")]),_vm._v(" "),_c('p',[_vm._v("（1）识别：求前面某个时期的量。")]),_vm._v(" "),_c('p',[_vm._v("（2）公式：基期量=现期量-增长量，基期量=现期量/（1+r）。")]),_vm._v(" "),_c('p',[_vm._v("（3）速算：r 大截位直除，r 小化除为乘。")]),_vm._v(" "),_c('p',[_vm._v("（4）基期和差：先用现期和正负排除再计算。")]),_vm._v(" "),_c('p',[_vm._v("2.现期量：")]),_vm._v(" "),_c('p',[_vm._v("（1）识别：求后面某个时期的量。")]),_vm._v(" "),_c('p',[_vm._v("（2）公式：现期量=基期量+增长量；现期量=基期量*（1+r）。")]),_vm._v(" "),_c('p',[_vm._v("（3）速算：截位计算，特殊数字。")]),_vm._v(" "),_c('p',[_vm._v("3.注意：今天的重点是计算（截位直除）、比较（分数比较）和基期与现期。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("基本术语：")]),_vm._v(" "),_c('p',[_vm._v("增长率")]),_vm._v(" "),_c('p',[_vm._v("增长率是用来表述基期量与现期量变化的相对量。增长率又称增速、增幅或增长幅度、增值率等。增长率为负时表示下降，下降率也可直接写成负的增长率。")]),_vm._v(" "),_c('p',[_vm._v("百分数与百分点")]),_vm._v(" "),_c('p',[_vm._v("百分数：用来反映量之间的比例关系。")]),_vm._v(" "),_c('p',[_vm._v("百分点：用来反映百分数的变化。")]),_vm._v(" "),_c('p',[_vm._v("增长率与倍数")]),_vm._v(" "),_c('p',[_vm._v("增长率指比基数多出的比率；倍数指两数的直接比值。")]),_vm._v(" "),_c('p',[_vm._v("若 A 是 B 的 n 倍，则 n=r+1（r 指 A 与 B 相比的增长率）。")]),_vm._v(" "),_c('p',[_vm._v("成数与翻番")]),_vm._v(" "),_c('p',[_vm._v("成数：几成相当于十分之几。")]),_vm._v(" "),_c('p',[_vm._v("翻番：翻一番为原来的 2 倍；翻两番为原来的 4 倍；依次类推，翻 n 番为原来的 2"),_c('sup',[_vm._v("n")]),_vm._v("倍。")]),_vm._v(" "),_c('p',[_vm._v("增幅、降幅与变化幅度")]),_vm._v(" "),_c('p',[_vm._v("增幅一般就是指增长率，有正有负。")]),_vm._v(" "),_c('p',[_vm._v("降幅指下降的幅度，降幅比较大小时，前提必须为下降。")]),_vm._v(" "),_c('p',[_vm._v("变化幅度指增长或下降的绝对比率，变化幅度比较大小时用增幅（降幅）的绝对值。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】常见词语辨析：")]),_vm._v(" "),_c('p',[_vm._v("1.“百分数”与“百分点”：")]),_vm._v(" "),_c('p',[_vm._v("（1）百分数表示两个量的比例关系，用除法计算。")]),_vm._v(" "),_c('p',[_vm._v("（2）百分点表示百分数的变化（差值），用加减法计算。")]),_vm._v(" "),_c('p',[_vm._v("（3）考查形式：给出一个百分数和百分点，求另一个百分数。出现百分点，考虑百分数的加减计算。")]),_vm._v(" "),_c('p',[_vm._v("（4）补例：")]),_vm._v(" "),_c('p',[_vm._v("  - ①甲班共有 50 人，女生人数 30 人，问女生占全班人数的比重？")]),_vm._v(" "),_c('p',[_vm._v("  - 答：女生/全班=30/50=60%，60%是一个百分数，是用除法得到的")]),_vm._v(" "),_c('p',[_vm._v("  - ②2017 年某地区小麦产量同比增长率为 8%，较玉米产量的增长率低了 5 个百分点，则 2017 年该地区玉米产量的增长率为？")]),_vm._v(" "),_c('p',[_vm._v("  - 答：小麦增长率比玉米低 5 个百分点，即玉米增长率-小麦增长率=5 个百分点，已知小麦增长率为 8%，则玉米增长率为 13%。")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("2.“增长率”与“倍数”：增长率指比基数多出的比率；倍数指两数的直接比值。比如 2 是 1 的 2 倍（“真”倍数，直接除），2 比 1 多/增加（2-1）/1=1倍（“假”倍数，本质上是增长率，先减再除）。")]),_vm._v(" "),_c('p',[_vm._v("（1）A 是 B 的多少倍？倍数=A/B。")]),_vm._v(" "),_c('p',[_vm._v("（2）A 比 B 多/增长多少（%）？增长率=（A-B）/B=A/B-1。")]),_vm._v(" "),_c('p',[_vm._v("（3）A/B=（A/B-1）+1，即倍数=增长率+1。例：150 是 100 的 1.5 倍；150比 100 多（150-100）/100=0.5 倍，即增长率为 50%。")]),_vm._v(" "),_c('p',[_vm._v("（4）高频易错点：")]),_vm._v(" "),_c('p',[_vm._v("  - ①2019 年比 2018 年增长了 300%。增长率为 300%，即增长了 3 倍，则 2019年是 2018 年的 4 倍。")]),_vm._v(" "),_c('p',[_vm._v("  - ②2019 年比 2018 年增长了 2 倍。增长率为 2=200%，则 2019 年是 2018 年的 3 倍。")]),_vm._v(" "),_c('p',[_vm._v("  - ③2019 年比 2018 增长了 3/10。增长率为 3/10=0.3=30%，则 2019 年是 2018 年的 3/10+1=13/10=1.3 倍。")]),_vm._v(" "),_c('p',[_vm._v("  - ④思考：2019 年比 2018 年增长了 1.8 倍，2019 年是 2018 年的（ ）倍？")]),_vm._v(" "),_c('p',[_vm._v("  - 答：增长了 1.8 倍，说明增长率为 1.8=180%，则 2019 年是 2018 年的 2.8倍。")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("3.成数、翻番：")]),_vm._v(" "),_c('p',[_vm._v("（1）成数：几成相当于十分之几。三成是 3/10=30%，五成是 5/10=50%；三成多为 30%～40%，如果计算出来是 40"),_c('sup',[_vm._v("+")]),_vm._v("%，则不能称之为三成多。")]),_vm._v(" "),_c('p',[_vm._v("（2）翻番：翻一番为原来的 2 倍；翻两番为原来的 4 倍；以此类推，翻 n 番为原来的 2"),_c('sup',[_vm._v("n")]),_vm._v("倍。比如斗地主，假设底分为 10000，“抢地主”底分乘 2，“炸弹”再乘 2，“王炸”再乘 2，10000*2*2*2。")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("4.“增幅”“降幅”“变化幅度”：")]),_vm._v(" "),_c('p',[_vm._v("（1）增幅（增长率）：可正可负，带符号比。增幅=r=增长速度=增速，只是字不一样，本质上没有区别。如果增长率为 10%，那么增幅就是 10%；如果增长率为-5%，那么增幅就是-5%。")]),_vm._v(" "),_c('p',[_vm._v("（2）降幅：必须为负，比较绝对值。如果 r=-10%，则降幅为 10%，“降”就代表负号；如果 r=-5%，则降幅为 5%。如果 r=20%，则没有降幅的说法")]),_vm._v(" "),_c('p',[_vm._v("（3）变化幅度：可正可负，比较绝对值。变化幅度即增长率的绝对值，如果 r=10%，则变化幅度是 10%；如果 r=-10%，则变化幅度也是 10%。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("一、计算")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】一般增长率：")]),_vm._v(" "),_c('p',[_vm._v("1.计算类：题目给出百分点的变化，求增长率，用加减计算。")]),_vm._v(" "),_c('p',[_vm._v("2.比较类。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】高频易错点（高减低加）：")]),_vm._v(" "),_c('p',[_vm._v("1.2017 年收入 10 万元，同比增长 10%，增速比去年提高 5 个百分点。则 2016 年的增长率为？")]),_vm._v(" "),_c('p',[_vm._v("答：比如我今年有 10 元钱，比去年多 5 元，说明去年更低。同理，增速比去年高，则去年更低，用减法，2016 年增长率为 10%-5%=5%。出现“提高/上升”用减法。")]),_vm._v(" "),_c('p',[_vm._v("2.2017 年收入 10 万元，同比增长 10%，增速比去年回落 5 个百分点。则 2016 年的增长率为？")]),_vm._v(" "),_c('p',[_vm._v("答：回落即掉落，增速比去年低，说明去年更高，用加法，2016 年增长率为 10%+5%=15%。出现“回落/下降/减少”用加法。")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("1.2017 年收入 10 万元，同比下降 10%，降幅比去年扩大 5 个百分点。则 2016 年的降幅为？增长率为？")]),_vm._v(" "),_c('p',[_vm._v("答：2017 年同比下降 10%，即降幅为 10%，降幅比去年扩大，高减低加，“扩大”用减法，则 2016 年降幅为 10%-5%=5%，转化成增长率为-5%。可以画图理解，从-5%到-10%，亏得越来越多，是降幅扩大")]),_vm._v(" "),_c('p',[_vm._v("2.2017 年收入 10 万元，同比下降 10%，降幅比去年收窄 5 个百分点。则 2016 年的降幅为？增长率为？")]),_vm._v(" "),_c('p',[_vm._v("答：收窄即变小、变窄，是降低的意思。2017 年降幅为 10%，降幅比去年收窄，高减低加，“收窄”用加法，则 2016 年降幅为 10%+5%=15%，转化成增长率为-15%。可以画图理解，从-15%到-10%，亏得越来越少，是降幅收窄。")]),_vm._v(" "),_c('p',[_vm._v("3.“增速”直接带符号，用“高减低加”正常做。“降幅”先不带符号算降幅，后面再添“负号”。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】计算类：给具体量（现期量、基期量、增长量）。")]),_vm._v(" "),_c('p',[_vm._v("1.识别：增长/下降+%、几成；增长速度、增长幅度。")]),_vm._v(" "),_c('p',[_vm._v("2.公式：r=增长量/基期量=增长量/（现期-增长量）=（现期- 基期）/基期，公式之间是相通的。")]),_vm._v(" "),_c('p',[_vm._v("（1）最本质的公式：r=增长量/基期量。比如现在体重为 120 斤，过去体重为 100 斤，说明增长了 20 斤，增长率为 20/100=20%。")]),_vm._v(" "),_c('p',[_vm._v("（2）已知增长量和现期：r=增长量/（现期-增长量）。")]),_vm._v(" "),_c('p',[_vm._v("（3）已知现期和基期：r=（现期- 基期）/基期。")]),_vm._v(" "),_c('p',[_vm._v("3.速算：截位直除或估算。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】若不喜欢减法，则可以求（现期- 基期）/基期＞10%，现期- 基期＞基期 *10% ， 现 期 ＞ 1.1* 基 期 ， 一 个 数 乘 以 1.1 考 虑 错 位 相 加 ， 如 1127.6*1.1=1127.6*（1+10%）=1127.6+112.76。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】小结：")]),_vm._v(" "),_c('p',[_vm._v("1.给现期和基期，正常做除法。")]),_vm._v(" "),_c('p',[_vm._v("2.给出百分点，考虑百分数加减计算。")]),_vm._v(" "),_c('p',[_vm._v("3.问固定某几年的增长率超过百分之几，考虑对公式进行优化，化繁为简，解题的目的不是当计算器，而是解决问题。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("（2）当现期/基期=1"),_c('sup',[_vm._v("+")]),_vm._v("，倍数关系不明显，用“增长量/基期量”比较，“增长量/基期量”越大，增长率越大。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("（2）左图：现期/基期，2012 年：426/133=3"),_c('sup',[_vm._v("+")]),_vm._v("，2013 年：866/426=2"),_c('sup',[_vm._v("+")]),_vm._v("，2014年：1600/866=2"),_c('sup',[_vm._v("-")]),_vm._v("，2015 年：1800/1600=1"),_c('sup',[_vm._v("+")]),_vm._v("，“现期/基期”倍数关系明显，用“现期量/基期量”比较，“现期量/基期量”越大，增长率越大，则 2012 年最快。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("（4）右图：现期/基期，2012 年：213/133=1"),_c('sup',[_vm._v("+")]),_vm._v("，2013 年：279/213=1"),_c('sup',[_vm._v("+")]),_vm._v("，2014年：349/279=1"),_c('sup',[_vm._v("+")]),_vm._v("，2015 年：409/349=1"),_c('sup',[_vm._v("+")]),_vm._v("，倍数关系不明显，不能通过观察秒杀，用“增长量/基期量”比较。2012 年：（213-133）/133=80/133；2013 年：（279-213）/213=66/213；2014 年：（349-279）/279=70/279；2015 年：（409-349）/349=60/349。80/133 的分子最大、分母最小，一大一小直接看，看不出倍数考虑做差，说不定能秒出结果，同比增速最快是 2012 年。")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("基本术语：")]),_vm._v(" "),_c('p',[_vm._v("增长量是用来表述基期量与现期量变化的绝对量，增长率则是用来表述两者变化的相对量。")]),_vm._v(" "),_c('p',[_vm._v("年均增长量=（现期量-基期量）÷年份差。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("一、计算")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】增长量：")]),_vm._v(" "),_c('p',[_vm._v("1.识别：增长+具体单位。")]),_vm._v(" "),_c('p',[_vm._v("（1）增长量有具体单位描述，比如今年增加 200 人、今年增加 200 元。")]),_vm._v(" "),_c('p',[_vm._v("（2）区分：增长+%→增长率；增长+具体单位→增长量。")]),_vm._v(" "),_c('p',[_vm._v("2.例：2017 年比 2016 年增加了多少亿元。")]),_vm._v(" "),_c('p',[_vm._v("3.计算公式：增长量=现期- 基期=基期*r=现期/（1+r）*r。")]),_vm._v(" "),_c('p',[_vm._v("4.比如现在是 120 斤，过去是 100 斤，增长了 120-100=20 斤。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】年均增长量：")]),_vm._v(" "),_c('p',[_vm._v("1.识别：年均+增长+单位。")]),_vm._v(" "),_c('p',[_vm._v("2.年均增长量=（现期量- 基期量）/年份差。比如老师大学四年共增长了 20 斤，则平均每年增长了 20/4=5 斤。")]),_vm._v(" "),_c('p',[_vm._v("3.年均增长类问题年份差的选择：")]),_vm._v(" "),_c('p',[_vm._v("（1）一般情况（除江苏外）：2011 年～2015 年：年份差 n=2015-2011=4。基期：2011 年；现期：2015 年。除了江苏省考，其他所有地方方法都一样（包括国考）。")]),_vm._v(" "),_c('p',[_vm._v("（2）江苏省考：2011 年～2015 年：年份差为 5（基期往前推一年）；基期：2010 年；现期：2015 年。江苏出题人的标准不同，只要不是参加江苏省考的同学，不需要记，如果题库刷题遇到，可以跳过，或者按照基期往前推一年计算。")]),_vm._v(" "),_c('p',[_vm._v("（3）五年规划（全国都一样）：“十二五”期间（2011～2015 年）：年份差为 5（基期往前推一年）；基期：2010 年；现期：2015 年。五年规划，所有地区都相同，不论什么考试，都是一样的。比如“十三五”期间（2016～2020 年），现期是 2020 年，基期前推一年是 2015 年。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】")]),_vm._v(" "),_c('p',[_vm._v("1.本题如果一个一个计算，中间会约掉，这种题目，找到现期和基期代公式即可。")]),_vm._v(" "),_c('p',[_vm._v("2.年均增加值，通常增加值是专有名词，可以理解为 GDP，和增长量无关，但是本题只能理解为增长量，否则没有答案。")]),_vm._v(" "),_c('p',[_vm._v("3.如果依次计算 2012 年-2011 年、2013 年-2012 年、2014 年-2013 年、2015年-2014 年，四年的增长量加和，中间会约掉，最后只有 2011 年和 2015 年，因此这种题目找到现期和基期计算即可。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】")]),_vm._v(" "),_c('p',[_vm._v("1.所有的五年规划，年份差都是 5。")]),_vm._v(" "),_c('p',[_vm._v("2.给“十一五”，基期需要前推，如果是正常的时间段，不需要前推，和题目的数据无关。")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("【知识点】已知现期、增长率，求增长量，方法是百化分。")]),_vm._v(" "),_c('p',[_vm._v("1.公式：增长量=现期/（1+r）*r。现期/（1+r）=基期，基期*r=增长量。公式不需要记，考试基本不会用。")]),_vm._v(" "),_c('p',[_vm._v("2.2019 年总收入是 10 万元，同比增长 33.3%。求：2019 年与 2018 年相比总收入增长了多少万元？分析：")]),_vm._v(" "),_c('p',[_vm._v("（1）求增长量，如果用增长量=现期/（1+r）*r 计算，增长量=10/（1+33.3%）*33.3%，计算很麻烦。")]),_vm._v(" "),_c('p',[_vm._v("（2）33.3%≈1/3，原式≈10÷（1+1/3）*1/3=10/（1+3）=2.5")]),_vm._v(" "),_c('p',[_vm._v("（3）增长量计算的核心是如何巧妙的把百分数转化为分数的形式——百化分。")]),_vm._v(" "),_c('p',[_vm._v("3.结论：")]),_vm._v(" "),_c('p',[_vm._v("（1）增长率百化分，|r|=1/n。")]),_vm._v(" "),_c('p',[_vm._v("（2）r＞0 时，增长量=现期/（n+1）；r＜0 时，减少量=现期/（n-1）。n 为百化分的分母。")]),_vm._v(" "),_c('p',[_vm._v("（3）推导：")]),_vm._v(" "),_c('p',[_vm._v("  - ①r＞0 时：r 是百分数，一定可以转化为 1/n 的形式，增长量=现期/（1+r）*r=现期÷（1+1/n）*（1/n）=现期/（n+1）。")]),_vm._v(" "),_c('p',[_vm._v("  - ②r＜0 时，r=-1/n，增长量=现期÷（1-1/n）*（-1/n）=-现期÷（1-1/n）*1/n→增长量=-现期/（n-1），可以表述为减少量=现期/（n-1），“减少”相当于“-”。")]),_vm._v(" "),_c('p',[_vm._v("4.例：2019 年总收入是 10 万元，同比下降 33.3%。求：2019 年与 2018 年相比总收入减少了多少万元？")]),_vm._v(" "),_c('p',[_vm._v("答：“下降 33.3%”，r＜0，转化为分数是-1/3，减少量=现期/（n-1）=10/（3-1）=5。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】百化分：")]),_vm._v(" "),_c('p',[_vm._v("1.百化分表格：")]),_vm._v(" "),_c('p',[_vm._v("（1）1/2=50%，1/4=25%，1/8=12.5%，1/16=6.25。")]),_vm._v(" "),_c('p',[_vm._v("（2）1/3≈33.3%，1/6≈16.7%，1/12≈8.3%。")]),_vm._v(" "),_c('p',[_vm._v("（3）1/5=20%，1/10=10%，1/20=5%。")]),_vm._v(" "),_c('p',[_vm._v("（4）1/7≈14.3%，1/14≈7.1%。")]),_vm._v(" "),_c('p',[_vm._v("（5）1/9≈11.1%，1/11≈9.1%。")]),_vm._v(" "),_c('p',[_vm._v("（6）1/13≈7.7%，1/15≈6.7%。")]),_vm._v(" "),_c('p',[_vm._v("（7）1/17≈5.9%，1/18≈5.6%，1/19≈5.3%。")]),_vm._v(" "),_c('p',[_vm._v("2.百化分记忆方法：")]),_vm._v(" "),_c('p',[_vm._v("（1）1/2、1/4、1/5、1/10、1/20 属于常识，不需要记忆。")]),_vm._v(" "),_c('p',[_vm._v("（2）1/4、1/8、1/16 是一半的关系，因此百分数也是一半的关系。")]),_vm._v(" "),_c('p',[_vm._v("（3）1/3、1/6、1/12 是一半的关系，因此百分数也是一半的关系。")]),_vm._v(" "),_c('p',[_vm._v("（4）1/7≈14.3%、1/14≈7.1%和 1/9≈11.1%、1/11≈9.1%可以成对记忆。")]),_vm._v(" "),_c('p',[_vm._v("（5）1/13 和 1/15 需要死记硬背。")]),_vm._v(" "),_c('p',[_vm._v("（6）1/17、1/18、1/19 对应 5.（9、6、3）%，是等差数列。5.9%最大，对应 1/17，5.3%最小，对应 1/19，5.6%在中间，对应 1/18。")]),_vm._v(" "),_c('p',[_vm._v("（7）比如考试考 12.5%，可以想到是 1/8；百分数和分母可以相互对调，遇到 8%，是 1/12.5。因 1/8=12.5%=12.5/100→1/12.5=8/100=8%，是交叉对应的关系。")]),_vm._v(" "),_c('p',[_vm._v("3.增长率百化分之倍数转化。利用与背过的百分数的倍数关系，实现百化分。")]),_vm._v(" "),_c('p',[_vm._v("（1）2.5%=？25%/10=2.5%，则 2.5%=1/4÷10=1/40。")]),_vm._v(" "),_c('p',[_vm._v("（2）67%=？6.7%=1/15，则 67%=1/15*10=1/1.5（分子一定要转换为 1 的形式）。或者看 67%≈33.3%*2≈2/3=1/1.5。")]),_vm._v(" "),_c('p',[_vm._v("（3）22%=？因 11%=1/9，22%=2/9=1/4.5。")]),_vm._v(" "),_c('p',[_vm._v("4.增长率百化分之取中法，如果遇到百分数左右难取舍，且选项接近，取中即可。比如 22%在 20%（1/5）和 25%（1/4）之间，可以取中为 1/4.5，是比较精确的方法，选项接近的时候，能取中尽量取中，可以提高精度。")]),_vm._v(" "),_c('p',[_vm._v("（1）18.5%=？在 16.7%（1/6）和 20%（1/5）之间，取 1/5.5。")]),_vm._v(" "),_c('p',[_vm._v("（2）28.7%=？在 25%（1/4）和 33.3%（1/3）之间，取 1/3.5。")]),_vm._v(" "),_c('p',[_vm._v("5.增长率百化分之公式法，如果遇到百分数实在想不起来，或者你就不想背，那么请记住：N=100÷百分号前的数字（保留小数点后一位）。")]),_vm._v(" "),_c('p',[_vm._v("（1）57%=？如果想不到 57%≈56%，5.6%≈1/18，则 57%≈1/1.8。可以用100/57，结果是 18 开头，则是 1/1.8，不需要除得很精确，保留小数点后一位即可。")]),_vm._v(" "),_c('p',[_vm._v("（2）37%=？100/37，结果近似是 2.7，为 1/2.7。")]),_vm._v(" "),_c('p',[_vm._v("（3）73%=？100/73≈1.3，为 1/1.3。不建议大家除，提前背可以节省时间。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、比较")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】增长量比较：")]),_vm._v(" "),_c('p',[_vm._v("1.识别：增长最多/最少、下降最多/最少。增长率比较大小，是问增长最快/最慢。")]),_vm._v(" "),_c('p',[_vm._v("2.题型：")]),_vm._v(" "),_c('p',[_vm._v("（1）给现期量、基期量：增长量=现期量- 基期量。")]),_vm._v(" "),_c('p',[_vm._v("（2）给现期量、r：")]),_vm._v(" "),_c('p',[_vm._v("  - ①大大则大。")]),_vm._v(" "),_c('p',[_vm._v("  - ②百化分计算，转化为分数比较。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】给现期量、r，比较增长量大小。")]),_vm._v(" "),_c('p',[_vm._v("1.现期量大，同时│r│也大，则其增长量/减少量大。")]),_vm._v(" "),_c('p',[_vm._v("2.一大一小：百化分计算（是 100%正确的方法），转化为分数比较：")]),_vm._v(" "),_c('p',[_vm._v("3.例：")]),_vm._v(" "),_c('p',[_vm._v("（1）引例 1：2017 年，小马有 200 亿，同比增长 25%，小刘有 110 亿，同比增长 10%，则 2017 年谁的增长量大？")]),_vm._v(" "),_c('p',[_vm._v("答：小马比小刘有钱，增速还更快，则小刘永远不会追上小马，小马的增长量大于小刘的增长量，即小马现期、r 都大，则增长量大。")]),_vm._v(" "),_c('p',[_vm._v("（2）引例 2：2017 年，小马有 200 亿，同比下降 25%，小刘有 110 亿，同比下降 10%，则 2017 年谁的减少量大？")]),_vm._v(" "),_c('p',[_vm._v("答：小马现期大、降幅大，则小马减少量大。")]),_vm._v(" "),_c('p',[_vm._v("（3）引例 3：2017 年，小马有 200 亿，同比增长 25%，小刘有 110 亿，同比增长 50%，则 2017 年谁的增长量大？")]),_vm._v(" "),_c('p',[_vm._v("答：现期小马大、增长率小刘大，增长量需要计算。百化分近似估算，小马：25%=1/4，200/（4+1）=40；小刘：50%=1/2，110/3=30+，小马增长量大。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】百化分是 100%正确的方法，看比率、速度、变化都会出现误差。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】增长量：")]),_vm._v(" "),_c('p',[_vm._v("1.计算：")]),_vm._v(" "),_c('p',[_vm._v("（1）识别：增长+单位（人/元/吨）。")]),_vm._v(" "),_c('p',[_vm._v("（2）公式：增长量=现期量- 基期量=基期量*r=现期量/（1+r）*r。")]),_vm._v(" "),_c('p',[_vm._v("（3）速算：")]),_vm._v(" "),_c('p',[_vm._v("  - ①百分数化分数：近似转化，取中转化，倍数转化。")]),_vm._v(" "),_c('p',[_vm._v("  - ②若|r|≈1/n，增长量=现期量/（n+1）；下降量=现期量/（n-1）。")]),_vm._v(" "),_c('p',[_vm._v("2.比较：")]),_vm._v(" "),_c('p',[_vm._v("（1）识别：增长最多/少。")]),_vm._v(" "),_c('p',[_vm._v("（2）速算：")]),_vm._v(" "),_c('p',[_vm._v("  - ①给出每年数据：直接两两相减，柱状图还可以用直尺标注。")]),_vm._v(" "),_c('p',[_vm._v("  - ②给出现期量和 r：两者都大则增量必然大，否则百化分计算。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】")]),_vm._v(" "),_c('p',[_vm._v("1.题型：增长+%→增长率；增长+单位→增长量，增长量百化分计算。")]),_vm._v(" "),_c('p',[_vm._v("2.问增长最快/最慢，是增长率的比较；问增长最多/最少，是增长量的大小比较。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("基本术语：")]),_vm._v(" "),_c('p',[_vm._v("比重指部分在总体中所占的比率，有时也用贡献率、利润率等表述方式。")]),_vm._v(" "),_c('p',[_vm._v("增长贡献率指部分增量在总体增量中所占的比例。")]),_vm._v(" "),_c('p',[_vm._v("资料分析中的利润率特指利润在收入中的占比。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】比重：")]),_vm._v(" "),_c('p',[_vm._v("1.现期比重。")]),_vm._v(" "),_c('p',[_vm._v("2.基期比重。")]),_vm._v(" "),_c('p',[_vm._v("3.两期比重比较与计算。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("一、现期比重")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】现期比重：")]),_vm._v(" "),_c('p',[_vm._v("1.题型识别：……占……的比重。出现“占”，一定是比重问题，注意时间。")]),_vm._v(" "),_c('p',[_vm._v("（1）求比重一般是占前/占后，有的题目是倒装句，如在 A 中 B 的占比，此时是 B/A，注意特殊问法。")]),_vm._v(" "),_c('p',[_vm._v("（2）一共有 500 人，男生为 100 人，女生为 400 人，不能问男生占女生的比重，这句话是不存在的，两个独立的个体不能用占比来表述，比重的前提是有一个包含的关系，只能说男生人数是女生人数的 1/4，或者女生人数是男生人数的 4 倍。")]),_vm._v(" "),_c('p',[_vm._v("2.公式：比重=部分/总体。")]),_vm._v(" "),_c('p',[_vm._v("3.考查形式：")]),_vm._v(" "),_c('p',[_vm._v("（1）已知部分和总体，求比重。")]),_vm._v(" "),_c('p',[_vm._v("例 1：某班总共 500 人，其中男生 100 人，求男生占全班总人数的比重？")]),_vm._v(" "),_c('p',[_vm._v("答：比重=100/500=1/5=20%。")]),_vm._v(" "),_c('p',[_vm._v("（2）已知部分和比重，求总体。")]),_vm._v(" "),_c('p',[_vm._v("例 2：某班男生 100 人，已知男生占全班总人数的 20%，求全班有多少人？")]),_vm._v(" "),_c('p',[_vm._v("答：全班=100/20%=500 人。")]),_vm._v(" "),_c('p',[_vm._v("（3）已知总体和比重，求部分。")]),_vm._v(" "),_c('p',[_vm._v("例 3：某班总共 500 人，已知男生占全班总人数的 20%，求男生有多少人？")]),_vm._v(" "),_c('p',[_vm._v("答：男生人数=500*20%=100 人。")]),_vm._v(" "),_c('p',[_vm._v("4.速算技巧：截位直除。")]),_vm._v(" "),_c('p',[_vm._v("5.概念引申（比重的特殊表述形式）：")]),_vm._v(" "),_c('p',[_vm._v("（1）增长贡献率=部分增量/总体增量。")]),_vm._v(" "),_c('p',[_vm._v("例：2018 年我的家庭收入 20 万元，2017 年 10 万元；其中我自己 2018 年收入 2 万元，2017 年 1 万元，问：我对家庭总收入的增长贡献率？")]),_vm._v(" "),_c('p',[_vm._v("答：增长贡献率=部分增量/总体增量=（2-1）/（20-10）=1/10。")]),_vm._v(" "),_c('p',[_vm._v("（2）利润率=利润/收入。数量关系：利润率=利润/成本；资料分析：利润率=利润/收入。数量关系都是小本买卖，成本非常清晰，小本生意往往用利润率=利润/成本。资料分析是统计整个大行业，成本不好统计，非常复杂，在整个大环境下，往往用收入去统计，即资料分析：利润率=利润/收入。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】饼形图：")]),_vm._v(" "),_c('p',[_vm._v("1.十二点钟方向，顺时针依次排布。")]),_vm._v(" "),_c('p',[_vm._v("2.若有总体，先看部分占总体的特殊比重；若无总体，看各部分之间倍数关系。如东部为 100，西部为 50，东、西部在饼图所占的面积为 2：1 的关系。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、基期比重")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】基期比重：")]),_vm._v(" "),_c('p',[_vm._v("1.题型识别：问题时间在材料之前，占、比重。")]),_vm._v(" "),_c('p',[_vm._v("2.例：2017 年我的家庭总收入 B 万元，同比增长率 b，2017 年我个人收入 A 万，同比增长率 a。求：2016 年我的收入占家庭总收入的比重。")]),_vm._v(" "),_c('p',[_vm._v("答：基期=现期/（1+r），2016 年家庭收入为 B/（1+b），个人收入为 A/（1+a），基期比重=A/（1+a）÷[B/（1+b）]=A/（1+a）*[（1+b）/B]=A/B*[（1+b）/（1+a）]。")]),_vm._v(" "),_c('p',[_vm._v("3.计算公式：A/B*[（1+b）/（1+a）]。A：分子（部分的现期量），B：分母（整体的现期量），a：分子的增长率，b：分母的增长率。")]),_vm._v(" "),_c('p',[_vm._v("4.速算：")]),_vm._v(" "),_c('p',[_vm._v("（1）截位直除。")]),_vm._v(" "),_c('p',[_vm._v("（2）先算现期比重，再看（1+b）/（1+a）大于 1 或小于 1，结合选项排除答案。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】")]),_vm._v(" "),_c('p',[_vm._v("1.右边式子=1.097/1.137，分子小分母大，结果小于 1；如果是 1.137/1.097，分子大分母小，结果大于 1。")]),_vm._v(" "),_c('p',[_vm._v("2.根据“住宅投资占房地产开发投资的比重为 70.8%”，可知 A/B=70.8%。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("三、两期比重")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】两期比重——升降：")]),_vm._v(" "),_c('p',[_vm._v("1.题型识别：两个时间+比重。")]),_vm._v(" "),_c('p',[_vm._v("例：2013 年 1～9 月，苏中工业用电量占江苏省工业用电量的比重与去年相比：")]),_vm._v(" "),_c('p',[_vm._v("A.提高    B.降低    C.不变    D.无法判断")]),_vm._v(" "),_c('p',[_vm._v("答：比较现期比重和基期比重的关系，是提高还是降低还是不变，这种题目就是两期比重。本题 2013 年 1～9 月比去年，去年就是 2012 年 1～9 月，两个时间，出现“占”，判定题型为两期比重问题。")]),_vm._v(" "),_c('p',[_vm._v("2.计算公式：现期比重− 基期比重=A/B-A/B*[（1+b）/（1+a）]=A/B*[（1+a）/（1+a）-（1+b）/（1+a）]=A/B*[（1+a-1-b）/（1+a）]=A/B*[（a-b）/（1+a）]=A/B*1/（1+a）*（a-b）。由于 A/B 一定是正数，当 a＞0，1+a＞0，1/（1+a）＞0；当a＜0，a 不可能小到-100%，即 a＞-100%，则 1+a＞0，1/（1+a）＞0。因此 A/B、1/（1+a）都为正数，此时看 a-b 的大小。")]),_vm._v(" "),_c('p',[_vm._v("3.升降判断：")]),_vm._v(" "),_c('p',[_vm._v("（1）a＞b，比重上升。")]),_vm._v(" "),_c('p',[_vm._v("（2）a＜b，比重下降。")]),_vm._v(" "),_c('p',[_vm._v("（3）a=b，比重不变。")]),_vm._v(" "),_c('p',[_vm._v("（4）a：分子（部分量）的增长率，b：分母（总体量）的增长率")]),_vm._v(" "),_c('p',[_vm._v("4.以下问题现期均为 2019 年，请判定题型。")]),_vm._v(" "),_c('p',[_vm._v("（1）2019 年男生占全班人数的比重是多少？出现“占”，时间为现期，现期比重。")]),_vm._v(" "),_c('p',[_vm._v("（2）2018 年我的收入占全家总收入的比重是多少？出现“占”，时间为基期，基期比重问题。")]),_vm._v(" "),_c('p',[_vm._v("（3）2019 年男生占全班人数的比重比女生高。出现“占”，时间为 2019 年，只有一个时间，现期比重，即男生现期比重和女生现期比重比较大小。")]),_vm._v(" "),_c('p',[_vm._v("（4）2019 年我的收入占全家总收入的比重比上年上升。出现“占”，比重问题，2019 年比上年，有两个时间，两期比重问题。")]),_vm._v(" "),_c('p',[_vm._v("（5）2019 年男生占全班人数的比重比 2010 年高几个百分点？出现“占”，两个时间（2019 年、2010 年），两期比重问题。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】资料分析很少考到地理知识，大家不要在地区上抬杠。表格既然说了东部地区有北京、天津，那就默认里面包含北京、天津。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】两期比重：上升/下降几个百分点：")]),_vm._v(" "),_c('p',[_vm._v("1.题型识别：两个时间+比重+上升/下降+百分点。")]),_vm._v(" "),_c('p',[_vm._v("例：2015 年一季度，该省园区企业上缴税金占主营业务收入的比重比上年同期：")]),_vm._v(" "),_c('p',[_vm._v("A.上升了 0.1 个百分点    B.上升了 3.1 个百分点")]),_vm._v(" "),_c('p',[_vm._v("C.下降了 0.1 个百分点    D.下降了 3.1 个百分点")]),_vm._v(" "),_c('p',[_vm._v("答：出现“占”字，是比重，给了 2015 年和同比，两期比重问题。直接用现期比重- 基期比重，比如 2015 年一季度占比是 5%，去年同期占比是 4%，则现在的占比比过去的占比上升了 5-4=1 个百分点。")]),_vm._v(" "),_c('p',[_vm._v("2.计算公式：现期比- 基期比。")]),_vm._v(" "),_c('p',[_vm._v("（1）A/B-A/B*[（1+b）/（1+a）]=A/B*[（a-b）/（1+a）]=A/B*[1/（1+a）]*（a-b）＜|a-b|。")]),_vm._v(" "),_c('p',[_vm._v("（2）推导：把式子拆成三个部分，A/B 是一个部分，1/（1+a）是一个部分，（a-b）是一个部分。A/B 是现期比重，比重=部分（小数）/总体（大数），肯定小于 1。再看 1/（1+a），如果 a＞0，则 1/（1+a）＜1；如果 a＜0，则 1/（1+a）＞1；a 的取值不同，会有两种情况。我们做的是资料分析，根据我国的发展数据可知，比重 A/B 往往很小，最高达到 50%，所以 A/B＜1，如果 a＞0，A/B*[1/（1+a）]肯定＜1；在资料分析中，如果 a＜0，1/（1+a）也只会比 1 大一丢丢，综合起来，A/B*[1/（1+a）]还是比 1 小。")]),_vm._v(" "),_c('p',[_vm._v("（3）记住结论：A/B*[1/（1+a）]永远＜1，再乘以（a-b），所以 A/B*[1/（1+a）]*（a-b）＜|a-b|。")]),_vm._v(" "),_c('p',[_vm._v("3.解题步骤：")]),_vm._v(" "),_c('p',[_vm._v("（1）判方向（a＞b，上升；a＜b，下降）。")]),_vm._v(" "),_c('p',[_vm._v("（2）定大小：小于|a-b|，算出差值，选一个比差值小的即可。")]),_vm._v(" "),_c('p',[_vm._v("4.注意：a 对应分子（部分量）的增长率；b 对应分母（总体量）的增长率。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】比重梳理：（出现“占”/利润率/增长贡献率）")]),_vm._v(" "),_c('p',[_vm._v("1.现期比重→占→占前（A）/占后（B）。")]),_vm._v(" "),_c('p',[_vm._v("2.基期比重→占、基期→A/B*[（1+b）/（1+a）]。")]),_vm._v(" "),_c('p',[_vm._v("3.（1）两期比重→比重、升降→a＞b，比重升，a＜b，比重降；")]),_vm._v(" "),_c('p',[_vm._v("（2）两期比重→比重、百分点→先判升降，再选小。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】比重小结：")]),_vm._v(" "),_c('p',[_vm._v("1.现期比重：")]),_vm._v(" "),_c('p',[_vm._v("（1）识别：问题时间与材料一致，占，比重。")]),_vm._v(" "),_c('p',[_vm._v("（2）公式：比重=部分/总体；总体=部分/比重；部分=总体*比重。")]),_vm._v(" "),_c('p',[_vm._v("（3）速算：截位直除法。")]),_vm._v(" "),_c('p',[_vm._v("2.基期比重：")]),_vm._v(" "),_c('p',[_vm._v("（1）识别：问题时间在材料之前，占，比重。")]),_vm._v(" "),_c('p',[_vm._v("（2）公式：[A/（1+a）]÷[B/（1+b）]=A/B*[（1+b）/（1+a）]。")]),_vm._v(" "),_c('p',[_vm._v("（3）速算：")]),_vm._v(" "),_c('p',[_vm._v("  - ①截位直除。")]),_vm._v(" "),_c('p',[_vm._v("  - ②先计算现期比重，再判断大小。")]),_vm._v(" "),_c('p',[_vm._v("3.两期比重：")]),_vm._v(" "),_c('p',[_vm._v("（1）识别：两个年份，一个比重。")]),_vm._v(" "),_c('p',[_vm._v("（2）公式：A/B*[（a-b）/（1+a）]。")]),_vm._v(" "),_c('p',[_vm._v("（3）升降判断：比较部分与总体增长率，部分大则升、小则降。")]),_vm._v(" "),_c('p',[_vm._v("（4）速算：比重差的绝对值小于增长率之差的绝对值，即|A/B*[（a-b）/（1+a）]|＜|a-b|。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】平均数：现期平均数、基期平均数、两期平均数。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("一、现期平均数")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】现期平均（和比重没有区别）：")]),_vm._v(" "),_c('p',[_vm._v("1.题型识别：问题时间与材料一致+平均（均、每、单位，比如人均工资，每亩的产量）。要做好和比重的区分，“占”是比重问题；“均、每、单位”是平均数问题。")]),_vm._v(" "),_c('p',[_vm._v("2.计算公式：平均数=总数/个数=A/B。")]),_vm._v(" "),_c('p',[_vm._v("3.计算形式：后/前（永远用后面的量/前面的量，肯定不会错）。")]),_vm._v(" "),_c('p',[_vm._v("（1）人均收入=收入/人数。")]),_vm._v(" "),_c('p',[_vm._v("（2）每亩的产量=产量/亩数。")]),_vm._v(" "),_c('p',[_vm._v("（3）单位面积产量=产量/面积。")]),_vm._v(" "),_c('p',[_vm._v("4.速算技巧：截位直除。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】")]),_vm._v(" "),_c('p',[_vm._v("1.客运平均运送距离=旅客周转量/客运量，国考和省考经常考，要记住这个公式。如果记不住，也可以通过单位解决，周转量的单位是亿人公里，客运量的单位是亿人，两者约分之后只剩公里。")]),_vm._v(" "),_c('p',[_vm._v("2.对统计周转量的理解：假如一个人去西安，距离为 1200 公里，过去一趟是 1200 公里，回来一趟又是 1200 公里，一个人走了 2 次，相当于是 2 人次，所以运输了 1200*2 人次=2400 公里，周转量对应公里数。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【例3】（2015国考）2013年每个馆办文艺团体平均每月演出约多少场？")]),_vm._v(" "),_c('p',[_vm._v("A.25    B.12     C.5     D.2")]),_vm._v(" "),_c('p',[_vm._v("【解析】例 3.方法一：出现“平均数”，时间 2013 年为现期，现期平均数问题。每个馆演出场次=场次/馆=15.13/6022，注意题目还问了“每月”，前面求出来的是全年的值，因此所求=15.13 万/6022÷12=15.13 万/（6022*12）≈ 15.13/7.2 万，首位商 2，对应 D 项。")]),_vm._v(" "),_c('p',[_vm._v("方法二：猜题思路。考虑以坑治坑，有的人会忘记除以 12，观察选项，A 项和 D 项存在 12 倍的关系，忘记除 12 会选 A 项，正确做法应该再除以 12，对应 D 项。【选 D】")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("【注意】")]),_vm._v(" "),_c('p',[_vm._v("1.题目出现几个“平均每”，就需要除几次。")]),_vm._v(" "),_c('p',[_vm._v("2.方法二不保证 100%全对，在考场上没时间的时候可以用。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】")]),_vm._v(" "),_c('p',[_vm._v("1.比如有三个人的考试成绩分别是 101、99、100，则三个人的平均分是 100。肯定不是按照三个数字加和再除以 3 去求，而是看 101 比 100 多了 1，99 比 100 少了 1，把多的补给少的。利用互补思维求解平均数问题，就是削峰填谷。")]),_vm._v(" "),_c('p',[_vm._v("2.如果选项给了具体值，3234、3358、3446、3589 的时候，可以用尺子量；如果是给区间范围，建议大家按照削峰填谷的思路做。")]),_vm._v(" "),_c('p',[_vm._v("3.基准线怎么确定？基准线不影响最终结果，但是基准线一定要居中，越居中，多的部分补齐少的部分就越好看；如果基准线定成 1000、2000，计算的时候就没有意义，因为不能减少计算量，定成居中的基准线，是为了尽量前后抵消。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、基期平均数")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】基期平均数：")]),_vm._v(" "),_c('p',[_vm._v("1.题型识别：问题时间在材料之前+平均数问法（均、每、单位）。")]),_vm._v(" "),_c('p',[_vm._v("2.计算公式：基期平均=A/B*[（1+b）/（1+a）]")]),_vm._v(" "),_c('p',[_vm._v("3.速算技巧：截位直除、与现期比较。")]),_vm._v(" "),_c('p',[_vm._v("4.例：2017 年全公司收入 A 个亿，同比增长率为 a，公司有 B 口人，同比增长率为 b，问 2016 年全公司人均收入为多少？")]),_vm._v(" "),_c('p',[_vm._v("答：给 2017 年问 2016 年，平均数=后/前，2016 年人均收入=2016 年收入/2016 年人数=A/（1+a）÷[B/（1+b）]=A/（1+a）*[（1+b）/B]=A/B*[（1+b）/（1+a）]，与基期比重的公式相同。出现“占”字是比重问题，出现平均数问法就是平均数问题。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("三、两期平均数")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】两期平均数——升降：")]),_vm._v(" "),_c('p',[_vm._v("1.题型识别：题干中涉及两个时间+平均数问法。比如问 2018 年人均收入比 2017 年人均收入是上升还是下降？")]),_vm._v(" "),_c('p',[_vm._v("2.公式：现期平均- 基期平均=A/B-A/B*[（1+b）/（1+a）]=A/B*[（a-b）/（1+a）]。")]),_vm._v(" "),_c('p',[_vm._v("例：公司年底发奖金，人均奖金=钱数/人数，如果今年钱数翻了好几倍，人数只增加了一两个，那么每个人分到的钱就会变多，即 a＞b，平均数上升。如果钱数只增长了一点点，而人数招了很多，僧多粥少，那么每个人分到的钱就会变少，即 a＜b，平均数下降。")]),_vm._v(" "),_c('p',[_vm._v("3.升降判断：方法和两期比重相同。")]),_vm._v(" "),_c('p',[_vm._v("（1）a＞b，平均数上升。")]),_vm._v(" "),_c('p',[_vm._v("（2）a＜b，平均数下降。")]),_vm._v(" "),_c('p',[_vm._v("（3）a=b，平均数不变。")]),_vm._v(" "),_c('p',[_vm._v("（4）a：分子的增长率，b：分母的增长率。")]),_vm._v(" "),_c('p',[_vm._v("4.以下问题现期均为 2019 年，请判定题型：")]),_vm._v(" "),_c('p',[_vm._v("（1）2019 年人均收入是多少？")]),_vm._v(" "),_c('p',[_vm._v("答：出现“人均”，时间为现期，现期平均数问题。")]),_vm._v(" "),_c('p',[_vm._v("（2）2018 年粮食单位面积产量是多少？")]),_vm._v(" "),_c('p',[_vm._v("答：给 2019 年问 2018 年，单位面积产量是平均数，基期平均数问题。")]),_vm._v(" "),_c('p',[_vm._v("（3）2019 年我的收入占全家总收入的比重比上年上升还是下降？")]),_vm._v(" "),_c('p',[_vm._v("答：两个时间+比重，两期比重问题。")]),_vm._v(" "),_c('p',[_vm._v("（4）2019 年人均收入比上年上升还是下降？")]),_vm._v(" "),_c('p',[_vm._v("答：人均收入是平均数，两个时间比较，两期平均数问题。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】两期平均——增长率计算：")]),_vm._v(" "),_c('p',[_vm._v("1.识别：平均数+增长+%。")]),_vm._v(" "),_c('p',[_vm._v("例：2018 年人均工资比 2017 年人均工资增长了百分之几？如果 2018 年人均工资为 5 元，2017 年人均工资为 4 元，则增长率=（5-4）/4=25%。")]),_vm._v(" "),_c('p',[_vm._v("2.公式：r=（a-b）/（1+b）。a 是分子的增长率，b 是分母的增长率。")]),_vm._v(" "),_c('p',[_vm._v("推导：现期平均数为 A/B，基期平均数为 A/B*[（1+b）/（1+a）]，r=[A/B-A/B*（1+b）/（1+a）]÷[A/B*（1+b）/（1+a）]=[1-（1+b）/（1+a）]÷[（1+b）/（1+a）]=[（1+a）-（1+b）]/（1+b）=（a-b）/（1+b）。")]),_vm._v(" "),_c('p',[_vm._v("3.做题逻辑：")]),_vm._v(" "),_c('p',[_vm._v("（1）确定分子、分母（谁÷谁）。")]),_vm._v(" "),_c('p',[_vm._v("（2）代入公式：r=（a-b）/（1+b）。")]),_vm._v(" "),_c('p',[_vm._v("4.以下问题现期均为 2019 年，请判定题型：")]),_vm._v(" "),_c('p',[_vm._v("（1）2019 年我的收入占全家总收入的比重比上年上升了几个百分点？")]),_vm._v(" "),_c('p',[_vm._v("答：关键词是“占”，比重问题，2019 年和上年相比，为两期比重问题。a＞b，上升，a＜b，下降；判定升降之后选最小。")]),_vm._v(" "),_c('p',[_vm._v("（2）2019 年人均收入比上年增长了百分之几？")]),_vm._v(" "),_c('p',[_vm._v("答：关键词是“均”，平均数问题，问 2019 年比上年增长+%，为平均数的增长率，公式：（a-b）/（1+b）。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】平均数相关：")]),_vm._v(" "),_c('p',[_vm._v("1.现期平均数：")]),_vm._v(" "),_c('p',[_vm._v("（1）识别：问题时间与材料一致+平均（均、每、单位）。")]),_vm._v(" "),_c('p',[_vm._v("（2）公式：平均数=总数/个数，后面/前面")]),_vm._v(" "),_c('p',[_vm._v("（3）技巧：截位直除；削峰填谷。")]),_vm._v(" "),_c('p',[_vm._v("2.基期平均数：")]),_vm._v(" "),_c('p',[_vm._v("（1）识别：问题时间在材料之前+平均（均、每、单位）。")]),_vm._v(" "),_c('p',[_vm._v("（2）公式：A/（1+a）÷[B/（1+b）]=A/B*[（1+b）/（1+a）]。")]),_vm._v(" "),_c('p',[_vm._v("（3）速算：")]),_vm._v(" "),_c('p',[_vm._v("  - ①截位直除。")]),_vm._v(" "),_c('p',[_vm._v("  - ②先计算现期平均数，再判断大小。")]),_vm._v(" "),_c('p',[_vm._v("3.两期平均数：")]),_vm._v(" "),_c('p',[_vm._v("（1）识别：题干中涉及两个时间+平均（均、每、单位）。")]),_vm._v(" "),_c('p',[_vm._v("（2）升降判断：看分子、分母增长率，分子大则升、小则降。")]),_vm._v(" "),_c('p',[_vm._v("（3）平均数的增长率：")]),_vm._v(" "),_c('p',[_vm._v("  - ①先找出分子的增速 a 和分母的增速 b。")]),_vm._v(" "),_c('p',[_vm._v("  - ②代入公式：（a-b）/（1+b）。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("基本术语：")]),_vm._v(" "),_c('p',[_vm._v("倍数用来表示两者的相对关系。")]),_vm._v(" "),_c('p',[_vm._v("若 A 是 B 的 n 倍，则 n=r+1（r 指 A 与 B 相比的增长率）。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】倍数：")]),_vm._v(" "),_c('p',[_vm._v("1.题型识别：时间+倍数。")]),_vm._v(" "),_c('p',[_vm._v("2.现期倍数：A/B，与现期比重、现期平均数的公式相同。")]),_vm._v(" "),_c('p',[_vm._v("例：2017 年，小明收入 10 个亿，马云收入 2 个亿，小明收入是马云的多少倍？")]),_vm._v(" "),_c('p',[_vm._v("答：小学难度，A/B=10/2=5 倍。")]),_vm._v(" "),_c('p',[_vm._v("3.基期倍数：A/B*[（1+b）/（1+a）]，与基期比重、基期平均数的公式相同。")]),_vm._v(" "),_c('p',[_vm._v("例：2017 年，小明收入 A 个亿，同比增长率为 a，马云收入 B 个亿，同比增长率为 b，2016 年小明收入是马云的多少倍？")]),_vm._v(" "),_c('p',[_vm._v("答：2016 年小明/2016 年马云=A/（1+a）÷[B/（1+b）]=A/（1+a）*[（1+b）/B]=A/B*[（1+b）/（1+a）]。")]),_vm._v(" "),_c('p',[_vm._v("4.速算技巧：截位直除；先计算 A/B，再看（1+b）/（1+a）与 1 的关系。")]),_vm._v(" "),_c('p',[_vm._v("5.易错点：")]),_vm._v(" "),_c('p',[_vm._v("（1）A 是 B 的几倍：A/B，是“真”倍数，直接除。")]),_vm._v(" "),_c('p',[_vm._v("（2）A 比 B 增长（多）几倍：（A-B）/B=A/B-1，是“假”倍数，本质上是增长率，除完要减 1。倍数=r+1，A/B-1=r。")]),_vm._v(" "),_c('p',[_vm._v("（3）A 超过 B 的 n 倍：超过就是“＞”，A＞B*n→A/B＞n。")]),_vm._v(" "),_c('p',[_vm._v("6.注意：倍数没有两期问题，只有现期倍数和基期倍数。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("一、现期倍数")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】选项差距大，可以把 0.83/1.22 看成 2/3，用 0.66 进行估算。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、基期倍数")]),_vm._v(" "),_c('div',{staticClass:"modal-c"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】倍数：")]),_vm._v(" "),_c('p',[_vm._v("1.现期倍数：")]),_vm._v(" "),_c('p',[_vm._v("（1）识别：问题时间与材料一致，A 是 B 的多少倍。")]),_vm._v(" "),_c('p',[_vm._v("（2）公式：A/B。")]),_vm._v(" "),_c('p',[_vm._v("（3）速算：截位直除法。")]),_vm._v(" "),_c('p',[_vm._v("2.基期倍数：")]),_vm._v(" "),_c('p',[_vm._v("（1）识别：问题时间在材料之前，A 是 B 的多少倍。")]),_vm._v(" "),_c('p',[_vm._v("（2）公式：A/（1+a）÷[B/（1+b）]=A/B*[（1+b）/（1+a）]。")]),_vm._v(" "),_c('p',[_vm._v("（3）速算：①截位直除；②先算现期倍数，再判断大小。")]),_vm._v(" "),_c('p',[_vm._v("3.倍数与增长：")]),_vm._v(" "),_c('p',[_vm._v("（1）A 是 B 的 n 倍：n=A/B。")]),_vm._v(" "),_c('p',[_vm._v("（2）A 比 B 增长（多）r 倍：r=A/B-1。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】比重、平均数、倍数问题考点辨析：")]),_vm._v(" "),_c('p',[_vm._v("1.比重（关键词：占、比重）：")]),_vm._v(" "),_c('p',[_vm._v("（1）现期：A/B。")]),_vm._v(" "),_c('p',[_vm._v("（2）基期：A/B*[（1+b）/（1+a）]。")]),_vm._v(" "),_c('p',[_vm._v("（3）升降判断：a＞b，比重上升；a＜b，比重下降；a=b，比重不变。")]),_vm._v(" "),_c('p',[_vm._v("（4）定量计算：两期比重差=A/B*[（a-b）/（1+a）]，先判升降，再选最小。")]),_vm._v(" "),_c('p',[_vm._v("2.平均数（关键词：均、每、单位）：")]),_vm._v(" "),_c('p',[_vm._v("（1）现期：A/B，后/前。")]),_vm._v(" "),_c('p',[_vm._v("（2）基期：A/B*[（1+b）/（1+a）]。")]),_vm._v(" "),_c('p',[_vm._v("（3）升降判断：a＞b，平均数上升；a＜b，平均数下降；a=b，平均数不变。")]),_vm._v(" "),_c('p',[_vm._v("（4）定量计算：平均数的增长率=（a-b）/（1+b）。")]),_vm._v(" "),_c('p',[_vm._v("3.倍数（关键词：倍）：")]),_vm._v(" "),_c('p',[_vm._v("（1）现期：A/B。")]),_vm._v(" "),_c('p',[_vm._v("（2）基期：A/B*[（1+b）/（1+a）]。")]),_vm._v(" "),_c('p',[_vm._v("4.注：a 代表分子增长率；b 代表分母增长率。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】")]),_vm._v(" "),_c('p',[_vm._v("1.比重：")]),_vm._v(" "),_c('p',[_vm._v("（1）关键词：占。")]),_vm._v(" "),_c('p',[_vm._v("（2）现期比重：比重=部分/总量，部分=总量*占比，总体=部分/占比。")]),_vm._v(" "),_c('p',[_vm._v("（3）基期比重：")]),_vm._v(" "),_c('p',[_vm._v("  - ①公式：A/B*[（1+b）/（1+a）]。")]),_vm._v(" "),_c('p',[_vm._v("  - ②速算：先计算左边 A/B，再看右边和 1 的大小关系，如果分析不出来再对右边进行精算，一般都是可以分析出来的。")]),_vm._v(" "),_c('p',[_vm._v("（4）两期比重比较：判升降，选最小。a＞b，比重上升；a＜b，比重下降。国考中的两期比重都是选最小值，所以可以大胆预测出题人就是这样设置选项的。如果担心选最小会出错，可以用两期比重公式计算，A/B*[（a-b）/（1+a）]，计算至少需要 2 分钟，还不一定算对，不如 1 秒钟蒙出正确答案，要注重性价比。")]),_vm._v(" "),_c('p',[_vm._v("2.平均数：")]),_vm._v(" "),_c('p',[_vm._v("（1）关键词：平均/每/单位。“单位”指的是单位面积产量。")]),_vm._v(" "),_c('p',[_vm._v("（2）现期平均数=后/前，每人多少钱，钱/人数；平均每班多少人，总人数/班级数。分子是 A，分母是 B。")]),_vm._v(" "),_c('p',[_vm._v("（3）削峰填谷：第一步，找基准，尽量居中，这样多的部分和少的部分才能尽可能互补；第二步，用多的去补少的，再求平均数。")]),_vm._v(" "),_c('p',[_vm._v("（4）基期平均：")]),_vm._v(" "),_c('p',[_vm._v("  - ①公式：A/B*[（1+b）/（1+a）]。")]),_vm._v(" "),_c('p',[_vm._v("  - ②速算：先计算左边 A/B，再看右边和 1 的大小关系。")]),_vm._v(" "),_c('p',[_vm._v("（5）两期平均比较：a＞b，平均数上升；a＜b，平均数下降。")]),_vm._v(" "),_c('p',[_vm._v("（6）平均数的增长率：r=（a-b）/（1+b）。a 是 A 的增长率，b 是 B 的增长率。A 永远是分子，B 永远是分母，每个班多少人，后/前，全部人数/班级数，人数就是 A，班级数就是 B。")]),_vm._v(" "),_c('p',[_vm._v("3.倍数：")]),_vm._v(" "),_c('p',[_vm._v("（1）关键词：倍。")]),_vm._v(" "),_c('p',[_vm._v("（2）出现倍数，关键看时间和问法：时间上分为现期倍数和基期倍数；问法：A 是 B 的几倍，A/B；A 比 B 多几倍，A/B-1。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】特殊增长率：可能国考 20 题资料分析中就出 2 题，但是一定会有所涉及。隔三差五会考查间隔增长率、混合增长率，但本身考查的频率不高。")]),_vm._v(" "),_c('p',[_vm._v("1.间隔增长率。")]),_vm._v(" "),_c('p',[_vm._v("2.年均增长率。")]),_vm._v(" "),_c('p',[_vm._v("3.混合增长率。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("一、间隔增长率")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】间隔增长率：之前学的增长率都是连续的状态，比如 2019 年比2018 年，这是同比增长率，2019 年 7 月比 2019 年 6 月增长，这是环比增长率。间隔增长率的时间一定是隔开的，已知：某企业 2018 年主营业务收入同比增长率为 `r_1`，2017 年同比增长率为 `r_2`。求：该企业 2018 年主营业务收入比 2016 年的增长率为多少？时间不连续，中间间隔一年，求增长率，就是间隔增长率。")]),_vm._v(" "),_c('p',[_vm._v("1.公式推导：`r=r_1+r_2+r_1*r_2`。已知 2018 年同比增长率为 `r_1`，2017 年同比增长率为 `r_2`。求：2018 年比 2016 年的增长率。没有 2016 年的数据，2018 年是现期，2016 年是基期，求增长率可以用（2018 年-2016 年）/2016 年。假如 2016年的值用 2016 表示，2017 年同比增长率为 `r_2`，2017 年的值为`基期*（1+r）=2016*（1+r_2）`，2018 年同比增长率为 `r_1`，`2018=2017*（1+r_1）=2016*（1+r_1）*（1+r_2）`，所以（2018 年-2016 年）/2016 年=[2016*（1+`r_1`）*（1+`r_2`）-2016]/2016=`1+r_1+r_2+r_1*r2-1`=`r_1+r_2+r_1*r_2`。")]),_vm._v(" "),_c('p',[_vm._v("2.`r_1`、`r_2`怎么找？`r_1`是现期时间的增长率，`r_2`是间隔时间的增长率。")]),_vm._v(" "),_c('p',[_vm._v("（1）例：2018 年比 2016 年增长了百分之几？`r_1`：2018 年的同比增长率。`r_2`：2017 年的同比增长率。")]),_vm._v(" "),_c('p',[_vm._v("（2）练习：")]),_vm._v(" "),_c('p',[_vm._v("  - ①2017 年比 2015 年增长了百分之几？2017 年和 2015 年中间间隔 2016 年，`r_1`：2017 年的同比增长率。`r_2`：2016 年的同比增长率。")]),_vm._v(" "),_c('p',[_vm._v("  - ②2014 年比 2012 年增长了百分之几？2014 年和 2012 年中间间隔 2013 年，`r_1`：2014 年的同比增长率。`r_2`：2013 年的同比增长率。但是没有必要区分 `r_1`和`r_2`，加法和乘法都有交换律，`r=r_1+r_2+r_1*r_2=r_2+r_1+r_2*r_1`。")]),_vm._v(" "),_c('p',[_vm._v("3.公式咋算？")]),_vm._v(" "),_c('p',[_vm._v("（1）不计算：结合选项排除。例：15%+18%+15%*18%≈？")]),_vm._v(" "),_c('p',[_vm._v("A.35.7%    B.30.9%    C.28.9%    D.41.6% ")]),_vm._v(" "),_c('p',[_vm._v("答：乘法部分很难算，估算在前，如果估算不了，再想其他办法，15%+18%=33%，还要加两个数的乘积，结果一定大于 33%，排除 B、C 项。15%*18%只有一点点，选择 A 项。")]),_vm._v(" "),_c('p',[_vm._v("（2）可估算：`r_1`、`r_2`的绝对值均小于 10%，`r_1`*`r_2`可以忽略。10%*10%=1%，如果 `r_1`、`r_2`的绝对值均小于 10%，`r_1`*`r_2`就 1%都不到了，可以忽略不计。")]),_vm._v(" "),_c('p',[_vm._v("  - ①：5%+8%+5%*8%≈？5%+8%=13%，5%*8%很容易计算，但如果是 5.13%*8.28%，就很难计算了。5%、8%均小于 10%，5%*8%可以直接忽略，只需要计算加法部分。")]),_vm._v(" "),_c('p',[_vm._v("  - ②：5%+36%+5%*36%≈？5%＜10%，但是 36%＞10%，只有当 `r_1`、`r_2` 的绝对值均小于 10%才可以忽略 `r_1`*`r_2`，因此 5%*36%不能忽略，5%*36%=1/20*36%=1.8%，原式=41%+1.8%=42.8%。或者 36%≈33%≈1/3，5%*1/3=1"),_c('sup',[_vm._v("+")]),_vm._v("%。")]),_vm._v(" "),_c('p',[_vm._v("  - ③：17.9%+20.2%+17.9%*20.2%≈？17.9%+20.2%=38.1%，17.9%、20.2%均大于 10%，不能忽略 17.9%*20.2%，20.2%≈20%=1/5，17.9%*1/5，或者直接看成18%*20%。注意：a%*b%=（a*b/100）%。17.9%*20.2%≈18%*20%=（18*20/100）%=3.6%。")]),_vm._v(" "),_c('p',[_vm._v("（3）不得不算：结合特殊分数。")]),_vm._v(" "),_c('p',[_vm._v("  - ①28%+25%+28%*25%=？28%+25%+28%*25%=53%+28%*1/4=60%。")]),_vm._v(" "),_c('p',[_vm._v("  - ② -18%+5%+ （ -18% ） *5%= ？ -18%+5%+ （ -18% ） *5%=-13%+ （ -18% ）*1/20=-13%-1"),_c('sub',[_vm._v("-")]),_vm._v("%=-14"),_c('sub',[_vm._v("-")]),_vm._v("%。")]),_vm._v(" "),_c('p',[_vm._v("  - ③-18%+（-5%）+（-18%）*（-5%）=？-18%+（-5%）+（-18%）*（-5%）≈ -23%+1%=-22%。")]),_vm._v(" "),_c('p',[_vm._v("4.间隔增长率总结：")]),_vm._v(" "),_c('p',[_vm._v("（1）识别：中间隔一年，求增长量。比如 2019 年比 2017 年，2016 年比 2014年。只有中间间隔一年的可以用间隔增长率公式。如果问 2018 年相比 2008 年的增长率，用不了间隔增长率，就是一个普通的增长率，会给 2018 年的现期值和 2008 年的基期值，用（2018 年-2008 年）/2008 年。")]),_vm._v(" "),_c('p',[_vm._v("（2）公式：`r=r_1+r_2+r_1*r_2`。")]),_vm._v(" "),_c('p',[_vm._v("（3）技巧：")]),_vm._v(" "),_c('p',[_vm._v("  - ①`r_1`、`r_2`绝对值均小于 10%时，`r_1`*`r_2`可忽略。")]),_vm._v(" "),_c('p',[_vm._v("  - ②结合选项或百化分。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】间隔倍数：")]),_vm._v(" "),_c('p',[_vm._v("1.识别：中间隔一年，求倍数。")]),_vm._v(" "),_c('p',[_vm._v("2.公式：间隔倍数=间隔增长率+1")]),_vm._v(" "),_c('p',[_vm._v("3.做题步骤：")]),_vm._v(" "),_c('p',[_vm._v("（1）先算间隔增长率 `r=r_1+r_2+r_1*r_2`。")]),_vm._v(" "),_c('p',[_vm._v("（2）再加 1。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】间隔基期量：")]),_vm._v(" "),_c('p',[_vm._v("1.识别：间隔一年，求基期量。给2018年问2016年的量，间隔基期。")]),_vm._v(" "),_c('p',[_vm._v("2.公式：间隔基期量=现期量/（1+间隔增长率）。")]),_vm._v(" "),_c('p',[_vm._v("3.做题步骤：")]),_vm._v(" "),_c('p',[_vm._v("（1）先求间隔增长率`r=r_1+r_2+r_1*r_2`。")]),_vm._v(" "),_c('p',[_vm._v("（2）计算：现期量/（1+间隔r）。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】间隔增长量：")]),_vm._v(" "),_c('p',[_vm._v("1.识别：中间隔一年，求增长量。")]),_vm._v(" "),_c('p',[_vm._v("2.公式：算出间隔增长率，再用百化分计算。")]),_vm._v(" "),_c('p',[_vm._v("3.做题步骤：")]),_vm._v(" "),_c('p',[_vm._v("（1）先算间隔增长率`r=r_1+r_2+r_1*r_2`")]),_vm._v(" "),_c('p',[_vm._v("（2）再百化分。")]),_vm._v(" "),_c('p',[_vm._v("（3）间隔增长率＞0，增长量=现期/（n+1）；间隔增长率＜0，减少量=现 期/（n-1）。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】间隔+增长率、倍数、基期量、增长量小结：例1～5的共同点：都是间隔年份，都算了间隔增长率。只不过有些题只需要算间隔增长率，有些题算的是间隔倍数、间隔基期量、间隔增长量。以后看到有间隔年份的题，先把年均增长率算出来。")]),_vm._v(" "),_c('p',[_vm._v("1.题型识别：中间隔一年，求增长率/倍数/基期量/增长量。")]),_vm._v(" "),_c('p',[_vm._v("2.公式：`r_间=r_1+r_2+r_1*r_2`；间隔倍数=`r_间`+1；间隔基期量=现期量/（1+`r_间`）；间隔增长率百化分，间隔增长量=现期/（n+1）。")]),_vm._v(" "),_c('p',[_vm._v("3.速算技巧：")]),_vm._v(" "),_c('p',[_vm._v("（1）结合选项排除。")]),_vm._v(" "),_c('p',[_vm._v("（2）`r_1`、`r_2`的绝对值均小于10%，`r_1`*`r_2`可以忽略。")]),_vm._v(" "),_c('p',[_vm._v("（3）特殊分数。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、年均增长率")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】年均增长率：国考中不会出现年均增长率计算，深圳、浙江、江西曾经考过。")]),_vm._v(" "),_c('p',[_vm._v("1.公式：`（1+r）^n`=现期值/基期值（n 为现期和基期的年份差）。")]),_vm._v(" "),_c('p',[_vm._v("2.识别：年均增长（增速）最快/排序；年均增长率为。")]),_vm._v(" "),_c('p',[_vm._v("示例：某企业 2011 年的收入为 100 亿元，2014 年的收入为 200 亿元，则该企业 2011 年至 2014 年收入的年均增长率为多少？")]),_vm._v(" "),_c('p',[_vm._v("答：年均增长率和年均增长量的意思相似，都是每年的平均值。区别是：年均增长量=总的增长量/年份差=（200-100）/3≈33.3；但年均增长率有所不同，不是用总的增长率除以年份差，指的是每年增长率都一样，2011 年为基期，收入为 100 亿元，2012 年增长 r，所以 2012 年=100*（1+r），到 2013 年又增长 r，2013 年=100*（1+r）*（1+r）=100*（1+r）²，2014 年=100*（1+r）*（1+r）*（1+r）=100*（1+r）³，所以基期*`(1+r)^³`=现期，其中 n 指的是年份差，通用公式就是`（1+r）^n`=现期/基期。")]),_vm._v(" "),_c('p',[_vm._v("3.年均增长类问题年份差的选择：")]),_vm._v(" "),_c('p',[_vm._v("（1）一般情况（除江苏外）：2011 年～2015 年：年份差为 4。基期：2011年；现期：2015 年。")]),_vm._v(" "),_c('p',[_vm._v("（2）五年规划（全国都一样）：十二五期间：年份差为 5（基期往前推一年）。基期：2010 年；现期：2015 年。")]),_vm._v(" "),_c('p',[_vm._v("（3）江苏省考（特殊）：2011 年～2015 年：年份差为 5（基期往前推一年）。基期：2010 年；现期：2015 年。")]),_vm._v(" "),_c('p',[_vm._v("4.比较：国考只考比较，不考计算。")]),_vm._v(" "),_c('p',[_vm._v("（1）识别：年均增长最快、年均增速排序。")]),_vm._v(" "),_c('p',[_vm._v("（2）公式：`（1+r）^n`=现期值/基期值（n 为现期和基期的年份差）。")]),_vm._v(" "),_c('p',[_vm._v("（3）技巧：")]),_vm._v(" "),_c('p',[_vm._v("  - ①比较：n 相同，比较 r 的大小取决于“现期/基期”，直接比较“现期/基期”。“现期/基期”越大，r 越大；“现期/基期”越小，r 越小。")]),_vm._v(" "),_c('p',[_vm._v("  - ②计算：居中代入，如果考试中居中代入都无法得到答案，建议放弃。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】")]),_vm._v(" "),_c('p',[_vm._v("1.选择比较好算的中间量，最多代入两次。")]),_vm._v(" "),_c('p',[_vm._v("2.曾经江西省考有一次考试选项设置类似为27%、28%、29%、30%，没有办法代入，遇到这种题直接放弃。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("三、混合增长率")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】混合增长率：")]),_vm._v(" "),_c('p',[_vm._v("1.例：已知2019年房地产利润为100亿，2018年房地产利润为80亿，求2019年房地产利润比去年增加（ ）%？")]),_vm._v(" "),_c('p',[_vm._v("答：r=（现期- 基期）/基期=（100-80）/80。但如果材料中没有直接给出房地产利润，只给出房产和地产的数据，不可能通过公式一步解决，需要二者混合起来求增长率。")]),_vm._v(" "),_c('p',[_vm._v("2.题型识别：部分与总体之间的增长率关系。常见概念：")]),_vm._v(" "),_c('p',[_vm._v("（1）房产+地产=房地产。")]),_vm._v(" "),_c('p',[_vm._v("（2）进口+出口=进出口。")]),_vm._v(" "),_c('p',[_vm._v("（3）城镇+农村=全国。")]),_vm._v(" "),_c('p',[_vm._v("（4）上半年+下半年=全年。")]),_vm._v(" "),_c('p',[_vm._v("（5）硕士+博士=研究生。山东省公务员考试曾经考过研究生的常识，要作为重点，硕士是硕士研究生，博士是博士研究生，合起来是研究生的总体。")]),_vm._v(" "),_c('p',[_vm._v("（6）1～2 月+3 月=一季度。")]),_vm._v(" "),_c('p',[_vm._v("（7）一季度+二季度=上半年。")]),_vm._v(" "),_c('p',[_vm._v("3.判断口诀：")]),_vm._v(" "),_c('p',[_vm._v("（1）混合后居中（整体增长率介于部分增长率之间）。可以理解为两杯盐水混合，一杯浓度是10%，另一杯浓度是20%，混合后浓度一定介于10%～20%之间。如果多个量混合，浓度为5%、10%、28%的三杯盐水混合，混合后浓度介于5%～28%（最小值～最大值）之间。")]),_vm._v(" "),_c('p',[_vm._v("（2）偏向基期较大的（基期指的基期量，做题中一般用现期量近似代替，答案有误差，但基本可以忽略不计）。类似于拔河的思路，哪边人多哪边就有优势：浓度为10%的盐水一杯和浓度为20%的盐水一杯混合，混合后一定居中，浓度为15%。如果20%的盐水加200杯，10%的盐水加1杯，混合后结果一定接近20%。如果10%的盐水有1000杯，20%的盐水有1杯，混合后一定接近10%。如果将一颗糖丢进游泳池中，游泳池不会变甜，因为相比之下游泳池的水特别多；如果将一滴黑色墨水滴到大海中，大海也不会发生变化，因为一滴墨水对于大海来说微不足道，起不到改变效果。")]),_vm._v(" "),_c('p',[_vm._v("4.例：某地区2016年上半年GDP为800亿元，同比增速为8%，2016年下半年GDP为1200亿元，同比增速为12%。")]),_vm._v(" "),_c('p',[_vm._v("问：该地区2016年全年的GDP同比增速约为？")]),_vm._v(" "),_c('p',[_vm._v("A.7.2%    B.8.7%    C.10.4%    D.13.1%")]),_vm._v(" "),_c('p',[_vm._v("答：问题时间2016年全年，材料中给出的是上半年和下半年。求GDP增速，材料中没有2016年全年的现期值、基期值和增长率，无法用公式直接求解。根据上半年+下半年=全年，是混合的概念，求增长率，为混合增长率问题。上半年增速为8%，下半年增速为12%，混合后一定介于8%～12%之间，排除A、D项。然后看谁的量大，少数服从多数，8%对应800亿，12%对应1200亿，如果量相同，混合后居中，中间值为10%，但实际是800＜1200，所以结果更偏向12%（量大的一边），结果介于10%～12%之间，对应C项。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】")]),_vm._v(" "),_c('p',[_vm._v("1.例如：a收入100亿，增长10%，b收入1元，增长100%，在100亿面前，1元微乎其微，可以省略。")]),_vm._v(" "),_c('p',[_vm._v("2.三杯盐水混合，若想不通，则先两两混合，混合后再和第三杯混合。")]),_vm._v(" "),_c('p',[_vm._v("3.用现期量代替基期量，因为基期量的计算麻烦，同时现期量和基期量比例关系相近，因此可以代替。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】线段法：")]),_vm._v(" "),_c('p',[_vm._v("1.混合问题：混合增长率，溶液，平均数，折扣，利润率问题等等。")]),_vm._v(" "),_c('p',[_vm._v("2.方法：")]),_vm._v(" "),_c('p',[_vm._v("（1）混合之前写两边。")]),_vm._v(" "),_c('p',[_vm._v("（2）混合之后写中间。")]),_vm._v(" "),_c('p',[_vm._v("（3）距离与量成反比。量指的是分母，如：增长率=增长量/基期量，浓度=溶质/溶液，平均数=总数/个数。")]),_vm._v(" "),_c('p',[_vm._v("3.例1：100g浓度10%盐水与200g浓度25%盐水混合成盐水的浓度？")]),_vm._v(" "),_c('p',[_vm._v("答：先画一条线段，混合之前写两边，左边为10%，右边为25%，混合之后写中间，混合的浓度为？，距离与量成反比，标好数字后线段变成数轴，10%到25%的长度为15，量永远为分母，浓度=溶质/溶液，10%对应100g，25%对应200g，量之比为1：2，则距离之比为2：1，左边对应2份，右边对应1份，线段平均分成3份，1份对应5%，则混合后的浓度=25%-5%=20%。")]),_vm._v(" "),_c('p',[_vm._v("例2：男生100人，增长率为10%，女生200人，增长率为40%，问总人数的增长率。")]),_vm._v(" "),_c('p',[_vm._v("答：线段法是解决两个量的关系，不可能出现好几段的情况。画一条线段，把两个量写在线段两边，混合之前写两边，男生和女生一边写一个，男生增长率为10%，女生增长率为40%，混合之后写中间，混合之后为总人数，在中间，为所求项。距离与量成反比，整个线段的长度为30%，男生100人，女生200人，量之比为1：2，则距离之比为2：1，则3份对应30%，1份对应10%，左边为2份对应20%，右边为1份对应10%，则混合后为10%+20%=30%。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】特殊增长率：")]),_vm._v(" "),_c('p',[_vm._v("1.间隔增长率：")]),_vm._v(" "),_c('p',[_vm._v("（1）题型识别：中间隔一年求增长率。")]),_vm._v(" "),_c('p',[_vm._v("（2）公式：`r=r_1+r_2+r_1*r_2`。")]),_vm._v(" "),_c('p',[_vm._v("（3）速算技巧：")]),_vm._v(" "),_c('p',[_vm._v("  - ①`r_1`、`r_2`绝对值均小于 10%，结合选项 `r_1`*`r_2`可忽略。")]),_vm._v(" "),_c('p',[_vm._v("  - ②百化分。")]),_vm._v(" "),_c('p',[_vm._v("2.年均增长率：")]),_vm._v(" "),_c('p',[_vm._v("（1）题型识别：年均增长最快、年均增长排序。")]),_vm._v(" "),_c('p',[_vm._v("（2）公式：`（1+r）^n`=现期/基期。")]),_vm._v(" "),_c('p',[_vm._v("（3）比较方法：比较“现期/基期”（n 相同）。")]),_vm._v(" "),_c('p',[_vm._v("3.混合增长率")]),_vm._v(" "),_c('p',[_vm._v("（1）题型识别：部分增速与整体增速之间的关系。")]),_vm._v(" "),_c('p',[_vm._v("（2）口诀：居中但不中；偏向基期较大的。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】其他：")]),_vm._v(" "),_c('p',[_vm._v("1.直接找数。")]),_vm._v(" "),_c('p',[_vm._v("2.简单加减。")]),_vm._v(" "),_c('p',[_vm._v("3.排序问题。")])]),_vm._v(" "),_c('dl',{staticClass:"knowledge"},[_c('dt',[_vm._v("（一）直接找数")]),_vm._v(" "),_c('dd',[_vm._v("【注意】简单的题目注意时间坑和单位坑。")])]),_vm._v(" "),_c('dl',{staticClass:"knowledge"},[_c('dt',[_vm._v("（二）简单加减")])]),_vm._v(" "),_c('dl',{staticClass:"knowledge"},[_c('dt',[_vm._v("（三）排序问题")]),_vm._v(" "),_c('dd',[_vm._v("【知识点】排序问题四要素：")]),_vm._v(" "),_c('dd',[_vm._v("1.时间：现期还是基期？")]),_vm._v(" "),_c('dd',[_vm._v("2.主体：主体要看清。")]),_vm._v(" "),_c('dd',[_vm._v("3.单位：单位要一致。亿、万、美元、人民币。")]),_vm._v(" "),_c('dd',[_vm._v("4.顺序：从大到小？从小到大？")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】简单计算：")]),_vm._v(" "),_c('p',[_vm._v("1.直接找数：注意范围等表述陷阱。")]),_vm._v(" "),_c('p',[_vm._v("2.简单加减：")]),_vm._v(" "),_c('p',[_vm._v("（1）选项与材料精度相同：尾数法。")]),_vm._v(" "),_c('p',[_vm._v("（2）选项与材料精度不同：估算。")]),_vm._v(" "),_c('p',[_vm._v("3.排序题：时间、单位、主体、顺序。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】")]),_vm._v(" "),_c('p',[_vm._v("1.资料分析的做题时间应在30分钟内，若复习的不到位，做题时间需要35分钟以上，综合分析可以放弃，做题的时候注重16道小题，正确率达到80%。")]),_vm._v(" "),_c('p',[_vm._v("2.综合分析的问题一般是以下说法正确的或者错误的，最多看3个选项就能出答案。有的时候还会出现以下说法对的/错的有几个，每个都要看，一旦看错1个，则满盘皆输，这样的题目不建议做，所有的题目做完之后再做这样的题目。")]),_vm._v(" "),_c('p',[_vm._v("3.按照大数据的结果，C、D项的正确率在50%～60%之间，A、B项的正确率在40%～50%之间，则先看C、D项，再看A、B项。做题的时候遇难则跳。")])]),_vm._v(" "),_c('dl',{staticClass:"knowledge"},[_c('dt',[_vm._v("（一）直接找数")])]),_vm._v(" "),_c('dl',{staticClass:"knowledge"},[_c('dt',[_vm._v("（二）简单加减")])]),_vm._v(" "),_c('dl',{staticClass:"knowledge"},[_c('dt',[_vm._v("（三）排序问题")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 463 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pdf04_vue__ = __webpack_require__(212);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_61c81c6c_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pdf04_vue__ = __webpack_require__(466);
function injectStyle (ssrContext) {
  __webpack_require__(464)
  __webpack_require__(465)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-61c81c6c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pdf04_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_61c81c6c_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pdf04_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 464 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 465 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 466 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pdf-wrap",attrs:{"id":"pdf04"}},[_vm._m(0),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('div',{staticClass:"chapter-wrap"},[_c('h2',{staticClass:"text-c chapter-t",on:{"click":function($event){return _vm.sectionOpenClose('s1')}}},[_c('span',[_vm._v("第一章 | 申论基础")])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.s1),expression:"sectionOpen.s1"}],staticClass:"section-wrap"},[_vm._m(2),_vm._v(" "),_vm._m(3)])]),_vm._v(" "),_c('div',{staticClass:"chapter-wrap"},[_c('h2',{staticClass:"text-c chapter-t",on:{"click":function($event){return _vm.sectionOpenClose('s2')}}},[_c('span',[_vm._v("第二章 | 单一题")])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.s2),expression:"sectionOpen.s2"}],staticClass:"section-wrap"},[_vm._m(4),_vm._v(" "),_vm._m(5),_vm._v(" "),_vm._m(6),_vm._v(" "),_vm._m(7)])]),_vm._v(" "),_c('div',{staticClass:"chapter-wrap"},[_c('h2',{staticClass:"text-c chapter-t",on:{"click":function($event){return _vm.sectionOpenClose('s3')}}},[_c('span',[_vm._v("第三章 | 综合题")])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.s3),expression:"sectionOpen.s3"}],staticClass:"section-wrap"},[_vm._m(8)])]),_vm._v(" "),_c('div',{staticClass:"chapter-wrap"},[_c('h2',{staticClass:"text-c chapter-t",on:{"click":function($event){return _vm.sectionOpenClose('s4')}}},[_c('span',[_vm._v("第四章 | 公文题")])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.s4),expression:"sectionOpen.s4"}],staticClass:"section-wrap"},[_vm._m(9),_vm._v(" "),_vm._m(10),_vm._v(" "),_vm._m(11),_vm._v(" "),_vm._m(12),_vm._v(" "),_vm._m(13)])]),_vm._v(" "),_c('div',{staticClass:"chapter-wrap"},[_c('h2',{staticClass:"text-c chapter-t",on:{"click":function($event){return _vm.sectionOpenClose('s5')}}},[_c('span',[_vm._v("第五章 | 文章写作题")])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.s5),expression:"sectionOpen.s5"}],staticClass:"section-wrap"},[_vm._m(14),_vm._v(" "),_vm._m(15),_vm._v(" "),_vm._m(16),_vm._v(" "),_vm._m(17)])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pdf-cover"},[_c('h1',{staticClass:"text-c pdf-t"},[_c('span',[_vm._v("方法精讲 - 申论")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("1.晨读资料怎么用：")]),_vm._v(" "),_c('p',[_vm._v("（1）晨读资料是从《新华网》、《人民日报》等官方网站上收集的新闻热点，一般以热点评论文的形式呈现，例如针对改善民生，加强社会治理的现象，评论员写了一篇文章。每天早上粉笔的官方微博、圈子、班级群中都会发热点资料，统称为晨读资料。")]),_vm._v(" "),_c('p',[_vm._v("（2）如何运用：")]),_vm._v(" "),_c('p',[_vm._v("①晨读资料主要针对作文，小题主要从资料中找答案，只有作文会遇到材料之外的素材，例如举例论证一个观点，或者用名人名言来论证一个观点，这时需要用到材料之外的素材，如果都用材料内的素材，则不能体现“结合实际，不拘泥于‘给定资料’”。这些素材需要平时多读多看、养成习惯得来，看晨读资料就是提炼其中好的素材，这是最基础的。")]),_vm._v(" "),_c('p',[_vm._v("②申论考的是大家对一些社会现象能否有逻辑地分析出来，分析不是凭空捏造的，而是根据资料进行分析，即申论考查大家是否能够将一篇资料有逻辑地分析、整理出来。晨读资料就是一篇很长的、有逻辑的资料，大家是否能将晨读资料有逻辑地分析出来，所以更高层次阅读晨读资料要划分出逻辑。例如资料一共有 5 段，段 1 引出话题，段 2 按照多个主体分析原因，接下来提出了一些对策，如果能像这样将资料按逻辑划分出来，这样大家的逻辑水平就得到了提升，利于大家理解申论材料。")]),_vm._v(" "),_c('p',[_vm._v("（3）如果大家考上了公务员，简称“文山会海”，天天看文件、开会、帮领导写材料，这些都与文字打交道，那么怎么考查大家是否具备处理文字的能力。")]),_vm._v(" "),_c('p',[_vm._v("①首先要能听懂领导的话，例如国家领导人去企业视察讲话，提到我们要尽快让中小企业复工，恢复生产，中间的规范词就是恢复生产、尽早复工、提升产生力，核心关键词就能体现大家是否听懂了，即对于文字材料能够听懂。")]),_vm._v(" "),_c('p',[_vm._v("②然后还要“输出”，即能够写出文字资料、简洁清晰的答案、一篇作文、一篇公文，申论就是考查文字处理的能力，晨读资料那么长，大家能否读懂，并且加工出来，这些就是文字加工、处理的能力。")]),_vm._v(" "),_c('p',[_vm._v("2.关于字迹：字好看会占便宜，主要体现在作文，例如两个人的作文都是 27 分的水平，但 A 的字迹非常大方、工整、漂亮，在此基础上会酌情加 3-5 分，这是锦上添花的效果，如果作文只考了 12 分，就算加 5 分，也还是三类问题，起不到效果。使用黑色的签字笔，或者钢笔，笔芯的粗细根据自己的喜好而定，建议用签字笔，因为钢笔的墨水容易弄黑试卷。")]),_vm._v(" "),_c('p',[_vm._v("3.行书、楷书都可以，写草书会扣分。字丑没关系，只要工整、干净即可，阅卷人不会因为字丑扣分，只会因为字好看加 3 分左右。")]),_vm._v(" "),_c('p',[_vm._v("4.写错字了轻轻划掉，接着写即可，如果在作文中写错了可以不改，不要用透明胶、涂改液、用口水擦。不改可能还看不到，一改就看到了。")]),_vm._v(" "),_c('p',[_vm._v("5.是否需要用铅笔写一遍，再誊写：不需要用铅笔写一遍，再誊写，直接在题本上标注，例如标注“问题 1”“D1”，或者不同水彩笔标注，只要标注清楚，然后往答题纸上抄，题本上可以随意标注，但不能在答题纸上乱涂乱画，就算打草稿，也只是在题本上简要标注，没有时间让大家写一遍，再抄一遍。")]),_vm._v(" "),_c('p',[_vm._v("6.申论提高不难，很多同学从 40 分提到了 80 分。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("一、答题要素与基本题型")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("1.要素：问题、影响（危害、意义）、对策等。")]),_vm._v(" "),_c('p',[_vm._v("2.题型：单一题、综合题、公文题、文章写作题")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、申论答题步骤")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('dl',{staticClass:"knowledge"},[_c('dt',[_vm._v("（一）审题")]),_vm._v(" "),_c('dd',[_vm._v("1.审作答范围：")]),_vm._v(" "),_c('dd',[_vm._v("2.审作答主题与结构：")]),_vm._v(" "),_c('dd',[_vm._v("3.审作答要求：")])]),_vm._v(" "),_c('dl',{staticClass:"knowledge"},[_c('dt',[_vm._v("（二）阅读资料")]),_vm._v(" "),_c('dd',[_vm._v("1.摘抄")]),_vm._v(" "),_c('dd',[_vm._v("2.概括归纳")]),_vm._v(" "),_c('dd',[_vm._v("3.推导")])]),_vm._v(" "),_c('dl',{staticClass:"knowledge"},[_c('dt',[_vm._v("（三）组织答案")]),_vm._v(" "),_c('dd',[_vm._v("1.加序号")]),_vm._v(" "),_c('dd',[_vm._v("常见的方法是在要点前加“1.2.3.”或“①②③”或“一、二、三、”。")]),_vm._v(" "),_c('dd',[_vm._v("2.分类整理")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("一、问题")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("1.常见的命题方式")]),_vm._v(" "),_c('p',[_vm._v("问题、不足、困境、瓶颈、挑战、难点等。")]),_vm._v(" "),_c('p',[_vm._v("2.答题技巧")]),_vm._v(" "),_c('p',[_vm._v("寻找负面的标志性词汇：不科学、不合理、不到位、不均衡、不完善、不健全、不足；缺乏、缺少、流失；少、低、差、弱、陈旧、单一等")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、影响")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("1.常见问法影响大致可以分成正面影响和负面影响两类")]),_vm._v(" "),_c('p',[_vm._v("（1）正面影响的常见问法：意义、效果、成果、积极作用等。")]),_vm._v(" "),_c('p',[_vm._v("（2）负面影响的常见问法：危害、后果等。")]),_vm._v(" "),_c('p',[_vm._v("2.答题技巧一些标志性词汇构成的词组往往是影响的得分词。常见的表影响的标志性词汇有：")]),_vm._v(" "),_c('p',[_vm._v("（1）正面影响：激发、促进、实现、提升...；有利于、有助于、感动着、推动了、巩固了...")]),_vm._v(" "),_c('p',[_vm._v("（2）负面影响：引发、导致、造成、危及、损害...；消解着、割裂着、破坏了、阻碍了、致使...")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("三、对策")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("1.常见问法")]),_vm._v(" "),_c('p',[_vm._v("答题元素中表对策的常见词汇有：对策、措施、举措、建议、意见、做法、解决方法、经验、启示等。")]),_vm._v(" "),_c('p',[_vm._v("2.答题技巧")]),_vm._v(" "),_c('p',[_vm._v("（1）直接摘抄。资料中出现表对策的标志性动词时，该处往往有得分点。")]),_vm._v(" "),_c('p',[_vm._v("常见的动词有：建立、健全、统筹、创新、规范、整顿、打击、扶持、规划、设置等。")]),_vm._v(" "),_c('p',[_vm._v("（2）问题反推：解决资料中的现有问题。")]),_vm._v(" "),_c('p',[_vm._v("（3）经验借鉴：其他地区或国家的成功经验可以拿来借鉴。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("四、特殊要素")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("1.常见问法变化、特点、优点、成绩、争议等。")]),_vm._v(" "),_c('p',[_vm._v("2.答题技巧按照日常用语理解题目问法，并去资料中找寻相应信息。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("词句解释题")]),_vm._v(" "),_c('p',[_vm._v("针对一个或多个词汇、短语或句子进行理解和分析的题目。")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('table',{attrs:{"width":"100%"}},[_c('thead',[_c('tr',[_c('td',[_vm._v("题型")]),_vm._v(" "),_c('td',[_vm._v("词句解释题")])])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',[_vm._v("题型判断")]),_vm._v(" "),_c('td',[_vm._v("谈...的含义；对...进行解释和；谈对...的理解")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("常规思路")]),_vm._v(" "),_c('td',[_vm._v("释义（一般根据与所要解释的词句相近的句子，如专家观点、权威观点、总结句等，得出词句的字面含义） + 分析相关要素（问题、危害、意义、事例等）+对策（应该怎么做）")])])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("一、典型例题")]),_vm._v(" "),_c('div',{staticClass:"modal-c"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、阅卷要求")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("格式分：标题、称谓（主送机关）、落款。")]),_vm._v(" "),_c('p',[_vm._v("内容分：问题、危害、意义、对策等。")]),_vm._v(" "),_c('p',[_vm._v("语言分：通俗易懂、表达生动、有感染力、有号召力、态度诚恳、建议口吻等。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("三、格式")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('dl',{staticClass:"knowledge"},[_c('dt',[_vm._v("（一）具体格式")]),_vm._v(" "),_c('dd',[_vm._v("1.标题")]),_vm._v(" "),_c('dd',[_vm._v("（1）自拟标题。")]),_vm._v(" "),_c('dd',[_vm._v("  - 例如：女神妈祖，天下一家。")]),_vm._v(" "),_c('dd',[_vm._v("（2）一般写法。")]),_vm._v(" "),_c('dd',[_vm._v("  - 发文机关+“关于”+事由+“的”+文种。")]),_vm._v(" "),_c('dd',[_vm._v("  - 例如：国务院关于坚决稳定市场物价的通知。")]),_vm._v(" "),_c('dd',[_vm._v("（3）书写格式。")]),_vm._v(" "),_c('dd',[_vm._v("  - 标题要居中书写（不带有书名号）。")]),_vm._v(" "),_c('dd',[_vm._v("2.称谓（主送机关）")]),_vm._v(" "),_c('dd',[_vm._v("（1）称谓（对象为人物）。")]),_vm._v(" "),_c('dd',[_vm._v("  - 例如：尊敬的与会嘉宾、广大家长朋友们等。")]),_vm._v(" "),_c('dd',[_vm._v("（2）主送机关（对象为单位）。")]),_vm._v(" "),_c('dd',[_vm._v("  - 例如：各社区、各街道办等。")]),_vm._v(" "),_c('dd',[_vm._v("（3）书写格式。")]),_vm._v(" "),_c('dd',[_vm._v("  - 顶格书写。")]),_vm._v(" "),_c('dd',[_vm._v("3.落款")]),_vm._v(" "),_c('dd',[_vm._v("（1）单位（个人）。")]),_vm._v(" "),_c('dd',[_vm._v("  - 例如：某企业工会（写在时间上一行）。")]),_vm._v(" "),_c('dd',[_vm._v("（2）时间")]),_vm._v(" "),_c('dd',[_vm._v("  - 例如：2020年××月××日或者××××年××月××日。")]),_vm._v(" "),_c('dd',[_vm._v("（3）书写格式。")]),_vm._v(" "),_c('dd',[_vm._v("  - 落款位于正文右下方，日期右空四个格子，发文者位于日期上面居中。")])]),_vm._v(" "),_c('dl',{staticClass:"knowledge"},[_c('dt',[_vm._v("（二）公文有无格式对应表")]),_vm._v(" "),_c('dd',[_c('table',[_c('thead',[_c('tr',[_c('td',[_vm._v("题目")]),_vm._v(" "),_c('td',[_vm._v("标题")]),_vm._v(" "),_c('td',[_vm._v("称为")]),_vm._v(" "),_c('td',[_vm._v("落款")])])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',[_vm._v("报告、通告、意见、通知等")]),_vm._v(" "),_c('td',[_vm._v("有")]),_vm._v(" "),_c('td',[_vm._v("有")]),_vm._v(" "),_c('td',[_vm._v("有")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("倡议书、公开信、宣传稿")]),_vm._v(" "),_c('td',[_vm._v("有")]),_vm._v(" "),_c('td',[_vm._v("有")]),_vm._v(" "),_c('td',[_vm._v("有")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("经验发言稿、事件处理发言稿")]),_vm._v(" "),_c('td',[_vm._v("有")]),_vm._v(" "),_c('td',[_vm._v("有")]),_vm._v(" "),_c('td',[_vm._v("根据格子确定")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("时评、网评、新闻稿等")]),_vm._v(" "),_c('td',[_vm._v("有")]),_vm._v(" "),_c('td',[_vm._v("无")]),_vm._v(" "),_c('td',[_vm._v("有")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("调查问卷、活动方案")]),_vm._v(" "),_c('td',[_vm._v("有")]),_vm._v(" "),_c('td',[_vm._v("无")]),_vm._v(" "),_c('td',[_vm._v("有")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("编者按、内容要点")]),_vm._v(" "),_c('td',[_vm._v("无")]),_vm._v(" "),_c('td',[_vm._v("无")]),_vm._v(" "),_c('td',[_vm._v("有")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("明确要求不写公文格式的命题方式")]),_vm._v(" "),_c('td',[_vm._v("无")]),_vm._v(" "),_c('td',[_vm._v("无")]),_vm._v(" "),_c('td',[_vm._v("有")])])])])])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("四、分类及真题演练")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('dl',{staticClass:"knowledge"},[_c('dt',[_vm._v("（一）分类的标准")]),_vm._v(" "),_c('dd',[_vm._v("根据身份、对象和目的意图的不同，公文在内容要点的侧重点、语言表达和书写格式等方面略有不同。按不同目的意图，公文大致分为四类：方案类、宣传类、总结类、评论类。")])]),_vm._v(" "),_c('dl',{staticClass:"knowledge"},[_c('dt',[_vm._v("（二）具体类别")]),_vm._v(" "),_c('dd',[_vm._v("1.方案类")]),_vm._v(" "),_c('dd',[_vm._v("（1）如何识别方案类公文。")]),_vm._v(" "),_c('dd',[_vm._v("  - 方案类公文主要是为某个或者某些对象能够更好地完成工作或任务而进行的规划，一般侧重对策、建议、具体做法。")]),_vm._v(" "),_c('dd',[_vm._v("（2）典型的方案类公文。")]),_vm._v(" "),_c('dd',[_vm._v("  - 指导意见、建议、活动方案等")]),_vm._v(" "),_c('dd',[_vm._v("（3）方案类公文常规思路。")]),_vm._v(" "),_c('dd',[_c('div',{staticClass:"border-radius"},[_c('p',{staticStyle:{"text-align":"center"}},[_vm._v("“关于”+事由+“的”+文种")]),_vm._v(" "),_c('p',[_vm._v("主送机关（发文对象）：")]),_vm._v(" "),_c('p',{staticStyle:{"padding-left":"20px"}},[_vm._v("开头：交代缘由（背景、根据、目的、意义、问题等）")]),_vm._v(" "),_c('p',{staticStyle:{"padding-left":"20px"}},[_vm._v("主体：具体解决问题的对策")]),_vm._v(" "),_c('p',{staticStyle:{"padding-left":"20px"}},[_vm._v("结尾")]),_vm._v(" "),_c('p',{staticStyle:{"text-align":"right","padding-right":"20px"}},[_vm._v("发文机关（发文者）")]),_vm._v(" "),_c('p',{staticStyle:{"text-align":"right"}},[_vm._v("××××年××月××日")])])]),_vm._v(" "),_c('dd',[_vm._v("（4）真题演练。")]),_vm._v(" "),_c('dd'),_vm._v(" "),_c('dd',[_vm._v("2.宣传类")]),_vm._v(" "),_c('dd',[_vm._v("（1）如何识别宣传类公文。")]),_vm._v(" "),_c('dd',[_vm._v("宣传类公文的主要目的是通过说服、劝解、号召、宣传等转变认知、看法，增长知识，进而倡导被宣传对象采取某些行动或者措施。")]),_vm._v(" "),_c('dd',[_vm._v("（2）典型的宣传类公文。")]),_vm._v(" "),_c('dd',[_vm._v("公开信、倡议书、宣传稿等。")]),_vm._v(" "),_c('dd',[_vm._v("（3）宣传类公文常规思路。")]),_vm._v(" "),_c('dd',[_c('div',{staticClass:"border-radius"},[_c('p',{staticStyle:{"text-align":"center"}},[_vm._v("“关于”+事由+“的”+文种")]),_vm._v(" "),_c('p',[_vm._v("主送机关（发文对象）：")]),_vm._v(" "),_c('p',{staticStyle:{"padding-left":"20px"}},[_vm._v("开头：介绍情况（背景、根据等）")]),_vm._v(" "),_c('p',{staticStyle:{"padding-left":"20px"}},[_vm._v("主体：劝服（问题、危害、意义等）+倡议（对策）")]),_vm._v(" "),_c('p',{staticStyle:{"padding-left":"20px"}},[_vm._v("结尾：呼吁号召")]),_vm._v(" "),_c('p',{staticStyle:{"text-align":"right","padding-right":"20px"}},[_vm._v("发文机关（发文者）")]),_vm._v(" "),_c('p',{staticStyle:{"text-align":"right"}},[_vm._v("××××年××月××日")])])]),_vm._v(" "),_c('dd'),_vm._v(" "),_c('dd',[_vm._v("3.总结类")]),_vm._v(" "),_c('dd',[_vm._v("（1）如何识别总结类公文。总结类公文主要目的是把具体情况告知或汇报给某个或者某些对象。（其中具体情况中的要素要根据给定资料来确定）")]),_vm._v(" "),_c('dd',[_vm._v("（2）典型的总结类公文。汇报（提纲）、讲话稿、发言稿、调查报告、编者按等。")]),_vm._v(" "),_c('dd',[_vm._v("（3）总结类公文常规思路。")]),_vm._v(" "),_c('dd',[_c('div',{staticClass:"border-radius"},[_c('p',{staticStyle:{"text-align":"center"}},[_vm._v("“关于”+事由+“的”+文种")]),_vm._v(" "),_c('p',[_vm._v("主送机关（发文对象）：")]),_vm._v(" "),_c('p',{staticStyle:{"padding-left":"20px"}},[_vm._v("开头：引出主题（背景、根据、目的等）")]),_vm._v(" "),_c('p',{staticStyle:{"padding-left":"20px"}},[_vm._v("主体：总结与主题相关的要素（问题、危害、意义、对策等）结尾+倡议（对策）")]),_vm._v(" "),_c('p',{staticStyle:{"text-align":"right"}},[_vm._v("发文机关（发文者）")]),_vm._v(" "),_c('p',{staticStyle:{"text-align":"right"}},[_vm._v("××××年××月××日")])])]),_vm._v(" "),_c('dd',[_vm._v("（4）真题演练。")]),_vm._v(" "),_c('dd'),_vm._v(" "),_c('dd',[_vm._v("4.评论类")]),_vm._v(" "),_c('dd',[_vm._v("（1）如何识别评论类公文。评论类公文的目的是对某些现象或观点进行评价。")]),_vm._v(" "),_c('dd',[_vm._v("（2）典型的评论类公文。时评、评论文等。")]),_vm._v(" "),_c('dd',[_vm._v("（3）评论类公文常规思路。")]),_vm._v(" "),_c('dd',[_c('div',{staticClass:"border-radius"},[_c('p',{staticStyle:{"text-align":"center"}},[_vm._v("标题")]),_vm._v(" "),_c('p',{staticStyle:{"padding-left":"20px"}},[_vm._v("开头：介绍评论对象（含义、表现等）+表明观点")]),_vm._v(" "),_c('p',{staticStyle:{"padding-left":"20px"}},[_vm._v("主体：评析论证（根据题目倾向确定内容，结合资料丰富完善）")]),_vm._v(" "),_c('p',{staticStyle:{"padding-left":"20px"}},[_vm._v("结尾：对策、升华等")]),_vm._v(" "),_c('p',{staticStyle:{"padding-left":"20px"}},[_vm._v("（备注：评论类公文的标题一般不按照“发文机关+‘关于’+事由+‘的’+文种”的方式来写，标题一般不重视文种的表达，更重 视观点的体现。例如：告别跟风 走向成熟）")])])]),_vm._v(" "),_c('dd',[_vm._v("（4）真题演练。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("aaaaaaaaaaaa")]),_vm._v(" "),_c('p',[_vm._v("aaaaaaaaaaaa")]),_vm._v(" "),_c('p',[_vm._v("aaaaaaaaaaaa")]),_vm._v(" "),_c('p',[_vm._v("aaaaaaaaaaaa")]),_vm._v(" "),_c('p',[_vm._v("aaaaaaaaaaaa")]),_vm._v(" "),_c('p',[_vm._v("aaaaaaaaaaaa")]),_vm._v(" "),_c('p',[_vm._v("aaaaaaaaaaaa")]),_vm._v(" "),_c('p',[_vm._v("aaaaaaaaaaaa")]),_vm._v(" "),_c('p',[_vm._v("aaaaaaaaaaaa")]),_vm._v(" "),_c('p',[_vm._v("aaaaaaaaaaaa")]),_vm._v(" "),_c('p',[_vm._v("aaaaaaaaaaaa")]),_vm._v(" "),_c('p',[_vm._v("aaaaaaaaaaaa")]),_vm._v(" "),_c('p',[_vm._v("aaaaaaaaaaaa")]),_vm._v(" "),_c('p',[_vm._v("aaaaaaaaaaaa")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("一、作文的评分规则")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【例1】2014年国考（副省级）大作文阅卷规则")]),_vm._v(" "),_c('p',[_vm._v("“给定资料”结尾写道：“我们或许应该如作家米兰·昆德拉所言，要‘慢下来’，因为自在有为的生活是急不得的。”请结合你对这句话的思考，联系自己的感受和社会实际，自拟题目，写一篇文章。（40分）")]),_vm._v(" "),_c('p',[_vm._v("要求：（1）自选角度，见解深刻；（2）参考“给定资料”，但不拘泥于“给定资料”；（3）思路清晰，语言流畅；（4）总字数1000～1200字。")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p'),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("评分标准：")]),_vm._v(" "),_c('p',[_vm._v("A类文：33～40分，以36分为基准分，根据作文具体情况上下浮动。")]),_vm._v(" "),_c('p',[_vm._v("（1）对“慢下来”的理解准确、深刻。")]),_vm._v(" "),_c('p',[_vm._v("（2）从给定资料出发，写出自己的切身感受。")]),_vm._v(" "),_c('p',[_vm._v("（3）具有社会实际的例证。")]),_vm._v(" "),_c('p',[_vm._v("（4）思路清晰，语言流畅，文面整洁，字迹工整。")]),_vm._v(" "),_c('p',[_vm._v("B类文：24～32分，以28分为基准分。")]),_vm._v(" "),_c('p',[_vm._v("（1）对“慢下来”的理解基本正确。")]),_vm._v(" "),_c('p',[_vm._v("（2）从给定资料出发，写出自己的一些感受。")]),_vm._v(" "),_c('p',[_vm._v("（3）具有社会实际的例证。")]),_vm._v(" "),_c('p',[_vm._v("（4）思路较为清晰，语言基本流畅，文面整洁")]),_vm._v(" "),_c('p',[_vm._v("C类文：17～23分，以20分为基准分。")]),_vm._v(" "),_c('p',[_vm._v("（1）对“慢下来”的理解不准确，有偏差")]),_vm._v(" "),_c('p',[_vm._v("（2）能够从给定资料出发，但缺乏自己的感受")]),_vm._v(" "),_c('p',[_vm._v("（3）没有社会实际的例证。")]),_vm._v(" "),_c('p',[_vm._v("（4）思路基本清晰，语言基本流畅。")]),_vm._v(" "),_c('p',[_vm._v("D类文：9～16分，以13分为基准分。")]),_vm._v(" "),_c('p',[_vm._v("（1）对“慢下来”的理解偏离正确含义。")]),_vm._v(" "),_c('p',[_vm._v("（2）能够从资料出发，但没有自己的感受。")]),_vm._v(" "),_c('p',[_vm._v("（3）没有社会实际的例证。")]),_vm._v(" "),_c('p',[_vm._v("（4）思路基本清晰，语言基本流畅。")]),_vm._v(" "),_c('p',[_vm._v("E类文：8分以下，以5分为基准分。")]),_vm._v(" "),_c('p',[_vm._v("（1）对“慢下来”的理解严重背离正确含义。")]),_vm._v(" "),_c('p',[_vm._v("（2）内容空泛，缺乏自己的感受。")]),_vm._v(" "),_c('p',[_vm._v("（3）没有社会实际的例证。")]),_vm._v(" "),_c('p',[_vm._v("（4）大量抄袭给定资料。")]),_vm._v(" "),_c('p',[_vm._v("（5）思路混乱，语言不通，文面不整洁。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、作文的主题与观点")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("1.主题与观点")]),_vm._v(" "),_c('p',[_vm._v("文章的主题，即议论对象、写作对象；文章的观点，即在文章写作过程中，希望考生表达出来的、所有的重要信息。在实际考试中，找准主题后，可以从阐释含义，分析原因或意义、危害，提出对策等角度切入展开主题。然后围绕一个特定主题，从关系、问题、原因、意义、危害、对策等角度提出观点，并结合资料内容和社会实际例子展开论述。")]),_vm._v(" "),_c('p',[_vm._v("2.如何确定作文的主题与观点")]),_vm._v(" "),_c('p',[_vm._v("第一步：剖析题干，梳理写作方向。")]),_vm._v(" "),_c('p',[_vm._v("第二步：梳理资料挖掘观点+丰富观点表达。")]),_vm._v(" "),_c('p',[_vm._v("优先阅读：指定资料、小题未涉及资料、权威材料。")]),_vm._v(" "),_c('p',[_vm._v("关照全篇：小题提示（题干、答案）、全部给定资料")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("三、作文的结构")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("何谓文章结构？文章结构是文章的谋篇布局。形式上，一般而言包括标题、开头、过渡、分析论证、结尾等基本构成部分。内容上，有以对策为主的文章结构，也有以分析内涵、原因、意义等为主的文章结构。文章没有固定套路模式，即文无定式，要根据具体文章确定。")]),_vm._v(" "),_c('p',[_vm._v("1.如何写好标题")]),_vm._v(" "),_c('p',[_vm._v("好的标题应该起到画龙点睛的作用。一般而言，标题应该包含文章的主题和观点。常见的取标题的形式有以下几种：")]),_vm._v(" "),_c('p',[_vm._v("（1）常规型标题。")]),_vm._v(" "),_c('p',[_vm._v("【例】")]),_vm._v(" "),_c('p',[_vm._v("把简政放权做实做好（把××做实做好）")]),_vm._v(" "),_c('p',[_vm._v("担起防治污染的主体责任（担起××的主体责任）")]),_vm._v(" "),_c('p',[_vm._v("迈好“科技强国”的坚实一步（迈好××的坚实一步）")]),_vm._v(" "),_c('p',[_vm._v("全民守法是建设法治国家的基础（××是××的基础）")]),_vm._v(" "),_c('p',[_vm._v("（2）比喻式标题。")]),_vm._v(" "),_c('p',[_vm._v("【例】")]),_vm._v(" "),_c('p',[_vm._v("政务公开进入“快车道”")]),_vm._v(" "),_c('p',[_vm._v("绘好科技创新的“工笔画”")]),_vm._v(" "),_c('p',[_vm._v("家教是孩子最好的“营养剂")]),_vm._v(" "),_c('p',[_vm._v("给小微企业戴上“法律护身符”")]),_vm._v(" "),_c('p',[_vm._v("（3）警醒式标题。")]),_vm._v(" "),_c('p',[_vm._v("【例】")]),_vm._v(" "),_c('p',[_vm._v("莫让诗词“热”一时")]),_vm._v(" "),_c('p',[_vm._v("莫让“丧文化”伤了孩子")]),_vm._v(" "),_c('p',[_vm._v("新闻，不要以伤害为代价")]),_vm._v(" "),_c('p',[_vm._v("文化艺术，勿以传统反现代")]),_vm._v(" "),_c('p',[_vm._v("（4）对称式标题。")]),_vm._v(" "),_c('p',[_vm._v("【例】")]),_vm._v(" "),_c('p',[_vm._v("身在急时代    心享慢生活")]),_vm._v(" "),_c('p',[_vm._v("资源共享    文明共担")]),_vm._v(" "),_c('p',[_vm._v("弘扬优良家风    助力中国腾飞")]),_vm._v(" "),_c('p',[_vm._v("勇于自我革命    战胜风险挑战")]),_vm._v(" "),_c('p',[_vm._v("（5）主副式标题。")]),_vm._v(" "),_c('p',[_vm._v("【例】")]),_vm._v(" "),_c('p',[_vm._v("平衡")]),_vm._v(" "),_c('p',{staticStyle:{"padding-left":"40px"}},[_vm._v("——幸福生活需处理好“快”与“慢”的关系")]),_vm._v(" "),_c('p',[_vm._v("破解“曲高和寡”的文艺困境")]),_vm._v(" "),_c('p',{staticStyle:{"padding-left":"40px"}},[_vm._v("——用新媒体让高雅艺术接地气")]),_vm._v(" "),_c('p',[_vm._v("用好“能上能下”的指挥棒")]),_vm._v(" "),_c('p',{staticStyle:{"padding-left":"40px"}},[_vm._v("——完善干部管理制度 让机关不养闲人")]),_vm._v(" "),_c('p',[_vm._v("不患寡而患不均")]),_vm._v(" "),_c('p',{staticStyle:{"padding-left":"40px"}},[_vm._v("——扶贫工作要注重公平")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("2.如何写好开头")]),_vm._v(" "),_c('p',[_vm._v("文章开头的作用是突出主题观点，常见的有以下几种方法：")]),_vm._v(" "),_c('p',[_vm._v("（1）阐释式。")]),_vm._v(" "),_c('p',[_vm._v("（2）评论式。")]),_vm._v(" "),_c('p',[_vm._v("（3）总结式。")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("3.论证的结构与方法")]),_vm._v(" "),_c('p',[_vm._v("（1）论证结构。")]),_vm._v(" "),_c('p',[_vm._v("  - 论证=观点+阐释+举例+引言+总结回扣")]),_vm._v(" "),_c('p',[_vm._v("（2）论证的方法。")]),_vm._v(" "),_c('p',[_vm._v("  - 论证是用论据证明观点的过程。")]),_vm._v(" "),_c('p',[_vm._v("（3）论据的充实。")]),_vm._v(" "),_c('p',[_vm._v("论据是证明观点合理性的证据。主要有：")]),_vm._v(" "),_c('p',[_vm._v("事实论据：社会热点、经典故事、数据、调查报告、新闻报道。")]),_vm._v(" "),_c('p',[_vm._v("理论论据：名人名言、俗语俚语、领导人讲话、理论政策、客观规律、科学原理、论著文章")]),_vm._v(" "),_c('p',[_vm._v("【例】名人名言：")]),_vm._v(" "),_c('p',[_vm._v("经济领域：")]),_vm._v(" "),_c('p',[_vm._v("①治国常富而乱国常贫。是以善为国者，必先富民，然后治之。（《管子·治国》）")]),_vm._v(" "),_c('p',[_vm._v("②中国这么大，必须始终高度重视发展壮大实体经济，不能走单一发展、脱实向虚的路子。（习近平）")]),_vm._v(" "),_c('p',[_vm._v("政治领域：")]),_vm._v(" "),_c('p',[_vm._v("①天下之事，不难于立法，而难于法之必行。（张居正）")]),_vm._v(" "),_c('p',[_vm._v("②勇于自我革命，从严管党治党，是我们党最鲜明的品格。（习近平）")]),_vm._v(" "),_c('p',[_vm._v("文化领域：")]),_vm._v(" "),_c('p',[_vm._v("①人是文化的创造者，也是文化的宗旨。（高尔基）")]),_vm._v(" "),_c('p',[_vm._v("②中华文化积淀着中华民族最深沉的精神追求，是中华民族生生不息、发展壮大的丰厚滋养。（习近平）")]),_vm._v(" "),_c('p',[_vm._v("社会领域：")]),_vm._v(" "),_c('p',[_vm._v("①苟日新，日日新，又日新。（《礼记》）")]),_vm._v(" "),_c('p',[_vm._v("②国以民为本，社稷亦为民而立。（朱熹）")]),_vm._v(" "),_c('p',[_vm._v("③德之不修，学之不讲，闻义不能徙，不善不能改，是吾忧也。（孔子）")]),_vm._v(" "),_c('p',[_vm._v("生态领域：")]),_vm._v(" "),_c('p',[_vm._v("①只有服从大自然,才能战胜大自然。（达尔文）")]),_vm._v(" "),_c('p',[_vm._v("②保护生态环境就是保护生产力，改善生态环境就是发展生产力。（习近平）")]),_vm._v(" "),_c('p',[_vm._v("塑料污染重点问题纳入中央生态环境保护督察，中央发布《关于进一步加强塑料污染治理的意见》，围绕建立形成治理塑料污染的长效机制，意见提出一系列政策措施。")]),_vm._v(" "),_c('p',[_vm._v("甘肃祁连山国家级自然保护区管理局东大山自然保护站举办民俗文化活动助力森林防火宣传。通过此次活动，大力营造“森林防火，人人有责”的浓厚氛围，凝聚“绿水青山就是金山银山”共识，切实提高了周边牧民群众的防火意识和防火主动性，为保护区森林防灭火工作奠定了扎实的群众基础。")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("4.如何结尾")]),_vm._v(" "),_c('p',[_vm._v("（1）总结式。")]),_vm._v(" "),_c('p',[_vm._v("【例】“凡事预则立，不预则废。”只有按照习近平总书记提出的要求，将防范风险的先手与应对和化解风险挑战的高招结合起来，将打好防范和抵御风险的有准备之战与打好化险为夷、转危为机的战略主动战结合起来，我们才能不断提高化解风险能力，从容应对各种挑战，推动中国航船向着民族复兴的目标破浪前行。")]),_vm._v(" "),_c('p',[_vm._v("（2）展望式。")]),_vm._v(" "),_c('p',[_vm._v("【例】我们有理由相信，在党和国家的号召下，在广大人民群众的努力下，在良好社会环境的孕育下，众筹一定能筹出一个更加开放、平等、自由、公平、正义的新世界。")]),_vm._v(" "),_c('p',[_vm._v("（3）呼吁号召式。")]),_vm._v(" "),_c('p',[_vm._v("【例】中华文化是最文明、最平和、最具有包容性的文化之一，让我们一起学习中华文化，践行中华文化，传播中华文化。让我们自信大方、大声地告诉世界：我们来了！")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("四、作文真题示例")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("aaaaaaaaaaaaaaaaaaaaa")]),_vm._v(" "),_c('p',[_vm._v("aaaaaaaaaaaaaaaaaaaaa")]),_vm._v(" "),_c('p',[_vm._v("aaaaaaaaaaaaaaaaaaaaa")]),_vm._v(" "),_c('p',[_vm._v("aaaaaaaaaaaaaaaaaaaaa")]),_vm._v(" "),_c('p',[_vm._v("aaaaaaaaaaaaaaaaaaaaa")]),_vm._v(" "),_c('p',[_vm._v("aaaaaaaaaaaaaaaaaaaaa")]),_vm._v(" "),_c('p',[_vm._v("aaaaaaaaaaaaaaaaaaaaa")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 467 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pdf05_vue__ = __webpack_require__(213);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3f051df8_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pdf05_vue__ = __webpack_require__(470);
function injectStyle (ssrContext) {
  __webpack_require__(468)
  __webpack_require__(469)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3f051df8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pdf05_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3f051df8_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pdf05_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 468 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 469 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 470 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pdf-wrap",attrs:{"id":"pdf05"}},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"chapter-wrap"},[_c('h2',{staticClass:"text-c chapter-t",on:{"click":function($event){return _vm.sectionOpenClose('c1')}}},[_c('span',[_vm._v("第一章 | 数学运算")])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.c1),expression:"sectionOpen.c1"}],staticClass:"chapter-c"},[_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('s1')}}},[_vm._v("第一节  代入排除法")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.s1),expression:"sectionOpen.s1"}],staticClass:"section-c"},[_vm._m(1),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("代入排除法")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d1,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1)]),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('s2')}}},[_vm._v("第二节  倍数特性法")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.s2),expression:"sectionOpen.s2"}],staticClass:"section-c"},[_vm._m(3),_vm._v(" "),_vm._m(4),_vm._v(" "),_vm._m(5),_vm._v(" "),_vm._m(6),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("倍数特性法")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d2,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1)]),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('s3')}}},[_vm._v("第三节  方程法")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.s3),expression:"sectionOpen.s3"}],staticClass:"section-c"},[_vm._m(7),_vm._v(" "),_vm._m(8),_vm._v(" "),_vm._m(9),_vm._v(" "),_vm._m(10),_vm._v(" "),_vm._m(11),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("方程法")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d3,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1)]),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('s4')}}},[_vm._v("第四节 工程问题")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.s4),expression:"sectionOpen.s4"}],staticClass:"section-c"},[_vm._m(12),_vm._v(" "),_vm._m(13),_vm._v(" "),_vm._m(14),_vm._v(" "),_vm._m(15),_vm._v(" "),_vm._m(16),_vm._v(" "),_vm._m(17),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("工程问题：前两种是工程问题的主流考法。")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d4,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1)]),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('s5')}}},[_vm._v("第五节 行程问题")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.s5),expression:"sectionOpen.s5"}],staticClass:"section-c"},[_vm._m(18),_vm._v(" "),_vm._m(19),_vm._v(" "),_vm._m(20),_vm._v(" "),_vm._m(21),_vm._v(" "),_vm._m(22),_vm._v(" "),_vm._m(23),_vm._v(" "),_vm._m(24),_vm._v(" "),_vm._m(25),_vm._v(" "),_vm._m(26),_vm._v(" "),_vm._m(27),_vm._v(" "),_vm._m(28),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("行程问题")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d5,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1)]),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('s6')}}},[_vm._v("第六节 经济利润问题")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.s6),expression:"sectionOpen.s6"}],staticClass:"section-c"},[_vm._m(29),_vm._v(" "),_vm._m(30),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("经济利润问题")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d6,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1)]),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('s7')}}},[_vm._v("第七节 最值问题")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.s7),expression:"sectionOpen.s7"}],staticClass:"section-c"},[_vm._m(31),_vm._v(" "),_vm._m(32),_vm._v(" "),_vm._m(33),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("最值问题")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d7,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1)]),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('s8')}}},[_vm._v("第八节 容斥原理")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.s8),expression:"sectionOpen.s8"}],staticClass:"section-c"},[_vm._m(34),_vm._v(" "),_vm._m(35),_vm._v(" "),_vm._m(36),_vm._v(" "),_vm._m(37),_vm._v(" "),_vm._m(38),_vm._v(" "),_vm._m(39),_vm._v(" "),_vm._m(40),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("容斥原理")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d8,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1)]),_vm._v(" "),_c('div',{staticClass:"section-wrap"},[_c('h3',{staticClass:"text-c section-t",on:{"click":function($event){return _vm.sectionOpenClose('s9')}}},[_vm._v("第九节 排列组合与概率")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.sectionOpen.s9),expression:"sectionOpen.s9"}],staticClass:"section-c"},[_vm._m(41),_vm._v(" "),_vm._m(42),_vm._v(" "),_vm._m(43),_vm._v(" "),_c('el-card',{staticClass:"summary"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("排列组合与概率")])]),_vm._v(" "),_c('el-tree',{attrs:{"data":_vm.summary.d9,"props":_vm.defaultProps,"default-expand-all":""}})],1)],1)])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pdf-cover"},[_c('h1',{staticClass:"text-c pdf-t"},[_c('span',[_vm._v("方法精讲 - 数量关系")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】代入排除：将选项代入题干进行验证，排除错误答案，中学数学大部分分数在填空题和简答题上，选择题仅占 30%，但是公务员考试都是选 择题。")]),_vm._v(" "),_c('p',[_vm._v("1.适用：特定题型。")]),_vm._v(" "),_c('p',[_vm._v("（1）年龄问题：已知年龄大小，如已知张先生比王先生的年龄大几岁/ 小几岁。")]),_vm._v(" "),_c('p',[_vm._v("（2）余数问题：分东西有剩余，总数除以几余几，分完缺几个。")]),_vm._v(" "),_c('p',[_vm._v("（3）不定方程问题：未知数多，方程少，2 个未知数 1 个等量关系（1 个方程）。")]),_vm._v(" "),_c('p',[_vm._v("（4）多位数问题：位数存在变化，列方程不好做，考虑代入选项。")]),_vm._v(" "),_c('p',[_vm._v("2.题量：为 10～15 题，80%的同学考查 10 题，20%的同学考查 15 题，省部级以上考查 15 题，地市级以下考查 10 题，题目重叠。")]),_vm._v(" "),_c('p',[_vm._v("3.选项信息充分：选项是一组数，如条件中给出几个数据，问法为分别/各，代入选项验证更方便，如代入甲，则能得到乙，比只给一个数据的题目更适合使用代入排除法，因为正常解题需要设未知数，代入即将未知数当成已知条件。")]),_vm._v(" "),_c('p',[_vm._v("4.给出例题，大家会知道考查代入排除，但是放在卷子中会不清楚哪些题使用代入排除法，所以更多的掌握为什么使用代入排除法。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】")]),_vm._v(" "),_c('p',[_vm._v("1.尾数法可以看末尾共有几个 0。")]),_vm._v(" "),_c('p',[_vm._v("2.数学中有和差倍比问题，考查加减乘除，主要考查数学基础、列方程、代数据，和差倍比问题考频高，占比为 20%～30%，即 10～15 题中考查 2～4 题，有套路的为题型，如工程问题、行程问题、经济利润问题。")]),_vm._v(" "),_c('p',[_vm._v("aaaaaaaaaaaaaaaaaaaaaaa")]),_vm._v(" "),_c('p',[_vm._v("aaaaaaaaaaaaaaaaaaaaaaa")]),_vm._v(" "),_c('p',[_vm._v("aaaaaaaaaaaaaaaaaaaaaaa")]),_vm._v(" "),_c('p',[_vm._v("aaaaaaaaaaaaaaaaaaaaaaa")]),_vm._v(" "),_c('p',[_vm._v("aaaaaaaaaaaaaaaaaaaaaaa")]),_vm._v(" "),_c('p',[_vm._v("aaaaaaaaaaaaaaaaaaaaaaa")]),_vm._v(" "),_c('p',[_vm._v("aaaaaaaaaaaaaaaaaaaaaaa")]),_vm._v(" "),_c('p',[_vm._v("aaaaaaaaaaaaaaaaaaaaaaa")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】倍数特性：用于排除，使用的方法多。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("一、基础知识")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】基础知识：")]),_vm._v(" "),_c('p',[_vm._v("1.A=B*C，B、C 均为整数，A 既能被 B 整除，又能被 C 整除。求的量能写成 2 个数的乘积，一般思路是计算出 2 个数，这是简答题/填空题的思路，公务员考试是选择题，假设其中一个数为 3，可以根据 3 的倍数可以排除答案，假设答案分别为 A.8、B.9、C.10、D.11，只有 B 项满足 3 的倍数，解题时无需计算出 2 个数，即不需要解完题目，可以用倍数特性解题。")]),_vm._v(" "),_c('p',[_vm._v("2.适用于：")]),_vm._v(" "),_c('p',[_vm._v("（1）平均分配物品：老师把东西平均分给小朋友，每个小朋友 7 个正好分完，即东西的个数是 7 的倍数，可能只有 1～2 个选项能被 7 整除，剩二代一，假设选项都是 7 的倍数，则可以考虑其他方法解题。若能直接根据 7 的倍数选出答案，则可以秒杀。")]),_vm._v(" "),_c('p',[_vm._v("（2）平均数：每人分 7 个/平均分 7 个，总个数是 7 的倍数，平均的考法较狭窄。")]),_vm._v(" "),_c('p',[_vm._v("（3）三量关系，形如 A=B*C；总量=效率*时间，工程问题求总量，总量能被效率、时间整除；路程=速度*时间，S=V*T，假设走了 3 小时，路程能被 3 小时整除；总钱数=单价*个数，假设卖了 9 个，则总价是 9 的倍数，选项 80 不是 9 的倍数，则排除。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】整除判定：不适用于做题，只是辅助计算，假设答案是 18 的倍\n                                    数，无需用所有选项除以 18，可以采用口诀、因式分解、拆分。")]),_vm._v(" "),_c('p',[_vm._v("1.口诀：优先考虑。")]),_vm._v(" "),_c('p',[_vm._v("（1）3/9 看各位数字之和，这个点小学奥数学习过，54321 能否被 3 整除，\n                                    54321 各位数字之和为 15，15 是 3 的倍数，则 54321 能被 3 整除，15 不是 9 的\n                                    倍数，则 54321 不能被 9 整除。")]),_vm._v(" "),_c('p',[_vm._v("（2）5 看末位，一个数能否被 5 整除，千、百、十都是 5 的倍数，故只看\n                                    最后一位能否被 5 整除，即看末位是否为 5 或 0。")]),_vm._v(" "),_c('p',[_vm._v("（3）4 看末两位，四位数的前两位为百位和千位，100/4，1000/4 均能整除，\n                                    故无需看千位和百位，只看十位和个位，即末两位，如 1986 年、2014 年能否被\n                                    4 整除，86/4、14/4 均有余数，故 1986 年、2014 年不是 4 的倍数，奥运会的年份均是 4 的倍数（前后 50 年）。")]),_vm._v(" "),_c('p',[_vm._v("（4）11、13、7 属于 10 年考查一回的数字，不在方法精讲课中讲解，方法\n                                    精讲课中讲解高频考点。")]),_vm._v(" "),_c('p',[_vm._v("2.行测考试中 80%的内容都是小学数学，比高中数学简单。")]),_vm._v(" "),_c('p',[_vm._v("3.因式分解：数字不是高频考点。")]),_vm._v(" "),_c('p',[_vm._v("（1）18 是 9 的 2 倍，18=9*2，一个数既能被 9 整除，又能被 2 整除，则该\n                                    数能被 18 整除，如 800、1000、1100 都不是 9 的倍数。因式分解后两个数需要\n                                    互质，即没有公约数，9、2 除了 1，没有其他公约数，所以 9、2 互质。")]),_vm._v(" "),_c('p',[_vm._v("（2）假设 18=3*6，一个数能被 3 和 6 整除，但是不一定能被 18 整除，如\n                                    12 既能被 3 整除，又能被 6 整除，不能被 18 整除，因为 3、6 有公约数 3，能被\n                                    6 整除则一定能被 3 整除。")]),_vm._v(" "),_c('p',[_vm._v("（3）12=3*4，能被 3 和 4 整除，不能分成 2 和 6，因为 6 已经是 2 的倍数。")]),_vm._v(" "),_c('p',[_vm._v("（4）45=5*9，不能分解成 3*15，15 已经是 3 的倍数。")]),_vm._v(" "),_c('p',[_vm._v("（5）因式分解一般针对较大的数字，16 没有分解方法，不能分解成 4*4 或\n                                    2*8，直接看即可，近 5 年没有考查 16 的倍数，考查倍数出题人会设计好数字。")]),_vm._v(" "),_c('p',[_vm._v("4.拆分法：7、13 本身无法分解，即质数。")]),_vm._v(" "),_c('p',[_vm._v("（1）判断 X 能否被 7 整除，X/7=7 的倍数+零头，看零头能否被 7 整除。如\n                                    国考考查等差数列的和，共 7 项，则和为 7 的倍数，选项分别为 A.602、B.623、\n                                    C.628、D.631，每个选项除以 7 需要除好几次，A 项 602=630-28，B 项 623=630-7，\n                                    C 项 628=630-2，D 项 631=630+1，只有 A 项 602、B 项 623 是 7 的倍数。")]),_vm._v(" "),_c('p',[_vm._v("（2）找 13 的倍数，排除不是 13 倍数的选项。选项分别为 A.495、B.518、\n                                    C.546、D.558，无需每个列算式除以 13，520 是 13 的倍数，选项分别为 A 项=520-25、\n                                    B 项=520-2、C 项=520+26、D 项=520+28，只有 26 能被 13 整除，C 项当选。")]),_vm._v(" "),_c('p',[_vm._v("（3）7、13 等数字估算方法有口诀，但是复杂，不常用容易忘记，考虑拆\n                                    分即可。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、余数型")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】余数型：不是直接整除。")]),_vm._v(" "),_c('p',[_vm._v("1.一堆苹果分给每人 10 个，剩余 3 个。")]),_vm._v(" "),_c('p',[_vm._v("2.一堆苹果分给每人 10 个，还缺 3 个。")]),_vm._v(" "),_c('p',[_vm._v("3.多退少补，多余 3 个即退 3 个，此时正好每人 10 个，总数退 3 是 10 的\n                                    倍数。缺 3 个即补 3 个，此时正好每人 10 个，总数补 3 是 10 的倍数。如 83-3\n                                    是 10 的倍数，77+3 是 10 的倍数。这种方法能够节省找未知数列方程解方程\n                                    的时间，快速解决选择题。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】")]),_vm._v(" "),_c('p',[_vm._v("1.等差数列求和：（首项+尾项）/2*项数。")]),_vm._v(" "),_c('p',[_vm._v("2.该类题目最早一次在 2007 年国考中出现过，特点是所有的数的和为定值，\n                                    定值分为两部分，一部分是要求的，另一部分内部有比例关系，通过设未知数将\n                                    比例关系表示出来，要求的数设为 y，则可得 ax+y=和，所以和-y=ax=a 的倍数。")]),_vm._v(" "),_c('p',[_vm._v("3.例：假如有 10 个人体重之和为 750kg，其中分成 3 个组，第一组总体重\n                                    是第二组总体重的 2 倍，求第三组总体重可能是多少？A.226、B.232、C.237、\n                                    D.244。")]),_vm._v(" "),_c('p',[_vm._v("答：正确答案是选 3 的倍数。总和分为多个部分，一个部分是要求的（第三\n                                    组总体重），另一部分是给出了比例关系，即第一组的总体重是第二组总体重的\n                                    2 倍，假设第二组体重为 x，第三组体重为 y，则第一组体重为 2x，列式：750=3x+y，\n                                    750-y=3x 即 3 的倍数，750 也是 3 的倍数，所以 y 是 3 的倍数，只有 C 项符合。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("三、比例型")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】比例型：出题老师自由发挥的空间更大，既可以从分子上想，又可以从分母上想，还可以从和差上想。")]),_vm._v(" "),_c('p',[_vm._v("1.已知某班：男/女=3/5，问：")]),_vm._v(" "),_c('p',[_vm._v("（1）男生人数是 3 的倍数。")]),_vm._v(" "),_c('p',[_vm._v("（2）女生人数是 5 的倍数。")]),_vm._v(" "),_c('p',[_vm._v("（3）全班人数是 8 的倍数。")]),_vm._v(" "),_c('p',[_vm._v("（4）男女生人数差是 2 的倍数。")]),_vm._v(" "),_c('p',[_vm._v("（5）假设分数约掉了 x，即男/女=3x/5x，男生人数是 3x 即 3 的倍数，女\n                                    生人数是 5x 即 5 的倍数，全班人数是 3x+5x=8x 即 8 的倍数，男女生人数差是\n                                    5x-3x=2x 即 2 的倍数。")]),_vm._v(" "),_c('p',[_vm._v("2.A/B=m/n（m、n 互质，没有公约数）。m/n 是最简整数比，如男/女\n                                    =3/5=30000/50000，但真实人数不会有几万人，不能说男生是 30000 的倍数，女\n                                    生是 50000 的倍数，所以要化成最简整数比分析。如果不是最简整数比，做出来\n                                    的答案就有问题了。")]),_vm._v(" "),_c('p',[_vm._v("（1）A 是 m 的倍数。")]),_vm._v(" "),_c('p',[_vm._v("（2）B 是 n 的倍数。")]),_vm._v(" "),_c('p',[_vm._v("（3）A+B 是 m+n 的倍数。")]),_vm._v(" "),_c('p',[_vm._v("（4）A-B 是 m-n 的倍数。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】比例的常见形式：")]),_vm._v(" "),_c('p',[_vm._v("1.男生是女生的 3/5（分数）。")]),_vm._v(" "),_c('p',[_vm._v("2.男生与女生之比为 3：5（比例）=3/5。")]),_vm._v(" "),_c('p',[_vm._v("3.男生是女生的 60%（百分数）=60/100=3/5。")]),_vm._v(" "),_c('p',[_vm._v("4.男生是女生的 0.6 倍（倍数）=0.6/1=6/10=3/5。")]),_vm._v(" "),_c('p',[_vm._v("5.看到比例、百分数、倍数时可用比例的方法。")]),_vm._v(" "),_c('p',[_vm._v("6.公倍数的算法：5、6、8 没有公共的约数，提出 6、8 的公因子 2，剩余 5、3、4，此时完全互质，全部相乘：2*5*3*4=120。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】普通方程→未知数个数=方程个数，方程可解，是定方程；未知\n                            数个数＞方程个数（最典型的是两个未知数、一个方程的情况）→不定方程，利\n                            用数字特性快速排除。设未知数技巧：")]),_vm._v(" "),_c('p',[_vm._v("1.设小不设大（减少分数计算）。如：甲=3 乙，设乙为 x，甲为 3x。甲比乙多 5 个，设乙为 x，甲为 x+5，不建议设成减法形式（甲为 x，乙为 x-5），尽量\n                            避免分数计算、减法计算")]),_vm._v(" "),_c('p',[_vm._v("2.设中间量（方便列式）。题目中量比较多，设 3 或 4 个未知数，需要列出\n                            3 或 4 个方程，甲乙有关，乙丙有关，乙丁有关，设乙为 x，据此表示出其他量。")]),_vm._v(" "),_c('p',[_vm._v("3.问谁设谁（避免陷阱）：不能用前面两种时使用。")]),_vm._v(" "),_c('p',[_vm._v("4.例如：甲：乙=3：2，为避免小数、分数，设甲为 3x，乙为 2x。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】不定方程：ax+by=M。")]),_vm._v(" "),_c('p',[_vm._v("1.方法：分析奇偶、倍数、尾数等数字特性，结合选项排除。")]),_vm._v(" "),_c('p',[_vm._v("2.奇偶：")]),_vm._v(" "),_c('p',[_vm._v("（1）ax+by=M，两个未知数，一个方程，是不定方程，当系数 a、b 恰好一奇一偶时，考虑奇偶特性。偶数倍 x→一定是偶数，奇数倍 x→奇偶不定。")]),_vm._v(" "),_c('p',[_vm._v("（2）引例：3x+4y=25，x=？（x、y 均为正整数）")]),_vm._v(" "),_c('p',[_vm._v("A.2    B.3    C.4    D.5")]),_vm._v(" "),_c('p',[_vm._v("答：系数 3、4 一奇一偶，考虑奇偶特性，25 是奇数，4y 是偶数，奇数+偶\n                            数=奇数，3x 是奇数，则 x 只能为奇数，排除 A、C 项；剩二代一，代入 B 项：x\n                            =3，解得：y=4，x、y 都是正整数，满足所有条件，B 项当选。")]),_vm._v(" "),_c('p',[_vm._v("3.倍数：")]),_vm._v(" "),_c('p',[_vm._v("（1）ax+by=M，当 a 或 b 与 M 有公因子时（公因子=公约数），考虑倍数特性。")]),_vm._v(" "),_c('p',[_vm._v("（2）例：7x+3y=60，x+y 最大为多少？（x、y 均为正整数）")]),_vm._v(" "),_c('p',[_vm._v("A.12    B.13    C.16    D.18")]),_vm._v(" "),_c('p',[_vm._v("答：7 是质数，60、3 有公因子 3，则 7x 也有公因子 3，移项：7x=60-3y=3\n                            *（20-y）=3*整数，7x 一定是 3 的倍数，则 x 是 3 的倍数，包括 3、6、9……，\n                            x=3 时，y=13，问最大，此时加和为 16，排除比它小的 A、B 项；x=6 时，y=6，\n                            加和＜C 项；x=9 时，y 为负，加和更小，C 项最大。")]),_vm._v(" "),_c('p',[_vm._v("4.尾数：")]),_vm._v(" "),_c('p',[_vm._v("（1）ax+by=M，当 a 或 b 尾数是 0 或 5 时，考虑尾数特性。")]),_vm._v(" "),_c('p',[_vm._v("（2）例：37x+20y=271，x=？（x、y 均为正整数）")]),_vm._v(" "),_c('p',[_vm._v("A.1    B.3    C.2    D.4")]),_vm._v(" "),_c('p',[_vm._v("答：20y 的尾数为 0，271 的尾数为 1，则 37x 的尾数为 1，3*7=21，可知 x\n                            的尾数为 3，对应 B 项。尾数可能有多种情况，不一定可以得到唯一答案，如：\n                            4x=×2，x 的尾数可以是 3 或 8。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】不定方程组：通常是 3 个未知数、2 个方程。")]),_vm._v(" "),_c('p',[_vm._v("1.第一类：未知数一定是整数。`a_1X＋b_1Y＋c_1Z＝M`，`a_2X＋b_2Y＋c_2Z＝N`。")]),_vm._v(" "),_c('p',[_vm._v("2.方法：先消元转化为不定方程，再按不定方程求解。")]),_vm._v(" "),_c('p',[_vm._v("3.例：`3X＋b_1Y＋c_1Z＝M①`，`6X＋b_2Y＋c_2Z＝N②`。②-①*2 消去 X，之后按照不定方程求解。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】不定方程组：")]),_vm._v(" "),_c('p',[_vm._v("1.第二类：未知数不一定是整数，比如：时间、钱数可能取小数。")]),_vm._v(" "),_c('p',[_vm._v("2.方法：")]),_vm._v(" "),_c('p',[_vm._v("（1）特值法（一般赋零）：对于未知数不一定是整数的不定方程组，可以赋\n                            其中 1 个未知数为零，进而快速计算出其他未知数。")]),_vm._v(" "),_c('p',[_vm._v("（2）配系数。中学做法，①*？+②*？→所求，无需掌握。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】不定方程组：")]),_vm._v(" "),_c('p',[_vm._v("1.第一类：未知数一定是整数。")]),_vm._v(" "),_c('p',[_vm._v("2.方法：先消元转化为不定方程，再按不定方程求解。")]),_vm._v(" "),_c('p',[_vm._v("3.第二类：未知数不一定是整数（时间、钱数）。")]),_vm._v(" "),_c('p',[_vm._v("4.特值法（一般赋零）：")]),_vm._v(" "),_c('p',[_vm._v("（1）对于未知数不一定是整数的不定方程组，可以赋其中 1 个未知数为零，\n                            进而快速计算出其他未知数。")]),_vm._v(" "),_c('p',[_vm._v("（2）配系数：中学做法，无需掌握")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】工程问题：")]),_vm._v(" "),_c('p',[_vm._v("1.三量关系：总量=效率*时间。")]),_vm._v(" "),_c('p',[_vm._v("（1）总量：工作到底做多少，例如：上课 180 分钟、做多少道题，都是工\n                            作量。")]),_vm._v(" "),_c('p',[_vm._v("（2）效率：单位时间内做的工作量，其中单位时间要看题干条件，有时为\n                            一天的效率、有时为 1 小时的效率、有时为 1 分钟的效率。")]),_vm._v(" "),_c('p',[_vm._v("（3）时间：总量/效率，例如：唐宋老师需要搬砖 1000 块，每小时搬砖 200\n                            块，则 5 小时搬完。")]),_vm._v(" "),_c('p',[_vm._v("（4）已知其中的两个量，一定可以求出第三个量。绝大多数的工程问题（90%）\n                            都是问时间，此时只要找到总量和效率，效率=总量/时间。")]),_vm._v(" "),_c('p',[_vm._v("2.考查题型：一共分为四种题型，前三种为主要的题型，第四种为特殊的考\n                            法。")]),_vm._v(" "),_c('p',[_vm._v("（1）给完工时间型：工程问题的基础，比较常见，难度不高，比较简单。")]),_vm._v(" "),_c('p',[_vm._v("  - ①赋总量（完工时间的公倍数）。")]),_vm._v(" "),_c('p',[_vm._v("  - ②算效率：效率＝总量/时间。")]),_vm._v(" "),_c('p',[_vm._v("  - ③根据工作过程列方程或式子。")]),_vm._v(" "),_c('p',[_vm._v("  - ④引例.要折叠一批纸飞机，若甲单独折叠要半个小时完成，乙单独折叠需\n                            要 45 分钟完成。若两人一起折，需要多少分钟完成？")]),_vm._v(" "),_c('p',[_vm._v("A.10    B.15    C.16    D.18")]),_vm._v(" "),_c('p',[_vm._v("【解析】引例.题干没有告诉纸飞机的总量，一般 90%的工程问题不会告诉\n                            工程总量，此时可以赋值（假设一个工作量）。题干没有纸飞机的总量，题干也\n                            没有问纸飞机的总量，说明和纸飞机的总量和答案没有关系，如果和答案有关系，\n                            但是题目没给，此时该题就无法做出来，是一道错题。（1）为了好算，尽量假设\n                            总量为完工时间的公倍数，半个小时为 30 分钟，30 和 45 的公倍数为 90，假设\n                            总量为 90 个；（2）根据总量计算效率，P 甲=90/3=3 个/分钟，P 乙=90/45=2 个/\n                            分钟；（3）根据工作过程列式子，90 个/[（3+2）个/分钟]=18 分钟，对应 D 项。\n                            【选 D】")]),_vm._v(" "),_c('p',[_vm._v("（2）给效率比例型。")]),_vm._v(" "),_c('p',[_vm._v("（3）给具体单位型。")]),_vm._v(" "),_c('p',[_vm._v("（4）同时开始同时结束。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【例 2】（2019 河北）甲、乙两队单独完成某项工程分别需要 10 天、17 天。\n                            甲队与乙队按天轮流做这项工程，甲队先做，最后是哪队第几天完工？")]),_vm._v(" "),_c('p',[_vm._v("A.甲队第 11 天    B.甲队第 13 天    C.乙队第 12 天    D.乙队第 14 天")]),_vm._v(" "),_c('p',[_vm._v("【解析】例 2.该题比较特殊，国考和联考都考过轮流的问题，但是近五年\n                            每怎么考，该题（2019 年河北）考到了轮流。（1）已知“甲、乙两队单独完成\n                            某项工程分别需要 10 天、17 天”，10 和 17 之间没有公约数，所以设工程总量为\n                            10*17=170；（2）算效率，P 甲=17，P 乙=10；（3）难点在于工作过程比较特殊，已\n                            知“甲队与乙队按天轮流做这项工程”，第一天只有甲做，第二天只有乙做，一\n                            个循环中，第一天甲干，第二天乙干，看有几个循环，170/（17+10）=170/27=6……\n                            8。这里的 6 为循环的个数，余数 8 和被除数是一个概念，总量为 170 份工作，\n                            则剩下 8 份工作。前面 6 个循环均为甲乙、甲乙……，剩下的 8 份开启第 7 个循\n                            环，每个循环开始甲开始做，所以最后的 8 份工作由甲做完，排除 C、D 项；每\n                            个循环用时 2 天，所求=2*6 天+甲做的天数=12 天+1 天=13 天，所以最后甲队第\n                            13 天完工，对应 B 项。【选 B】")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("【注意】")]),_vm._v(" "),_c('p',[_vm._v("1.千万不要写为 170/27=6`8/27`个循环，循环是不均匀的，不是每一分每一秒都\n                            是甲、乙平摊的。`8/27`意为平均分成 27 份，取了其中的 8 份。这样做题是不对的，\n                            相当于把循环看成了均匀的概念，一个循环中，可能前面快一点后面慢一点，或者后面快一点前面慢一点。时间并不一定可以写成分数。循环只有一种写法：总\n                            量/循环的量=若干个循环……余数。这样思考：整数的循环对应整数的天数，余\n                            下的部分看是谁先干，该题中是甲先干，甲的效率为 17，1 天可以干完 8 份，所\n                            以用时 1 天。")]),_vm._v(" "),_c('p',[_vm._v("2.如果余数为 18，甲的效率只有 17，甲 1 天干不完，还需要乙再做 1 天，\n                            相当于甲再第 13 天做了 17 份，剩下的 1 份，需要乙在第 14 天才能做完。此时\n                            选择 D 项。")]),_vm._v(" "),_c('p',[_vm._v("3.给完工时间型，做法比较固定，一般给出两个人或者三个人单独的完工时\n                            间，根据完工时间赋值工作总量，然后计算出每个人的效率，最后分析工作过程。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】给效率比例型：")]),_vm._v(" "),_c('p',[_vm._v("1.赋效率（满足比例即可）。")]),_vm._v(" "),_c('p',[_vm._v("2.算总量：总量=效率*时间。")]),_vm._v(" "),_c('p',[_vm._v("3.根据工作过程列方程或式子。")]),_vm._v(" "),_c('p',[_vm._v("4.引例.甲和乙的效率比为 2：3，甲、乙合作完成一项工程需要 10 天，如\n                            果甲单独做这项工程需要多少天？")]),_vm._v(" "),_c('p',[_vm._v("A.15    B.20    C.25    D.30")]),_vm._v(" "),_c('p',[_vm._v("【解析】引例.发现题干只有 1 个时间，两个数以上才能求公倍数，没有告\n                            诉效率的具体值，只给了比例，（1）根据“甲和乙的效率比为 2：3”，可以赋值\n                            效率，甲的效率为 2，乙的效率为 3；（2）已知“甲、乙合作完成一项工程需要\n                            10 天”，工作总量=（2+3）*10 天=50；（3）分析工作过程，问“甲单独做这项工\n                            程需要多少天”，50/2=25，对应 C 项。【选 C】")]),_vm._v(" "),_c('p',[_vm._v("5.给效率比例的几种不同形式：")]),_vm._v(" "),_c('p',[_vm._v("（1）直接型：甲的效率是乙的 1.5 倍。可以写甲的效率为 1，乙的效率为\n                            1.5，但是建议写成整数，甲/乙=1.5=3/2，则甲的效率为 3，乙的效率为 2。")]),_vm._v(" "),_c('p',[_vm._v("（2）间接型：甲 3 天的工作量相当于乙 4 天的工作量。题干没有出现“效\n                            率”这个词，只说“工作量……”。“相当于”就是等于的意思。`P_甲*3 天=P_乙*4天`，\n                            乘积一定的情况下，时间越小，效率越高，时间和效率成反比，`P_甲：P_乙=4：3`。此时可以设甲的效率为 4，乙的效率为 3。还不熟悉的时候，可以一步一步分\n                            析，题目做多了以后，量一定，时间和效率成反比，直接写 `P_甲：P_乙=4：3`。")]),_vm._v(" "),_c('p',[_vm._v("（3）特殊型：某农场有 36 台收割机，或者 36 名工人。有若干名工人/机器，\n                            其中“若干”为具体的数量。每个工人/每台机器的效率没有区别（实际情况是\n                            有区别的，但是题目中默然效率是一样的）。一般为了方便，一个人的效率为 1，\n                            36 个人的效率为 36；每台机器的效率为 1，36 台机器的效率为 36。")]),_vm._v(" "),_c('p',[_vm._v("（4）考查最多的为间接型。直接型就是按照比例关系直接设效率；间接型\n                            一般是总量相当，时间和效率反过来；特殊型一般设每个人/每台机器效率为 1。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】")]),_vm._v(" "),_c('p',[_vm._v("1.例如：放寒假，本来可以正常写完作业，但是在写作业的过程中遇到了春\n                            节，有 5 天的时间无法写作业，最后 8 天的时候拼命赶作业，如果按期把作业交\n                            上去，每天需要写多少作业，最后 8 天要写的作业：正常 8 天要写的作业+5 天\n                            没写的作业=13 天的作业。")]),_vm._v(" "),_c('p',[_vm._v("2.该题也是 2018 年国考的题目，辽宁省考只不过是改了一下数字，做题思\n                            路和国考题是一模一样的。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】给具体单位型：例如：搬 1000 块砖，此时已知工作量，但是例\n                            1～例 5 没有出现过具体的工作量（具体单位），前面用赋值的方法把工作量假设\n                            出来，然后做题。出现总工作量或者 200 块砖/小时，出现具体工作量或者具体\n                            效率，此时可以设未知数列方程。为什么还要设未知数，因为题干不可能把所有\n                            的数值均告诉我们，例如：已知甲每小时比乙多搬砖 200 块，甲、乙的效率未知，\n                            但是已知甲、乙效率的差，此时设乙为 x，甲为 200+x。或者一直甲效率和乙效\n                            率的和为 200，则设一个为 x，另一个为 200-x。")]),_vm._v(" "),_c('p',[_vm._v("1.设未知数（设小不设大或设中间量）。")]),_vm._v(" "),_c('p',[_vm._v("2.找等量关系列方程。等量关系只有一种：量=效率*时间。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】同时开始同时结束：")]),_vm._v(" "),_c('p',[_vm._v("1.典型情况：三个人做两项工作，要求同时开工同时结束。例如：第一项工\n                            作甲负责，第二项安排乙来负责，丙一会帮甲干，一会帮乙干，要求两项工作同\n                            时开工同时结束。")]),_vm._v(" "),_c('p',[_vm._v("2.核心思路：所有的人全程没有休息，工作时间＝两项工作的工作量之和/\n                            三个人的效率之和。简单记忆：工作时间=工作量之和/效率之和。例如：A 项工\n                            作为 100 块砖，B 项工作为 200 块砖，安排甲、乙、丙三人去做，甲每分钟干 3\n                            块，乙每分钟干 4 块，丙每分钟干 5 块，甲负责干 A 项工作，乙负责干 B 项工作，\n                            丙是负责帮忙的，整个过程中，中途不休息，三人的 t 一样，`P_甲*t+P_乙*t+P_丙*t=A 量+B 量`，3t+4t+5t=100+200=300，t=300/（3+4=5）=25 分钟。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】行程问题：")]),_vm._v(" "),_c('p',[_vm._v("1.三量关系：路程=速度*时间。")]),_vm._v(" "),_c('p',[_vm._v("2.考查题型：")]),_vm._v(" "),_c('p',[_vm._v("（1）基础行程：基本公式考查：路程=速度*时间（S=vt）。")]),_vm._v(" "),_c('p',[_vm._v("（2）相对行程，非常重要，比如相遇、追及、船在水中运动，多次相遇追\n                            及（两个主体存在相对运动）。")]),_vm._v(" "),_c('p',[_vm._v("（3）比例行程，从正比、反比的角度考虑。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】隧道过桥：火车经过隧道/桥，火车不能看作一个点过桥。考查方式：")]),_vm._v(" "),_c('p',[_vm._v("1.完全过桥：从车头上桥开始，到车尾下桥结束。分析一个不能看作点的物\n                            体，可以从同一个部位分析，比如看车头到车头（或者看车尾到车尾），运动路\n                            程包括桥长和车自身的长度。公式：`桥长+车长=v_车*t_(过桥)`。")]),_vm._v(" "),_c('p',[_vm._v("2.整列火车都在桥上：从整个火车上桥，到车头要离开桥时结束。整个路程\n                            比桥长少了一个车身长度，即运动路径为桥长-车长。公式：`桥长-车长=车*t_(在桥)`")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】基础行程：")]),_vm._v(" "),_c('p',[_vm._v("1.基本公式考查：路程=速度*时间")]),_vm._v(" "),_c('p',[_vm._v("2.平均速度=总路程/总时间。")]),_vm._v(" "),_c('p',[_vm._v("（1）比如 A→B，去的速度是 100，回来速度是 60，则来回的平均速度不是\n                            （100+60）/2=80。考试遇到，可以把 80 当作是一个错误答案排除。")]),_vm._v(" "),_c('p',[_vm._v("（2）比如来会的路程都是 300，去的时间是 3 分钟，回来的时间是 5 分钟，\n                            整个 8 分钟的运动中，只有 3 分钟（不到一半的时间）是 100 的速度，超过一半\n                            的时间是 60 为速度，只有来和回都是 4 分钟的时候，才能用相加除以 2 计算平\n                            均值，因此答案更靠近 60。")]),_vm._v(" "),_c('p',[_vm._v("（3）平均速度=（300+300）/（3+5）=75 米/分钟。")]),_vm._v(" "),_c('p',[_vm._v("3.等距离平均速度公式：`\\overline(v)=2v_1v_2/(v_1+v_2)`。")]),_vm._v(" "),_c('p',[_vm._v("（1）`\\bar(v)=2v_1v_2/(v_1+v_2)`，可以记作：2 积/和。比如上述例子，可以直接用\n                            2*60*100/（60+100）=75。推导：`（S_去+S_回）÷（S/v_1+S/v_2）`，化简可得`\\bar(v)=2v_1v_2/(v_1+v_2)`。")]),_vm._v(" "),_c('p',[_vm._v("（2）注意：只有 S 相同才能用，如果去和回的路程不同则不能用，比如去\n                            是走直线去，回是走曲线回，则不能套用此公式。")]),_vm._v(" "),_c('p',[_vm._v("（3）常适用于：直线往返、上下坡往返。上下坡往返，是指 A→B，有上坡、有下坡，需要“翻山越岭”，这种情况下的往返，可以直接用公式。如果是去上\n                            坡，回来变成下坡，依旧是直线距离，则属于直线往返。")]),_vm._v(" "),_c('p',[_vm._v("①去的速度为 `v_上`，返回速度为 `v_下`，每一段都是来回各走一遍，每一段可以\n                            用平均速度的公式计算。比如每段路程的平均速度都是 75，则全程的平均速度\n                            就是 75。")]),_vm._v(" "),_c('p',[_vm._v("②不论上下坡几次，都可以套用此公式。每段的坡距离不一定相同。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】相对行程：")]),_vm._v(" "),_c('p',[_vm._v("1.直线相遇：两人方向相对，同时相向而行。")]),_vm._v(" "),_c('p',[_vm._v("2.公式：`S_和=v_和*t_遇`。`S_和`：就是两人走的路程之和。")]),_vm._v(" "),_c('p',[_vm._v("3.两人在直线两点出发，左边速度为 v1，右边速度为 `v_2`，经过相同的时间 t\n                            到达相遇点，可以得到 `v_1t+v_2t=S_和`→`(v_1+v_2)t=S_和`→`v_和 t_遇=S_和`。")]),_vm._v(" "),_c('p',[_vm._v("4.注意：这种题型考虑的是路程，不是物理概念中的“位移”")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】直线追及：同时同向而行。")]),_vm._v(" "),_c('p',[_vm._v("1.公式：`S_差=v_差*t_追`。`S_差`：追及刚开始时两人相差的距离。")]),_vm._v(" "),_c('p',[_vm._v("2.同一个方向，才能是追及。开始起点，两人要有一个距离差，如果在一起\n                            出发，就不能说“追及”。因此开始要有距离（虚线表示）。后面的人速度一定比\n                            前面的人速度大，才能追上，因此前面人速度为 `v_小`，后面人速度为 `v_大`，蓝色路\n                            程为 `v_小 t_追`，红色路程为 `v_大 t_追`，红色路程比蓝色路程多出部分就是开始两人的\n                            路程差，故 `S_差=v_大 t-v_小 t`→`S_差=v_差*t_追`。")]),_vm._v(" "),_c('p',[_vm._v("3.考试如果计算追及时间，只要找两人开始的路程差和两人的速度差。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】")]),_vm._v(" "),_c('p',[_vm._v("1.赋值多少不影响计算，赋值其他也可以做。")]),_vm._v(" "),_c('p',[_vm._v("2.第一个追及过程，`S_间`是 12 的倍数，第二个追及过程，`S_间`是 18 的倍数，\n                            路程既是 12 的倍数，又是 18 的倍数，故本题赋值间距为 36")]),_vm._v(" "),_c('p',[_vm._v("3.本题有的同学担心，跑了 12 分钟之后，三人的位置关系会不会改变，如果有这种想法，题目 10 分钟可能做不完。行程问题，最关键的是“回到起点”\n                            考虑。因此行程问题的思维，是考虑“追及刚开始时两人相差的距离”。")]),_vm._v(" "),_c('p',[_vm._v("4.出现“再过多少分钟”的描述，很大概率会有陷阱，可以利用陷阱以坑治\n                            坑。许多同学会忘记减掉 18 分钟，因此可以观察选项是否有差 18 分钟的，D 项\n                            -18=C 项，则 D 项是从开始到追及的时间，C 项是再过的时间，故 C 项为所求。\n                            考试能做要以做题为主，不能做再蒙。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】环形问题：大部分都是同点出发，不同点是少数。")]),_vm._v(" "),_c('p',[_vm._v("1.环形相遇（同点反向出发）。")]),_vm._v(" "),_c('p',[_vm._v("（1）公式：`S_和=v_和*t_遇`。")]),_vm._v(" "),_c('p',[_vm._v("（2）相遇 1 次，`S_和=1圈`；相遇 N 次，`S_和=N 圈`。")]),_vm._v(" "),_c('p',[_vm._v("  - ①比如第一次相遇，左边走 `v_1t`，右边走 `v_2t`，合起来是全程，即 `v_1t+v_2t=1圈`→`v_和 t=1 圈`")]),_vm._v(" "),_c('p',[_vm._v("  - ②如果是相遇 n 次，路程和为 n 圈")]),_vm._v(" "),_c('p',[_vm._v("（3）本质：每一次相遇到下一次相遇期间，两人走的路程和是一圈。第一\n                            次相遇，记作①；之后两人继续走，第二次相遇，记作②；第一次相遇到第二次\n                            相遇过程中，两人的路程又构成一个封闭的圆。因此每次相遇，到下一次相遇，\n                            两人的路程和都是 1 圈。")]),_vm._v(" "),_c('p',[_vm._v("（4）数学中的环形，不一定是圆形，只要是首尾相连（圆形、椭圆形、长\n                            方形等），就是环形，封闭图形就是环形。")]),_vm._v(" "),_c('p',[_vm._v("2.环形追及（同点同向出发）。")]),_vm._v(" "),_c('p',[_vm._v("（1）公式：`S_差=v_差*t_追`。")]),_vm._v(" "),_c('p',[_vm._v("（2）追上 1 次，`S_差=1 圈`；追上 N 次，`S_差=N 圈`。")]),_vm._v(" "),_c('p',[_vm._v("  - ①比如中学的体育课，A 在前面跑，B 要从背后追上 A，是因为 B 先跑完一\n                            圈，B 后面跑的路程和 A 跑的路程相等，追上一次，路程差为 1 圈。比如第一个\n                            人跑 200 米，第二个人要跑 1 圈+200 米才能追上。")]),_vm._v(" "),_c('p',[_vm._v("  - ②追上 n 次，路程差为 n 圈。本质：每一次追上到下一次追上期间，两人走\n                            的路程差是一圈。比如第 n 次追上到第 n+1 次追上，快的人跑一整圈+△表示的\n                            距离，慢的人只跑了△的距离。")]),_vm._v(" "),_c('p',[_vm._v("（3）注意：公式中，追及是 `S_差=v_差 t`，相遇是` S_和=v_和 t`。`S_和`、`S_差`都是 1 圈。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】异向、相向、反向，都是相遇问题。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】多次迎面相遇（两端出发）：")]),_vm._v(" "),_c('p',[_vm._v("1.从两端出发：")]),_vm._v(" "),_c('p',[_vm._v("（1）第 1 次相遇，共走 1 个 S。")]),_vm._v(" "),_c('p',[_vm._v("（2）第 2 次相遇，共走 3 个 S。")]),_vm._v(" "),_c('p',[_vm._v("（3）第 3 次相遇，共走 5 个 S。")]),_vm._v(" "),_c('p',[_vm._v("2.第 n 次相遇，共走 `S_和=（2n-1）S=V_和*t_遇`。")]),_vm._v(" "),_c('p',[_vm._v("3.例：牛郎和织女从两端出发，第一次相遇共走了 1S；相遇的时候没认出\n                            来，两人继续走，到达对方出发点的时候往回走，第二次相遇共走了 3S；第二\n                            次相遇还是错过了，继续往前走，第三次相遇共走了 5S。")]),_vm._v(" "),_c('p',[_vm._v("4.考试的时候可能问第二次、第三次相遇用了多久，代入公式即可。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】流水行船：流水行船问题，在考试中考的不多，是低频考点，并且难度比较低，")]),_vm._v(" "),_c('p',[_vm._v("1.`V_顺=V_船+V_水`。")]),_vm._v(" "),_c('p',[_vm._v("2.`V_逆=V_船-V_水`。")]),_vm._v(" "),_c('p',[_vm._v("3.静水速度=船速、漂流速度=水速。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】比例行程：")]),_vm._v(" "),_c('p',[_vm._v("1.三量关系：路程 S=速度 V*时间 T。")]),_vm._v(" "),_c('p',[_vm._v("2.S 一定，V、T 成反比。比如例 6，在联考中也出现过类似的题，从 A 点到\n                            B 点用了 90 分钟，从 B 点到 A 点用了 100 分钟，则速度比为 10：9。")]),_vm._v(" "),_c('p',[_vm._v("3.V 一定，S、T 成正比。")]),_vm._v(" "),_c('p',[_vm._v("4.T 一定，S、V 成正比。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("一、基础经济")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】")]),_vm._v(" "),_c('p',[_vm._v("1.利润（盈利）=售价-进价（成本），定义式。")]),_vm._v(" "),_c('p',[_vm._v("2.利润率=利润/进价（数量关系）。资料分析：利润率=利润/营业收入。利\n                                    润率这个概念在经济学上一种是成本利润率（成本作为分母），另一种是收入利\n                                    润率（营业收入作为分母）。数学研究的是比较理想化的情况，成本都比较清晰；\n                                    资料分析是研究现实中的数据（如研究一个国家、地区的整体利润率），比较难\n                                    以计算成本，营业收入很透明，因此可以用营业收入进行分析。资料分析里面的\n                                    利润率一定小于 100%，是一个比重的概念，利润是营业收入的一部分。")]),_vm._v(" "),_c('p',[_vm._v("3.售价=进价*（1+利润率），推导：售价=进价+利润=进价+进价*利润率=进\n                                    价*（1+利润率）。如进价为 100，利润率为 50%，售价=100*150%=150。")]),_vm._v(" "),_c('p',[_vm._v("4.折扣=折后价/折前价。比如打折之前卖 100，打折之后卖了 80，折扣\n                                    =80/100=80%，打 8 折，打 85 折就是 85%。如果题目这样表述：老板给一个 20%\n                                    的折扣，此时是原价降低 20%，相当于打 8 折，售价为原价的 80%。\n                                    ")]),_vm._v(" "),_c('p',[_vm._v("5.总价=单价*数量，总进价=单个进价*数量，总利润=单个利润*数量=总售\n                                    价-总进价。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】“上涨 300%”就是增长 300%，利润率为 300%。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】解题思路梳理：")]),_vm._v(" "),_c('p',[_vm._v("1.方程法：有具体价格（总价、单价、利润）。")]),_vm._v(" "),_c('p',[_vm._v("2.赋值法：")]),_vm._v(" "),_c('p',[_vm._v("（1）给比例，求比例（整个题目没有给具体数值）。")]),_vm._v(" "),_c('p',[_vm._v("（2）三量关系只给一个量（总价=单价*数量）。")]),_vm._v(" "),_c('p',[_vm._v("（3）操作方式：对条件和问题都没有给具体值的量进行赋值即可。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】题目都是百分数，没有具体单位，可以采用赋值法。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】如果 A/B=C/D，则 A/B=C/D=（A+C）/（B+D）=（A-C）/（B-D）。\n                                ")]),_vm._v(" "),_c('p',[_vm._v("1.例如：（x-5）/5=（x-7）/6=[（x-5）-（x-7）]/（5-6）=2/-1=-2，则\n                                    x-5=5*（-2），解得 x=-5，不需要交叉相乘展开，分子、分母做差的顺序需要保\n                                    持一致。")]),_vm._v(" "),_c('p',[_vm._v("2.本题方法一：（x-105）/100=（x-104）/104=[（x-104）-（x-105）]/（1\n                                    04-100）=1/4，则 x-105=100*1/4，x=130。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、分段计费")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】分段计费：")]),_vm._v(" "),_c('p',[_vm._v("1.在生活中，水电费、出租车计费等，每段计费标准不等。问：在不同收费\n                                    标准下，一共需要的费用？")]),_vm._v(" "),_c('p',[_vm._v("2.计算方法：")]),_vm._v(" "),_c('p',[_vm._v("（1）先按标准分开看。\n                                ")]),_vm._v(" "),_c('p',[_vm._v("（2）计算之后再汇总。")]),_vm._v(" "),_c('p',[_vm._v("3.某地出租车收费标准为：3 公里内起步价 8 元；超出 3 公里的部分，每公\n                                    里 2 元。小明打车坐了 12 公里，共花费多少钱？")]),_vm._v(" "),_c('p',[_vm._v("答：前面 3 公里为起步价 8 元，后面还有 12-3=9 公里，共花费 8+9*2=26\n                                    元。本题为最简单的分段计费问题。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("一、函数最值")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】函数最值：经济利润问题中的特殊情况。\n                                ")]),_vm._v(" "),_c('p',[_vm._v("1.判定题型：单价和销量此消彼长，问何时总价/总利润最高？")]),_vm._v(" "),_c('p',[_vm._v("2.引例：单价为 3000 元，可卖出 16 万件。若单价每提升 300 元，销量会降\n                                    低 1 万件。请问当单价定为多少元时，销售总额最高？")]),_vm._v(" "),_c('p',[_vm._v("答：单价和销量此消彼长，问总价/总利润最高，想要销售总额最高，销售\n                                    总额=单价*数量，设提价次数为 x，则单价变为 3000+300x，销量变为（16 万件\n                                    -x 万件），总额=（3000+300x）*（16 万件-x 万件），想要总额最大，代入很浪\n                                    费时间。可以直接令总额为 0，从而使 3000+300x=0，16-x=0，解得 `x_1=-10`，`x_2=16`。\n                                    则 `x=(x_1+x_2)/2=3` 时，销售总额取得最值，此时的单价为 3000+300*3=3900 元。")]),_vm._v(" "),_c('p',[_vm._v("3.计算方法（两点式）：")]),_vm._v(" "),_c('p',[_vm._v("（1）设提价次数为 x。")]),_vm._v(" "),_c('p',[_vm._v("（2）令总利润/总售价为 0，解得 `x_1`、`x_2`。")]),_vm._v(" "),_c('p',[_vm._v("（3）当 `x=(x_1+x_2)/2` 时，取得最值。")]),_vm._v(" "),_c('p',[_vm._v("4.二次函数：当 x=-b/2a 时有最值；或是求导。")]),_vm._v(" "),_c('p',[_vm._v("两点式原理：总数=（ ）*（ ），两个括号内一定一正一负，故得到-x²，\n                                    函数一定是开口向下的抛物线，在抛物线的一左一右找到函数值为 0 的点，而这\n                                    两个点的平均值就在对称轴上。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、构造数列")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】构造数列（某个主体最……）：套路性很强，偶尔会有变化。")]),_vm._v(" "),_c('p',[_vm._v("1.5 个人分 423 斤肉，分到的重量均为整数且互不相等。分得最多的人，最\n                                    少分（ ）斤。")]),_vm._v(" "),_c('p',[_vm._v("答：“分得最多的人”指名次是第一名，“最少分多少斤”指数量最少，即要让第一名最少。先对 5 人进行排名（第一～第五），求谁设谁，问第一名，则设\n                                    第一名为 x。总量一定，要让 x 尽量少，则其他人要尽量多，分到的重量均为整\n                                    数且互不相等，第二名最多为 x-1，第三名最多为 x-2，第四名最多为 x-3，第\n                                    五名最多为 x-4。求和列式：5x-10=423，解得 x=86.6。问的是最少，说明最少\n                                    为 86.6，不能比 86.6 更少（≥86.6），反向取整为 87。如果 x 是整数，计算出\n                                    的数据就是答案。\n                                    ")]),_vm._v(" "),_c('p',[_vm._v("2.方法：求谁设 x——反向推其它——求和列式。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】")]),_vm._v(" "),_c('p',[_vm._v("1.大于 x 且尽可能大：往封顶取；大于 x 且尽可能小：x+1、x+2……。")]),_vm._v(" "),_c('p',[_vm._v("2.小于 x 且尽可能大：x-1、x-2……；小于 x 且尽可能小：1、2、3……。")]),_vm._v(" "),_c('p',[_vm._v("3.如果 x 在中间，基本上都是一边是常数，一边是未知数。\n                                ")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("三、最不利构造")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】最不利构造（至少……保证……）：考查较少，套路性强。")]),_vm._v(" "),_c('p',[_vm._v("1.袋子中装有 5 个红球，8 个白球，10 个黄球。问：")]),_vm._v(" "),_c('p',[_vm._v("（1）至少取出（ ）个，才能保证有红球？")]),_vm._v(" "),_c('p',[_vm._v("答：要保证有红球，考虑最倒霉的情况，先摸出 8 白+10 黄，此时再摸一个\n                                    肯定是红球，8+10+1=19。")]),_vm._v(" "),_c('p',[_vm._v("（2）至少取出（ ）个，才能保证至少有 3 个同色的球？")]),_vm._v(" "),_c('p',[_vm._v("答：要保证有 3 个同色的球，最倒霉的情况是每种颜色都摸 2 个，即 2 红+2\n                                    白+2 黄，此时再摸一个，一定可以满足要求，2+2+2+1=7。\n                                    ")]),_vm._v(" "),_c('p',[_vm._v("（3）至少取出（ ）个，才能保证至少有 8 个同色的球？")]),_vm._v(" "),_c('p',[_vm._v("答：要保证有 8 个同色的球，考虑最倒霉的情况，红球只有 5 个，全取出来，\n                                    5 红+7 白+7 黄，此时再摸一个，一定可以满足要求，5+7+7+1=20。\n                                    ")]),_vm._v(" "),_c('p',[_vm._v("2.方法：要保证同种情况至少 n 个，应每种情况各取（n-1）个（如果有不\n                                    够 n-1 的有多少取多少），最后再加 1。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】容斥原理：")]),_vm._v(" "),_c('p',[_vm._v("1.在中学中，容斥原理属于集合的概念。")]),_vm._v(" "),_c('p',[_vm._v("（1）集合：把具有同一属性的所有元素放在同一圆圈中。")]),_vm._v(" "),_c('p',[_vm._v("（2）两种有交叉有融合，属于两集合容斥原理问题；三种有交叉有融合，\n                            属于三集合容斥原理问题。")]),_vm._v(" "),_c('p',[_vm._v("2.两集合容斥公式：A+B-A∩B=总数-都不。")]),_vm._v(" "),_c('p',[_vm._v("3.如下图所示：例如，全班有 50 人，35 人参加国考，38 人参加省考，30\n                            人既参加省考又参加国考。还有一部分人两种考试都不参加，属于圆圈外的范围，\n                            为“都不”，问“都不”有多少人。两种有交叉有融合，属于两集合容斥原理。\n                            参加国考的人数为 A，参加省考的人数为 B，参加国考人数+参加省考人数\n                            =35+38=73＞总人数 50 人，因为其中有一部分人（30 人）被重复计算，30 人被\n                            算了 2 次，要减去重复计算的人数，35+38-30。A∪B=A+B-A∩B=35+38-30，“并\n                            集”的概念大家了解即可，因为公考不考，这里是为了和中学的知识点产生联系。\n                            35+38-30=50-（ ），一般来说，选项尾数不同，利用尾数法，尾数 3=尾数 0-（ ）的尾数，则（ ）的尾数为 7。")]),_vm._v(" "),_c('p',[_vm._v("4.考试中把“补集”理解为“都不”。就是哪个集合都不属于，这样描述比\n                            较接地气。只理解交集（∩）的概念即可。\n                            ")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】画图法：")]),_vm._v(" "),_c('p',[_vm._v("1.若条件或问题不便于代入公式计算，则考虑画图。\n                        ")]),_vm._v(" "),_c('p',[_vm._v("2.例如：只参加 A；参加 A、B 但不参加 C；或者缺少代公式必要的数据。如\n                            图所示：左边的圆圈为 A，阴影部分为只 A，但是阴影部分在公式中是不存在的，\n                            公式中的 A 为“圆圈”代表的区域，出现和公式表述不同的，就用画图法。")]),_vm._v(" "),_c('p',[_vm._v("3.先画圈，再代数；从里到外，注意去重。例如：A∩B=5 人，A 的人数为\n                            12 人，先把 5 人标在中间，再把 12 人标在外面，7 人标在里面。不要把 12 人和\n                            5 人标在一起，因为 12 人包含 5 人。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】三集合：为考试中最主流的考法，公式有三种，公式越多越好做\n                            题。三集合公式很长，考试一般考查纯代入，考查难度偏低。")]),_vm._v(" "),_c('p',[_vm._v("1.三集合标准型公式：A+B+C-A∩B-A∩C-B∩C+A∩B∩C=总-都不")]),_vm._v(" "),_c('p',[_vm._v("2.推导：三集合分别为 A、B、C，三者之间两两都有交叉关系，考试中从来\n                            没考查过四集合和五集合。A+B+C，可以快速覆盖所有点，发现 A∩B 被 A 和 B\n                            各计算了一遍，需要去掉重复的一遍，同理 A∩C 和 B∩C 都被计算了两遍，此时\n                            都需要减去多余的一遍，为 A+B+C-A∩B-A∩C-B∩C；三集合最大的特殊点就是\n                            中间的蓝色网状部分，为 A∩B∩C，A、B、C 的每个部分都含有 A∩B∩C，A∩B、\n                            A∩C、B∩C 中都含有 A∩B∩C，加了三遍又减了三遍，此时需要补上一次，称之\n                            为补漏，过程为“各加、去重、补漏”，A+B+C-A∩B-A∩C-B∩C+A∩B∩C=总-都\n                            不，此时每个点都包含在公式中")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】三集合非标准型：是热门考点，为重中之重。公考第一次考查这\n                            个公式时，完全用高中的知识储备来做。非标准是因为推导方式比较特殊。")]),_vm._v(" "),_c('p',[_vm._v("1.公式：A+B+C-满足两项-满足三项*2=总数-都不。")]),_vm._v(" "),_c('p',[_vm._v("2.推导：如下图所示，满足的两项为 x、y、z 区域，x 为 A、B 相交，y 为 B、\n                            C 相交，z 为 A、C 相交，其中 m 为 A∩B∩C。A+B+C 中，x 被 A 算了一遍，被 B\n                            算了一遍，算了两遍，只重复了一遍。同理，y 被 B、C 各算了一遍，z 被 A、C\n                            各算了一遍，均需要减掉一遍。中间 m 被算了三遍，需要减去多余的两遍，\n                            A+B+C-x-y-z-2m=全-都不，x+y+z 为满足两项（刚好满足两项）的人数，满足三\n                            项的就是中间的 m，替换成文字，A+B+C-满足两项-满足三项*2=总数-都不。\n                            ")]),_vm._v(" "),_c('p',[_vm._v("3.什么时候用标准型公式，什么时候用非标准型公式，如果把“满足两项的”\n                            用一个数字表示，用非标准公式；如果出现“既 A 又 B”、“既 B 又 C”、“既 B 又\n                            C”，用标准型公式。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】")]),_vm._v(" "),_c('p',[_vm._v("1.三集合非标准型公式：A+B+C-满足两项-满足三项*2=总数-都不。")]),_vm._v(" "),_c('p',[_vm._v("2.至少有两种电器=有两种电器+有三种电器。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】")]),_vm._v(" "),_c('p',[_vm._v("1.常识公式：满足一项+满足两项+满足三项=全-都不。\n                        ")]),_vm._v(" "),_c('p',[_vm._v("2.理解常识公式中的不重叠：比如参加运动会，不可能存在既参加两个项目，\n                            又参加三个项目的情况。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】")]),_vm._v(" "),_c('p',[_vm._v("1.至少闯一个红灯的情况，就等于全部情况减去都不闯红灯的情况。")]),_vm._v(" "),_c('p',[_vm._v("2.存在满足三项，但没有满足两项的集合，比如下图所示，集合的形状没有\n                            规定一定是圆，集合是没有形状的，可以是任意形状，不需要纠结 x、y 的取值，\n                            比如现实中，30 人只投了一个岗位，还有 9 人投了三个岗位，没有人投两个岗\n                            位，这种情况是存在的。但本题如果加上条件“有一些人报了两个岗位”，此时\n                            x 不能为 0，则答案只能是 A 项")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("一、排列组合公式")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】分类和分步：")]),_vm._v(" "),_c('p',[_vm._v("1.分类相加：要么„„要么„„。比如老师从北京去上海，可以坐飞机或者\n                                    高铁，飞机有 3 趟，高铁有 5 趟，要么坐飞机，要么坐高铁，是二选一，只需要\n                                    选择一类就能完成这件事，所以总共有 3+5=8 种选择。")]),_vm._v(" "),_c('p',[_vm._v("2.分步相乘：既„„又„„。比如老师从北京去广州，在上海中转，北京到\n                                    上海有 8 种选择，上海到广州有 5 种选择，总共有 8*5=40 种选择，先到上海，\n                                    再到广州，分步骤，所以用乘法。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】排列与组合：")]),_vm._v(" "),_c('p',[_vm._v("1.排列：")]),_vm._v(" "),_c('p',[_vm._v("（1）与顺序有关，从 n 个元素中有序的选择 m 个元素。")]),_vm._v(" "),_c('p',[_vm._v("（2）A（n,m）=从 n 开始往下乘 m 个数。")]),_vm._v(" "),_c('p',[_vm._v("  - ①从 10 个同学中选择 3 人有顺序的去做事情，为 A（10,3）=10*9*8。")]),_vm._v(" "),_c('p',[_vm._v("  - ②从 10 个人中有序的选 3 人，第一步是从 10 人中选 1 人，有 10 种选法；\n                                    第二步是从 9 人中选 1 人，有 9 种选法；第三步是从 8 人中选 1 人，有 8 种选法，\n                                    分步骤进行，用乘法。")]),_vm._v(" "),_c('p',[_vm._v("2.组合：")]),_vm._v(" "),_c('p',[_vm._v("（1）与顺序无关。")]),_vm._v(" "),_c('p',[_vm._v("（2）C（n,m）=分子 A（n,m）/分母 A（m,m）=从 n 开始往下乘 m 个数/从 m\n                                    开始往下乘 m 个数，答案是情况数，一定是整数。\n                                    ")]),_vm._v(" "),_c('p',[_vm._v("  - ①从 10 人中选 3 人去扫地，为 C（10,3）=A（10,3）/A（3,3）=（10*9*8）\n                                    /（3*2*1）。\n                                    ")]),_vm._v(" "),_c('p',[_vm._v("  - ②组合是先在有顺序的基础上，再消除顺序，假设选出甲、乙、丙三人，三\n                                    个人内部有顺序，除以三个人的内部顺序，就得到无序的情况。")]),_vm._v(" "),_c('p',[_vm._v("3.判定标准：从已选的主体中任意挑出两个，调换顺序：\n                                ")]),_vm._v(" "),_c('p',[_vm._v("（1）有差别，与顺序有关（A）。")]),_vm._v(" "),_c('p',[_vm._v("（2）无差别，与顺序无关（C）。")]),_vm._v(" "),_c('p',[_vm._v("4.例：")]),_vm._v(" "),_c('p',[_vm._v("（1）从七个葫芦娃中，任选两个去救爷爷")]),_vm._v(" "),_c('p',[_vm._v("答：选出大娃、二娃，和选出二娃、大娃，都是去救爷爷，没有区别，与顺\n                                    序无关，为 C（7,2）。")]),_vm._v(" "),_c('p',[_vm._v("（2）从七个葫芦娃中，任选两个去救爷爷（第一个去探路，第二个去打架）。\n                                    答：大娃去探路、二娃去打架，和大娃去打架、二娃去探路，调换顺序之后\n                                    有区别，为 A（7,2）。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】")]),_vm._v(" "),_c('p',[_vm._v("1.计算不是排列组合的重点，列式才是重点。")]),_vm._v(" "),_c('p',[_vm._v("2.在考试中，一般选出人去干一样的事情，是没有顺序的；一般选出人去干\n                                    不一样的事情，是有顺序的。")]),_vm._v(" "),_c('p',[_vm._v("3.排列组合问题用 A 还是 C 需要自己揣摩，可以自己举例子理解，没有死记\n                                    硬背的方法")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】在计算 C（n,m），当 m 比较大时，可以转化为：C（n,m）=C（n,n-m），\n                                    比如从 10 人中选 9 个人扫地，就等同于选 1 个人不扫地，即 C（10,9）=C（10,1）。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、经典题型")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】考试中最多的两种题型：")]),_vm._v(" "),_c('p',[_vm._v("1.捆绑法：相邻。")]),_vm._v(" "),_c('p',[_vm._v("（1）引例：甲乙丙丁戊己 6 个老师站成一排照相，要求甲乙丙 3 人必须\n                                    相邻，有（ ）种不同的站法？")]),_vm._v(" "),_c('p',[_vm._v("答：要求甲乙丙必须相邻，先把甲乙丙 3 人捆在一起，注意内部有无顺序，\n                                    捆起来照相，甲在左、乙在左照相出来是不一样的，所以有顺序，为 A（3,3）\n                                    =6；把甲乙丙看成一个“大胖子”和丁、戊、己排序，相当于 4 个元素排序，\n                                    为 A（4,4）=24，分步相乘，6*24=144。站成一排照相是有顺序的，站在中间\n                                    和站在左边是不一样的，站队、照相都是有顺序的。")]),_vm._v(" "),_c('p',[_vm._v("（2）方法：\n                                ")]),_vm._v(" "),_c('p',[_vm._v("  - ①先捆：把必须相邻的元素捆绑起来，注意内部有无顺序。")]),_vm._v(" "),_c('p',[_vm._v("  - ②再排：将捆绑后的看成一个元素，进行后续排列。")]),_vm._v(" "),_c('p',[_vm._v("（3）n 人排队=A（n,n），全排列。")]),_vm._v(" "),_c('p',[_vm._v("2.插空法：不相邻。")]),_vm._v(" "),_c('p',[_vm._v("（1）引例：甲乙丙丁戊己 6 个老师站成一排照相，要求甲乙丙 3 人必须\n                                    不相邻，有（ ）种不同的站法？\n                                    ")]),_vm._v(" "),_c('p',[_vm._v("答：（1）先排可以相邻的丁戊己，3 人站成一排，为 A（3,3）=6 种；（2）\n                                    3 人排列形成了 4 个空位，再将不相邻的甲、乙、丙插入到 4 个空位中，即从\n                                    4 个空位中选 3 个空位插入甲、乙、丙（每个空位只插一个人）。两种思路：\n                                    第一种，4 个空中选 3 个空，C（4,3），再把三个人放进去，需要排序，为 A\n                                    （3,3），即 C（4,3）*A（3,3）=24；第二种，也可以直接写成“A（4,3）”，\n                                    即从 4 个空中选 3 个空马上把甲乙丙三人放进去，谁在左谁在右不一样，有顺\n                                    序，为 A（4,3）=24。先排再插，分步相乘，总情况=6*24=144。")]),_vm._v(" "),_c('p',[_vm._v("（2）方法：\n                                ")]),_vm._v(" "),_c('p',[_vm._v("  - ①先排：先安排可以相邻的元素，形成若干个空位。")]),_vm._v(" "),_c('p',[_vm._v("  - ②再插：将不相邻的元素插入到空位中。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("2.广东的一道题目：20 个路灯选 10 个路灯停掉，停掉的不能连续，问多少\n                                    种情况")]),_vm._v(" "),_c('p',[_vm._v("答：把 10 个灯放在这里，让它们亮着；10 个灯形成 11 个空，从 11 个空中\n                                    选 10 个放入黑灯，C（11,10）=C（11,1）=11 种。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-wrap"},[_c('h4',{staticClass:"modal-t"},[_vm._v("二、经典题型")]),_vm._v(" "),_c('div',{staticClass:"modal-c"},[_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【知识点】概率：任何一道排列组合的题目换一种问法就能变成概率题，如\n                                    例 4 转化为问“A、B 两位同学不能挨着坐的概率”，先算出总情况为 24，再算满\n                                    足要求的情况数为 16，P=16/24。\n                                    ")]),_vm._v(" "),_c('p',[_vm._v("1.给情况求概率：概率=满足要求的情况数/总的情况数。")]),_vm._v(" "),_c('p',[_vm._v("2.给概率求概率：")]),_vm._v(" "),_c('p',[_vm._v("（1）分类：`P=P_1+P_2+……+P_n`。例：不下雨的概率＝晴天概率+阴天概率，要\n                                    么是晴天、要么是阴天，“要么……要么……”是分类，用加法。")]),_vm._v(" "),_c('p',[_vm._v("（2）分步：`P=P_1*P_2*……*P_n`。例：连续两次闯红灯的概率＝闯第一个的概\n                                    率*闯第二个的概率。既闯第一个红灯，又闯第二个红灯，“既„„又„„”用乘\n                                    法。\n                                    ")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】")]),_vm._v(" "),_c('p',[_vm._v("1.C（n,n）=1。")]),_vm._v(" "),_c('p',[_vm._v("2.C（15,13）=C（15,2）=15*14/2=105。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】两个人要凑一起的概率题，先让一个人随便挑，再让第二个人去找\n                                    他。")])]),_vm._v(" "),_c('div',{staticClass:"border-radius"},[_c('p',[_vm._v("【注意】")]),_vm._v(" "),_c('p',[_vm._v("1.从 50 题中选 48 题做=从 50 题中选 2 题不做，为 C（50,2）。")]),_vm._v(" "),_c('p',[_vm._v("2.第二个人与第一个人选择不做的 2 道题目完全相同的情况只有 1 种。假如\n                                    第一个人选择 3 题、4 题不做，要完全相同，第二个人也要 3 题、4 题不做。\n                                    ")]),_vm._v(" "),_c('p',[_vm._v("3.拓展：知识竞赛共 50 道单项选择题，小李和小王从中各自随机选择 49\n                                    道题作答。问他们未选的 1 道题相同的概率是多少？")]),_vm._v(" "),_c('p',[_vm._v("答：第一个人随便选，`P_(第一步)=100%`；如第一个人第 50 题不做，要求未选的 1\n                                    道题相同，则第二个人也要第 50 题不做，所以与第一个人选择不做的题目相同\n                                    只有 1 种情况，`P_(第二步)`=与第一个人选择不做的题目相同/50 题中有 1 题不做=1/C\n                                    （50,1）=1/50，`P_(第一步)*P_(第二步)=1/50`。")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 471 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pdf-page-wrap"},[_c('el-container',[_c('el-header',{staticClass:"header"},[_vm._v("Header")]),_vm._v(" "),_c('el-main',{staticClass:"main"},[(_vm.pdfId == 'yanyu')?_c('fFJJYanyu'):_vm._e(),_vm._v(" "),(_vm.pdfId == 'panduan')?_c('fFJJPanduan'):_vm._e(),_vm._v(" "),(_vm.pdfId == 'ziliaofenxi')?_c('fFJJZiliaofenxi'):_vm._e(),_vm._v(" "),(_vm.pdfId == 'shenlun')?_c('fFJJShenlun'):_vm._e(),_vm._v(" "),(_vm.pdfId == 'shuliangguanxi')?_c('fFJJShenliangguanxi'):_vm._e()],1),_vm._v(" "),_c('el-footer',{staticClass:"footer"},[_vm._v("Footer")])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 472 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1dbec91c_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(474);
function injectStyle (ssrContext) {
  __webpack_require__(473)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1dbec91c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1dbec91c_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 473 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 474 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"it_wrap"},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 475 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(215);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b0228b3c_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(477);
function injectStyle (ssrContext) {
  __webpack_require__(476)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b0228b3c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b0228b3c_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 476 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 477 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"git_wrap"},[_c('el-card',{staticClass:"box-card"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("github上传本地项目代码")])]),_vm._v(" "),_c('ol',[_c('li',[_c('p',[_vm._v("进入github首页，点击新项目"),_c('el-button',{attrs:{"type":"primary","size":"mini"}},[_vm._v("New repository")])],1),_vm._v(" "),_c('p',[_vm._v("Reposition name 处输入项目名称")]),_vm._v(" "),_c('p',[_vm._v("Description 处输入项目描述")]),_vm._v(" "),_c('p',[_vm._v("Public 和 Private 选中 Public")]),_vm._v(" "),_c('p',[_vm._v("勾选 Initialize this repository with a README")]),_vm._v(" "),_c('p',[_vm._v("点击 "),_c('el-button',{attrs:{"type":"primary","size":"mini"}},[_vm._v("Create repository")]),_vm._v("创建按钮")],1)]),_vm._v(" "),_c('li',[_c('p',[_vm._v("点击 "),_c('el-button',{attrs:{"type":"primary","size":"mini"}},[_vm._v("Clone or download")]),_vm._v("按钮")],1),_vm._v(" "),_c('p',[_vm._v("复制里面的地址备用（记为 cloneUrl）")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("在要创建项目的目录（文件夹）下，鼠标右键，选择“Git Bash Here”打开 gitbash")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("如果本地没有配置好git上的用户名和邮箱，输入如下命令：")]),_vm._v(" "),_c('p',[_vm._v("git config --global user.name \"你github的用户名\"")]),_vm._v(" "),_c('p',[_vm._v("git config --global user.email \"你github的邮箱\"")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("输入命令 “git clone cloneUrl”（cloneUrl 为 Clone or download 里复制的地址）")]),_vm._v(" "),_c('p',[_vm._v("然后就会在当前文件夹上生成在 github 上创建的项目名称")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("输入命令“cd 项目名”，项目名为新增文件夹的名称，进入到项目文件夹里")]),_vm._v(" "),_c('p',[_vm._v("把这个项目要上传的文件复制到该项目文件夹里")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("在 gitbash 输入命令 “git add .” 把该项目文件夹下新的文件或修改过的文件添加进来，如果有的文件之前已经添加了，它会自动省略。")]),_vm._v(" "),_c('p')]),_vm._v(" "),_c('li',[_c('p',[_vm._v("输入命令 “ git commit  -m  \"提交信息\" ” （提交信息是你的项目说明）")]),_vm._v(" "),_c('p',[_vm._v("注： git commit 后面加 -m 表示可以直接输入提交说明，如果不加 -m ，直接输入git commit，就会弹出一个类似于 vim 的界面，让你输入提交说明")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("输入命令 “git push -u origin master”")]),_vm._v(" "),_c('p',[_vm._v("此操作目的是把本地仓库push到github上面，此步骤需要你输入登录github上的帐号和密码")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("然后进入github页面，刷新下页面就会显示刚上传的项目")])])])]),_vm._v(" "),_c('br'),_vm._v(" "),_c('el-card',{staticClass:"box-card"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("预览Github的页面")])]),_vm._v(" "),_c('ol',[_c('li',[_c('p',[_vm._v("进入github相应的项目中，点进settings")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("找到 “GitHub Pages”功能模块")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("点击master branch，并save")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("GitHub Pages 版块会有个预览地址")]),_vm._v(" "),_c('p',[_vm._v("Your site is published at url地址")])])])]),_vm._v(" "),_c('br'),_vm._v(" "),_c('el-card',{staticClass:"box-card"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("将已有项目提交到 github")])]),_vm._v(" "),_c('ol',[_c('li',[_c('p',[_vm._v("git Bash打开项目，使用cd命令进入已有项目根目录下")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("添加已有项目到github")]),_vm._v(" "),_c('p',[_vm._v("touch README.md //新建说明文件")]),_vm._v(" "),_c('p',[_vm._v("git init //在当前项目目录中生成本地git管理,并建立一个隐藏.git目录")]),_vm._v(" "),_c('p',[_vm._v("git add . //添加当前目录中的所有文件到索引")]),_vm._v(" "),_c('p',[_vm._v("git commit -m \"first commit\" //提交到本地源码库，并附加提交注释")]),_vm._v(" "),_c('p',[_vm._v("git remote add origin https://github.com/chape/test.git //添加到远程项目，别名为origin")]),_vm._v(" "),_c('p',[_vm._v("git push -u origin master //把本地源码库push到github 别名为origin的远程项目中，确认提交")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("更新代码")]),_vm._v(" "),_c('p',[_vm._v("cd 项目根目录")]),_vm._v(" "),_c('p',[_vm._v("git add .")]),_vm._v(" "),_c('p',[_vm._v("git commit -m \"update test\" //检测文件改动并附加提交注释")]),_vm._v(" "),_c('p',[_vm._v("git push -u origin master //提交修改到项目主线")])])])]),_vm._v(" "),_c('br'),_vm._v(" "),_c('el-card',{staticClass:"box-card"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("在 github 上预览 vue 项目")])]),_vm._v(" "),_c('ol',[_c('li',[_c('p',[_vm._v("命令行执行 npm run build 后，项目的目录下会生成一个 dist 文件夹，它里面又包含一个 static 文件夹和一个 index.html 文件，这是 webpack 最终打包好的文件")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("尝试在浏览器打开 index.html，结果页面显示是空白")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("打开控制台发现script 标签的引入路径不对，因为 static 文件夹和 index.html 是在同一个目录下的，这里却是从根目录引入 static 下的文件，正确的路径应该是 ./ 开头的相对路径： src='./static/...' 或者 src='static/...'")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("其实这跟配置资源的路径有关，打开项目根目录 config 文件夹下的 index.js ，定位到 build 下的 assetsPublicPath （dev下也有一个assetsPublicPath，别搞错了），把 assetsPublicPath: '/' 修改为 assetsPublicPath: './'")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("重新执行 npm run build ，再打开 index.html 文件，在浏览器可以看到页面效果了")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("项目 push 到 github， dist 文件没有被上传到 github 的解决办法？")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("找到项目根目录的 .gitignore 文件，这里设置一些文件名，对应的文件将不会被提交到 github 上面，而 dist 被设置在里面，所以就不能上传到 github 上了，我们可以把 dist 从文件里移除。")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("当然还有另一种办法，就是在操作 git 命令时，把 git add. 改为 git add -f dist 意思是强制把 dist 文件提交到 github 。")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("可以在 github 仓库里看到 dist 文件夹了")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("在预览地址后面加上 dist/index.html")])])])]),_vm._v(" "),_c('br')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 478 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(216);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0a26f0a0_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(480);
function injectStyle (ssrContext) {
  __webpack_require__(479)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0a26f0a0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0a26f0a0_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 479 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 480 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"react_wrap"},[_c('div',{staticClass:"content-wrap"},[_vm._m(0),_vm._v(" "),_c('ol',[_vm._m(1),_vm._v(" "),_vm._m(2),_vm._v(" "),_vm._m(3),_vm._v(" "),_vm._m(4),_vm._v(" "),_c('li',[_c('p',[_vm._v("暴露react脚手架（create-react-app）创建的项目中的webpack")]),_vm._v(" "),_c('p',[_vm._v("package.json文件中有 \"eject\":\"react-script eject\"")]),_vm._v(" "),_c('xmp',[_vm._v("\n                    \"script\":{\n                        ...\n                        \"eject\":\"react-script eject\"\n                        ...\n                    }\n                ")]),_vm._v(" "),_c('p',[_vm._v("直接在控制台运行 eject（如：yarn eject） 就可以暴露 webpack 文件")]),_vm._v(" "),_c('p',[_vm._v("运行 yarn eject 可能会遇到如下错误：")]),_vm._v(" "),_c('p',{staticStyle:{"padding-left":"20px"}},[_vm._v("Remove untracked files, stash or commit any changes, and try again.")]),_vm._v(" "),_c('p',{staticStyle:{"padding-left":"20px"}},[_vm._v("原因：使用脚手架创建一个项目的时候，自动给我们增加了一个.gitignore文件，而本地却没有文件仓库，需要在终端输入如下命令：")]),_vm._v(" "),_c('p',{staticStyle:{"padding-left":"40px"}},[_vm._v("git add .")]),_vm._v(" "),_c('p',{staticStyle:{"padding-left":"40px"}},[_vm._v("git commit -m '这里是更新说明'")]),_vm._v(" "),_c('p',{staticStyle:{"padding-left":"40px"}},[_vm._v("再执行 yarn eject")])],1),_vm._v(" "),_vm._m(5),_vm._v(" "),_vm._m(6),_vm._v(" "),_vm._m(7),_vm._v(" "),_vm._m(8),_vm._v(" "),_vm._m(9)])]),_vm._v(" "),_c('br')])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"table-wrap learn-url-wrap active"},[_c('table',{attrs:{"id":"learn-url"}},[_c('tbody',[_c('tr',[_c('td',[_vm._v("官网")]),_c('td',[_c('a',{attrs:{"href":"https://react.docschina.org/","target":"_blank"}},[_vm._v("https://react.docschina.org/")])])]),_c('tr',[_c('td',[_vm._v("React全家桶框架教程笔记（一）")]),_c('td',[_c('a',{attrs:{"href":"https://www.jianshu.com/p/faf76ea3f163","target":"_blank"}},[_vm._v("https://www.jianshu.com/p/faf76ea3f163")])])]),_c('tr',[_c('td',[_vm._v("Redux")]),_c('td',[_c('a',{attrs:{"href":"http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html","target":"_blank"}},[_vm._v("http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html")])])])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('p',[_vm._v("React特点")]),_vm._v(" "),_c('p',[_vm._v("- Declarative（声明式编码）")]),_vm._v(" "),_c('p',[_vm._v("- Component-Based（组件化编码）")]),_vm._v(" "),_c('p',[_vm._v("- 高效 - 高效的DOM Diff算法，最小化页面重绘")]),_vm._v(" "),_c('p',[_vm._v("- 单向数据流")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('p',[_vm._v("React生态：")]),_vm._v(" "),_c('p',[_vm._v("React + React-Router + Redux + Axios + Babel + Webpack")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('p',[_vm._v("React 脚手架")]),_vm._v(" "),_c('p',[_vm._v("npm install -g create-react-app // 全局安装react脚手架")]),_vm._v(" "),_c('p',[_vm._v("使用react脚手架：")]),_vm._v(" "),_c('p',[_vm._v("- create-react-app my-app")]),_vm._v(" "),_c('p',[_vm._v("- cd my-app")]),_vm._v(" "),_c('p',[_vm._v("- npm start")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('p',[_vm._v("React生命周期：")]),_vm._v(" "),_c('ul',[_c('li',[_c('p',[_vm._v("getDefaultProps - 初始化 props 属性，props来自父组件、其他组件传递过来的")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("getInitialState - 初始化当前组件的状态")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("componentWillMount - 组件初始化之前")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("render - 渲染组件")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("componentDidMount - 组件Dom插入完之后")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("componentWillReceiveProps - 来自父组件属性的传递时调用的方法")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("shouldComponentUpdate - 组件更新")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("componentWillUpdate - 组件更新之前")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("componentDidUpdate - 组件更新之后")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("ccomponentWillUnmount - 组件销毁")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('p'),_vm._v(" "),_c('p')])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('p'),_vm._v(" "),_c('p')])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('p'),_vm._v(" "),_c('p')])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('p'),_vm._v(" "),_c('p')])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('p'),_vm._v(" "),_c('p')])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 481 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(217);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_bed804f8_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(486);
function injectStyle (ssrContext) {
  __webpack_require__(482)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-bed804f8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_bed804f8_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 482 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 483 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_elWidthChange_vue__ = __webpack_require__(218);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_44d5b69c_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_elWidthChange_vue__ = __webpack_require__(485);
function injectStyle (ssrContext) {
  __webpack_require__(484)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-44d5b69c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_elWidthChange_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_44d5b69c_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_elWidthChange_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 484 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 485 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el_width_change_wrap"},[_c('div',{ref:"container",staticClass:"row container"},[_c('div',{ref:"left",staticClass:"row f_l left",on:{"mouseup":_vm.stopMove}},[_c('div',{ref:"tree",staticClass:"f_l tree"}),_vm._v(" "),_c('div',{ref:"move",staticClass:"f_l move",on:{"mousedown":_vm.beginMove,"mouseup":_vm.stopMove}})]),_vm._v(" "),_c('div',{ref:"cover",staticClass:"cover"}),_vm._v(" "),_c('div',{ref:"right",staticClass:"row f_l right"},[_c('div',{ref:"right1",staticClass:"f_l right1"}),_vm._v(" "),_c('div',{ref:"right2",staticClass:"f_l right2"})])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 486 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"code_demo_wrap"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isShowDemo),expression:"!isShowDemo"}],staticClass:"demo_list"},[_c('el-row',[_c('el-link',{staticClass:"name",on:{"click":function($event){return _vm.showDemo('1')}}},[_vm._v("元素宽度可拉伸")])],1)],1),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShowDemo),expression:"isShowDemo"}],staticClass:"demo_wrap"},[_c('el-row',[_c('el-button',{attrs:{"type":"text"},on:{"click":_vm.backDemoList}},[_vm._v("<<返回列表")])],1),_vm._v(" "),_c('el-row',[(_vm.activeDemo == '1')?_c('elWidthChange'):_vm._e()],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":24}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 487 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(219);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f41cd42_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(492);
function injectStyle (ssrContext) {
  __webpack_require__(488)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2f41cd42"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2f41cd42_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 488 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 489 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_elWidthChange_vue__ = __webpack_require__(220);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1e07d8b6_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_elWidthChange_vue__ = __webpack_require__(491);
function injectStyle (ssrContext) {
  __webpack_require__(490)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1e07d8b6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_elWidthChange_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1e07d8b6_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_elWidthChange_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 490 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 491 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el_width_change_wrap"},[_c('div',{ref:"container",staticClass:"row container"},[_c('div',{ref:"left",staticClass:"row f_l left",on:{"mouseup":_vm.stopMove}},[_c('div',{ref:"tree",staticClass:"f_l tree"}),_vm._v(" "),_c('div',{ref:"move",staticClass:"f_l move",on:{"mousedown":_vm.beginMove,"mouseup":_vm.stopMove}})]),_vm._v(" "),_c('div',{ref:"cover",staticClass:"cover"}),_vm._v(" "),_c('div',{ref:"right",staticClass:"row f_l right"},[_c('div',{ref:"right1",staticClass:"f_l right1"}),_vm._v(" "),_c('div',{ref:"right2",staticClass:"f_l right2"})])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 492 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue_wrap"},[_c('el-row',[_c('h4',[_vm._v("1、Vue：渐进式框架")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v("渐进式代表的含义是：主张最少。")]),_vm._v(" "),_c('p',[_vm._v("它是渐进的，没有强主张，你可以在原有大系统的上面，把一两个组件改用它实现，当jQuery用；")]),_vm._v(" "),_c('p',[_vm._v("也可以整个用它全家桶开发，当Angular用；")]),_vm._v(" "),_c('p',[_vm._v("还可以用它的视图，搭配你自己设计的整个下层用。")]),_vm._v(" "),_c('p',[_vm._v("可以在底层数据逻辑的地方用OO和设计模式的那套理念，也可以函数式，都可以，它只是个轻量视图而已，只做了自己该做的事。")]),_vm._v(" "),_c('p',[_vm._v("没有多做职责之外的事。")])])]),_vm._v(" "),_c('el-row',[_c('h4',[_vm._v("2、vue.js的两个核心：数据驱动和组件化。")])]),_vm._v(" "),_c('el-row',[_c('h4',[_vm._v("3、vue生命周期钩子函数有哪些？")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v("共分为8个阶段创建前/后，载入前/后，更新前/后，销毁前/后。")]),_vm._v(" "),_c('p',[_c('img',{attrs:{"src":"https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xMzI2MzIwNi0xMDZiMjNkMTBkOGU5YmRmLnBuZw?x-oss-process=image/format,png"}})])])]),_vm._v(" "),_c('el-row',[_c('h4',[_vm._v("4、vue 的双向绑定的原理是什么？")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v("数据劫持结合发布者-订阅者模式的方式来实现的。")]),_vm._v(" "),_c('p',[_vm._v("对数据进行劫持监听，需设置一个监听器Observer，来监听所有属性。")]),_vm._v(" "),_c('p',[_vm._v("属性发上变化，就需告诉订阅者Watcher看是否需要更新。")]),_vm._v(" "),_c('p',[_vm._v("订阅者是有很多个，需要有一个消息订阅器Dep来专门收集这些订阅者，然后在监听器Observer和订阅者Watcher之间进行统一管理的。")]),_vm._v(" "),_c('p',[_vm._v("还需要有一个指令解析器Compile，对每个节点元素进行扫描和解析，将相关指令对应初始化成一个订阅者Watcher，并替换模板数据或者绑定相应的函数，此时当订阅者Watcher接收到相应属性的变化，就会执行对应的更新函数，从而更新视图。")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("实现数据的双向绑定：")]),_vm._v(" "),_c('p',[_vm._v("1.实现一个监听器Observer，用来劫持并监听所有属性，如果有变动的，就通知订阅者。")]),_vm._v(" "),_c('p',[_vm._v("2.实现一个订阅者Watcher，可以收到属性的变化通知并执行相应的函数，从而更新视图。")]),_vm._v(" "),_c('p',[_vm._v("3.实现一个解析器Compile，可以扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相应的订阅器。")]),_vm._v(" "),_c('p',[_c('img',{attrs:{"src":"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWFnZXMyMDE1LmNuYmxvZ3MuY29tL2Jsb2cvOTM4NjY0LzIwMTcwNS85Mzg2NjQtMjAxNzA1MjIyMjU0NTgxMzItMTQzNDYwNDMwMy5wbmc?x-oss-process=image/format,png","alt":"双向数据绑定流程图"}})]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("vue是结合数据劫持和发布订阅者模式来实现双向数据绑定的,当要读取数据的时候会自动触发方法，并且会被赋值")])])]),_vm._v(" "),_c('el-row',[_c('h4',[_vm._v("5、vue常用的修饰符")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v("按键修饰符： .delete（捕获“删除”和”退格“键） ⇒ 用法上和事件修饰符一样，挂载在v-on:后面，语法：v-on:keyup.xxx='yyy'  <inputclass = 'aaa' v-model=\"inputValue\" @keyup.delete=\"onKey\"/> ")]),_vm._v(" "),_c('p',[_vm._v("系统修饰符：.ctrl、.alt、.shift、.meta")]),_vm._v(" "),_c('p',[_vm._v("鼠标按钮修饰符：.left、.right、.middle（这些修饰符会限制处理函数仅响应特定的鼠标按钮。如：<button @click.middle =\"onClick\">A</button>  鼠标滚轮单击触发   Click默认是鼠标左键单击）")]),_vm._v(" "),_c('p',[_vm._v("其他修饰符：.lazy（在默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步 ，我们可以添加 lazy 修饰符，从而转变为使用 change事件进行同步，<input v-model.lazy=\"msg\" >）、.number、.trim")]),_vm._v(" "),_c('p',[_vm._v("事件修饰符：.prevent() 阻止默认事件； .once() 只执行一次；.stop() 阻止冒泡； ")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p')])]),_vm._v(" "),_c('el-row',[_c('h4',[_vm._v("6、v-on可以监听多个方法")])]),_vm._v(" "),_c('el-row',[_c('h4',[_vm._v("7、vue中 key 值的作用")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v("给每个节点做一个唯一标识")]),_vm._v(" "),_c('p',[_vm._v("key的作用主要是为了高效的更新虚拟DOM。")]),_vm._v(" "),_c('p',[_vm._v("另外vue中在使用相同标签名元素的过渡切换时，也会使用到key属性，其目的也是为了让vue可以区分它们，否则vue只会替换其内部属性而不会触发过渡效果。")])])]),_vm._v(" "),_c('el-row',[_c('h4',[_vm._v("8、Vue 组件中 data 为什么必须是函数？")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v("在 new Vue() 中，data 是可以作为一个对象进行操作的，然而在 component 中，data 只能以函数的形式存在，不能直接将对象赋值给它。")]),_vm._v(" "),_c('p',[_vm._v("当data选项是一个函数的时候，每个实例可以维护一份被返回对象的独立的拷贝，这样各个实例中的data不会相互影响，是独立的。")])])]),_vm._v(" "),_c('el-row',[_c('h4',[_vm._v("9、v-for的优先级比v-if高。")])]),_vm._v(" "),_c('el-row',[_c('h4',[_vm._v("10、说出至少 4 种 vue 当中的指令和它的用法")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v("v-if(判断是否隐藏)")]),_vm._v(" "),_c('p',[_vm._v("v-for(把数据遍历出来)")]),_vm._v(" "),_c('p',[_vm._v("v-bind(绑定属性)")]),_vm._v(" "),_c('p',[_vm._v("v-model(实现双向绑定)")])])]),_vm._v(" "),_c('el-row',[_c('h4',[_vm._v("11、vue中子组件调用父组件的方法")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v("在子组件中通过this.$parent.event来调用父组件的方法。")]),_vm._v(" "),_c('p',[_vm._v("在子组件里用$emit向父组件触发一个事件，父组件监听这个事件就行了。")]),_vm._v(" "),_c('p',[_vm._v("父组件把方法传入子组件中，在子组件里直接调用这个方法。")])])]),_vm._v(" "),_c('el-row',[_c('h4',[_vm._v("12、vue中父组件调用子组件的方法")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v("父组件利用ref属性操作子组件方法。")])])]),_vm._v(" "),_c('el-row',[_c('h4',[_vm._v("13、vue组件之间传值")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v("(1)父组件给子组件传值")]),_vm._v(" "),_c('p',[_vm._v(" ⇒ 父组件调用子组件的时候动态绑定属性")]),_vm._v(" "),_c('p',[_vm._v(" ⇒ <parent :dataList='dataList'></parent>")]),_vm._v(" "),_c('p',[_vm._v(" ⇒ 子组件定义props接收动态绑定的属性props: ['dataList'] ")]),_vm._v(" "),_c('p',[_vm._v(" ⇒ 子组件使用数据")]),_vm._v(" "),_c('p',[_vm._v("(2)子组件主动获取父子间的属性和方法：")]),_vm._v(" "),_c('p',[_vm._v(" ⇒ 在子组件中使用this.$parent.属性/this.$parent.方法。")]),_vm._v(" "),_c('p',[_vm._v("（3）子组件给父组件传值：")]),_vm._v(" "),_c('p',[_vm._v(" ⇒ 一、使用ref属性")]),_vm._v(" "),_c('p',[_vm._v(" ⇒ 父组件调用子组件时绑定属性ref")]),_vm._v(" "),_c('p',[_vm._v(" ⇒ <parent :ref='parent'></parent>")]),_vm._v(" "),_c('p',[_vm._v(" ⇒ 在父组件中使用this.$refs.parent.属性/this.$refs.parent.方法")]),_vm._v(" "),_c('p',[_vm._v(" ⇒ 二、使用$emit方法")]),_vm._v(" "),_c('p',[_vm._v(" ⇒ 子组件调用this.$emit('方法名‘,传值)")]),_vm._v(" "),_c('p',[_vm._v(" ⇒ 父组件通过子组件绑定的'方法名'获取传值。")]),_vm._v(" "),_c('p',[_vm._v("（4）vue页面级组件之间传值")]),_vm._v(" "),_c('p',[_vm._v(" ⇒ 使用vue-router通过跳转链接带参数传参。")]),_vm._v(" "),_c('p',[_vm._v(" ⇒ 使用本地缓存localStorge。")]),_vm._v(" "),_c('p',[_vm._v(" ⇒ 使用vuex数据管理传值。")]),_vm._v(" "),_c('p',[_vm._v("（5）说说vue的动态组件。")]),_vm._v(" "),_c('p',[_vm._v(" ⇒ 多个组件通过同一个挂载点进行组件的切换，is的值是哪个组件的名称，那么页面就会显示哪个组件。")]),_vm._v(" "),_c('p',[_vm._v(" ⇒ 主要考查面试这 component的 is属性")]),_vm._v(" "),_c('p',[_vm._v("（6）keep-alive内置组件的作用")]),_vm._v(" "),_c('p',[_vm._v(" ⇒ 可以让当前组件或者路由不经历创建和销毁，而是进行缓存，凡是被keep-alive组件包裹的组件，除了第一次以外。不会经历创建和销毁阶段的。第一次创建后就会缓存到缓存当中。")]),_vm._v(" "),_c('p',[_vm._v("(7)递归组件的用法")]),_vm._v(" "),_c('p',[_vm._v(" ⇒ 组件是可以在它们自己的模板中调用自身的。不过它们只能通过 name 选项来做这件事。")]),_vm._v(" "),_c('p',[_vm._v(" ⇒ 既然是递归组件，那么一定要有一个结束的条件，否则就会使用组件循环引用，最终出现“max stack size exceeded”的错误，也就是栈溢出。那么，我们可以使用v-if=\"false\"作为递归组件的结束条件。当遇到v-if为false时，组件将不会再进行渲染。")])])]),_vm._v(" "),_c('el-row',[_c('h4',[_vm._v("14、怎么定义vue-router的动态路由？怎么获取传过来的值？")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v("动态路由的创建，主要是使用path属性过程中，使用动态路径参数，以冒号开头，如下：")]),_vm._v(" "),_c('p',[_vm._v("{ path: '/details/:id', name: 'Details', components: Details }")]),_vm._v(" "),_c('p',[_vm._v("访问details目录下的所有文件，如果details/a，details/b等，都会映射到Details组件上。")]),_vm._v(" "),_c('p',[_vm._v("当匹配到/details下的路由时，参数值会被设置到this.$route.params下，所以通过这个属性可以获取动态参数")]),_vm._v(" "),_c('p',[_vm._v("this.$route.params.id")])])]),_vm._v(" "),_c('el-row',[_c('h4',[_vm._v("15、vue-router有哪几种路由守卫?")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v("路由守卫为：")]),_vm._v(" "),_c('p',[_vm._v("全局守卫：beforeEach")]),_vm._v(" "),_c('p',[_vm._v("后置守卫：afterEach")]),_vm._v(" "),_c('p',[_vm._v("全局解析守卫：beforeResolve")]),_vm._v(" "),_c('p',[_vm._v("路由独享守卫：beforeEnter")])])]),_vm._v(" "),_c('el-row',[_c('h4',[_vm._v("16、$route和 $router的区别是什么？")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v("$router为VueRouter的实例，是一个全局路由对象，包含了路由跳转的方法、钩子函数等。")]),_vm._v(" "),_c('p',[_vm._v("$route 是路由信息对象||跳转的路由对象，每一个路由都会有一个route对象，是一个局部对象，包含path,params,hash,query,fullPath,matched,name等路由信息参数。")])])]),_vm._v(" "),_c('el-row',[_c('h4',[_vm._v("17、vue-router响应路由参数的变化")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_c('img',{attrs:{"src":"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWFnZS4xMzVlZGl0b3IuY29tL2ZpbGVzL3VzZXJzLzc5My83OTMzNTg2LzIwMjAwMi9mVnd4SGpaVl9tN2p3LnBuZw?x-oss-process=image/format,png","alt":""}})]),_vm._v(" "),_c('p',[_vm._v("(1)用watch 检测")]),_vm._v(" "),_c('p',[_vm._v("(2)组件内导航钩子函数")]),_vm._v(" "),_c('p',[_c('img',{attrs:{"src":"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWFnZS4xMzVlZGl0b3IuY29tL2ZpbGVzL3VzZXJzLzc5My83OTMzNTg2LzIwMjAwMi9GZDh6Yld4SF8zVHNLLnBuZw?x-oss-process=image/format,png","alt":""}})])])]),_vm._v(" "),_c('el-row',[_c('h4',[_vm._v("18、vue-router 传参")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v(" (1)使用Params:")]),_vm._v(" "),_c('p',[_vm._v("只能使用name，不能使用path")]),_vm._v(" "),_c('p',[_vm._v("参数不会显示在路径上")]),_vm._v(" "),_c('p',[_vm._v("浏览器强制刷新参数会被清空")]),_vm._v(" "),_c('p',[_c('img',{attrs:{"src":"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWFnZS4xMzVlZGl0b3IuY29tL2ZpbGVzL3VzZXJzLzc5My83OTMzNTg2LzIwMjAwMi80WFpKMk83WV9JQnVxLnBuZw?x-oss-process=image/format,png","alt":""}})]),_vm._v(" "),_c('p',[_vm._v("（2）使用Query：")]),_vm._v(" "),_c('p',[_vm._v("参数会显示在路径上，刷新不会被清空")]),_vm._v(" "),_c('p',[_vm._v("name 可以使用path路径")]),_vm._v(" "),_c('p',[_c('img',{attrs:{"src":"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWFnZS4xMzVlZGl0b3IuY29tL2ZpbGVzL3VzZXJzLzc5My83OTMzNTg2LzIwMjAwMi84RXlEWHFDVF92S1ZBLnBuZw?x-oss-process=image/format,png","alt":""}})])])]),_vm._v(" "),_c('el-row',[_c('h4',[_vm._v("19、不用Vuex会带来什么问题？")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v("一、可维护性会下降，你要想修改数据，你得维护三个地方")]),_vm._v(" "),_c('p',[_vm._v("二、可读性会下降，因为一个组件里的数据，你根本就看不出来是从哪来的")]),_vm._v(" "),_c('p',[_vm._v("三、增加耦合，大量的上传派发，会让耦合性大大的增加，本来Vue用Component就是为了减少耦合，现在这么用，和组件化的初衷相背。")])])]),_vm._v(" "),_c('el-row',[_c('h4',[_vm._v("20、vuex有哪几种属性？")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v("有五种，分别是 State、 Getter、Mutation 、Action、 Module。")])])]),_vm._v(" "),_c('el-row',[_c('h4',[_vm._v("21、vuex的State特性是？")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v("一、Vuex就是一个仓库，仓库里面放了很多对象。其中state就是数据源存放地，对应于与一般Vue对象里面的data")]),_vm._v(" "),_c('p',[_vm._v("二、state里面存放的数据是响应式的，Vue组件从store中读取数据，若是store中的数据发生改变，依赖这个数据的组件也会发生更新")]),_vm._v(" "),_c('p',[_vm._v("三、它通过mapState把全局的 state 和 getters 映射到当前组件的 computed 计算属性中")])])]),_vm._v(" "),_c('el-row',[_c('h4',[_vm._v("22、vuex的Getter特性是？")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v("一、getters 可以对State进行计算操作，它就是Store的计算属性")]),_vm._v(" "),_c('p',[_vm._v("二、 虽然在组件内也可以做计算属性，但是getters 可以在多组件之间复用")]),_vm._v(" "),_c('p',[_vm._v("三、 如果一个状态只在一个组件内使用，是可以不用getters")])])]),_vm._v(" "),_c('el-row',[_c('h4',[_vm._v("23、vuex的Mutation特性是？")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v("一、Action 类似于 mutation，不同在于：")]),_vm._v(" "),_c('p',[_vm._v("二、Action 提交的是 mutation，而不是直接变更状态。")]),_vm._v(" "),_c('p',[_vm._v("三、Action 可以包含任意异步操作")])])]),_vm._v(" "),_c('el-row',[_c('h4',[_vm._v("24、Vue.js中ajax请求代码应该写在组件的methods中还是vuex的actions中？")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v("一、如果请求来的数据是不是要被其他组件公用，仅仅在请求的组件内使用，就不需要放入vuex 的state里。")]),_vm._v(" "),_c('p',[_vm._v("二、如果被其他地方复用，这个很大几率上是需要的，如果需要，请将请求放入action里，方便复用，并包装成promise返回，在调用处用async await处理返回的数据。如果不要复用这个请求，那么直接写在vue文件里很方便。")]),_vm._v(" "),_c('p',[_c('img',{attrs:{"src":"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDE4LmNuYmxvZ3MuY29tL2Jsb2cvMTU0MDQ3NS8yMDE4MTEvMTU0MDQ3NS0yMDE4MTExOTE3MzgxNjYzNC0yMTIzMzIxNTY5LmpwZw?x-oss-process=image/format,png","alt":""}})])])]),_vm._v(" "),_c('el-row',[_c('h4',[_vm._v("25、vue的路由使用步骤？")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v("1.下载vue-router路由模块；")]),_vm._v(" "),_c('p',[_vm._v("2.创建路由对象；")]),_vm._v(" "),_c('p',[_vm._v("3.配置路由规则；")]),_vm._v(" "),_c('p',[_vm._v("4.将路由对象注册为vue实例对象的成员属性")])])]),_vm._v(" "),_c('el-row',[_c('h4',[_vm._v("26、对于MVVM的理解？")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v("M（数据层） V（视图层） VM（view-model）视图模型层）用来连接（数据层）（视图层）")])])]),_vm._v(" "),_c('el-row',[_c('h4',[_vm._v("27、vue创建组件的时候data中为什么会被return出一个对象？")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v("可以保证组件的每一次调用都是创建一个新对象，组件之间不会产生影响；")])])]),_vm._v(" "),_c('el-row',[_c('h4',[_vm._v("28、vue路由的几种模式：")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v("两种：hash（默认） history   可以用model属性切换路由模式")])])]),_vm._v(" "),_c('el-row',[_c('h4',[_vm._v("29、vue如何优化页面加载：")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v("使用cdn,不要打包一些公共的文件和组件库")])])]),_vm._v(" "),_c('el-row',[_c('h4',[_vm._v("30、什么是路由懒加载：")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v("路由懒加载是通过异步的方式来加载对应的路由组件，提高页面相应速度")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p'),_vm._v(" "),_c('p'),_vm._v(" "),_c('p')])]),_vm._v(" "),_c('el-row',[_c('h4',[_vm._v("31、vue中有哪些内置组件：")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v("component 、 slot 、  transtion 、 fliters")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p'),_vm._v(" "),_c('p'),_vm._v(" "),_c('p')])]),_vm._v(" "),_c('el-row',[_c('h4',[_vm._v("32、ssr是什么")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v("服务端渲染")]),_vm._v(" "),_c('p',[_vm._v("什么是SPA")]),_vm._v(" "),_c('p',[_vm._v("PA是单页面应用程序，vue react angular 都是,整个项目只有一个页面；局部刷新而来；")])])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isShowDemo),expression:"!isShowDemo"}],staticClass:"demo_list"},[_c('el-row',[_c('el-link',{staticClass:"name",on:{"click":function($event){return _vm.showDemo('1')}}},[_vm._v("元素宽度可拉伸")])],1)],1),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShowDemo),expression:"isShowDemo"}],staticClass:"demo_wrap"},[_c('el-row',[_c('el-button',{attrs:{"type":"text"},on:{"click":_vm.backDemoList}},[_vm._v("<<返回列表")])],1),_vm._v(" "),_c('el-row',[(_vm.activeDemo == '1')?_c('elWidthChange'):_vm._e()],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":24}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 493 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(221);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_743bc4fa_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(498);
function injectStyle (ssrContext) {
  __webpack_require__(494)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-743bc4fa"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_743bc4fa_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 494 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 495 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_travel01_vue__ = __webpack_require__(222);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5127217c_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_travel01_vue__ = __webpack_require__(497);
function injectStyle (ssrContext) {
  __webpack_require__(496)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5127217c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_travel01_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5127217c_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_travel01_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 496 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 497 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"travel_01_wrap"},[_c('el-timeline',[_c('el-timeline-item',{attrs:{"timestamp":"Day1 2020-09-05","placement":"top"}},[_c('el-card',[_c('h4',[_vm._v("住宿：兰州/西宁")]),_vm._v(" "),_c('p',[_vm._v("简要行程：出发地—西宁")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v("工作人员将在机场出口处举【西北欢迎您】蓝色导游旗等候")]),_vm._v(" "),_c('p',[_vm._v("专车司机将带您乘车前往酒店，酒店前台报“姓名+电话号码”办理入住手续。无需押金。")]),_vm._v(" "),_c('p',[_vm._v("接下来，是留给您的自由行时光，您大可信步闲逛观夜景、也可自由随性觅美食。")]),_vm._v(" "),_c('p',[_vm._v("客人出发的前一天，我方接机人员会通过短信或电话联系客人请保持手机畅通。当天晚上21:00左右导游会通知第二天集合出发时间.")])])])],1),_vm._v(" "),_c('el-timeline-item',{attrs:{"timestamp":"Day2 2020-09-06","placement":"top"}},[_c('el-card',[_c('h4',[_vm._v("住宿：张掖")]),_vm._v(" "),_c('p',[_vm._v("简要行程：西宁—门源—张掖丹霞—张掖")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v("早餐后 ⇒ 经西宁转G227国道 ⇒ 张掖市")]),_vm._v(" "),_c('p',[_vm._v("沿途（车览）:【黑水库风光】、【大坂山隧道】、【7月万亩门源油菜花】、【祁连大草原】 → 翻越祁连山 → 张掖市七彩镇")]),_vm._v(" "),_c('p',[_vm._v("参观"),_c('span',{staticStyle:{"color":"red"}},[_vm._v("【张掖丹霞国家地质公园】")]),_vm._v("（游览约2小时，含门票及区间车）。")]),_vm._v(" "),_c('p',[_vm._v("晚餐 → 观看实景沙秀"),_c('span',{staticStyle:{"color":"red"}},[_vm._v("《回道张掖》")])])])])],1),_vm._v(" "),_c('el-timeline-item',{attrs:{"timestamp":"Day3 2020-09-07","placement":"top"}},[_c('el-card',[_c('h4',[_vm._v("住宿：敦煌")]),_vm._v(" "),_c('p',[_vm._v("简要行程：张掖—（约220公里，约2.5小时）-远观嘉峪关（嘉峪关城楼）—（约380公里，约5小时）-敦煌鸣沙山")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v("早餐 ⇒ 穿越河西走廊 ⇒ 嘉峪关 ⇒ 万里长城西端的"),_c('span',{staticStyle:{"color":"red"}},[_vm._v("【嘉峪关城楼】")]),_vm._v("（不含电瓶车20/人）")]),_vm._v(" "),_c('p',[_vm._v("午餐 ⇒ "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("【鸣沙山月牙泉】")]),_vm._v("（不含电瓶车20元人）")]),_vm._v(" "),_c('p',[_vm._v("晚餐烤全羊 ⇒ 酒店")])])])],1),_vm._v(" "),_c('el-timeline-item',{attrs:{"timestamp":"Day4 2020-09-08","placement":"top"}},[_c('el-card',[_c('h4',[_vm._v("住宿：德令哈")]),_vm._v(" "),_c('p',[_vm._v("简要行程：敦煌——莫高窟—（约340公里，约5小时）-翡翠湖—（约200公里，约3小时）-德令哈")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v(" ⇒ 上午参观游览世界文化遗产，我国四大石窟之一的"),_c('span',{staticStyle:{"color":"red"}},[_vm._v("【莫高窟】")]),_vm._v("（参观约3小时）")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_c('span',{staticStyle:{"color":"red"}},[_vm._v("莫高窟门票重要说明：")])]),_vm._v(" "),_c('p',[_vm._v("1、淡季：6月30号及之前班期费用包含莫高窟A类票（8个实体洞窟+莫高窟数展中心+往返莫高窟交通费），如莫高窟有特殊接待或无票状态或景区关闭，无法安排游览，当地现退门票或安排敦煌莫高窟姊妹窟—西千佛洞；  ")]),_vm._v(" "),_c('p',[_vm._v("2、旺季：7月1号至8月31号班期及国庆节9月28至10月4号班期费用包含莫高窟B类票（无数字影院，4个实体洞窟+免费参观敦煌石窟文物保护研究陈列中心等+往返莫高窟交通费，B类只能现场购买）票价100元/成人，门票差价已在报价中减去，故无费用可退，请周知。 如有游客介意参观应急票，可自行在官网预约莫高窟正常票，如您自行预约成功，本团现退100元/人门票费用，给您带来不便还望谅解。如莫高窟有特殊接待或无票状态或景区关闭，无法安排游览，当地现退100元/成人门票或安排敦煌莫高窟姊妹窟—西千佛洞，并退门票差价；")]),_vm._v(" "),_c('p',[_vm._v("3、淡季莫高窟预约按照下单前后顺序依次进行预约，故同团中会出现预约莫高窟参观时间不一致亦或部分团友为正常票，部分团友为B类票的情况；预约成功后退票将产生手续费，具体金额参照《敦煌市物价局文件：敦价发【2015】85号》文件。")]),_vm._v(" "),_c('p',[_vm._v("4、导游会根据莫高窟实际预约时间，调整景点参观顺序，给您带来不变敬请谅解！")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v(" ⇒ 后乘车翻越当金山 → 穿越柴达木盆地 → 欣赏沿途戈壁大漠的独特风光。")]),_vm._v(" "),_c('p',[_vm._v(" ⇒ "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("【网红打卡地-翡翠湖】")])]),_vm._v(" "),_c('p',[_vm._v("* 如翡翠湖因道路问题无法参观无费用可退")]),_vm._v(" "),_c('p',[_vm._v(" ⇒ 德令哈入住酒店 → 途中可观茫茫的柴达木盆地。")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_c('span',{staticStyle:{"color":"red"}},[_vm._v("备注：路途中中餐无法安排，故今天中餐安排为路餐自热米饭或为简餐（牛奶，面包，火腿，榨菜）")])])])])],1),_vm._v(" "),_c('el-timeline-item',{attrs:{"timestamp":"Day5 2020-09-09","placement":"top"}},[_c('el-card',[_c('h4',[_vm._v("住宿：文迦木屋别墅")]),_vm._v(" "),_c('p',[_vm._v("简要行程：德令哈—（约220公里，约3小时）-茶卡盐湖—（约150公里，约2.5小时）-青海湖")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v("早餐 ⇒ "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("【茶卡盐湖天空一号】")]),_vm._v("（游览约2小时，含门票，区间车自理）")]),_vm._v(" "),_c('p',[_vm._v("* 若遇茶卡盐湖景区闭园无法参观，我们将取消该景点的参观并退还茶卡盐湖天空一号景区门票，给您带来不便，敬请谅解。")]),_vm._v(" "),_c('p',[_vm._v("⇒ 午餐 → 翻越橡皮山沿环湖南路经黑马河 ⇒ 青海湖参观"),_c('span',{staticStyle:{"color":"red"}},[_vm._v("【青海湖二郎剑景区】")]),_vm._v("（游览约2小时，含门票，电瓶车自理）")])])])],1),_vm._v(" "),_c('el-timeline-item',{attrs:{"timestamp":"Day6 2020-09-10","placement":"top"}},[_c('el-card',[_c('h4',[_vm._v("住宿：西宁")]),_vm._v(" "),_c('p',[_vm._v("简要行程：文迦牧场—（约100公里，约1.5小时）-互助彩虹部落")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v("西宁 ⇒ 中华枸杞养生苑 ⇒ 互助 ⇒ 西宁")]),_vm._v(" "),_c('p',[_vm._v("早餐 ⇒ "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("【文迦牧场】")]),_vm._v(" ⇒ "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("【中华枸杞养生苑】")]),_vm._v("（含景区首道大门票；游览时间约为1小时左右） ⇒ "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("【彩虹部落土族园】")])])])])],1),_vm._v(" "),_c('el-timeline-item',{attrs:{"timestamp":"Day7 2020-09-11","placement":"top"}},[_c('el-card',[_c('h4',[_vm._v("住宿：西宁/兰州")]),_vm._v(" "),_c('p',[_vm._v("简要行程：藏文化博物馆—塔尔寺—西宁")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v("早餐 ⇒ "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("【中国藏文化博物馆】")]),_vm._v("（游览时间约2小时）")]),_vm._v(" "),_c('p',[_vm._v("午餐 ⇒ "),_c('span',{staticStyle:{"color":"red"}},[_vm._v("【塔尔寺】")]),_vm._v("（游览约2小时，含门票，不含讲解费,区间车）")])])])],1),_vm._v(" "),_c('el-timeline-item',{attrs:{"timestamp":"Day8 2020-09-12","placement":"top"}},[_c('el-card',[_c('h4',[_vm._v("住宿：家")]),_vm._v(" "),_c('p',[_vm._v("简要行程：送团")]),_vm._v(" "),_c('div',{staticClass:"border_radius"},[_c('p',[_vm._v("早餐 ⇒ 自由活动 ⇒ 根据航班时间安排送机")]),_vm._v(" "),_c('p',[_vm._v("* 我司师傅会提前一天联系到您，和您核对送机时间、地点；送机为赠送，不用不退")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_c('span',{staticStyle:{"color":"blue"}},[_vm._v("【交通提示】")])]),_vm._v(" "),_c('p',[_vm._v("近期机场安检严格，加上市区交通拥堵，为保证您不误飞机，请预留足够的时间前往机场。")]),_vm._v(" "),_c('p',[_c('span',{staticStyle:{"color":"blue"}},[_vm._v("【交通提示】")])]),_vm._v(" "),_c('p',[_vm._v("西宁市区（约40公里，约1小时）西宁曹家堡机场")])])])],1)],1),_vm._v(" "),_c('br'),_vm._v(" "),_c('el-divider',{attrs:{"content-position":"left"}},[_vm._v("装备")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('el-divider',{attrs:{"content-position":"left"}},[_vm._v("费用说明")]),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('el-divider',{attrs:{"content-position":"left"}},[_vm._v("精选酒店")]),_vm._v(" "),_vm._m(2)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border_radius"},[_c('h4',[_vm._v("【费用包含】")]),_vm._v(" "),_c('p',[_vm._v("1、带上拉杆箱（平时可丢车上或者宾馆），还可配个摄影包或小腰包活动时候用")]),_vm._v(" "),_c('p',[_vm._v("2、户外三件套（冲锋衣、抓绒）保暖衣，太阳镜、遮阳帽、旅游用鞋；喜爱拍照的的美眉带几件颜色的长裙在青海湖、茶卡盐湖、拍摄用。")]),_vm._v(" "),_c('p',[_vm._v("3、感冒药、肠胃药、维它命、创可贴、风油精")]),_vm._v(" "),_c('p',[_vm._v("4、防晒霜＋保湿润肤水＋护手霜＋护唇（MM必备）；")]),_vm._v(" "),_c('p',[_vm._v("5、各种数码产品及充电器、摄影器材；")]),_vm._v(" "),_c('p',[_vm._v("6、备一些干粮、水果和零食，保温水壶；")]),_vm._v(" "),_c('p',[_vm._v("7、洗漱用品，换洗衣物；")]),_vm._v(" "),_c('p',[_vm._v("8、身份证件，这是重要的。")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border_radius"},[_c('h4',[_vm._v("【费用包含】")]),_vm._v(" "),_c('p',[_vm._v(" 1、用车：全程空调旅游车，保证一人一座（含过路、过桥费）；")]),_vm._v(" "),_c('p',[_vm._v("2、住宿：西宁标间3晚、德令哈1晚、敦煌酒店1晚、青海湖/西海镇1晚  张掖/临泽1晚（共7晚），酒店标准当地酒店准四标准、独立卫生间、电视、部分有WIFI。如行程中所标注酒店无法入住，尽量安排同等档次酒店入住。")]),_vm._v(" "),_c('p',[_vm._v("3、门票：含塔尔寺、茶卡盐湖·天空壹号、翡翠湖、南八仙雅丹地貌、敦煌莫高窟、鸣沙山月牙泉、张掖七彩丹霞、青海湖、祁连大草原；（赠送景点不去不退）；")]),_vm._v(" "),_c('p',[_vm._v("4、用餐：全程7早，11正餐；")]),_vm._v(" "),_c('p',[_vm._v("5、保险：包含旅行社责任险")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border_radius"},[_c('h4',[_vm._v("【费用包含】")]),_vm._v(" "),_c('p',[_c('span',{staticStyle:{"color":"blue"}},[_vm._v("兰州：")]),_vm._v("安课慈宾馆、新西湖宾馆")]),_vm._v(" "),_c('p',[_c('span',{staticStyle:{"color":"blue"}},[_vm._v("西宁：")]),_vm._v("喆啡酒店、自然里酒店、中鹏酒店、灏岚酒店、万枫酒店、维也纳酒店、禧玥酒店、希岸酒店、凯槟酒店、中发源饭店或同级")]),_vm._v(" "),_c('p',[_c('span',{staticStyle:{"color":"blue"}},[_vm._v("德令哈：")]),_vm._v("海子花园、腾瑞祥酒店、蓝天品质、东方凯悦酒店、云湖酒店、德都大酒店等同级酒店")]),_vm._v(" "),_c('p',[_c('span',{staticStyle:{"color":"blue"}},[_vm._v("青海湖/西海镇：")]),_vm._v("文迦星空别墅 金银滩藏家风情园")]),_vm._v(" "),_c('p',[_c('span',{staticStyle:{"color":"blue"}},[_vm._v("敦煌：")]),_vm._v("天润国际酒店、天沁云水酒店、方舟大酒店、天河湾酒店等同级酒店")]),_vm._v(" "),_c('p',[_c('span',{staticStyle:{"color":"blue"}},[_vm._v("张掖：")]),_vm._v("民俗小镇、邮电宾馆、盛华酒店、华侨酒店、顺祥酒店、凯艺酒店、新城酒店等同级酒店")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 498 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"travel_wrap"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShowList),expression:"isShowList"}],staticClass:"list"},[_c('el-row',[_c('el-link',{staticClass:"name",on:{"click":function($event){return _vm.showOne('1')}}},[_vm._v("西北大环线（2020-09-05 至 2020-09-12）")])],1)],1),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isShowList),expression:"!isShowList"}],staticClass:"one_wrap"},[_c('el-row',[_c('el-button',{attrs:{"type":"text"},on:{"click":_vm.backList}},[_vm._v("<<返回列表")])],1),_vm._v(" "),_c('el-row',[(_vm.active == '1')?_c('travel01'):_vm._e()],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":24}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 499 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(223);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ec935926_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(510);
function injectStyle (ssrContext) {
  __webpack_require__(500)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ec935926"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ec935926_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 500 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 501 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_version01_vue__ = __webpack_require__(224);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6ea56181_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_version01_vue__ = __webpack_require__(503);
function injectStyle (ssrContext) {
  __webpack_require__(502)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6ea56181"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_version01_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6ea56181_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_version01_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 502 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 503 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"version_01_wrap"},[_c('div',{staticClass:"modal_wrap skill_wrap"},[_c('el-card',{staticClass:"box-card"},[_c('div',{staticClass:"modal_title",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("专业技能")])]),_vm._v(" "),_c('el-row',{staticClass:"skill"},[_c('el-divider',{attrs:{"content-position":"left"}},[_vm._v("基础技能")]),_vm._v(" "),_c('el-row',[_c('label',{staticClass:"name"},[_vm._v("HTML(5)")]),_vm._v(" "),_c('label',{staticClass:"name"},[_vm._v("CSS(3)")]),_vm._v(" "),_c('label',{staticClass:"name"},[_vm._v("LESS")]),_vm._v(" "),_c('label',{staticClass:"name"},[_vm._v("JavaScript")]),_vm._v(" "),_c('label',{staticClass:"name"},[_vm._v("Ajax")])]),_vm._v(" "),_c('el-divider',{attrs:{"content-position":"left"}},[_vm._v("使用过的框架")]),_vm._v(" "),_c('el-row',[_c('label',{staticClass:"name"},[_vm._v("jQuery")]),_vm._v(" "),_c('label',{staticClass:"name"},[_vm._v("VUE")])]),_vm._v(" "),_c('el-divider',{attrs:{"content-position":"left"}},[_vm._v("使用过的插件")]),_vm._v(" "),_c('el-row',[_c('label',{staticClass:"name"},[_vm._v("Bootstrap")]),_vm._v(" "),_c('label',{staticClass:"name"},[_vm._v("jQuery-easyUI")]),_vm._v(" "),_c('label',{staticClass:"name"},[_vm._v("eCharts")]),_vm._v(" "),_c('label',{staticClass:"name"},[_vm._v("百度地图")]),_vm._v(" "),_c('label',{staticClass:"name"},[_vm._v("Element UI")]),_vm._v(" "),_c('label',{staticClass:"name"},[_vm._v("underscore")])]),_vm._v(" "),_c('el-divider',{attrs:{"content-position":"left"}},[_vm._v("了解")]),_vm._v(" "),_c('el-row',[_c('label',{staticClass:"name"},[_vm._v("React")]),_vm._v(" "),_c('label',{staticClass:"name"},[_vm._v("AngularJS")]),_vm._v(" "),_c('label',{staticClass:"name"},[_vm._v("gulp")]),_vm._v(" "),_c('label',{staticClass:"name"},[_vm._v("webpack")]),_vm._v(" "),_c('label',{staticClass:"name"},[_vm._v("Photoshop")]),_vm._v(" "),_c('label',{staticClass:"name"},[_vm._v("yarn")]),_vm._v(" "),_c('label',{staticClass:"name"},[_vm._v("npm")]),_vm._v(" "),_c('label',{staticClass:"name"},[_vm._v("npm")]),_vm._v(" "),_c('label',{staticClass:"name"},[_vm._v("npm")]),_vm._v(" "),_c('label',{staticClass:"name"},[_vm._v("npm")])])],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"modal_wrap work_wrap"},[_c('el-card',{staticClass:"box-card"},[_c('div',{staticClass:"modal_title",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("工作经历")])]),_vm._v(" "),_c('el-timeline',_vm._l((_vm.workExperienceData),function(item,i){return _c('el-timeline-item',{key:i,attrs:{"icon":item.icon,"type":item.type,"color":item.color,"size":item.size,"timestamp":item.time}},[_vm._v("\n                      "+_vm._s(item.company + '  ' + item.post)+"\n                    ")])}),1)],1)],1),_vm._v(" "),_c('div',{staticClass:"modal_wrap project_wrap"},[_c('el-card',{staticClass:"box-card"},[_c('div',{staticClass:"modal_title",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("项目经验")])]),_vm._v(" "),_c('el-timeline',_vm._l((_vm.projectData),function(item,i){return _c('el-timeline-item',{key:i,attrs:{"icon":item.icon,"type":item.type,"color":item.color,"size":item.size,"timestamp":item.time}},[_c('h3',{domProps:{"textContent":_vm._s(item.name)}}),_vm._v(" "),_c('dl',[_c('dt',[_vm._v("系统描述：")]),_vm._v(" "),_c('dd',{domProps:{"innerHTML":_vm._s(item.discript)}}),_vm._v(" "),_c('dt',[_vm._v("工作内容/收获：")]),_vm._v(" "),_c('dd',{domProps:{"innerHTML":_vm._s(item.workContent)}})])])}),1)],1)],1),_vm._v(" "),_c('div',{staticClass:"modal_wrap self_evaluation_wrap"},[_c('el-card',{staticClass:"box-card"},[_c('div',{staticClass:"modal_title",attrs:{"slot":"header"},slot:"header"},[_c('span',[_vm._v("自我评价")])]),_vm._v(" "),_c('ol',[_c('li',[_vm._v("适应能力较强，自制力较好，执行力强。")]),_vm._v(" "),_c('li',[_vm._v("性格开朗、自信热情、好学、有责任心、能吃苦耐劳、富有时间观念、有团队合作精神和集体荣誉感。")]),_vm._v(" "),_c('li',[_vm._v("优点：执行力强、工作认真、善于团队合作、好学、乐于助人、爱干净。")]),_vm._v(" "),_c('li',[_vm._v("缺点：急性子，谁还没个缺点呢~")])])])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 504 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_version02_vue__ = __webpack_require__(225);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4583e6b8_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_version02_vue__ = __webpack_require__(506);
function injectStyle (ssrContext) {
  __webpack_require__(505)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4583e6b8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_version02_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4583e6b8_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_version02_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 505 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 506 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"version_02_wrap"},[_c('el-divider',{attrs:{"content-position":"left"}},[_vm._v("专业技能")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('el-divider',{attrs:{"content-position":"left"}},[_vm._v("工作经历")]),_vm._v(" "),_c('div',{staticClass:"modal_wrap work_wrap"},[_c('el-timeline',_vm._l((_vm.workExperienceData),function(item,i){return _c('el-timeline-item',{key:i,attrs:{"icon":item.icon,"type":item.type,"color":item.color,"size":item.size,"timestamp":item.time}},[_vm._v("\n                  "+_vm._s(item.company + '  ' + item.post)+"\n                ")])}),1)],1),_vm._v(" "),_c('el-divider',{attrs:{"content-position":"left"}},[_vm._v("项目经验")]),_vm._v(" "),_c('div',{staticClass:"modal_wrap project_wrap"},[_c('el-timeline',_vm._l((_vm.projectData),function(item,i){return _c('el-timeline-item',{key:i,attrs:{"icon":item.icon,"type":item.type,"color":item.color,"size":item.size,"timestamp":item.time}},[_c('h3',{domProps:{"textContent":_vm._s(item.name)}}),_vm._v(" "),_c('dl',[_c('dt',[_vm._v("系统描述：")]),_vm._v(" "),_c('dd',{domProps:{"innerHTML":_vm._s(item.discript)}}),_vm._v(" "),_c('dt',[_vm._v("工作内容/收获：")]),_vm._v(" "),_c('dd',{domProps:{"innerHTML":_vm._s(item.workContent)}})])])}),1)],1),_vm._v(" "),_c('el-divider',{attrs:{"content-position":"left"}},[_vm._v("自我评价")]),_vm._v(" "),_vm._m(1)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal_wrap skill_wrap"},[_c('div',{staticClass:"border_radius"},[_c('dl',[_c('dt',[_c('label',{staticClass:"name"},[_vm._v("【基础技能】")])]),_vm._v(" "),_c('dd',[_vm._v("HTML(5)、CSS(3)、LESS、JavaScript、Ajax")]),_vm._v(" "),_c('dt',[_c('label',{staticClass:"name"},[_vm._v("【使用过的框架】")])]),_vm._v(" "),_c('dd',[_vm._v("jQuery、VUE")]),_vm._v(" "),_c('dt',[_c('label',{staticClass:"name"},[_vm._v("【使用过的插件】")])]),_vm._v(" "),_c('dd',[_vm._v("Bootstrap、jQuery-easyUI、百度地图、Element UI、underscore")]),_vm._v(" "),_c('dt',[_c('label',{staticClass:"name"},[_vm._v("【了解】")])]),_vm._v(" "),_c('dd',[_vm._v("React AngularJS、gulp、webpack、Photoshop、yarn、npm")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal_wrap self_evaluation_wrap"},[_c('ol',[_c('li',[_vm._v("适应能力较强，自制力较好，执行力强。")]),_vm._v(" "),_c('li',[_vm._v("性格开朗、自信热情、好学、有责任心、能吃苦耐劳、富有时间观念、有团队合作精神和集体荣誉感。")]),_vm._v(" "),_c('li',[_vm._v("优点：执行力强、工作认真、善于团队合作、好学、乐于助人、爱干净。")]),_vm._v(" "),_c('li',[_vm._v("缺点：急性子，谁还没个缺点呢~")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 507 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_version03_vue__ = __webpack_require__(226);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fe9c9e62_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_version03_vue__ = __webpack_require__(509);
function injectStyle (ssrContext) {
  __webpack_require__(508)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fe9c9e62"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_version03_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fe9c9e62_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_version03_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 508 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 509 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"version_03_wrap"},[_vm._m(0),_vm._v(" "),_c('el-divider',{attrs:{"content-position":"left"}},[_vm._v("教育背景")]),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('el-divider',{attrs:{"content-position":"left"}},[_vm._v("专业技能")]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('el-divider',{attrs:{"content-position":"left"}},[_vm._v("工作经历")]),_vm._v(" "),_c('div',{staticClass:"modal_wrap work_wrap"},[_c('el-timeline',_vm._l((_vm.workExperienceData),function(item,i){return _c('el-timeline-item',{key:i,attrs:{"icon":item.icon,"type":item.type,"color":item.color,"size":item.size,"timestamp":item.time}},[_vm._v("\n                  "+_vm._s(item.company + '  ' + item.post)+"\n                ")])}),1)],1),_vm._v(" "),_vm._m(3),_vm._v(" "),_c('el-divider',{attrs:{"content-position":"left"}},[_vm._v("项目经验")]),_vm._v(" "),_c('div',{staticClass:"modal_wrap project_wrap"},[_c('el-timeline',_vm._l((_vm.projectData),function(item,i){return _c('el-timeline-item',{key:i,attrs:{"icon":item.icon,"type":item.type,"color":item.color,"size":item.size,"timestamp":item.time}},[_c('h3',{domProps:{"textContent":_vm._s(item.name)}}),_vm._v(" "),_c('dl',[_c('dt',[_vm._v("系统描述：")]),_vm._v(" "),_c('dd',{domProps:{"innerHTML":_vm._s(item.discript)}}),_vm._v(" "),_c('dt',[_vm._v("工作内容/收获：")]),_vm._v(" "),_c('dd',{domProps:{"innerHTML":_vm._s(item.workContent)}})])])}),1)],1),_vm._v(" "),_c('el-divider',{attrs:{"content-position":"left"}},[_vm._v("自我评价")]),_vm._v(" "),_vm._m(4)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal_wrap basic_info"},[_c('h1',{staticClass:"t_a_c"},[_vm._v("邱凤鸣    Web前端开发工程师")]),_vm._v(" "),_c('table',{staticClass:"basic_info_t"},[_c('tbody',[_c('tr',[_c('td',{staticClass:"t_a_r"},[_vm._v("1994年11月")]),_vm._v(" "),_c('td',{staticClass:"t_a_l"},[_vm._v("15820434189")])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"t_a_r"},[_vm._v("籍贯：广西")]),_vm._v(" "),_c('td',{staticClass:"t_a_l"})]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"t_a_r"},[_vm._v("现居：深圳")]),_vm._v(" "),_c('td',{staticClass:"t_a_l"})]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"t_a_r"},[_vm._v("学历：本科")]),_vm._v(" "),_c('td',{staticClass:"t_a_l"},[_vm._v("cily_qfm@163.com")])])])]),_vm._v(" "),_c('div',{staticClass:"t_a_c img_wrap"},[_vm._v("头像")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal_wrap education_wrap"},[_c('table',[_c('tbody',[_c('tr',[_c('td',{staticClass:"t-a-r",attrs:{"width":"300"}},[_c('img',{attrs:{"src":"https://pt.tjpu.edu.cn/zfca/login/logo/logo_school.png","alt":"天津工业大学"}})]),_vm._v(" "),_c('td',[_c('h3',[_vm._v("2012-09 至 2016-06  天津工业大学")]),_vm._v(" "),_c('p',[_vm._v("学院：电子与信息工程学院")]),_vm._v(" "),_c('p',[_vm._v("专业：生物医学工程")])])])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal_wrap skill_wrap"},[_c('div',{staticClass:"border_radius"},[_c('dl',[_c('dt',[_c('label',{staticClass:"name"},[_vm._v("【基础技能】")])]),_vm._v(" "),_c('dd',[_vm._v("HTML(5)、CSS(3)、LESS、JavaScript、Ajax")]),_vm._v(" "),_c('dt',[_c('label',{staticClass:"name"},[_vm._v("【使用过的框架】")])]),_vm._v(" "),_c('dd',[_vm._v("jQuery + Bootstrap、jQuery + Jalor、VUE + Element UI")]),_vm._v(" "),_c('dt',[_c('label',{staticClass:"name"},[_vm._v("【使用过的插件】")])]),_vm._v(" "),_c('dd',[_vm._v("Bootstrap、jQuery-easyUI、Echarts、百度地图、Element UI")]),_vm._v(" "),_c('dt',[_c('label',{staticClass:"name"},[_vm._v("【了解】")])]),_vm._v(" "),_c('dd',[_vm._v("ES6、React、AngularJS、gulp、webpack、Photoshop、yarn、npm")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('br'),_c('br')])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal_wrap self_evaluation_wrap"},[_c('ol',[_c('li',[_vm._v("适应能力较强，自制力较好，执行力强。")]),_vm._v(" "),_c('li',[_vm._v("性格开朗、自信热情、好学、有责任心、能吃苦耐劳、富有时间观念、有团队合作精神和集体荣誉感。")]),_vm._v(" "),_c('li',[_vm._v("优点：执行力强、工作认真、善于团队合作、好学、乐于助人、爱干净。")]),_vm._v(" "),_c('li',[_vm._v("缺点：急性子，谁还没个缺点呢~")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 510 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"resume_wrap"},[_c('version03')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 511 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(227);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_05fd3f3f_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(522);
function injectStyle (ssrContext) {
  __webpack_require__(512)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-05fd3f3f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_05fd3f3f_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 512 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 513 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_js_vue__ = __webpack_require__(228);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8380fe26_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_js_vue__ = __webpack_require__(515);
function injectStyle (ssrContext) {
  __webpack_require__(514)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8380fe26"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_js_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8380fe26_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_js_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 514 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 515 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"interview_js_wrap"},[_c('el-row',[_c('el-col',{staticClass:"question",attrs:{"span":24}},[_c('i',{staticClass:"el-icon-question"}),_vm._v("1、前端性能优化方案")]),_vm._v(" "),_c('el-col',{staticClass:"answer",attrs:{"span":24}})],1),_vm._v(" "),_c('el-collapse',{staticClass:"question_answer",on:{"change":_vm.handleChange},model:{value:(_vm.activeNames),callback:function ($$v) {_vm.activeNames=$$v},expression:"activeNames"}},[_c('el-collapse-item',{attrs:{"title":"1、前端性能优化方案","name":"1"}},[_c('div',[_vm._v("（1）减少 HTTP请求数")]),_vm._v(" "),_c('p',[_vm._v("1）从设计实现层面简化页面")]),_vm._v(" "),_c('p',[_vm._v("2）合理设置 HTTP缓存")]),_vm._v(" "),_c('p',[_vm._v("3）资源合并与压缩")]),_vm._v(" "),_c('p',[_vm._v("4）CSS Sprites")]),_vm._v(" "),_c('p',[_vm._v("5）Inline Images")]),_vm._v(" "),_c('p',[_vm._v("6）Lazy Load Images")]),_vm._v(" "),_c('div',[_vm._v("（2）将外部脚本置底（将脚本内容在页面信息内容加载后再加载）")]),_vm._v(" "),_c('div',[_vm._v("（3） 异步执行 inline脚本(其实原理和上面是一样，保证脚本在页面内容后面加载。)")]),_vm._v(" "),_c('div',[_vm._v("（4） Lazy Load Javascript（只有在需要加载的时候加载，在一般情况下并不加载信息内容。）")]),_vm._v(" "),_c('div',[_vm._v("（5） 将 CSS放在 HEAD中")]),_vm._v(" "),_c('div',[_vm._v("（6） 异步请求 Callback（就是将一些行为样式提取出来，慢慢的加载信息的内容）")]),_vm._v(" "),_c('div',[_vm._v("（7） 减少不必要的 HTTP跳转")]),_vm._v(" "),_c('div',[_vm._v("（8） 避免重复的资源请求")]),_vm._v(" "),_c('div',[_vm._v("（9） 减少浏览器的repaint和reflow")]),_vm._v(" "),_c('div',[_vm._v("（10） 慎用 with")]),_vm._v(" "),_c('div',[_vm._v("（11） 避免使用 eval和 Function")]),_vm._v(" "),_c('div',[_vm._v("（12） 减少作用域链查找，要减少作用域链查找还应该减少闭包的使用。")]),_vm._v(" "),_c('div',[_vm._v("（13） Javascript中的数据访问包括直接量 (字符串、正则表达式 )、变量、对象属性以及数组，其中对直接量和局部变量的访问是最快的，对对象属性以及数组的访问需要更大的开销")]),_vm._v(" "),_c('div',[_vm._v("（14） 在 Javascript中使用\"+\" 号来拼接字符串效率是比较低的，因为每次运行都会开辟新的内存并生成新的字符串变量，然后将拼接结果赋值给新变量。与之相比更为高效的做法是使用数组的 join方法，即将需要拼接的字符串放在数组中最后调用其 join方法得到结果。不过由于使用数组也有一定的开销，因此当需要拼接的字符串较多的时候可以考虑用此方法。")]),_vm._v(" "),_c('div',[_vm._v("（15） 对 HTML本身的优化")]),_vm._v(" "),_c('div',[_vm._v("（16） Image压缩")])]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"2、跨域解决方案","name":"2"}},[_c('dl',[_c('dt',[_vm._v("（1）通过jsonp跨域")]),_vm._v(" "),_c('dd',[_c('p',[_vm._v("1）原生实现：")]),_vm._v(" "),_c('pre',{staticClass:"xml hljs"},[_vm._v("                            "),_c('code',{staticClass:"html"},[_vm._v(" \n"),_c('span',{staticClass:"hljs-tag"},[_vm._v("<"),_c('span',{staticClass:"hljs-name"},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n"),_c('span',{staticClass:"javascript"},[_vm._v("\n    "),_c('span',{staticClass:"hljs-keyword"},[_vm._v("var")]),_vm._v(" script = "),_c('span',{staticClass:"hljs-built_in"},[_vm._v("document")]),_vm._v(".createElement("),_c('span',{staticClass:"hljs-string"},[_vm._v("'script'")]),_vm._v(");\n    script.type = "),_c('span',{staticClass:"hljs-string"},[_vm._v("'text/javascript'")]),_vm._v(";\n                        \n    "),_c('span',{staticClass:"hljs-comment"},[_vm._v("// 传参一个回调函数名给后端，方便后端返回时执行这个在前端定义的回调函数")]),_vm._v("\n    script.src = "),_c('span',{staticClass:"hljs-string"},[_vm._v("'http://www.domain2.com:8080/login?user=admin&callback=handleCallback'")]),_vm._v(";\n    "),_c('span',{staticClass:"hljs-built_in"},[_vm._v("document")]),_vm._v(".head.appendChild(script);\n                        \n    "),_c('span',{staticClass:"hljs-comment"},[_vm._v("// 回调执行函数")]),_vm._v("\n    "),_c('span',{staticClass:"hljs-function"},[_c('span',{staticClass:"hljs-keyword"},[_vm._v("function")]),_vm._v(" "),_c('span',{staticClass:"hljs-title"},[_vm._v("handleCallback")]),_vm._v("("),_c('span',{staticClass:"hljs-params"},[_vm._v("res")]),_vm._v(") ")]),_vm._v("{\n        alert("),_c('span',{staticClass:"hljs-built_in"},[_vm._v("JSON")]),_vm._v(".stringify(res));\n    }\n")]),_c('span',{staticClass:"hljs-tag"},[_vm._v("</"),_c('span',{staticClass:"hljs-name"},[_vm._v("script")]),_vm._v(">")]),_vm._v("\n                            ")]),_vm._v("\n                        ")]),_vm._v(" "),_c('p',[_vm._v("服务端返回如下（返回时即执行全局函数）：")]),_vm._v(" "),_c('pre',{staticClass:"javascript hljs"},[_c('code',{staticClass:"js",staticStyle:{"word-break":"break-word","white-space":"initial"}},[_vm._v("handleCallback({"),_c('span',{staticClass:"hljs-string"},[_vm._v("\"status\"")]),_vm._v(": "),_c('span',{staticClass:"hljs-literal"},[_vm._v("true")]),_vm._v(", "),_c('span',{staticClass:"hljs-string"},[_vm._v("\"user\"")]),_vm._v(": "),_c('span',{staticClass:"hljs-string"},[_vm._v("\"admin\"")]),_vm._v("})")])])]),_vm._v(" "),_c('dd',[_c('p',[_vm._v("2）jquery ajax：")]),_vm._v(" "),_c('pre',{staticClass:"javascript hljs"},[_c('code',{staticClass:"js"},[_vm._v("$.ajax({\n                            "),_c('span',{staticClass:"hljs-attr"},[_vm._v("url")]),_vm._v(": "),_c('span',{staticClass:"hljs-string"},[_vm._v("'http://www.domain2.com:8080/login'")]),_vm._v(",\n                            "),_c('span',{staticClass:"hljs-attr"},[_vm._v("type")]),_vm._v(": "),_c('span',{staticClass:"hljs-string"},[_vm._v("'get'")]),_vm._v(",\n                            "),_c('span',{staticClass:"hljs-attr"},[_vm._v("dataType")]),_vm._v(": "),_c('span',{staticClass:"hljs-string"},[_vm._v("'jsonp'")]),_vm._v(",  "),_c('span',{staticClass:"hljs-comment"},[_vm._v("// 请求方式为jsonp")]),_vm._v("\n                            "),_c('span',{staticClass:"hljs-attr"},[_vm._v("jsonpCallback")]),_vm._v(": "),_c('span',{staticClass:"hljs-string"},[_vm._v("\"handleCallback\"")]),_vm._v(",    "),_c('span',{staticClass:"hljs-comment"},[_vm._v("// 自定义回调函数名")]),_vm._v("\n                            "),_c('span',{staticClass:"hljs-attr"},[_vm._v("data")]),_vm._v(": {}\n                        });")])])]),_vm._v(" "),_c('dd',[_c('p',[_vm._v("3.）vue.js：")]),_vm._v(" "),_c('pre',{staticClass:"javascript hljs"},[_c('code',{staticClass:"js"},[_c('span',{staticClass:"hljs-keyword"},[_vm._v("this")]),_vm._v(".$http.jsonp("),_c('span',{staticClass:"hljs-string"},[_vm._v("'http://www.domain2.com:8080/login'")]),_vm._v(", {\n                            "),_c('span',{staticClass:"hljs-attr"},[_vm._v("params")]),_vm._v(": {},\n                            "),_c('span',{staticClass:"hljs-attr"},[_vm._v("jsonp")]),_vm._v(": "),_c('span',{staticClass:"hljs-string"},[_vm._v("'handleCallback'")]),_vm._v("\n                        }).then("),_c('span',{staticClass:"hljs-function"},[_vm._v("("),_c('span',{staticClass:"hljs-params"},[_vm._v("res")]),_vm._v(") =>")]),_vm._v(" {\n                            "),_c('span',{staticClass:"hljs-built_in"},[_vm._v("console")]),_vm._v(".log(res); \n                        })")])]),_vm._v(" "),_c('p',[_vm._v("后端node.js代码示例：")]),_vm._v(" "),_c('pre',{staticClass:"javascript hljs"},[_c('code',{staticClass:"js"},[_c('span',{staticClass:"hljs-keyword"},[_vm._v("var")]),_vm._v(" querystring = "),_c('span',{staticClass:"hljs-built_in"},[_vm._v("require")]),_vm._v("("),_c('span',{staticClass:"hljs-string"},[_vm._v("'querystring'")]),_vm._v(");\n                            "),_c('span',{staticClass:"hljs-keyword"},[_vm._v("var")]),_vm._v(" http = "),_c('span',{staticClass:"hljs-built_in"},[_vm._v("require")]),_vm._v("("),_c('span',{staticClass:"hljs-string"},[_vm._v("'http'")]),_vm._v(");\n                            "),_c('span',{staticClass:"hljs-keyword"},[_vm._v("var")]),_vm._v(" server = http.createServer();\n                            \n                            server.on("),_c('span',{staticClass:"hljs-string"},[_vm._v("'request'")]),_vm._v(", "),_c('span',{staticClass:"hljs-function"},[_c('span',{staticClass:"hljs-keyword"},[_vm._v("function")]),_vm._v("("),_c('span',{staticClass:"hljs-params"},[_vm._v("req, res")]),_vm._v(") ")]),_vm._v("{\n                                "),_c('span',{staticClass:"hljs-keyword"},[_vm._v("var")]),_vm._v(" params = qs.parse(req.url.split("),_c('span',{staticClass:"hljs-string"},[_vm._v("'?'")]),_vm._v(")["),_c('span',{staticClass:"hljs-number"},[_vm._v("1")]),_vm._v("]);\n                                "),_c('span',{staticClass:"hljs-keyword"},[_vm._v("var")]),_vm._v(" fn = params.callback;\n                            \n                                "),_c('span',{staticClass:"hljs-comment"},[_vm._v("// jsonp返回设置")]),_vm._v("\n                                res.writeHead("),_c('span',{staticClass:"hljs-number"},[_vm._v("200")]),_vm._v(", { "),_c('span',{staticClass:"hljs-string"},[_vm._v("'Content-Type'")]),_vm._v(": "),_c('span',{staticClass:"hljs-string"},[_vm._v("'text/javascript'")]),_vm._v(" });\n                                res.write(fn + "),_c('span',{staticClass:"hljs-string"},[_vm._v("'('")]),_vm._v(" + "),_c('span',{staticClass:"hljs-built_in"},[_vm._v("JSON")]),_vm._v(".stringify(params) + "),_c('span',{staticClass:"hljs-string"},[_vm._v("')'")]),_vm._v(");\n                            \n                                res.end();\n                            });\n                            \n                            server.listen("),_c('span',{staticClass:"hljs-string"},[_vm._v("'8080'")]),_vm._v(");\n                            "),_c('span',{staticClass:"hljs-built_in"},[_vm._v("console")]),_vm._v(".log("),_c('span',{staticClass:"hljs-string"},[_vm._v("'Server is running at port 8080...'")]),_vm._v(");")])])]),_vm._v(" "),_c('dd',[_c('p',[_vm._v("jsonp缺点：只能实现get一种请求。")])]),_vm._v(" "),_c('dt',[_vm._v("（2）document.domain + iframe跨域")]),_vm._v(" "),_c('dd'),_vm._v(" "),_c('dt',[_vm._v("（3）location.hash + iframe")]),_vm._v(" "),_c('dt',[_vm._v("（4）window.name + iframe跨域")]),_vm._v(" "),_c('dt',[_vm._v("（5）postMessage跨域")]),_vm._v(" "),_c('dt',[_vm._v("（6）跨域资源共享（CORS）")]),_vm._v(" "),_c('dt',[_vm._v("（7）nginx代理跨域")]),_vm._v(" "),_c('dt',[_vm._v("（8）nodejs中间件代理跨域")]),_vm._v(" "),_c('dt',[_vm._v("（9）WebSocket协议跨域")])])]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"3、浏览器存储","name":"3"}},[_c('p',[_vm._v("useData：出现时间早于 sessionStorage，IE专用")]),_vm._v(" "),_c('p',[_vm._v("1、Cookie：兼容性最好；大小有限制，且每次发送请求，求情头里面会带着 cookie 一起发过去；cookie中的所有数据在客户端就可以被修改，数据非常容易被伪造。")]),_vm._v(" "),_c('p',[_vm._v("2、sessionStorage：可临时存储，关闭页面标签自动回收，不支持跨页面交互；只能临时存储。")]),_vm._v(" "),_c('p',[_vm._v("3、localStorage：长久保存整个网站数据，没有过期时间，手动删除；存储大小限制，IE8以上，保存直类型 String ；最大存储5M。")])]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"4、js原型链","name":"4"}},[_c('p',[_vm._v("所有引用类型（函数、数组、对象）都拥有 __proto__ 属性 （隐式原型）")]),_vm._v(" "),_c('p',[_vm._v("所有函数（仅限函数）拥有 prototype 属性 （显式原型）")]),_vm._v(" "),_c('p',[_vm._v("原型对象 → 拥有 prototype 属性的对象，在定义函数时就被创建")]),_vm._v(" "),_c('p',[_vm._v("构造函数 → function 声明的都是函数，直接调用的话就是普通函数，用函数 new 产生对象时，这个函数才是 new 出来对象的构造函数。")]),_vm._v(" "),_c('div',[_c('pre',{staticClass:"javascript hljs"},[_vm._v("                        "),_c('code',{staticClass:"js"},[_vm._v("\nfunction Word(words){\n    this.words = words;\n}\nWord.prototype = {\n    alert(){\n        alert(this.words);\n    }\n}\nvar w = new Word('hello world');\nw.print = function(){\n    console.log(this.words);\n    console.log(this);\n};\nw.print(); // hello world， w 实体本身具有的方法\nw.alert(); // hello world， 不属于 w 实体的方法，属于构造函数的方法\n                        ")]),_vm._v("\n                    ")])]),_vm._v(" "),_c('p',[_vm._v("实例继承构造函数的方法")]),_vm._v(" "),_c('p',[_vm._v("实例 w 的隐式原型指向它构造函数的显示原型，指向的意思是恒等于")]),_vm._v(" "),_c('div',[_c('pre',{staticClass:"javascript hljs"},[_vm._v("                        "),_c('code',{staticClass:"js"},[_vm._v("\nw.__proto__ === Word.prototype;\n                        ")]),_vm._v("\n                    ")])]),_vm._v(" "),_c('p',[_vm._v("实例.__proto__.__proto__.constructor  ⇒  多个参数的 Object 函数")]),_vm._v(" "),_c('p',[_vm._v("构造函数.prototype.__proto__.constructor == Object()")]),_vm._v(" "),_c('p',[_vm._v("实例.__proto__.constructor  ⇒  构造函数本身")]),_vm._v(" "),_c('p',[_vm._v("构造函数.prototype.constructor == 构造函数本身")]),_vm._v(" "),_c('p',[_vm._v("⇒ 实例.__proto__.__proto__ == Object.prototype")]),_vm._v(" "),_c('p',[_vm._v("惯例 → 构造函数均以大写字母开始")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("函数用来初始化一个新建对象（使用 new 运算符）")]),_vm._v(" "),_c('p',[_vm._v("   ↓↓   ")]),_vm._v(" "),_c('p',[_vm._v("构造函数（constructor）")]),_vm._v(" "),_c('p',[_vm._v("   ↓↓   ")]),_vm._v(" "),_c('p',[_vm._v("定义了一类对象 → 由构造函数初始化的对象组成的集合")]),_vm._v(" "),_c('p',[_vm._v("  ↓  ")]),_vm._v(" "),_c('p',[_vm._v("类：类可看作是对象类型的子类型")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p')]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"5、js数据类型","name":"5"}},[_c('p',[_vm._v("Number、String、Boolean、Null、undefined、object、symbol、bigInt")]),_vm._v(" "),_c('p',[_vm._v("Object 中包含了 Data、function、Array")]),_vm._v(" "),_c('p',[_vm._v("基本类型（单类型）：除Object。 String、Number、boolean、null、undefined。")]),_vm._v(" "),_c('p',[_vm._v("引用类型：object。里面包含的 function、Array、Date。")]),_vm._v(" "),_c('p',[_vm._v("--------------------")]),_vm._v(" "),_c('p',[_vm._v("js类型：")]),_vm._v(" "),_c('p',[_vm._v("原始类型、对象类型")]),_vm._v(" "),_c('p',[_vm._v("可以拥有方法的类型、不能拥有方法的类型")]),_vm._v(" "),_c('p',[_vm._v("可变（mutable）类型、不可变（immutable）类型")])]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"6、浏览器渲染过程","name":"6"}},[_c('p',[_vm._v("解析html以构建dom树 → 构建render树 → 布局render树 → 绘制render树")]),_vm._v(" "),_c('p',[_vm._v("DOM Tree：浏览器将HTML解析成树形的数据结构。")]),_vm._v(" "),_c('p',[_vm._v("CSS Rule Tree：浏览器将CSS解析成树形的数据结构。")]),_vm._v(" "),_c('p',[_vm._v("Render Tree: DOM和CSSOM合并后生成Render Tree。")]),_vm._v(" "),_c('p',[_vm._v("layout: 有了Render Tree，浏览器已经能知道网页中有哪些节点、各个节点的CSS定义以及他们的从属关系，从而去计算出每个节点在屏幕中的位置。")]),_vm._v(" "),_c('p',[_vm._v("painting: 按照算出来的规则，通过显卡，把内容画到屏幕上。")]),_vm._v(" "),_c('p',[_vm._v("reflow（回流）：当浏览器发现某个部分发生了点变化影响了布局，需要倒回去重新渲染，内行称这个回退的过程叫 reflow。reflow 会从 <html> 这个 root frame 开始递归往下，依次计算所有的结点几何尺寸和位置。reflow 几乎是无法避免的。现在界面上流行的一些效果，比如树状目录的折叠、展开（实质上是元素的显 示与隐藏）等，都将引起浏览器的 reflow。鼠标滑过、点击……只要这些行为引起了页面上某些元素的占位面积、定位方式、边距等属性的变化，都会引起它内部、周围甚至整个页面的重新渲 染。通常我们都无法预估浏览器到底会 reflow 哪一部分的代码，它们都彼此相互影响着。")]),_vm._v(" "),_c('p',[_vm._v("repaint（重绘）：改变某个元素的背景色、文字颜色、边框颜色等等不影响它周围或内部布局的属性时，屏幕的一部分要重画，但是元素的几何尺寸没有变。")]),_vm._v(" "),_c('p',[_vm._v("注意：")]),_vm._v(" "),_c('p',[_vm._v("(1)display:none 的节点不会被加入Render Tree，而visibility: hidden 则会，所以，如果某个节点最开始是不显示的，设为display:none是更优的。")]),_vm._v(" "),_c('p',[_vm._v("(2)display:none 会触发 reflow，而 visibility:hidden 只会触发 repaint，因为没有发现位置变化。")]),_vm._v(" "),_c('p',[_vm._v("(3)有些情况下，比如修改了元素的样式，浏览器并不会立刻reflow 或 repaint 一次，而是会把这样的操作积攒一批，然后做一次 reflow，这又叫异步 reflow 或增量异步 reflow。但是在有些情况下，比如resize 窗口，改变了页面默认的字体等。对于这些操作，浏览器会马上进行 reflow。")])]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"7、浏览器从输入 URL 到页面渲染的过程","name":"7"}},[_c('p',[_vm._v("URL → DNS 域名解析 → 找到真IP → 向服务器发起TCP链接 → 与浏览器建立TCP三次握手（客户端发送请求链接、服务器同异、客户端发送确认信号） → 浏览器发送HTTP请求 → 服务器处理请求，并返回HTTP报文 → 断开链接")]),_vm._v(" "),_c('p')]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"8、多维数组","name":"8"}}),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"9、继承","name":"9"}},[_c('p',[_vm._v("父类：")]),_vm._v(" "),_c('div',[_c('pre',{staticClass:"javascript hljs"},[_vm._v("// 定义一个动物类\nfunction Animal(name){\n    // 属性\n    this.name = name || 'Animal';\n    // 实例方法\n    this.sleep = function(){\n        console.log(this.name + '正在睡觉！');\n    }\n}\n// 原型方法\nAnimal.prototype.eat = function(food) {\n    console.log(this.name + '正在吃：' + food);\n};\n                    ")])]),_vm._v(" "),_c('h5',[_vm._v("1、原型链继承")]),_vm._v(" "),_c('p',[_vm._v("核心： 将父类的实例作为子类的原型")]),_vm._v(" "),_c('div',[_c('pre',{staticClass:"javascript hljs"},[_vm._v("function Cat(){ \n}\nCat.prototype = new Animal();\nCat.prototype.name = 'cat';\n\n//　Test Code\nvar cat = new Cat();\nconsole.log(cat.name);\nconsole.log(cat.eat('fish'));\nconsole.log(cat.sleep());\nconsole.log(cat instanceof Animal); //true \nconsole.log(cat instanceof Cat); //true\n                    ")])]),_vm._v(" "),_c('p',[_vm._v("特点：")]),_vm._v(" "),_c('p',[_vm._v("1、非常纯粹的继承关系，实例是子类的实例，也是父类的实例")]),_vm._v(" "),_c('p',[_vm._v("2、父类新增原型方法/原型属性，子类都能访问到")]),_vm._v(" "),_c('p',[_vm._v("3、简单，易于实现")]),_vm._v(" "),_c('p',[_vm._v("缺点：")]),_vm._v(" "),_c('p',[_vm._v("1、可以在Cat构造函数中，为Cat实例增加实例属性。如果要新增原型属性和方法，则必须放在new Animal()这样的语句之后执行。")]),_vm._v(" "),_c('p',[_vm._v("2、无法实现多继承")]),_vm._v(" "),_c('p',[_vm._v("3、来自原型对象的所有属性被所有实例共享。")]),_vm._v(" "),_c('p',[_vm._v("4、创建子类实例时，无法向父类构造函数传参")]),_vm._v(" "),_c('h5',[_vm._v("2、构造继承")]),_vm._v(" "),_c('p',[_vm._v("核心：使用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类（没用到原型）")]),_vm._v(" "),_c('div',[_c('pre',{staticClass:"javascript hljs"},[_vm._v("function Cat(name){ \n    Animal.call(this);\n    this.name = name || 'Tom';\n}\n\n//　Test Code\nvar cat = new Cat();\nconsole.log(cat.name);\nconsole.log(cat.sleep());\nconsole.log(cat instanceof Animal); // false \nconsole.log(cat instanceof Cat); // true\n                    ")])]),_vm._v(" "),_c('p',[_vm._v("特点：")]),_vm._v(" "),_c('p',[_vm._v("1、解决了1中，子类实例共享父类引用属性的问题")]),_vm._v(" "),_c('p',[_vm._v("2、创建子类实例时，可以向父类传递参数")]),_vm._v(" "),_c('p',[_vm._v("3、可以实现多继承（call多个父类对象）")]),_vm._v(" "),_c('p',[_vm._v("缺点：")]),_vm._v(" "),_c('p',[_vm._v("1、实例并不是父类的实例，只是子类的实例")]),_vm._v(" "),_c('p',[_vm._v("2、只能继承父类的实例属性和方法，不能继承原型属性/方法")]),_vm._v(" "),_c('p',[_vm._v("3、无法实现函数复用，每个子类都有父类实例函数的副本，影响性能")]),_vm._v(" "),_c('h5',[_vm._v("3、实例继承")]),_vm._v(" "),_c('p',[_vm._v("核心：为父类实例添加新特性，作为子类实例返回")]),_vm._v(" "),_c('div',[_c('pre',{staticClass:"javascript hljs"},[_vm._v("function Cat(name){ \n    var instance = new Animal();\n    instance.name = name || 'Tom';\n    return instance;\n}\n\n//　Test Code\nvar cat = new Cat();\nconsole.log(cat.name);\nconsole.log(cat.sleep());\nconsole.log(cat instanceof Animal); // true \nconsole.log(cat instanceof Cat); // false\n                    ")])]),_vm._v(" "),_c('p',[_vm._v("特点：")]),_vm._v(" "),_c('p',[_vm._v("1、不限制调用方式，不管是new 子类()还是子类(),返回的对象具有相同的效果")]),_vm._v(" "),_c('p',[_vm._v("缺点：")]),_vm._v(" "),_c('p',[_vm._v("1、实例是父类的实例，不是子类的实例")]),_vm._v(" "),_c('p',[_vm._v("2、不支持多继承")]),_vm._v(" "),_c('h5',[_vm._v("4、拷贝继承")]),_vm._v(" "),_c('div',[_c('pre',{staticClass:"javascript hljs"},[_vm._v("function Cat(name){ \n    var animal = new Animal();\n    for(var p in animal){\n        Cat.prototype[p] = animal[p];\n    }\n    Cat.prototype.name = name || 'Tom';\n}\n\n//　Test Code\nvar cat = new Cat();\nconsole.log(cat.name);\nconsole.log(cat.sleep());\nconsole.log(cat instanceof Animal); // false \nconsole.log(cat instanceof Cat); // true\n                    ")])]),_vm._v(" "),_c('p',[_vm._v("特点：支持多继承")]),_vm._v(" "),_c('p',[_vm._v("缺点：")]),_vm._v(" "),_c('p',[_vm._v("1、效率较低，内存占用高（因为要拷贝父类的属性）")]),_vm._v(" "),_c('p',[_vm._v("2、无法获取父类不可枚举的方法（不可枚举方法，不能使用for in 访问到）")]),_vm._v(" "),_c('h5',[_vm._v("5、组合继承")]),_vm._v(" "),_c('p',[_vm._v("核心：通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用")]),_vm._v(" "),_c('div',[_c('pre',{staticClass:"javascript hljs"},[_vm._v("function Cat(name){ \n    Animal.call(this);\n    this.name = name || 'Tom';\n}\nCat.prototype = new Animal();\n// 组合继承也是需要修复构造函数指向的\nCat.prototype.constructor = Cat;\n\n//　Test Code\nvar cat = new Cat();\nconsole.log(cat.name);\nconsole.log(cat.sleep());\nconsole.log(cat instanceof Animal); // true \nconsole.log(cat instanceof Cat); // true\n                    ")])]),_vm._v(" "),_c('p',[_vm._v("特点:")]),_vm._v(" "),_c('p',[_vm._v("1、弥补了方式2的缺陷，可以继承实例属性/方法，也可以继承原型属性/方法")]),_vm._v(" "),_c('p',[_vm._v("2、既是子类的实例，也是父类的实例")]),_vm._v(" "),_c('p',[_vm._v("3、不存在引用属性共享问题")]),_vm._v(" "),_c('p',[_vm._v("4、可传参")]),_vm._v(" "),_c('p',[_vm._v("5、函数可复用")]),_vm._v(" "),_c('p',[_vm._v("缺点：调用了两次父类构造函数，生成了两份实例（子类实例将子类原型上的那份屏蔽了）")]),_vm._v(" "),_c('h5',[_vm._v("6、寄生组合继承")]),_vm._v(" "),_c('p',[_vm._v("核心：通过寄生方式，砍掉父类的实例属性，这样，在调用两次父类的构造的时候，就不会初始化两次实例方法/属性，避免的组合继承的缺点")]),_vm._v(" "),_c('div',[_c('pre',{staticClass:"javascript hljs"},[_vm._v("function Cat(name){ \n    Animal.call(this);\n    this.name = name || 'Tom';\n}\n(function(){\n    // 创建一个没有实例方法的类\n    var Super = function(){};\n    Super.prototype = Animal.prototype;\n    //将实例作为子类的原型\n    Cat.prototype = new Super();\n  })();\n\n//　Test Code\nvar cat = new Cat();\nconsole.log(cat.name);\nconsole.log(cat.sleep());\nconsole.log(cat instanceof Animal); // true \nconsole.log(cat instanceof Cat); // true\n\nCat.prototype.constructor = Cat; // 需要修复下构造函数\n                    ")])]),_vm._v(" "),_c('p',[_vm._v("特点：堪称完美")]),_vm._v(" "),_c('p',[_vm._v("缺点：实现较为复杂")]),_vm._v(" "),_c('h4',[_vm._v("附录代码：")]),_vm._v(" "),_c('div',[_c('pre',{staticClass:"javascript hljs"},[_vm._v("function Animal (name) {\n    // 属性\n    this.name = name || 'Animal';\n    // 实例方法\n    this.sleep = function(){\n        console.log(this.name + '正在睡觉！');\n    }\n    //实例引用属性\n    this.features = [];\n}\nfunction Cat(name){\n}\nCat.prototype = new Animal();\n\nvar tom = new Cat('Tom');\nvar kissy = new Cat('Kissy');\n\nconsole.log(tom.name); // \"Animal\"\nconsole.log(kissy.name); // \"Animal\"\nconsole.log(tom.features); // []\nconsole.log(kissy.features); // []\n\ntom.name = 'Tom-New Name';\ntom.features.push('eat');\n\n//针对父类实例值类型成员的更改，不影响\nconsole.log(tom.name); // \"Tom-New Name\"\nconsole.log(kissy.name); // \"Animal\"\n//针对父类实例引用类型成员的更改，会通过影响其他子类实例\nconsole.log(tom.features); // ['eat']\nconsole.log(kissy.features); // ['eat']\n                    ")])]),_vm._v(" "),_c('p',[_vm._v("原因分析：")]),_vm._v(" "),_c('p',[_vm._v("关键点：属性查找过程")]),_vm._v(" "),_c('p',[_vm._v("执行tom.features.push，首先找tom对象的实例属性（找不到），那么去原型对象中找，也就是Animal的实例。发现有，那么就直接在这个对象的features属性中插入值。")]),_vm._v(" "),_c('p',[_vm._v("在console.log(kissy.features); 的时候。同上，kissy实例上没有，那么去原型上找。刚好原型上有，就直接返回，但是注意，这个原型对象中features属性值已经变化了。")])]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"10、自执行函数","name":"10"}},[_c('div',[_c('pre',{staticClass:"javascript hljs"},[_vm._v("(function(){})()\n(function(){}())\n                    ")])])]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"11、讲一段代码变成表达式","name":"11"}},[_c('div',[_c('pre',{staticClass:"javascript hljs"},[_vm._v("void function(){ ... }();\n!function foo(){ ... }();\n+function foo(){ ... }();\n                    ")])])]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"12、JS获取DOM元素的方法","name":"12"}},[_c('p',[_vm._v("document.getElementById → id")]),_vm._v(" "),_c('p',[_vm._v("document.getElementsByName → name属性")]),_vm._v(" "),_c('p',[_vm._v("document.getElementsByTagName → 标签名")]),_vm._v(" "),_c('p',[_vm._v("document.querySelector → 选择器获取一个元素")]),_vm._v(" "),_c('p',[_vm._v("document.querySelectorAll → 选择器获取一组元素")]),_vm._v(" "),_c('p',[_vm._v("document.documentElement → 专门获取html这个标签的")]),_vm._v(" "),_c('p',[_vm._v("document.body → 专门获取body标签")]),_vm._v(" "),_c('p',[_vm._v("document.getElementsByClassName → 类名，IE8及以下不兼容")])]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"13、isFinite(testValue) ⇒ 判断传入的值是否为一个有限数值","name":"13"}}),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"14、arguments","name":"14"}},[_c('p',[_vm._v("Javascript没有重载函数的功能，但是Arguments对象能够模拟重载。")]),_vm._v(" "),_c('p',[_vm._v("Javascrip中每个函数都会有一个Arguments对象实例arguments，它引用着函数的实参，可以用数组下标的方式\"[]\"引用arguments的元素。")]),_vm._v(" "),_c('p',[_vm._v("arguments.length为函数实参个数，arguments.callee引用函数自身。")]),_vm._v(" "),_c('div',[_c('pre',{staticClass:"javascript hljs"},[_vm._v("(function(a){\n    console.log(arguments);\n})(1);\n                    ")])]),_vm._v(" "),_c('p',[_vm._v("arguments.callee与形参是一一映射")]),_vm._v(" "),_c('div',[_c('pre',{staticClass:"javascript hljs"},[_vm._v("(function(a,b,c){\n    arguments[0] = 'hello';\n    console.log(arguments[0]);\n})(1，2,3,4);\n                    ")])]),_vm._v(" "),_c('p',[_vm._v("arguments对象和Function是分不开的。因为arguments这个对象不能显式创建。arguments对象只有函数开始时才可用。")]),_vm._v(" "),_c('p',[_vm._v("arguments对象并不是一个数组（类数组），但是访问单个参数的方式与访问数组元素的方式相同。如：")]),_vm._v(" "),_c('div',[_c('pre',{staticClass:"javascript hljs"},[_vm._v("// arguments[0],arguments[1],。。。arguments[n]； 在js中 不需要明确指出参数名，就能访问它们\nfunction test() {\n    var s = \"\";\n    for (var i = 0; i < arguments.length; i++) {\n        alert(arguments[i]);\n        s += arguments[i] + \",\";\n    }\n    return s;\n}\ntest(\"name\", \"age\");\n\n// 输出结果：\n// name,age\n                    ")])]),_vm._v(" "),_c('p',[_vm._v("每一个对象都有自己的属性，arguments对象也不例外，首先arguments的访问犹如Array对象一样，用0到arguments.length-1来枚举每一个元素。")]),_vm._v(" "),_c('p',[_vm._v("callee属性，返回正被执行的** Function** 对象，也就是所指定的 Function 对象的正文。")]),_vm._v(" "),_c('p',[_vm._v("callee 属性是 arguments 对象的一个成员，仅当相关函数正在执行时才可用。")]),_vm._v(" "),_c('p',[_vm._v("callee 属性的初始值就是正被执行的** Function** 对象。")]),_vm._v(" "),_c('div',[_c('pre',{staticClass:"javascript hljs"},[_vm._v("var sum = function (n) {\n    if (1 == n) {\n        return 1;\n    } else {\n        return n + arguments.callee(n - 1); //6 5 4 3 2 1\n    }\n}\nalert(sum(6));\n\n// 输出结果：21\n                    ")])]),_vm._v(" "),_c('p',[_vm._v("通俗一点就是，arguments此对象大多用来针对同个方法多处调用并且传递参数个数不一样时进行使用。根据arguments的索引来判断执行的方法。")]),_vm._v(" "),_c('p',[_vm._v("当使用arguments进行函数传递时，有一些需要注意的点。例子如下：")]),_vm._v(" "),_c('div',[_c('pre',{staticClass:"javascript hljs"},[_vm._v("var length = 10;\nfunction fn() {\n  console.log(this.length);\n}\n\nvar obj = { \n  method: function(fn) {\n    fn();\n    arguments[0]();\n  }\n};\n\nobj.method(fn, 1); \n\n// 输出：10,2\n                    ")])]),_vm._v(" "),_c('p',[_vm._v("1.第一个值为10，执行的是method里面的第一行\"fn()\",这里this指向的window。所以输出的值为最外层定义的length。")]),_vm._v(" "),_c('p',[_vm._v("2.第二个值为2，执行的是method里面的第二行\"arguments0\"（arguments0 => fn() ），这里this执行的是arguments这个对象,所以输出值为arguments的长度")]),_vm._v(" "),_c('p',[_vm._v("传多个参数事可以直接用argument，比如求最大值：")]),_vm._v(" "),_c('div',[_c('pre',{staticClass:"javascript hljs"},[_vm._v("function max() {\n    var max = arguments[0];\n    console.log(arguments)\n\n    for (val of arguments) {\n        if (val >= max) {\n            max = val;\n        }\n    }\n    return max;\n}\nvar maxValue = max('9', 1, 2, 4)\nconsole.log(maxValue)\n                    ")])]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p'),_vm._v(" "),_c('p'),_vm._v(" "),_c('p'),_vm._v(" "),_c('p'),_vm._v(" "),_c('p'),_vm._v(" "),_c('p'),_vm._v(" "),_c('p')]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"15、js解析器内存管理机制 → 自动对内存进行垃圾回收（garbage collection）","name":"15"}}),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"16、js是面向对象语言，只有null、undefined 无法拥有方法的值","name":"16"}}),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"17、js算术运算溢出（overflow）、下溢（underflow）","name":"17"}},[_c('p',[_vm._v("溢出（overflow）⇒ 超过 js 所能表示的数字上限 → 以无穷大（infinity）表示；超过下限 → 负无穷大（-Infinity）")]),_vm._v(" "),_c('p',[_vm._v("下溢（underflow） ⇒ 无限接近零并比 js 能表示的最小值还小 → 返回0；负数下溢时 → “负零”")]),_vm._v(" "),_c('p',[_vm._v("被零整除 → 无穷大或负无穷大。")]),_vm._v(" "),_c('p',[_vm._v("零除于零 → 无意义 → 非数字（not-a-number）值 → 用 NaN 表示")]),_vm._v(" "),_c('p',[_vm._v("js中的非数字值 → 不与任何值相等，包含自身，即 x==NaN 无法判断 x 是否为 NaN，可用 x!=x 来判断")]),_vm._v(" "),_c('p',[_vm._v("isNaN()、isFinite()")])]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"18、m模式匹配 → 正则","name":"18"}},[_c('p',[_vm._v("RegExp() 构造函数 → 创建文本匹配模式的对象")]),_vm._v(" "),_c('p',[_vm._v("var str = 'testing: 1,2,3';")]),_vm._v(" "),_c('p',[_vm._v("var reg = /\\d+/g; → 匹配一个或多个数字")]),_vm._v(" "),_c('p',[_vm._v("reg.text(str); → true")]),_vm._v(" "),_c('p',[_vm._v("str.search(reg); → 首次匹配成功的位置")]),_vm._v(" "),_c('p',[_vm._v("str.match(reg); → 所有匹配组成的数组")]),_vm._v(" "),_c('p',[_vm._v("str.replace(reg, \"#\"); → \"testing: #,#,#\"")]),_vm._v(" "),_c('p',[_vm._v("str.split(/\\D+/); → 用非数字字符截取字符串")])]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"19、包装对象","name":"19"}},[_c('p',[_vm._v("存取字符串、数字或布尔值的属性时临时创建的临时对象。")]),_vm._v(" "),_c('p',[_vm._v("var str = \"test\";")]),_vm._v(" "),_c('p',[_vm._v("str.len = 4; → 先创建一个临时字符串对象，并给其 len 属性赋值，随即销毁该对象")]),_vm._v(" "),_c('p',[_vm._v("var t = str.len; → undefined")]),_vm._v(" "),_c('p',[_vm._v("注：")]),_vm._v(" "),_c('p',[_vm._v("可通过 Stirng()、Number()、Boolean()构造函数来显示创建包装对象。")]),_vm._v(" "),_c('p',[_vm._v("如：")]),_vm._v(" "),_c('p',[_vm._v("var s = \"test\"; → 一个字符串")]),_vm._v(" "),_c('p',[_vm._v("var sObj = new String(s); → 一个字符串对象")]),_vm._v(" "),_c('p',[_vm._v("s == sObj → true")]),_vm._v(" "),_c('p',[_vm._v("s === sObj → false")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p')]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"20、","name":"20"}}),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"21、","name":"21"}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 516 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_es6_vue__ = __webpack_require__(229);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3e5e10bb_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_es6_vue__ = __webpack_require__(518);
function injectStyle (ssrContext) {
  __webpack_require__(517)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3e5e10bb"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_es6_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3e5e10bb_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_es6_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 517 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 518 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"interview_es6_wrap"},[_c('el-collapse',{staticClass:"question_answer",on:{"change":_vm.handleChange},model:{value:(_vm.activeNames),callback:function ($$v) {_vm.activeNames=$$v},expression:"activeNames"}},[_c('el-collapse-item',{attrs:{"title":"1、ES6的 let、const 与 ES5的 var 的区别","name":"1"}}),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"2、变量的解构赋值","name":"2"}},[_c('h5',[_vm._v("（1）数组的解构赋值")]),_vm._v(" "),_c('p',[_vm._v("只要等号两边的模式相同，左边的变量会被赋予对应的值")]),_vm._v(" "),_c('div',[_c('pre',{staticClass:"javascript hljs"},[_vm._v("let [a,b,c] = [1,2,3];\nlet [foo, [[bar], baz]] = [1, [[2], 3]];\nlet [,, third] = [\"foo\", \"bar\", \"baz\"];\nlet [x,,y] = [1,2,3];\nlet [head, ...tail] = [1,2,3,4];\nlet [x,y,...z] = ['a']; // x：a， y：undefined， z：[]\n                    ")])]),_vm._v(" "),_c('h5',[_vm._v("（2）对象的解构赋值")]),_vm._v(" "),_c('p',[_vm._v("先找到同名属性，再赋值给对应的变量。")]),_vm._v(" "),_c('p',[_vm._v("真正被赋值的是后者文不是前者。")]),_vm._v(" "),_c('div',[_c('pre',{staticClass:"javascript hljs"},[_vm._v("let {foo, bar} = {foo: 'aaa', bar: 'bbb'};\nlet {foo: bar} = {foo: 'aaa', bar: 'bbb'};\n                    ")])]),_vm._v(" "),_c('h5',[_vm._v("（3）字符串的解构赋值")]),_vm._v(" "),_c('div',[_c('pre',{staticClass:"javascript hljs"},[_vm._v("const [a,b,c,d,e] = 'hello';\nlet {length: len} = 'hello';\n                    ")])]),_vm._v(" "),_c('h5',[_vm._v("（4）数值和布尔值的解构赋值")]),_vm._v(" "),_c('p',[_vm._v("解构赋值时，若等号右边是数值和布尔值，则会先转为对象。")]),_vm._v(" "),_c('div',[_c('pre',{staticClass:"javascript hljs"},[_vm._v("let {toString: s} = 123; // toString 是模式\n// s === Number.prototype.toString  ⇒  true\nlet {toString: s} = true; \n                    ")])]),_vm._v(" "),_c('h5',[_vm._v("（5）函数参数的解构赋值")]),_vm._v(" "),_c('div',[_c('pre',{staticClass:"javascript hljs"},[_vm._v("function add([x, y]){ return x+y; }\n[[1, 2], [3, 4]].map(([a, b]) +> a+b);\nfunction move({x=0, y=0}={}){ return [x, y];} // 参数默认值\n                    ")])])]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"3、变量的解构赋值用途","name":"3"}},[_c('p',[_vm._v("1、交换变量的值 → [x, y]=[y, x];")]),_vm._v(" "),_c('p',[_vm._v("2、从函数返回多个值")]),_vm._v(" "),_c('p',[_vm._v("3、函数参数的定义")]),_vm._v(" "),_c('p',[_vm._v("4、提取JSON数据")]),_vm._v(" "),_c('p',[_vm._v("5、函数参数的默认值")]),_vm._v(" "),_c('p',[_vm._v("6、遍历 Map 结构")]),_vm._v(" "),_c('p',[_vm._v("7、输入模块的指定方法")])]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"4、字符串的扩展","name":"4"}},[_c('p',[_vm._v("1、字符串的遍历器接口")]),_vm._v(" "),_c('p',[_vm._v("2、模板字符串")])]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"5、字符串的新增方法","name":"5"}},[_c('p',[_vm._v("includes()、startsWith()、endsWith()、repeat()、padStart()、padEnd()、trimStart()、trimEnd()")]),_vm._v(" "),_c('div',[_c('pre',{staticClass:"javascript hljs"},[_vm._v("let str = \"my name is cily!\";\nstr.startsWith('name'); → false\nstr.startsWith('my'); → true\nstr.startsWith('name', 3); → true\nstr.startsWith('name', 2); → false\nstr.endsWith('!'); → true\nstr.endsWith('cily'); → false\nstr.endsWith('cily', 1); → false\nstr.endsWith('is', 10); → true ⇒ 前 10 个字符是否以 is 结尾\n                    ")])]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p'),_vm._v(" "),_c('p'),_vm._v(" "),_c('p'),_vm._v(" "),_c('p'),_vm._v(" "),_c('p'),_vm._v(" "),_c('p'),_vm._v(" "),_c('p')]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"6、","name":"6"}}),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"7、","name":"7"}}),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"8、","name":"8"}}),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"9、","name":"9"}}),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"10、","name":"10"}}),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"11、","name":"11"}}),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"12、","name":"12"}}),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"13、","name":"13"}}),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"14、","name":"14"}}),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"15、","name":"15"}}),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"16、","name":"16"}}),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"17、","name":"17"}}),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"18、","name":"18"}}),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"19、","name":"19"}}),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"20、","name":"20"}}),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"21、","name":"21"}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 519 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_vue__ = __webpack_require__(230);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_64dbacd8_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_vue_vue__ = __webpack_require__(521);
function injectStyle (ssrContext) {
  __webpack_require__(520)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-64dbacd8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_64dbacd8_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_vue_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 520 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 521 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"interview_vue_wrap"},[_c('el-collapse',{staticClass:"question_answer",on:{"change":_vm.handleChange},model:{value:(_vm.activeNames),callback:function ($$v) {_vm.activeNames=$$v},expression:"activeNames"}},[_c('el-collapse-item',{attrs:{"title":"1、vuex","name":"1"}},[_c('p',[_vm._v("vuex是一个专门为vue.js应用程序开发的状态管理模式")]),_vm._v(" "),_c('p',[_vm._v("vuex可以帮助我们管理共享状态，也就是管理全局变量")]),_vm._v(" "),_c('p',[_vm._v("vuex的几个核心概念：")]),_vm._v(" "),_c('p',[_vm._v("vuex使用一个store对象管理应用的状态，一个store包括：state,getter，mutation,action四个属性")]),_vm._v(" "),_c('p',[_vm._v("state：state意为'状态'，是vuex状态管理的数据源")]),_vm._v(" "),_c('p',[_vm._v("getter：getter的作用与filters有一些相似，可以将state进行过滤后输出")]),_vm._v(" "),_c('p',[_vm._v("mutation：mutation是vuex中改变state的唯一途径，并且只能同步操作")]),_vm._v(" "),_c('p',[_vm._v("action：一些对state的异步操作可以放在action中，并通过在action提交mutaion变更状态")]),_vm._v(" "),_c('p',[_vm._v("module：当store对象过于庞大时，可以根据具体的业务需求分为多个module")]),_vm._v(" "),_c('p',[_vm._v("我们可以在组件中触发 Action，Action 则会提交 Mutation，Mutaion 会对 State 进行修改，组件再根据 State 、Getter 渲染页面")]),_vm._v(" "),_c('p',[_vm._v("----------------------")]),_vm._v(" "),_c('p',[_vm._v("在main.js引入store，注入。新建一个目录store，…… export 。")]),_vm._v(" "),_c('p',[_vm._v("使用场景有：单页应用中，组件之间的状态。音乐播放、登录状态、加入购物车")]),_vm._v(" "),_c('p',[_vm._v("vuex有哪几种属性？  → 分别是 State、 Getter、Mutation 、Action、 Module ")]),_vm._v(" "),_c('h5',[_vm._v("vuex的State特性：")]),_vm._v(" "),_c('p',[_vm._v("A、Vuex就是一个仓库，仓库里面放了很多对象。其中 state 就是数据源存放地，对应于一般 Vue 对象里面的 data")]),_vm._v(" "),_c('p',[_vm._v("B、state里面存放的数据是响应式的，Vue组件从store中读取数据，若是store中的数据发生改变，依赖这个数据的组件也会发生更新")]),_vm._v(" "),_c('p',[_vm._v("C、它通过mapState把全局的 state 和 getters 映射到当前组件的 computed 计算属性中 ")]),_vm._v(" "),_c('h5',[_vm._v("vuex 的 Getter 特性：")]),_vm._v(" "),_c('p',[_vm._v("A、getters 可以对State进行计算操作，它就是Store的计算属性")]),_vm._v(" "),_c('p',[_vm._v("B、 虽然在组件内也可以做计算属性，但是getters 可以在多组件之间复用")]),_vm._v(" "),_c('p',[_vm._v("C、 如果一个状态只在一个组件内使用，是可以不用getters")]),_vm._v(" "),_c('h5',[_vm._v("vuex的Mutation特性：")]),_vm._v(" "),_c('p',[_vm._v("Action 类似于 mutation，不同在于：Action 提交的是 mutation，而不是直接变更状态；Action 可以包含任意异步操作。")]),_vm._v(" "),_c('h5',[_vm._v("不用Vuex会带来什么问题？")]),_vm._v(" "),_c('p',[_vm._v("可维护性会下降，想修改数据要维护三个地方；")]),_vm._v(" "),_c('p',[_vm._v("可读性会下降，因为一个组件里的数据，根本就看不出来是从哪来的；")]),_vm._v(" "),_c('p',[_vm._v("增加耦合，大量的上传派发，会让耦合性大大增加，本来Vue用Component就是为了减少耦合，现在这么用，和组件化的初衷相背。")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p'),_vm._v(" "),_c('p'),_vm._v(" "),_c('p'),_vm._v(" "),_c('p')]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"2、vue中的路由拦截器的作用","name":"2"}},[_c('p',[_vm._v("路由拦截，权限设置")]),_vm._v(" "),_c('p',[_vm._v("例如：当用户没有登录权限的时候就会跳转到登录页面，用到的字段requireAuth:true")])]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"3、axios的作用","name":"3"}},[_c('p',[_vm._v("vue中的ajax，用于向后台发起请求")]),_vm._v(" "),_c('p',[_vm._v("特点：")]),_vm._v(" "),_c('p',[_vm._v("从浏览器中创建XMLHttpRequests")]),_vm._v(" "),_c('p',[_vm._v("从node.js创建http请求")]),_vm._v(" "),_c('p',[_vm._v("支持Promise API")]),_vm._v(" "),_c('p',[_vm._v("拦截请求和响应")]),_vm._v(" "),_c('p',[_vm._v("转换请求数据和响应数据")]),_vm._v(" "),_c('p',[_vm._v("取消请求")]),_vm._v(" "),_c('p',[_vm._v("自动转换json数据")]),_vm._v(" "),_c('p',[_vm._v("客户端支持防御XSRF")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p',[_vm._v("promise：")]),_vm._v(" "),_c('p',[_vm._v("一个对象用来传递异步操作的信息")]),_vm._v(" "),_c('p',[_vm._v("promise的出现主要是解决地狱回调的问题，无需多次嵌套")]),_vm._v(" "),_c('p',[_vm._v("本质：分离异步数据获取和业务")]),_vm._v(" "),_c('p',[_vm._v(" 拦截器分为请求拦截器和响应拦截器")]),_vm._v(" "),_c('p',[_vm._v("#请求拦截器")]),_vm._v(" "),_c('div',[_c('pre',{staticClass:"javascript hljs"},[_vm._v("axios.interceptors.request.use(function(config){\n    return config;\n},function(error){\n    return Promise.reject(error);\n});\n                    ")])]),_vm._v(" "),_c('p',[_vm._v("#响应拦截器")]),_vm._v(" "),_c('div',[_c('pre',{staticClass:"javascript hljs"},[_vm._v("axios.interceptors.response.use(function(response){\n    return response;\n},function(error){\n    return Promise.reject(error);\n});\n                    ")])]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p')]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"4、列举vue的常见指令","name":"4"}},[_c('p',[_vm._v("1.文本插值：{{}} Mustache")]),_vm._v(" "),_c('p',[_vm._v("2.DOM属性绑定：v-bind")]),_vm._v(" "),_c('p',[_vm._v("3.指令绑定一个事件监听器：v-on")]),_vm._v(" "),_c('p',[_vm._v("4.实现表单输入和应用状态之间的双向绑定：v-model")]),_vm._v(" "),_c('p',[_vm._v("5.控制切换一个元素的显示：v-if和v-else")]),_vm._v(" "),_c('p',[_vm._v("6.列表渲染:v-for")])]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"5、列举Http请求中常见的请求方式","name":"5"}},[_c('p',[_vm._v("get → 向特定的路径资源发出请求，数据暴露在url中")]),_vm._v(" "),_c('p',[_vm._v("post → 向指定路径资源提交数据进行处理请求，数据包含在请求体中")]),_vm._v(" "),_c('p',[_vm._v("options → 返回服务器针对特定资源所支持的http请求方法，允许客户端查看，测试服务器性能")]),_vm._v(" "),_c('p',[_vm._v("head → 向服务器与get请求相一致的响应，响应体不会返回，可以不必传输整个响应内容")]),_vm._v(" "),_c('p',[_vm._v("put → 从客户端向服务器端传送的数据取代指定的文档的内容")]),_vm._v(" "),_c('p',[_vm._v("delete → 请求服务器删除指定的页面")]),_vm._v(" "),_c('p',[_vm._v("trace → 回显服务器收到的请求，主要用于测试或者诊断")]),_vm._v(" "),_c('p',[_vm._v("connect → http/1.1协议中预留给能够将连接改为管道方式的代理服务")])]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"6、对于MVVM的理解","name":"6"}},[_c('p',[_vm._v("MVVM 是 Model-View-ViewModel 的缩写。")]),_vm._v(" "),_c('p',[_vm._v("Model代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑。")]),_vm._v(" "),_c('p',[_vm._v("View 代表UI 组件，它负责将数据模型转化成UI 展现出来。")]),_vm._v(" "),_c('p',[_vm._v("ViewModel 监听模型数据的改变和控制视图行为、处理用户交互，简单理解就是一个同步View 和 Model的对象，连接Model和View。")]),_vm._v(" "),_c('p',[_vm._v("viewmodel和model实现双向数据绑定")])]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"7、Vue的生命周期","name":"7"}},[_c('p',[_vm._v("beforeCreate、created、beforeMount、mounted、beforeUpdate、updated、beforeDestroy、destroyed")]),_vm._v(" "),_c('p',[_vm._v("父子组件生命周期：父 beforeCreate → 父 created → 父 beforeMount → 子 beforeCreate → 子 created → 子 beforeMount → 子 mounted → 父 mounted")]),_vm._v(" "),_c('p',[_vm._v("activated: keep-alive组件激活时调用")]),_vm._v(" "),_c('p',[_vm._v("-------------------------")]),_vm._v(" "),_c('p',[_vm._v("1.什么是vue生命周期？")]),_vm._v(" "),_c('p',[_vm._v("答： Vue 实例从创建到销毁的过程，就是生命周期。从开始创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、销毁等一系列过程，称之为 Vue 的生命周期。")]),_vm._v(" "),_c('p',[_vm._v("2.vue生命周期的作用是什么？")]),_vm._v(" "),_c('p',[_vm._v("答：它的生命周期中有多个事件钩子，让我们在控制整个Vue实例的过程时更容易形成好的逻辑。")]),_vm._v(" "),_c('p',[_vm._v("3.vue生命周期总共有几个阶段？")]),_vm._v(" "),_c('p',[_vm._v("答：它可以总共分为8个阶段：创建前/后, 载入前/后,更新前/后,销毁前/销毁后。")]),_vm._v(" "),_c('p',[_vm._v("4.第一次页面加载会触发哪几个钩子？")]),_vm._v(" "),_c('p',[_vm._v("答：会触发 下面这几个beforeCreate, created, beforeMount, mounted 。")]),_vm._v(" "),_c('p',[_vm._v("5.DOM 渲染在 哪个周期中就已经完成？")]),_vm._v(" "),_c('p',[_vm._v("答：DOM 渲染在 mounted 中就已经完成了。")]),_vm._v(" "),_c('p')]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"8、Vue实现数据双向绑定的原理：Object.defineProperty（）","name":"8"}},[_c('div',[_vm._v("采用 "),_c('strong',[_vm._v("数据劫持结合发布者-订阅者模式")]),_vm._v(" 的方式，通过 "),_c('strong',[_vm._v("Object.defineProperty()")]),_vm._v(" 来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应监听回调。")]),_vm._v(" "),_c('h5',[_vm._v("具体步骤：")]),_vm._v(" "),_c('div',[_c('b',[_vm._v("第一步：需要observe的数据对象进行递归遍历")]),_vm._v("，包括子属性对象的属性，都加上 setter和getter 这样的话，给这个对象的某个值赋值，就会触发setter，那么就能监听到了数据变化")]),_vm._v(" "),_c('div',[_c('b',[_vm._v("第二步：compile解析模板指令")]),_vm._v("，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图")]),_vm._v(" "),_c('div',[_c('b',[_vm._v("第三步：Watcher订阅者是Observer和Compile之间通信的桥梁")]),_vm._v("，主要做的事情是:")]),_vm._v(" "),_c('p',[_vm._v("1、在自身实例化时往属性订阅器(dep)里面添加自己")]),_vm._v(" "),_c('p',[_vm._v("2、自身必须有一个update()方法")]),_vm._v(" "),_c('p',[_vm._v("3、待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退。")]),_vm._v(" "),_c('div',[_c('b',[_vm._v("第四步：MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者")]),_vm._v("，通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据model变更的双向绑定效果。")]),_vm._v(" "),_c('div'),_vm._v(" "),_c('div'),_vm._v(" "),_c('div'),_vm._v(" "),_c('div'),_vm._v(" "),_c('div')]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"9、Vue组件间的参数传递","name":"9"}},[_c('h5',[_vm._v("1.父组件与子组件传值")]),_vm._v(" "),_c('p',[_vm._v("父组件传给子组件：子组件通过props方法接受数据;")]),_vm._v(" "),_c('p',[_vm._v("子组件传给父组件：$emit方法传递参数")]),_vm._v(" "),_c('h5',[_vm._v("2.非父子组件间的数据传递，兄弟组件传值")]),_vm._v(" "),_c('p',[_vm._v("eventBus，就是创建一个事件中心，相当于中转站，可以用它来传递事件和接收事件。项目比较小时，用这个比较合适。（虽然也有不少人推荐直接用VUEX，具体来说看需求咯。技术只是手段，目的达到才是王道。）")])]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"10、Vue的路由实现：hash模式 和 history模式","name":"10"}},[_c('h5',[_vm._v("hash模式：")]),_vm._v(" "),_c('p',[_vm._v("在浏览器中符号“#”，#以及#后面的字符称之为hash，用window.location.hash读取；;")]),_vm._v(" "),_c('p',[_vm._v("特点：hash虽然在URL中，但不被包括在HTTP请求中；用来指导浏览器动作，对服务端安全无用，hash不会重加载页面。")]),_vm._v(" "),_c('p',[_vm._v("hash 模式下，仅 hash 符号之前的内容会被包含在请求中，如 http://www.xxx.com，因此对于后端来说，即使没有做到对路由的全覆盖，也不会返回 404 错误。")]),_vm._v(" "),_c('p',[_vm._v("history 模式下，前端的 URL 必须和实际向后端发起请求的 URL 一致，如 http://www.xxx.com/items/id。后端如果缺少对 /items/id 的路由处理，将返回 404 错误。")]),_vm._v(" "),_c('h5',[_vm._v("Vue-Router 官网里如此描述：")]),_vm._v(" "),_c('p',[_vm._v("“不过这种模式要玩好，还需要后台配置支持……所以呢，你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面。”")]),_vm._v(" "),_c('h5',[_vm._v("history模式：")]),_vm._v(" "),_c('p',[_vm._v("history采用HTML5的新特性；且提供了两个新方法：pushState（），replaceState（）可以对浏览器历史记录栈进行修改，以及popState事件的监听到状态变更。")])]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"11、vue路由的钩子函数　","name":"11"}},[_c('p',[_vm._v("首页可以控制导航跳转，beforeEach，afterEach等，一般用于页面title的修改。一些需要登录才能调整页面的重定向功能。")]),_vm._v(" "),_c('p',[_c('b',[_vm._v("beforeEach")]),_vm._v(" 主要有3个参数to，from，next：")]),_vm._v(" "),_c('p',[_c('b',[_vm._v("to：")]),_vm._v("route即将进入的目标路由对象，")]),_vm._v(" "),_c('p',[_c('b',[_vm._v("from：")]),_vm._v("route当前导航正要离开的路由")]),_vm._v(" "),_c('p',[_c('b',[_vm._v("next：")]),_vm._v("function一定要调用该方法resolve这个钩子。执行效果依赖next方法的调用参数。可以控制网页的跳转。")]),_vm._v(" "),_c('p')]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"12、vue-cli如何新增自定义指令","name":"12"}},[_c('div',[_c('pre',{staticClass:"javascript hljs"},[_vm._v("1.创建局部指令\nvar app = new Vue({\n    el: '#app',\n    data: {    \n    },\n    // 创建指令(可以多个)\n    directives: {\n        // 指令名称\n        dir1: {\n            inserted(el) {\n                // 指令中第一个参数是当前使用指令的DOM\n                console.log(el);\n                console.log(arguments);\n                // 对DOM进行操作\n                el.style.width = '200px';\n                el.style.height = '200px';\n                el.style.background = '#000';\n            }\n        }\n    }\n})\n\n2.全局指令\nVue.directive('dir2', {\n    inserted(el) {\n        console.log(el);\n    }\n})\n\n3.指令的使用\n<div id=\"app\">\n    <div v-dir1></div>\n    <div v-dir2></div>\n</div>\n                    ")])])]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"13、vue如何自定义一个过滤器","name":"13"}},[_c('div',[_c('pre',{staticClass:"javascript hljs"},[_vm._v("html代码：\n\n<div id=\"app\">\n    <input type=\"text\" v-model=\"msg\" />\n    "+_vm._s(_vm._f("capitalize")(_vm.msg))+"\n</div>\n\nJS代码：\n\nvar vm=new Vue({\n    el:\"#app\",\n    data:{\n        msg:''\n    },\n    filters: {\n      capitalize: function (value) {\n        if (!value) return ''\n        value = value.toString()\n        return value.charAt(0).toUpperCase() + value.slice(1)\n      }\n    }\n})\n\n全局定义过滤器\n\nVue.filter('capitalize', function (value) {\n  if (!value) return ''\n  value = value.toString()\n  return value.charAt(0).toUpperCase() + value.slice(1)\n})\n\n过滤器接收表达式的值 (msg) 作为第一个参数。capitalize 过滤器将会收到 msg的值作为第一个参数。\n                    ")])])]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"14、对keep-alive 的了解？","name":"14"}},[_c('p',[_vm._v("keep-alive是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。")]),_vm._v(" "),_c('p',[_vm._v("在vue 2.1.0 版本之后，keep-alive新加入了两个属性: include(包含的组件缓存) 与 exclude(排除的组件不缓存，优先级大于include) 。")]),_vm._v(" "),_c('p',[_vm._v("使用方法")]),_vm._v(" "),_c('div',[_c('pre',{staticClass:"javascript hljs"},[_vm._v("<keep-alive include='include_components' exclude='exclude_components'>\n    <component>\n    <!-- 该组件是否缓存取决于include和exclude属性 -->\n    </component>\n</keep-alive>\n                    ")])]),_vm._v(" "),_c('p',[_vm._v("参数解释")]),_vm._v(" "),_c('p',[_vm._v("include - 字符串或正则表达式，只有名称匹配的组件会被缓存")]),_vm._v(" "),_c('p',[_vm._v("exclude - 字符串或正则表达式，任何名称匹配的组件都不会被缓存")]),_vm._v(" "),_c('p',[_vm._v("include 和 exclude 的属性允许组件有条件地缓存。二者都可以用“，”分隔字符串、正则表达式、数组。当使用正则或者是数组时，要记得使用v-bind 。")]),_vm._v(" "),_c('p',[_vm._v("使用示例")]),_vm._v(" "),_c('div',[_c('pre',{staticClass:"javascript hljs"},[_vm._v("<!-- 逗号分隔字符串，只有组件a与b被缓存。 -->\n<keep-alive include=\"a,b\">\n    <component></component>\n</keep-alive>\n\n<!-- 正则表达式 (需要使用 v-bind，符合匹配规则的都会被缓存) -->\n<keep-alive :include=\"/a/b\">\n    <component> </component>\n</keep-alive>\n\n<!-- Array (需要使用 v-bind，被包含的都会被缓存) -->\n<keep-alive :include=\"['a', 'b']\">\n    <component></component>\n</keep-alive>\n                    ")])])]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"15、怎么定义 vue-router 的动态路由? 怎么获取传过来的值","name":"15"}},[_c('p',[_vm._v("在 router 目录下的 index.js 文件中，对 path 属性加上 /:id，使用 router 对象的 params.id 获取。")])]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"16、vue常用的修饰符","name":"16"}},[_c('p',[_vm._v(".prevent: 提交事件不再重载页面；")]),_vm._v(" "),_c('p',[_vm._v(".stop: 阻止单击事件冒泡；")]),_vm._v(" "),_c('p',[_vm._v(".self: 当事件发生在该元素本身而不是子元素的时候会触发；")]),_vm._v(" "),_c('p',[_vm._v(".capture: 事件侦听，事件发生的时候会调用")]),_vm._v(" "),_c('p')]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"17、vue.js的两个核心是什么？","name":"17"}},[_c('p',[_vm._v("数据驱动、组件系统")])]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"18、vue中 key 值的作用？","name":"18"}},[_c('p',[_vm._v("当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。key的作用主要是为了高效的更新虚拟DOM。")])]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"19、vue如何实现按需加载配合webpack设置","name":"19"}},[_c('p',[_vm._v("webpack中提供了require.ensure()来实现按需加载。以前引入路由是通过import 这样的方式引入，改为const定义的方式进行引入。")]),_vm._v(" "),_c('p',[_vm._v("不进行页面按需加载引入方式：import home from ‘…/…/common/home.vue’")]),_vm._v(" "),_c('p',[_vm._v("进行页面按需加载的引入方式：const home = r => require.ensure( [], () => r (require(’…/…/common/home.vue’)))")]),_vm._v(" "),_c('p'),_vm._v(" "),_c('p'),_vm._v(" "),_c('p'),_vm._v(" "),_c('p')]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"20、Vue中引入组件的步骤?","name":"20"}},[_c('p',[_vm._v("1）采用ES6的import … from …语法或CommonJS的require()方法引入组件")]),_vm._v(" "),_c('p',[_vm._v("2）对组件进行注册,代码如下")]),_vm._v(" "),_c('div',[_c('pre',{staticClass:"javascript hljs"},[_vm._v("// 注册\nVue.component('my-component', { template:'A custom component!' })\n                    ")])]),_vm._v(" "),_c('p',[_vm._v("3）使用组件")])]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"21、在Vue中使用插件的步骤","name":"21"}},[_c('p',[_vm._v("采用ES6的import … from …语法或CommonJSd的require()方法引入插件")]),_vm._v(" "),_c('p',[_vm._v("使用全局方法Vue.use( plugin )使用插件,可以传入一个选项对象Vue.use(MyPlugin, { someOption: true })")])]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"22、vue-loader是什么？使用它的用途有哪些？","name":"22"}},[_c('p',[_vm._v("解析.vue文件的一个加载器。")]),_vm._v(" "),_c('p',[_vm._v("用途：js可以写es6、style样式可以scss或less、template可以加jade等")])]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"23、scss是什么？在vue.cli中的安装使用步骤是？有哪几大特性？","name":"23"}},[_c('p',[_vm._v("答：css的预编译。")]),_vm._v(" "),_c('p',[_vm._v("使用步骤：")]),_vm._v(" "),_c('p',[_vm._v("第一步：先装css-loader、node-loader、sass-loader等加载器模块")]),_vm._v(" "),_c('p',[_vm._v("第二步：在build目录找到webpack.base.config.js，在那个extends属性中加一个拓展.scss")]),_vm._v(" "),_c('p',[_vm._v("第三步：在同一个文件，配置一个module属性")]),_vm._v(" "),_c('p',[_vm._v("第四步：然后在组件的style标签加上lang属性 ，例如：lang=”scss”")]),_vm._v(" "),_c('p',[_vm._v("特性:")]),_vm._v(" "),_c('p',[_vm._v("可以用变量，例如（$变量名称=值）；")]),_vm._v(" "),_c('p',[_vm._v("可以用混合器，例如（）")]),_vm._v(" "),_c('p',[_vm._v("可以嵌套")])]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"24、为什么避免 v-if 和 v-for 用在一起","name":"24"}},[_c('p',[_vm._v("当 Vue 处理指令时，v-for 比 v-if 具有更高的优先级，通过v-if 移动到容器元素，不会再重复遍历列表中的每个值。取而代之的是，我们只检查它一次，且不会在 v-if 为否的时候运算 v-for。")]),_vm._v(" "),_c('p')]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"25、简述Vue的响应式原理","name":"25"}},[_c('p',[_vm._v("当一个Vue实例创建时，vue会遍历data选项的属性，用 Object.defineProperty 将它们转为 getter/setter并且在内部追踪相关依赖，在属性被访问和修改时通知变化。")]),_vm._v(" "),_c('p',[_vm._v("每个组件实例都有相应的 watcher 程序实例，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 setter 被调用时，会通知 watcher 重新计算，从而致使它关联的组件得以更新。")]),_vm._v(" "),_c('div',[_c('img',{attrs:{"src":"https://image.fundebug.com/2019-02-28-01.png","alt":""}})]),_vm._v(" "),_c('p')]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"26、delete和Vue.delete删除数组的区别","name":"26"}},[_c('p',[_vm._v("delete只是被删除的元素变成了 empty/undefined 其他的元素的键值还是不变。")]),_vm._v(" "),_c('p',[_vm._v("Vue.delete直接删除了数组 改变了数组的键值。")]),_vm._v(" "),_c('p')]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"27、如何优化SPA应用的首屏加载速度慢的问题？","name":"27"}},[_c('p',[_vm._v("将公用的JS库通过script标签外部引入，减小app.bundel的大小，让浏览器并行下载资源文件，提高下载速度；")]),_vm._v(" "),_c('p',[_vm._v("在配置 路由时，页面和组件使用懒加载的方式引入，进一步缩小 app.bundel 的体积，在调用某个组件时再加载对应的js文件；")]),_vm._v(" "),_c('p',[_vm._v("加一个首屏 loading 图，提升用户体验；")]),_vm._v(" "),_c('p')]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"28、","name":"28"}}),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"29、","name":"29"}}),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"30、","name":"330"}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 522 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"interview_questions_wrap"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShowList),expression:"isShowList"}],staticClass:"list"},[_c('el-row',[_c('el-link',{staticClass:"name",on:{"click":function($event){return _vm.showOne('js')}}},[_vm._v("JS")]),_vm._v(" "),_c('el-link',{staticClass:"name",on:{"click":function($event){return _vm.showOne('jquery')}}},[_vm._v("jQuery")]),_vm._v(" "),_c('el-link',{staticClass:"name",on:{"click":function($event){return _vm.showOne('h5')}}},[_vm._v("H5")]),_vm._v(" "),_c('el-link',{staticClass:"name",on:{"click":function($event){return _vm.showOne('vue')}}},[_vm._v("vue")]),_vm._v(" "),_c('el-link',{staticClass:"name",on:{"click":function($event){return _vm.showOne('webpack')}}},[_vm._v("webapck")]),_vm._v(" "),_c('el-link',{staticClass:"name",on:{"click":function($event){return _vm.showOne('css')}}},[_vm._v("CSS")]),_vm._v(" "),_c('el-link',{staticClass:"name",on:{"click":function($event){return _vm.showOne('npm')}}},[_vm._v("npm")]),_vm._v(" "),_c('el-link',{staticClass:"name",on:{"click":function($event){return _vm.showOne('gulp')}}},[_vm._v("gulp")]),_vm._v(" "),_c('el-link',{staticClass:"name",on:{"click":function($event){return _vm.showOne('es6')}}},[_vm._v("ES6")]),_vm._v(" "),_c('el-link',{staticClass:"name",on:{"click":function($event){return _vm.showOne('1')}}},[_vm._v("vue")]),_vm._v(" "),_c('el-link',{staticClass:"name",on:{"click":function($event){return _vm.showOne('1')}}},[_vm._v("vue")])],1)],1),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isShowList),expression:"!isShowList"}],staticClass:"one_wrap"},[_c('el-row',[_c('el-button',{attrs:{"type":"text"},on:{"click":_vm.backList}},[_vm._v("<<返回列表")])],1),_vm._v(" "),_c('el-row',[(_vm.active == 'js')?_c('js'):_vm._e(),_vm._v(" "),(_vm.active == 'es6')?_c('es6'):_vm._e(),_vm._v(" "),(_vm.active == 'vue')?_c('vue'):_vm._e()],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 523 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(231);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_31d47e35_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(525);
function injectStyle (ssrContext) {
  __webpack_require__(524)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-31d47e35"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_31d47e35_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 524 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 525 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"kinetic_wrap"},[_c('p',[_vm._v("学习地址：https://www.cnblogs.com/zfc2201/articles/7224142.html")]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo1')}}},[_vm._v("Demo1")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo1),expression:"showDemo.demo1"}],ref:"canvas1",staticClass:"canvas_test canvas1",attrs:{"id":"canvas1"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo2')}}},[_vm._v("Demo2")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo2),expression:"showDemo.demo2"}],ref:"canvas2",staticClass:"canvas_test canvas2",attrs:{"id":"canvas2"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo3')}}},[_vm._v("Demo3 - 图形组")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo3),expression:"showDemo.demo3"}],ref:"canvas3",staticClass:"canvas_test canvas3",attrs:{"id":"canvas3"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo4')}}},[_vm._v("Demo4 - 图形样式（颜色填充）")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo4),expression:"showDemo.demo4"}],ref:"canvas4",staticClass:"canvas_test canvas4",attrs:{"id":"canvas4"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo5')}}},[_vm._v("Demo5 - 图形样式（线性渐变填充）")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo5),expression:"showDemo.demo5"}],ref:"canvas5",staticClass:"canvas_test canvas5",attrs:{"id":"canvas5"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo6')}}},[_vm._v("Demo6 - 图形样式（径向渐变填充）")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo6),expression:"showDemo.demo6"}],ref:"canvas6",staticClass:"canvas_test canvas6",attrs:{"id":"canvas6"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo7')}}},[_vm._v("Demo7 - 图形样式（图像填充）")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo7),expression:"showDemo.demo7"}],ref:"canvas7",staticClass:"canvas_test canvas7",attrs:{"id":"canvas7"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo8')}}},[_vm._v("Demo8 - 图形样式（线条颜色与宽度）")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo8),expression:"showDemo.demo8"}],ref:"canvas8",staticClass:"canvas_test canvas8",attrs:{"id":"canvas8"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo9')}}},[_vm._v("Demo9 - 图形样式（透明）")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo9),expression:"showDemo.demo9"}],ref:"canvas9",staticClass:"canvas_test canvas9",attrs:{"id":"canvas9"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo10')}}},[_vm._v("Demo10 - 图形样式（阴影）")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo10),expression:"showDemo.demo10"}],ref:"canvas10",staticClass:"canvas_test canvas10",attrs:{"id":"canvas10"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo11')}}},[_vm._v("Demo11 - 图形样式（线段间连接点样式）")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo11),expression:"showDemo.demo11"}],ref:"canvas11",staticClass:"canvas_test canvas11",attrs:{"id":"canvas11"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo12')}}},[_vm._v("Demo12 - 图形样式（图形的隐藏与显示）")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo12),expression:"showDemo.demo12"}],ref:"canvas12",staticClass:"canvas_test canvas12",attrs:{"id":"canvas12"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo13')}}},[_vm._v("Demo13 - 事件响应（ 图形的事件响应 ）")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo13),expression:"showDemo.demo13"}],ref:"canvas13",staticClass:"canvas_test canvas13",attrs:{"id":"canvas13"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo14')}}},[_vm._v("Demo14 - 事件响应（ 像素检测 ）")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo14),expression:"showDemo.demo14"}],ref:"canvas14",staticClass:"canvas_test canvas14",attrs:{"id":"canvas14"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo15')}}},[_vm._v("Demo15 - 事件响应（ 事件命名 ）")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo15),expression:"showDemo.demo15"}],ref:"canvas15",staticClass:"canvas_test canvas15",attrs:{"id":"canvas15"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo16')}}},[_vm._v("Demo16 - 事件响应（ 鼠标位置的获取 ）")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo16),expression:"showDemo.demo16"}],ref:"canvas16",staticClass:"canvas_test canvas16",attrs:{"id":"canvas16"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo17')}}},[_vm._v("Demo17 - 事件响应（ 多事件绑定 ）")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo17),expression:"showDemo.demo17"}],ref:"canvas17",staticClass:"canvas_test canvas17",attrs:{"id":"canvas17"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo18')}}},[_vm._v("Demo18 - 事件响应（ 取消事件绑定 ）")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo18),expression:"showDemo.demo18"}],ref:"canvas18",staticClass:"canvas_test canvas18",attrs:{"id":"canvas18"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo19')}}},[_vm._v("Demo19 - 事件响应（ 事件监听开关 ）")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo19),expression:"showDemo.demo19"}],ref:"canvas19",staticClass:"canvas_test canvas19",attrs:{"id":"canvas19"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo20')}}},[_vm._v("Demo20 - 事件响应（ 禁止事件向上级对象传递 ）")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo20),expression:"showDemo.demo20"}],ref:"canvas20",staticClass:"canvas_test canvas20",attrs:{"id":"canvas20"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo21')}}},[_vm._v("Demo21 - 事件响应（ 在事件处理方法中获取图形对象 ）")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo21),expression:"showDemo.demo21"}],ref:"canvas21",staticClass:"canvas_test canvas21",attrs:{"id":"canvas21"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo22')}}},[_vm._v("Demo22 - 事件响应（ 触发事件响应方法 ）")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo22),expression:"showDemo.demo22"}],ref:"canvas22",staticClass:"canvas_test canvas22",attrs:{"id":"canvas22"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo23')}}},[_vm._v("Demo23 - 拖拽（ 拖拽线条 ）")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo23),expression:"showDemo.demo23"}],ref:"canvas23",staticClass:"canvas_test canvas23",attrs:{"id":"canvas23"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo24')}}},[_vm._v("Demo24 - 拖拽（ 拖拽事件 ）")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo24),expression:"showDemo.demo24"}],ref:"canvas24",staticClass:"canvas_test canvas24",attrs:{"id":"canvas24"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo25')}}},[_vm._v("Demo25 - 拖拽（ 拖拽方向限制 ）")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo25),expression:"showDemo.demo25"}],ref:"canvas25",staticClass:"canvas_test canvas25",attrs:{"id":"canvas25"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo26')}}},[_vm._v("Demo26 - 拖拽（ 拖拽范围限制 ）")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo26),expression:"showDemo.demo26"}],ref:"canvas26",staticClass:"canvas_test canvas26",attrs:{"id":"canvas26"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo27')}}},[_vm._v("Demo27 - 动画（Manual - oscillation animation）")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo27),expression:"showDemo.demo27"}],ref:"canvas27",staticClass:"canvas_test canvas27",attrs:{"id":"canvas27"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo28')}}},[_vm._v("Demo28 - 动画（ Manual - rotation animation ）")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo28),expression:"showDemo.demo28"}],ref:"canvas28",staticClass:"canvas_test canvas28",attrs:{"id":"canvas28"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo29')}}},[_vm._v("Demo29 - 动画（ Manual - tween spline ）")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo29),expression:"showDemo.demo29"}],ref:"canvas29",staticClass:"canvas_test canvas29",attrs:{"id":"canvas29"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo30')}}},[_vm._v("Demo30 - 动画（ blur and tween spline ）")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo30),expression:"showDemo.demo30"}],ref:"canvas29",staticClass:"canvas_test canvas30",attrs:{"id":"canvas30"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo31')}}},[_vm._v("Demo31 - 选择器（ 根据ID获取对象 ）")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo31),expression:"showDemo.demo31"}],ref:"canvas31",staticClass:"canvas_test canvas31",attrs:{"id":"canvas31"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo32')}}},[_vm._v("Demo32 - 选择器（ 根据名称获取对象 ）")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo32),expression:"showDemo.demo32"}],ref:"canvas32",staticClass:"canvas_test canvas32",attrs:{"id":"canvas32"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo33')}}},[_vm._v("Demo33 - 在容器之间移动图形对象（ serialize stage with custom shape ）")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo33),expression:"showDemo.demo33"}],ref:"canvas33",staticClass:"canvas_test canvas33",attrs:{"id":"canvas33"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo34')}}},[_vm._v("Demo34 - 对象的上下关系（ move blue layer on top of green layer with moveToTop ）")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo34),expression:"showDemo.demo34"}],ref:"canvas34",staticClass:"canvas_test canvas34",attrs:{"id":"canvas34"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo35')}}},[_vm._v("Demo35 - 对象的上下关系（ 层的上下关系 ）")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo35),expression:"showDemo.demo35"}],ref:"canvas35",staticClass:"canvas_test canvas35",attrs:{"id":"canvas35"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo36')}}},[_vm._v("Demo36 - 对象的上下关系（ 图形对象的上下关系 ）")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo36),expression:"showDemo.demo36"}],ref:"canvas36",staticClass:"canvas_test canvas36",attrs:{"id":"canvas36"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo37')}}},[_vm._v("Demo37 - 舞台")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo37),expression:"showDemo.demo37"}],ref:"canvas37",staticClass:"canvas_test canvas37",attrs:{"id":"canvas37"}})]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('p',{staticClass:"demo_name",on:{"click":function($event){return _vm.changeDemoState('demo38')}}},[_vm._v("Demo38")]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDemo.demo38),expression:"showDemo.demo38"}],ref:"canvas38",staticClass:"canvas_test canvas38",attrs:{"id":"canvas38"}})])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 526 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(232);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_774a41be_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(528);
function injectStyle (ssrContext) {
  __webpack_require__(527)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-774a41be"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_774a41be_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 527 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 528 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"kinetic_wrap"},[_c('p',[_vm._v("https://www.cnblogs.com/maqunjing/p/3160325.html")]),_vm._v(" "),_c('el-row',{staticClass:"canvas_wrap"},[_c('div',{ref:"canvas",staticClass:"canvas",attrs:{"id":"canvas"}})])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 529 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(233);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c318049e_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(531);
function injectStyle (ssrContext) {
  __webpack_require__(530)
}
var normalizeComponent = __webpack_require__(5)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c318049e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c318049e_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 530 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 531 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"jsplumb_wrap"},[_vm._v("\n    jsplumb\n")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 532 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 533 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 534 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mutations__ = __webpack_require__(538);
// 学习地址：https://blog.csdn.net/qq_43363884/article/details/95948884

/*  方法1初级：
// 把所有东西都写在一个文件中了，这样数据多时，耦合度太高，不便于维护，而且mutations也不能解决异步问题
import Vue from "vue"
import Vuex from "vuex"
 
Vue.use(Vuex);
 
export default new Vuex.Store({
    state:{
        pathName: "",
        currDbSource: {},
        currJobData: {},
        DbSource: []
    },
    mutations:{
        // 保存当前菜单栏的路径
        savePath(state,pathName){
            state.pathName = pathName;
        },
        // 保存当前点击的数据源
        saveCurrDbSource(state,currDbSource){
            state.currDbSource = currDbSource;
        },
        // 保存当前点击的元数据
        saveCurrJobData(state,currJobData){
            state.currJobData = currJobData;
        },
        // 保存所有数据源
        saveDbSource(state,DbSource){
            state.DbSource = DbSource;
        }
    }
})

// 使用
// 保存数据 this.$store.commit(方法名, 参数)
// 获取变量 this.$store.state.变量名
*/

// 方法2：
// 引入相应模块，暴露出store，供vue注册后全局使用






__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
    state: __WEBPACK_IMPORTED_MODULE_2__state__["a" /* default */],
    actions: __WEBPACK_IMPORTED_MODULE_3__actions__,
    mutations: __WEBPACK_IMPORTED_MODULE_4__mutations__
}));

// 使用
// 保存数据
/*
import { mapActions } from 'vuex';
// 2种方式
// 方法一（dispatch）
this.$store.dispatch('saveDbSource', this.DbSource);
// 方法二（映射）
// 1、通过methods方法添加映射关系 
methods: {
    ...mapActions(['saveDbSource'])
}
 // 2、使用
this.saveDbSource
*/

// 获取数据
/*
import { mapState } from 'vuex';
computed: {
    ...mapState(['DbSource']),
},
watch: {
    DbSource(currVal) {
        // 监听mapState中的变量，当数据变化（有值、值改变等），
        // 保证能拿到完整的数据，不至于存在初始化没有数据的问题，然后可以赋给本组件data中的变量
        this.currVal = currVal;
    }
}
*/

/***/ }),
/* 535 */,
/* 536 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// 保存所有数据，以对象的方式导出
/* harmony default export */ __webpack_exports__["a"] = ({
    pathName: '', // 路由
    currDbSource: {}, // 当前数据源
    currJobData: {}, // 当前元数据
    DbSource: [], // 所有数据源，供元数据界面下拉列表使用
    selectJobMeta: {}, // 当前选择的元数据（搜索后点击的单条数据）
    specialSubject: [], // 专题数据（多条）
    duplicateJobMeta: {} // 复制的数据
});

/***/ }),
/* 537 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "savePath", function() { return savePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveCurrDbSource", function() { return saveCurrDbSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveCurrJobData", function() { return saveCurrJobData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveDbSource", function() { return saveDbSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveSelectJobMeta", function() { return saveSelectJobMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveSpecialSubject", function() { return saveSpecialSubject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveDuplicateJobMeta", function() { return saveDuplicateJobMeta; });
// 暴露给用户使用，借此触发mutations中的方法，保存数据（可执行异步操作）


// 触发保存菜单栏的路径方法
var savePath = function savePath(_ref, payload) {
    var commit = _ref.commit;

    commit('savePath', payload);
};

// 触发获取当前点击的数据源方法
var saveCurrDbSource = function saveCurrDbSource(_ref2, payload) {
    var commit = _ref2.commit;

    commit('saveCurrDbSource', payload);
};

// 触发获取当前点击的元数据方法
var saveCurrJobData = function saveCurrJobData(_ref3, payload) {
    var commit = _ref3.commit;

    commit('saveCurrJobData', payload);
};

// 触发获取所有数据源方法
var saveDbSource = function saveDbSource(_ref4, payload) {
    var commit = _ref4.commit;

    commit('saveDbSource', payload);
};

// 触发保存搜索后选择单条元数据方法
var saveSelectJobMeta = function saveSelectJobMeta(_ref5, payload) {
    var commit = _ref5.commit;

    commit('saveSelectJobMeta', payload);
};

// 触发保存搜索专题数据方法
var saveSpecialSubject = function saveSpecialSubject(_ref6, payload) {
    var commit = _ref6.commit;

    commit('saveSpecialSubject', payload);
};

// 触发保存复制元数据方法
var saveDuplicateJobMeta = function saveDuplicateJobMeta(_ref7, payload) {
    var commit = _ref7.commit;

    commit('saveDuplicateJobMeta', payload);
};

/*
// 方法一： 通过context上下文用来触发事件
export const saveDbSource = (context, payload) => {
    context.commit('saveDbSource', payload);
};
  
// 方法二：通过 commit 触发事件
export const saveDbSource = ({ commit }, payload) => {
   commit('saveDbSource', payload);
};
*/

/***/ }),
/* 538 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "savePath", function() { return savePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveCurrDbSource", function() { return saveCurrDbSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveCurrJobData", function() { return saveCurrJobData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveDbSource", function() { return saveDbSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveSelectJobMeta", function() { return saveSelectJobMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveSpecialSubject", function() { return saveSpecialSubject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveDuplicateJobMeta", function() { return saveDuplicateJobMeta; });
// 保存所有方法，用来改变state的数据

// 保存当前菜单栏的路径
var savePath = function savePath(state, pathName) {
  state.pathName = pathName;
};

// 保存当前点击的数据源
var saveCurrDbSource = function saveCurrDbSource(state, currDbSource) {
  state.currDbSource = currDbSource;
};

// 保存当前点击的元数据
var saveCurrJobData = function saveCurrJobData(state, currJobData) {
  state.currJobData = null;
  state.currJobData = currJobData;
};

// 保存所有数据源
var saveDbSource = function saveDbSource(state, DbSource) {
  state.DbSource = DbSource;
};

// 保存搜索后选择的那一条元数据
var saveSelectJobMeta = function saveSelectJobMeta(state, selectJobMeta) {
  state.selectJobMeta = selectJobMeta;
};

// 保存搜索的那一类专题
var saveSpecialSubject = function saveSpecialSubject(state, specialSubject) {
  state.specialSubject = specialSubject;
  state.selectJobMeta = {};
};

// 保存复制的元数据（名称为空）
var saveDuplicateJobMeta = function saveDuplicateJobMeta(state, duplicateJobMeta) {
  state.duplicateJobMeta = duplicateJobMeta;
};

/***/ }),
/* 539 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var isMathjaxConfig = false; //用于标识是否配置
var initMathjaxConfig = function initMathjaxConfig() {
    if (!window.MathJax) {
        return;
    }
    window.MathJax.Hub.Config({
        showProcessingMessages: false, //关闭js加载过程信息
        messageStyle: "none", //不显示信息
        jax: ["input/TeX", "output/HTML-CSS"],
        tex2jax: {
            inlineMath: [["$", "$"], ["\\(", "\\)"]], //行内公式选择符
            displayMath: [["$$", "$$"], ["\\[", "\\]"]], //段内公式选择符
            skipTags: ["script", "noscript", "style", "textarea", "pre", "code", "a"] //避开某些标签
        },
        "HTML-CSS": {
            availableFonts: ["STIX", "TeX"], //可选字体
            showMathMenu: false //关闭右击菜单显示
        }
    });
    isMathjaxConfig = true; //配置完成，改为true
};

var MathQueue = function MathQueue(elementId) {
    if (!window.MathJax) {
        return;
    }
    window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub, document.getElementById(elementId)]);
};

/* harmony default export */ __webpack_exports__["a"] = ({
    isMathjaxConfig: isMathjaxConfig,
    initMathjaxConfig: initMathjaxConfig,
    MathQueue: MathQueue
});

/***/ })
]),[319]);
//# sourceMappingURL=app.1742eb9ed5db1ea87c51.js.map