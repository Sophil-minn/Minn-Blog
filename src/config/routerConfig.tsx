

import NotFound from "../pages/NotFound";
import Home from "../home";
import Minn from "../minn";

export const routeConfig = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/blog',
    element: <Home />
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