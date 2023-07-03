import { FC } from 'react';
import { Card, Typography } from 'antd';
import { lazy } from 'react'
import { code1, code10, code11, code12, code13, code14, code15, code16, code17, code18, code19, code2, code20, code21, code22, code3, code4, code5, code6, code7, code8, code9 } from './code';
// import { code1, } from './code';

const SimpleCode = lazy(() => import('../../../../components/SimpleCode'));
const { Title, Paragraph, Text } = Typography;

export default function MemoInfo() {
  return (
    <>
      <Title level={3} id="useState">useState</Title>
      <SimpleCode value="const cachedValue = useMemo(calculateValue, dependencies)" height={30} />
      <Paragraph>useMemo 是一个 React Hook，它在每次重新渲染的时候能够缓存计算的结果,在组件的顶层调用 useMemo 来缓存一个在每次重新渲染中需要计算的结果。</Paragraph>
      <SimpleCode value={code1} height={150} />
      <Title level={4}>参数</Title>
      <Paragraph>
        <ul>
          <li>calculateValue：要缓存计算值的函数。它应该是一个纯函数，应该没有任何参数，并且返回任意类型。React 将会在首次渲染时调用该函数。在下一次渲染中，如果 dependencies 没有发生变化，React 将直接返回相同值。否则，将会调用 calculateValue 并返回结果，然后缓存该结果以便下次重用。</li>
          <li>dependencies：所有在 calculateValue 函数中使用的响应式变量组成的数组。响应式变量包括 props、state 和所有你直接在组件中定义的变量和函数。如果你的代码检查工具是 配置了 React，它将会确保每一个响应式数据都被正确的定义为依赖项。依赖项数组的长度必须是固定的并且必须写成 [dep1, dep2, dep3] 这种形式。React 使用 Object.is 将每个依赖项与其之前的值进行比较。</li>
        </ul>
      </Paragraph>
      <Title level={4}>返回值 </Title>
      <Paragraph>在初始渲染时，useMemo 返回不带参数调用 calculateValue 的结果。</Paragraph>
      <Paragraph>在接下来的渲染中，如果依赖项没有发生改变，它将返回上次渲染缓存的值；否则将再次调用 calculateValue，并返回 calculateValue 的最新结果。</Paragraph>
      <Title level={4}>注意事项 </Title>
      <Paragraph>
        <ul>
          <li>useMemo 是一个 React Hook，所以你只能 在组件的顶层 或者自定义 Hook 中调用它。你不能在循环语句或条件语句中调用它。如有需要，提取为一个新组件并使用 state。</li>
          <li>在严格模式下，为了 帮你发现意外的错误，React 将会 调用你的计算函数两次。这只是一个开发环境下的行为，并不会影响到生产环境。如果计算函数是一个纯函数（它本来就应该是），这将不会影响到代码逻辑。其中一次调用的结果将会被忽略。</li>
          <li>除非有特定原因，React 不会丢弃缓存值。例如，在开发过程中，React 会在你编辑组件文件时丢弃缓存。无论是在开发环境还是在生产环境，如果你的组件在初始挂载期间被终止，React 都会丢弃缓存。在未来，React 可能会添加更多利用丢弃缓存的特性——例如，如果 React 在未来增加了对虚拟化列表的内置支持，那么丢弃那些滚出虚拟化列表视口的缓存是有意义的。仅仅依赖 useMemo 作为性能优化手段，是没问题的。否则，state 变量 或者 ref 可能更加合适。</li>
        </ul>
      </Paragraph>
      <Title level={5}><Text type='danger'>注意</Text></Title>
      <Paragraph>
        这种缓存返回值的方式也叫做 记忆化（memoization），这也是该 Hook 叫做 useMemo 的原因。
      </Paragraph>
      <Title level={3} id="useMemoId">用法</Title>
      <Title level={4} id="Skipping-expensive-recalculations">跳过代价昂贵的重新计算  </Title>
      <Paragraph>
        要在重新渲染之间缓存计算结果，请在组件的顶层使用 useMemo 调用将其包裹起来：
        <SimpleCode value={code2} height={150} />
        你需要给 useMemo 传递两样东西：
        <ul>
          <li>一个没有任何参数的 calculation 函数，像这样 () ={">"}，并且返回任何你想要的计算结果。</li>
          <li>一个由包含在你的组件中并在 calculation 中使用的所有值组成的 依赖列表。</li>
        </ul>
        在初次渲染时，你从 useMemo 得到的 值 将会是你的 calculation 函数执行的结果。
      </Paragraph>
      <Paragraph>
        在随后的每一次渲染中，React 将会比较前后两次渲染中的 所有依赖项 是否相同。如果所有依赖项都没有发生变化（通过 Object.is 比较），useMemo 将会返回之前已经计算过的那个值。否则，React 将会重新执行 calculation 函数并且返回一个新的值。
      </Paragraph>
      <Paragraph>
        换句话说，useMemo 在多次重新渲染中缓存了一个 calculation 函数计算的结果直到依赖项的值发生变化。
      </Paragraph>
      <Paragraph>
        默认情况下，React 会在每次重新渲染时重新运行组件的整个主体。例如，如果这个 TodoList 更新了它的状态或从它的父元素接收到新的 props，filterTodos 函数将会重新运行：
        <SimpleCode value={code3} height={80} />
        通常，这不是问题，因为大多数计算都非常快。但是，如果你正在过滤或转换一个大型数组，或者进行一些昂贵的计算，如果数据没有改变，你可能希望跳过这些重复计算。如果 todos 和 tab 都与上次渲染时相同，将计算包装在 useMemo 中，就像之前那样让你重用已经计算过的 visibleTodos。
        这种缓存行为叫做 记忆化。
      </Paragraph>
      <Title level={5}><Text type='danger'>注意</Text></Title>
      <Paragraph>你应该仅仅把 useMemo 作为一个性能优化的手段。如果没有它，你的代码就不能正常工作，那么请先找到潜在的问题并修复它。然后你可以添加 useMemo 来提高性能。</Paragraph>
      <Title level={5}>如何衡量一个计算过程开销是否昂贵呢？ </Title>
      <Paragraph>一般来说，除非要创建或循环遍历数千个对象，否则开销可能并不大。如果你想获得更详细的信息，可以添加一个控制台日志来测量花费在一段代码上的时间：
        <SimpleCode value={code4} height={80} />
        执行你正在检测的交互（例如，在输入框中输入文字）。你将会在控制台看到如下的日志 filter array: 0.15ms。如果全部记录的时间加起来很长（1ms 或者更多），记忆这个计算结果是有意义的。作为对比，你可以将计算过程包裹在 useMemo 中，以验证该交互的总日志时间是否减少了：
        <SimpleCode value={code5} height={100} />
        useMemo 不会让首次渲染更快，它只会帮助你跳过不必要的更新工作。
      </Paragraph>
      <Paragraph>
        请记住，你的开发设备可能比用户的设备性能更强大，因此最好通过人为的降低浏览器性能来测试。例如，Chrome 提供了 CPU Throttling 选项来降低浏览器性能。
      </Paragraph>
      <Paragraph>
        另外，请注意，在开发环境中测量性能无法为你提供最准确的结果（例如，当开启 严格模式 时，你会看到每个组件渲染两次而不是一次）。要获得最准确的时间，请构建用于生产的应用程序并在用户使用的设备上对其进行测试。
      </Paragraph>
      <Title level={5}>你应该在所有地方添加 useMemo 吗？ </Title>
      <Paragraph>
        如果你的应用程序类似于此站点，并且大多数交互都很粗糙（例如替换页面或整个部分），则通常不需要记忆。反之，如果你的应用程序更像是绘图编辑器，并且大多数交互都是颗粒状的（如移动形状），那么你可能会发现记忆非常有用。
      </Paragraph>
      <Paragraph>
        使用 useMemo 进行优化仅在少数情况下有价值：
        <ul>
          <li>你在 useMemo 中进行的计算明显很慢，而且它的依赖关系很少改变</li>
          <li>你将它作为 props 传递给包裹在 memo 中的组件。如果值没有改变，你想跳过重新渲染。记忆化让你的组件仅在依赖项不同时才重新渲染。</li>
          <li>你传递的值稍后用作某些 Hook 的依赖项。例如，也许另一个 useMemo 计算值依赖它。或者 useEffect 依赖这个值。</li>
        </ul>
        在其他情况下，将计算过程包装在 useMemo 中没有任何好处。这样做也没有重大危害，所以一些团队选择不考虑具体情况，尽可能多地使用 useMemo。这种方法的缺点是降低了代码的可读性。此外，并不是所有 useMemo 的使用都是有效的：一个“永远是新的”的单一值就足以破坏整个组件的记忆效果。
      </Paragraph>
      <Title level={5}>在实践中，你可以通过遵循一些原则来避免 useMemo 的滥用：</Title>
      <Paragraph>
        <ul>
          <li>当一个组件在视觉上包裹其他组件时，让它 将 JSX 作为子组件传递。这样，当包装器组件更新自己的状态时，React 知道它的子组件不需要重新渲染</li>
          <li>首选本地状态，非必要不进行 状态提升。例如，不要保持像表单这样的瞬时状态，也不要保持组件是否悬停在树的顶部或全局状态库中这样的状态。</li>
          <li>保持你的 渲染逻辑纯粹。如果重新渲染组件导致一些问题或产生一些明显的视觉错误，那么它就是组件中的错误！修复错误而不是添加记忆化。</li>
          <li>避免 不必要的更新 state 的 Effect。React 应用程序中的大多数性能问题都是由 Effect 创造的更新链引起的，这些更新链导致组件反复重新渲染。</li>
          <li>尽力 从 Effect 中移除不必要的依赖项。例如, 相比于记忆化，在 Effect 内部或组件外部移动某些对象或函数通常更简单。</li>
        </ul>
        如果某个特定的交互仍然感觉滞后，使用 React 开发者工具分析器 查看哪些组件将从记忆化中获益最多，并在需要的地方添加记忆化。这些原则使你的组件更易于调试和理解，因此在任何情况下都应该遵循它们。从长远来看，React正在研究 自动进行粒度记忆 以一劳永逸地解决这个问题。
      </Paragraph>
      <Card title="使用 useMemo 和直接计算一个值之间的区别">
        <a href='https://codesandbox.io/s/intelligent-tereshkova-s8sg2d?file=/App.js'>示例链接</a>
        很多时候，没有记忆化的代码可以正常工作。如果你的交互速度足够快，你可能不需要记忆化。
      </Card>
      <Title level={4} id="Skipping-re-rendering-of-components">跳过组件的重新渲染</Title>
      <Paragraph>
        在某些情况下，useMemo 还可以帮助你优化重新渲染子组件的性能。为了说明这一点，假设这个 TodoList 组件将 visibleTodos 作为 props 传递给子 List 组件：
        <SimpleCode value={code6} height={120} />
      </Paragraph>
      <Paragraph>
        你已经注意到切换 theme 属性会使应用程序冻结片刻，但是如果你从 JSX 中删除 List ，感觉会很快。这说明尝试优化 List 组件是值得的。
      </Paragraph>
      <Paragraph>
        默认情况下，当一个组件重新渲染时，React 会递归地重新渲染它的所有子组件。这就是为什么当 TodoList 使用不同的 theme 重新渲染时，List 组件 也会 重新渲染。这对于不需要太多计算来重新渲染的组件来说很好。但是如果你已经确认重新渲染很慢，你可以通过将它包装在 memo 中，这样当它的 props 跟上一次渲染相同的时候它就会跳过本次渲染：
        <SimpleCode value={code7} height={80} />
        通过此更改，如果 List 的所有 props 都与上次渲染时相同，则 List 将跳过重新渲染。这就是缓存计算变得重要的地方！想象一下，你在没有 useMemo 的情况下计算了 visibleTodos：
        <SimpleCode value={code8} height={180} />
        在上面的示例中，filterTodos 函数总是创建一个不同数组，类似于 { } 总是创建一个新对象的方式。通常，这不是问题，但这意味着 List 属性永远不会相同，并且你的 memo 优化将不起作用。这就是 useMemo 派上用场的地方：
        <SimpleCode value={code9} height={260} />
        通过将 visibleTodos 包裹在 useMemo 中，你可以确保它在重新渲染之间具有相同值（直到依赖关系发生变化）。你 不必 将计算包裹在 useMemo 中，除非你出于某些特定原因这样做。在此示例中，原因是你将它传递给包裹在 memo 中的组件，这让它可以跳过重新渲染
      </Paragraph>
      <Title level={5}>记忆单个 JSX 节点</Title>
      <Paragraph>
        你可以将 List  JSX 节点本身包裹在 useMemo 中，而不是将 List 包裹在 memo 中： <SimpleCode value={code10} height={160} />
        他们的表现将是相同的。如果 visibleTodos 没有改变，List 将不会被重新渲染。
      </Paragraph>
      <Paragraph>
        像 <SimpleCode value={`<List items={visibleTodos} />`} height={40} /> 这样的 JSX 节点是一个类似<SimpleCode value={`{ type: List, props: { items: visibleTodos } }`} height={40} /> 这样的对象。创建这个对象开销很低，但是 React 不知道它的内容是否和上次一样。这就是为什么默认情况下，React 会重新渲染 List 组件。
      </Paragraph>
      <Paragraph>
        但是，如果 React 看到与之前渲染期间完全相同的 JSX，它不会尝试重新渲染你的组件。这是因为 JSX 节点是 不可变的。JSX 节点对象不可能随时间改变，因此 React 知道跳过重新渲染是安全的。然而，为了使其工作，节点必须 实际上是同一个对象，而不仅仅是在代码中看起来相同。这就是 useMemo 在此示例中所做的。
      </Paragraph>
      <Paragraph>
        手动将 JSX 节点包裹到 useMemo 中并不方便。例如，你不能在条件语句中这样做。这通常就是为什么你会用 memo 包装组件而不是包装 JSX 节点。
      </Paragraph>
      <Title level={4} id="Memoizing-a-dependency-of-another-Hook">记忆另一个 Hook 的依赖</Title>
      <Paragraph>
        假设你有一个 calculation 函数依赖于直接在组件主体中创建的对象：
        <SimpleCode value={code11} height={160} />
      </Paragraph>
      <Paragraph>
        依赖这样的对象会破坏记忆化。当组件重新渲染时，组件主体内的所有代码都会再次运行。创建 searchOptions 对象的代码行也将在每次重新渲染时运行。因为 searchOptions 是你的 useMemo 调用的依赖项，而且每次都不一样，React 知道依赖项是不同的，并且每次都重新计算 searchItems。
      </Paragraph>
      <Paragraph>
        要解决此问题，你可以在将其作为依赖项传递之前记忆 searchOptions 对象 本身
        <SimpleCode value={code12} height={180} />
        在上面的例子中，如果 text 没有改变，searchOptions 对象也不会改变。然而，更好的解决方法是将 searchOptions 对象声明移到 useMemo 计算函数的 内部：
        <SimpleCode value={code13} height={150} />
        现在你的计算直接取决于 text（这是一个字符串，不会“意外地”变得不同）。
      </Paragraph>
      <Title level={4} id="Memoizing-a-function">记忆一个函数</Title>
      <Paragraph>
        假设 Form 组件被包裹在 memo 中，你想将一个函数作为 props 传递给它：
        <SimpleCode value={code14} height={160} />
        正如 { } 每次都会创建不同的对象一样，像 function() { } 这样的函数声明和像 () ={'>'} { } 这样的表达式在每次重新渲染时都会产生一个 不同 的函数。就其本身而言，创建一个新函数不是问题。这不是可以避免的事情！但是，如果 Form 组件被记忆了，大概你想在没有 props 改变时跳过它的重新渲染。总是 不同的 props 会破坏你的记忆化。
      </Paragraph>
      <Paragraph>
        要使用 useMemo 记忆函数，你的计算函数必须返回另一个函数：
        <SimpleCode value={code15} height={180} />
        这看起来很笨拙！记忆函数很常见，React 有一个专门用于此的内置 Hook。将你的函数包装到 useCallback 而不是 useMemo 中，以避免编写额外的嵌套函数：
        <SimpleCode value={code16} height={180} />
        上面两个例子是完全等价的。useCallback 的唯一好处是它可以让你避免在内部编写额外的嵌套函数。它没有做任何其他事情。
      </Paragraph>
      <Title level={3} id="useMemo-troubleshooting">故障排除</Title>
      <Title level={4} id="My-calculation-runs-twice-on-every-re-render">我的计算函数在每次重新渲染时运行两次 </Title>
      <Paragraph>
        在 严格模式 中，React 将调用你的某些函数两次而不是一次：
        <SimpleCode value={code17} height={180} />
        这是符合预期的，不应对你的代码逻辑产生影响。
      </Paragraph>
      <Paragraph>
        这种 仅限开发环境下的 行为可帮助你 保持组件纯粹。React 使用其中一次调用的结果，而忽略另一次的结果。只要你的组件和计算函数是纯函数，这就不会影响你的逻辑。但是，如果你不小心写出带有副作用的代码，这可以帮助你发现并纠正错误。
      </Paragraph>
      <Paragraph>
        例如，这个不纯的计算函数会改变你作为 props 收到的数组：
        <SimpleCode value={code18} height={120} />
        React 调用你的函数两次，所以你会注意到 todo 被添加了两次。你的计算不应更改任何现有对象，但可以更改你在计算期间创建的任何 新 对象。例如，如果 filterTodos 函数总是返回一个 不同 数组，你可以改为改变 那个 数组：
        <SimpleCode value={code19} height={120} />
      </Paragraph>
      <Title level={4} id="My-useMemo-call-is-supposed-to-return-an-object-but-returns-undefined">我调用的 useMemo 应该返回一个对象，但返回 undefined </Title>
      <Paragraph>
        在 JavaScript 中，() ={'>'} 大括号是箭头函数体的开始标志，因此 大括号不是对象的一部分。这就是它不返回对象并导致错误的原因。你可以通过添加像 ({'与'}) 这样的括号来修复它：然而，这仍然令人困惑，而且对于某些人来说，通过移除括号来破坏它太容易了。
        为避免此错误，请显式编写 return 语句
      </Paragraph>
      <Title level={4} id="Every-time-my-component-renders-the-calculation-in-useMemo-re-runs">每次我的组件渲染时，useMemo 中的计算都会重新运行</Title>
      <Paragraph>确保你已将依赖项数组指定为第二个参数！
        如果你忘记了依赖数组，useMemo 将每次重新运行计算：如果这没有帮助，那么问题是你的至少一个依赖项与之前的渲染不同。你可以通过手动将依赖项记录到控制台来调试此问题：然后，你可以在控制台中右键单击来自不同重新渲染的数组，并为它们选择“存储为全局变量”。假设第一个保存为 temp1，第二个保存为 temp2，然后你可以使用浏览器控制台检查两个数组中的每个依赖项是否相同：当你发现是哪个依赖项破坏了记忆化时，要么找到一种方法将其删除，要么 也对其进行记忆。
      </Paragraph>
      <Title level={4} id="I-need-to-call-useMemo-for-each-list-item-in-a-loop-but-it’s-not-allowed">我需要为循环中的每个列表项调用 useMemo，但这是不允许的</Title>
      <Paragraph>假设 Chart 组件被包裹在 memo 中。当 ReportList 组件重新渲染时，你想跳过重新渲染列表中的每个 Chart。但是，你不能在循环中调用 useMemo：
        <SimpleCode value={code20} height={160} />
        相反，为每个 item 提取一个组件并为单个 item 记忆数据：
        <SimpleCode value={code21} height={200} />
        或者，你可以删除 useMemo 并将 Report 本身包装在 memo 中。如果 item props 没有改变，Report 将跳过重新渲染，因此 Chart 也会跳过重新渲染：
        <SimpleCode value={code22} height={120} />
      </Paragraph>
    </>
  )
}


