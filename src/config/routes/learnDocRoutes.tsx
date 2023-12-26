import { lazy } from "react";

const ComponentsDevelopmentDemo = lazy(() => import('../../learnDoc/pages/componentsDevelopment/CDemo'));
const ComponentsDevelopment = lazy(() => import('../../learnDoc/pages/componentsDevelopment'));
const BuildingDemo = lazy(() => import('../../learnDoc/pages/building/CDemo'));
const Building = lazy(() => import('../../learnDoc/pages/building'));
const DataStructureAlgorithmDemo = lazy(() => import('../../learnDoc/pages/dataStructureAlgorithm/CDemo'));
const DataStructureAlgorithm = lazy(() => import('../../learnDoc/pages/dataStructureAlgorithm'));
const DesignPatternDemo = lazy(() => import('../../learnDoc/pages/designPattern/Demo'));
const DesignPatternCDemo = lazy(() => import('../../learnDoc/pages/designPattern/CDemo'));
const DesignPattern = lazy(() => import('../../learnDoc/pages/designPattern'));
const PerformanceOptimizationDemo = lazy(() => import('../../learnDoc/pages/performanceOptimization/demos/CDemo'));
const PerformanceOptimization = lazy(() => import('../../learnDoc/pages/performanceOptimization'));
const EngineeringDemo = lazy(() => import('../../learnDoc/pages/engineering/engineeringDemo'));
const Engineering = lazy(() => import('../../learnDoc/pages/engineering'));
const WebpackDemo = lazy(() => import('../../learnDoc/pages/webpack/demos/CDemo'));
const Webpack = lazy(() => import('../../learnDoc/pages/webpack'));
const NodejsDemo = lazy(() => import('../../learnDoc/pages/nodejs/demos'));
const Nodejs = lazy(() => import('../../learnDoc/pages/nodejs'));
const GitDemo = lazy(() => import('../../learnDoc/pages/git/demos/CDemo'));
const Git = lazy(() => import('../../learnDoc/pages/git'));
const Home = lazy(() => import('../../learnDoc/pages/home'));
const G6Demo = lazy(() => import('../../learnDoc/pages/g6'));
const G6TreeDemo = lazy(() => import('../../learnDoc/pages/g6/G6TreeDemo'));
const MindMapping = lazy(() => import('../../learnDoc/pages/g6/MindMapping'));
const Monaco = lazy(() => import('../../learnDoc/pages/demo/monaco'));
const Code = lazy(() => import('../../learnDoc/pages/demo/monaco/Code'));
const RenderCode = lazy(() => import('../../learnDoc/pages/demo/monaco/RenderCode'));
const NotFound = lazy(() => import('../../learnDoc/pages/NotFound'));

const CDemo = lazy(() => import('../../learnDoc/pages/react/apiPractice/CDemo'));
const ReactTheory = lazy(() => import('../../learnDoc/pages/react/ReactTheory'));
const ApiPracticeDemo = lazy(() => import('../../learnDoc/pages/react/apiPractice/Demo'));
const ThinkingInReact = lazy(() => import('../../learnDoc/pages/react/ThinkingInReact'));
const ApiPractice = lazy(() => import('../../learnDoc/pages/react/apiPractice'));
const ReactPrinciple = lazy(() => import('../../learnDoc/pages/react/reactPrinciple'));
const RManagingState = lazy(() => import('../../learnDoc/pages/react/managingState'));
const CManagingStateDemo = lazy(() => import('../../learnDoc/pages/react/managingState/demos/Demo'));
const ReactPrincipleDemo = lazy(() => import('../../learnDoc/pages/react/reactPrinciple/demos/CDemo'));

export const learnDocRoutes = [
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
  },
  {
    path: '/*',
    element: <NotFound />,
  },
  
];
