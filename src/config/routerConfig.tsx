

import { lazy } from "react";
// import Monaco from "../pages/demo/monaco";
// import Code from "../pages/demo/monaco/Code";
// import Demo from "../pages/apiPractice/demos/Demo";
import CDemo from "../pages/apiPractice/demos/CDemo";
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

// const Code = lazy(() => import('../pages/demo/monaco/Code'));
const RenderCode = lazy(() => import('../pages/demo/monaco/RenderCode'));
const ThinkingInReact = lazy(() => import('../pages/thinkingInReact'));
const NotFound = lazy(() => import('../pages/NotFound'));
const ApiPractice = lazy(() => import('../pages/apiPractice'));
const ReactPrinciple = lazy(() => import('../pages/reactPrinciple'));
const ManagingState = lazy(() => import('../pages/managingState'));

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
    element: <ReactPrinciple />
  },
  {
    path: '/managing-state',
    element: <ManagingState />
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
