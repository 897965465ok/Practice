import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation, useParams, useSearchParams } from "react-router-dom";
export default () => {

  let params = useParams()
  // 获取动态路由的信息 比如 User/:id
  let [state, Setstate] = useState({
    user: "叫我小王吧",
    age: 18,
    sex: 0
  })

  //  2x + 3 = y  x 属于自变量，Y属于因变量

  useEffect(() => {
    console.log("页面渲染触发")
    console.log("拿到了动态路由",params)
    console.log(state)
  }, [state.age]) //仅在 state.age 更改时更新


  let div = React.createElement('div', { style: { "width": "300px", "height": "300px", "color": "red", "background": "red" } }, `Hello`);

  return <>

    <button onClick={() => {
      Setstate({
        ...state,
        sex: state.sex + 1

      })
    }}>点击就送</button>
  </>
}

