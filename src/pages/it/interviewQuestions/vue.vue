<template>
    <div class="interview_vue_wrap">
        <el-collapse v-model="activeNames" @change="handleChange" class="question_answer">
            <el-collapse-item title="1、vuex" name="1">
                <p>vuex是一个专门为vue.js应用程序开发的状态管理模式</p>
                <p>vuex可以帮助我们管理共享状态，也就是管理全局变量</p>
                <p>vuex的几个核心概念：</p>
                <p>vuex使用一个store对象管理应用的状态，一个store包括：state,getter，mutation,action四个属性</p>
                <p>state：state意为'状态'，是vuex状态管理的数据源</p>
                <p>getter：getter的作用与filters有一些相似，可以将state进行过滤后输出</p>
                <p>mutation：mutation是vuex中改变state的唯一途径，并且只能同步操作</p>
                <p>action：一些对state的异步操作可以放在action中，并通过在action提交mutaion变更状态</p>
                <p>module：当store对象过于庞大时，可以根据具体的业务需求分为多个module</p>
                <p>我们可以在组件中触发 Action，Action 则会提交 Mutation，Mutaion 会对 State 进行修改，组件再根据 State 、Getter 渲染页面</p>
                <p>----------------------</p>
                <p>在main.js引入store，注入。新建一个目录store，…… export 。</p>
                <p>使用场景有：单页应用中，组件之间的状态。音乐播放、登录状态、加入购物车</p>
                <p>vuex有哪几种属性？  → 分别是 State、 Getter、Mutation 、Action、 Module </p>
                <h5>vuex的State特性：</h5>
                <p>A、Vuex就是一个仓库，仓库里面放了很多对象。其中 state 就是数据源存放地，对应于一般 Vue 对象里面的 data</p>
                <p>B、state里面存放的数据是响应式的，Vue组件从store中读取数据，若是store中的数据发生改变，依赖这个数据的组件也会发生更新</p>
                <p>C、它通过mapState把全局的 state 和 getters 映射到当前组件的 computed 计算属性中 </p>
                <h5>vuex 的 Getter 特性：</h5>
                <p>A、getters 可以对State进行计算操作，它就是Store的计算属性</p>
                <p>B、 虽然在组件内也可以做计算属性，但是getters 可以在多组件之间复用</p>
                <p>C、 如果一个状态只在一个组件内使用，是可以不用getters</p>
                <h5>vuex的Mutation特性：</h5>
                <p>Action 类似于 mutation，不同在于：Action 提交的是 mutation，而不是直接变更状态；Action 可以包含任意异步操作。</p>
                <h5>不用Vuex会带来什么问题？</h5>
                <p>可维护性会下降，想修改数据要维护三个地方；</p>
                <p>可读性会下降，因为一个组件里的数据，根本就看不出来是从哪来的；</p>
                <p>增加耦合，大量的上传派发，会让耦合性大大增加，本来Vue用Component就是为了减少耦合，现在这么用，和组件化的初衷相背。</p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </el-collapse-item>
            <el-collapse-item title="2、vue中的路由拦截器的作用" name="2">
                <p>路由拦截，权限设置</p>
                <p>例如：当用户没有登录权限的时候就会跳转到登录页面，用到的字段requireAuth:true</p>
            </el-collapse-item>
            <el-collapse-item title="3、axios的作用" name="3">
                <p>vue中的ajax，用于向后台发起请求</p>
                <p>特点：</p>
                <p>从浏览器中创建XMLHttpRequests</p>
                <p>从node.js创建http请求</p>
                <p>支持Promise API</p>
                <p>拦截请求和响应</p>
                <p>转换请求数据和响应数据</p>
                <p>取消请求</p>
                <p>自动转换json数据</p>
                <p>客户端支持防御XSRF</p>
                <p></p>
                <p>promise：</p>
                <p>一个对象用来传递异步操作的信息</p>
                <p>promise的出现主要是解决地狱回调的问题，无需多次嵌套</p>
                <p>本质：分离异步数据获取和业务</p>
                <p> 拦截器分为请求拦截器和响应拦截器</p>
                <p>#请求拦截器</p>
                <div>
                    <pre class="javascript hljs">
axios.interceptors.request.use(function(config){
    return config;
},function(error){
    return Promise.reject(error);
});
                    </pre>
                </div>
                <p>#响应拦截器</p>
                <div>
                    <pre class="javascript hljs">
axios.interceptors.response.use(function(response){
    return response;
},function(error){
    return Promise.reject(error);
});
                    </pre>
                </div>
                <p></p>
                <p></p>
            </el-collapse-item>
            <el-collapse-item title="4、列举vue的常见指令" name="4">
                <p>1.文本插值：{{}} Mustache</p>
                <p>2.DOM属性绑定：v-bind</p>
                <p>3.指令绑定一个事件监听器：v-on</p>
                <p>4.实现表单输入和应用状态之间的双向绑定：v-model</p>
                <p>5.控制切换一个元素的显示：v-if和v-else</p>
                <p>6.列表渲染:v-for</p>
            </el-collapse-item>
            <el-collapse-item title="5、列举Http请求中常见的请求方式" name="5">
                <p>get → 向特定的路径资源发出请求，数据暴露在url中</p>
                <p>post → 向指定路径资源提交数据进行处理请求，数据包含在请求体中</p>
                <p>options → 返回服务器针对特定资源所支持的http请求方法，允许客户端查看，测试服务器性能</p>
                <p>head → 向服务器与get请求相一致的响应，响应体不会返回，可以不必传输整个响应内容</p>
                <p>put → 从客户端向服务器端传送的数据取代指定的文档的内容</p>
                <p>delete → 请求服务器删除指定的页面</p>
                <p>trace → 回显服务器收到的请求，主要用于测试或者诊断</p>
                <p>connect → http/1.1协议中预留给能够将连接改为管道方式的代理服务</p>
            </el-collapse-item>
            <el-collapse-item title="6、对于MVVM的理解" name="6">
                <p>MVVM 是 Model-View-ViewModel 的缩写。</p>
                <p>Model代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑。</p>
                <p>View 代表UI 组件，它负责将数据模型转化成UI 展现出来。</p>
                <p>ViewModel 监听模型数据的改变和控制视图行为、处理用户交互，简单理解就是一个同步View 和 Model的对象，连接Model和View。</p>
                <p>viewmodel和model实现双向数据绑定</p>
            </el-collapse-item>
            <el-collapse-item title="7、Vue的生命周期" name="7">
                <p>beforeCreate、created、beforeMount、mounted、beforeUpdate、updated、beforeDestroy、destroyed</p>
                <p>父子组件生命周期：父 beforeCreate → 父 created → 父 beforeMount → 子 beforeCreate → 子 created → 子 beforeMount → 子 mounted → 父 mounted</p>
                <p>activated: keep-alive组件激活时调用</p>
                <p>-------------------------</p>
                <p>1.什么是vue生命周期？</p>
                <p>答： Vue 实例从创建到销毁的过程，就是生命周期。从开始创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、销毁等一系列过程，称之为 Vue 的生命周期。</p>
                <p>2.vue生命周期的作用是什么？</p>
                <p>答：它的生命周期中有多个事件钩子，让我们在控制整个Vue实例的过程时更容易形成好的逻辑。</p>
                <p>3.vue生命周期总共有几个阶段？</p>
                <p>答：它可以总共分为8个阶段：创建前/后, 载入前/后,更新前/后,销毁前/销毁后。</p>
                <p>4.第一次页面加载会触发哪几个钩子？</p>
                <p>答：会触发 下面这几个beforeCreate, created, beforeMount, mounted 。</p>
                <p>5.DOM 渲染在 哪个周期中就已经完成？</p>
                <p>答：DOM 渲染在 mounted 中就已经完成了。</p>
                <p></p>
            </el-collapse-item>
            <el-collapse-item title="8、Vue实现数据双向绑定的原理：Object.defineProperty（）" name="8">
                <div>采用 <strong>数据劫持结合发布者-订阅者模式</strong> 的方式，通过 <strong>Object.defineProperty()</strong> 来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应监听回调。</div>
                <h5>具体步骤：</h5>
                <div><b>第一步：需要observe的数据对象进行递归遍历</b>，包括子属性对象的属性，都加上 setter和getter 这样的话，给这个对象的某个值赋值，就会触发setter，那么就能监听到了数据变化</div>
                <div><b>第二步：compile解析模板指令</b>，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图</div>
                <div><b>第三步：Watcher订阅者是Observer和Compile之间通信的桥梁</b>，主要做的事情是:</div>
                <p>1、在自身实例化时往属性订阅器(dep)里面添加自己</p>
                <p>2、自身必须有一个update()方法</p>
                <p>3、待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退。</p>
                <div><b>第四步：MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者</b>，通过Observer来监听自己的model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据model变更的双向绑定效果。</div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </el-collapse-item>
            <el-collapse-item title="9、Vue组件间的参数传递" name="9">
                <h5>1.父组件与子组件传值</h5>
                <p>父组件传给子组件：子组件通过props方法接受数据;</p>
                <p>子组件传给父组件：$emit方法传递参数</p>
                <h5>2.非父子组件间的数据传递，兄弟组件传值</h5>
                <p>eventBus，就是创建一个事件中心，相当于中转站，可以用它来传递事件和接收事件。项目比较小时，用这个比较合适。（虽然也有不少人推荐直接用VUEX，具体来说看需求咯。技术只是手段，目的达到才是王道。）</p>
            </el-collapse-item>
            <el-collapse-item title="10、Vue的路由实现：hash模式 和 history模式" name="10">
                <h5>hash模式：</h5>
                <p>在浏览器中符号“#”，#以及#后面的字符称之为hash，用window.location.hash读取；;</p>
                <p>特点：hash虽然在URL中，但不被包括在HTTP请求中；用来指导浏览器动作，对服务端安全无用，hash不会重加载页面。</p>
                <p>hash 模式下，仅 hash 符号之前的内容会被包含在请求中，如 http://www.xxx.com，因此对于后端来说，即使没有做到对路由的全覆盖，也不会返回 404 错误。</p>
                <p>history 模式下，前端的 URL 必须和实际向后端发起请求的 URL 一致，如 http://www.xxx.com/items/id。后端如果缺少对 /items/id 的路由处理，将返回 404 错误。</p>
                <h5>Vue-Router 官网里如此描述：</h5>
                <p>“不过这种模式要玩好，还需要后台配置支持……所以呢，你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面。”</p>
                <h5>history模式：</h5>
                <p>history采用HTML5的新特性；且提供了两个新方法：pushState（），replaceState（）可以对浏览器历史记录栈进行修改，以及popState事件的监听到状态变更。</p>
            </el-collapse-item>
            <el-collapse-item title="11、vue路由的钩子函数　" name="11">
                <p>首页可以控制导航跳转，beforeEach，afterEach等，一般用于页面title的修改。一些需要登录才能调整页面的重定向功能。</p>
                <p><b>beforeEach</b> 主要有3个参数to，from，next：</p>
                <p><b>to：</b>route即将进入的目标路由对象，</p>
                <p><b>from：</b>route当前导航正要离开的路由</p>
                <p><b>next：</b>function一定要调用该方法resolve这个钩子。执行效果依赖next方法的调用参数。可以控制网页的跳转。</p>
                <p></p>
            </el-collapse-item>
            <el-collapse-item title="12、vue-cli如何新增自定义指令" name="12">
                <div>
                    <pre class="javascript hljs">
1.创建局部指令
var app = new Vue({
    el: '#app',
    data: {    
    },
    // 创建指令(可以多个)
    directives: {
        // 指令名称
        dir1: {
            inserted(el) {
                // 指令中第一个参数是当前使用指令的DOM
                console.log(el);
                console.log(arguments);
                // 对DOM进行操作
                el.style.width = '200px';
                el.style.height = '200px';
                el.style.background = '#000';
            }
        }
    }
})

2.全局指令
Vue.directive('dir2', {
    inserted(el) {
        console.log(el);
    }
})

3.指令的使用
&lt;div id="app"&gt;
    &lt;div v-dir1&gt;&lt;/div&gt;
    &lt;div v-dir2&gt;&lt;/div&gt;
&lt;/div&gt;
                    </pre>
                </div>
            </el-collapse-item>
            <el-collapse-item title="13、vue如何自定义一个过滤器" name="13">
                <div>
                    <pre class="javascript hljs">
html代码：

&lt;div id="app"&gt
    &lt;input type="text" v-model="msg" /&gt
    {{msg| capitalize }}
&lt;/div&gt

JS代码：

var vm=new Vue({
    el:"#app",
    data:{
        msg:''
    },
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    }
})

全局定义过滤器

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

过滤器接收表达式的值 (msg) 作为第一个参数。capitalize 过滤器将会收到 msg的值作为第一个参数。
                    </pre>
                </div>
            </el-collapse-item>
            <el-collapse-item title="14、对keep-alive 的了解？" name="14">
                <p>keep-alive是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。</p>
                <p>在vue 2.1.0 版本之后，keep-alive新加入了两个属性: include(包含的组件缓存) 与 exclude(排除的组件不缓存，优先级大于include) 。</p>
                <p>使用方法</p>
                <div>
                    <pre class="javascript hljs">
&lt;keep-alive include='include_components' exclude='exclude_components'&gt;
    &lt;component&gt;
    &lt;!-- 该组件是否缓存取决于include和exclude属性 --&gt;
    &lt;/component&gt;
&lt;/keep-alive&gt;
                    </pre>
                </div>
                <p>参数解释</p>
                <p>include - 字符串或正则表达式，只有名称匹配的组件会被缓存</p>
                <p>exclude - 字符串或正则表达式，任何名称匹配的组件都不会被缓存</p>
                <p>include 和 exclude 的属性允许组件有条件地缓存。二者都可以用“，”分隔字符串、正则表达式、数组。当使用正则或者是数组时，要记得使用v-bind 。</p>
                <p>使用示例</p>
                <div>
                    <pre class="javascript hljs">
&lt;!-- 逗号分隔字符串，只有组件a与b被缓存。 --&gt;
&lt;keep-alive include="a,b"&gt;
    &lt;component&gt;&lt;/component&gt;
&lt;/keep-alive&gt;

&lt;!-- 正则表达式 (需要使用 v-bind，符合匹配规则的都会被缓存) --&gt;
&lt;keep-alive :include="/a/b"&gt;
    &lt;component&gt; &lt;/component&gt;
&lt;/keep-alive&gt;

&lt;!-- Array (需要使用 v-bind，被包含的都会被缓存) --&gt;
&lt;keep-alive :include="['a', 'b']"&gt;
    &lt;component&gt;&lt;/component&gt;
&lt;/keep-alive&gt;
                    </pre>
                </div>
            </el-collapse-item>
            <el-collapse-item title="15、怎么定义 vue-router 的动态路由? 怎么获取传过来的值" name="15">
                <p>在 router 目录下的 index.js 文件中，对 path 属性加上 /:id，使用 router 对象的 params.id 获取。</p>
            </el-collapse-item>
            <el-collapse-item title="16、vue常用的修饰符" name="16">
                <p>.prevent: 提交事件不再重载页面；</p>
                <p>.stop: 阻止单击事件冒泡；</p>
                <p>.self: 当事件发生在该元素本身而不是子元素的时候会触发；</p>
                <p>.capture: 事件侦听，事件发生的时候会调用</p>
                <p></p>
            </el-collapse-item>
            <el-collapse-item title="17、vue.js的两个核心是什么？" name="17">
                <p>数据驱动、组件系统</p>
            </el-collapse-item>
            <el-collapse-item title="18、vue中 key 值的作用？" name="18">
                <p>当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。key的作用主要是为了高效的更新虚拟DOM。</p>
            </el-collapse-item>
            <el-collapse-item title="19、vue如何实现按需加载配合webpack设置" name="19">
                <p>webpack中提供了require.ensure()来实现按需加载。以前引入路由是通过import 这样的方式引入，改为const定义的方式进行引入。</p>
                <p>不进行页面按需加载引入方式：import home from ‘…/…/common/home.vue’</p>
                <p>进行页面按需加载的引入方式：const home = r => require.ensure( [], () => r (require(’…/…/common/home.vue’)))</p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </el-collapse-item>
            <el-collapse-item title="20、Vue中引入组件的步骤?" name="20">
                <p>1）采用ES6的import … from …语法或CommonJS的require()方法引入组件</p>
                <p>2）对组件进行注册,代码如下</p>
                <div>
                    <pre class="javascript hljs">
// 注册
Vue.component('my-component', { template:'A custom component!' })
                    </pre>
                </div>
                <p>3）使用组件</p>
            </el-collapse-item>
            <el-collapse-item title="21、在Vue中使用插件的步骤" name="21">
                <p>采用ES6的import … from …语法或CommonJSd的require()方法引入插件</p>
                <p>使用全局方法Vue.use( plugin )使用插件,可以传入一个选项对象Vue.use(MyPlugin, { someOption: true })</p>
            </el-collapse-item>
            <el-collapse-item title="22、vue-loader是什么？使用它的用途有哪些？" name="22">
                <p>解析.vue文件的一个加载器。</p>
                <p>用途：js可以写es6、style样式可以scss或less、template可以加jade等</p>
            </el-collapse-item>
            <el-collapse-item title="23、scss是什么？在vue.cli中的安装使用步骤是？有哪几大特性？" name="23">
                <p>答：css的预编译。</p>
                <p>使用步骤：</p>
                <p>第一步：先装css-loader、node-loader、sass-loader等加载器模块</p>
                <p>第二步：在build目录找到webpack.base.config.js，在那个extends属性中加一个拓展.scss</p>
                <p>第三步：在同一个文件，配置一个module属性</p>
                <p>第四步：然后在组件的style标签加上lang属性 ，例如：lang=”scss”</p>
                <p>特性:</p>
                <p>可以用变量，例如（$变量名称=值）；</p>
                <p>可以用混合器，例如（）</p>
                <p>可以嵌套</p>
            </el-collapse-item>
            <el-collapse-item title="24、为什么避免 v-if 和 v-for 用在一起" name="24">
                <p>当 Vue 处理指令时，v-for 比 v-if 具有更高的优先级，通过v-if 移动到容器元素，不会再重复遍历列表中的每个值。取而代之的是，我们只检查它一次，且不会在 v-if 为否的时候运算 v-for。</p>
                <p></p>
            </el-collapse-item>
            <el-collapse-item title="25、简述Vue的响应式原理" name="25">
                <p>当一个Vue实例创建时，vue会遍历data选项的属性，用 Object.defineProperty 将它们转为 getter/setter并且在内部追踪相关依赖，在属性被访问和修改时通知变化。</p>
                <p>每个组件实例都有相应的 watcher 程序实例，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 setter 被调用时，会通知 watcher 重新计算，从而致使它关联的组件得以更新。</p>
                <div><img src="https://image.fundebug.com/2019-02-28-01.png" alt=""></div>
                <p></p>
            </el-collapse-item>
            <el-collapse-item title="26、delete和Vue.delete删除数组的区别" name="26">
                <p>delete只是被删除的元素变成了 empty/undefined 其他的元素的键值还是不变。</p>
                <p>Vue.delete直接删除了数组 改变了数组的键值。</p>
                <p></p>
            </el-collapse-item>
            <el-collapse-item title="27、如何优化SPA应用的首屏加载速度慢的问题？" name="27">
                <p>将公用的JS库通过script标签外部引入，减小app.bundel的大小，让浏览器并行下载资源文件，提高下载速度；</p>
                <p>在配置 路由时，页面和组件使用懒加载的方式引入，进一步缩小 app.bundel 的体积，在调用某个组件时再加载对应的js文件；</p>
                <p>加一个首屏 loading 图，提升用户体验；</p>
                <p></p>
            </el-collapse-item>
            <el-collapse-item title="28、" name="28"></el-collapse-item>
            <el-collapse-item title="29、" name="29"></el-collapse-item>
            <el-collapse-item title="30、" name="330"></el-collapse-item>
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
.interview_vue_wrap{
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
