/*
创建reducer函数 处理发送过来的action
*/
const initSate ={
    value: '默认值',
    count: 0
}

// reducer 必须new一个对象给store
export const reducer = (
    state = initSate, action) => {
    switch (action.type) {
        case 'ACTION': {
            return Object.assign({}, state, action)
        }
        case 'PLUSH': {
            state.count +=  action.content
            return Object.assign({}, state)
        }
        default: {
            return Object.assign({}, state)
        }
    }
}