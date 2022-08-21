import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Layout, Menu } from "antd"
import { routes } from "./router"
export default ()=> {
  let handleRoutes = () => {
    let r = [];
    routes.forEach(route => {
      r.push(route)
      if (route.children) {
        route.children.forEach(child => r.push(child))
      }
    })
    return r.map((item, index) => {
      return <Menu.Item key={index}>
        <Link to={item.path}>{item.meta.name}</Link>
      </Menu.Item>
    })
  }

  return <>
    <Layout>
      <Layout.Header className="header">
        <Menu theme="dark" mode="horizontal">
          {handleRoutes()}
        </Menu>
      </Layout.Header>
      <Outlet />
    </Layout>
  </>

}