import { useRoutes } from 'react-router-dom'

import { RouteObject } from '@/routers/type'
import Login from '@/views/login'

export const rootRouter: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
    meta: {
      title: '登录页',
      key: 'login',
      requireAuth: false,
    },
  },
]
//@ts-ignore
export default useRoutes(rootRouter)
