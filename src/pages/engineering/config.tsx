import { getMenuItem } from '../../util/config';
import { MenuItem } from '../apiPractice/types';

export const rootSubmenuKeys = ['sub11', 'sub2', 'sub4'];

export const items: MenuItem[] = [
  getMenuItem('前端工程化', '/engineering', 'engineering', [
    getMenuItem('前端开发规范', '/engineering/webDevStandard', 'webDevStandard'),
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

export const webDevStandardAnchorItems = [
  {
    key: "w-1",
    href: "#w-1",
    title: "基础规则",
  },
  {
    key: "w-2",
    href: "#w-2",
    title: "组件声明",
  },
  {
    key: "w-3",
    href: "#w-3",
    title: "React 中的命名",
    children: [
      {
        key: "w-3-1",
        href: "#w-3-1",
        title: '不要嫌弃函数名过长'
      },
      {
        key: "w-3-2",
        href: "#w-3-2",
        title: '变量 / 函数 命名头部'
      },
      {
        key: "w-3-3",
        href: "#w-3-3",
        title: '什么时候用 has ， 什么时候用 is'
      },
      {
        key: "w-3-4",
        href: "#w-3-4",
        title: '命名规则'
      },
      {
        key: "w-3-5",
        href: "#w-3-5",
        title: '使用缩写'
      },
      {
        key: "w-3-6",
        href: "#w-3-6",
        title: '常量命名'
      },
      {
        key: "w-3-7",
        href: "#w-3-7",
        title: '单词拼接 加深语义化'
      },
    ]
  },
  {
    key: "w-4",
    href: "#w-4",
    title: "JSX 写法注意",
    children: [
      {
        key: "w-4-1",
        href: "#w-4-1",
        title: '标签'
      },
      {
        key: "w-4-2",
        href: "#w-4-2",
        title: '对齐'
      },
      {
        key: "w-4-3",
        href: "#w-4-3",
        title: '引号'
      },
    ]
  },
  {
    key: "w-5",
    href: "#w-5",
    title: "样式写法",
  },
  {
    key: "w-6",
    href: "#w-6",
    title: "key 属性设置",
  },
  {
    key: "w-7",
    href: "#w-7",
    title: "事件传递",
  },
  {
    key: "w-8",
    href: "#w-8",
    title: "状态提升",
  },
  {
    key: "w-9",
    href: "#w-9",
    title: "推荐使用 Context",
  },
  {
    key: "w-10",
    href: "#w-10",
    title: "路由加载",
  },
  {
    key: "w-11",
    href: "#w-11",
    title: "逻辑拆分",
  },
  {
    key: "w-12",
    href: "#w-12",
    title: "组件拆分规则",
  },
  {
    key: "w-13",
    href: "#w-13",
    title: "CSS BEM规范",
    children: [
      {
        key: "w-13-1",
        href: "#w-13-1",
        title: '1）、块（Block）'
      },
      {
        key: "w-13-2",
        href: "#w-13-2",
        title: '2）、元素(Element)'
      },
      {
        key: "w-13-3",
        href: "#w-13-3",
        title: '3）、修饰符(modifier)'
      },
      {
        key: "w-13-4",
        href: "#w-13-4",
        title: '4）、书写原则'
      },
      {
        key: "w-13-5",
        href: "#w-13-5",
        title: '5）、无意义的__'
      },
      {
        key: "w-13-6",
        href: "#w-13-6",
        title: '6）、用新的块来保存新元素'
      },
      {
        key: "w-13-7",
        href: "#w-13-7",
        title: '7）、命名空间'
      },
    ]
  },
]