export const code1 = `
import { useState } from 'react';

function MyComponent() {
  const [age, setAge] = useState(28);
  const [name, setName] = useState('Taylor');
  const [todos, setTodos] = useState(() => createTodos());
  // ...`;

  export const code2 = `
  const [name, setName] = useState('Edward');

function handleClick() {
  setName('Taylor');
  setAge(a => a + 1);
  // ...
`;

export const code3 = `
import { useState } from 'react';

function MyComponent() {
  const [age, setAge] = useState(42);
  const [name, setName] = useState('Taylor');
  // ...`;
export const code4 = `
function handleClick() {
  setName('Robin');
}`;
export const code5 = `
function handleClick() {
  setName('Robin');
  console.log(name); // Still "Taylor"!
}`;
export const code6 = `
function handleClick() {
  setAge(age + 1); // setAge(42 + 1)
  setAge(age + 1); // setAge(42 + 1)
  setAge(age + 1); // setAge(42 + 1)
}`;
export const code7 = `
function handleClick() {
  setAge(a => a + 1); // setAge(42 => 43)
  setAge(a => a + 1); // setAge(43 => 44)
  setAge(a => a + 1); // setAge(44 => 45)
}`;
export const code8 = `
// 🚩 不要像下面这样改变一个对象：
form.firstName = 'Taylor';`;
export const code9 = `
// ✅ 使用新对象替换 state
setForm({
  ...form,
  firstName: 'Taylor'
});`;
export const code10 = `
function TodoList() {
  const [todos, setTodos] = useState(createInitialTodos());
  // ...`;
export const code11 = `
function TodoList() {
  const [todos, setTodos] = useState(createInitialTodos);
  // ...`;
export const code12 = `
export default function CountLabel({ count }) {
  return <h1>{count}</h1>
}`;
export const code13 = `
function handleClick() {
  console.log(count);  // 0

  setCount(count + 1); // 请求使用 1 重新渲染
  console.log(count);  // 仍然是 0!

  setTimeout(() => {
    console.log(count); // 还是 0!
  }, 5000);
}`;
export const code14 = `
const nextCount = count + 1;
setCount(nextCount);

console.log(count);     // 0
console.log(nextCount); // 1`;
export const code15 = `
obj.x = 10;  // 🚩 错误：直接修改现有的对象
setObj(obj); // 🚩 不会发生任何事情`;
export const code16 = `
// ✅ 正确：创建一个新对象
setObj({
  ...obj,
  x: 10
});`;
export const code17 = `
// 🚩 错误：在渲染过程中调用事件处理函数
return <button onClick={handleClick()}>Click me</button>

// ✅ 正确：将事件处理函数传递下去
return <button onClick={handleClick}>Click me</button>

// ✅ 正确：传递一个内联函数
return <button onClick={(e) => handleClick(e)}>Click me</button>`;
export const code18 = `
function TodoList() {
  // 该函数组件会在每次渲染运行两次。

  const [todos, setTodos] = useState(() => {
    // 该初始化函数在初始化期间会运行两次。
    return createTodos();
  });

  function handleClick() {
    setTodos(prevTodos => {
      // 该更新函数在每次点击中都会运行两次
      return [...prevTodos, createTodo()];
    });
  }
  // ...`;
export const code19 = `
setTodos(prevTodos => {
  // 🚩 错误：改变 state
  prevTodos.push(createTodo());
});`;
export const code20 = `
setTodos(prevTodos => {
  // ✅ 正确：使用新状态替换
  return [...prevTodos, createTodo()];
});`;
export const code21 = `
const [fn, setFn] = useState(someFunction);

function handleClick() {
  setFn(someOtherFunction);
}`;
export const code22 = `
const [fn, setFn] = useState(() => someFunction);

function handleClick() {
  setFn(() => someOtherFunction);
}`;
