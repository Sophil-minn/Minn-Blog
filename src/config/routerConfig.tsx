

import NotFound from "../pages/NotFound";
import Home from "../home";
import Minn from "../minn";
import ReactTheory from "../reactTheory";

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
    path: '/minn',
    element: <Minn />
  },
  {
    path: '/*',
    element: <NotFound />,
  },
];
