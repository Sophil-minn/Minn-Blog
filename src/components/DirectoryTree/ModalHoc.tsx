import { Button, Form, List, Modal } from 'antd';
import { CANCEL, CONFIRM, ICON_ADD_DIR_TYPE, ICON_ADD_SQUARE_TYPE, ICON_ADD_TYPE, ICON_DIR_TYPE, ICON_FILTER_TYPE, RESET } from "./const";

import { optionsDirectory, optionsFilter } from './config';
import { useState } from 'react';
import './index.less';
import FormByConfig from '../FormByConfig';

const titleMap: Record<string, any> = {
  [ICON_FILTER_TYPE]: '筛选',
  [ICON_ADD_TYPE]: '新增目录',
  [ICON_ADD_DIR_TYPE]: '新增树目录节点',
  [ICON_ADD_SQUARE_TYPE]: '新增叶节点',
  [ICON_DIR_TYPE]: '文件夹',
} as const;

export default function ModalHoc(props: Record<string, any>) {
  const { type, isModalOpen, setIsModalOpen, setType } = props;
  const [form] = Form.useForm();
  const [item, setItem] = useState();
  const onHandle = (type: string) => {
    if (type === CONFIRM) {
      form.validateFields()
        .then(values => {
          console.log('values: ', values);
          // setLoading(false);
        }).catch((errorInfo) => {
          console.log('errorInfo: ', errorInfo);
        });
    }
    if (type === RESET) {
      form.resetFields();
    }
    if (type === CANCEL) {
      setType(undefined);
      setIsModalOpen(false);
    }
  }

  const onItemClick = (item: any) => {
    console.log('item: ', item);
    setItem(item);
  }

  const contentMap: Record<string, any> = {
    [ICON_FILTER_TYPE]: <FormByConfig spans={24} form={form} items={optionsFilter} />,
    [ICON_ADD_TYPE]: <FormByConfig spans={24} form={form} items={optionsDirectory} />,
    [ICON_ADD_DIR_TYPE]: <List
      size="small"
      bordered
      dataSource={['数据源', 'aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff']}
      renderItem={(each) => <List.Item className={item === each ? "active" : ""} onClick={() => onItemClick(each)}>{each}</List.Item>}
    />,
    [ICON_ADD_SQUARE_TYPE]: '新增叶节点',
    [ICON_DIR_TYPE]: '你点击了文件夹icon',
  } as const;

  return type && isModalOpen &&
    <Modal
      open={isModalOpen}
      title={titleMap?.[type]}
      className='datasource-flexibility-realease__modal-hoc'
      onCancel={() => onHandle('cancel')}
      footer={[
        <Button key="back" onClick={() => onHandle(CANCEL)}>
          取消
        </Button>,
        type === ICON_FILTER_TYPE && <Button
          key="reset"
          onClick={() => onHandle(RESET)}
        >
          重置
        </Button>,
        <Button key="submit" type="primary" loading={false} onClick={() => onHandle(CONFIRM)}>
          确定
        </Button>
      ]}
    >
      {contentMap[type]}
    </Modal>
}
