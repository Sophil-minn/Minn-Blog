import { lazy } from "react";

const CDemo = lazy(() => import('../pages/apiPractice/demos/CDemo'));
const MDemo = lazy(() => import('../pages/managingState/demos/MDemo'));
const ReactTheory = lazy(() => import('../pages/reactTheory'));
const ApiPracticeDemo = lazy(() => import('../pages/apiPractice/demos/Demo'));
const ThinkingInReact = lazy(() => import('../pages/thinkingInReact'));
const ApiPractice = lazy(() => import('../pages/apiPractice'));
const ReactPrinciple = lazy(() => import('../pages/reactPrinciple'));
const RManagingState = lazy(() => import('../pages/managingState'));
const CManagingStateDemo = lazy(() => import('../pages/managingState/demos/Demo'));
const ReactPrincipleDemo = lazy(() => import('../pages/reactPrinciple/demos/CDemo'));

export const reactRouters = [
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
  }
]