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
        <DropdownNav navigationItem={reactItems} />
        <DropdownNav navigationItem={vueItems} />
        <DropdownNav navigationItem={componentsItem} />
        <DropdownNav navigationItem={perfomanceItem} />
        <DropdownNav navigationItem={webpackItem} />
        <DropdownNav navigationItem={gitItem} />
        {/* <Button onClick={() => navigate('/components-development')}>组件开发</Button> */}
        {/* <Button onClick={() => navigate('/performance-optimization')}>性能优化</Button> */}
        {/* <Button onClick={() => navigate('/engineering')}>前端工程化</Button> */}
        {/* <Button onClick={() => navigate('/webpack')}>Webpack</Button> */}
        {/* <Button onClick={() => navigate('/git')}>Git</Button> */}
        <DropdownNav navigationItem={factoryItem} />
        {/* <DropdownNav navigationItem={softwareItem} title="软件工程篇" /> */}
        <MoreNav navigationList={navigationEntranceList} title="更多" />
        <ToGithub />
      </Space>
    </Col>
  );
}

export default memo(Menu);
