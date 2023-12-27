import { ColumnsType } from "antd/es/table";
import { DataType } from "./types";
import { Space, Tag } from "antd";
import { Link } from "react-router-dom";
import ComponentSettleDown from "../learnDoc/pages/componentsDevelopment/ComponentSettleDown";
import { ReactNode } from "react";
import Demo1 from "./demo1";
import { HomeOutlined } from "@ant-design/icons";

export const breadItems = [
  {
    href: '/',
    title: <HomeOutlined />,
  },
  {
    title: (
      <>
        <span>示例详情</span>
      </>
    ),
  },
];

export const columns: ColumnsType<DataType> = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => <Link to={`/home/detail/demo${record.id}`}>{text}</Link>,
  },
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  // {
  //   title: '动作',
  //   key: 'action',
  //   render: (_, record) => (
  //     <Space size="middle">
  //       <a>查看</a>
  //     </Space>
  //   ),
  // },
];

export const detailMap: Record<string, ReactNode> = {
  "demo1": <Demo1 />
}

