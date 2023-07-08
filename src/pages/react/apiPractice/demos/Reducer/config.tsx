import { TabsProps } from "antd";
import Form from "./Example/Form";
import TodoList from "./Example/TodoList";
import ConciseUpdateLogic from "./Example/ConciseUpdateLogic";
import Initializer from "./Example/Initializer";
import Initial from "./Example/Initial";

export const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Form (object)`,
    children: <Form />,
  },
  {
    key: '2',
    label: `Todo list (array) `,
    children: <TodoList />,
  },
  {
    key: '3',
    label: `Writing concise update logic with Immer`,
    children: <ConciseUpdateLogic />,
  },
];
export const items2: TabsProps['items'] = [
  {
    key: '1',
    label: `Passing the initializer function`,
    children: <Initializer username="minn" />,
  },
  {
    key: '2',
    label: `Passing the initial state directly `,
    children: <Initial username="beibei" />,
  },
];

