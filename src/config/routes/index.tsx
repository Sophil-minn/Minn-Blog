import { lazy } from "react";
// import { learnDocRoutes } from "./learnDocRoutes";
import ComponentSettleDown from "../../learnDoc/pages/componentsDevelopment/ComponentSettleDown";

const Home = lazy(() => import('../../home'));
const Detail = lazy(() => import('../../home/Detail'));
const NotFound = lazy(() => import('../../learnDoc/pages/NotFound'));

const routeConfig = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/home/detail',
    element: <Detail />,
    // children: [
    //   {
    //     path: '/home/detail/:id',
    //     element: <ComponentSettleDown />,
    //   }
    // ]
  },
  {
    path: '/home/detail/:id',
    element: <Detail />,
  },
  {
    path: '/*',
    element: <NotFound />,
  },
    // ...learnDocRoutes,
];

export default routeConfig;