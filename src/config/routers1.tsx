

import { lazy } from "react";

const ComponentsDevelopmentDemo = lazy(() => import('../pages/componentsDevelopment/CDemo'));
const ComponentsDevelopment = lazy(() => import('../pages/componentsDevelopment'));
const PerformanceOptimizationDemo = lazy(() => import('../pages/performanceOptimization/demos/CDemo'));
const PerformanceOptimization = lazy(() => import('../pages/performanceOptimization'));
const EngineeringDemo = lazy(() => import('../pages/engineering/EngineeringDemo'));
const Engineering = lazy(() => import('../pages/engineering'));
const WebpackDemo = lazy(() => import('../pages/webpack/demos/CDemo'));
const Webpack = lazy(() => import('../pages/webpack'));
const GitDemo = lazy(() => import('../pages/git/demos/CDemo'));
const Git = lazy(() => import('../pages/git'));
const Home = lazy(() => import('../home'));
const Minn = lazy(() => import('../minn'));
const G6Demo = lazy(() => import('../pages/g6'));
const G6TreeDemo = lazy(() => import('../pages/g6/G6TreeDemo'));
const MindMapping = lazy(() => import('../pages/g6/MindMapping'));
const Monaco = lazy(() => import('../pages/demo/monaco'));
const Code = lazy(() => import('../pages/demo/monaco/Code'));
const RenderCode = lazy(() => import('../pages/demo/monaco/RenderCode'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const routers1 = [
  {
    path: '/',
    element: <Engineering />
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
    path: '/components-development',
    element: <ComponentsDevelopment />,
    children: [
      {
        path: '/components-development/:id',
        element: <ComponentsDevelopmentDemo />,
      }
    ]
  },
  {
    path: '/performance-optimization',
    element: <PerformanceOptimization />,
    children: [
      {
        path: '/performance-optimization/:id',
        element: <PerformanceOptimizationDemo />,
      }
    ]
  },
  {
    path: '/engineering',
    element: <Engineering />,
    children: [
      {
        path: '/engineering/:id',
        element: <EngineeringDemo />,
      }
    ]
  },
  {
    path: '/webpack',
    element: <Webpack />,
    children: [
      {
        path: '/webpack/:id',
        element: <WebpackDemo />,
      }
    ]
  },
  {
    path: '/git',
    element: <Git />,
    children: [
      {
        path: '/git/:id',
        element: <GitDemo />,
      }
    ]
  },
  {
    path: '/*',
    element: <NotFound />,
  },
];
