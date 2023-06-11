import { Col, Input, Space, Tooltip } from "antd";
import "./index.scss";
import Tag from "../../components/Tag";
import SVGImg from '../../img/command.png';
// import Icon from '@ant-design/icons';

export default function SearchInput() {
  return (
    <Col>
      <Space size={0}>
        {/* <Icon /> */}
        <Input
          placeholder="输入关键字搜索..."
          suffix={<div className="min-input-suffix">
            <Tag mColor='gray'>
              <img src={SVGImg} width={10} height={10} alt="command" />
            </Tag>
            <Tag mColor='gray'>K</Tag>
          </div>
          }
        />
      </Space>
    </Col>
  )
}