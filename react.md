


生命周期的3个状态:
Mounting 将组件插入到dom中
Updating 将数据更新到DOM中
Unmounting 将组件移除DOM中




生命周期中的钩子函数（方法，事件)
CompontwillMount :组件将要渲染 ajax 添加动画前的类
CompontDidMount:组件渲染完毕 添加动画
compontwillReceiveProps;组件将要接受props 查看props的数据是什么
ShouldComponentUpdate:组件接收到新的state或者props,判断是否更新。返回布尔值
Compontwillupdate:组件将要更新
ComponentDidUpdate:组件已经更新
Componentwillunmount:组件将要卸载

store
维持应用的state
提供getState()方法获取state
提供dispatch()方法发送action
通过subscribe()来注册监听
通过subscribe()返回值来注销监听

BrowserRouter
Link
Routes
Route
Outlet