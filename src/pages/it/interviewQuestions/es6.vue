<template>
    <div class="interview_es6_wrap">
        <el-collapse v-model="activeNames" @change="handleChange" class="question_answer">
            <el-collapse-item title="1、ES6的 let、const 与 ES5的 var 的区别" name="1"></el-collapse-item>
            <el-collapse-item title="2、变量的解构赋值" name="2">
                <h5>（1）数组的解构赋值</h5>
                <p>只要等号两边的模式相同，左边的变量会被赋予对应的值</p>
                <div>
                    <pre class="javascript hljs">
let [a,b,c] = [1,2,3];
let [foo, [[bar], baz]] = [1, [[2], 3]];
let [,, third] = ["foo", "bar", "baz"];
let [x,,y] = [1,2,3];
let [head, ...tail] = [1,2,3,4];
let [x,y,...z] = ['a']; // x：a， y：undefined， z：[]
                    </pre>
                </div>
                <h5>（2）对象的解构赋值</h5>
                <p>先找到同名属性，再赋值给对应的变量。</p>
                <p>真正被赋值的是后者文不是前者。</p>
                <div>
                    <pre class="javascript hljs">
let {foo, bar} = {foo: 'aaa', bar: 'bbb'};
let {foo: bar} = {foo: 'aaa', bar: 'bbb'};
                    </pre>
                </div>
                <h5>（3）字符串的解构赋值</h5>
                <div>
                    <pre class="javascript hljs">
const [a,b,c,d,e] = 'hello';
let {length: len} = 'hello';
                    </pre>
                </div>
                <h5>（4）数值和布尔值的解构赋值</h5>
                <p>解构赋值时，若等号右边是数值和布尔值，则会先转为对象。</p>
                <div>
                    <pre class="javascript hljs">
let {toString: s} = 123; // toString 是模式
// s === Number.prototype.toString  ⇒  true
let {toString: s} = true; 
                    </pre>
                </div>
                <h5>（5）函数参数的解构赋值</h5>
                <div>
                    <pre class="javascript hljs">
function add([x, y]){ return x+y; }
[[1, 2], [3, 4]].map(([a, b]) +> a+b);
function move({x=0, y=0}={}){ return [x, y];} // 参数默认值
                    </pre>
                </div>
            </el-collapse-item>
            <el-collapse-item title="3、变量的解构赋值用途" name="3">
                <p>1、交换变量的值 → [x, y]=[y, x];</p>
                <p>2、从函数返回多个值</p>
                <p>3、函数参数的定义</p>
                <p>4、提取JSON数据</p>
                <p>5、函数参数的默认值</p>
                <p>6、遍历 Map 结构</p>
                <p>7、输入模块的指定方法</p>
            </el-collapse-item>
            <el-collapse-item title="4、字符串的扩展" name="4">
                <p>1、字符串的遍历器接口</p>
                <p>2、模板字符串</p>
            </el-collapse-item>
            <el-collapse-item title="5、字符串的新增方法" name="5">
                <p>includes()、startsWith()、endsWith()、repeat()、padStart()、padEnd()、trimStart()、trimEnd()</p>
                <div>
                    <pre class="javascript hljs">
let str = "my name is cily!";
str.startsWith('name'); → false
str.startsWith('my'); → true
str.startsWith('name', 3); → true
str.startsWith('name', 2); → false
str.endsWith('!'); → true
str.endsWith('cily'); → false
str.endsWith('cily', 1); → false
str.endsWith('is', 10); → true ⇒ 前 10 个字符是否以 is 结尾
                    </pre>
                </div>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </el-collapse-item>
            <el-collapse-item title="6、" name="6">
            </el-collapse-item>
            <el-collapse-item title="7、" name="7">
            </el-collapse-item>
            <el-collapse-item title="8、" name="8"></el-collapse-item>
            <el-collapse-item title="9、" name="9">

            </el-collapse-item>
            <el-collapse-item title="10、" name="10">
            </el-collapse-item>
            <el-collapse-item title="11、" name="11">
            </el-collapse-item>
            <el-collapse-item title="12、" name="12">
            </el-collapse-item>
            <el-collapse-item title="13、" name="13"></el-collapse-item>
            <el-collapse-item title="14、" name="14">
            </el-collapse-item>
            <el-collapse-item title="15、" name="15"></el-collapse-item>
            <el-collapse-item title="16、" name="16"></el-collapse-item>
            <el-collapse-item title="17、" name="17">
            </el-collapse-item>
            <el-collapse-item title="18、" name="18">
            </el-collapse-item>
            <el-collapse-item title="19、" name="19">
            </el-collapse-item>
            <el-collapse-item title="20、" name="20"></el-collapse-item>
            <el-collapse-item title="21、" name="21"></el-collapse-item>
          </el-collapse>
    </div>
</template>

<script>
    export default {
        components: {  },
        data(){
            return {
                activeNames: ['19'],
                isShowList: true,
                active: '',
            };
        },
        created(){
        },
        mounted(){},
        methods: {
            handleChange(val) {
                console.log(val);
            },
        },
    };
</script>

<style lang="less" rel="stylesheet/less" type="text/less" scoped>
.interview_es6_wrap{
    .question_answer{ 
        p{ margin: 5px 0; }
    }
    /deep/ .el-collapse-item__header{ font-size: 18px; font-weight: bold; }
    .code{
        padding: 1rem; max-height: 35rem; line-height: 1.5; background-color: #e9ecef; overflow: auto; margin-bottom: 1.25rem;
        font-family: SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace; margin-top: 0;
    }
    .hljs{ display: block; overflow-x: auto; padding: .5em; color: #333; background: #f8f8f8; margin: 1px 0; }


    .question{
        font-size: 18px; font-weight: bold; padding: 15px 0 10px;
        .el-icon-question{ color: #E6A23C; margin-right: 15px;}
    }
    .answer{}
}
</style>
