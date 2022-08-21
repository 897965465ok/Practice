import { createStore } from "redux"
import { reducer } from '../reducer'
/*
关联 reducer

*/
export const store = createStore(reducer)