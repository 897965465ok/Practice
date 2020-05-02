
// 4.解决以下异步代码问题。
// 检索幵计算属于同一教室中每个学生的平均分数，其中一些 ID 为 75。每个学生可
// 以在一年内参加一门或多门课程。 以下 API 可用于检索所需数据。


// 5.使用 JavaScript Proxy 实现简单的数据绑定  答：不会

// 6.解释 JavaScript 并发模型 答：不会

// 7.new 关键字在 JavaScript 中有什么作用？  答:生成实例


// 8.JavaScript 中有哪些不同的函数调用模式？ 详细解释。
//  答:同步调用  异步调用


// 9.解释任一即将发布新的 ECMAScript 提案。 答: 装饰器 


// 10.JavaScript 中的迭代器（iterators）和迭代（iterables）是什么？ 你知
// 道什么是内置迭代器吗？   答:指可以索引 可遍历



// 11.为什么 JavaScript classes(类)被认为是坏的或反模式？  答：不会



// 12.如何在 JSON 中序列化以下对象？
// 如果我们将以下对象转换为 JSON 字符串，会发生什么？  不会     {"key2":10}

//  const a = {
//      key1: Symbol(),
//      key2: 10
//      }
//      // What will happen?
//      console.log(JSON.stringify(a));


// 13.你熟悉 Typed Arrays 吗？ 如果熟悉，请解释他们不 JavaScript 中的传
// 统数组相比的异同？  答:不会


// 14. 默认参数是如何工作？
// 如果我们在调用 makeAPIRequest 凼数时必须使用 timeout 的默认值，那么正确的语    
// 法是什么？   答:makeAPIRequest(url , undefiand, heades)


// 15.解释 TCO – 尾调用优化（Tail Call Optimization）。 有没有支持尾调用
// 优化的 JavaScript 引擎？

// 1.HTML 中 Doctype 的用途是什么？   表示是最HTML5版本超文本标记语言
// 具体谈谈，以下每种情况下会发生什么：  
// 1. Doctype 不存在。
// 2. 使用了 HTML4 Doctype，但 HTML 页面使用了 HTML5 的标签，
// 如 <audio> 或 <video> 。它会导致任何错误吗？  会出现错误因为audio  video 属于HTML5版本标签


// 2. DOM 和 BOM 的区别是什么？      DOM是js为了方便管理标签抽象化的对象 ,而BOM是


// 5.CSS 重排和重绘之间有什么区别？
// 哪些 CSS 属性会导致重排及重绘？

// 6. 什么是 CSS 选择器权重以及它如何工作？
// 说说计算 CSS 选择器权重的算法。   


// 7.CSS 中的 pixel 不硬件/物理中的 pixel 有何不同？

// 8.什么是 sectioning 算法？

// 9.如果你用过 CSS Flex / CSS Grid（网格）布局，请说明你为什么要使用它？
// 它为你解决了什么问题？
//  使用 CSS Grid，百分比％和 fr 单位有何不同？
//  使用 CSS flexbox，有时 flex-items/children 会不考虑 flex 容器设置的宽
// 度/高度？为什么会这样？
// 可以使用 CSS Grid 创建 Masonry layout（瀑布流布局）吗？如果可以，怎
// 么做？
//  解释 CSS Grid 和 CSS flexbox 术语？
//  浮劢元素（float: left | right;）如何在 CSS Grid 和 flexbox 中渲染？


// 10.什么时候应该使用 CSS animations 而不是 CSS transitions ？你做出
// 这个决定标准是什么？


// 11.如果你正在 Review CSS 代码，那么你在代码中经常遇到的问题是什么？
// 示例：使用魔性数字，如 width: 67px; 或使用 em 代替 rem 单位，在通用代码之前
// 编写 media queries（媒体查询），滥用 ID 和类等。

// 12.如何在 JavaScript 中检测触摸事件？
// 你是否不看好检测设备对触摸事件的支持？如果是，为什么？
// 比较触摸事件和点击事件。
// 当设备同时支持触摸和鼠标事件时，你认为这些事件的正确事件顺序是什么或
// 应该是什么？

// 13.为 script 标签定义的 async 和 defer 属性有什么用？ async 表示是否异步 defer表示文件格式 错误 的

//  现在我们有 HTTP/2 和 ES 模块，它们真的很有用吗？