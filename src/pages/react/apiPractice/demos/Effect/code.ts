export const code1 = `
import { useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);
  // ...
}
`;

export const code2 = `
function useChatRoom({ serverUrl, roomId }) {
  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId
    };
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, serverUrl]);
}`;
export const code3 = `
function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useChatRoom({
    roomId: roomId,
    serverUrl: serverUrl
  });
  // ...`;
export const code4 = `
import { useState, useEffect } from 'react';
import { fetchBio } from './api.js';

export default function Page() {
  const [person, setPerson] = useState('Alice');
  const [bio, setBio] = useState(null);

  useEffect(() => {
    let ignore = false;
    setBio(null);
    fetchBio(person).then(result => {
      if (!ignore) {
        setBio(result);
      }
    });
    return () => {
      ignore = true;
    };
  }, [person]);

  // ...`;

  export const code5 = `
  function ChatRoom({ roomId }) { // 这是一个响应式值
    const [serverUrl, setServerUrl] = useState('https://localhost:1234'); // 这也是一个响应式值
  
    useEffect(() => {
      const connection = createConnection(serverUrl, roomId); // 这个 Effect 读取这些响应式值
      connection.connect();
      return () => connection.disconnect();
    }, [serverUrl, roomId]); // ✅ 因此你必须指定它们作为 Effect 的依赖项
    // ...
  }`;
  export const code6 = `
  function ChatRoom({ roomId }) {
    const [serverUrl, setServerUrl] = useState('https://localhost:1234');
    
    useEffect(() => {
      const connection = createConnection(serverUrl, roomId);
      connection.connect();
      return () => connection.disconnect();
    }, []); // 🔴 React Hook useEffect 缺少依赖项：'roomId' 和 'serverUrl'
    // ...
  }`;
  export const code7 = `
  const serverUrl = 'https://localhost:1234'; // 不再是一个响应式值

function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]); // ✅ 所有声明的依赖项
  // ...
}`;
  export const code8 = `
  const serverUrl = 'https://localhost:1234'; // 不再是响应式值
const roomId = 'music'; // 不再是响应式值

function ChatRoom() {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, []); // ✅ 所有声明的依赖项
  // ...
}`;

  export const code9 = `
  useEffect(() => {
    // ...
    // 🔴 避免这样抑制代码检查工具：
    // eslint-ignore-next-line react-hooks/exhaustive-deps
  }, []);
  `;

  export const code10 = `
  function Counter() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCount(count + 1); // 你想要每秒递增该计数器...
      }, 1000)
      return () => clearInterval(intervalId);
    }, [count]); // 🚩 ... 但是指定 'count' 作为依赖项总是重置间隔定时器。
    // ...
  }
  `;

  export const code11 = `
  import { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(c => c + 1); // ✅ 传递一个 state 更新器
    }, 1000);
    return () => clearInterval(intervalId);
  }, []); // ✅现在 count 不是一个依赖项

  return <h1>{count}</h1>;
}
`;

  export const code12 = `
  const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  const options = { // 🚩 这个对象在每次渲染时都是从头创建的
    serverUrl: serverUrl,
    roomId: roomId
  };

  useEffect(() => {
    const connection = createConnection(options); // 它在 Effect 内部使用
    connection.connect();
    return () => connection.disconnect();
  }, [options]); // 🚩 因此，这些依赖在重新渲染时总是不同的
  // ...`;


export const code13 = `
useEffect(() => {
  const options = {
    serverUrl: serverUrl,
    roomId: roomId
  };
  const connection = createConnection(options);
  connection.connect();
  return () => connection.disconnect();
}, [roomId]);`;

export const code14 = `
function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  function createOptions() { // 🚩 此函数在每次重新渲染都从头开始创建
    return {
      serverUrl: serverUrl,
      roomId: roomId
    };
  }

  useEffect(() => {
    const options = createOptions(); // 它在 Effect 中被使用
    const connection = createConnection();
    connection.connect();
    return () => connection.disconnect();
  }, [createOptions]); // 🚩 因此，此依赖项在每次重新渲染都是不同的
  // ...`;
export const code15 = `
useEffect(() => {
  function createOptions() {
    return {
      serverUrl: serverUrl,
      roomId: roomId
    };
  }

  const options = createOptions();
  const connection = createConnection(options);
  connection.connect();
  return () => connection.disconnect();
}, [roomId]);`;

export const code16 = `
function MyComponent() {
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);
  }, []);

  if (didMount) {
    // ... 返回仅客户端的 JSX ...
  }  else {
    // ... 返回初始 JSX ...
  }
}`;

export const code17 = `
useEffect(() => {
  // 🔴 避免：cleanup 逻辑没有相应的 setup 逻辑
  return () => {
    doSomething();
  };
}, []);`;
export const code18 = `
useEffect(() => {
  const connection = createConnection(serverUrl, roomId);
  connection.connect();
  return () => {
    connection.disconnect();
  };
}, [serverUrl, roomId]);`;
