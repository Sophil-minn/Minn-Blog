import { Form, List } from "antd";
import FormByConfig from "../../FormByConfig";
import { CANCEL, CONFIRM, ICON_ADD_DIR_TYPE, ICON_ADD_SQUARE_TYPE, ICON_ADD_TYPE, ICON_DIR_FOLD_TYPE, ICON_DIR_TYPE, ICON_FILTER_TYPE, RESET } from "../const";
import { getContentMap, optionsDirectory, optionsFilter, titleMap } from "../config";
import { useState } from "react";

interface PropsType { iconType: string; submit: Function; setIsModalOpen: Function; setIconType: Function; }

export default function useModalHocMapData({ iconType, submit, setIsModalOpen, setIconType }: PropsType) {
  const [form] = Form.useForm();
  const [item, setItem] = useState();
  const onItemClick = (item: any) => {
    setItem(item);
  }
  const onFinish = (values: any) => {
    submit(values);
  }

  const contentMap = getContentMap({ form, onItemClick, onFinish, item }) as any;

  const onHandle = (btnType: string) => {
    if (btnType === CONFIRM) {
      if ([ICON_FILTER_TYPE, ICON_ADD_TYPE].includes(iconType)) {
        return form.submit();
      } else if ([ICON_ADD_DIR_TYPE].includes(iconType)) {
        return submit(item);
      }
      submit(contentMap[iconType])
    }
    if (btnType === RESET) {
      form.resetFields();
    }
    if (btnType === CANCEL) {
      setIconType(undefined);
      setIsModalOpen(false);
    }
  }

  return {
    titleMap,
    contentMap,
    onHandle
  }
}
