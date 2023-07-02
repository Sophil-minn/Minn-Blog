import { Card, Typography } from 'antd';
import { FC, Suspense, lazy, useEffect, useState } from 'react'
import { code1, code2, code3, code4, code5 } from './code';

const { Title, Paragraph, Text } = Typography;

const Example = lazy(() => import('./Example'));
const Example2 = lazy(() => import('./Example2'));
const WithTransition = lazy(() => import('./Example/WithTransition'));
const SimpleCode = lazy(() => import('../../../../components/SimpleCode'));

const ComponentName: FC = () => {
  const [showExample2, setShowExample2] = useState(false);
  useEffect(() => {
    // 放这里，因为这个组件会阻塞整个页面加载很慢
    setShowExample2(true);
  }, []);
  return (
    <>
      <Title level={3} id="useDeferredValue-usage">用法</Title>
      <Title level={4} id="Showing-stale-content">在新内容加载期间显示旧内容</Title>
      <Paragraph>在组件的顶层调用 useDeferredValue 来延迟更新 UI 的某些部分。</Paragraph>
      <Paragraph>在初始渲染期间，返回的 延迟值 与你提供的 值 相同。</Paragraph>
      <Paragraph>在更新期间，延迟值 会“滞后于”最新的 值。具体地说，React 首先会在不更新延迟值的情况下进行重新渲染，然后在后台尝试使用新接收到的值进行重新渲染。</Paragraph>
      <Title level={4}>示例</Title>
      <Example />
      <Title level={5}>如何在内部实现延迟值？ </Title>
      <Paragraph>
        你可以将其看成两个步骤：
        <ol>
          <li>首先，React 会使用新的 query 值（"ab"）和旧的 deferredQuery 值（仍为 "a"）重新渲染。 传递给结果列表的 deferredQuery 值是延迟的，它“滞后于” query 值。</li>
          <li>在后台，React 尝试重新渲染，并将 query 和 deferredQuery 两个值都更新为 "ab"。 如果此次重新渲染完成，React 将在屏幕上显示它。但是，如果它 suspense（即 "ab" 的结果尚未加载），React 将放弃这次渲染，并在数据加载后再次尝试重新渲染。用户将一直看到旧的延迟值，直到数据准备就绪</li>
        </ol>
        被推迟的“后台”渲染是可中断的。例如，如果你再次在输入框中输入，React 将会中断渲染，并从新值开始重新渲染。React 总是使用最新提供的值。
      </Paragraph>
      <Paragraph>
        <Text type='danger'>注意，每次按键仍会发起一个网络请求。这里延迟的是显示结果（直到它们准备就绪），而不是网络请求本身。即使用户继续输入，每个按键的响应都会被缓存，所以按下 Backspace 键是瞬时的，不会再次获取数据。</Text>
      </Paragraph>
      <Title level={3} id="Indicating-that-the-content-is-stale">表明内容已过时</Title>
      <Paragraph>在上面的示例中，当最新的查询结果仍在加载时，没有任何提示。如果新的结果需要一段时间才能加载完成，这可能会让用户感到困惑。为了更明显地告知用户结果列表与最新查询不匹配，你可以在显示旧的查询结果时添加一个视觉提示：
        <SimpleCode value={code2} height={150} title='' />
        有了上面这段代码，当你开始输入时，旧的结果列表会略微变暗，直到新的结果列表加载完毕。你也可以添加 CSS 过渡来延迟变暗的过程，让用户感受到一种渐进式的过渡，就像下面的例子一样：
        <WithTransition />
      </Paragraph>
      <Title level={3} id="Deferring-re-rendering-for-a-part-of-the-UI">延迟渲染 UI 的某些部分</Title>
      <Paragraph>
        你还可以将 useDeferredValue 作为性能优化的手段。当你的 UI 某个部分重新渲染很慢、没有简单的优化方法，同时你又希望避免它阻塞其他 UI 的渲染时，使用 useDeferredValue 很有帮助。
      </Paragraph>
      <Paragraph>想象一下，你有一个文本框和一个组件（例如图表或长列表），在每次按键时都会重新渲染：</Paragraph>
      <SimpleCode value={code3} title="" height={160} />
      <Paragraph>首先，我们可以优化 SlowList，使其在 props 不变的情况下跳过重新渲染。只需将其 用 memo 包裹 即可：</Paragraph>
      <SimpleCode value={code4} title="" height={100} />

      <Paragraph>然而，这仅在 SlowList 的 props 与上一次的渲染时相同才有用。你现在遇到的问题是，当这些 props 不同 时，并且实际上需要展示不同的视觉输出时，页面会变得很慢。</Paragraph>
      <Paragraph>具体而言，主要的性能问题在于，每次你输入内容时，SlowList 都会接收新的 props，并重新渲染整个树结构，这会让输入感觉很卡顿。使用 useDeferredValue 能够优先更新输入框（必须快速更新），而不是更新结果列表（可以更新慢一些），从而缓解这个问题</Paragraph>
      <SimpleCode value={code5} title="" height={180} />
      <Paragraph>这并没有让 SlowList 的重新渲染变快。然而，它告诉 React 可以将列表的重新渲染优先级降低，这样就不会阻塞按键输入。列表的更新会“滞后”于输入，然后“追赶”上来。与之前一样，React 会尽快更新列表，但不会阻塞用户输入。</Paragraph>
      <Title level={3}>useDeferredValue 和未优化的重新渲染之间的区别</Title>
      {/* 渲染太慢，影响整个页面性能 */}
      {showExample2 && <Suspense fallback="loading examples 2"><Example2 /></Suspense>}
      {/* <Example2 /> */}
      <Paragraph>
        在这个例子中，SlowList 组件中的每个 item 都被 故意减缓了渲染速度，这样你就可以看到 useDeferredValue 是如何让输入保持响应的。当你在输入框中输入时，你会发现输入很灵敏，而列表的更新会稍有延迟。
      </Paragraph>
    </>
  );
};

export default ComponentName;