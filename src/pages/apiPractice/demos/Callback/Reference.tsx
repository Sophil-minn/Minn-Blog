import { Typography } from 'antd';
import React, { lazy } from 'react'

const SimpleCode = lazy(() => import('../../../../components/SimpleCode'));

const { Title, Paragraph, Text } = Typography;

export default function Reference() {
  return (
    <>
      <Title level={4}>Callback</Title>
      <Paragraph>useCallback 是一个 React Hook,它允许你在重渲染之间缓存函数的定义。</Paragraph>
      <SimpleCode value="const cachedFn = useCallback(fn, dependencies)" id="Reference" title="1、Reference" height={30} />
      <Paragraph>Call useCallback at the top level of your component to cache a function definition between re-renders</Paragraph>
      {/* onChange={e => setIsDark(e.target.checked)} 每次都会渲染productPage */}
      <Title level={5}> 参数 </Title>
      <Paragraph>
        <ul>
          <li>fn: 你想要缓存的函数值。它可以接受任何参数并返回任何值。React 将在初始渲染期间将你的函数返回(而不是调用!)给你。在后续渲染中,如果依赖项自上次渲染以来未发生变化,React 将再次为你提供相同的函数。否则,它将在当前渲染期间为你提供所传递的函数,并将其存储以便以后重用。React 不会调用你的函数。函数被返回给你,所以你可以决定何时以及是否调用它</li>
          <li>fn: The function value that you want to cache. It can take any arguments and return any values. React will return (not call!) your function back to you during the initial render. On next renders, React will give you the same function again if the dependencies have not changed since the last render. Otherwise, it will give you the function that you have passed during the current render, and store it in case it can be reused later. React will not call your function. The function is returned to you so you can decide when and whether to call it.</li>
          <li>
            dependencies: fn 代码中引用的所有反应式值的列表。反应式值包括 props、state 以及直接在组件主体中声明的所有变量和函数。如果你的语法检查器配置为 React,它将验证每个反应性值是否都被正确指定为依赖项。依赖项列表的项目数量必须是常量,并且必须像 [dep1, dep2, dep3] 这样内联编写。React 将使用 Object.is 比较算法将每个依赖项与其先前的值进行比较
          </li>
          <li>dependencies: The list of all reactive values referenced inside of the fn code. Reactive values include props, state, and all the variables and functions declared directly inside your component body. If your linter is configured for React, it will verify that every reactive value is correctly specified as a dependency. The list of dependencies must have a constant number of items and be written inline like [dep1, dep2, dep3]. React will compare each dependency with its previous value using the Object.is comparison algorithm.</li>
        </ul>
      </Paragraph>
      <Title level={5}> 返回值 </Title>
      <Paragraph>
        在初始渲染中,useCallback 返回你传递的 fn 函数。
        在后续渲染中,它将返回先前渲染缓存的 fn 函数(如果依赖项未改变),或者返回此次渲染传递的 fn 函数
      </Paragraph>
      <Title level={5} id="注意事项1"> 注意事项  </Title>
      <Paragraph>
        <ul>
          <li><Text mark strong>useCallback 是一个 Hook,只能在组件顶层或自定义 Hook 中调用。不能在循环或条件语句中调用。</Text></li>
          <li><Text mark strong>除非有明确的理由,否则 React 不会丢弃缓存的 fn 函数。例如,在开发环境中编辑组件时会丢弃缓存;组件在初始挂载时挂起也会丢弃缓存。React 未来可能会增加更多丢弃缓存的功能,如支持虚拟列表时丢弃滚出视口的项目的缓存。</Text></li>
          <li><Text mark strong>如果你依赖 useCallback 进行性能优化,这些限制应该符合你的预期。否则可以考虑使用 useState 或 useRef 等 Hook。</Text></li>
        </ul>
      </Paragraph>
    </>
  )
}
