import { FC } from 'react';
import { Typography } from 'antd';
import { lazy } from 'react'
import { code1, code2, code3, code4, code5, code6, code7 } from './code';

const SimpleCode = lazy(() => import('../../../../components/SimpleCode'));
const { Title, Paragraph, Text } = Typography;

const IdInfo: FC = ({ }) => {
  return (
    <>
      <Title level={3} id="useId">useId</Title>
      <Paragraph>useId 是一个 React Hook，可以生成传递给无障碍属性的唯一 ID。</Paragraph>
      <SimpleCode value="const id = useId()" />
      <Paragraph>在组件的顶层调用 useId 生成唯一 ID：</Paragraph>
      <SimpleCode value={code1} height={100} />
      <Title level={4}>参数</Title>
      <Paragraph>useId 不带任何参数。</Paragraph>
      <Title level={4}>返回值 </Title>
      <Paragraph>useId 返回一个唯一的字符串 ID，与此特定组件中的 useId 调用相关联。</Paragraph>
      <Title level={4}><Text type="danger">注意事项</Text></Title>
      <Paragraph>
        <ul>
          <li>useId 是一个 Hook，因此你只能 在组件的顶层 或自己的 Hook 中调用它。你不能在内部循环或条件判断中调用它。如果需要，可以提取一个新组件并将 state 移到该组件中</li>
          <li>useId 不应该被用来生成列表中的 key。key 应该由你的数据生成</li>
        </ul>
      </Paragraph>
      <Title level={3} id="useIdId">用法</Title>
      <Paragraph>
        <Title level={4}><Text type='danger'>陷阱</Text></Title>
        <Text type='warning'>不要使用 useId 来生成列表中的 key。key 应该由你的数据生成。</Text>
        <Text type='warning'>使用服务端渲染时，useId 需要在服务器和客户端上有相同的组件树。如果你在服务器和客户端上渲染的树不完全匹配，生成的 ID 将不匹配。</Text>
      </Paragraph>
      <Title level={4} id="Generating-unique-IDs-for-accessibility-attributes">为无障碍属性生成唯一 ID</Title>
      <Paragraph>
        在组件的顶层调用 useId 生成唯一 ID：
        <SimpleCode value={code2} height={100} />
        你可以将 生成的 ID 传递给不同的属性：
        <SimpleCode value={code3} height={100} />
        在 React 中直接编写 ID 并不是一个好的习惯。一个组件可能会在页面上渲染多次，但是 ID 必须是唯一的！不要使用自己编写的 ID，而是使用 useId 生成唯一的 ID
      </Paragraph>
      <Title level={5}>为什么 useId 比递增计数器更好？</Title>
      <Paragraph>
        useId 的主要好处是 React 确保它能够与 服务端渲染一起工作。 在服务器渲染期间，你的组件生成输出 HTML。随后，在客户端，hydration 会将你的事件处理程序附加到生成的 HTML 上。由于 hydration，客户端必须匹配服务器输出的 HTML。
      </Paragraph>
      <Paragraph>
        使用递增计数器非常难以保证这一点，因为客户端组件被 hydrate 处理后的顺序可能与服务器 HTML 发出的顺序不匹配。通过调用 useId，你可以确保 hydration 正常工作，并且服务器和客户端之间的输出将匹配。
      </Paragraph>
      <Paragraph>
        在 React 内部，调用组件的“父路径”生成 useId。这就是为什么如果客户端和服务器的树相同，不管渲染顺序如何，“父路径”始终都匹配。
      </Paragraph>
      <Title level={4} id="Generating-IDs-for-several-related-elements">为多个相关元素生成 ID </Title>
      <Paragraph>如果你需要为多个相关元素生成 ID，可以调用 useId 来为它们生成共同的前缀：</Paragraph>
      <SimpleCode value={code4} height={150} />
      <Paragraph>可以使你避免为每个需要唯一 ID 的元素调用 useId。</Paragraph>
      <Title level={4} id="Specifying-a-shared-prefix-for-all-generated-IDs">为所有生成的 ID 指定共享前缀 </Title>
      <Paragraph>如果你在单个页面上渲染多个独立的 React 应用程序，请在 createRoot 或 hydrateRoot 调用中将 identifierPrefix 作为选项传递。这确保了由两个不同应用程序生成的 ID 永远不会冲突，因为使用 useId 生成的每个 ID 都将以你指定的不同前缀开头。</Paragraph>
      <SimpleCode value={code5} height={150} title="index.html" />
      <SimpleCode value={code6} height={450} title="App.js" />
      <SimpleCode value={code7} height={300} title="index.js" />
    </>
  );
};

export default IdInfo;


