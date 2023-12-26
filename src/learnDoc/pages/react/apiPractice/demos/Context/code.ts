export const ccode1 = `
import { useContext } from 'react';

function MyComponent() {
  const theme = useContext(ThemeContext);
  // ...
`;

export const ccode2 = `
import { useContext } from 'react';

function Button() {
  const theme = useContext(ThemeContext);
  // ...`;

export const ccode3 = `
function MyPage() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  );
}

function Form() {
  // ... 在内部渲染 buttons ...
}`;
export const ccode4 = `
import { createContext, useContext } from 'react';

const ThemeContext = createContext(null);

export default function MyApp() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  )
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className}>
      {children}
    </button>
  );
}
`;

export const ccode5 = `
function MyPage() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <Button onClick={() => {
        setTheme('light');
      }}>
       Switch to light theme
      </Button>
    </ThemeContext.Provider>
  );
}`;
export const ccode6 = `
<ThemeContext.Provider value="dark">
  ...
  <ThemeContext.Provider value="light">
    <Footer />
  </ThemeContext.Provider>
  ...
</ThemeContext.Provider>`;

export const ccode7 = `
function MyApp() {
  const [currentUser, setCurrentUser] = useState(null);

  function login(response) {
    storeCredentials(response.credentials);
    setCurrentUser(response.user);
  }

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      <Page />
    </AuthContext.Provider>
  );
}`;
export const ccode8 = `
import { useCallback, useMemo } from 'react';

function MyApp() {
  const [currentUser, setCurrentUser] = useState(null);

  const login = useCallback((response) => {
    storeCredentials(response.credentials);
    setCurrentUser(response.user);
  }, []);

  const contextValue = useMemo(() => ({
    currentUser,
    login
  }), [currentUser, login]);

  return (
    <AuthContext.Provider value={contextValue}>
      <Page />
    </AuthContext.Provider>
  );
}`;
export const ccode9 = `
// 🚩 不起作用：没有 value 作为 prop
<ThemeContext.Provider>
   <Button />
</ThemeContext.Provider>
// 如果你忘记了指定 value，它会像这样传值 value={undefined}。
// 你可能还错误地使用了一个不同的 prop 名：

// 🚩 不起作用：prop 应该是“value”
<ThemeContext.Provider theme={theme}>
   <Button />
</ThemeContext.Provider>

`;
export const ccode10 = `
// ✅ 传递 value 作为 prop
<ThemeContext.Provider value={theme}>
   <Button />
</ThemeContext.Provider>
`;

export const ccode11 = `
optimization: {
  moduleIds: 'deterministic'
}
`;
export const ccode12 = `
js
import Foo from './Foo';
import Bar from './Bar';
// 而 Foo 和 Bar 实际上是相同模块的两个副本,你可以设置:
js
resolve: {
  alias: {
    './Foo': './Bar'  // ./Bar 是模块的唯一副本
  }
}
`;
export const ccode13 = `
js
// webpack.config.js
module.exports = {
  plugins: [
    new HardSourceWebpackPlugin({
      cacheDirectory: 'node_modules/.cache/hard-source/[confighash]',
      environmentHash: {
        root: process.cwd(),
        directories: [],
        files: ['package-lock.json', 'yarn.lock']
      },  
      info: {
        level: 'debug'
      }
    })
  ]
}
`;
