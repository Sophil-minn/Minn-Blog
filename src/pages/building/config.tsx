import { getMenuItem } from '../../util/config';
import { MenuItem } from '../react/apiPractice/types';
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

interface ComponentsMap {
  [WEBPACK]: React.FC;
  [VITE]: React.FC;
  [ROLLUP]: React.FC;
}

export const componentsMap: ComponentsMap = {
  [WEBPACK]: () => <Webpack />,
  [VITE]: () => <Vite />,
  [ROLLUP]: () => <Rollup />,
};

