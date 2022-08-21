/*
创建reducer函数 处理发送过来的action
*/
// 初始state
const initState = {
    value: '默认值'
}
// reducer 必须返回一个对象给store

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'send_action': {
            
            return Object.assign({},state,action)
        }
        case 'xxx': {
            break
        }
        default: {
            return state
        }
    }

    return state
}