import { Card, Tabs, Typography } from 'antd';
import { lazy } from 'react'
import { code10, code11, code3, code4, code5, code6, code7, code8, code9 } from './code';
import Counter from './Example/Counter';
import { items, items2 } from './config';

const SimpleCode = lazy(() => import('../../../../../components/SimpleCode'));
const { Title, Paragraph, Text } = Typography;

export default function Usage() {
  return (
    <>
      <Title level={3} id="useReducerInfoId">用法</Title>
      <Title level={4} id="Adding-a-reducer-to-a-component">Adding a reducer to a component </Title>
      <Paragraph>
        Call useReducer at the top level of your component to manage state with a reducer.
        <SimpleCode value={code3} height={150} />
        useReducer returns an array with exactly two items:
        <ul>
          <li>The current state of this state variable, initially set to the initial state you provided.</li>
          <li>这个状态变量的当前状态，最初设置为你提供的初始状态。</li>
          <li>The dispatch function that lets you change it in response to interaction.</li>
          <li>dispatch函数，让你能够响应用户的交互来改变状态。</li>
        </ul>
        To update what’s on the screen, call dispatch with an object representing what the user did, called an action:
        为了更新屏幕上的内容，需要使用一个代表用户操作的对象来调用dispatch函数，这个对象被称为action。
        <SimpleCode value={code4} height={100} />
        React will pass the current state and the action to your reducer function. Your reducer will calculate and return the next state. React will store that next state, render your component with it, and update the UI.
      </Paragraph>
      <Paragraph>
        <Counter />
        useReducer is very similar to useState, but it lets you move the state update logic from event handlers into a single function outside of your component.
      </Paragraph>
      <Title level={4} id="Writing-the-reducer-function">Writing the reducer function </Title>
      <Paragraph>
        A reducer function is declared like this:
        <SimpleCode value={code5} height={80} />
        Then you need to fill in the code that will calculate and return the next state. By convention, it is common to write it as a switch statement. For each case in the switch, calculate and return some next state.
      </Paragraph>
      <Paragraph>
        然后你需要填写代码来计算并返回下一个状态。按照惯例，通常会将其编写为switch语句。对于switch中的每个case，计算并返回一些下一个状态。
        <SimpleCode value={code6} height={320} />
        Actions can have any shape. By convention, it’s common to pass objects with a type property identifying the action. It should include the minimal necessary information that the reducer needs to compute the next state.
      </Paragraph>
      <Paragraph>
        操作可以具有任何形状。按照惯例，通常会传递带有类型属性的对象来标识操作。它应该包括reducer需要计算下一个状态所需的最小必要信息。
        <SimpleCode value={code7} height={260} />
        The action type names are local to your component. Each action describes a single interaction, even if that leads to multiple changes in data. The shape of the state is arbitrary, but usually it’ll be an object or an array.
      </Paragraph>
      <Paragraph>
        动作类型名称是局部于组件的。每个动作描述一个单一的交互，即使它导致多个数据的变化。状态的形状是任意的，但通常为对象或数组。
      </Paragraph>
      <Title level={3}><Text type='danger'>陷阱</Text></Title>
      <Paragraph>
        State is read-only. Don’t modify any objects or arrays in state:
        <SimpleCode value={code8} height={160} />
        Instead, always return new objects from your reducer:
        <SimpleCode value={code9} height={160} />
      </Paragraph>
      <Card title="Basic useReducer examples">
        <Tabs defaultActiveKey="1" items={items} />
      </Card>
      <Title level={4} id="Avoiding-recreating-the-initial-state">Avoiding recreating the initial state </Title>
      <Paragraph>
        React saves the initial state once and ignores it on the next renders.
        <SimpleCode value={code10} height={160} />
      </Paragraph>
      <Paragraph>
        Although the result of createInitialState(username) is only used for the initial render, you’re still calling this function on every render. This can be wasteful if it’s creating large arrays or performing expensive calculations.
      </Paragraph>
      <Paragraph>
        To solve this, you may pass it as an initializer function to useReducer as the third argument instead:
        <SimpleCode value={code11} height={160} />
        Notice that you’re passing createInitialState, which is the function itself, and not createInitialState(), which is the result of calling it. This way, the initial state does not get re-created after initialization.
      </Paragraph>
      <Paragraph>
        请注意，您正在传递 createInitialState 函数本身，而不是调用它的结果 createInitialState()。这样，初始状态在初始化后不会被重新创建。
      </Paragraph>
      <Paragraph>
        In the above example, createInitialState takes a username argument. If your initializer doesn’t need any information to compute the initial state, you may pass null as the second argument to useReducer.
      </Paragraph>
      <Paragraph>
        在上面的示例中，createInitialState 接受一个 username 参数。如果您的初始化程序不需要任何信息来计算初始状态，则可以将 null 作为 useReducer 的第二个参数传递。
      </Paragraph>
      <Card title="The difference between passing an initializer and passing the initial state directly">
        <Tabs defaultActiveKey="1" items={items2} />
      </Card>
    </>
  )
}
