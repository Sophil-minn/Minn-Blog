import { lazy } from "react";
const CDemo = lazy(() => import('../../pages/react/apiPractice/CDemo'));
const ReactTheory = lazy(() => import('../../pages/react/ReactTheory'));
const ApiPracticeDemo = lazy(() => import('../../pages/react/apiPractice/Demo'));
const ThinkingInReact = lazy(() => import('../../pages/react/ThinkingInReact'));
const ApiPractice = lazy(() => import('../../pages/react/apiPractice'));
const ReactPrinciple = lazy(() => import('../../pages/react/reactPrinciple'));
const RManagingState = lazy(() => import('../../pages/react/managingState'));
const CManagingStateDemo = lazy(() => import('../../pages/react/managingState/demos/Demo'));
const ReactPrincipleDemo = lazy(() => import('../../pages/react/reactPrinciple/demos/CDemo'));

export const reactRouters = [
  {
    path: '/react',
    element: <ReactTheory />,
  },
  {
    path: '/react/react-theory',
    element: <ReactTheory />
  },
  {
    path: '/react/react-theory/:questionId',
    element: <ReactTheory />
  },
  {
    path: '/react/thinking-in-react',
    element: <ThinkingInReact />
  },
  {
    path: '/react/api-practice',
    element: <ApiPractice />,
    children: [
      {
        path: '/react/api-practice/:pid',
        element: <ApiPracticeDemo />,
        children: [
          {
            path: '/react/api-practice/:pid/:id',
            element: <CDemo />,
          },
        ]
      },
    ]
  },
  {
    path: '/react/react-principle',
    element: <ReactPrinciple />,
    children: [
      {
        path: '/react/react-principle/:id',
        element: <ReactPrincipleDemo />,
      },
    ]
  },
  {
    path: '/react/managing-state',
    element: <RManagingState />,
    children: [
      {
        path: '/react/managing-state/:id',
        element: <CManagingStateDemo />,
        // children: [
        //   {
        //     path: '/react/managing-state/:pid/:id',
        //     element: <MDemo />,
        //   },
        // ]
      }
    ]
  }
]