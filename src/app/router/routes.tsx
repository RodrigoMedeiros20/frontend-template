import type { RouteObject } from 'react-router'
import { HomePage } from '@/pages/home'
import { routePaths } from '@/shared/config/routes'
import { AppLayout } from '../layouts/AppLayout'

export const routes: RouteObject[] = [
  {
    path: routePaths.home,
    element: <AppLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
]
