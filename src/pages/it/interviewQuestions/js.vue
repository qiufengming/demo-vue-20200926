<template>
    <div class="interview_js_wrap">
        <el-row>
            <el-col :span="24" class="question"><i class="el-icon-question"></i>1、前端性能优化方案</el-col>
            <el-col :span="24" class="answer"></el-col>
        </el-row>
        <el-collapse v-model="activeNames" @change="handleChange" class="question_answer">
            <el-collapse-item title="1、前端性能优化方案" name="1">
                <div>（1）减少 HTTP请求数</div>
                <p>1）从设计实现层面简化页面</p>
                <p>2）合理设置 HTTP缓存</p>
                <p>3）资源合并与压缩</p>
                <p>4）CSS Sprites</p>
                <p>5）Inline Images</p>
                <p>6）Lazy Load Images</p>
                <div>（2）将外部脚本置底（将脚本内容在页面信息内容加载后再加载）</div>
                <div>（3） 异步执行 inline脚本(其实原理和上面是一样，保证脚本在页面内容后面加载。)</div>
                <div>（4） Lazy Load Javascript（只有在需要加载的时候加载，在一般情况下并不加载信息内容。）</div>
                <div>（5） 将 CSS放在 HEAD中</div>
                <div>（6） 异步请求 Callback（就是将一些行为样式提取出来，慢慢的加载信息的内容）</div>
                <div>（7） 减少不必要的 HTTP跳转</div>
                <div>（8） 避免重复的资源请求</div>
                <div>（9） 减少浏览器的repaint和reflow</div>
                <div>（10） 慎用 with</div>
                <div>（11） 避免使用 eval和 Function</div>
                <div>（12） 减少作用域链查找，要减少作用域链查找还应该减少闭包的使用。</div>
                <div>（13） Javascript中的数据访问包括直接量 (字符串、正则表达式 )、变量、对象属性以及数组，其中对直接量和局部变量的访问是最快的，对对象属性以及数组的访问需要更大的开销</div>
                <div>（14） 在 Javascript中使用"+" 号来拼接字符串效率是比较低的，因为每次运行都会开辟新的内存并生成新的字符串变量，然后将拼接结果赋值给新变量。与之相比更为高效的做法是使用数组的 join方法，即将需要拼接的字符串放在数组中最后调用其 join方法得到结果。不过由于使用数组也有一定的开销，因此当需要拼接的字符串较多的时候可以考虑用此方法。</div>
                <div>（15） 对 HTML本身的优化</div>
                <div>（16） Image压缩</div>
            </el-collapse-item>
            <el-collapse-item title="2、跨域解决方案" name="2">
                <dl>
                    <dt>（1）通过jsonp跨域</dt>
                    <dd>
                        <p>1）原生实现：</p>
                        <pre class="xml hljs">
                            <code class="html"> 
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span>
<span class="javascript">
    <span class="hljs-keyword">var</span> script = <span class="hljs-built_in">document</span>.createElement(<span class="hljs-string">'script'</span>);
    script.type = <span class="hljs-string">'text/javascript'</span>;
                        
    <span class="hljs-comment">// 传参一个回调函数名给后端，方便后端返回时执行这个在前端定义的回调函数</span>
    script.src = <span class="hljs-string">'http://www.domain2.com:8080/login?user=admin&amp;callback=handleCallback'</span>;
    <span class="hljs-built_in">document</span>.head.appendChild(script);
                        
    <span class="hljs-comment">// 回调执行函数</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">handleCallback</span>(<span class="hljs-params">res</span>) </span>{
        alert(<span class="hljs-built_in">JSON</span>.stringify(res));
    }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
                            </code>
                        </pre>
                        <p>服务端返回如下（返回时即执行全局函数）：</p>
                        <pre class="javascript hljs"><code class="js" style="word-break: break-word; white-space: initial;">handleCallback({<span class="hljs-string">"status"</span>: <span class="hljs-literal">true</span>, <span class="hljs-string">"user"</span>: <span class="hljs-string">"admin"</span>})</code></pre>
                    </dd>
                    <dd>
                        <p>2）jquery ajax：</p>
                        <pre class="javascript hljs"><code class="js">$.ajax({
                            <span class="hljs-attr">url</span>: <span class="hljs-string">'http://www.domain2.com:8080/login'</span>,
                            <span class="hljs-attr">type</span>: <span class="hljs-string">'get'</span>,
                            <span class="hljs-attr">dataType</span>: <span class="hljs-string">'jsonp'</span>,  <span class="hljs-comment">// 请求方式为jsonp</span>
                            <span class="hljs-attr">jsonpCallback</span>: <span class="hljs-string">"handleCallback"</span>,    <span class="hljs-comment">// 自定义回调函数名</span>
                            <span class="hljs-attr">data</span>: {}
                        });</code></pre>
                    </dd>
                    <dd>
                        <p>3.）vue.js：</p>
                        <pre class="javascript hljs"><code class="js"><span class="hljs-keyword">this</span>.$http.jsonp(<span class="hljs-string">'http://www.domain2.com:8080/login'</span>, {
                            <span class="hljs-attr">params</span>: {},
                            <span class="hljs-attr">jsonp</span>: <span class="hljs-string">'handleCallback'</span>
                        }).then(<span class="hljs-function">(<span class="hljs-params">res</span>) =&gt;</span> {
                            <span class="hljs-built_in">console</span>.log(res); 
                        })</code></pre>
                        <p>后端node.js代码示例：</p>
                        <pre class="javascript hljs"><code class="js"><span class="hljs-keyword">var</span> querystring = <span class="hljs-built_in">require</span>(<span class="hljs-string">'querystring'</span>);
                            <span class="hljs-keyword">var</span> http = <span class="hljs-built_in">require</span>(<span class="hljs-string">'http'</span>);
                            <span class="hljs-keyword">var</span> server = http.createServer();
                            
                            server.on(<span class="hljs-string">'request'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">req, res</span>) </span>{
                                <span class="hljs-keyword">var</span> params = qs.parse(req.url.split(<span class="hljs-string">'?'</span>)[<span class="hljs-number">1</span>]);
                                <span class="hljs-keyword">var</span> fn = params.callback;
                            
                                <span class="hljs-comment">// jsonp返回设置</span>
                                res.writeHead(<span class="hljs-number">200</span>, { <span class="hljs-string">'Content-Type'</span>: <span class="hljs-string">'text/javascript'</span> });
                                res.write(fn + <span class="hljs-string">'('</span> + <span class="hljs-built_in">JSON</span>.stringify(params) + <span class="hljs-string">')'</span>);
                            
                                res.end();
                            });
                            
                            server.listen(<span class="hljs-string">'8080'</span>);
                            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Server is running at port 8080...'</span>);</code></pre>
                    </dd>
                    <dd>
                        <p>jsonp缺点：只能实现get一种请求。</p>
                    </dd>
                    <dt>（2）document.domain + iframe跨域</dt>
                    <dd></dd>
                    <dt>（3）location.hash + iframe</dt>
                    <dt>（4）window.name + iframe跨域</dt>
                    <dt>（5）postMessage跨域</dt>
                    <dt>（6）跨域资源共享（CORS）</dt>
                    <dt>（7）nginx代理跨域</dt>
                    <dt>（8）nodejs中间件代理跨域</dt>
                    <dt>（9）WebSocket协议跨域</dt>
                </dl>
            </el-collapse-item>
            <el-collapse-item title="3、浏览器存储" name="3">
                <p>useData：出现时间早于 sessionStorage，IE专用</p>
                <p>1、Cookie：兼容性最好；大小有限制，且每次发送请求，求情头里面会带着 cookie 一起发过去；cookie中的所有数据在客户端就可以被修改，数据非常容易被伪造。</p>
                <p>2、sessionStorage：可临时存储，关闭页面标签自动回收，不支持跨页面交互；只能临时存储。</p>
                <p>3、localStorage：长久保存整个网站数据，没有过期时间，手动删除；存储大小限制，IE8以上，保存直类型 String ；最大存储5M。</p>
            </el-collapse-item>
            <el-collapse-item title="4、js原型链" name="4">
                <p>所有引用类型（函数、数组、对象）都拥有 __proto__ 属性 （隐式原型）</p>
                <p>所有函数（仅限函数）拥有 prototype 属性 （显式原型）</p>
                <p>原型对象 → 拥有 prototype 属性的对象，在定义函数时就被创建</p>
                <p>构造函数 → function 声明的都是函数，直接调用的话就是普通函数，用函数 new 产生对象时，这个函数才是 new 出来对象的构造函数。</p>
                <div>
                    <pre class="javascript hljs">
                        <code class="js">
function Word(words){
    this.words = words;
}
Word.prototype = {
    alert(){
        alert(this.words);
    }
}
var w = new Word('hello world');
w.print = function(){
    console.log(this.words);
    console.log(this);
};
w.print(); // hello world， w 实体本身具有的方法
w.alert(); // hello world， 不属于 w 实体的方法，属于构造函数的方法
                        </code>
                    </pre>
                </div>
                <p>实例继承构造函数的方法</p>
                <p>实例 w 的隐式原型指向它构造函数的显示原型，指向的意思是恒等于</p>
                <div>
                    <pre class="javascript hljs">
                        <code class="js">
w.__proto__ === Word.prototype;
                        </code>
                    </pre>
                </div>
                <p>实例.__proto__.__proto__.constructor  ⇒  多个参数的 Object 函数</p>
                <p>构造函数.prototype.__proto__.constructor == Object()</p>
                <p>实例.__proto__.constructor  ⇒  构造函数本身</p>
                <p>构造函数.prototype.constructor == 构造函数本身</p>
                <p>⇒ 实例.__proto__.__proto__ == Object.prototype</p>
                <p>惯例 → 构造函数均以大写字母开始</p>
                <p></p>
                <p></p>
                <p>函数用来初始化一个新建对象（使用 new 运算符）</p>
                <p>&nbsp;&nbsp; ↓↓ &nbsp;&nbsp;</p>
                <p>构造函数（constructor）</p>
                <p>&nbsp;&nbsp; ↓↓ &nbsp;&nbsp;</p>
                <p>定义了一类对象 → 由构造函数初始化的对象组成的集合</p>
                <p>&nbsp; ↓ &nbsp;</p>
                <p>类：类可看作是对象类型的子类型</p>
                <p></p>
                <p></p>


            </el-collapse-item>
            <el-collapse-item title="5、js数据类型" name="5">
                <p>Number、String、Boolean、Null、undefined、object、symbol、bigInt</p>
                <p>Object 中包含了 Data、function、Array</p>
                <p>基本类型（单类型）：除Object。 String、Number、boolean、null、undefined。</p>
                <p>引用类型：object。里面包含的 function、Array、Date。</p>
                <p>--------------------</p>
                <p>js类型：</p>
                <p>原始类型、对象类型</p>
                <p>可以拥有方法的类型、不能拥有方法的类型</p>
                <p>可变（mutable）类型、不可变（immutable）类型</p>
            </el-collapse-item>
            <el-collapse-item title="6、浏览器渲染过程" name="6">
                <p>解析html以构建dom树 → 构建render树 → 布局render树 → 绘制render树</p>
                <p>DOM Tree：浏览器将HTML解析成树形的数据结构。</p>
                <p>CSS Rule Tree：浏览器将CSS解析成树形的数据结构。</p>
                <p>Render Tree: DOM和CSSOM合并后生成Render Tree。</p>
                <p>layout: 有了Render Tree，浏览器已经能知道网页中有哪些节点、各个节点的CSS定义以及他们的从属关系，从而去计算出每个节点在屏幕中的位置。</p>
                <p>painting: 按照算出来的规则，通过显卡，把内容画到屏幕上。</p>
                <p>reflow（回流）：当浏览器发现某个部分发生了点变化影响了布局，需要倒回去重新渲染，内行称这个回退的过程叫 reflow。reflow 会从 &lt;html&gt; 这个 root frame 开始递归往下，依次计算所有的结点几何尺寸和位置。reflow 几乎是无法避免的。现在界面上流行的一些效果，比如树状目录的折叠、展开（实质上是元素的显 示与隐藏）等，都将引起浏览器的 reflow。鼠标滑过、点击……只要这些行为引起了页面上某些元素的占位面积、定位方式、边距等属性的变化，都会引起它内部、周围甚至整个页面的重新渲 染。通常我们都无法预估浏览器到底会 reflow 哪一部分的代码，它们都彼此相互影响着。</p>
                <p>repaint（重绘）：改变某个元素的背景色、文字颜色、边框颜色等等不影响它周围或内部布局的属性时，屏幕的一部分要重画，但是元素的几何尺寸没有变。</p>
                <p>注意：</p>
                <p>(1)display:none 的节点不会被加入Render Tree，而visibility: hidden 则会，所以，如果某个节点最开始是不显示的，设为display:none是更优的。</p>
                <p>(2)display:none 会触发 reflow，而 visibility:hidden 只会触发 repaint，因为没有发现位置变化。</p>
                <p>(3)有些情况下，比如修改了元素的样式，浏览器并不会立刻reflow 或 repaint 一次，而是会把这样的操作积攒一批，然后做一次 reflow，这又叫异步 reflow 或增量异步 reflow。但是在有些情况下，比如resize 窗口，改变了页面默认的字体等。对于这些操作，浏览器会马上进行 reflow。</p>
            </el-collapse-item>
            <el-collapse-item title="7、浏览器从输入 URL 到页面渲染的过程" name="7">
                <p>URL → DNS 域名解析 → 找到真IP → 向服务器发起TCP链接 → 与浏览器建立TCP三次握手（客户端发送请求链接、服务器同异、客户端发送确认信号） → 浏览器发送HTTP请求 → 服务器处理请求，并返回HTTP报文 → 断开链接</p>
                <p></p>
            </el-collapse-item>
            <el-collapse-item title="8、多维数组" name="8">
                
            </el-collapse-item>
            <el-collapse-item title="9、继承" name="9">
                <p>父类：</p>
                <div>
                    <pre class="javascript hljs">
// 定义一个动物类
function Animal(name){
    // 属性
    this.name = name || 'Animal';
    // 实例方法
    this.sleep = function(){
        console.log(this.name + '正在睡觉！');
    }
}
// 原型方法
Animal.prototype.eat = function(food) {
    console.log(this.name + '正在吃：' + food);
};
                    </pre>
                </div>
                <h5>1、原型链继承</h5>
                <p>核心： 将父类的实例作为子类的原型</p>
                <div>
                    <pre class="javascript hljs">
function Cat(){ 
}
Cat.prototype = new Animal();
Cat.prototype.name = 'cat';

//　Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.eat('fish'));
console.log(cat.sleep());
console.log(cat instanceof Animal); //true 
console.log(cat instanceof Cat); //true
                    </pre>
                </div>
                <p>特点：</p>
                <p>1、非常纯粹的继承关系，实例是子类的实例，也是父类的实例</p>
                <p>2、父类新增原型方法/原型属性，子类都能访问到</p>
                <p>3、简单，易于实现</p>
                <p>缺点：</p>
                <p>1、可以在Cat构造函数中，为Cat实例增加实例属性。如果要新增原型属性和方法，则必须放在new Animal()这样的语句之后执行。</p>
                <p>2、无法实现多继承</p>
                <p>3、来自原型对象的所有属性被所有实例共享。</p>
                <p>4、创建子类实例时，无法向父类构造函数传参</p>
                <h5>2、构造继承</h5>
                <p>核心：使用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类（没用到原型）</p>
                <div>
                    <pre class="javascript hljs">
function Cat(name){ 
    Animal.call(this);
    this.name = name || 'Tom';
}

//　Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // false 
console.log(cat instanceof Cat); // true
                    </pre>
                </div>
                <p>特点：</p>
                <p>1、解决了1中，子类实例共享父类引用属性的问题</p>
                <p>2、创建子类实例时，可以向父类传递参数</p>
                <p>3、可以实现多继承（call多个父类对象）</p>
                <p>缺点：</p>
                <p>1、实例并不是父类的实例，只是子类的实例</p>
                <p>2、只能继承父类的实例属性和方法，不能继承原型属性/方法</p>
                <p>3、无法实现函数复用，每个子类都有父类实例函数的副本，影响性能</p>
                <h5>3、实例继承</h5>
                <p>核心：为父类实例添加新特性，作为子类实例返回</p>
                <div>
                    <pre class="javascript hljs">
function Cat(name){ 
    var instance = new Animal();
    instance.name = name || 'Tom';
    return instance;
}

//　Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // true 
console.log(cat instanceof Cat); // false
                    </pre>
                </div>
                <p>特点：</p>
                <p>1、不限制调用方式，不管是new 子类()还是子类(),返回的对象具有相同的效果</p>
                <p>缺点：</p>
                <p>1、实例是父类的实例，不是子类的实例</p>
                <p>2、不支持多继承</p>
                <h5>4、拷贝继承</h5>
                <div>
                    <pre class="javascript hljs">
function Cat(name){ 
    var animal = new Animal();
    for(var p in animal){
        Cat.prototype[p] = animal[p];
    }
    Cat.prototype.name = name || 'Tom';
}

//　Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // false 
console.log(cat instanceof Cat); // true
                    </pre>
                </div>
                <p>特点：支持多继承</p>
                <p>缺点：</p>
                <p>1、效率较低，内存占用高（因为要拷贝父类的属性）</p>
                <p>2、无法获取父类不可枚举的方法（不可枚举方法，不能使用for in 访问到）</p>
                <h5>5、组合继承</h5>
                <p>核心：通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用</p>
                <div>
                    <pre class="javascript hljs">
function Cat(name){ 
    Animal.call(this);
    this.name = name || 'Tom';
}
Cat.prototype = new Animal();
// 组合继承也是需要修复构造函数指向的
Cat.prototype.constructor = Cat;

//　Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // true 
console.log(cat instanceof Cat); // true
                    </pre>
                </div>
                <p>特点:</p>
                <p>1、弥补了方式2的缺陷，可以继承实例属性/方法，也可以继承原型属性/方法</p>
                <p>2、既是子类的实例，也是父类的实例</p>
                <p>3、不存在引用属性共享问题</p>
                <p>4、可传参</p>
                <p>5、函数可复用</p>
                <p>缺点：调用了两次父类构造函数，生成了两份实例（子类实例将子类原型上的那份屏蔽了）</p>
                <h5>6、寄生组合继承</h5>
                <p>核心：通过寄生方式，砍掉父类的实例属性，这样，在调用两次父类的构造的时候，就不会初始化两次实例方法/属性，避免的组合继承的缺点</p>
                <div>
                    <pre class="javascript hljs">
function Cat(name){ 
    Animal.call(this);
    this.name = name || 'Tom';
}
(function(){
    // 创建一个没有实例方法的类
    var Super = function(){};
    Super.prototype = Animal.prototype;
    //将实例作为子类的原型
    Cat.prototype = new Super();
  })();

//　Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.sleep());
console.log(cat instanceof Animal); // true 
console.log(cat instanceof Cat); // true

Cat.prototype.constructor = Cat; // 需要修复下构造函数
                    </pre>
                </div>
                <p>特点：堪称完美</p>
                <p>缺点：实现较为复杂</p>
                <h4>附录代码：</h4>
                <div>
                    <pre class="javascript hljs">
function Animal (name) {
    // 属性
    this.name = name || 'Animal';
    // 实例方法
    this.sleep = function(){
        console.log(this.name + '正在睡觉！');
    }
    //实例引用属性
    this.features = [];
}
function Cat(name){
}
Cat.prototype = new Animal();

var tom = new Cat('Tom');
var kissy = new Cat('Kissy');

console.log(tom.name); // "Animal"
console.log(kissy.name); // "Animal"
console.log(tom.features); // []
console.log(kissy.features); // []

tom.name = 'Tom-New Name';
tom.features.push('eat');

//针对父类实例值类型成员的更改，不影响
console.log(tom.name); // "Tom-New Name"
console.log(kissy.name); // "Animal"
//针对父类实例引用类型成员的更改，会通过影响其他子类实例
console.log(tom.features); // ['eat']
console.log(kissy.features); // ['eat']
                    </pre>
                </div>
                <p>原因分析：</p>
                <p>关键点：属性查找过程</p>
                <p>执行tom.features.push，首先找tom对象的实例属性（找不到），那么去原型对象中找，也就是Animal的实例。发现有，那么就直接在这个对象的features属性中插入值。</p>
                <p>在console.log(kissy.features); 的时候。同上，kissy实例上没有，那么去原型上找。刚好原型上有，就直接返回，但是注意，这个原型对象中features属性值已经变化了。</p>

            </el-collapse-item>
            <el-collapse-item title="10、自执行函数" name="10">
                <div>
                    <pre class="javascript hljs">
(function(){})()
(function(){}())
                    </pre>
                </div>
            </el-collapse-item>
            <el-collapse-item title="11、讲一段代码变成表达式" name="11">
                <div>
                    <pre class="javascript hljs">
void function(){ ... }();
!function foo(){ ... }();
+function foo(){ ... }();
                    </pre>
                </div>
            </el-collapse-item>
            <el-collapse-item title="12、JS获取DOM元素的方法" name="12">
                <p>document.getElementById → id</p>
                <p>document.getElementsByName → name属性</p>
                <p>document.getElementsByTagName → 标签名</p>
                <p>document.querySelector → 选择器获取一个元素</p>
                <p>document.querySelectorAll → 选择器获取一组元素</p>
                <p>document.documentElement → 专门获取html这个标签的</p>
                <p>document.body → 专门获取body标签</p>
                <p>document.getElementsByClassName → 类名，IE8及以下不兼容</p>
            </el-collapse-item>
            <el-collapse-item title="13、isFinite(testValue) ⇒ 判断传入的值是否为一个有限数值" name="13"></el-collapse-item>
            <el-collapse-item title="14、arguments" name="14">
                <p>Javascript没有重载函数的功能，但是Arguments对象能够模拟重载。</p>
                <p>Javascrip中每个函数都会有一个Arguments对象实例arguments，它引用着函数的实参，可以用数组下标的方式"[]"引用arguments的元素。</p>
                <p>arguments.length为函数实参个数，arguments.callee引用函数自身。</p>
                <div>
                    <pre class="javascript hljs">
(function(a){
    console.log(arguments);
})(1);
                    </pre>
                </div>
                <p>arguments.callee与形参是一一映射</p>
                <div>
                    <pre class="javascript hljs">
(function(a,b,c){
    arguments[0] = 'hello';
    console.log(arguments[0]);
})(1，2,3,4);
                    </pre>
                </div>
                <p>arguments对象和Function是分不开的。因为arguments这个对象不能显式创建。arguments对象只有函数开始时才可用。</p>
                <p>arguments对象并不是一个数组（类数组），但是访问单个参数的方式与访问数组元素的方式相同。如：</p>
                <div>
                    <pre class="javascript hljs">
// arguments[0],arguments[1],。。。arguments[n]； 在js中 不需要明确指出参数名，就能访问它们
function test() {
    var s = "";
    for (var i = 0; i < arguments.length; i++) {
        alert(arguments[i]);
        s += arguments[i] + ",";
    }
    return s;
}
test("name", "age");

// 输出结果：
// name,age
                    </pre>
                </div>
                <p>每一个对象都有自己的属性，arguments对象也不例外，首先arguments的访问犹如Array对象一样，用0到arguments.length-1来枚举每一个元素。</p>
                <p>callee属性，返回正被执行的** Function** 对象，也就是所指定的 Function 对象的正文。</p>
                <p>callee 属性是 arguments 对象的一个成员，仅当相关函数正在执行时才可用。</p>
                <p>callee 属性的初始值就是正被执行的** Function** 对象。</p>
                <div>
                    <pre class="javascript hljs">
var sum = function (n) {
    if (1 == n) {
        return 1;
    } else {
        return n + arguments.callee(n - 1); //6 5 4 3 2 1
    }
}
alert(sum(6));

// 输出结果：21
                    </pre>
                </div>
                <p>通俗一点就是，arguments此对象大多用来针对同个方法多处调用并且传递参数个数不一样时进行使用。根据arguments的索引来判断执行的方法。</p>
                <p>当使用arguments进行函数传递时，有一些需要注意的点。例子如下：</p>
                <div>
                    <pre class="javascript hljs">
var length = 10;
function fn() {
  console.log(this.length);
}

var obj = { 
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1); 

// 输出：10,2
                    </pre>
                </div>
                <p>1.第一个值为10，执行的是method里面的第一行"fn()",这里this指向的window。所以输出的值为最外层定义的length。</p>
                <p>2.第二个值为2，执行的是method里面的第二行"arguments0"（arguments0 => fn() ），这里this执行的是arguments这个对象,所以输出值为arguments的长度</p>
                <p>传多个参数事可以直接用argument，比如求最大值：</p>
                <div>
                    <pre class="javascript hljs">
function max() {
    var max = arguments[0];
    console.log(arguments)

    for (val of arguments) {
        if (val >= max) {
            max = val;
        }
    }
    return max;
}
var maxValue = max('9', 1, 2, 4)
console.log(maxValue)
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
            <el-collapse-item title="15、js解析器内存管理机制 → 自动对内存进行垃圾回收（garbage collection）" name="15"></el-collapse-item>
            <el-collapse-item title="16、js是面向对象语言，只有null、undefined 无法拥有方法的值" name="16"></el-collapse-item>
            <el-collapse-item title="17、js算术运算溢出（overflow）、下溢（underflow）" name="17">
                
                <p>溢出（overflow）⇒ 超过 js 所能表示的数字上限 → 以无穷大（infinity）表示；超过下限 → 负无穷大（-Infinity）</p>
                <p>下溢（underflow） ⇒ 无限接近零并比 js 能表示的最小值还小 → 返回0；负数下溢时 → “负零”</p>
                <p>被零整除 → 无穷大或负无穷大。</p>
                <p>零除于零 → 无意义 → 非数字（not-a-number）值 → 用 NaN 表示</p>
                <p>js中的非数字值 → 不与任何值相等，包含自身，即 x==NaN 无法判断 x 是否为 NaN，可用 x!=x 来判断</p>
                <p>isNaN()、isFinite()</p>
            </el-collapse-item>
            <el-collapse-item title="18、m模式匹配 → 正则" name="18">
                <p>RegExp() 构造函数 → 创建文本匹配模式的对象</p>
                <p>var str = 'testing: 1,2,3';</p>
                <p>var reg = /\d+/g; → 匹配一个或多个数字</p>
                <p>reg.text(str); → true</p>
                <p>str.search(reg); → 首次匹配成功的位置</p>
                <p>str.match(reg); → 所有匹配组成的数组</p>
                <p>str.replace(reg, "#"); → "testing: #,#,#"</p>
                <p>str.split(/\D+/); → 用非数字字符截取字符串</p>
            </el-collapse-item>
            <el-collapse-item title="19、包装对象" name="19">
                <p>存取字符串、数字或布尔值的属性时临时创建的临时对象。</p>
                <p>var str = "test";</p>
                <p>str.len = 4; → 先创建一个临时字符串对象，并给其 len 属性赋值，随即销毁该对象</p>
                <p>var t = str.len; → undefined</p>
                <p>注：</p>
                <p>可通过 Stirng()、Number()、Boolean()构造函数来显示创建包装对象。</p>
                <p>如：</p>
                <p>var s = "test"; → 一个字符串</p>
                <p>var sObj = new String(s); → 一个字符串对象</p>
                <p>s == sObj → true</p>
                <p>s === sObj → false</p>
                <p></p>
                <p></p>
            </el-collapse-item>
            <el-collapse-item title="20、JavaScript 中 call()、apply()、bind() 的用法" name="20">
                <p>https://www.runoob.com/w3cnote/js-call-apply-bind.html</p>
            </el-collapse-item>
            <el-collapse-item title="21、" name="21"></el-collapse-item>
            <el-collapse-item title="22、" name="22"></el-collapse-item>
            <el-collapse-item title="23、" name="23"></el-collapse-item>
            <el-collapse-item title="24、" name="24"></el-collapse-item>
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
.interview_js_wrap{
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
