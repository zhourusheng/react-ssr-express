## 环境搭建

- @babel/core 核心包
- @babel/preset-env 解析 es 的包,智能识别当前运行环境并进行转换
- @babel/preset-react 解析 jsx 的包
- @babael/plugin-transform-runtime 使 es6 中的 api 类似 generator,promise 对象等生效

## 使用虚拟 DOM 进行服务端渲染

虚拟 DOM 其实是 真实 DOM 的一个 javascript 对象映射

在客户端渲染时：

使用 `ReactDOM.render(<Home />, id#root)` 可以将 虚拟 DOM 转成 真实 DOM ,挂载到页面上某个节点

在服务端渲染时：

使用 `ReactDOM/server renderToString(<Home />)` 可以将 虚拟 DOM 转成 字符串，返回给浏览器

## 两种渲染

客户端渲染：
React 代码在浏览器上执行，消耗浏览器的性能

服务端渲染：
React 代码在服务器上执行，消耗服务器的性能

## 同构的概念

同构：一套 React 代码， 在服务端执行一次，再在客户端执行一次
