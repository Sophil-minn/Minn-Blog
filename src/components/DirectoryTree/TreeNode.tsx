import { Col, Row, TreeNodeProps } from 'antd'
import ButtonHoc from './ButtonHoc'
import { ICON_DIR_TYPE, ICON_DIR_FOLD_TYPE } from './const';

// 树节点自定义
export default function TreeNode({ title, dirIconType, iconType, type, isExpand, onTreeNodeClickCallback }: TreeNodeProps) {

  return (
    <Row justify={'space-between'} gutter={16} wrap={false} className='custom-title'>
      <Col>
        {
          dirIconType && <ButtonHoc
            iconType={isExpand ? ICON_DIR_TYPE : ICON_DIR_FOLD_TYPE}
            onClickCallback={() => onTreeNodeClickCallback?.(isExpand ? ICON_DIR_TYPE : ICON_DIR_FOLD_TYPE)}
            active={isExpand || iconType === ICON_DIR_FOLD_TYPE}
          />
        }
      </Col>
      <Col>
        {title}
      </Col>
      <Col>
        <ButtonHoc
          iconType={type}
          onClickCallback={() => onTreeNodeClickCallback?.(type)}
          active={iconType === type}
        />
      </Col>
    </Row>
  )
}
