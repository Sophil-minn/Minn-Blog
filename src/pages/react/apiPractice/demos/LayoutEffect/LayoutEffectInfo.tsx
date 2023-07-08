import { FC } from 'react';
import { Card, Typography } from 'antd';
import { lazy } from 'react'
import { code1, code2, code3, code4 } from './code';

const SimpleCode = lazy(() => import('../../../../../components/SimpleCode'));
const { Title, Paragraph, Text } = Typography;

const LayoutEffectInfo: FC = () => {
  return (
    <>
      <Title level={3} id="useLayoutEffect">useLayoutEffect</Title>
      <Paragraph>
        <Title><Text type='danger'>陷阱</Text></Title>
        <Text type='warning'>useLayoutEffect 可能会影响性能。尽可能使用 useEffect。</Text>
      </Paragraph>
      <Paragraph>useLayoutEffect 是 useEffect 的一个版本，在浏览器重新绘制屏幕之前触发。</Paragraph>
      <SimpleCode value="useLayoutEffect(setup, dependencies?)" />
      <Title level={4}>参考</Title>∂
      <Paragraph>
        调用 useLayoutEffect 在浏览器重新绘制屏幕之前进行布局测量：
      </Paragraph>
      <SimpleCode value={code1} height={200} />
      <Title level={4}>参数</Title>
      <Paragraph>
        <ul>
          <li>setup：处理副作用的函数。setup 函数选择性返回一个清理（cleanup）函数。在将组件首次添加到 DOM 之前，React 将运行 setup 函数。在每次因为依赖项变更而重新渲染后，React 将首先使用旧值运行 cleanup 函数（如果你提供了该函数），然后使用新值运行 setup 函数。在组件从 DOM 中移除之前，React 将最后一次运行 cleanup 函数。</li>
          <li>可选 dependencies：setup 代码中引用的所有响应式值的列表。响应式值包括 props、state 以及所有直接在组件内部声明的变量和函数。如果你的代码检查工具 配置了 React，那么它将验证每个响应式值都被正确地指定为一个依赖项。依赖项列表必须具有固定数量的项，并且必须像 [dep1, dep2, dep3] 这样内联编写。React 将使用 Object.is 来比较每个依赖项和它先前的值。如果省略此参数，则在每次重新渲染组件之后，将重新运行副作用函数。</li>
        </ul>
      </Paragraph>
      <Title level={4}>返回值 </Title>
      <Paragraph>useLayoutEffect 返回 undefined。</Paragraph>
      <Title level={4}>注意事项 </Title>
      <Paragraph>
        <ul>
          <li>useLayoutEffect 是一个 Hook，因此只能在 组件的顶层 或自己的 Hook 中调用它。不能在循环或者条件内部调用它。如果你需要的话，抽离出一个组件并将副作用处理移动到那里。</li>
          <li>当 StrictMode 启用时，React 将在真正的 setup 函数首次运行前，运行一个额外的开发专有的 setup + cleanup 周期。这是一个压力测试，确保 cleanup 逻辑“映照”到 setup 逻辑，并停止或撤消 setup 函数正在做的任何事情。如果这导致一个问题，请实现清理函数。</li>
          <li>如果你的一些依赖项是组件内部定义的对象或函数，则存在这样的风险，即它们将 导致 Effect 重新运行的次数多于所需的次数。要解决这个问题，请删除不必要的 对象 和 函数 依赖项。你还可以 抽离状态更新 和 非响应式逻辑 到 Effect 之外。</li>
          <li>Effect 只在客户端上运行，在服务端渲染中不会运行。</li>
          <li>useLayoutEffect 内部的代码和所有计划的状态更新阻塞了浏览器重新绘制屏幕。如果过度使用，这会使你的应用程序变慢。如果可能的话，尽量选择 useEffect。</li>
        </ul>
      </Paragraph>
      <Title level={3} id="useLayoutEffectId">用法</Title>
      <Title level={4} id="Measuring-layout-before-the-browser-repaints-the-screen">在浏览器重新绘制屏幕前计算布局 </Title>
      <Paragraph>大多数组件不需要依靠它们在屏幕上的位置和大小来决定渲染什么。他们只返回一些 JSX，然后浏览器计算他们的 布局（位置和大小）并重新绘制屏幕。
      </Paragraph>
      <Paragraph>有时候，这还不够。想象一下悬停时出现在某个元素旁边的 tooltip。如果有足够的空间，tooltip 应该出现在元素的上方，但是如果不合适，它应该出现在下面。为了让 tooltip 渲染在最终正确的位置，你需要知道它的高度（即它是否适合放在顶部）。</Paragraph>
      <Paragraph>
        要做到这一点，你需要分两步渲染：
        <ul>
          <li>将 tooltip 渲染到任何地方（即使位置不对）。</li>
          <li>测量它的高度并决定放置 tooltip 的位置。</li>
          <li>把 tooltip 渲染放在正确的位置。</li>
        </ul>
        所有这些都需要在浏览器重新绘制屏幕之前完成。你不希望用户看到 tooltip 在移动。调用 useLayoutEffect 在浏览器重新绘制屏幕之前执行布局测量：
        <SimpleCode value={code2} height={120} />
      </Paragraph>
      <Paragraph>
        下面是这如何一步步工作的：
        <ul>
          <li>Tooltip 使用初始值 tooltipHeight = 0 进行渲染（因此 tooltip 可能被错误地放置）。</li>
          <li>React 将它放在 DOM 中，然后运行 useLayoutEffect 中的代码。</li>
          <li>useLayoutEffect 测量 了 tooltip 内容的高度，并立即触发重新渲染。</li>
          <li>使用实际的 tooltipHeight 再次渲染 Tooltip（这样 tooltip 的位置就正确了）。</li>
          <li>React 在 DOM 中对它进行更新，浏览器最终显示出 tooltip。</li>
        </ul>
      </Paragraph>
      <Title level={4}>示例</Title>
      <Card>
        <a href='https://codesandbox.io/s/v5c33z?file=/TooltipContainer.js&utm_medium=sandpack'>查看示例</a>
      </Card>
      <Paragraph><Text type='danger'>注意，即使 Tooltip 组件需要两次渲染（首先，使用初始值为 0 的 tooltipHeight 渲染，然后使用实际测量的高度渲染），你也只能看到最终结果。这就是为什么在这个例子中需要 useLayoutEffect 而不是 useEffect 的原因。让我们来看看下面的细节差别。</Text></Paragraph>
      <Title level={5}>useLayoutEffect vs useEffect</Title>
      <Paragraph>但是使用 useEffect 代替 useLayoutEffect。如果你使用的是速度较慢的设备，你可能注意到有时 tooltip 会“闪烁”，并且会在更正位置之前短暂地看到初始位置。</Paragraph>
      <Paragraph>为了使 bug 更容易重现，此版本在渲染期间人为地添加了延迟。React 将在处理 useEffect 内部的状态更新之前让浏览器绘制屏幕。结果，tooltip 会闪烁：
        <Card>
          <a href='https://codesandbox.io/s/old-night-2rv6r8?file=/App.js'>查看示例</a>
          使用 useLayoutEffect 编辑这个例子，可以观察到即使渲染速度减慢，它也会阻塞绘制。
        </Card>
      </Paragraph>
      <Title level={4}><Text type='danger'>注意</Text></Title>
      <Paragraph><Text type='danger'>两次渲染并阻塞浏览器绘制会影响性能。尽量避免这种情况。</Text></Paragraph>
      <Title level={3} id="useLayoutEffect-troubleshooting">疑难解答 </Title>
      <Title level={4} id="useLayoutEffect-does-nothing-on-the-server">我收到一个错误：“ useLayoutEffect 在服务端没有任何作用” </Title>
      <Paragraph>
        useLayoutEffect 的目的是让你的组件 使用布局信息来渲染：
        <ul>
          <li>渲染初始的内容。</li>
          <li>在 浏览器重新绘制屏幕之前 测量布局。</li>
          <li>使用所读取的布局信息渲染最终内容。</li>
        </ul>
        当你或你的框架使用 服务端渲染 时，你的 React 应用将在服务端渲染 HTML 以进行初始渲染。这使你可以在加载 JavaScript 代码之前显示初始的 HTML。
      </Paragraph>
      <Paragraph>问题是在服务器上没有布局信息。</Paragraph>
      <Paragraph>在 前面的示例 中，Tooltip 组件中的 useLayoutEffect 调用允许它根据内容高度正确定位自己的位置（高于或低于内容）。如果你试图将 Tooltip 作为服务端初始 HTML 的一部分渲染，那么这是不可能确定的。在服务端，还没有布局！因此，即使你在服务端渲染它，它的位置也会在 JavaScript 加载和运行之后在客户端上“跳动”。</Paragraph>
      <Paragraph>通常，依赖于布局信息的组件不需要在服务器上渲染。例如，在初始渲染时显示 Tooltip 可能就没有意义了。它是通过客户端交互触发的。</Paragraph>
      <Paragraph>
        然而，如果你遇到这个问题，你有几个不同的选择：
        <ol>
          <li>用 useEffect 替换 useLayoutEffect。React 可以在不阻塞绘制的情况下显示初始的渲染结果（因为初始的 HTML 将在 Effect 运行之前显示出来）。</li>
          <li>或者，将组件标记为仅客户端。这告诉 React 在服务端渲染时用一个 loading 降级（例如，一个 spinner 或者 glimmer）替换其内容到上方最近的 Suspense 边界。</li>
          <li>或者，只有在水合之后，使用 useLayoutEffect 渲染组件。保留一个初始化为 false 的 isMounted 布尔状态，并在 useEffect 调用中将其设置为 true。然后你的渲染逻辑就会像 return isMounted ? RealContent : FallbackContent  这样。在服务端和水合过程中，用户将看到 FallbackContent，它不应该调用 useLayoutEffect。然后 React 将用 RealContent 替换它，RealContent 仅在客户端上运行并且可以包含 useLayoutEffect 调用。</li>
          <li>如果你将组件与外部数据存储同步，并且依赖 useLayouteffect 的原因不同于测量布局，可以考虑使用 支持服务端渲染 的 useSyncExternalStore。</li>
        </ol>
      </Paragraph>
    </>
  );
};

export default LayoutEffectInfo;