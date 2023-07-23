import { getMenuItem } from '../../util/config';
import { COMPONENT_SETTLE_DWON, COMPONENT_THEORY, DEV_ENVIROMENT, COMPONENT_ENGINERING, LIBARY_DEV } from './const';
import ComponentSettleDown from "./ComponentSettleDown";
import ComponentTheory from "./ComponentTheory";
import DevEnviroment from "./DevEnviroment";
import ComponentEnginering from "./ComponentEnginering";
import LibaryDev from "./LibaryDev";

export const rootSubmenuKeys = [''];

export const items: MenuItem[] = [
  // getMenuItem('组件库开发', `/components-development/${LIBARY_DEV}`, LIBARY_DEV),
  // getMenuItem('组件开发环境配置', `/components-development/${DEV_ENVIROMENT}`, DEV_ENVIROMENT),
  getMenuItem('工程化', `/components-development/${COMPONENT_ENGINERING}`, COMPONENT_ENGINERING),
  getMenuItem('组件设计理论', `/components-development/${COMPONENT_THEORY}`, COMPONENT_THEORY),
  getMenuItem('组件沉淀', `/components-development/${COMPONENT_SETTLE_DWON}`, COMPONENT_SETTLE_DWON),
];


export const componentsMap: { [key in componentsDevelopment.RouteIdEnum]?: React.ReactNode } = {
  // [LIBARY_DEV]: <LibaryDev />,
  [COMPONENT_SETTLE_DWON]: <ComponentSettleDown />,
  [COMPONENT_THEORY]: <ComponentTheory />,
  // [DEV_ENVIROMENT]: <DevEnviroment />,
  [COMPONENT_ENGINERING]: <ComponentEnginering />,
};

