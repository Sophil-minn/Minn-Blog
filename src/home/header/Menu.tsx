import { Col, Space } from "antd";
import "./index.scss";
import MoreNav from "./MoreNav";
import ToGithub from "./ToGithub";
import { navigationEntranceList, perfomanceItem, reactItem, componentsItem, factoryItem, softwareItem } from "../../config/menuConfig";
import DropdownNav from "./DropdownNav";


export default function Menu() {
  return (
    <Col>
      <Space>
        <DropdownNav navigationItem={reactItem} title="react" />
        <DropdownNav navigationItem={componentsItem} title="组件开发" />
        <DropdownNav navigationItem={perfomanceItem} title="性能优化" />
        <DropdownNav navigationItem={factoryItem} title="前端工程化" />
        <DropdownNav navigationItem={softwareItem} title="软件工程篇" />
        <MoreNav navigationList={navigationEntranceList} title="更多" />
        <ToGithub />
      </Space>
    </Col>
  );
}
