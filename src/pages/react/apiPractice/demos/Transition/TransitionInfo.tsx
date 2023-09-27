import { FC } from "react";
import { Card, Typography } from "antd";
import { lazy } from "react";
import { code1, code2, code3, code4 } from "./code";
import App from "./Example/App";
import App2 from "./Example/App2";
// import { code1, } from './code';

const SimpleCode = lazy(() => import("../../../../../components/SimpleCode"));
const { Title, Paragraph, Text } = Typography;

export default function TransitionInfo() {
  return (
    <>
      <Title level={3}>useTransition</Title>
      <Paragraph>
        useTransition 是一个帮助你在不阻塞 UI 的情况下更新状态的 React Hook。
      </Paragraph>
      <SimpleCode value="const [isPending, startTransition] = useTransition();" />
      <Title level={3}>参考</Title>
      <Paragraph>
        在组件顶层调用 useTransition，将某些状态更新标记为 transition。
      </Paragraph>
      <SimpleCode value={code1} />
      <Title level={3}>参数</Title>
      <Paragraph>useTransition 不需要任何参数。</Paragraph>
      <Title level={3}>返回值 </Title>
      <Paragraph>
        useTransition 返回一个由两个元素组成的数组：
        <ul>
          <li>isPending，告诉你是否存在待处理的 transition。</li>
          <li>
            startTransition 函数，你可以使用此方法将状态更新标记为 transition。
          </li>
        </ul>
      </Paragraph>
      <Title level={3}>startTransition 函数 </Title>
      <Paragraph>
        useTransition 返回的 startTransition 函数允许你将状态更新标记为
        transition。
      </Paragraph>
      <SimpleCode value={code2} />
      <Title level={3}>参数</Title>
      <Paragraph>
        作用域（scope）：一个通过调用一个或多个 set 函数 更新状态的函数。React
        会立即不带参数地调用此函数，并将在 scope
        调用期间将所有同步安排的状态更新标记为
        transition。它们将是非阻塞的，并且 不会显示不想要的加载指示器。
      </Paragraph>
      <Title level={3}>返回值</Title>
      <Paragraph>startTransition 不返回任何值。</Paragraph>
      <Title level={3}>注意 </Title>
      <Paragraph>
        <ul>
          <li>
            useTransition 是一个 Hook，因此只能在组件或自定义 Hook
            内部调用。如果需要在其他地方启动
            transition（例如从数据库），请调用独立的 startTransition 函数。
          </li>
          <li>
            只有在可以访问该状态的 set 函数时，才能将其对应的状态更新包装为
            transition。如果你想启用 transition 以响应某个 prop 或自定义 Hook
            值，请尝试使用 useDeferredValue。
          </li>
          <li>
            传递给 startTransition 的函数必须是同步的。React
            会立即执行此函数，并将在其执行期间发生的所有状态更新标记为
            transition。如果在其执行期间，尝试稍后执行状态更新（例如在一个定时器中执行状态更新），这些状态更新不会被标记为
            transition。
          </li>
          <li>
            标记为 transition 的状态更新将被其他状态更新打断。例如在 transition
            中更新图表组件，并在图表组件仍在重新渲染时继续在输入框中输入，React
            将首先处理输入框的更新，之后再重新启动对图表组件的渲染工作。
          </li>
          <li>transition 更新不能用于控制文本输入。</li>
          <li>
            目前，React 会批处理多个同时进行的
            transition。这是一个限制，可能会在未来版本中删除。
          </li>
        </ul>
      </Paragraph>

      <Title level={2}>用法 </Title>
      <Title level={3}>将状态更新标记为非阻塞的 transition </Title>
      <Paragraph>
        在组件的顶层调用 useTransition 以将状态更新标记为非阻塞的 transition。
      </Paragraph>
      <SimpleCode value={code3} />
      <Paragraph>
        useTransition 返回一个由两个元素组成的数组：
        <ul>
          <li>isPending，告诉你是否存在待处理的 transition。</li>
          <li>
            startTransition 函数，你可以使用此方法将状态更新标记为 transition。
          </li>
        </ul>
        你可以按照以下方式将状态更新标记为 transition：
        <SimpleCode value={code4} />
        transition 可以使用户界面的更新在慢速设备上仍保持响应性。 通过
        transition，UI
        仍将在重新渲染过程中保持响应性。例如用户点击一个选项卡，但改变了主意并点击另一个选项卡，他们可以在不等待第一个重新渲染完成的情况下完成操作。
      </Paragraph>
      <Title level={2}>使用 useTransition 与常规状态更新的区别 </Title>
      <Paragraph>在 transition 中更新当前选项卡</Paragraph>
      <App />
      <Paragraph>在 不使用transition 中更新当前选项卡</Paragraph>
      <App2 />
    </>
  );
}
