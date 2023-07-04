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