import { Col, Space } from "antd";
import "./index.scss";
import MoreNav from "./MoreNav";
import ToGithub from "./ToGithub";
import { navigationEntranceList, perfomanceItem, reactItems, componentsItem, factoryItem, gitItem, vueItems, webpackItem } from "../../config/menuConfig";
import DropdownNav from "./DropdownNav";
import { memo } from "react";


function Menu() {
  return (
    <Col>
      <Space>
        <DropdownNav navigationItem={factoryItem} />
        <DropdownNav navigationItem={reactItems} />
        <DropdownNav navigationItem={componentsItem} />
        <DropdownNav navigationItem={webpackItem} />
        <DropdownNav navigationItem={perfomanceItem} />
        <MoreNav navigationList={navigationEntranceList} title="更多" />
        <ToGithub />
      </Space>
    </Col>
  );
}

export default memo(Menu);
