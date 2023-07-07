import { getMenuItem } from '../../util/config';
import { MenuItem } from '../apiPractice/types';
import { COMPONENT_SETTLE_DWON, COMPONENT_THEORY, DEV_ENVIROMENT, ENGINERING, LIBARY_DEV } from './const';

export const rootSubmenuKeys = [''];

export const items: MenuItem[] = [
  getMenuItem('组件库开发', `/components-development/${LIBARY_DEV}`, LIBARY_DEV),
  getMenuItem('组件开发环境配置', `/components-development/${DEV_ENVIROMENT}`, DEV_ENVIROMENT),
  getMenuItem('工程化', `/components-development/${ENGINERING}`, ENGINERING),
  getMenuItem('组件设计理论', `/components-development/${COMPONENT_THEORY}`, COMPONENT_THEORY),
  getMenuItem('组件沉淀', `/components-development/${COMPONENT_SETTLE_DWON}`, COMPONENT_SETTLE_DWON),
];
