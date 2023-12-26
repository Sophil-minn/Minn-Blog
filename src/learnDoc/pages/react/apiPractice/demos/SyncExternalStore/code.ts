export const code1 = `
import { useSyncExternalStore } from 'react';
import { todosStore } from './todoStore.js';

function TodosApp() {
  const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);
  // ...
}`;
export const code2 = `
import { useSyncExternalStore } from 'react';
import { todosStore } from './todoStore.js';

function TodosApp() {
  const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);
  // ...
}`;
export const code3 = `
import { useSyncExternalStore } from 'react';

function ChatIndicator() {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot);
  // ...
}`;
export const code4 = `
function getSnapshot() {
  return navigator.onLine;
}`;
export const code5 = `
function subscribe(callback) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}`;
export const code6 = `
import { useSyncExternalStore } from 'react';
export function useOnlineStatus() {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot);
  return isOnline;
}
function getSnapshot() {
  // ...
}
function subscribe(callback) {
  // ...
}`;
export const code7 = `
import { useSyncExternalStore } from 'react';
export function useOnlineStatus() {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot);
  return isOnline;
}
function getSnapshot() {
  // ...
}
function subscribe(callback) {
  // ...
}`;
export const code8 = `
import { useSyncExternalStore } from 'react';
export function useOnlineStatus() {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return isOnline;
}
function getSnapshot() {
  return navigator.onLine;
}
function getServerSnapshot() {
  return true; // 服务端生成的 HTML 总是显示“在线”
}
function subscribe(callback) {
  // ...
}`;
export const code9 = `
function getSnapshot() {
  // 🔴 getSnapshot 不要总是返回不同的对象
  return {
    todos: myStore.todos
  };
}`;
export const code10 = `
function getSnapshot() {
  // ✅ 你可以返回不可变数据
  return myStore.todos;
}`;
export const code11 = `
function ChatIndicator() {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot);
  // 🚩 总是不同的函数，所以 React 每次重新渲染都会重新订阅
  function subscribe() {
    // ...
  }
  // ...
}`;
export const code12 = `
function ChatIndicator() {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot);
  // ...
}
// ✅ 总是相同的函数，所以 React 不需要重新订阅
function subscribe() {
  // ...
}`;
export const code13 = `
function ChatIndicator({ userId }) {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot);
  // ✅ 只要 userId 不变，都是同一个函数
  const subscribe = useCallback(() => {
    // ...
  }, [userId]);
  // ...
}`;
