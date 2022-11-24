// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'C:/Users/Administered/Desktop/react-admin/node_modules/.pnpm/@umijs+runtime@3.5.34_react@16.14.0/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('C:/Users/Administered/Desktop/react-admin/src/.umi-production/plugin-layout/Layout.tsx').default,
    "routes": [
      {
        "name": "首页",
        "path": "/",
        "component": require('@/pages').default,
        "exact": true
      },
      {
        "name": "登录",
        "path": "/login",
        "component": require('@/pages/login').default,
        "exact": true
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
