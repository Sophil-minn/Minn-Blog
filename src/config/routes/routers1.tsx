import { lazy } from "react";

const ComponentsDevelopmentDemo = lazy(() => import('../../pages/componentsDevelopment/CDemo'));
const ComponentsDevelopment = lazy(() => import('../../pages/componentsDevelopment'));
const BuildingDemo = lazy(() => import('../../pages/building/CDemo'));
const Building = lazy(() => import('../../pages/building'));
const DataStructureAlgorithmDemo = lazy(() => import('../../pages/dataStructureAlgorithm/CDemo'));
const DataStructureAlgorithm = lazy(() => import('../../pages/dataStructureAlgorithm'));
const DesignPatternDemo = lazy(() => import('../../pages/designPattern/Demo'));
const DesignPatternCDemo = lazy(() => import('../../pages/designPattern/CDemo'));
const DesignPattern = lazy(() => import('../../pages/designPattern'));
const PerformanceOptimizationDemo = lazy(() => import('../../pages/performanceOptimization/demos/CDemo'));
const PerformanceOptimization = lazy(() => import('../../pages/performanceOptimization'));
const EngineeringDemo = lazy(() => import('../../pages/engineering/engineeringDemo'));
const Engineering = lazy(() => import('../../pages/engineering'));
const WebpackDemo = lazy(() => import('../../pages/webpack/demos/CDemo'));
const Webpack = lazy(() => import('../../pages/webpack'));
const NodejsDemo = lazy(() => import('../../pages/nodejs/demos'));
const Nodejs = lazy(() => import('../../pages/nodejs'));
const GitDemo = lazy(() => import('../../pages/git/demos/CDemo'));
const Git = lazy(() => import('../../pages/git'));
const Home = lazy(() => import('../../pages/home'));
const G6Demo = lazy(() => import('../../pages/g6'));
const G6TreeDemo = lazy(() => import('../../pages/g6/G6TreeDemo'));
const MindMapping = lazy(() => import('../../pages/g6/MindMapping'));
const Monaco = lazy(() => import('../../pages/demo/monaco'));
const Code = lazy(() => import('../../pages/demo/monaco/Code'));
const RenderCode = lazy(() => import('../../pages/demo/monaco/RenderCode'));
const NotFound = lazy(() => import('../../pages/NotFound'));

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
    path: '/building',
    element: <Building />,
    children: [
      {
        path: '/building/:id',
        element: <BuildingDemo />,
      }
    ]
  },
  {
    path: '/dataStructureAlgorithm',
    element: <DataStructureAlgorithm />,
    children: [
      {
        path: '/dataStructureAlgorithm/:id',
        element: <DataStructureAlgorithmDemo />,
      }
    ]
  },
  {
    path: '/designPattern',
    element: <DesignPattern />,
    children: [
      {
        path: '/designPattern/:id',
        element: <DesignPatternDemo />,
        children: [
          {
            path: '/designPattern/:id/:cid',
            element: <DesignPatternCDemo />,
          }
        ]
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
    path: '/nodejs',
    element: <Nodejs />,
    children: [
      {
        path: '/nodejs/:id',
        element: <NodejsDemo />,
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
