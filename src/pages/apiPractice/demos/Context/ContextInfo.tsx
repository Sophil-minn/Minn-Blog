import { Card, Divider, Typography } from 'antd';
import { lazy } from 'react'
import SimpleCode from '../../../../components/SimpleCode';
import { ccode1, ccode10, ccode11, ccode12, ccode13, ccode2, ccode3, ccode4, ccode5, ccode6, ccode7, ccode8, ccode9 } from './code';
import ContextDemo from './ContextDemo';
import UpdateContext from './UpdateContext';
import UpdateDataByContext from './UpdateDataByContext';
import MultipleContexts from './MultipleContexts';
import MultipleContexts2 from './MultipleContexts2';
import ContextWithReducer from './ContextWithReducer';
import OverridingATheme from './OverridingATheme';
// import AutomaticallyNestedHeadings from './AutomaticallyNestedHeadings';

const Code = lazy(() => import('../../../../components/Code'));

const { Title, Paragraph, Text } = Typography;

export default function ContextInfo() {
  return (
    <>
      <Title level={2} id="useContext">useContext</Title>
      <Paragraph>
        useContext 是一个 React Hook，可以让你读取和订阅组件中的 context。
      </Paragraph>
      <SimpleCode value="const value = useContext(SomeContext)" height={30} />
      <Title level={3} id="useContext-Refenrence">参考</Title>
      <Paragraph>
        useContext(SomeContext)
        在组件的顶层调用 useContext 来读取和订阅 context
      </Paragraph>
      <Code value={ccode1} />
      <Title level={4}>参数</Title>
      <Paragraph>SomeContext：先前用 createContext 创建的 context。context 本身不包含信息，它只代表你可以提供或从组件中读取的信息类型。</Paragraph>
      <Title level={4}>返回值 </Title>
      <Paragraph>useContext 为调用组件返回 context 的值。它被确定为传递给树中调用组件上方最近的 SomeContext.Provider 的 value。如果没有这样的 provider，那么返回值将会是为创建该 context 传递给 createContext 的 defaultValue。返回的值始终是最新的。如果 context 发生变化，React 会自动重新渲染读取 context 的组件。</Paragraph>
      <Title level={4}>注意事项</Title>
      <Paragraph>
        <ul>
          <li>组件中的 useContext() 调用不受 同一 组件返回的 provider 的影响。相应的 Context.Provider需要位于调用 useContext() 的组件 之上。</li>
          <li>从 provider 接收到不同的 value 开始，React 自动重新渲染使用了该特定 context 的所有子级。先前的值和新的值会使用 Object.is 来做比较。使用 memo 来跳过重新渲染并不妨碍子级接收到新的 context 值。</li>
          <li>如果您的构建系统在输出中产生重复的模块（可能发生在符号链接中），这可能会破坏 context。通过 context 传递数据只有在用于传递 context 的 SomeContext 和用于读取数据的 SomeContext 是完全相同的对象时才有效，这是由 === 比较决定的。</li>
        </ul>
      </Paragraph>
      <Title level={2} id="useContext-Usage">用法</Title>
      <Title level={3} id="Passing-data-deeply-into-the-tree">向组件树深层传递数据 </Title>
      <Paragraph>在组件的最顶级调用 useContext 来读取和订阅 context。</Paragraph>
      <Code value={ccode2} />
      <Paragraph>useContext 返回你向 context 传递的 context value。为了确定 context 值，React 搜索组件树，为这个特定的 context 向上查找最近的 context provider。</Paragraph>
      <Paragraph>若要将 context 传递给 Button，请将其或其父组件之一包装到相应的 context provider：</Paragraph>
      <Code value={ccode3} />
      <Paragraph>provider 和 Button 之间有多少层组件并不重要。当 Form 中的任何位置的 Button 调用 useContext(ThemeContext) 时，它都将接收 "dark" 作为值。</Paragraph>
      <Title level={4}><Text type="danger">陷阱</Text></Title>
      <Paragraph>
        <Text type="danger">
          useContext() 总是在调用它的组件 上面 寻找最近的 provider。它向上搜索， 不考虑 调用 useContext() 的组件中的 provider。
        </Text>
      </Paragraph>
      <Code value={ccode4} title="theme context" />
      <Card bordered={false} title="ContextDemo示例"><ContextDemo /></Card>
      <Divider />
      <Title level={3} id="updateDataBycontext">通过 context 更新传递的数据 </Title>
      <Paragraph>通常，你会希望 context 随着时间的推移而改变。要更新 context，请将其与 state 结合。在父组件中声明一个状态变量，并将当前状态作为 context value 传递给 provider。</Paragraph>
      <Code value={ccode5} title="与 state 结合" />
      <Paragraph>现在 provider 中的任何一个 Button 都会接收到当前的 theme 值。如果调用 setTheme 来更新传递给 provider 的 theme 值，则所有 Button 组件都将使用新的值 'light' 来重新渲染。</Paragraph>
      <Card bordered={false} title="1、更新 context 的例子">
        <UpdateContext />
        <Paragraph>
          <Text type='danger'>注意，value="dark" 传递 "dark" 字符串，但 value='{'theme'}' 传递带有 JSX 花括号 的 JavaScript theme 变量的值。花括号还允许传递非字符串的 context 值。</Text>
        </Paragraph>

      </Card>
      <Card bordered={false} title="2. 通过 context 更新对象">
        <Paragraph>
          在这个例子中，有一个 currentUser 状态变量，它包含一个对象。将 '{'currentUser, setCurrentUser'}' 组合成一个对象，并通过 context 在 value={ } 中向下传递。这允许下面的任何组件，如 LoginButton，同时读取 currentUser 和 setCurrentUser，然后在需要时调用 setCurrentUser。
        </Paragraph>
        <UpdateDataByContext />
      </Card>
      <Card bordered={false} title="3. Multiple contexts">
        <Paragraph>
          随着你的应用增长，预计你会有一个像“金字塔”一样的 context 出现在靠近你应用的根部。这样没什么问题。然而，如果你从审美上不喜欢这种嵌套，你可以将 provider 抽离成单独的组件。在这个例子中，MyProviders 隐藏了“管路”，并且在需要的 provider 中渲染传递给它的子节点。请注意，MyApp 本身需要 theme 和 setTheme 状态，因此 MyApp 仍然拥有这部分的状态。
        </Paragraph>
        <MultipleContexts />
      </Card>
      <Card bordered={false} title="4. 把 provider 抽离成组件">
        <Paragraph>
          在这个例子中，存在两个独立的 context。ThemeContext 提供了当前的主题，它是一个字符串，而 CurrentUserContext 保存了代表当前用户的对象。
        </Paragraph>
        <MultipleContexts2 />
      </Card>
      <Card bordered={false} title="5. 使用 context 和 reducer 进行扩展">
        <Paragraph>
          在大型应用程序中，通常将 context 和 reducer 结合起来从组件中抽离与某种状态相关的逻辑。在本例中，所有的“线路”都隐藏在 TasksContext.js 中，它包含一个 reducer 和两个单独 context。
        </Paragraph>
        <ContextWithReducer />
      </Card>
      <Divider />
      <Title level={3} id="Specifying-a-fallback-default-value">指定回退默认值 </Title>
      <Paragraph>
        如果 React 没有在父树中找到该特定 context 的任何 provider，useContext() 返回的 context 值将等于你在 创建 context 时指定的 默认值：<SimpleCode value="const ThemeContext = createContext(null);" height={30} />
      </Paragraph>

      <Paragraph>
        默认值 从不改变。如果你想要更新 context，通常，除了 null，还有一些更有意义的值可以用作默认值，例如：
        <SimpleCode value="const ThemeContext = createContext('light');" height={30} />
        这样，如果你不小心渲染了没有相应 provider 的某个组件，它也不会出错。这也有助于你的组件在测试环境中很好地运行，而无需在测试中设置许多 provider。
      </Paragraph>
      <Title level={3} id="overiddingExample">覆盖组件树一部分的 context</Title>
      <Paragraph>
        通过在 provider 中使用不同的值包装树的某个部分，可以覆盖该部分的 context。
        <SimpleCode value={ccode6} height={160} />
        你可以根据需要多次嵌套和覆盖 provider。
      </Paragraph>
      <Card bordered={false} title="覆盖主题例子">
        <Paragraph>
          这里，与 Footer 外的值为（"dark"）的按钮相比，里面 的按钮接收到一个不一样的 context 值（"light"）。
        </Paragraph>
        <OverridingATheme />
      </Card>
      <Card bordered={false} title="自动嵌套标题">
        <Paragraph>
          在嵌套使用 context provider 时，可以“累积”信息。在此示例中，Section 组件记录了 LevelContext，该 context 指定了 section 嵌套的深度。它从父级 section 中读取 LevelContext，然后把 LevelContext 的数值加一传递给子级。因此，Heading 组件可以根据被 Section 组件嵌套的层数自动决定使用 ，1,2,3,4,5…，中的哪种标签。
        </Paragraph>
        {/* <AutomaticallyNestedHeadings /> */}
      </Card>
      <Divider />
      <Title level={3} id="Optimizing-re-renders-when-passing-objects-and-functions">在传递对象和函数时优化重新渲染 </Title>
      <Paragraph>
        你可以通过 context 传递任何值，包括对象和函数。
        <Code value={ccode7} height={200} title="通过 context 传递任何值" />
        此处，context value 是一个具有两个属性的 JavaScript 对象，其中一个是函数。每当 MyApp 出现重新渲染（例如，路由更新）时，这里将会是一个 不同的 对象指向 不同的 函数，因此 React 还必须重新渲染树中调用 useContext(AuthContext) 的所有组件。
      </Paragraph>
      <Paragraph>
        在较小的应用程序中，这不是问题。但是，如果基础数据如 currentUser 没有更改，则不需要重新渲染它们。为了帮助 React 利用这一点，你可以使用 useCallback 包装 login 函数，并将对象创建包装到 useMemo 中。这是一个性能优化的例子：
        <Code value={ccode8} height={380} title='性能优化的例子' />
        根据以上改变，即使 MyApp 需要重新渲染，调用 useContext(AuthContext) 的组件也不需要重新渲染，除非 currentUser 发生了变化
      </Paragraph>
      <Title level={3} id="useContext-Troubleshooting">疑难解答</Title>
      <Title level={4}>我的组件获取不到 provider 传递的值</Title>
      <Paragraph>
        这里有几种常见的情况会引起这个问题：
        <ul>
          <li>你在调用 useContext() 的同一组件（或下层）渲染 {'<'}SomeContext.Provider'{'>'}'。把{'<'}SomeContext.Provider'{'>'}' 向调用 useContext() 组件 之上和之外 移动。</li>
          <li>你可能忘记了使用  {'<'}SomeContext.Provider{'>'} 包装组件，或者你可能将组件放在树的不同部分。使用 React DevTools 检查组件树的层级是否正确。</li>
          <li>你的工具可能会遇到一些构建问题，导致你在传值组件中的所看到的 SomeContext 和读值组件中所看到的 SomeContext 是两个不同的对象。例如，如果使用符号链接，就会发生这种情况。你可以通过将它们赋值给全局对象如 window.SomeContext1 和 window.SomeContext2 来验证这种情况。然后在控制台检查 window.SomeContext1 === window.SomeContext2 是否相等。如果它们是不相等的，就在构建工具层面修复这个问题。</li>
        </ul>
      </Paragraph>
      <Title level={4}>尽管设置了不一样的默认值，但是我总是从 context 中得到 undefined </Title>
      <Paragraph>
        你可能在组件树中有一个没有设置 value 的 provider：
        <Code value={ccode9} height={200} />
        在这两种情况下，你都应该在控制台中看到 React 发出的警告。要解决这些问题，使用 value 作为 prop：
        <SimpleCode value={ccode10} height={150} />
      </Paragraph>
      <Paragraph>
        要在构建输出中产生相同的模块实例,你有几个选择:
        <ol>
          <li> 使用 webpack 的 optimization.moduleIds: 'deterministic'
            这会使 webpack 为各个模块分配固定的 ID,而不是每次构建随机生成。这确保每次构建中模块的 ID 都是相同的。
            在 webpack 配置中添加:
            <SimpleCode value={ccode11} height={60} />
          </li>
          <li> 使用 webpack 的 resolve.alias
            你可以为导致重复模块的路径设置 resolve.alias。例如,如果你有:
            <SimpleCode value={ccode12} height={200} />
          </li>
          <li>这样,无论你导入 './Foo' 还是 './Bar',你都会得到同一个模块实例。
            3. 在构建过程中使用硬链接
            你可以在构建过程中为重复模块创建硬链接,这使得 webpack 认为它们是同一个模块:
            <Code value={ccode13} height={300} />
            hard-source-webpack-plugin 会检测重复的模块,并为它们创建硬链接,以确保 webpack 将它们视为同一个模块。
          </li>
          <li>使用 webpack 的热更新: 在开发过程中,webpack 的 hot 模块更替功能可以确保在每次构建中使用相同的模块实例。
            所以在生产构建中,使用上述的 optimization.moduleIds: 'deterministic' 选项可以达到类似的目的。
            我希望这些方法可以帮助你构建输出中产生更加一致的模块实例,以解决 context API 或其他依赖对象相等性的问题
          </li>
        </ol>

      </Paragraph>
    </>
  )
}
