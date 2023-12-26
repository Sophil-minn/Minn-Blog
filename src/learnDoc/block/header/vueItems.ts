import { STATE } from "./const";

// vue 篇
export const vueItems = {
  title: "vue篇",
  description: "vue学习沉淀",
  list: [
    {
      title: "vue哲学",
      tips: "vue哲学总结",
      disabled: false,
      path: "/thinking-in-vue",
      pathType: "",
      statusCode: STATE.NEW
    },
    {
      title: "vue理论",
      tips: "vue理论总结",
      disabled: false,
      path: "/vue",
      pathType: "",
      statusCode: STATE.NEW
    },
    {
      title: "vueAPI实践",
      tips: "vue项目实践沉淀",
      disabled: false,
      path: "/api-practice",
      pathType: "",
      statusCode: ""
    },
    // {
    //   title: "vue组件实战",
    //   tips: "vue项目组件沉淀",
    //   path: "",
    //   pathType: "",
    //   statusCode: ""
    // },
    {
      title: "vue状态管理",
      tips: "vue状态管理沉淀",
      path: "/managing-state",
      disabled: false,
      pathType: "",
      statusCode: ""
    },
    {
      title: "vue原理",
      tips: "vue原理深入学习沉淀",
      path: "vue-principle",
      disabled: false,
      pathType: "",
      statusCode: ""
    },
  ],
};