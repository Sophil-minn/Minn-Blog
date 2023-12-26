import { Button, Modal } from 'antd';
import { CANCEL, CONFIRM, ICON_FILTER_TYPE, RESET } from "./const";
import { memo, useMemo } from 'react';
import './index.scss';
import useModalHocMapData from './hooks/useModalHocMapData';

function ModalHoc(props: Record<string, any>) {
  const { iconType, isModalOpen, setIsModalOpen, setIconType, submit } = props;
  const { titleMap, contentMap, onHandle } = useModalHocMapData({ iconType, submit, setIsModalOpen, setIconType });
  const jsx = useMemo(() => contentMap[iconType], [contentMap, iconType]);
  return (
    <Modal
      open={isModalOpen}
      title={titleMap?.[iconType]}
      className='datasource-flexibility-realease__modal-hoc'
      onCancel={() => onHandle('cancel')}
      footer={[
        <Button key="back" onClick={() => onHandle(CANCEL)}> 取消</Button>,
        iconType === ICON_FILTER_TYPE && <Button
          key="reset"
          onClick={() => onHandle(RESET)}
        >
          重置
        </Button>,
        <Button key="submit" type="primary" loading={false} onClick={() => onHandle(CONFIRM)}>确定</Button>
      ]}
    >
      {jsx}
    </Modal>
  );
}


export default memo(ModalHoc);