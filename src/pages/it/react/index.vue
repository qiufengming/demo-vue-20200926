<template>
    <div class="react_wrap">
        <div class="content-wrap">
            <!-- 学习地址 start -->
            <div class="table-wrap learn-url-wrap active">
                <table id="learn-url">
                    <tbody><tr><td>官网</td><td><a href="https://react.docschina.org/" target="_blank">https://react.docschina.org/</a></td></tr><tr><td>React全家桶框架教程笔记（一）</td><td><a href="https://www.jianshu.com/p/faf76ea3f163" target="_blank">https://www.jianshu.com/p/faf76ea3f163</a></td></tr><tr><td>Redux</td><td><a href="http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html" target="_blank">http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html</a></td></tr></tbody>
                </table>
            </div>
            <!-- 学习地址 end -->


            <ol>
                <li>
                    <p>React特点</p>
                    <p>- Declarative（声明式编码）</p>
                    <p>- Component-Based（组件化编码）</p>
                    <p>- 高效 - 高效的DOM Diff算法，最小化页面重绘</p>
                    <p>- 单向数据流</p>
                </li>
                <li>
                    <p>React生态：</p>
                    <p>React + React-Router + Redux + Axios + Babel + Webpack</p>
                </li>
                <li>
                    <p>React 脚手架</p>
                    <p>npm install -g create-react-app // 全局安装react脚手架</p>
                    <p>使用react脚手架：</p>
                    <p>- create-react-app my-app</p>
                    <p>- cd my-app</p>
                    <p>- npm start</p>
                </li>
                <li>
                    <p>React生命周期：</p>
                    <ul>
                        <li>
                            <p>getDefaultProps - 初始化 props 属性，props来自父组件、其他组件传递过来的</p>
                        </li>
                        <li>
                            <p>getInitialState - 初始化当前组件的状态</p>
                        </li>
                        <li>
                            <p>componentWillMount - 组件初始化之前</p>
                        </li>
                        <li>
                            <p>render - 渲染组件</p>
                        </li>
                        <li>
                            <p>componentDidMount - 组件Dom插入完之后</p>
                        </li>
                        <li>
                            <p>componentWillReceiveProps - 来自父组件属性的传递时调用的方法</p>
                        </li>
                        <li>
                            <p>shouldComponentUpdate - 组件更新</p>
                        </li>
                        <li>
                            <p>componentWillUpdate - 组件更新之前</p>
                        </li>
                        <li>
                            <p>componentDidUpdate - 组件更新之后</p>
                        </li>
                        <li>
                            <p>ccomponentWillUnmount - 组件销毁</p>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>暴露react脚手架（create-react-app）创建的项目中的webpack</p>
                    <p>package.json文件中有 "eject":"react-script eject"</p>
                    <xmp>
                        "script":{
                            ...
                            "eject":"react-script eject"
                            ...
                        }
                    </xmp>
                    <p>直接在控制台运行 eject（如：yarn eject） 就可以暴露 webpack 文件</p>
                    <p>运行 yarn eject 可能会遇到如下错误：</p>
                    <p style="padding-left: 20px;">Remove untracked files, stash or commit any changes, and try again.</p>
                    <p style="padding-left: 20px;">原因：使用脚手架创建一个项目的时候，自动给我们增加了一个.gitignore文件，而本地却没有文件仓库，需要在终端输入如下命令：</p>
                    <p style="padding-left: 40px;">git add .</p>
                    <p style="padding-left: 40px;">git commit -m '这里是更新说明'</p>
                    <p style="padding-left: 40px;">再执行 yarn eject</p>
                </li>
                <li>
                    <p></p>
                    <p></p>
                </li>
                <li>
                    <p></p>
                    <p></p>
                </li>
                <li>
                    <p></p>
                    <p></p>
                </li>
                <li>
                    <p></p>
                    <p></p>
                </li>
                <li>
                    <p></p>
                    <p></p>
                </li>
            </ol>
        </div>
        <br />
    </div>
</template>

<script>
    export default {
        components: {},
        data(){
            return {
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

        },
    };
</script>

<style lang="less" rel="stylesheet/less" type="text/less" scoped>
.react_wrap{
    padding: 20px;
}
</style>
