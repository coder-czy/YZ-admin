//@ts-nocheck
import { useRoutes } from 'react-router-dom'
import React, { lazy } from 'react'

import { RouteObject } from '@/routers/type'
import lazyLoad from '@/components/lazyLoad'
import Login from '@/views/login'
// 懒加载组件
// const Login = lazy(() => import('../views/login'))

// 导入其他模块路由
const moduleRoute = import.meta.glob('./modules/*', {
  eager: true,
})
const routeArray: RouteObject[] = []
Object.keys(moduleRoute).forEach((item) => {
  Object.keys(moduleRoute[item]).forEach((key: any) => {
    // console.log(moduleRoute[item][key])

    routeArray.push(...moduleRoute[item][key])
  })
})

export const rootRouter: RouteObject[] = [
  {
    path: '/',
    element: <Login />,
    id: 'login',
    meta: {
      title: '登录页',
      key: 'login',
      requireAuth: false,
    },
  },
  ...routeArray,
  {
    path: '*',
    element: lazyLoad(React.lazy(() => import('@/views/errPage/400'))),
    id: '400',
  },
]

const Router = () => {
  //@ts-ignore
  return useRoutes(rootRouter)
}
export default Router
