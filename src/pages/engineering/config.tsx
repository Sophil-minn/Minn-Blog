import { getMenuItem } from '../../util/config';
import { MenuItem } from '../apiPractice/types';

// submenu keys of first level
export const rootSubmenuKeys = ['sub11', 'sub2', 'sub4'];


export const items: MenuItem[] = [
  getMenuItem('前端工程化', '/engineering', 'engineering', [
    getMenuItem('前端模块化历史', '/engineering/modularizationHistory', 'modularizationHistory'),
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


export const modularizationAnchorItems = [
  {
    key: "summary",
    href: "#summary",
    title: "发展之初存在的问题",
    children: [
      {
        key: "summary-1",
        href: "#summary-1",
        title: '模块化面临什么问题'
      }
    ]
  },
  {
    key: "m-1",
    href: "#m-1",
    title: "模块化的意义",
    // children: [
    //   {
    //     key: "m-1-1",
    //     href: "#m-1-1",
    //     title: "可维护性",
    //   },
    //   {
    //     key: "m-1-2",
    //     href: "#m-1-2",
    //     title: "代码复用",
    //   },
    //   {
    //     key: "m-1-3",
    //     href: "#m-1-3",
    //     title: "多人协作",
    //   },
    //   {
    //     key: "m-1-4",
    //     href: "#m-1-4",
    //     title: "性能",
    //   },
    // ],
  },
  {
    key: "m-2",
    href: "#m-2",
    title: "早期解决方案",
    children: [
      {
        key: "m-2-1",
        href: "#m-2-1",
        title: "命名空间",
      },
      {
        key: "m-2-2",
        href: "#m-2-2",
        title: "IIFE",
      },
    ],
  },
  {
    key: "m-3",
    href: "#m-3",
    title: "模块化的形成",
    children: [
      {
        key: "m-3-1",
        href: "#m-3-1",
        title: "模块化规范总览"
      },
    ],
  },
  {
    key: "m-4",
    href: "#m-4",
    title: "CommonJS",
    children: [
      {
        key: "m-4-1",
        href: "#m-4-1",
        title: "module",
      },
      {
        key: "m-4-2",
        href: "#m-4-2",
        title: "exports",
      },
      {
        key: "m-4-3",
        href: "#m-4-3",
        title: "模块加载机制",
      },
      {
        key: "m-4-4",
        href: "#m-4-4",
        title: "优势",
      },
      {
        key: "m-4-5",
        href: "#m-4-5",
        title: "存在的问题",
      },
      {
        key: "m-4-6",
        href: "#m-4-6",
        title: "浏览器模块化和服务端模块化有什么区别？",
      },
    ],
  },
  {
    key: "m-5",
    href: "#m-5",
    title: "AMD",
    children: [
      {
        key: "m-5-1",
        href: "#m-5-1",
        title: "模块加载机制",
      },
      {
        key: "m-5-2",
        href: "#m-5-2",
        title: "流程解析",
      },
      {
        key: "m-5-3",
        href: "#m-5-3",
        title: "优势",
      },
      {
        key: "m-5-4",
        href: "#m-5-4",
        title: "存在的问题",
      },
    ],
  },
  {
    key: "m-6",
    href: "#m-6",
    title: "CMD",
    children: [
      {
        key: "m-6-1",
        href: "#m-6-1",
        title: "模块加载机制",
      },
      {
        key: "m-6-2",
        href: "#m-6-2",
        title: "流程解析",
      },
      {
        key: "m-6-3",
        href: "#m-6-3",
        title: "优势",
      },
      {
        key: "m-6-4",
        href: "#m-6-4",
        title: "存在的问题",
      },
    ],
  },
  {
    key: "m-7",
    href: "#m-7",
    title: "UMD",
    children: [
      {
        key: "m-7-1",
        href: "#m-7-1",
        title: "实现原理",
      },
      {
        key: "m-7-2",
        href: "#m-7-2",
        title: "缺点",
      },
    ],
  },
  {
    key: "m-8",
    href: "#m-8",
    title: "ES Module",
    children: [
      {
        key: "m-8-1",
        href: "#m-8-1",
        title: "模块加载机制",
      },
      {
        key: "m-8-2",
        href: "#m-8-2",
        title: "流程解析",
      },
      {
        key: "m-8-3",
        href: "#m-8-3",
        title: "模块的编译构建",
      },
    ],
  },
]

export const modularizationHistoryAnchorItems = [
  {
    key: "h-1",
    href: "#h-1",
    title: "script 直接引入加载",
  },
  {
    key: "h-2",
    href: "#h-2",
    title: "模块化标准",
    children: [
      {
        key: "h-2-1",
        href: "#h-2-1",
        title: "ES6 Module",
      },
      {
        key: "h-2-2",
        href: "#h-2-2",
        title: "自动化构建工具（gulp，grunt）",
      },
      {
        key: "h-2-3",
        href: "#h-2-3",
        title: "模块化打包器（webpack）",
      },
    ]
  },
  {
    key: "h-3",
    href: "#h-3",
    title: "使用 webpack 实现工程化",
  },
];

export const componentizationAnchorItems = [
  {
    key: "c-1",
    href: "#c-1",
    title: "什么是组件化",
  },
  {
    key: "c-2",
    href: "#c-2",
    title: "组件化与模块化的区别",
  },
  {
    key: "c-3",
    href: "#c-3",
    title: "组件的划分",
    children: [
      {
        key: "c-3-1",
        href: "#c-3-1",
        title: '划分方法'
      },
      {
        key: "c-3-2",
        href: "#c-3-2",
        title: '组件分类'
      },
      {
        key: "c-3-3",
        href: "#c-3-3",
        title: '组件的隔离'
      },
      {
        key: "c-3-4",
        href: "#c-3-4",
        title: '组件间通信'
      },
      {
        key: "c-3-5",
        href: "#c-3-5",
        title: '组件的按需加载'
      },
    ]
  },
  {
    key: "c-4",
    href: "#c-4",
    title: "组件的设计原则",
  },
  {
    key: "c-5",
    href: "#c-5",
    title: "可配置性",
  },
  {
    key: "c-6",
    href: "#c-6",
    title: "组件的生命周期",
  },
  {
    key: "c-7",
    href: "#c-7",
    title: "事件传递",
  },
];