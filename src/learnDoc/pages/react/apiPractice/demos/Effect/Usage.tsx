import { Card, Typography } from 'antd';
import Examples from './Examples';
import { code10, code11, code12, code13, code14, code16, code2, code3, code6, code7, code8, code9 } from './code';
import Code from '../../../../../components/Code';
import Demo6 from './Examples/Demo6';
import Demo7 from './Examples/Demo7';
import Demo8 from './Examples/Demo8';
import Demo9 from './Examples/Demo9';
import { code15, code5 } from '../Callback/code';
import Demo10 from './Examples/Demo10';
const { Title, Paragraph, Text } = Typography;

export default function Usage() {
  return (
    <>
      <Title id='useEffectId' level={3}>用法</Title>
      <Title level={5} id="Connecting-to-an-external-system">连接到外部系统</Title>
      <Paragraph>有些组件需要与网络、某些浏览器 API 或第三方库保持连接，当它们显示在页面上时。这些系统不受 React 控制，所以称为外部系统。要 将组件连接到某个外部系统，请在组件的顶层调用 useEffect：
        你需要向 useEffect 传递两个参数：
        <ul>
          <li>一个 setup 函数 ，其 setup 代码 用来连接到该系统。它应该返回一个 清理函数（cleanup），其 cleanup 代码 用来与该系统断开连接。</li>
          <li>一个 依赖项列表，包括这些函数使用的每个组件内的值。</li>
          React 在必要时会调用 setup 和 cleanup，这可能会发生多次：
          <li>将组件挂载到页面时，将运行 setup 代码。</li>
          <li>重新渲染 依赖项 变更的组件后：首先，使用旧的 props 和 state 运行 cleanup 代码。然后，使用新的 props 和 state 运行 setup 代码。</li>
          <li>当组件从页面卸载后，cleanup 代码 将运行最后一次。</li>
        </ul>
        为了 帮助你发现 bug，在开发环境下，React 在运行 setup 之前会额外运行一次setup 和 cleanup。这是一个压力测试，用于验证 Effect 逻辑是否正确实现。如果这会导致可见的问题，那么你的 cleanup 函数就缺少一些逻辑。cleanup 函数应该停止或撤消 setup 函数正在执行的任何操作。一般来说，用户不应该能够区分只调用一次 setup（在生产环境中）与调用 setup → cleanup → setup 序列（在开发环境中）
      </Paragraph>
      <Paragraph>
        <Text type='danger'>注意:</Text>
        Effect 可以让你的组件与某些外部系统（比如聊天服务）保持同步。在这里，外部系统是指任何不受 React 控制的代码，例如：
        <ul>
          <li>由 setInterval() 和 clearInterval() 管理的定时器。</li>
          <li>使用 window.addEventListener() 和 window.removeEventListener() 的事件订阅。</li>
          <li>一个第三方的动画库，它有一个类似 animation.start() 和 animation.reset() 的 API。</li>
        </ul>
        <Text type='warning'>如果你没有连接到任何外部系统，你或许不需要 Effect。</Text>
      </Paragraph>
      <Examples />
      <Title level={5} id="Wrapping-Effects-in-custom-Hooks">在自定义 Hook 中封装 Effect </Title>
      <Paragraph>Effect 是一个 “逃生出口”：当你需要“走出 React 之外”或者当你的使用场景没有更好的内置解决方案时，你可以使用它们。如果你发现自己经常需要手动编写 Effect，那么这通常表明你需要为组件所依赖的通用行为提取一些 自定义 Hook。</Paragraph>
      <Paragraph>
        例如，这个 useChatRoom 自定义 Hook 把 Effect 的逻辑“隐藏”在一个更具声明性的 API 之后：
        <Code value={code2} />
        然后你可以像这样从任何组件使用它：
        <Code value={code3} />
        在 React 生态系统中，还有许多用于各种用途的优秀的自定义 Hook。
      </Paragraph>
      <Title level={4}>自定义 Hook 中封装 Effect 示例</Title>
      <Card title="定制 useChatRoom Hook"><Demo6 /></Card>
      <Card style={{ position: 'relative', overflow: 'hidden' }} title="定制 useWindowListener Hook"><Demo7 /></Card>
      <Card title="定制 useIntersectionObserver Hook"><Demo8 /></Card>
      <Title level={5} id="Controlling-a-non-React-widget">控制非 React 小部件</Title>
      <Paragraph>有时，你希望外部系统与你组件的某些 props 或 state 保持同步。</Paragraph>
      <Paragraph>例如，如果你有一个没有使用 React 编写的第三方地图小部件或视频播放器组件，你可以使用 Effect 调用该组件上的方法，使其状态与 React 组件的当前状态相匹配。此 Effect 创建了在 map-widget.js 中定义的 MapWidget 类的实例。当你更改 Map 组件的 zoomLevel prop 时，Effect 调用类实例上的 setZoom() 来保持同步</Paragraph>
      <Card title="控制非 React 小部件 示例">
        <Demo9 />
        在本例中，不需要 cleanup 函数，因为 MapWidget 类只管理传递给它的 DOM 节点。从树中删除 Map React 组件后，DOM 节点和 MapWidget 类实例都将被浏览器的 JavaScript 引擎的垃圾回收机制自动处理掉
      </Card>
      <Title level={5} id="Fetching-data-with-Effects">使用 Effect 请求数据 </Title>
      <Paragraph>你可以使用 Effect 来为组件请求数据。请注意，如果你使用框架，使用框架的数据请求方式将比在 Effect 中手动编写要有效得多。如果你想手动从 Effect 中请求数据，你的代码可能是这样的</Paragraph>
      <Code value={code5} height={300} />
      <Paragraph>
        <Text type='danger'>注意，ignore 变量被初始化为 false，并且在 cleanup 中被设置为 true。这样可以确保 你的代码不会受到“竞争条件”的影响：网络响应可能会以与你发送的不同的顺序到达。</Text>
      </Paragraph>
      <Card title="使用 Effect 请求数据 ">
        <Demo10 />
        直接在 Effect 中编写数据请求会显得重复，并且很难在以后添加缓存和服务端渲染等优化。使用自定义 Hook 更简单——不管是你自己的 Hook 还是由社区维护的 Hook。
      </Card>
      <Title level={5} id="Specifying-reactive-dependencies">Effect 中的数据请求有什么好的替代方法</Title>
      <Paragraph>
        在 Effect 中使用 fetch 是 请求数据的一种流行方式，特别是在完全的客户端应用程序中。然而，这是一种非常手动的方法，而且有很大的缺点：
        <ul>
          <li>Effect 不在服务器上运行。这意味着初始服务器渲染的 HTML 将只包含没有数据的 loading 状态。客户端电脑仅为了发现它现在需要加载数据，将不得不下载所有的脚本来渲染你的应用程序。这并不高效。</li>
          <li>在 Effect 中直接请求数据很容易导致“网络瀑布”。当你渲染父组件时，它会请求一些数据，再渲染子组件，然后重复这样的过程来请求子组件的数据。如果网络不是很快，这将比并行请求所有数据要慢得多。</li>
          <li>在 Effect 中直接请求数据通常意味着你不会预加载或缓存数据。例如，如果组件卸载后重新挂载，它不得不再次请求数据。</li>
          <li>这不符合工效学。在调用 fetch 时，需要编写大量样板代码，以避免像 竞争条件 这样的 bug。</li>
          这些缺点并不仅仅体现在 React 上，它可能出现在所有挂载时请求数据的地方。与路由一样，要做好数据请求并非易事，因此我们推荐以下方法：
          <li>如果使用 框架，请使用其内置的数据请求机制。现代的 React 框架集成了高效的数据请求机制，不会受到上述问题的影响。 否则，请考虑使用或构建客户端缓存。流行的开源解决方案包括 React Query、useSWR 和 React Router v6.4+。你也可以构建自己的解决方案，在这种情况下，你可以在掌控下使用 Effect，但也要添加逻辑来处理重复的请求、缓存响应和避免“网络瀑布”（通过预加载数据或将数据需求提升到路由层面）。</li>
          如果这两种方法都不适合你，你可以继续直接在 Effect 中请求数据。
        </ul>
      </Paragraph>
      <Title level={5} id="Specifying-reactive-dependencies">指定响应式依赖项</Title>
      <Paragraph>注意，你无法“选择” Effect 的依赖项。Effect 代码中使用的每个 响应式值 都必须声明为依赖项。你的 Effect 依赖列表是由周围代码决定的：
        <Code value={code5} />
        如果 serverUrl 或 roomId 任意一个发生变化，那么 Effect 将使用新的值重新连接到聊天室。
        响应式值 包括 props 和直接在组件内声明的所有变量和函数。由于 roomId 和 serverUrl 是响应式值，你不能将它们从依赖项中移除。如果你试图省略它们，并且你的代码检查工具针对 React 进行了正确的配置，那么代码检查工具会将它标记为需要修复的错误：
        <Code value={code6} />
        要删除一个依赖项，你需要 “证明”给代码检查工具，表明它 不需要 作为一个依赖项。例如，你可以将 serverUrl 声明移动到组件外面，以证明它不是响应式的，并且不会在重新渲染时发生变化：
        <Code value={code7} />
        现在 serverUrl 不再是一个响应式值（并且在重新渲染时也不会更改），它就不需要成为一个依赖项。如果 Effect 的代码不使用任何响应式值，则其依赖项列表应为空（[]）：
        <Code value={code8} />
        <Text type='danger'>依赖项为空数组的 Effect 不会在组件任何的 props 或 state 发生改变时重新运行。</Text>
      </Paragraph>
      <Title level={5}><Text type='danger'>如果你有一个现有的代码库，可能会有一些 Effect 像这样抑制了代码检查工具：</Text></Title>
      <Card>
        <Code value={code9} height={90} />
        当依赖项不匹配代码时，引入 bug 的风险很高。通过抑制代码检查工具，你“欺骗”了 React 关于你 Effect 所依赖的值。相反，证明它们是不必要的。</Card>
      <Title level={5} id="Updating-state-based-on-previous-state-from-an-Effect">在 Effect 中根据先前 state 更新 state </Title>
      <Paragraph>
        当你想要在 Effect 中根据先前的 state 更新 state 时，你可能会遇到问题：
        <Code value={code10} height={200} />
        因为 count  是一个响应式值，所以必须在依赖项列表中指定它。但是，这会导致 Effect 在每次 count 更改时再次执行 cleanup 和 setup。这并不理想。
        为了解决这个问题，将 c ={'>'} c + 1 状态更新器传递给 setCount：
        <Code value={code11} height={200} />
        现在，你传递的是 c ={'>'} c + 1 而不是 count + 1，因此 Effect 不再需要依赖于 count。由于这个修复，每次 count 更改时，它都不需要清理（cleanup）和设置（setup）间隔定时器。
      </Paragraph>
      <Title level={5} id="Removing-unnecessary-object-dependencies">删除不必要的对象依赖项</Title>
      <Paragraph>
        如果你的 Effect 依赖于在渲染期间创建的对象或函数，则它可能会频繁运行。例如，此 Effect 在每次渲染后都重新连接，因为 options 对象 每次渲染都不同： <Code value={code12} height={300} />
        避免使用渲染期间创建的对象作为依赖项。相反，在 Effect 内部创建对象：
        <Code value={code13} height={200} />
        现在你已经在 Effect 内部创建了 options 对象，因此 Effect 仅依赖于 roomId 字符串。
        通过此修复，在输入框中输入不会导致重新连接到聊天室。与会被重新创建的对象不同，像 roomId 这样的字符串只有在被设置为其它值时才会更改
      </Paragraph>
      <Title level={5} id="Removing-unnecessary-function-dependencies">删除不必要的函数依赖项 </Title>
      <Paragraph>如果你的 Effect 依赖于在渲染期间创建的对象或函数，则它可能会频繁运行。例如，此 Effect 在每次渲染后重新连接，因为 createOptions 函数 在每次渲染时都不同：
        <Code value={code14} height={300} />
        就其本身而言，在每次重新渲染时从头新建一个函数不是问题。你不需要优化它。但是，如果你将其用作 Effect 的依赖项，则会导致 Effect 在每次重新渲染后重新运行。
        避免使用在渲染期间创建的函数作为依赖项，请在 Effect 内部声明它
        <Code value={code15} height={300} />
        现在你在 Effect 内部定义了 createOptions 函数，这样 Effect 本身只依赖于 roomId 字符串。通过此修复，输入框的输入不会重新连接聊天室。与被重新创建的函数不同，像 roomId 这样的字符串除非你将其设置为其它值，否则它不会改变
      </Paragraph>
      <Title level={5} id="Reading-the-latest-props-and-state-from-an-Effect">从 Effect 读取最新的 props 和 state</Title>
      <Paragraph>Effect 事件不是响应式的，必须始终省略其作为 Effect 的依赖项。</Paragraph>
      <Title level={5} id="Displaying-different-content-on-the-server-and-the-client">在服务器和客户端上显示不同的内容</Title>

      <Paragraph>如果你的应用程序使用服务端（直接 或通过 框架）渲染，你的组件将会在两个不同的环境中渲染。在服务器上，它将渲染生成初始 HTML。在客户端，React 将再次运行渲染代码，以便将事件处理附加到该 HTML 上。这就是为什么要让 hydration 发挥作用，你的初始渲染输出必须在客户端和服务器上完全相同的原因。</Paragraph>
      <Paragraph>在极少数情况下，你可能需要在客户端上显示不同的内容。例如，如果你的应用从 localStorage 中读取某些数据，服务器上肯定不可能做到这一点。以下是这如何实现的：<Code value={code16} height={300} />
        当应用加载时，用户首先会看到初始渲染的输出。然后，当它加载完并进行 hydrate 时，Effect 将会运行并且将 didMount 设置为 true，从而触发重新渲染。这将切换到仅在客户端的渲染输出。Effect 不在服务器上运行，这就是为什么 didMount 在初始服务器渲染期间为 false 的原因。
      </Paragraph>
      <Paragraph>
        <Text type='danger'>谨慎使用此模式。请记住，网络连接速度较慢的用户将在相当长的时间内（可能是数秒钟）看到初始内容，因此你不希望对组件的外观进行突兀的更改。在许多情况下，你可以通过使用 CSS 条件性地显示不同的内容来避免这种需要。
        </Text>
      </Paragraph>
    </>
  )
}
