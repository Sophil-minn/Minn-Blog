import { Tooltip } from "antd";
import { AnchorItemProps } from "../../types";

export const callbackAnchorItems = [
  {
    key: 'useCallback',
    href: '#useCallback',
    title: 'useCallback',
    children: [
      {
        key: '注意事项',
        href: '#注意事项1',
        title: '注意事项',
      },
      {
        key: '用法',
        href: '#用法',
        title: '用法',
        children: [
          {
            key: 'skipping-re-rendering-of-components',
            href: '#skipping-re-rendering-of-components',
            title: 'Skipping re-rendering of components',
            tooltip: true,
            children: [
              {
                key: 'memo example',
                href: '#memo-example',
                title: 'memo example',
              },
              {
                key: 'without useCallback',
                href: '#without-useCallback',
                title: 'without useCallback',
              },
              {
                key: 'with useCallback',
                href: '#with-useCallback',
                title: 'with useCallback',
              },
              {
                key: '注意事项',
                href: '#注意事项2',
                title: '注意事项',
              },
              {
                key: '深入探讨2.1',
                href: '#深入探讨2.1',
                title: '深入探讨',
              },
              {
                key: '应用示例2.1',
                href: '#应用示例2.1',
                title: '应用示例',
              },
            ]
          },
          {
            key: 'updating-state-from-a-memoized-callback',
            href: '#updating-state-from-a-memoized-callback',
            title: 'Updating state from a memoized callback ',
            tooltip: true,
          },
          {
            key: 'Optimizing a custom Hook ',
            href: '#Optimizing-a-custom-Hook ',
            title: 'Optimizing a custom Hook ',
            tooltip: true,
          },

        ],
      },
      {
        key: 'Troubleshooting',
        href: '#Troubleshooting',
        title: 'Troubleshooting ',
        children: [
          {
            key: 'Every time my component renders, useCallback returns a different function',
            href: '#useCallback-returns-a-different-function',
            title: 'Every time my component renders, useCallback returns a different function ',
            tooltip: true,
          },
          {
            key: 'I need to call useCallback for each list item in a loop, but it’s not allowed',
            href: '#call-useCallback-for-each-list-item-in-a-loop',
            title: 'I need to call useCallback for each list item in a loop, but it’s not allowed',
            tooltip: true,
          },
        ]
      },
    ]
  },
];
export const contextAnchorItems = [
  {
    key: 'useContext',
    href: '#useContext',
    title: 'useContext',
    children: [
      {
        key: '参考',
        href: '#useContext-Refenrence',
        title: '参考',
      },
      {
        key: 'useContext-Usage',
        href: '#useContext-Usage',
        title: '用法',
        children: [
          {
            key: '向组件树深层传递数据',
            href: '#Passing-data-deeply-into-the-tree',
            title: '向组件树深层传递数据',
          },
          {
            key: '通过 context 更新传递的数据',
            href: '#updateDataBycontext',
            title: '通过 context 更新传递的数据',
          },
          {
            key: '指定回退默认值',
            href: '#Specifying-a-fallback-default-value',
            title: '指定回退默认值',
          },
          {
            key: '覆盖组件树一部分的 context ',
            href: '#overiddingExample',
            title: '覆盖组件树一部分的 context ',
          },
          {
            key: '在传递对象和函数时优化重新渲染',
            href: '#Optimizing-re-renders-when-passing-objects-and-functions',
            title: '在传递对象和函数时优化重新渲染',
          },
        ]
      },
      {
        key: 'Troubleshooting',
        href: '#useContext-Troubleshooting',
        title: '疑难解答'
      }
    ]
  },
];
export const debugValueAnchorItems = [
  {
    key: "useDebugValue",
    href: "#useDebugValue",
    title: "useDebugValue",
    children: [
      {
        key: "useDebugValueId",
        href: "#useDebugValueId",
        title: "用法",
      },
    ],
  },
];
export const deferredValueAnchorItems = [
  {
    key: "useDeferredValue",
    href: "#useDeferredValue",
    title: "useDeferredValue",
    children: [
      {
        key: "useDeferredValueId",
        href: "#useDeferredValueId",
        title: "用法",
        children: [
          {
            key: "在新内容加载期间显示旧内容",
            href: "#Showing-stale-content",
            title: "在新内容加载期间显示旧内容",
          },
          {
            key: "表明内容已过时",
            href: "#Indicating-that-the-content-is-stale",
            title: "表明内容已过时",
          },
          {
            key: "延迟渲染 UI 的某些部分",
            href: "#Deferring-re-rendering-for-a-part-of-the-UI ",
            title: "延迟渲染 UI 的某些部分",
          },
        ],
      },
    ],
  },
];
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

export const idAnchorItems = [
  {
    key: "useId",
    href: "#useId",
    title: "useId",
    children: [
      {
        key: "useIdId",
        href: "#useIdId",
        title: "用法",
        children: [
          {
            key: "Generating unique IDs for accessibility attributes",
            href: "#Generating-unique-IDs-for-accessibility-attributes",
            title: "为无障碍属性生成唯一 ID",
          },
          {
            key: "Generating IDs for several related elements",
            href: "#Generating-IDs-for-several-related-elements",
            title: "为多个相关元素生成 ID",
          },
          {
            key: "Specifying a shared prefix for all generated IDs",
            href: "#Specifying-a-shared-prefix-for-all-generated-IDs",
            title: "为所有生成的 ID 指定共享前缀",
          },
        ],
      },
    ],
  },
];
export const imperativeHandleAnchorItems = [
  {
    key: "useImperativeHandle",
    href: "#useImperativeHandle",
    title: "useImperativeHandle",
    children: [
      {
        key: "useImperativeHandleId",
        href: "#useImperativeHandleId",
        title: "用法",
        children: [
          {
            key: "Exposing a custom ref handle to the parent component",
            href: "#Exposing-a-custom-ref-handle-to-the-parent-component",
            title: "向父组件暴露一个自定义的 ref 句柄 ",
          },
          {
            key: "Exposing your own imperative methods",
            href: "#Exposing-your-own-imperative-methods",
            title: "暴露你自己的命令式方法",
          },
        ],
      },
    ],
  },
];


const loopAnchorItems = (arr: AnchorItemProps[]): AnchorItemProps[] =>
  (arr || []).map((v: AnchorItemProps) =>
  ({
    ...v,
    title: v.tooltip ? <Tooltip title={v.title}>{v.title}</Tooltip> : v.title,
    children: loopAnchorItems(v.children as unknown as AnchorItemProps[])
  } as unknown as AnchorItemProps)
    // ({ ...v, title: <Tooltip title={v.title}>{v.title}</Tooltip>, children: loop(v.children) })
  );


export const hooksAnchorItems: AnchorItemProps[] = [
  ...loopAnchorItems(callbackAnchorItems),
  ...loopAnchorItems(contextAnchorItems),
  ...loopAnchorItems(debugValueAnchorItems),
  ...loopAnchorItems(deferredValueAnchorItems),
  ...loopAnchorItems(effectAnchorItems),
  ...loopAnchorItems(idAnchorItems),
  ...loopAnchorItems(imperativeHandleAnchorItems),
]
