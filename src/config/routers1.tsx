

import { lazy } from "react";

const ComponentsDevelopmentDemo = lazy(() => import('../pages/componentsDevelopment/demos/CDemo'));
const ComponentsDevelopment = lazy(() => import('../pages/componentsDevelopment'));
const PerformanceOptimizationDemo = lazy(() => import('../pages/performanceOptimization/demos/CDemo'));
const PerformanceOptimization = lazy(() => import('../pages/performanceOptimization'));
const EngineeringDemo = lazy(() => import('../pages/engineering/engineeringDemo'));
const Engineering = lazy(() => import('../pages/engineering'));
const WebpackDemo = lazy(() => import('../pages/webpack/demos/CDemo'));
const Webpack = lazy(() => import('../pages/webpack'));
const GitDemo = lazy(() => import('../pages/git/demos/CDemo'));
const Git = lazy(() => import('../pages/git'));

export const routers1 = [
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
  }
];
