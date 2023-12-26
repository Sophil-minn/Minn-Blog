import { Col, Row, TreeNodeProps } from 'antd'
import ButtonHoc from './ButtonHoc'
import { ICON_DIR_TYPE, ICON_DIR_FOLD_TYPE } from './const';

// 树节点自定义
export default function TreeNode({ title, dirIconType, treeNodeIdActive, id, iconType, type, isExpand, onTreeNodeClickCallback }: TreeNodeProps) {
  const iconT = isExpand ? ICON_DIR_TYPE : ICON_DIR_FOLD_TYPE;
  return (
    <Row justify={'space-between'} gutter={16} wrap={false} className='custom-title'>
      <Col>
        {
          dirIconType && <ButtonHoc
            iconType={iconT}
            onClickCallback={() => onTreeNodeClickCallback?.(iconT, id)}
            active={(treeNodeIdActive === id && iconType === iconT)}
          />
        }
      </Col>
      <Col>
        {title}
      </Col>
      <Col>
        <ButtonHoc
          iconType={type}
          onClickCallback={() => onTreeNodeClickCallback?.(type, id)}
          active={iconType === type && treeNodeIdActive === id}
        />
      </Col>
    </Row>
  )
}
