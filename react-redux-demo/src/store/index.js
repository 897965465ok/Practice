import { createStore,applyMiddleware } from "redux"
import { reducer } from './reducer'
import thunk from "redux-thunk"
/*
关联 reducer,applyMiddleware是中间件
*/
export default createStore(reducer,applyMiddleware(thunk))