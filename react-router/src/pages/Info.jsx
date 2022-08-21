import { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams, useSearchParams } from "react-router-dom";
import { PLUSH } from "../store/action";
import {connect} from"react-redux"
const Info  = (props) => {

  let nav = useNavigate();
  let location = useLocation();
  const params = useParams()
  const [getParams, setParam] = useSearchParams()   //第一个参数 getParams 获取 param 等 url  信息, 第二个参数 setParam 设置 url 等信息。

  console.log(props)
  // let [info, setInfo] = useState({
  //   "title": "小王八",
  //   "picture": "色图"
  // })


  console.log("路由信息", location)
  // 动态参数
  //  console.log(params,'params') // {id: '1'} 'params'
  const state = getParams.getAll('state')

  console.log('state', state)
  useEffect(() => {
    console.log("Invo挂载")
    return () => {
      console.log("Invo卸载")
    }
  }, [])

  // nav("/info",{state:'alien'})

  return <>
    {/* <ul>
      <li  >  <button onClick={() => nav("/")}>首页</button> </li>
      <li  >
        <button onClick={() => nav("/info", { state: 'alien' })}>info</button>
      </li>
      <li  > <button onClick={() => nav("/user/22")}>user</button> </li>
    </ul> */}

  </>
}
const mapStateToProps = (state,ownProps)=>{
  return {
    ... ownProps,
    ... state
  }
}

const mapDispatchToProps = (dispatch, ownProps )=>{
  return {
    plush:dispatch(PLUSH()),
    ownProps:ownProps
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Info)