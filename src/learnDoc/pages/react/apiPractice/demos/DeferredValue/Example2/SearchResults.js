import { fetchData } from './data.js';

// 注意：此组件使用了一种实验性 API
// 该 API 尚未在稳定版本的 React 中发布。

// 如果想找实际的例子，可以尝试一个
// 已经集成了 suspense 的框架，比如 Relay 或 Next.js。

export default function SearchResults({ query }) {
  if (query === '') {
    return null;
  }
  const albums = use(fetchData(`/search?q=${query}`));
  if (albums.length === 0) {
    return <p>No matches for <i>"{query}"</i></p>;
  }
  return (
    <ul>
      {albums.map(album => (
        <li key={album.id}>
          {album.title} ({album.year})
        </li>
      ))}
    </ul>
  );
}

// 这是一个解决演示中的一个 bug 的临时实现。
// TODO：待 bug 修复后替换为真正的实现。
function use(promise) {
  if (promise.status === 'fulfilled') {
    return promise.value;
  } else if (promise.status === 'rejected') {
    throw promise.reason;
  } else if (promise.status === 'pending') {
    throw promise;
  } else {
    promise.status = 'pending';
    promise.then(
      result => {
        promise.status = 'fulfilled';
        promise.value = result;
      },
      reason => {
        promise.status = 'rejected';
        promise.reason = reason;
      },      
    );
    throw promise;
  }
}
