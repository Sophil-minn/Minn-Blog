import { Col, Input, Row, Space, Tooltip } from "antd";
import "./index.scss";
import MoreNav from "./MoreNav";
import { defaultGetPrefixCls } from "../../util/utils";
import ToGithub from "./ToGithub";
import Button from "../../components/Button";
import { navigationEntranceList } from "../../config/menuConfig";

const rclsHeader = defaultGetPrefixCls("header");
const rowCls = defaultGetPrefixCls("row");

export default function index() {
  return (
    <header className={rclsHeader}>
      <Row className={rowCls} justify={"space-between"}>
        <Col>
          <Space size={0}>
            {/* <Icon /> */}
            <Input
              placeholder="输入关键字搜索..."
              suffix={<Tooltip title="Extra information">cmannd k</Tooltip>}
            />
          </Space>
        </Col>
        <Col>
          <Space>
            <Button type="link">git</Button>
            <Button type="link">npm</Button>
            <Button type="link">webpack</Button>
            <Button type="link">node</Button>
            <MoreNav navigationList={navigationEntranceList} />
            <ToGithub />
          </Space>
        </Col>
      </Row>
    </header>
  );
}
