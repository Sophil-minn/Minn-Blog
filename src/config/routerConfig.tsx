

import NotFound from "../pages/NotFound";
import Minn from "../minn";

export const routeConfig = [
  {
    path: '/',
    element: <Minn />
  },
  {
    path: '/blog',
    element: <Minn />
  },
  {
    path: '/*',
    element: <NotFound />,
  },

];