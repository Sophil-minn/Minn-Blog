import React, { Suspense, lazy, useCallback, useState } from 'react'
import { Card, Checkbox, Collapse, Divider, Spin, Typography } from 'antd';
import { code1, code2 } from './code';
import Loading from '../../../../components/Loading';
// import Code from '../../../../components/Code';
// import ProductPage from './ProductPage';

const ProductPage = lazy(() => import('./ProductPage'));
const Code = lazy(() => import('../../../../components/Code'));

const { Title, Paragraph, Text } = Typography;

export default function Example() {
  const [activeKey, setActiveKey] = useState<string | string[]>();
  const onCardCollapse = (key: string | string[]) => {
    setActiveKey(key);
  };
  return (
    <div>
      <Title level={4} id="应用示例2.1">应用示例</Title>
      <Card bodyStyle={{ padding: 0 }}>
        <Collapse
          activeKey={activeKey}
          onChange={onCardCollapse}
          accordion
          items={[
            {
              key: '1',
              label: "示例",
              children: <Suspense fallback={<Spin tip="loading collapse" />}><ProductPage /></Suspense>,
            }
          ]}>
          <ProductPage />
        </Collapse>
      </Card>
      <Code value={code1} title="ProductPage" />
      <Code value={code2} title="ShippingForm" />
      <Paragraph>
        In this example, the ShippingForm component is artificially slowed down so that you can see what happens when a React component you’re rendering is genuinely slow. Try incrementing the counter and toggling the theme.
      </Paragraph>
      <Paragraph>
        在这个例子中,ShippingForm 组件的渲染被人为地减速,这样你就可以看到当你正在渲染的 React 组件真的很慢时会发生什么。尝试递增计数器和切换主题。
      </Paragraph>
      <Paragraph>Incrementing the counter feels slow because it forces the slowed down ShippingForm to re-render. That’s expected because the counter has changed, and so you need to reflect the user’s new choice on the screen.
      </Paragraph>
      <Paragraph>递增计数器感觉很慢,因为它迫使减速的 ShippingForm 重新渲染。这是预期的,因为计数器已经改变,所以你需要在屏幕上反映用户的新选择。
      </Paragraph>
      <Paragraph>Next, try toggling the theme. Thanks to useCallback together with memo, it’s fast despite the artificial slowdown! ShippingForm skipped re-rendering because the handleSubmit function has not changed. The handleSubmit function has not changed because both productId and referrer (your useCallback dependencies) haven’t changed since last render.
      </Paragraph>
      <Paragraph>接下来,尝试切换主题。由于 useCallback 与 memo 的结合,尽管人为减速,它的速度仍然很快!ShippingForm 跳过重新渲染,因为 handleSubmit 函数没有改变。handleSubmit 函数没有改变,因为产品 ID 和 referrer(你的 useCallback 依赖项)与上次渲染时一样。</Paragraph>
      <Paragraph>This creates a problem. Every reactive value must be declared as a dependency of your Effect. However, if you declare createOptions as a dependency, it will cause your Effect to constantly reconnect to the chat room</Paragraph>
      <Paragraph>
        这造成了一个问题。每一个反应值必须被声明为你的 Effect 的一个依赖项。然而,如果你将 createOptions 声明为一个依赖项,它将导致你的 Effect 不断地重新连接到聊天室。
      </Paragraph>
      <Paragraph>
        Quite often, code without memoization works fine. If your interactions are fast enough, you don’t need memoization.

        Keep in mind that you need to run React in production mode, disable React Developer Tools, and use devices similar to the ones your app’s users have in order to get a realistic sense of what’s actually slowing down your app.
      </Paragraph>
      <Paragraph>
        很多时候,没有记忆化的代码也能正常工作。如果你的交互足够快,你不需要记忆化。
        请记住,你需要在生产环境下运行 React,禁用 React Developer Tools,并使用与你的应用程序用户使用的设备相似的设备,以便实际地理解什么正在减慢你的应用程序。
        记忆化并不总是必要的。如果你的交互已经足够快,你就不需要记忆化。
        要想真正地理解什么正在影响你的应用程序性能,你需要:
        <ul>
          <li>在生产环境下运行 React,因为开发环境的额外检查会减慢应用程序。</li>
          <li>禁用 React 开发者工具,因为它也会减慢应用程序。</li>
          <li>使用与你的用户群类似的设备测试你的应用程序。如果你的用户主要使用廉价安卓手机,而你在高端 Macbook Pro 上开发和测试,那么你看到的性能很可能与用户的体验不符。</li>
          <li> 考虑用户的网络连接可能会如何影响加载时间和交互响应。</li>
        </ul>
        所以,在添加记忆化之前,仔细检查你的应用程序,确保性能问题不是由开发环境、高端设备或其他因素造成的。对大多数应用程序来说,没有记忆化也能良好工作,所以别过于依赖它。
      </Paragraph>


      <Title level={5}> Optimizing a custom Hook: </Title>
      <Paragraph>If you’re writing a custom Hook, it’s recommended to wrap any functions that it returns into useCallback:</Paragraph>

    </div>
  )
}
