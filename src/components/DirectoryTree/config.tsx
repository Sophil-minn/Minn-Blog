import React from "react";
import {
  SendOutlined,
  FolderOpenOutlined,
  ApiOutlined
} from "@ant-design/icons";

export const treeData = [
  {
    title: "描述UI",
    key: "0-0",
    icon: <FolderOpenOutlined />,
    children: [
      {
        title: "leaf 0-0",
        key: "0-0-0",
        isLeaf: true,
      },
      {
        title: "leaf 0-0",
        key: "0-0-0",
        isLeaf: true,
      },
      {
        title: "leaf 0-0",
        key: "0-0-0",
        isLeaf: true,
      },
      {
        title: "leaf 0-0",
        key: "0-0-0",
        isLeaf: true,
      },
      {
        title: "leaf 0-0",
        key: "0-0-0",
        isLeaf: true,
      },
      {
        title: "leaf 0-0",
        key: "0-0-0",
        isLeaf: true,
      },
      {
        title: "leaf 0-0",
        key: "0-0-0",
        isLeaf: true,
      },
    ]
  },
  {
    title: "添加交互",
    key: "0-1",
    children: [
      {
        title: "leaf 1-0",
        key: "0-1-0",
        isLeaf: true,
        icon: <ApiOutlined style={{ color: "#faad14" }} />
      },
      {
        title: "leaf 1-1",
        key: "0-1-1",
        isLeaf: true,
        icon: <SendOutlined style={{ color: "#1677ff" }} />
      }
    ]
  },
  {
    title: "状态管理",
    key: "0-2",
    children: [
      {
        title: "leaf 2-0",
        key: "0-2-0",
        isLeaf: true,
        icon: <ApiOutlined style={{ color: "#faad14" }} />
      },
      {
        title: "leaf 2-1",
        key: "0-2-1",
        isLeaf: true,
        icon: <SendOutlined style={{ color: "#1677ff" }} />
      }
    ]
  }
];