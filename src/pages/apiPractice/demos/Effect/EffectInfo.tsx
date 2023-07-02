import { Typography } from 'antd';
import { lazy } from 'react'
import { code1 } from './code';
import Code from '../../../../components/Code';

const SimpleCode = lazy(() => import('../../../../components/SimpleCode'));
const Troubleshooting = lazy(() => import('./Troubleshooting'));
const Usage = lazy(() => import('./Usage'));
const { Title, Paragraph } = Typography;

export default function EffectInfo() {
  return (
    <>
      <Title level={3} id="useEffect">useEffect</Title>
      <Paragraph>useEffect 是一个 React Hook，它允许你 将组件与外部系统同步。</Paragraph>
      <SimpleCode value="useEffect(setup, dependencies?)" />
      <Paragraph>在组件的顶层调用 useEffect 来声明一个 Effect：</Paragraph>
      <Code value={code1} />
      <Title level={4} id="useEffect_params">参数</Title>
      <Paragraph>
        <ul>
          <li>setup：处理 Effect 的函数。setup 函数选择性返回一个 清理（cleanup） 函数。在将组件首次添加到 DOM 之前，React 将运行 setup 函数。在每次依赖项变更重新渲染后，React 将首先使用旧值运行 cleanup 函数（如果你提供了该函数），然后使用新值运行 setup 函数。在组件从 DOM 中移除后，React 将最后一次运行 cleanup 函数。</li>
          <li>可选 dependencies：setup 代码中引用的所有响应式值的列表。响应式值包括 props、state 以及所有直接在组件内部声明的变量和函数。如果你的代码检查工具 配置了 React，那么它将验证是否每个响应式值都被正确地指定为一个依赖项。依赖项列表的元素数量必须是固定的，并且必须像 [dep1, dep2, dep3] 这样内联编写。React 将使用 Object.is 来比较每个依赖项和它先前的值。如果省略此参数，则在每次重新渲染组件之后，将重新运行 Effect 函数。</li>
        </ul>
      </Paragraph>
      <Title level={4} id="useEffect_params">返回值</Title>
      <Paragraph>useEffect 返回 undefined。</Paragraph>
      <Title level={4} id="useEffect_params">注意事项 </Title>
      <Paragraph>
        <ul>
          <li>useEffect 是一个 Hook，因此只能在 组件的顶层 或自己的 Hook 中调用它，而不能在循环或者条件内部调用。如果需要，抽离出一个新组件并将 state 移入其中。</li>
          <li>如果你 没有打算与某个外部系统同步，那么你可能不需要 Effect。</li>
          <li>当严格模式启动时，React 将在真正的 setup 函数首次运行前，运行一个开发模式下专有的额外 setup + cleanup 周期。这是一个压力测试，用于确保 cleanup 逻辑“映射”到了 setup 逻辑，并停止或撤消 setup 函数正在做的任何事情。如果这会导致一些问题，请实现 cleanup 函数。</li>
          <li>如果你的一些依赖项是组件内部定义的对象或函数，则存在这样的风险，即它们将 导致 Effect 过多地重新运行。要解决这个问题，请删除不必要的 对象 和 函数 依赖项。你还可以 抽离状态更新 和 非响应式的逻辑 到 Effect 之外。</li>
          <li>如果你的 Effect 不是由交互（比如点击）引起的，那么 React 会让浏览器 在运行 Effect 前先绘制出更新后的屏幕。如果你的 Effect 正在做一些视觉相关的事情（例如，定位一个 tooltip），并且有显著的延迟（例如，它会闪烁），那么将 useEffect 替换为 useLayoutEffect。</li>
          <li>即使你的 Effect 是由一个交互（比如点击）引起的，浏览器也可能在处理 Effect 内部的状态更新之前重新绘制屏幕。通常，这就是你想要的。但是，如果你一定要阻止浏览器重新绘制屏幕，则需要用 useLayoutEffect 替换 useEffect。</li>
          <li>Effect 只在客户端上运行，在服务端渲染中不会运行。</li>
        </ul>
      </Paragraph>
      <Usage />
      <Troubleshooting />
    </>
  )
}
