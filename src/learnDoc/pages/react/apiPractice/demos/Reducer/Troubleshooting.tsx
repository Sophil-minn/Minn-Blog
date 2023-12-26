import { Typography } from 'antd';
import { lazy } from 'react'
import { code13, code14, code15, code16, code17, code18, code19, code20, code21 } from './code';
import { code12 } from '../Callback/code';

const SimpleCode = lazy(() => import('../../../../../components/SimpleCode'));
const { Title, Paragraph, Text } = Typography;

export default function Troubleshooting() {
  return (
    <>
      <Title level={3} id="useReducerInfoId">troubleshooting</Title>
      <Title level={4} id="I’ve-dispatched-an-action-but-logging-gives-me-the-old-state-value">I’ve dispatched an action, but logging gives me the old state value </Title>
      <Paragraph>
        Calling the dispatch function does not change state in the running code:
        调用 dispatch 函数在运行代码中不会改变状态。
        <SimpleCode value={code12} height={150} />
        This is because states behaves like a snapshot. Updating state requests another render with the new state value, but does not affect the state JavaScript variable in your already-running event handler.
      </Paragraph>
      <Paragraph>
        If you need to guess the next state value, you can calculate it manually by calling the reducer yourself:
        <SimpleCode value={code13} height={180} />
        这是因为状态表现得像一个快照。更新状态会请求使用新状态值进行另一次渲染，但不会影响已经运行的事件处理程序中的状态 JavaScript 变量。
      </Paragraph>
      <Paragraph>
        如果您需要猜测下一个状态值，可以通过自己调用 reducer 来手动计算它。
        <SimpleCode value={code14} height={120} />
      </Paragraph>
      <Title level={4} id="I’ve-dispatched-an-action-but-the-screen-doesn’t-update">I’ve dispatched an action, but the screen doesn’t update </Title>
      <Paragraph>
        React will ignore your update if the next state is equal to the previous state, as determined by an Object.is comparison. This usually happens when you change an object or an array in state directly:
        <SimpleCode value={code15} height={260} />
        You mutated an existing state object and returned it, so React ignored the update. To fix this, you need to ensure that you’re always updating objects in state and updating arrays in state instead of mutating them
        <SimpleCode value={code16} height={260} />
      </Paragraph>
      <Title level={4} id="A part of my reducer state becomes undefined after dispatching">A part of my reducer state becomes undefined after dispatching </Title>
      <Paragraph>
        Make sure that every case branch copies all of the existing fields when returning the new state:
        <SimpleCode value={code17} height={150} />
        Without ...state above, the returned next state would only contain the age field and nothing else
      </Paragraph>
      <Title level={4} id="My-entire-reducer-state-becomes-undefined-after-dispatching">My entire reducer state becomes undefined after dispatching </Title>
      <Paragraph>
        If your state unexpectedly becomes undefined, you’re likely forgetting to return state in one of the cases, or your action type doesn’t match any of the case statements. To find why, throw an error outside the switch
        <SimpleCode value={code18} height={180} />
        You can also use a static type checker like TypeScript to catch such mistakes.
      </Paragraph>
      <Title level={4} id="I’m-getting-an-error-“Too-many-re-renders”-">I’m getting an error: “Too many re-renders”</Title>
      <Paragraph>
        您可能会收到一个错误，提示“重新渲染次数过多”。React 限制了渲染次数，以防止无限循环。通常，这意味着您在渲染期间无条件地调度了一个操作，因此您的组件进入了一个循环：渲染、调度（导致渲染）、渲染、调度（导致渲染）等等。这往往是由于在指定事件处理程序时出现错误导致的：
      </Paragraph>
      <Paragraph>
        You might get an error that says: Too many re-renders. React limits the number of renders to prevent an infinite loop. Typically, this means that you’re unconditionally dispatching an action during render, so your component enters a loop: render, dispatch (which causes a render), render, dispatch (which causes a render), and so on. Very often, this is caused by a mistake in specifying an event handler:
        <SimpleCode value={code19} height={150} />
        If you can’t find the cause of this error, click on the arrow next to the error in the console and look through the JavaScript stack to find the specific dispatch function call responsible for the error.
      </Paragraph>
      <Paragraph>
        如果您找不到此错误的原因，请单击控制台中错误旁边的箭头，并查看 JavaScript 堆栈，以找到导致错误的特定 dispatch 函数调用。
      </Paragraph>
      <Title level={4} id="My-reducer-or-initializer-function-runs-twice">My reducer or initializer function runs twice </Title>
      <Paragraph>
        In Strict Mode, React will call your reducer and initializer functions twice. This shouldn’t break your code.
      </Paragraph>
      <Paragraph>
        This development-only behavior helps you keep components pure. React uses the result of one of the calls, and ignores the result of the other call. As long as your component, initializer, and reducer functions are pure, this shouldn’t affect your logic. However, if they are accidentally impure, this helps you notice the mistakes.
      </Paragraph>
      <Paragraph>
        For example, this impure reducer function mutates an array in state:
        <SimpleCode value={code20} height={150} />
        Because React calls your reducer function twice, you’ll see the todo was added twice, so you’ll know that there is a mistake. In this example, you can fix the mistake by replacing the array instead of mutating it:
        <SimpleCode value={code21} height={150} />
        Now that this reducer function is pure, calling it an extra time doesn’t make a difference in behavior. This is why React calling it twice helps you find mistakes. Only component, initializer, and reducer functions need to be pure. Event handlers don’t need to be pure, so React will never call your event handlers twice.
      </Paragraph>
      <Paragraph>
        现在这个 reducer 函数是纯函数了，多调用一次不会影响行为。这就是为什么 React 调用它两次可以帮助您找到错误的原因。只有组件、初始化程序和 reducer 函数需要是纯函数。事件处理程序不需要是纯函数，因此 React 永远不会调用您的事件处理程序两次。
      </Paragraph>

    </>
  )
}
