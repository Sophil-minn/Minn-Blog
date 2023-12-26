import { Suspense, useDeferredValue, useState } from 'react';
import SearchResults from './SearchResults.js';
import { Typography } from 'antd';

const { Title, Paragraph, Text } = Typography;

export default function WithUseDefferredValue() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  return (
    <>
      <Title level={5}><Text type='success'>使用useDeferredValue时</Text></Title>
      <label>
        Search albums:
        <input value={query} onChange={e => setQuery(e.target.value)} />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}>
        <SearchResults query={deferredQuery} />
      </Suspense>
      <Paragraph>
        query 会立即更新，所以输入框将显示新值。然而，deferredQuery 在数据加载完成前会保留以前的值，因此 SearchResults 将暂时显示旧的结果。
      </Paragraph>
      <Paragraph>在下面的示例中，输入 "a"，等待结果加载完成，然后将输入框编辑为 "ab"。注意，现在你看到的不是 suspense fallback，而是旧的结果列表，直到新的结果加载完成</Paragraph>
    </>
  );
}
