<template>
    <div class="vue_code_learn_wrap">
        ⇒  <br/>
        →
        <el-row>
            <h3 @click="openCloseModal(1)" class="modal_t">1、源码目录</h3>
            <div v-show="openModal.modal1" class="border_radius">
                <div class="code_wrap">
                    <pre>
                        <code>
├─dist                   <span class="note"># 项目构建后的文件</span>
├─scripts                <span class="note"># 与项目构建相关的脚本和配置文件</span>
├─flow                   <span class="note"># flow的类型声明文件</span>
├─src                    <span class="note"># 项目源代码</span>
│    ├─complier          <span class="note"># 与模板编译相关的代码</span>
│    ├─core              <span class="note"># 通用的、与运行平台无关的运行时代码</span>
│    │  ├─observe        <span class="note"># 实现变化侦测的代码</span>
│    │  ├─vdom           <span class="note"># 实现virtual dom的代码</span>
│    │  ├─instance       <span class="note"># Vue.js实例的构造函数和原型方法</span>
│    │  ├─global-api     <span class="note"># 全局api的代码</span>
│    │  └─components     <span class="note"># 内置组件的代码</span>
│    ├─server            <span class="note"># 与服务端渲染相关的代码</span>
│    ├─platforms         <span class="note"># 特定运行平台的代码，如weex</span>
│    ├─sfc               <span class="note"># 单文件组件的解析代码</span>
│    └─shared            <span class="note"># 项目公用的工具代码</span>
└─test                   <span class="note"># 项目测试代码</span>
                        </code>
                    </pre>
                </div>
            </div>
        </el-row>
        <el-row>
            <h3 @click="openCloseModal(2)" class="modal_t">2、变化侦测</h3>
            <div v-show="openModal.modal2" class="border_radius">
                <p><font color="red"><strong>UI = render(state)</strong></font></p>
                <p>状态<code>state</code>是输入，页面<code>UI</code>输出，状态输入一旦变化了，页面输出也随之而变化</p>
                <h4>1、使Object数据变得“可观测”</h4>
                <div class="code_wrap">
                    <pre>
                        <code>
<span class="token keyword">let</span> car <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">'brand'</span><span class="token operator">:</span><span class="token string">'BMW'</span><span class="token punctuation">,</span>
    <span class="token string">'price'</span><span class="token operator">:</span><span class="token number">3000</span>
<span class="token punctuation">}</span>
                        </code>
                    </pre>
                </div>
                <p>使用<code>Object.defineProperty()</code>改写：</p>
                <div class="code_wrap">
                    <pre>
                        <code>
<span class="token keyword">let</span> car <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> val <span class="token operator">=</span> <span class="token number">3000</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>car<span class="token punctuation">,</span> <span class="token string">'price'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  enumerable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  configurable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'price属性被读取了'</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> val
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">set</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'price属性被修改了'</span><span class="token punctuation">)</span>
    val <span class="token operator">=</span> newVal
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
                        </code>
                    </pre>
                </div>
                <p>通过<code>Object.defineProperty()</code>方法给<code>car</code>定义了一个<code>price</code>属性，并把这个属性的读和写分别使用<code>get()</code>和<code>set()</code>进行拦截，每当该属性进行读或写操作的时候就会触发<code>get()</code>和<code>set()</code>。</p>
                <h4>2、observer 类</h4>
                <div class="code_wrap">
                    <pre>
                        <code>
<span class="token comment">// 源码位置：src/core/observer/index.js</span>

<span class="token comment">/**
 * Observer类会通过递归的方式把一个对象的所有属性都转化成可观测对象
 */</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value
    <span class="token comment">// 给value新增一个__ob__属性，值为该value的Observer实例</span>
    <span class="token comment">// 相当于为value打上标记，表示它已经被转化成响应式了，避免重复操作</span>
    <span class="token function">def</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span><span class="token string">'__ob__'</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 当value为数组时的逻辑</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">walk</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">walk</span> <span class="token punctuation">(</span><span class="token parameter">obj<span class="token operator">:</span> Object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> keys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> keys<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">defineReactive</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> keys<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/**
 * 使一个对象转化成可观测对象
 * @param { Object } obj 对象
 * @param { String } key 对象的key
 * @param { Any } val 对象的某个key的值
 */</span>
<span class="token keyword">function</span> <span class="token function">defineReactive</span> <span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span>key<span class="token punctuation">,</span>val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 如果只传了obj和key，那么val = obj[key]</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arguments<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    val <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">'object'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">new</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    enumerable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    configurable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">属性被读取了</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">set</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>val <span class="token operator">===</span> newVal<span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">属性被修改了</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      val <span class="token operator">=</span> newVal<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
                        </code>
                    </pre>
                </div>
                <p><code>observer</code>类，它用来将一个正常的<code>object</code>转换成可观测的<code>object</code>。</p>
                <p>可以这样定义<code>car</code>:</p>
                <div class="code_wrap">
                    <pre>
                        <code>
<span class="token keyword">let</span> car <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string">'brand'</span><span class="token operator">:</span><span class="token string">'BMW'</span><span class="token punctuation">,</span>
    <span class="token string">'price'</span><span class="token operator">:</span><span class="token number">3000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
                        </code>
                    </pre>
                </div>
                <h4>3、依赖收集</h4>
                <p>在<code>getter</code>中收集依赖，在<code>setter</code>中通知依赖更新。</p>
                <p><code>Dep</code>类 → 依赖管理器</p>
                <div class="code_wrap">
                    <pre>
                        <code>
<span class="token comment">// 源码位置：src/core/observer/dep.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Dep</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>subs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token function">addSub</span> <span class="token punctuation">(</span><span class="token parameter">sub</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>sub<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 删除一个依赖</span>
  <span class="token function">removeSub</span> <span class="token punctuation">(</span><span class="token parameter">sub</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">remove</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">,</span> sub<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 添加一个依赖</span>
  <span class="token function">depend</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addSub</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>target<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 通知所有依赖更新</span>
  <span class="token function">notify</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> subs <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> subs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      subs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Remove an item from an array
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">remove</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> index <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
                        </code>
                    </pre>
                </div>
                <p>有了依赖管理器后，就可以在getter中收集依赖，在setter中通知依赖更新了，代码如下：</p>
                <div class="code_wrap">
                    <pre>
                        <code>
<span class="token keyword">function</span> <span class="token function">defineReactive</span> <span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span>key<span class="token punctuation">,</span>val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arguments<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    val <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">'object'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">new</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//实例化一个依赖管理器，生成一个依赖管理数组dep</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    enumerable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    configurable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      dep<span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment">// 在getter中收集依赖</span>
      <span class="token keyword">return</span> val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">set</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>val <span class="token operator">===</span> newVal<span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      val <span class="token operator">=</span> newVal<span class="token punctuation">;</span>
      dep<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// 在setter中通知依赖更新</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
                        </code>
                    </pre>
                </div>
                <h4>4、Watcher 类</h4>
                <p>谁用到了数据，谁就是依赖，我们就为谁创建一个<code>Watcher</code>实例。</p>
                <p><code>Watcher</code>类的具体实现如下：</p>
                <div class="code_wrap">
                    <pre>
                        <code>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Watcher</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span>expOrFn<span class="token punctuation">,</span>cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>vm <span class="token operator">=</span> vm<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>cb <span class="token operator">=</span> cb<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>getter <span class="token operator">=</span> <span class="token function">parsePath</span><span class="token punctuation">(</span>expOrFn<span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>vm
      <span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> vm<span class="token punctuation">)</span>
      window<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> value
    <span class="token punctuation">}</span>
    <span class="token function">update</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> oldValue <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value
      <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">cb</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>vm<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">/**
   * Parse simple path.
   * 把一个形如'data.a.b.c'的字符串路径所表示的值，从真实的data对象中取出来
   * 例如：
   * data = {a:{b:{c:2}}}
   * parsePath('a.b.c')(data)  // 2
   */</span>
  <span class="token keyword">const</span> bailRE <span class="token operator">=</span> <span class="token regex">/[^\w.$]/</span>
  <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">parsePath</span> <span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>bailRE<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> segments <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'.'</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> segments<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>obj<span class="token punctuation">)</span> <span class="token keyword">return</span>
        obj <span class="token operator">=</span> obj<span class="token punctuation">[</span>segments<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> obj
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
                        </code>
                    </pre>
                </div>
                <p>在创建<code>Watcher</code>实例的过程中会自动的把自己添加到这个数据对应的依赖管理器中。</p>
                <p><code>Watcher</code>类的代码实现逻辑：</p>
                <ol>
                    <li>当实例化<code>Watcher</code>类时，会先执行其构造函数；</li> 
                    <li>在构造函数中调用了<code>this.get()</code>实例方法；</li> 
                    <li>在<code>get()</code>方法中，首先通过<code>window.target = this</code>把实例自身赋给了全局的一个唯一对象<code>window.target</code>上，然后通过<code>let value = this.getter.call(vm, vm)</code>获取一下被依赖的数据，获取被依赖数据的目的是触发该数据上面的<code>getter</code>，上文我们说过，在<code>getter</code>里会调用<code>dep.depend()</code>收集依赖，而在<code>dep.depend()</code>中取到挂载<code>window.target</code>上的值并将其存入依赖数组中，在<code>get()</code>方法最后将<code>window.target</code>释放掉。</li> 
                    <li>而当数据变化时，会触发数据的<code>setter</code>，在<code>setter</code>中调用了<code>dep.notify()</code>方法，在<code>dep.notify()</code>方法中，遍历所有依赖(即watcher实例)，执行依赖的<code>update()</code>方法，也就是<code>Watcher</code>类中的<code>update()</code>实例方法，在<code>update()</code>方法中调用数据变化的更新回调函数，从而更新视图。</li>
                </ol>
                <p><code>Watcher</code>先把自己设置到全局唯一的指定位置（<code>window.target</code>），然后读取数据。因为读取了数据，所以会触发这个数据的<code>getter</code>。接着，在<code>getter</code>中就会从全局唯一的那个位置读取当前正在读取数据的<code>Watcher</code>，并把这个<code>watcher</code>收集到<code>Dep</code>中去。收集好之后，当数据发生变化时，会向<code>Dep</code>中的每个<code>Watcher</code>发送通知。</p>
                <img src="https://vue-js.com/learn-vue/assets/img/3.0b99330d.jpg" alt="关系流程图">
                <h4>5、总结</h4>
                <ol>
                    <li><code>Data</code>通过<code>observer</code>转换成了<code>getter/setter</code>的形式来追踪变化。</li> 
                    <li>当外界通过<code>Watcher</code>读取数据时，会触发<code>getter</code>从而将<code>Watcher</code>添加到依赖中。</li> 
                    <li>当数据发生了变化时，会触发<code>setter</code>，从而向<code>Dep</code>中的依赖（即Watcher）发送通知。</li> 
                    <li><code>Watcher</code>接收到通知后，会向外界发送通知，变化通知到外界后可能会触发视图更新，也有可能触发用户的某个回调函数等。</li>
                </ol>
                <p></p>
                <h4>6、Array 的变化侦测</h4>
                <div class="code_wrap">
                    <pre>
                        <code>
<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      arr<span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
                        </code>
                    </pre>
                </div>
                <p><code>arr</code>这个数据始终都存在于一个<code>object</code>数据对象中，要用到<code>arr</code>这个数据，得先从<code>object</code>数据对象中获取一下<code>arr</code>数据，而从<code>object</code>数据对象中获取<code>arr</code>数据自然就会触发<code>arr</code>的<code>getter</code>，所以在<code>getter</code>中收集依赖。</p>
                <p><strong>Array型数据还是在getter中收集依赖。</strong></p>
                <div class="code_wrap">
                    <pre>
                        <code>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">newPush</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'arr被修改了'</span><span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
arr<span class="token punctuation">.</span><span class="token function">newPush</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
                        </code>
                    </pre>
                </div>
                <p>针对数组的原生<code>push</code>方法定义个一个新的<code>newPush</code>方法，这个<code>newPush</code>方法内部调用了原生<code>push</code>方法，这样就保证了新的<code>newPush</code>方法跟原生<code>push</code>方法具有相同的功能，而且还可以在新的<code>newPush</code>方法内部干一些别的事情，比如通知变化。</p>
                <p>（1）数组方法拦截器</p>
                <p>在<code>Vue</code>中创建了一个数组方法拦截器，它拦截在数组实例与<code>Array.prototype</code>之间，在拦截器内重写了操作数组的一些方法，当数组实例使用操作数组方法时，其实使用的是拦截器中重写的方法，而不再使用<code>Array.prototype</code>上的原生方法。如下图所示：</p>
                <img src="https://vue-js.com/learn-vue/assets/img/2.b446ab83.png" alt="">
                <p><code>Array</code>原型中可以改变数组自身内容的方法有：<code>push</code>,<code>pop</code>,<code>shift</code>,<code>unshift</code>,<code>splice</code>,<code>sort</code>,<code>reverse</code>。源码中的拦截器代码如下：</p>
                <div class="code_wrap">
                    <pre>
                        <code>
<span class="token comment">// 源码位置：/src/core/observer/array.js</span>

<span class="token keyword">const</span> arrayProto <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype
<span class="token comment">// 创建一个对象作为拦截器</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> arrayMethods <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>arrayProto<span class="token punctuation">)</span>

<span class="token comment">// 改变数组自身内容的7个方法</span>
<span class="token keyword">const</span> methodsToPatch <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">'push'</span><span class="token punctuation">,</span>
  <span class="token string">'pop'</span><span class="token punctuation">,</span>
  <span class="token string">'shift'</span><span class="token punctuation">,</span>
  <span class="token string">'unshift'</span><span class="token punctuation">,</span>
  <span class="token string">'splice'</span><span class="token punctuation">,</span>
  <span class="token string">'sort'</span><span class="token punctuation">,</span>
  <span class="token string">'reverse'</span>
<span class="token punctuation">]</span>

<span class="token comment">/**
 * Intercept mutating methods and emit events
 */</span>
methodsToPatch<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">method</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> original <span class="token operator">=</span> arrayProto<span class="token punctuation">[</span>method<span class="token punctuation">]</span>      <span class="token comment">// 缓存原生方法</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>arrayMethods<span class="token punctuation">,</span> method<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    enumerable<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    configurable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    writable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function-variable function">value</span><span class="token operator">:</span><span class="token keyword">function</span> <span class="token function">mutator</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">original</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>
      <span class="token keyword">return</span> result
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
                        </code>
                    </pre>
                </div>
                <p>→ 先创建了继承自<code>Array</code>原型的空对象<code>arrayMethods</code></p>
                <p>→ 在<code>arrayMethods</code>上使用<code>object.defineProperty</code>方法将那些可以改变数组自身的7个方法遍历逐个进行封装。</p>
                <p>→ 当使用<code>push</code>方法的时候，其实用的是<code>arrayMethods.push</code></p>
                <p>→ 而<code>arrayMethods.push</code>就是封装的新函数<code>mutator</code></p>
                <p>→ 实标上执行的是函数<code>mutator</code>，而<code>mutator</code>函数内部执行了<code>original</code>函数，这个<code>original</code>函数就是<code>Array.prototype</code>上对应的原生方法。</p>
                <p>→ 可以在<code>mutato</code>r函数中做一些其他的事，比如说发送变化通知。</p>
                <p></p>
                <p>（2）使用拦截器</p>
                <p>还要把它挂载到数组实例与<code>Array.prototype</code>之间，这样拦截器才能够生效。</p>
                <p>只需把数据的<code>__proto__</code>属性设置为拦截器<code>arrayMethods</code>即可，源码实现如下：</p>
                <div class="code_wrap">
                    <pre>
                        <code>
<span class="token comment">// 源码位置：/src/core/observer/index.js</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> augment <span class="token operator">=</span> hasProto
        <span class="token operator">?</span> protoAugment
        <span class="token operator">:</span> copyAugment
      <span class="token function">augment</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> arrayMethods<span class="token punctuation">,</span> arrayKeys<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">walk</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 能力检测：判断__proto__是否可用，因为有的浏览器不支持该属性</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> hasProto <span class="token operator">=</span> <span class="token string">'__proto__'</span> <span class="token keyword">in</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">const</span> arrayKeys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span>arrayMethods<span class="token punctuation">)</span>

<span class="token comment">/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */</span>
<span class="token keyword">function</span> <span class="token function">protoAugment</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> src<span class="token operator">:</span> Object<span class="token punctuation">,</span> keys<span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  target<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> src
<span class="token punctuation">}</span>

<span class="token comment">/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */</span>
<span class="token comment">/* istanbul ignore next */</span>
<span class="token keyword">function</span> <span class="token function">copyAugment</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token operator">:</span> Object<span class="token punctuation">,</span> src<span class="token operator">:</span> Object<span class="token punctuation">,</span> keys<span class="token operator">:</span> Array<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> keys<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> keys<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token function">def</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> src<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
                        </code>
                    </pre>
                </div>
                <p>→ 首先判断了浏览器是否支持<code>__proto__</code></p>
                <p>→ 如果支持，则调用<code>protoAugment</code>函数把<code>value.__proto__ = arrayMethods</code>；</p>
                <p>→ 如果不支持，则调用<code>copyAugment</code>函数把拦截器中重写的7个方法循环加入到<code>value</code>上。</p>
                <p></p>
                <p>（3）依赖收集</p>
                <p>数组数据也在<code>Observer</code>类中收集依赖</p>
                <div class="code_wrap">
                    <pre>
                        <code>
<span class="token comment">// 源码位置：/src/core/observer/index.js</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Observer</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value
    <span class="token keyword">this</span><span class="token punctuation">.</span>dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment">// 实例化一个依赖管理器，用来收集数组依赖</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> augment <span class="token operator">=</span> hasProto
        <span class="token operator">?</span> protoAugment
        <span class="token operator">:</span> copyAugment
      <span class="token function">augment</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> arrayMethods<span class="token punctuation">,</span> arrayKeys<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">walk</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
                        </code>
                    </pre>
                </div>
                <p>→ </p>
                <p>→ </p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </el-row>
        <el-row>
            <el-col :span="24"></el-col>
        </el-row>
    </div>
</template>

<script>
    import elWidthChange from './elWidthChange.vue';
    export default {
        components: { elWidthChange },
        data(){
            return {
                openModal: {},
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
            },
            openCloseModal(modalNum){
                let self = this;
                self.$set(self.openModal, 'modal'+modalNum, !self.openModal['modal'+modalNum]);
            },

        },
    };
</script>

<style lang="less" rel="stylesheet/less" type="text/less" scoped>
.vue_code_learn_wrap{
    padding: 20px;
    .modal_t{ cursor: pointer; }
    .code_wrap{
        position: relative; background-color: #282c34; border-radius: 6px;
        pre{ 
            padding: 0 10px; line-height: 1.4; overflow: auto; color: #ccc; background: transparent;
            font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
            font-size: 1em; text-align: left; white-space: pre; word-spacing: normal; word-break: normal; word-wrap: normal;
            -moz-tab-size: 4; -o-tab-size: 4; tab-size: 4;
            -webkit-hyphens: none; -ms-hyphens: none; hyphens: none; }
        code{
            color: #fff; padding: 0; background-color: transparent; border-radius: 0;
        }
        .note{ color: #999; }
        .token.atrule, .token.builtin, .token.important, .token.keyword, .token.selector{ color: #cc99cd; }
        .token.entity, .token.operator, .token.url{ color: #67cdcc; }
        .token.punctuation{ color: #ccc; }
        .token.attr-value, .token.char, .token.regex, .token.string, .token.variable{ color: #7ec699; }
        .token.boolean, .token.function, .token.number{ color: #f08d49; }
        .token.block-comment, .token.cdata, .token.comment, .token.doctype, .token.prolog{ color: #999; }
    }
    .border_radius{
        border: 1px solid #999; border-radius: 10px; padding: 10px; margin: 5px 0;
        p{ padding: 3px 0; }
    }
    code{ color: #476582; padding: .25rem .5rem; margin: 0; font-size: 1em; background-color: rgba(27,31,35,.05); border-radius: 3px; }
    img{ max-width: 100%; }

}
</style>
