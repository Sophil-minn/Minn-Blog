import { Card, Tabs, Typography } from 'antd';
import { lazy } from 'react'
import { code1 } from '../Callback/code';
import { code10, code11, code12, code13, code14, code15, code16, code17, code18, code19, code2, code20, code21, code22, code3, code4, code5, code6, code7, code8, code9 } from './code';
import Counter from './Example/Counter';
import Counter2 from './Example/Counter2';
import { items } from './config';
import KeyReset from './Example/KeyReset';
import PreState from './Example/PreState';

const SimpleCode = lazy(() => import('../../../../components/SimpleCode'));
const { Title, Paragraph, Text } = Typography;

export default function StateInfo() {
  return (
    <>
      <Title level={3} id="useState">useState</Title>
      <Paragraph>useState 是一个 React Hook，它允许你向组件添加一个 状态变量。</Paragraph>
      <SimpleCode value="const [state, setState] = useState(initialState);" />
      <Title level={4}>参考 </Title>
      <Paragraph>
        在组件的顶层调用 useState 来声明一个 状态变量。
        <SimpleCode value={code1} height={120} />
        按照惯例使用 数组解构 来命名状态变量，例如 [something, setSomething]。
      </Paragraph>
      <Title level={4}>参数 </Title>
      <Paragraph>
        initialState：你希望 state 初始化的值。它可以是任何类型的值，但对于函数有特殊的行为。在初始渲染后，此参数将被忽略。
        如果传递函数作为 initialState，则它将被视为 初始化函数。它应该是纯函数，不应该接受任何参数，并且应该返回一个任何类型的值。当初始化组件时，React 将调用你的初始化函数，并将其返回值存储为初始状态
      </Paragraph>
      <Title level={4}>返回 </Title>
      <Paragraph>
        useState 返回一个由两个值组成的数组：
        <ul>
          <li>当前的 state。在首次渲染时，它将与你传递的 initialState 相匹配。</li>
          <li>set 函数，它可以让你将 state 更新为不同的值并触发重新渲染。</li>
        </ul>
      </Paragraph>
      <Title level={4}>注意事项 </Title>
      <Paragraph>
        <ul>
          <li>useState 是一个 Hook，因此你只能在 组件的顶层 或自己的 Hook 中调用它。你不能在循环或条件语句中调用它。如果你需要这样做，请提取一个新组件并将状态移入其中。</li>
          <li>在严格模式中，React 将 两次调用初始化函数，以 帮你找到意外的不纯性。这只是开发时的行为，不影响生产。如果你的初始化函数是纯函数（本该是这样），就不应影响该行为。其中一个调用的结果将被忽略。</li>
        </ul>
      </Paragraph>
      <Title level={4}>set 函数，</Title>
      <Paragraph>
        useState 返回的 set 函数允许你将 state 更新为不同的值并触发重新渲染。你可以直接传递新状态，也可以传递一个根据先前状态来计算新状态的函数：
        <SimpleCode value={code2} height={150} />
        <Title level={5}>参数</Title>
        nextState：你想要 state 更新为的值。它可以是任何类型的值，但对于函数有特殊的行为
        如果你将函数作为 nextState 传递，它将被视为 更新函数。它必须是纯函数，只接受待定的 state 作为其唯一参数，并应返回下一个状态。React 将把你的更新函数放入队列中并重新渲染组件。在下一次渲染期间，React 将通过把队列中所有更新函数应用于先前的状态来计算下一个状态
        <Title level={5}>返回值 </Title>
        set 函数没有返回值。
        <Title level={5}>注意事项 </Title>
        <ul>
          <li>set 函数 仅更新 下一次 渲染的状态变量。如果在调用 set 函数后读取状态变量，则 仍会得到在调用之前显示在屏幕上的旧值。</li>
          <li>如果你提供的新值与当前 state 相同（由 Object.is 比较确定），React 将 跳过重新渲染该组件及其子组件。这是一种优化。虽然在某些情况下 React 仍然需要在跳过子组件之前调用你的组件，但这不应影响你的代码。</li>
          <li>React 会 批量处理状态更新。它会在所有 事件处理函数运行 并调用其 set 函数后更新屏幕。这可以防止在单个事件期间多次重新渲染。在某些罕见情况下，你需要强制 React 更早地更新屏幕，例如访问 DOM，你可以使用 flushSync。</li>
          <li>在渲染期间，只允许在当前渲染组件内部调用 set 函数。React 将丢弃其输出并立即尝试使用新状态重新渲染。这种方式很少需要，但你可以使用它来存储 先前渲染中的信息</li>
          <li>在严格模式中，React 将 两次调用你的更新函数，以帮助你找到 意外的不纯性。这只是开发时的行为，不影响生产。如果你的更新函数是纯函数（本该是这样），就不应影响该行为。其中一次调用的结果将被忽略。</li>
        </ul>
      </Paragraph>
      <Title level={3} id="useStateInfoId">用法</Title>
      <Title level={4} id="Adding-state-to-a-component">为组件添加状态  </Title>
      <Paragraph>
        在组件的顶层调用 useState 来声明一个或多个 状态变量。
        <SimpleCode value={code3} height={150} />
        按照惯例使用 数组解构 来命名状态变量，例如 [something, setSomething]。
        useState 返回一个只包含两个项的数组：
        <ul>
          <li>该状态变量 当前的 state，最初设置为你提供的 初始化 state。</li>
          <li>set 函数，它允许你在响应交互时将 state 更改为任何其他值。</li>
        </ul>
        要更新屏幕上的内容，请使用新状态调用 set 函数：
        <SimpleCode value={code4} height={80} />
        React 会存储新状态，使用新值重新渲染组件，并更新 UI。
        <Text type='danger'>陷阱</Text>
        调用 set 函数 不会 改变已经执行的代码中当前的 state：
        <SimpleCode value={code5} height={100} />
        <Text type='warning'>它只影响 下一次 渲染中 useState 返回的内容。</Text>
      </Paragraph>
      <Card title="基本的 useState 示例">
        <a href='https://react.docschina.org/reference/react/useState#examples-basic'>基本的 useState 示例</a>
      </Card>
      <Title level={4} id="Updating-state-based-on-the-previous-state">根据先前的 state 更新 state </Title>
      <Paragraph>
        假设 age 为 42，这个处理函数三次调用 setAge(age + 1)：
        <SimpleCode value={code6} height={150} />
        然而，点击一次后，age 将只会变为 43 而不是 45！这是因为调用 set 函数 不会更新 已经运行代码中的 age 状态变量。因此，每个 setAge(age + 1) 调用变成了 setAge(43)。
      </Paragraph>
      <Paragraph>
        为了解决这个问题，你可以向 setAge 传递一个 更新函数，而不是下一个状态：
        <SimpleCode value={code7} height={150} />
        这里，a =`{'>'}` a + 1 是更新函数。它获取 待定状态 并从中计算 下一个状态。
        React 将更新函数放入 队列 中。然后，在下一次渲染期间，它将按照相同的顺序调用它们：
        <ul>
          <li>a =`{'>'}` a + 1 将接收 42 作为待定状态，并返回 43 作为下一个状态</li>
          <li>a =`{'>'}` a + 1 将接收 43 作为待定状态，并返回 44 作为下一个状态。</li>
          <li>a =`{'>'}` a + 1 将接收 44 作为待定状态，并返回 45 作为下一个状态。</li>
        </ul>
        现在没有其他排队的更新，因此 React 最终将存储 45 作为当前状态。
      </Paragraph>
      <Paragraph>
        按照惯例，通常将待定状态参数命名为状态变量名称的第一个字母，如 age 为 a。然而，你也可以把它命名为 prevAge 或者其他你觉得更清楚的名称。
      </Paragraph>
      <Paragraph>
        React 在开发环境中可能会 两次调用你的更新函数 来验证其是否为 纯函数。
      </Paragraph>
      <Title level={4}>是否总是优先使用更新函数？ </Title>
      <Paragraph>你可能会听到这样的建议，如果要设置的状态是根据先前的状态计算得出的，则应始终编写类似于 setAge(a ={'>'} a + 1) 的代码。这样做没有害处，但也不总是必要的。
      </Paragraph>
      <Paragraph>
        在大多数情况下，这两种方法没有区别。React 始终确保对于有意的用户操作，如单击，age 状态变量将在下一次单击之前被更新。这意味着单击事件处理函数在事件处理开始没有得到“过时” age 的风险。
      </Paragraph>
      <Paragraph>
        但是，如果在同一事件中进行多个更新，则更新函数可能会有帮助。如果访问状态变量本身不方便（在优化重新渲染时可能会遇到这种情况），它们也很有用。
      </Paragraph>
      <Paragraph>
        如果比起轻微的冗余你更喜欢语法的一致性，你正设置的状态又是根据先前的状态计算出来的，那么总是编写一个更新函数是合理的。如果它是从某个其他状态变量的先前状态计算出的，则你可能希望将它们结合成一个对象然后 使用 reducer。</Paragraph>
      <Card title="传递更新函数和直接传递下一个状态之间的区别">
        <Title level={4}>传递更新函数</Title>
        <Counter />
        <Title level={4}>直接传递下一个状态</Title>
        <Counter2 />
      </Card>
      <Title level={4} id="Updating-objects-and-arrays-in-state">更新状态中的对象和数组  </Title>
      <Paragraph>
        你可以将对象和数组放入状态中。在 React 中，状态被认为是只读的，因此 你应该替换它而不是改变现有对象。例如，如果你在状态中保存了一个 form 对象，请不要改变它：
        <SimpleCode value={code8} height={60} />
        相反，可以通过创建一个新对象来替换整个对象：
        <SimpleCode value={code9} height={150} />
      </Paragraph>
      <Card title="状态中的对象和数组的示例">
        <Tabs defaultActiveKey="1" items={items} />
      </Card>
      <Title level={4} id="Avoiding-recreating-the-initial-state">避免重复创建初始状态  </Title>
      <Paragraph>
        React 只在初次渲染时保存初始状态，后续渲染时将其忽略。
        <SimpleCode value={code10} height={90} />
        尽管 createInitialTodos() 的结果仅用于初始渲染，但你仍然在每次渲染时调用此函数。如果它创建大数组或执行昂贵的计算，这可能会浪费资源。

        为了解决这个问题，你可以将它 作为初始化函数传递给 useState：
        <SimpleCode value={code11} height={90} />
        请注意，你传递的是 createInitialTodos 函数本身，而不是 createInitialTodos() 调用该函数的结果。如果将函数传递给 useState，React 仅在初始化期间调用它。
      </Paragraph>
      <Paragraph>
        React 在开发模式下可能会调用你的 初始化函数 两次，以验证它们是否是 纯函数。
        <Card title="传递初始化函数和直接传递初始状态之间的区别">
          <a href='https://react.docschina.org/reference/react/useState#examples-initializer'>示例</a>
        </Card>
      </Paragraph>
      <Title level={4} id="Resetting-state-with-a-key">使用 key 重置状态  </Title>
      <Paragraph>
        在 渲染列表 时，你经常会遇到 key 属性。然而，它还有另外一个用途。
      </Paragraph>
      <Paragraph>
        你可以 通过向组件传递不同的 key 来重置组件的状态。在这个例子中，重置按钮改变 version 状态变量，我们将它作为一个 key 传递给 Form 组件。当 key 改变时，React 会从头开始重新创建 Form 组件（以及它的所有子组件），所以它的状态被重置了。
        <KeyReset />
      </Paragraph>
      <Title level={4} id="Storing-information-from-previous-renders">存储前一次渲染的信息  </Title>
      <Paragraph>
        通常情况下，你会在事件处理函数中更新状态。然而，在极少数情况下，你可能希望在响应渲染时调整状态——例如，当 props 改变时，你可能希望改变状态变量。
      </Paragraph>
      <Paragraph>
        在大多数情况下，你不需要这样做
        <ul>
          <li>如果你需要的值可以完全从当前 props 或其他 state 中计算出来，那么 完全可以移除那些多余的状态。如果你担心重新计算的频率过高，可以使用 useMemo Hook 来帮助优化。</li>
          <li>
            如果你想重置整个组件树的状态，可以向组件传递一个不同的 key。</li>
          <li>如果可以的话，在事件处理函数中更新所有相关状态。</li>
        </ul>
        <Text type='danger'>在极为罕见的情况下，如果上述方法都不适用，你还可以使用一种方式，在组件渲染时调用 set 函数来基于已经渲染的值更新状态。</Text>
      </Paragraph>
      <Paragraph>
        这里是一个例子。这个 CountLabel 组件显示传递给它的 count props：
        <SimpleCode value={code12} height={90} />
        假设你想显示计数器是否自上次更改以来 增加或减少。count props 无法告诉你这一点——你需要跟踪它的先前值。添加 prevCount 状态变量来跟踪它，再添加另一个状态变量 trend 来保存计数是否增加或减少。比较 prevCount 和 count，如果它们不相等，则更新 prevCount 和 trend。现在你既可以显示当前的 count props，也可以显示 自上次渲染以来它如何改变。
        <Card title="存储前一次渲染的信息">
          <PreState />
          请注意，在渲染时调用 set 函数时，它必须位于条件语句中，例如 prevCount !== count，并且必须在该条件语句中调用 setPrevCount(count)。否则，你的组件将在循环中重新渲染，直到崩溃。此外，你只能像这样更新 当前渲染 组件的状态。在渲染过程中调用 另一个 组件的 set 函数是错误的。最后，你的 set 调用仍应 不直接改变 state 来更新 状态——这并不意味着你可以违反其他 纯函数 的规则。
        </Card>
        这种方式可能很难理解，通常最好避免使用。但是，它比在 effect 中更新状态要好。当你在渲染期间调用 set 函数时，React 将在你的组件使用 return 语句退出后立即重新渲染该组件，并在渲染子组件前进行。这样，子组件就不需要进行两次渲染。你的组件函数的其余部分仍会执行（然后结果将被丢弃）。如果你的条件判断在所有 Hook 调用的下方，可以提前添加一个 return; 以便更早地重新开始渲染。
      </Paragraph>
      <Title level={3} id="useState-troubleshooting">疑难解答</Title>
      <Title level={4} id="I’ve-updated-the-state-but-logging-gives-me-the-old-value">我已经更新了状态，但日志仍显示旧值</Title>
      <Paragraph>
        调用 set 函数 不能改变运行中代码的状态：
        <SimpleCode value={code13} height={200} />
        这是因为 状态表现为就像一个快照。更新状态会使用新的状态值请求另一个渲染，但并不影响在你已经运行的事件处理函数中的 count JavaScript 变量。
      </Paragraph>
      <Paragraph>
        如果你需要使用下一个状态，你可以在将其传递给 set 函数之前将其保存在一个变量中：
        <SimpleCode value={code14} height={150} />
      </Paragraph>
      <Title level={4} id="I’ve-updated-the-state-but-the-screen-doesn’t-update">我已经更新了状态，但是屏幕没有更新 </Title>
      <Paragraph>
        如果下一个状态等于先前的状态，React 将忽略你的更新，这是由 Object.is 比较确定的。这通常发生在你直接更改状态中的对象或数组时：
        <SimpleCode value={code15} height={80} />
        你修改了一个现有的 obj 对象并将其传递回 setObj，因此 React 忽略了更新。为了解决这个问题，你需要确保始终在状态中 替换 对象和数组，而不是对它们进行 更改：
        <SimpleCode value={code16} height={100} />
      </Paragraph>
      <Title level={4} id="I’m-getting-an-error-Too-many-re-renders">出现错误：“Too many re-renders”</Title>
      <Paragraph>
        有时可能会出现错误：“Too many re-renders”。React 会限制渲染次数，以防止进入无限循环。通常，这意味着 在渲染期间 无条件地设置状态，因此组件进入循环：渲染、设置状态（导致重新渲染）、渲染、设置状态（导致重新渲染）等等。通常，这是由错误地指定事件处理函数时引起的：
        <SimpleCode value={code17} height={160} />
        如果找不到这个错误的原因，请单击控制台中错误旁边的箭头，查看 JavaScript 堆栈以找到导致错误的具体 set 函数调用。
      </Paragraph>
      <Title level={4} id="My-initializer-or-updater-function-runs-twice">初始化函数或更新函数运行了两次</Title>
      <Paragraph>
        在 严格模式 下，React 会调用你的某些函数两次而不是一次：
        <SimpleCode value={code18} height={260} />
        这是所期望的，且不应该破坏你的代码。
      </Paragraph>
      <Paragraph>
        这种 仅在开发环境下生效 的行为有助于 保持组件的纯粹性。React 使用其中一个调用的结果，而忽略另一个调用的结果。只要你的组件、初始化函数和更新函数是纯粹的，就不会影响你的逻辑。但是，如果它们意外地不纯粹，这将帮助你注意到错误。
      </Paragraph>
      <Paragraph>
        例如，这个不纯的更新函数改变了 state 中的一个数组：
        <SimpleCode value={code19} height={80} />
        因为 React 调用了两次更新函数，所以你将看到 todo 被添加了两次，所以你将知道出现了错误。在这个例子中，你可以通过 替换数组而不是更改数组 来修复这个错误：
        <SimpleCode value={code20} height={80} />
        现在，这个更新函数是纯粹的，所以多调用一次不会对行为产生影响。这就是为什么 React 调用它两次可以帮助你找到错误的原因。只有组件、初始化函数和更新函数需要是纯粹的。事件处理函数不需要是纯粹的，所以 React 不会两次调用你的事件处理函数。
      </Paragraph>
      <Title level={4} id="I’m-trying-to-set-state-to-a-function-but-it-gets-called-instead">我尝试将 state 设置为一个函数，但它却被调用了</Title>
      <Paragraph>
        你不能像这样把函数放入状态：
        <SimpleCode value={code21} height={120} />
        因为你传递了一个函数，React 认为 someFunction 是一个 初始化函数，而 someOtherFunction 是一个 更新函数，于是它尝试调用它们并存储结果。要实际 存储 一个函数，你必须在两种情况下在它们之前加上 () ={'>'}。然后 React 将存储你传递的函数。
        <SimpleCode value={code22} height={120} />
      </Paragraph>
    </>
  )
}

