import redux from "redux"

/**
 * action 的构建函数
 */

export const action = ()=>{
    return{
        type:'send_action',
        value: '我是action'
    }
}