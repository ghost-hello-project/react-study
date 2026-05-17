import { createBrowserRouter } from 'react-router'

// 页面组件
import Home from '@/pages/home/home'
import About from '@/pages/about/about'
import NotFound from '@/pages/404'

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
        path: '*',
        element: <NotFound />,
    },
])

export default router
