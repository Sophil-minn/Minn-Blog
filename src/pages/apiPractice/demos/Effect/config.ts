export const effectAnchorItems = [
  {
    key: "useEffect",
    href: "#useEffect",
    title: "useEffect",
    children: [
      {
        key: "useEffectId",
        href: "#useEffectId",
        title: "用法",
        children: [
          {
            key: "Connecting-to-an-external-system",
            href: "#Connecting-to-an-external-system",
            title: "连接到外部系统",
          },
          {
            key: "Wrapping-Effects-in-custom-Hooks",
            href: "#Wrapping-Effects-in-custom-Hooks",
            title: "在自定义 Hook 中封装 Effect",
          },
          {
            key: "Controlling-a-non-React-widget",
            href: "#Controlling-a-non-React-widget",
            title: "控制非 React 小部件",
          },
          {
            key: "Fetching data with Effects",
            href: "#Fetching-data-with-Effects",
            title: "使用 Effect 请求数据",
            children: [
              {

                key: "Specifying-reactive-dependencies",
                href: "#Specifying-reactive-dependencies",
                title: "Effect 中的数据请求有什么好的替代方法",
              }
            ]
          },
          {
            key: "Specifying-reactive-dependencies",
            href: "#Specifying-reactive-dependencies",
            title: "指定响应式依赖项",
          },
          {
            key: "Updating-state-based-on-previous-state-from-an-Effect",
            href: "#Updating-state-based-on-previous-state-from-an-Effect",
            title: "在 Effect 中根据先前 state 更新 state",
          },
          {
            key: "Removing-unnecessary-object-dependencies",
            href: "#Removing-unnecessary-object-dependencies",
            title: "删除不必要的对象依赖项",
          },
          {
            key: "Removing-unnecessary-function-dependencies",
            href: "#Removing-unnecessary-function-dependencies",
            title: "删除不必要的函数依赖项",
          },
          {
            key: "Reading-the-latest-props-and-state-from-an-Effect",
            href: "#Reading-the-latest-props-and-state-from-an-Effect",
            title: "从 Effect 读取最新的 props 和 state",
          },
          {
            key: "Displaying-different-content-on-the-server-and-the-client",
            href: "#Displaying-different-content-on-the-server-and-the-client",
            title: "在服务器和客户端上显示不同的内容",
          },
        ],
      },
    ],
  },
  {
    key: "useEffect-troubleshooting",
    href: "#useEffect-troubleshooting",
    title: "疑难解答",
    children: [
      {
        key: "My-Effect-runs-twice-when-the-component-mounts",
        href: "#My-Effect-runs-twice-when-the-component-mounts",
        title: "Effect 在组件挂载时运行了两次",
      },
      {
        key: "My-Effect-runs-after-every-re-render",
        href: "#My-Effect-runs-after-every-re-render",
        title: "Effect 在每次重新渲染后都运行",
      },
      {
        key: "My-Effect-keeps-re-running-in-an-infinite-cycle",
        href: "#My-Effect-keeps-re-running-in-an-infinite-cycle",
        title: "Effect 函数一直在无限循环中运行",
      },
      {
        key: "My-cleanup-logic-runs-even-though-my-component-didn’t-unmount",
        href: "#My-cleanup-logic-runs-even-though-my-component-didn’t-unmount",
        title: "即使组件没有卸载，cleanup 逻辑也会运行",
      },
      {
        key: "My-Effect-does-something-visual-and-I-see-a-flicker-before-it-runs",
        href: "#My-Effect-does-something-visual-and-I-see-a-flicker-before-it-runs",
        title: "我的 Effect 做了一些视觉相关的事情，在它运行之前我看到了一个闪烁",
      },
    ]
  }
];
