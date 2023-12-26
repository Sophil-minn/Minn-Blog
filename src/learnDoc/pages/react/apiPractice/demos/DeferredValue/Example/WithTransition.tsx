import { Suspense, useDeferredValue, useState } from 'react';
import SearchResults from './SearchResults.js';
import { Card, Typography } from 'antd';

const { Title, Text } = Typography;

export default function WithTransition() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const isStale = query !== deferredQuery;
  return (
    <Card>
      <Title level={5}><Text type='success'>渐进式的过渡</Text></Title>
      <label>
        Search albums:
        <input value={query} onChange={e => setQuery(e.target.value)} />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}>
        <div style={{
          opacity: isStale ? 0.5 : 1,
          transition: isStale ? 'opacity 0.2s 0.2s linear' : 'opacity 0s 0s linear'
        }}>
          <SearchResults query={deferredQuery} />
        </div>
      </Suspense>
    </Card>
  );
}
