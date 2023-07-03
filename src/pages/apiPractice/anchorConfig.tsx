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
export const insertionEffectAnchorItems = [
  {
    key: "useInsertionEffect",
    href: "#useInsertionEffect",
    title: "useInsertionEffect",
    children: [
      {
        key: "useInsertionEffectId",
        href: "#useInsertionEffectId",
        title: "用法",
        children: [
          {
            key: "Injecting dynamic styles from CSS-in-JS libraries",
            href: "#Injecting-dynamic-styles-from-CSS-in-JS-libraries",
            title: "从 CSS-in-JS 库中注入动态样式",
          },
        ],
      },
    ],
  },
];
export const layoutEffectInfoAnchorItems = [
  {
    key: "useLayoutEffect",
    href: "#useLayoutEffect",
    title: "useLayoutEffect",
    children: [
      {
        key: "useLayoutEffectInfoId",
        href: "#useLayoutEffectInfoId",
        title: "用法",
        children: [
          {
            key: "Measuring layout before the browser repaints the screen",
            href: "#Measuring-layout-before-the-browser-repaints-the-screen",
            title: "在浏览器重新绘制屏幕前计算布局",
          },
        ],
      },
      {
        key: "useLayoutEffect-troubleshooting",
        href: "#useLayoutEffect-troubleshooting",
        title: "疑难解答",
        children: [
          {
            key: "useLayoutEffect does nothing on the server",
            href: "#useLayoutEffect-does-nothing-on-the-server",
            title: "useLayoutEffect 在服务端没有任何作用",
          },]
      }
    ],
  },
];
export const memoAnchorItems = [
  {
    key: "useMemo",
    href: "#useMemo",
    title: "useMemo",
    children: [
      {
        key: "useMemoInfoId",
        href: "#useMemoInfoId",
        title: "用法",
        children: [
          {
            key: "Skipping expensive recalculations",
            href: "#Skipping-expensive-recalculations",
            title: "跳过代价昂贵的重新计算",
          },
          {
            key: "Skipping re-rendering of components",
            href: "#Skipping-re-rendering-of-components",
            title: "跳过组件的重新渲染",
          },
          {
            key: "Memoizing a dependency of another Hook",
            href: "#Memoizing-a-dependency-of-another-Hook",
            title: "记忆另一个 Hook 的依赖",
          },
          {
            key: "Memoizing a function",
            href: "#Memoizing-a-function",
            title: "记忆一个函数",
          },
        ],
      },
      {
        key: "useMemo-troubleshooting",
        href: "#useMemo-troubleshooting",
        title: "故障排除",
        children: [
          {
            key: "My calculation runs twice on every re-render",
            href: "#My-calculation-runs-twice-on-every-re-render",
            title: "我的计算函数在每次重新渲染时运行两次",
          },
          {
            key: "My useMemo call is supposed to return an object, but returns undefined",
            href: "#My-useMemo-call-is-supposed-to-return-an-object-but-returns-undefined",
            title: "我调用的 useMemo 应该返回一个对象，但返回 undefined",
          },
          {
            key: "Every time my component renders, the calculation in useMemo re-runs",
            href: "#Every-time-my-component-renders-the-calculation-in-useMemo-re-runs",
            title: "每次我的组件渲染时，useMemo 中的计算都会重新运行",
          },
          {
            key: "I need to call useMemo for each list item in a loop, but it’s not allowed",
            href: "#I-need-to-call-useMemo-for-each-list-item-in-a-loop-but-it’s-not-allowed",
            title: "我需要为循环中的每个列表项调用 useMemo，但这是不允许的",
          },
        ]
      }
    ],
  },
];
export const reducerAnchorItems = [
  {
    key: "useReducer",
    href: "#useReducer",
    title: "useReducer",
    children: [
      {
        key: "useReducerId",
        href: "#useReducerId",
        title: "用法",
        children: [
          {
            key: "Adding a reducer to a component",
            href: "#Adding-a-reducer-to-a-component",
            title: "Adding a reducer to a component",
          },
          {
            key: "Writing the reducer function",
            href: "#Writing-the-reducer-function",
            title: "Writing the reducer function",
          },
          {
            key: "Avoiding recreating the initial state",
            href: "#Avoiding-recreating-the-initial-state",
            title: "Avoiding recreating the initial state",
          },
        ],
      },
      {
        key: "useReducer-troubleshooting",
        href: "#useReducer-troubleshooting",
        title: "故障排除",
        children: [
          {
            key: "I’ve dispatched an action, but logging gives me the old state value",
            href: "#I’ve-dispatched-an-action-but-logging-gives-me-the-old-state-value",
            title: "I’ve dispatched an action, but logging gives me the old state value",
          },
          {
            key: "I’ve dispatched an action, but the screen doesn’t update",
            href: "#I’ve-dispatched-an-action-but-the-screen-doesn’t-update",
            title: "I’ve dispatched an action, but the screen doesn’t update",
          },
          {
            key: "A part of my reducer state becomes undefined after dispatching",
            href: "#A-part-of-my-reducer-state-becomes-undefined-after-dispatching",
            title: "A part of my reducer state becomes undefined after dispatching",
          },
          {
            key: "My entire reducer state becomes undefined after dispatching",
            href: "#My-entire-reducer-state-becomes-undefined-after-dispatching",
            title: "My entire reducer state becomes undefined after dispatching",
          },
          {
            key: "I’m getting an error: “Too many re-renders” ",
            href: "#I’m-getting-an-error-“Too-many-re-renders”-",
            title: "I’m getting an error: “Too many re-renders” ",
          },
          {
            key: "My reducer or initializer function runs twice",
            href: "#My-reducer-or-initializer-function-runs-twice",
            title: "My reducer or initializer function runs twice",
          },
        ]
      }
    ],
  },
];
export const refAnchorItems = [
  {
    key: "useRef",
    href: "#useRef",
    title: "useRef",
    children: [
      {
        key: "useRefId",
        href: "#useRefId",
        title: "用法",
        children: [
          {
            key: "Referencing a value with a ref",
            href: "#Referencing-a-value-with-a-ref",
            title: "用 ref 引用一个值 ",
          },
          {
            key: "Manipulating the DOM with a ref",
            href: "#Manipulating-the-DOM-with-a-ref",
            title: "使用 ref 操作 DOM 是非常常见的。React 内置了对它的支持。",
          },
          {
            key: "Avoiding recreating the ref contents",
            href: "#Avoiding-recreating-the-ref-contents",
            title: "避免重复创建 ref 的内容",
          },
        ],
      },
      {
        key: "useRef-troubleshooting",
        href: "#useRef-troubleshooting",
        title: "故障排除",
        children: [
          {
            key: "I can’t get a ref to a custom component",
            href: "#I-can’t-get-a-ref-to-a-custom-component",
            title: "我无法获取自定义组件的 ref",
          },
        ]
      }
    ],
  },
];
export const stateAnchorItems = [
  {
    key: "useState",
    href: "#useState",
    title: "useState",
    children: [
      {
        key: "useStateId",
        href: "#useStateId",
        title: "用法",
        children: [
          {
            key: "Adding state to a component",
            href: "#Adding-state-to-a-component",
            title: "为组件添加状态 ",
          },
          {
            key: "Updating state based on the previous state",
            href: "#Updating-state-based-on-the-previous-state",
            title: "根据先前的 state 更新 state",
          },
          {
            key: "Updating objects and arrays in state",
            href: "#Updating-objects-and-arrays-in-state",
            title: "更新状态中的对象和数组",
          },
          {
            key: "Avoiding recreating the initial state",
            href: "#Avoiding-recreating-the-initial-state",
            title: "避免重复创建初始状态",
          },
          {
            key: "Resetting state with a key",
            href: "#Resetting-state-with-a-key",
            title: "使用 key 重置状态",
          },
          {
            key: "Storing information from previous renders",
            href: "#Storing-information-from-previous-renders",
            title: "存储前一次渲染的信息",
          },
        ],
      },
      {
        key: "useState-troubleshooting",
        href: "#useState-troubleshooting",
        title: "故障排除",
        children: [
          {
            key: "I’ve updated the state, but logging gives me the old value ",
            href: "#I’ve-updated-the-state-but-logging-gives-me-the-old-value ",
            title: "我已经更新了状态，但日志仍显示旧值",
          },
          {
            key: "I’ve updated the state, but the screen doesn’t update",
            href: "#I’ve-updated-the-state-but-the-screen-doesn’t-update",
            title: "我已经更新了状态，但是屏幕没有更新",
          },
          {
            key: "I’m getting an error: “Too many re-renders”",
            href: "#I’m-getting-an-error-Too-many-re-renders",
            title: "出现错误：“Too many re-renders”",
          },
          {
            key: "My initializer or updater function runs twice",
            href: "#My-initializer-or-updater-function-runs-twice",
            title: "初始化函数或更新函数运行了两次",
          },
          {
            key: "I’m trying to set state to a function, but it gets called instead",
            href: "#I’m-trying-to-set-state-to-a-function-but-it-gets-called-instead",
            title: "我尝试将 state 设置为一个函数，但它却被调用了",
          },
        ]
      }
    ],
  },
];
export const syncExternalStoreAnchorItems = [
  {
    key: "useSyncExternalStore",
    href: "#useSyncExternalStore",
    title: "useSyncExternalStore",
    children: [
      {
        key: "useSyncExternalStoreId",
        href: "#useSyncExternalStoreId",
        title: "用法",
        children: [
          {
            key: "Subscribing to an external store",
            href: "#Subscribing-to-an-external-store",
            title: "订阅外部 store ",
          },
          {
            key: "Subscribing to a browser API",
            href: "#Subscribing-to-a-browser-API",
            title: "订阅浏览器 API",
          },
          {
            key: "Extracting the logic to a custom Hook",
            href: "#Extracting-the-logic-to-a-custom-Hook",
            title: "把逻辑抽取到自定义 Hook",
          },
          {
            key: "Adding support for server rendering",
            href: "#Adding-support-for-server-rendering",
            title: "添加服务端渲染支持",
          },
        ],
      },
      {
        key: "useSyncExternal-troubleshooting",
        href: "#useSyncExternal-troubleshooting",
        title: "疑难解答",
        children: [
          {
            key: "The result of getSnapshot should be cached",
            href: "The-result-of-getSnapshot-should-be-cached",
            title: "遇到一个错误：“The result of getSnapshot should be cached” ",
          },
          {
            key: "My subscribe function gets called after every re-render",
            href: "#My-subscribe-function-gets-called-after-every-re-render",
            title: "我的 subscribe 函数每次重新渲染都被调用",
          },
        ]
      }
    ],
  },
];
export const transitionAnchorItems = [
  {
    key: "useTransition",
    href: "#useTransition",
    title: "useTransition",
    children: [
      {
        key: "useTransitionId",
        href: "#useTransitionId",
        title: "用法",
        children: [
          {
            key: "Marking a state update as a non-blocking transition",
            href: "#Marking-a-state-update-as-a-non-blocking-transition",
            title: "将状态更新标记为非阻塞转换状态",
          },
          {
            key: "Updating-the-parent-component-in-a-transition",
            href: "#Updating-the-parent-component-in-a-transition",
            title: "在转换中更新父组件",
          },
          {
            key: "Displaying-a-pending-visual-state-during-the-transition",
            href: "#Displaying-a-pending-visual-state-during-the-transition",
            title: "在转换期间显示待处理的视觉状态",
          },
          {
            key: "Preventing-unwanted-loading-indicators",
            href: "#Preventing-unwanted-loading-indicators",
            title: "避免不必要的加载指示器",
          },
          {
            key: "Building-a-Suspense-enabled-router",
            href: "#Building-a-Suspense-enabled-router",
            title: "构建一个Suspense-enabled 的路由",
          },
        ],
      },
      {
        key: "useSyncExternal-troubleshooting",
        href: "#useSyncExternal-troubleshooting",
        title: "疑难解答",
        children: [
          {
            key: "Updating-an-input-in-a-transition-doesn’t-work ",
            href: "#Updating-an-input-in-a-transition-doesn’t-work ",
            title: "在转换过程中更新输入无法正常工作",
          },
          {
            key: "React-doesn’t-treat-my-state-update-as-a-transition ",
            href: "#React-doesn’t-treat-my-state-update-as-a-transition ",
            title: "React 没有将我的状态更新视为转换",
          },
          {
            key: "I-want-to-call-useTransition-from-outside-a-component ",
            href: "#I-want-to-call-useTransition-from-outside-a-component ",
            title: "我想在组件外部调用 useTransition",
          },
          {
            key: "The-function-I-pass-to-startTransition-executes-immediately ",
            href: "#The-function-I-pass-to-startTransition-executes-immediately ",
            title: "我传递给 startTransition 的函数会立即执行",
          },
        ]
      }
    ],
  },
];

export const hooksAnchorItems: AnchorItemProps[] = [
  ...loopAnchorItems(callbackAnchorItems),
  ...loopAnchorItems(contextAnchorItems),
  ...loopAnchorItems(debugValueAnchorItems),
  ...loopAnchorItems(deferredValueAnchorItems),
  ...loopAnchorItems(effectAnchorItems),
  ...loopAnchorItems(idAnchorItems),
  ...loopAnchorItems(imperativeHandleAnchorItems),
  ...loopAnchorItems(insertionEffectAnchorItems),
  ...loopAnchorItems(layoutEffectInfoAnchorItems),
  ...loopAnchorItems(memoAnchorItems),
  ...loopAnchorItems(reducerAnchorItems),
  ...loopAnchorItems(refAnchorItems),
  ...loopAnchorItems(stateAnchorItems),
  ...loopAnchorItems(syncExternalStoreAnchorItems),
  ...loopAnchorItems(transitionAnchorItems),
]

function loopAnchorItems(arr: AnchorItemProps[]): AnchorItemProps[] {
  return (arr || []).map((v: AnchorItemProps) =>
  ({
    ...v,
    title: v.tooltip ? <Tooltip title={v.title}>{v.title}</Tooltip> : v.title,
    children: loopAnchorItems(v.children as unknown as AnchorItemProps[])
  } as unknown as AnchorItemProps));
}
