// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'C:/Users/Administrator/Desktop/react-admin/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('C:/Users/Administrator/Desktop/react-admin/src/.umi/plugin-layout/Layout.tsx').default,
    "routes": [
      {
        "name": "仪表盘",
        "path": "/",
        "component": require('@/layouts').default,
        "exact": true
      },
      {
        "name": "用户管理",
        "path": "/user",
        "component": require('@/layouts').default,
        "routes": [
          {
            "name": "用户",
            "path": "/user",
            "component": require('@/pages/user').default,
            "exact": true
          }
        ]
      },
      {
        "name": "文章管理",
        "path": "/article",
        "component": require('@/layouts').default,
        "routes": [
          {
            "name": "文章页",
            "path": "/article",
            "component": require('@/pages/article').default,
            "exact": true
          }
        ]
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
