export const code1 = `import { useRef } from 'react';

function MyComponent() {
  const intervalRef = useRef(0);
  const inputRef = useRef(null);
  // ...`;

export const code2 = `
  import { useRef } from 'react';

function Stopwatch() {
  const intervalRef = useRef(0);
  // ...

  `;
export const code3 = `
  function handleStartClick() {
    const intervalId = setInterval(() => {
      // ...
    }, 1000);
    intervalRef.current = intervalId;
  }`;
export const code4 = `
  function handleStopClick() {
    const intervalId = intervalRef.current;
    clearInterval(intervalId);
}`;
export const code5 = `
function MyComponent() {
  // ...
  // 🚩 不要在渲染期间写入 ref
  myRef.current = 123;
  // ...
  // 🚩 不要在渲染期间读取 ref
  return <h1>{myOtherRef.current}</h1>;
}`;
export const code6 = `
function MyComponent() {
  // ...
  useEffect(() => {
    // ✅ 你可以在 effects 中读取和写入 ref
    myRef.current = 123;
  });
  // ...
  function handleClick() {
    // ✅ 你可以在事件处理程序中读取和写入 ref
    doSomething(myOtherRef.current);
  }
  // ...
}`;

export const code7 = `
import { useRef } from 'react';

function MyComponent() {
  const inputRef = useRef(null);
  // ...`;
export const code8 = `
function handleClick() {
  inputRef.current.focus();
}`;

export const code9 = `
function Video() {
  const playerRef = useRef(new VideoPlayer());
  // ...`;
export const code10 = `
function Video() {
  const playerRef = useRef(null);
  if (playerRef.current === null) {
    playerRef.current = new VideoPlayer();
  }
  // ...`;
export const code11 = `
function Video() {
  const playerRef = useRef(null);
  function getPlayer() {
    if (playerRef.current !== null) {
      return playerRef.current;
    }
    const player = new VideoPlayer();
    playerRef.current = player;
    return player;
  }

  // ...`;
export const code12 = `
const inputRef = useRef(null);
return <MyInput ref={inputRef} />;`;
export const code13 = `
export default function MyInput({ value, onChange }) {
  return (
    <input
      value={value}
      onChange={onChange}
    />
  );
}
`;
export const code14 = `
import { forwardRef } from 'react';
const MyInput = forwardRef(({ value, onChange }, ref) => {
  return (e
    <input
      value={value}
      onChange={onChange}
      ref={ref}
    />
  );
});
export default MyInput;`;
