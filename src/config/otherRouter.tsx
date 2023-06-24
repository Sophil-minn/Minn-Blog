
import { lazy } from "react";

const Home = lazy(() => import('../home'));
const Minn = lazy(() => import('../minn'));
const G6Demo = lazy(() => import('../pages/g6'));
const G6TreeDemo = lazy(() => import('../pages/g6/G6TreeDemo'));
const MindMapping = lazy(() => import('../pages/g6/MindMapping'));
const Monaco = lazy(() => import('../pages/demo/monaco'));
const Code = lazy(() => import('../pages/demo/monaco/Code'));
const RenderCode = lazy(() => import('../pages/demo/monaco/RenderCode'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const otherRouters = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/minn',
    element: <Minn />
  },
  {
    path: '/g6',
    element: <G6Demo />
  },
  {
    path: '/g6TreeDemo',
    element: <G6TreeDemo />
  },
  {
    path: '/mindMapping',
    element: <MindMapping />
  },
  {
    path: '/monaco',
    element: <Monaco />,
    children: [
      {
        path: '/monaco/code',
        element: <Code />,
      },
      {
        path: '/monaco/renderCode',
        element: <RenderCode />,
      },
    ]
  },
  {
    path: '/*',
    element: <NotFound />,
  },
]