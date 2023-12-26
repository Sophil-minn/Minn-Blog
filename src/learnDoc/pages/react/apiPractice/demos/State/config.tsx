import { TabsProps } from "antd";
import ConciseUpdateLogic from "./Example/ConciseUpdateLogic";
import Form1 from "./Example/Form1";
import Form2 from "./Example/Form2";
import List from "./Example/List";

export const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Form (object)`,
    children: <Form1 />,
  },
  {
    key: '2',
    label: `Todo list (array) `,
    children: <Form2 />,
  },
  {
    key: '3',
    label: `Writing concise update logic with Immer`,
    children: <List />,
  },
  {
    key: '4',
    label: `Writing concise update logic with Immer`,
    children: <ConciseUpdateLogic />,
  },
];

