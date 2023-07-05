import { getMenuItem } from '../../util/config';
import { MenuItem } from '../apiPractice/types';

// submenu keys of first level
export const rootSubmenuKeys = ['sub11', 'sub2', 'sub4'];


export const items: MenuItem[] = [
  getMenuItem('前端工程化', '/engineering', 'engineering', [
    getMenuItem('前端模块化', '/engineering/modularization', 'modularization'),
    getMenuItem('前端组件化', '/engineering/componentization', 'componentization'),
  ]),
];


export const engineeringAnchorItems = [
  {
    key: "theory",
    href: "#theory",
    title: "概念",
  },
  {
    key: "why need engineering",
    href: "#why-need-engineering",
    title: "为什么需要工程化",
    children: [
      {
        key: "Efficiency",
        href: "#Efficiency",
        title: "提升开发效率",
      },
      {
        key: "performance",
        href: "#performance",
        title: "优化性能",
      },
      {
        key: "qulity",
        href: "#qulity",
        title: "提高代码质量",
      },
    ],
  },
];
