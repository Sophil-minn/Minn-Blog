

import { lazy } from "react";
// import Monaco from "../pages/demo/monaco";
// import Code from "../pages/demo/monaco/Code";
// import Demo from "../pages/apiPractice/demos/Demo";
import CDemo from "../pages/apiPractice/demos/CDemo";
import MDemo from "../pages/managingState/demos/MDemo";
// import ReactPrinciple from "../pages/reactPrinciple";

const Home = lazy(() => import('../home'));
const Minn = lazy(() => import('../minn'));
const ReactTheory = lazy(() => import('../pages/reactTheory'));
const G6Demo = lazy(() => import('../pages/g6'));
const G6TreeDemo = lazy(() => import('../pages/g6/G6TreeDemo'));
const MindMapping = lazy(() => import('../pages/g6/MindMapping'));
const Monaco = lazy(() => import('../pages/demo/monaco'));
const Code = lazy(() => import('../pages/demo/monaco/Code'));
const ApiPracticeDemo = lazy(() => import('../pages/apiPractice/demos/Demo'));

const RenderCode = lazy(() => import('../pages/demo/monaco/RenderCode'));
const ThinkingInReact = lazy(() => import('../pages/thinkingInReact'));
const NotFound = lazy(() => import('../pages/NotFound'));
const ApiPractice = lazy(() => import('../pages/apiPractice'));
const ReactPrinciple = lazy(() => import('../pages/reactPrinciple'));
const RManagingState = lazy(() => import('../pages/managingState'));
const CManagingStateDemo = lazy(() => import('../pages/managingState/demos/Demo'));
const ReactPrincipleDemo = lazy(() => import('../pages/reactPrinciple/demos/CDemo'));
const ComponentsDevelopmentDemo = lazy(() => import('../pages/componentsDevelopment/demos/CDemo'));
const ComponentsDevelopment = lazy(() => import('../pages/componentsDevelopment'));
const PerformanceOptimizationDemo = lazy(() => import('../pages/performanceOptimization/demos/CDemo'));
const PerformanceOptimization = lazy(() => import('../pages/performanceOptimization'));
const EngineeringDemo = lazy(() => import('../pages/engineering/demos/CDemo'));
const Engineering = lazy(() => import('../pages/engineering'));
const WebpackDemo = lazy(() => import('../pages/webpack/demos/CDemo'));
const Webpack = lazy(() => import('../pages/webpack'));
const GitDemo = lazy(() => import('../pages/git/demos/CDemo'));
const Git = lazy(() => import('../pages/git'));

export const routeConfig = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/react',
    element: <ReactTheory />
  },
  {
    path: '/react/:questionId',
    element: <ReactTheory />
  },
  {
    path: '/thinking-in-react',
    element: <ThinkingInReact />
  },
  {
    path: '/api-practice',
    element: <ApiPractice />,
    children: [
      {
        path: '/api-practice/:pid',
        element: <ApiPracticeDemo />,
        children: [
          {
            path: '/api-practice/:pid/:id',
            element: <CDemo />,
          },
        ]
      },
    ]
  },
  {
    path: '/react-principle',
    element: <ReactPrinciple />,
    children: [
      {
        path: '/react-principle/:id',
        element: <ReactPrincipleDemo />,
      },
    ]
  },
  {
    path: '/managing-state',
    element: <RManagingState />,
    children: [
      {
        path: '/managing-state/:pid',
        element: <CManagingStateDemo />,
        children: [
          {
            path: '/managing-state/:pid/:id',
            element: <MDemo />,
          },
        ]
      }
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
];
