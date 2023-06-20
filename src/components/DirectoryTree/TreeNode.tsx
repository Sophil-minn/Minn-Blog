import { Col, Row, TreeNodeProps } from 'antd'
import ButtonHoc from './ButtonHoc'
import { ICON_ACTIVE_MAP, ICON_MAP } from './config';
import { ICON_ADD_DIR_TYPE, ICON_DIR_TYPE } from './const';

// 树节点自定义
export default function TreeNode({ title, dirIconType, active = false, type, onClickCallback }: TreeNodeProps) {
  console.log('type: ', type);
  console.log('dirIconType: ', dirIconType);

  return (
    <Row justify={'space-between'} gutter={16} wrap={false} className='custom-title'>
      <Col>
        {
          dirIconType && <ButtonHoc
            iconType={ICON_DIR_TYPE}
          // active={active}
          />
        }
      </Col>
      <Col>
        {title}
      </Col>
      <Col>
        <ButtonHoc
          iconType={type}
          onClickCallback={() => onClickCallback?.(type)}
        // active={active}
        />
      </Col>
    </Row>
  )
}
