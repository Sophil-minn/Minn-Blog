
import { NavInfoProps } from "../../../types";
import { STATE } from "./const";
import { reactItems } from "./reactItems";
import { vueItems } from "./vueItems";
// vue篇
const vueItem = {
  title: "vue篇",
  description: "vue学习沉淀",
  list: [],
};
// 组件开发实战篇
export const componentsItem = {
  title: "组件库开发",
  description: "组件开发沉淀",
  path: "/components-development",
  list: [
    // {
    //   title: "组件库开发",
    //   tips: "组件库开发",
    //   path: "/components-development/libary-dev",
    //   disabled: false,
    //   pathType: "",
    //   statusCode: "",
    // },
    // {
    //   title: "组件开发环境配置",
    //   tips: "组件开发环境配置",
    //   path: "/components-development/dev-enviroment",
    //   pathType: "",
    //   disabled: false,
    //   // statusCode: STATE.WAIT_ONLINE
    // },
    {
      title: "工程化",
      tips: "组件模版工程化",
      path: "/components-development/enginering",
      disabled: false,
      pathType: "",
      statusCode: "",
    },
    {
      title: "组件设计理论",
      tips: "组件设计理论",
      path: "/components-development/component-theory",
      disabled: false,
      pathType: "",
      statusCode: "",
    },
    {
      title: "组件沉淀",
      tips: "组件沉淀",
      path: "/components-development/component-settle-down",
      disabled: false,
      pathType: "",
      statusCode: "",
    },
  ],
};
// git篇
const gitItem = {
  title: "git篇",
  description: "git学习沉淀",
  list: [
    {
      title: "git基本概念",
      tips: "git配置信息，Git 工作区、暂存区和版本库概念",
      path: "",
      pathType: "",
      statusCode: STATE.WAIT_ONLINE,
    },
    {
      title: "git操作篇",
      tips: "git常用操作总结",
      path: "",
      pathType: "",
      statusCode: STATE.WAIT_ONLINE,
    },
    {
      title: "git其他操作篇",
      tips: "git非常用操作沉淀",
      path: "",
      pathType: "",
      statusCode: STATE.WAIT_ONLINE,
    },
  ],
};
// 数据结构篇
const commandsItem = {
  title: "操作命令",
  description: "操作命令",
  list: [
    {
      title: "Linux",
      tips: "",
      path: "",
      pathType: "outer",
      statusCode: "",
    },
    {
      title: "shell",
      tips: "",
      path: "",
      pathType: "",
      statusCode: "",
    },
    // {
    //   title: "集合",
    //   tips: "创建集合、并集、交集、差集、子集",
    //   path: "",
    //   pathType: "",
    //   statusCode: "",
    // },
    // {
    //   title: "链表",
    //   tips: "创建链表、双向链表",
    //   path: "",
    //   pathType: "",
    //   statusCode: "",
    // },
    // {
    //   title: "字典",
    //   tips: "实现字典",
    //   path: "",
    //   pathType: "",
    //   statusCode: "",
    // },
    // {
    //   title: "树",
    //   tips: "实现树",
    //   path: "",
    //   pathType: "",
    //   statusCode: "",
    // },
    // {
    //   title: "图",
    //   tips: "实现图",
    //   path: "",
    //   pathType: "",
    //   statusCode: "",
    // },
    // {
    //   title: "堆",
    //   tips: "实现堆",
    //   path: "",
    //   pathType: "",
    //   statusCode: "",
    // },
  ],
};
// 数据结构和算法
const algorithmItem = {
  title: "算法",
  description: "javaScipt算法",
  path: "/dataStructureAlgorithm",
  list: [
     {
      title: "数据结构",
      tips: "",
      path: "/dataStructureAlgorithm/dataStructure",
      disabled: false,
      pathType: "",
      statusCode: "",
    },
    {
      title: "算法",
      tips: "",
      path: "/dataStructureAlgorithm/algorithm",
      disabled: false,
      pathType: "",
      statusCode: "",
    },
    // {
    //   title: "算法设计思想",
    //   tips: "算法设计思想总结",
    //   path: "",
    //   pathType: "",
    //   statusCode: "",
    // },
    // {
    //   title: "冒泡算法",
    //   tips: "冒泡算法原理及实现",
    //   path: "",
    //   pathType: "",
    //   statusCode: "",
    // },
    // {
    //   title: "选择算法",
    //   tips: "选择算法原理及实现",
    //   path: "",
    //   pathType: "",
    //   statusCode: "",
    // },
    // {
    //   title: "插入算法",
    //   tips: "插入算法原理及实现",
    //   path: "",
    //   pathType: "",
    //   statusCode: "",
    // },
    // {
    //   title: "归并算法",
    //   tips: "归并算法原理及实现",
    //   path: "",
    //   pathType: "",
    //   statusCode: STATE.WAIT_ONLINE,
    // },
    // {
    //   title: "快速算法",
    //   tips: "快速算法原理及实现",
    //   path: "",
    //   pathType: "",
    //   statusCode: STATE.NEW,
    // },
    // {
    //   title: "顺序算法",
    //   tips: "顺序算法原理及实现",
    //   path: "",
    //   pathType: "",
    //   statusCode: STATE.NEW,
    // },
    // {
    //   title: "二分搜索",
    //   tips: "顺序算法原理及实现",
    //   path: "",
    //   pathType: "",
    //   statusCode: STATE.NEW,
    // },
  ],
};
// webpack篇
const webpackItem = {
  title: "前端打包",
  description: "",
  path: "/building",
  list: [
    {
      title: "webpack",
      tips: "webpack",
      disabled: false,
      path: "/building/webpack",
      pathType: "",
      statusCode: STATE.WAIT_ONLINE,
    },
    {
      title: "Vite",
      tips: "Vite 核心总结",
      path: "/building/vite",
      disabled: false,
      pathType: "",
      statusCode: STATE.WAIT_ONLINE,
    },
    {
      title: "Rollup",
      tips: "Rollup 学习总结",
      disabled: false,
      path: "/building/rollup",
      pathType: "",
      statusCode: STATE.WAIT_ONLINE,
    },
  ],
};
// webpack篇
const designPatternItem = {
  title: "设计模式",
  description: "",
  path: "/designPattern",
  list: [
    {
      title: "迪米特法则",
      tips: "",
      path: "/designPattern/law-of-demeter",
      disabled: false,
      pathType: "",
      statusCode: STATE.WAIT_ONLINE,
    },
    {
      title: "设计原则",
      tips: "designRule",
      disabled: false,
      path: "/designPattern/design-rule",
      pathType: "",
      statusCode: STATE.WAIT_ONLINE,
    },
    {
      title: "常用设计模式",
      tips: "",
      disabled: false,
      path: "/designPattern/common-patterns",
      pathType: "",
      statusCode: STATE.WAIT_ONLINE,
    },
    {
      title: "非常用设计模式",
      tips: "",
      disabled: false,
      path: "/designPattern/uncommon-patterns",
      pathType: "",
      statusCode: STATE.WAIT_ONLINE,
    },
  ],
};
// 浏览器篇
const navigationItem = {
  title: "浏览器篇",
  description: "浏览器相关知识点总结",
  list: [
    {
      title: "浏览器安全",
      tips: "",
      path: "",
      pathType: "",
      statusCode: STATE.HOT,
    },
    {
      title: "进程和线程",
      tips: "进程和线程学习沉淀",
      path: "",
      pathType: "",
      statusCode: STATE.WAIT_ONLINE,
    },
    {
      title: "浏览器缓存",
      tips: "浏览器缓存概念及原理学习总结",
      path: "",
      pathType: "",
      statusCode: STATE.WAIT_ONLINE,
    },
    {
      title: "浏览器组成",
      tips: "浏览器组成学习总结",
      path: "",
      pathType: "",
      statusCode: STATE.WAIT_ONLINE,
    },
    {
      title: "浏览器渲染原理",
      tips: "浏览器渲染原理学习总结",
      path: "",
      pathType: "",
      statusCode: STATE.WAIT_ONLINE,
    },
    {
      title: "浏览器本地存储",
      tips: "浏览器本地存储学习总结",
      path: "",
      pathType: "",
      statusCode: STATE.WAIT_ONLINE,
    },
    {
      title: "同源策略原理",
      tips: "同源策略原理学习总结",
      path: "",
      pathType: "",
      statusCode: STATE.WAIT_ONLINE,
    },
    {
      title: "浏览器事件机制",
      tips: "浏览器事件机制学习总结",
      path: "",
      pathType: "",
      statusCode: STATE.WAIT_ONLINE,
    },
    {
      title: "垃圾回收机制",
      tips: "浏览器垃圾回收机制学习总结",
      path: "",
      pathType: "",
      statusCode: STATE.WAIT_ONLINE,
    },
  ],
};
// 计算机网络篇
const netWorkItem = {
  title: "计算机网络",
  description: "计算机网络知识点总结",
  list: [
    {
      title: "Nginx",
      tips: "",
      path: "",
      pathType: "",
      statusCode: STATE.NEW,
    },
    {
      title: "跨域",
      tips: "",
      path: "",
      pathType: "",
      statusCode: STATE.WAIT_ONLINE,
    },
    {
      title: "axios",
      tips: "",
      path: "/",
      pathType: "",
      statusCode: STATE.NEW,
    },
    {
      title: "http请求",
      tips: "",
      path: "/",
      pathType: "",
      statusCode: STATE.NEW,
    },
    {
      title: "DNS",
      tips: "",
      path: "/",
      pathType: "",
      statusCode: STATE.NEW,
    },
  ],
};
// 前端工程化篇
export const nodejsItem = {
  title: "nodejs",
  description: "前端工程化概念及原理学习总结",
  path: '/nodejs',
  list: [
    {
      title: "入门",
      tips: "",
      path: "/",
      pathType: "",
      statusCode: STATE.NEW,
    },
    {
      title: "深入",
      tips: "",
      path: "/",
      pathType: "",
      statusCode: STATE.NEW,
    },
  ],
};
// 性能优化篇
export const perfomanceItem = {
  title: "性能优化",
  description: "性能优化总结沉淀",
  path: "/performance-optimization",
  list: [
    {
      title: "图片懒加载",
      tips: "",
      path: "/performance-optimization/imgLazyLoad",
      disabled: false,
      pathType: "",
      statusCode: STATE.NEW,
    },
    {
      title: "重绘和回流",
      tips: "",
      path: "/performance-optimization/repaintAndReflow",
      disabled: false,
      pathType: "",
      statusCode: STATE.NEW,
    },
    {
      title: "减少请求数量",
      tips: "",
      path: "/performance-optimization/reduceRequests",
      disabled: false,
      pathType: "",
      statusCode: STATE.NEW,
    },
    {
      title: "减小资源大小",
      tips: "",
      path: "/performance-optimization/reduceResourceSize",
      disabled: false,
      pathType: "",
      statusCode: STATE.NEW,
    },
    {
      title: "优化网络连接",
      tips: "",
      path: "/performance-optimization/optimizeNetworkConnectivity",
      disabled: false,
      pathType: "",
      statusCode: STATE.NEW,
    },
    {
      title: "优化资源加载",
      tips: "",
      path: "/performance-optimization/optimizeResourceLoading",
      disabled: false,
      pathType: "",
      statusCode: STATE.NEW,
    },
    {
      title: "渲染优化",
      tips: "",
      path: "/performance-optimization/renderOptimization",
      disabled: false,
      pathType: "",
      statusCode: STATE.NEW,
    },
    {
      title: "渲染完成后的优化",
      tips: "",
      path: "/performance-optimization/renderedOptimization",
      disabled: false,
      pathType: "",
      statusCode: STATE.NEW,
    },
    {
      title: "requestAnimationFrame",
      tips: "",
      path: "/performance-optimization/requestAnimationFrame",
      disabled: false,
      pathType: "",
      statusCode: STATE.NEW,
    },
    {
      title: "Webpack优化",
      tips: "",
      path: "/performance-optimization/webpackOptimize",
      disabled: false,
      pathType: "",
      statusCode: STATE.NEW,
    },
    {
      title: "思考1",
      tips: "",
      path: "/performance-optimization/optimization1",
      disabled: false,
      pathType: "",
      statusCode: STATE.NEW,
    },
    {
      title: "思考2",
      tips: "",
      path: "/performance-optimization/optimization2",
      disabled: false,
      pathType: "",
      statusCode: STATE.NEW,
    },
  ],
};
// 软件工程篇
export const softwareItem = {
  title: "软件工程篇",
  description: "软件开发",
  list: [
    {
      title: "设计模式",
      tips: "",
      path: "/",
      pathType: "",
      statusCode: STATE.NEW,
    },
    {
      title: "nodejs",
      tips: "",
      path: "/",
      pathType: "",
      statusCode: STATE.NEW,
    },
  ],
};

export const navigationEntranceList: NavInfoProps[] = [
  nodejsItem,
  netWorkItem,
  navigationItem,
  commandsItem,
  // algorithmItem,
  gitItem,
  vueItem
];

// 前端工程化篇
const factoryItem = {
  title: "前端工程化",
  path: '/engineering',
  description: "前端工程化概念及原理学习总结",
  list: [
    {
      title: "前端开发规范",
      tips: "",
      path: "/engineering/web-dev-standard",
      disabled: false,
      pathType: "",
    },
    {
      title: "前端模块化历史",
      tips: "",
      disabled: false,
      path: "/engineering/modularization-history",
      pathType: "",
    },
    {
      title: "前端模块化",
      tips: "",
      path: "/engineering/modularization",
      disabled: false,
      pathType: "",
    },
    {
      title: "前端组件化",
      tips: "",
      disabled: false,
      path: "/engineering/componentization",
      pathType: "",
    },
    {
      title: "模板脚手架",
      tips: "",
      disabled: false,
      path: "/engineering/template-cli",
      pathType: "",
    },
  ],
};

// export const vueNavigation = [vueItem];

export { reactItems, vueItems, webpackItem, factoryItem, algorithmItem, designPatternItem };
