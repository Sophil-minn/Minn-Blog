import { Divider, Typography } from 'antd';
import React, { lazy } from 'react'
import { code3, code4, code5, code6, code7, code8 } from './code';

const SimpleCode = lazy(() => import('../../../../components/SimpleCode'));
const Code = lazy(() => import('../../../../components/Code'));
const Example = lazy(() => import('./Example'));

const { Title, Paragraph, Text } = Typography;

export default function Usage() {
  return (
    <>
      <Title level={2} id="用法">2、用法</Title>
      <Title level={4} id="skipping-re-rendering-of-components">2.1、Skipping re-rendering of components</Title>
      <Paragraph>
        When you optimize rendering performance, you will sometimes need to cache the functions that you pass to child components. Let’s first look at the syntax for how to do this, and then see in which cases it’s useful.
        To cache a function between re-renders of your component, wrap its definition into the useCallback Hook:
      </Paragraph>
      <Code value={code3} title="Skipping re-rendering of components" height={300} />
      <Paragraph>
        你注意到切换 theme prop 会让应用短暂卡顿,但如果从 JSX 中移除 ShippingForm,它就变得很快。这表明优化 ShippingForm 组件是值得一试的。
      </Paragraph>
      <Paragraph>
        默认情况下,当一个组件重新渲染时,React 会递归地重新渲染其所有子组件。 这就是为什么在 ProductPage 以不同的 theme 重新渲染时,ShippingForm 组件也会重新渲染。对于不需要太多计算就能重新渲染的组件来说,这没问题。但是如果你确认重新渲染很慢,你可以告诉 ShippingForm 当其 props 与上次渲染相同时跳过重新渲染,方法是使用 memo 包装它:
      </Paragraph>
      <Divider />
      <SimpleCode value={code4} id="memo-example" title="memo example" height={100} />
      <Paragraph>With this change, ShippingForm will skip re-rendering if all of its props are the same as on the last render. This is when caching a function becomes important! Let’s say you defined handleSubmit without useCallback:</Paragraph>
      <Divider />
      <Title level={5} id="without-useCallback">Without useCallback</Title>
      <Code value={code5} title="without useCallback" />
      <Paragraph>
        在 JavaScript 中,函数 () { } 或 () ={'>'} { } 总是创建一个不同的函数,就像 { } 对象字面量总是创建一个新对象一样。通常,这不会是一个问题,但它意味着 ShippingForm props 永远不会相同,你的 memo 优化不会起作用。这就是 useCallback 的用武之地:
      </Paragraph>
      <Paragraph>
        In JavaScript, a function () { } or () ={'>'} { } always creates a different function, similar to how the { } object literal always creates a new object. Normally, this wouldn’t be a problem, but it means that ShippingForm props will never be the same, and your memo optimization won’t work. This is where useCallback comes in handy:
      </Paragraph>
      <Divider />
      <Title level={5} id="with-useCallback">With useCallback</Title>
      <Code value={code6} title="with useCallback" height={300} />
      <Paragraph>
        By wrapping handleSubmit in useCallback, you ensure that it’s the same function between the re-renders (until dependencies change). You don’t have to wrap a function in useCallback unless you do it for some specific reason. In this example, the reason is that you pass it to a component wrapped in memo, and this lets it skip re-rendering. There are other reasons you might need useCallback which are described further on this page.
      </Paragraph>
      <Divider />
      <Title level={5} id="注意事项2"> 注意事项  </Title>
      <Paragraph>
        <Text type='warning'>You should only rely on useCallback as a performance optimization. If your code doesn’t work without it, find the underlying problem and fix it first. Then you may add useCallback back.</Text>
      </Paragraph>
      <Paragraph>
        <Text type='danger'>你应该只将 useCallback 用作性能优化工具。 如果没有它你的代码无法运行,首先要找到潜在问题并修复。然后,你可以添加 useCallback 来提高性能。</Text>
      </Paragraph>
      <Paragraph>
        <Text type="danger">原因如下:</Text>
        <ul>
          <li>
            useCallback 仅在避免组件重新渲染方面有意义。它不会影响组件的功能或输出。
          </li>
          <li>如果依赖项数组中缺失某个值,useCallback 回调函数将始终重新创建。这可能导致难以诊断的 bug。</li>
          <li>添加 useCallback 可能会隐藏真正的问题,使你花更长时间才能找到并修复错误。</li>
          <li>useCallback 自身具有一定的性能开销。如果组件本身的重新渲染并不特别慢,它可能造成多余的优化。</li>
          <li>代码变得更难理解,因为函数定义变成了对 useCallback 的调用。</li>
        </ul>
        <Text type="success">所以正确的顺序应该是:</Text>
        <ol>
          <li>编写不依赖 useCallback 的代码</li>
          <li>如果确认某个组件的重新渲染很慢,通过 React Profiler 或浏览器性能分析工具进行验证</li>
          <li>只在必要时添加 useCallback,并确保正确提供依赖项数组</li>
        </ol>
        <Text type='danger'>useCallback 是一个很有用的 Hook,但必须谨慎使用。它应该仅用于解决已知的性能问题,而非预防性地添加。</Text>
      </Paragraph>
      <Divider />
      <Title level={4} id="深入探讨2.1">深入探讨</Title>
      <Title level={5}>How is useCallback related to useMemo? </Title>
      <Paragraph>
        You will often see useMemo alongside useCallback. They are both useful when you’re trying to optimize a child component. They let you memoize (or, in other words, cache) something you’re passing down:
      </Paragraph>
      <Paragraph>
        您会经常看到`useMemo`与`useCallback`一起使用。当您试图优化子组件时,它们都很有用。它们允许您缓存传入的东西:
        useMemo 允许您缓存一个值,直到某些依赖项改变。这意味着每次渲染都不会重新计算该值,直到真正需要更新它。
        useCallback 类似,但它对函数进行缓存。这意味着每次渲染都不会创建新函数,除非其依赖项有所改变。
        这对于性能优化非常有用,因为它可以防止在每次渲染时为子组件创建新 prop,从而触发子组件的不必要重新渲染。通过 memoized 值和回调,您可以确保仅当真正需要时才会改变子组件的 props。
        总的来说,这两个 Hook 的目的都是通过记忆化来优化性能,方法是避免在每个渲染周期中进行昂贵的计算或创建全新对象。它们都是非常有用的 React 性能优化工具。
      </Paragraph>
      <Code value={code7} title="useCallback & useMemo" height={400} />
      <Paragraph>
        The difference is in what they’re letting you cache:
        不同之处在于_他们允许缓存的内容_:
        <ul>
          <li>useMemo caches the result of calling your function. In this example, it caches the result of calling computeRequirements(product) so that it doesn’t change unless product has changed. This lets you pass the requirements object down without unnecessarily re-rendering ShippingForm. When necessary, React will call the function you’ve passed during rendering to calculate the result.</li>
          <li>useMemo 缓存调用函数的_结果_。在这个例子中,它缓存调用 computeRequirements(product) 的结果,这样除非 product 发生变化,否则结果不会改变。这允许您传递 requirements 对象而不必重新渲染 ShippingForm。当需要时,React 会在渲染期间调用您传入的函数来计算结果。</li>
          <li>useCallback caches the function itself. Unlike useMemo, it does not call the function you provide. Instead, it caches the function you provided so that handleSubmit itself doesn’t change unless productId or referrer has changed. This lets you pass the handleSubmit function down without unnecessarily re-rendering ShippingForm. Your code won’t run until the user submits the form.</li>
          <li>• useCallback 缓存_函数本身_。与 useMemo 不同,它不调用您提供的函数。相反,它缓存您提供的函数,这样除非 productId 或 referrer 发生变化,否则 handleSubmit 本身 不会改变。这允许您传递 handleSubmit 函数而不必重新渲染 ShippingForm。您的代码不会在用户提交表单之前运行。
          </li>
        </ul>
        如果您已经熟悉 useMemo,你可能会发现将 useCallback 理解为这种方式很有帮助:
        <SimpleCode value={code8} title="Simplified implementation" height={100} />
      </Paragraph>
      <Title level={5}> Memoizing a function </Title>
      <Paragraph>
        用useMemo记忆化函数的使用很常见, 但是这看起来很笨拙!React 有一个特定的内置 Hook 专门用于此目的。使用 useCallback 包装你的函数,而不是 useMemo,以避免写一个额外的嵌套函数:
      </Paragraph>
      <Title level={4}>Should you add useCallback everywhere? </Title>
      <Paragraph>
        如果你的应用像这个网站,大多数交互都是粗粒度的(比如替换整个页面或部分),那么记忆化通常是不必要的。另一方面,如果你的应用更像一个绘图编辑器,大多数交互都是细粒度的(比如移动形状),那么你可能会发现记忆化非常有帮助。
      </Paragraph>
      <Paragraph>
        <Text type='danger'>使用 useCallback 缓存一个函数只在几种情况下非常有价值:</Text>
        <ul>
          <li>你把它作为 prop 传递给一个使用 memo 包装的组件。你想在值没有改变的情况下跳过重新渲染。记忆化让你的组件只在依赖项改变时重新渲染。</li>
          <li>你要传递的函数后续被某个 Hook 用作依赖项。例如,另一个使用 useCallback 包装的函数依赖于它,或者你从 useEffect 中依赖于这个函数。</li>
          <li></li>
        </ul>
      </Paragraph>
      <Paragraph><Text type='danger'>在其他情况下,使用 useCallback 包装一个函数没有好处。虽然这样做也没有明显的害处,所以有些团队选择不考虑个别情况,尽量使用记忆化。缺点是代码可读性降低。而且,不是所有的记忆化都是有效的:一个“总是新”的值就足以破坏一个组件的全部记忆化。</Text>
      </Paragraph>
      <Paragraph>
        <Text type='danger'>请注意,useCallback 不会防止_创建_函数。你总是在创建一个函数(这没问题!),但是如果没有改变,React 会忽略它,并返回一个缓存的函数。</Text>
      </Paragraph>
      <Divider />
      <Title level={4}>
        <Text strong>在实践中,你可以通过遵循以下几个原则使许多记忆化不必要: </Text>
      </Title>
      <Paragraph>
        <ol>
          <li>
            <Text mark strong>
              当一个组件在视觉上包裹其他组件时,让它接受 JSX 作为子元素。然后,如果包装组件更新自己的状态,React 知道其子元素不需要重新渲染。
            </Text>
          </li>
          <li>
            <Text mark strong>当一个组件在视觉上包裹其他组件时,让它接受 JSX 作为子元素。然后,如果包装组件更新自己的状态,React 知道其子元素不需要重新渲染。</Text>
          </li>
          <li><Text mark strong>当一个组件在视觉上包裹其他组件时,让它接受 JSX 作为子元素。然后,如果包装组件更新自己的状态,React 知道其子元素不需要重新渲染。</Text></li>
          <li><Text mark strong>优先使用本地状态,不要将状态提升得比必要的更高。不要在树的顶端或全局状态库中保留表单和是否悬停在项目上的瞬态状态。</Text></li>
          <li>
            <Text mark strong>保持你的渲染逻辑纯净。如果重新渲染一个组件导致问题或产生一些显著的视觉工件,这是你的组件中的错误!修复错误而不是添加记忆化。</Text></li>
          <li>
            <Text mark strong>避免不必要的会更新状态的副作用。React 应用程序中的大多数性能问题都是由一连串源自更新状态的副作用引起的,导致你的组件一次又一次地渲染。</Text></li>
          <li>
            <Text mark strong>尽量移除副作用中的不必要依赖项。例如,与其记忆化,更简单的方法是将某个对象或函数移动到副作用内部或组件外部。</Text></li>
        </ol>
        <Text strong> 如果特定的交互仍然感觉卡顿,使用 React 开发者工具分析器查看哪些组件受益最多的记忆化,并在需要的地方添加记忆化。这些原则使你的组件更容易调试和理解,所以无论如何都好遵循它们。从长期来看,react正在研究自动进行记忆化来一次性解决这个问题</Text>
      </Paragraph>
      <Example />
    </>
  )
}
