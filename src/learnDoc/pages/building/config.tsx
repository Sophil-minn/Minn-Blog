import { getMenuItem } from '../../util/config';
import { ROLLUP, WEBPACK, VITE } from './const';
import Rollup from "./Rollup";
import Vite from "./Vite";
import Webpack from './Webpack';

export const rootSubmenuKeys = [''];

export const items: MenuItem[] = [
  getMenuItem('webpack', `/building/${WEBPACK}`, WEBPACK),
  getMenuItem('vite', `/building/${VITE}`, VITE),
  getMenuItem('rollup', `/building/${ROLLUP}`, ROLLUP),
];

export const componentsMap: { [key in building.RouteIdEnum]?: React.FC } = {
  [WEBPACK]: () => <Webpack />,
  [VITE]: () => <Vite />,
  [ROLLUP]: () => <Rollup />,
};

