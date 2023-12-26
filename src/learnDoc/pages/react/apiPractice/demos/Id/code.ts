export const code1 = `
import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();
  // ...`;
export const code2 = `
import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();
  // ...`;
export const code3 = `
<>
  <input type="password" aria-describedby={passwordHintId} />
  <p id={passwordHintId}>
</>`;
export const code4 = `
import { useId } from 'react';

export default function Form() {
  const id = useId();
  return (
    <form>
      <label htmlFor={id + '-firstName'}>名字：</label>
      <input id={id + '-firstName'} type="text" />
      <hr />
      <label htmlFor={id + '-lastName'}>姓氏：</label>
      <input id={id + '-lastName'} type="text" />
    </form>
  );
}
`;

export const code5 = `
<!DOCTYPE html>
<html>
  <head><title>My app</title></head>
  <body>
    <div id="root1"></div>
    <div id="root2"></div>
  </body>
</html>
`;
export const code6 = `
import { useId } from 'react';

function PasswordField() {
  const passwordHintId = useId();
  console.log('生成的 ID：', passwordHintId)
  return (
    <>
      <label>
        密码:
        <input
          type="password"
          aria-describedby={passwordHintId}
        />
      </label>
      <p id={passwordHintId}>
        密码应该包含至少 18 个字符
      </p>
    </>
  );
}

export default function App() {
  return (
    <>
      <h2>输入密码</h2>
      <PasswordField />
    </>
  );
}
`;
export const code7 = `
import { createRoot } from 'react-dom/client';
import App from './App.js';
import './styles.css';

const root1 = createRoot(document.getElementById('root1'), {
  identifierPrefix: 'my-first-app-'
});
root1.render(<App />);

const root2 = createRoot(document.getElementById('root2'), {
  identifierPrefix: 'my-second-app-'
});
root2.render(<App />);
`;