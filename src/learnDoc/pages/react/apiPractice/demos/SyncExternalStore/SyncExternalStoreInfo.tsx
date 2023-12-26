import { Card, Typography } from 'antd';
import { lazy } from 'react'
import { code1, code10, code11, code12, code2, code3, code4, code5, code6, code7, code8, code9 } from './code';
import TodosApp from './Example/TodosApp';
import ChatIndicator from './Example/ChatIndicator';

const SimpleCode = lazy(() => import('../../../../../components/SimpleCode'));
const { Title, Paragraph, Text } = Typography;

export default function SyncExternalStoreInfo() {
  return (
    <>
      <Title level={3} id="useSyncExternalStore">useSyncExternalStore</Title>
      <Paragraph>useSyncExternalStore 是一个让你订阅外部 store 的 React Hook。</Paragraph>
      <SimpleCode value="const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)" />
      <Title level={4}>参考 </Title>
      <Paragraph>
        在组件顶层调用 useSyncExternalStore 以从外部 store 读取值。
        <SimpleCode value={code1} height={150} />
        它返回 store 中数据的快照。你需要传两个函数作为参数：
        <ul>
          <li>subscribe 函数应当订阅该 store 并返回一个取消订阅的函数。</li>
          <li>getSnapshot 函数应当从该 store 读取数据的快照。</li>
        </ul>
      </Paragraph>
      <Title level={4}>参数 </Title>
      <Paragraph>
        <ul>
          <li>subscribe：一个函数，接收一个单独的 callback 参数并把它订阅到 store 上。当 store 发生改变，它应当调用被提供的 callback。这会导致组件重新渲染。subscribe 函数会返回清除订阅的函数。</li>
          <li>getSnapshot：一个函数，返回组件需要的 store 中的数据快照。在 store 不变的情况下，重复调用 getSnapshot 必须返回同一个值。如果 store 改变，并且返回值也不同了（用 Object.is 比较），React 就会重新渲染组件。</li>
          <li>可选 getServerSnapshot：一个函数，返回 store 中数据的初始快照。它只会在服务端渲染时，以及在客户端进行服务端渲染内容的 hydration 时被用到。快照在服务端与客户端之间必须相同，它通常是从服务端序列化并传到客户端的。如果你忽略此参数，在服务端渲染这个组件会抛出一个错误。</li>
        </ul>
      </Paragraph>
      <Title level={4}>返回 </Title>
      <Paragraph>
        该 store 的当前快照，可以在你的渲染逻辑中使用。
      </Paragraph>
      <Title level={4}>警告 </Title>
      <Paragraph>
        <ul>
          <li>getSnapshot 返回的 store 快照必须是不可变的。如果底层 store 有可变数据，要在数据改变时返回一个新的不可变快照。否则，返回上次缓存的快照。</li>
          <li>如果在重新渲染时传入一个不同的 subscribe 函数，React 会用新传入的 subscribe 函数重新订阅该 store。你可以通过在组件外声明 subscribe 来避免。</li>
        </ul>
      </Paragraph>
      <Title level={3} id="useSyncExternalStoreId">用法</Title>
      <Title level={4} id="Subscribing-to-an-external-store">订阅外部 store</Title>
      <Paragraph>
        你的多数组件只会从它们的 props，state，以及 context 读取数据。然而，有时一个组件需要从一些 React 之外的 store 读取一些随时间变化的数据。这包括：
        <ul>
          <li>在 React 之外持有状态的第三方状态管理库</li>
          <li>暴露出一个可变值及订阅其改变事件的浏览器 API</li>
        </ul>
        在组件顶层调用 useSyncExternalStore 以从外部 store 读取值。
        <SimpleCode value={code2} height={150} />
        它返回 store 中数据的 快照。你需要传两个函数作为参数：
        <ul>
          <li>subscribe 函数应当订阅 store 并返回一个取消订阅函数。</li>
          <li>getSnapshot 函数应当从 store 中读取数据的快照。</li>
        </ul>
        React 会用这些函数来保持你的组件订阅到 store 并在它改变时重新渲染。
      </Paragraph>
      <Paragraph>
        例如，在下面的沙盒中，todosStore 被实现为一个保存 React 之外数据的外部 store。TodosApp 组件通过 useSyncExternalStore Hook 连接到外部 store。
        <Card title="todosStore">
          <TodosApp />
        </Card>
        <Text type='danger'>注意</Text>
        当可能的时候，我们推荐通过 useState 和 useReducer 使用内建的 React state 代替。如果你需要去集成已有的非 React 代码，useSyncExternalStore API 是很有用的。
      </Paragraph>
      <Title level={4} id="Subscribing-to-a-browser-API">订阅浏览器 API</Title>
      <Paragraph>
        添加 useSyncExternalStore 的另一个场景是当你想订阅一些由浏览器暴露的并随时间变化的值时。例如，假设你想要组件展示网络连接是否正常。浏览器通过一个叫做 navigator.onLine 的属性暴露出这一信息。
      </Paragraph>
      <Paragraph>
        这个值可能在 React 不知道的情况下改变，所以你应当通过 useSyncExternalStore 来读取它。
        <SimpleCode value={code3} height={100} />
        从浏览器 API 读取当前值，来实现 getSnapshot 函数：
        <SimpleCode value={code4} height={60} />
        接下来，你需要实现 subscribe 函数。例如，当 navigator.onLine 改变，浏览器触发 window 对象的 online 和 offline 事件，然后返回一个清除订阅的函数：
        <SimpleCode value={code5} height={150} />
        现在 React 知道如何从外部的 navigator.onLine API 读到这个值，以及如何订阅其改变。断开你的设备的网络，就可以观察到组件重新渲染了：
        <ChatIndicator />
      </Paragraph>
      <Title level={4} id="Extracting-the-logic-to-a-custom-Hook">把逻辑抽取到自定义 Hook</Title>
      <Paragraph>通常不会在组件里直接用 useSyncExternalStore，而是在自定义 Hook 里调用它。这使得你可以在不同组件里使用相同的外部 store。
      </Paragraph>
      <Paragraph>
        例如：这里自定义的 useOnlineStatus Hook 追踪网络是否在线：
        <SimpleCode value={code6} height={200} />
        现在不同的组件都可以调用 useOnlineStatus，而不必重复底层实现：
        <SimpleCode value={code7} height={260} />
      </Paragraph>
      <Title level={4} id="Adding-support-for-server-rendering">添加服务端渲染支持 </Title>
      <Paragraph>
        如果你的 React 应用使用 服务端渲染，你的 React 组件也会运行在浏览器环境之外来生成初始 HTML。这给连接到外部 store 造成了一些挑战：
        <ul>
          <li>如果你连接到一个浏览器特有的 API，因为它在服务端不存在，所以是不可行的。</li>
          <li>如果你连接到一个第三方 store，数据要在服务端和客户端之间相匹配。</li>
        </ul>
        为了解决这些问题，要传一个 getServerSnapshot 函数作为第三个参数给 useSyncExternalStore：
        <SimpleCode value={code8} height={260} />
        getServerSnapshot 函数与 getSnapshot 相似，但它只在两种情况下才运行：
        <ul>
          <li>在服务端生成 HTML 时。</li>
          <li>在客户端 hydration 时，即：当 React 拿到服务端的 HTML 并使其可交互。</li>
        </ul>
        这使得你能提供在应用可交互前可用的初始快照值。如果没有对服务器端渲染来说有意义的初始值，就省略这个参数来 强制客户端渲染。
      </Paragraph>
      <Title level={4}><Text type='danger'>注意</Text></Title>
      <Paragraph>
        确保客户端初始渲染与服务端渲染时 getServerSnapshot 返回完全相同的数据。例如，如果在服务端 getServerSnapshot 返回一些预先载入的 store 内容，你就需要把这些内容也传给客户端。一种方法是在服务端渲染时，生成 script 标签来设置像 window.MY_STORE_DATA 这样的全局变量，并在客户端 getServerSnapshot 内读取此全局变量。你的外部 store 应当提供如何这样做的说明。
      </Paragraph>
      <Title level={3} id="useSyncExternal-troubleshooting">疑难解答</Title>
      <Title level={4} id="The-result-of-getSnapshot-should-be-cached">遇到一个错误：“The result of getSnapshot should be cached”</Title>
      <Paragraph>
        这个错误意味着你的 getSnapshot 函数每次调用都返回了一个新对象，例如：
        <SimpleCode value={code9} height={120} />
        如果 getSnapshot 返回值不同于上一次，React 会重新渲染组件。这就是为什么，如果总是返回一个不同的值，会进入到一个无限循环，并产生这个报错。
      </Paragraph>
      <Paragraph>
        只有当确实有东西改变了，getSnapshot 才应该返回一个不同的对象。如果你的 store 包含不可变数据，可以直接返回此数据：
        <SimpleCode value={code10} height={120} />
        如果你的 store 数据是可变的，getSnapshot 函数应当返回一个它的不可变快照。这意味着 确实 需要创建新对象，但不是每次调用都如此。而是应当保存最后一次计算得到的快照，并且在 store 中的数据不变的情况下，返回与上一次相同的快照。如何决定可变数据发生了改变则取决于你的可变 store。
      </Paragraph>

      <Title level={4} id="My-subscribe-function-gets-called-after-every-re-render">我的 subscribe 函数每次重新渲染都被调用</Title>
      <Paragraph>
        这里的 subscribe 函数是在组件 内部 定义的，所以它每次渲染都不同：
        <SimpleCode value={code11} height={180} />
        如果重新渲染时你传一个不同的 subscribe 函数，React 会重新订阅你的 store。如果这造成了性能问题，因而你想避免重新订阅，就把 subscribe 函数移到外面：
        <SimpleCode value={code12} height={150} />
        或者，把 subscribe 包在 useCallback 里面以便只在某些参数改变时重新订阅：
        <SimpleCode value={code11} height={150} />
      </Paragraph>
    </>
  )
}


