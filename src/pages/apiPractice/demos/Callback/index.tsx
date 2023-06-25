import React, { useCallback, useState } from 'react'
import { Checkbox, Divider, Typography } from 'antd';
import Code from '../../../../components/Code';
import { code1 } from './code';
import ProductPage from './ProductPage';

const { Title, Paragraph } = Typography;

export default function Callback() {
  const [isDark, setIsDark] = useState(false);
  const onChange = useCallback((e: any) => setIsDark(e.target.checked), []);
  return (
    <>
      <Title level={4}>Callback</Title>
      <Paragraph>useCallback 是一个 React Hook,它允许你在重渲染之间缓存函数的定义。</Paragraph>
      <Code value={code1} />
      <Title level={5}>示例</Title>
      {/* onChange={e => setIsDark(e.target.checked)} 每次都会渲染productPage */}
      <Title level={5}> Memoizing a function </Title>
      <Paragraph>
        用useMemo记忆化函数的使用很常见, 但是这看起来很笨拙!React 有一个特定的内置 Hook 专门用于此目的。使用 useCallback 包装你的函数,而不是 useMemo,以避免写一个额外的嵌套函数:
      </Paragraph>
      <>
        <label>
          <Checkbox
            type="checkbox"
            checked={isDark}
            onChange={onChange}
          />
          Dark mode
        </label>
        <Divider />


        <ProductPage
          referrer="wizard_of_oz"
          productId={123}
          theme={isDark ? 'dark' : 'light'}
        />

        <Title level={4}>Should you add useCallback everywhere? </Title>
        <Title level={5}>在实践中,你可以通过遵循以下几个原则使许多记忆化不必要: </Title>
        <Paragraph>

          <ul>
            <li>1. 当一个组件在视觉上包裹其他组件时,让它接受 JSX 作为子元素。然后,如果包装组件更新自己的状态,React 知道其子元素不需要重新渲染。</li>
            <li>2. 优先使用本地状态,不要将状态提升得比必要的更高。不要在树的顶端或全局状态库中保留表单和是否悬停在项目上的瞬态状态。</li>
            <li> 3. 保持你的渲染逻辑纯净。如果重新渲染一个组件导致问题或产生一些显著的视觉工件,这是你的组件中的错误!修复错误而不是添加记忆化。</li>
            <li> 4. 避免不必要的会更新状态的副作用。React 应用程序中的大多数性能问题都是由一连串源自更新状态的副作用引起的,导致你的组件一次又一次地渲染。</li>
            <li> 5. 尽量移除副作用中的不必要依赖项。例如,与其记忆化,更简单的方法是将某个对象或函数移动到副作用内部或组件外部。</li>
          </ul>
          如果特定的交互仍然感觉卡顿,使用 React 开发者工具分析器查看哪些组件受益最多的记忆化,并在需要的地方添加记忆化。这些原则使你的组件更容易调试和理解,所以无论如何都好遵循它们。
        </Paragraph>
        <Title level={5}>Preventing an Effect from firing too often  </Title>
        <Paragraph>This creates a problem. Every reactive value must be declared as a dependency of your Effect. However, if you declare createOptions as a dependency, it will cause your Effect to constantly reconnect to the chat room</Paragraph>
        <Title level={5}> Optimizing a custom Hook: </Title>
        <Paragraph>If you’re writing a custom Hook, it’s recommended to wrap any functions that it returns into useCallback:</Paragraph>
      </>
    </>
  )
}
