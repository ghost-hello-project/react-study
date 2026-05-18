import { createBrowserRouter } from 'react-router'

// 页面组件
import Home from '@/pages/home'
import About from '@/pages/about'
import NotFound from '@/pages/404'
import Hooks from '@/pages/hooks'
import BaseHooks from '@/pages/hooks/base-hooks'

// 路由配置
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/hooks',
        element: <Hooks />,
        children: [
            {
                path: 'base-hooks',
                element: <BaseHooks />,
            },
        ],
    },
    {
        path: '*',
        element: <NotFound />,
    },
])

export default router
