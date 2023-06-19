

import NotFound from "../pages/NotFound";
import Home from "../home";
import Minn from "../minn";
import ReactTheory from "../reactTheory";
import G6Demo from "../pages/g6";
import G6TreeDemo from "../pages/g6/G6TreeDemo";
import MindMapping from "../pages/g6/MindMapping";
import Monaco from "../pages/demo/monaco";
import Code from "../pages/demo/monaco/Code";
import RenderCode from "../pages/demo/monaco/RenderCode";

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
