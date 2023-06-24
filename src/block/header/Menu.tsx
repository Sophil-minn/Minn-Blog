import { Col, Space } from "antd";
import "./index.scss";
import MoreNav from "./MoreNav";
import ToGithub from "./ToGithub";
import { navigationEntranceList, perfomanceItem, reactItems, componentsItem, factoryItem, gitItem, vueItems, webpackItem } from "../../config/menuConfig";
import DropdownNav from "./DropdownNav";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";


export default function Menu() {
  const navigate = useNavigate();
  return (
    <Col>
      <Space>
        <DropdownNav navigationItem={reactItems} title="react" />
        <DropdownNav navigationItem={vueItems} title="vue" />
        <DropdownNav navigationItem={componentsItem} title="组件开发" />
        <DropdownNav navigationItem={perfomanceItem} title="性能优化" />
        <DropdownNav navigationItem={webpackItem} title="webpack" />
        <DropdownNav navigationItem={gitItem} title="Git" />
        {/* <Button onClick={() => navigate('/components-development')}>组件开发</Button> */}
        {/* <Button onClick={() => navigate('/performance-optimization')}>性能优化</Button> */}
        {/* <Button onClick={() => navigate('/engineering')}>前端工程化</Button> */}
        {/* <Button onClick={() => navigate('/webpack')}>Webpack</Button> */}
        {/* <Button onClick={() => navigate('/git')}>Git</Button> */}

        <DropdownNav navigationItem={factoryItem} title="前端工程化" />
        {/* <DropdownNav navigationItem={softwareItem} title="软件工程篇" /> */}
        <MoreNav navigationList={navigationEntranceList} title="更多" />
        <ToGithub />
      </Space>
    </Col>
  );
}
