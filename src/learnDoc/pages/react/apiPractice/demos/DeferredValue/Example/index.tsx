import { Suspense, useState } from 'react';
import SearchResults from './SearchResults.js';
import { Typography } from 'antd';
// import WithUseDefferredValue from './WithUseDefferredValue.js';
// import WithUseDefferredValue from './WithUseDefferredValue.js';

const { Title, Paragraph, Text } = Typography;

export default function Example() {
  const [query, setQuery] = useState('');
  return (
    <Suspense fallback="未使用useDeferredValue时">
      <Title level={5}><Text type='warning'>未使用useDeferredValue时</Text></Title>
      <label>
        Search albums:
        <input value={query} onChange={e => setQuery(e.target.value)} />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}>
        <SearchResults query={query} />
      </Suspense>
      <Title level={4}><Text type="danger">注意</Text></Title>
      <Paragraph>
        这个例子假设你使用了其中一个支持 Suspense 的数据源：
        <ul>
          <li>使用支持 suspense 的框架进行数据获取，例如 Relay 和 Next.js</li>
          <li>使用 lazy 懒加载组件代码</li>
        </ul>
        这个例子中，在获取搜索结果时，SearchResults 组件会 suspend。尝试输入 "a"，等待结果出现后，将其编辑为 "ab"。此时 "a" 的结果会被加载中的 fallback 替代。
      </Paragraph>
      {/* <WithUseDefferredValue /> */}
    </Suspense>
  );
}
