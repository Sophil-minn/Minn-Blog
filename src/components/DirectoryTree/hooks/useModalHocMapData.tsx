import { Form, List } from "antd";
import FormByConfig from "../../FormByConfig";
import { CANCEL, CONFIRM, ICON_ADD_DIR_TYPE, ICON_ADD_SQUARE_TYPE, ICON_ADD_TYPE, ICON_DIR_FOLD_TYPE, ICON_DIR_TYPE, ICON_FILTER_TYPE, RESET } from "../const";
import { optionsDirectory, optionsFilter } from "../config";
import { useState } from "react";

interface PropsType { type: string; submit: Function; setIsModalOpen: Function; setType: Function; }

export default function useModalHocMapData({ type, submit, setIsModalOpen, setType }: PropsType) {
  const [form] = Form.useForm();
  const [item, setItem] = useState();
  const onItemClick = (item: any) => {
    setItem(item);
  }

  const onFinish = (values: any) => {
    submit(values);
  }

  const onHandle = (btnType: string) => {
    if (btnType === CONFIRM) {
      if ([ICON_FILTER_TYPE, ICON_ADD_TYPE].includes(type)) {
        return form.submit();
      } else if ([ICON_ADD_DIR_TYPE].includes(type)) {
        return submit(item);
      }
      submit(contentMap[type])
    }
    if (btnType === RESET) {
      form.resetFields();
    }
    if (btnType === CANCEL) {
      setType(undefined);
      setIsModalOpen(false);
    }
  }

  const titleMap: Record<string, any> = {
    [ICON_FILTER_TYPE]: '筛选',
    [ICON_ADD_TYPE]: '新增目录',
    [ICON_ADD_DIR_TYPE]: '新增树目录节点',
    [ICON_ADD_SQUARE_TYPE]: '新增叶节点',
    [ICON_DIR_TYPE]: '文件夹',
    [ICON_DIR_FOLD_TYPE]: '未展开的文件夹',
  };

  const contentMap: Record<string, any> = {
    [ICON_FILTER_TYPE]: <FormByConfig spans={24} form={form} items={optionsFilter} onFinish={onFinish} />,
    [ICON_ADD_TYPE]: <FormByConfig spans={24} form={form} items={optionsDirectory} onFinish={onFinish} />,
    [ICON_ADD_DIR_TYPE]: <List
      size="small"
      bordered
      dataSource={['数据源', 'aaa', 'bbbc', 'ccc', 'ddd', 'eee', 'fff']}
      renderItem={(each) => <List.Item className={item === each ? "active" : ""} onClick={() => onItemClick(each)}>{each}</List.Item>}
    />,
    [ICON_ADD_SQUARE_TYPE]: '新增叶节点',
    [ICON_DIR_TYPE]: '你点击了文件夹icon',
    [ICON_DIR_FOLD_TYPE]: '你点击了未展开的文件夹',
  };
  return {
    titleMap,
    contentMap,
    onHandle
  }
}
