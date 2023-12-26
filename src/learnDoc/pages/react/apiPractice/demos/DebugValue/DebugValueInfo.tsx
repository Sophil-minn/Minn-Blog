import { Typography } from 'antd';
import { lazy } from 'react'
import { dCode1 } from './code';
import { useOnlineStatus } from './useOnlineStatus';

const SimpleCode = lazy(() => import('../../../../../components/SimpleCode'));
const { Title, Paragraph, Text } = Typography;

export default function DebugValueInfo() {
  const isOnline = useOnlineStatus();
  return (
    <>
      <Title level={3} id="useDebugValue">useDebugValue</Title>
      <Text>useDebugValue 是一个 React Hook，可以让你在 React 开发工具 中为自定义 Hook 添加标签</Text>
      <SimpleCode value="useDebugValue(value, format?)" />
      <Paragraph>在你的 自定义 Hook 的顶层调用 useDebugValue，以显示可读的调试值</Paragraph>
      <Title level={4}>参数</Title>
      <Paragraph>
        <ul>
          <li>value：你想在 React 开发工具中显示的值。可以是任何类型</li>
          <li>可选 format：它接受一个格式化函数。当组件被检查时，React 开发工具将用 value 作为参数来调用格式化函数，然后显示返回的格式化值（可以是任何类型）。如果不指定格式化函数，则会显示 value。
          </li>
        </ul>
      </Paragraph>
      <Title level={4}>返回值 </Title>
      <Paragraph>
        useDebugValue 没有返回值。
      </Paragraph>
      <Title level={3} id="useDebugValueId">用法</Title>
      <SimpleCode value={dCode1} height={160} />
      <Title level={4}><Text type='warning'>注意</Text></Title>
      <Paragraph>
        <Text type='danger'>
          不必为每个自定义 Hook 添加调试值。这对于那些作为共享库一部分、具有复杂的内部数据结构并且难以检查的自定义 Hook 更有价值。
        </Text>
      </Paragraph>
      <Title level={4}>延迟格式化调试值 </Title>
      <Paragraph>你也可以将一个格式化函数作为 useDebugValue 的第二个参数传入：</Paragraph>
      <SimpleCode value='useDebugValue(date, date => date.toDateString());' />
      <Paragraph>格式化函数将接收 调试值 作为参数，返回 格式化后的显示值。当你的组件被检查时，React 开发工具将调用此函数并显示其返回值。</Paragraph>
      <Paragraph>使用格式化函数，可以避免在组件没有被检查时运行可能开销较大的格式化逻辑。例如，如果 date 是一个日期值，则可以避免在每次渲染时都调用 toDateString() 方法</Paragraph>
      <Title level={4}>{isOnline ? '✅ Online' : '❌ Disconnected'}</Title>
    </>
  )
}
