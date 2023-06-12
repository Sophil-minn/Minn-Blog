import React from "react";
import {
  SendOutlined,
  FolderOpenOutlined,
  ApiOutlined
} from "@ant-design/icons";

export const treeData = [
  {
    title: "parent 0",
    key: "0-0",
    icon: <FolderOpenOutlined />,
    children: [
      {
        title: "leaf 0-1",
        key: "0-0-1",
        isLeaf: true,
        icon: <SendOutlined style={{ color: "#1677ff" }} />
      }
    ]
  },
  {
    title: "parent 1",
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
  }
];