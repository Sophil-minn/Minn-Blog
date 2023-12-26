import { Typography } from 'antd';
import { lazy } from 'react'
import { code1, code2 } from './code';
import SpinLoading from '../../../../../components/common/SpinLoading';

const Usage = lazy(() => import('./Usage'));
const Troubleshooting = lazy(() => import('./Troubleshooting'));
const SimpleCode = lazy(() => import('../../../../../components/SimpleCode'));
const { Title, Paragraph, Text } = Typography;

export default function ReducerInfo() {
  return (
    <>
      <Title level={3} id="useReducerInfo">useReducerInfo</Title>
      <Paragraph>useReducer is a React Hook that lets you add a reducer to your component.</Paragraph>
      <SimpleCode value="const [state, dispatch] = useReducer(reducer, initialArg, init?)" />
      <Title level={4}>Reference</Title>
      <Paragraph>Call useReducer at the top level of your component to manage its state with a reducer.</Paragraph>
      <SimpleCode value={code1} height={120} />
      <Title level={4}>Parameters</Title>
      <Paragraph>
        <ul>
          <li>reducer: 函数，指定状态如何更新。它必须是纯函数，接受状态和操作作为参数，并返回下一个状态。状态和操作可以是任何类型。</li>
          <li>initialArg: 计算初始状态的值。它可以是任何类型的值。如何根据它计算初始状态取决于下一个 init 参数。</li>
          <li>可选 init: 初始化函数，应返回初始状态。如果未指定，则初始状态设置为 initialArg。否则，初始状态设置为调用 init（initialArg）的结果</li>
        </ul>
      </Paragraph>
      <Title level={4}>Returns </Title>
      <Paragraph>
        useReducer returns an array with exactly two values:
        <ul>
          <li>The current state. During the first render, it’s set to init(initialArg) or initialArg (if there’s no init).</li>
          <li>The dispatch function that lets you update the state to a different value and trigger a re-render.</li>
        </ul>
      </Paragraph>
      <Title level={4}>Caveats</Title>
      <Paragraph>
        <ul>
          <li>useReducer is a Hook, so you can only call it at the top level of your component or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it</li>
          <li>In Strict Mode, React will call your reducer and initializer twice in order to help you find accidental impurities. This is development-only behavior and does not affect production. If your reducer and initializer are pure (as they should be), this should not affect your logic. The result from one of the calls is ignored.</li>
        </ul>
      </Paragraph>
      <Title level={4}>dispatch函数</Title>
      <Paragraph>
        由useReducer返回的dispatch函数允许您将状态更新为不同的值并触发重新渲染。您需要将操作作为唯一参数传递给dispatch函数：
        <SimpleCode value={code2} height={120} />
        React will set the next state to the result of calling the reducer function you’ve provided with the current state and the action you’ve passed to dispatch.
        React将把下一个状态设置为使用您提供的reducer函数和您传递给dispatch的操作的当前状态的结果。
      </Paragraph>
      <Title level={4}>参数</Title>
      <Paragraph>
        action：用户执行的操作。它可以是任何类型的值。按照惯例，一个action通常是一个带有type属性来标识它的对象，还可以有其他属性来提供附加信息。
      </Paragraph>
      <Title level={4}>Returns</Title>
      <Paragraph>
        dispatch functions do not have a return value.
      </Paragraph>
      <Title level={4}>Caveats</Title>
      <Paragraph>
        <ul>
          <li>The dispatch function only updates the state variable for the next render. If you read the state variable after calling the dispatch function, you will still get the old value that was on the screen before your call.</li>
          <li>dispatch函数只会更新下一次渲染的状态变量。如果在调用dispatch函数后读取状态变量，你仍然会得到屏幕上调用之前的旧值。</li>
          <li>If the new value you provide is identical to the current state, as determined by an Object.is comparison, React will skip re-rendering the component and its children. This is an optimization. React may still need to call your component before ignoring the result, but it shouldn’t affect your code.</li>
          <li>如果你提供的新值与当前状态相同（通过Object.is比较确定），React将跳过重新渲染组件及其子组件。这是一种优化。React可能仍然需要在忽略结果之前调用你的组件，但这不应影响你的代码。</li>
          <li>React batches state updates. It updates the screen after all the event handlers have run and have called their set functions. This prevents multiple re-renders during a single event. In the rare case that you need to force React to update the screen earlier, for example to access the DOM, you can use flushSync.</li>
          <li>React会批量更新状态。它会在所有事件处理程序运行并调用它们的set函数后更新屏幕。这可以防止在单个事件期间多次重新渲染。在罕见的情况下，如果你需要强制React更早地更新屏幕，例如访问DOM，你可以使用flushSync。</li>
        </ul>
      </Paragraph>
      <SpinLoading><Usage /></SpinLoading>
      <SpinLoading><Troubleshooting /></SpinLoading>
    </>
  )
}


