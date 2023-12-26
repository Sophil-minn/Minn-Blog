import { ColumnsType } from "antd/es/table";
import { DataType } from "./types";
import { Space, Tag } from "antd";

export const columns: ColumnsType<DataType> = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
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
  {
    title: '动作',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>查看</a>
      </Space>
    ),
  },
];