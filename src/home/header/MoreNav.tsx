import {
  Col,
  Dropdown,
  Typography,
  Popover,
  Row,
  Tooltip,
  message,
  Tag,
} from "antd";
import { defaultGetPrefixCls } from "../../util/utils";
import "./index.scss";
import { items } from "../config";
import Button from "../../components/Button";
import { STATE, STATE_TEXT } from "../../config/const";
import { clsMap, colorMap } from "./config";
import { NavInfoProps } from "../../types";

const dcls = defaultGetPrefixCls("dropdown-content");
const scls = defaultGetPrefixCls("section-info");

const { Title, Text } = Typography;

const SectionInfo = ({ navInfo }: { navInfo: NavInfoProps }) => (
  <div className={scls}>
    <Tooltip title={navInfo.description}>
      <Title level={5} className="nav-info__title">{navInfo.title}</Title>
    </Tooltip>
    <div className="navInfo-items-wrapper">
      {navInfo.list.map((item, index) => {
        const { title, statusCode, tips, path, pathType } = item;
        const tip = tips ? (
          <div className="menu-items-popover-title">{tips}</div>
        ) : null;

        const onItemClick = () => {
          if (pathType === "outer") {
            return window.open(path, "_blank");
          }
          if (path) {
            console.log("path: ", path);
            // history.push(path);
            //   setIsOpen(false);
          } else if (statusCode === STATE.WAIT_ONLINE) {
            message.error("该功能正在建设中～");
          }
        };
        return (
          <div
            onClick={onItemClick}
            key={title}
            className='item-title'
          >
            <Row gutter={4}>
              <Col>
                <Popover
                  content={tip}
                  // getPopupContainer={() => document.getElementById(title)}
                  autoAdjustOverflow
                  overlayStyle={{ width: "370px" }}
                >
                  <Text type="secondary" className='dropdow-nav__list__item' disabled={[STATE.WAIT_ONLINE].includes(statusCode)} strong>{title}</Text>
                </Popover>
              </Col>
              <Col>
                {(STATE_TEXT as any)[statusCode] ? (
                  <Tag className={`state-type ${clsMap[statusCode]} `} color={colorMap[statusCode]}>{(STATE_TEXT as any)[statusCode]}</Tag>
                ) : null}
              </Col>
            </Row>
          </div>
        );
      })}
    </div>
  </div >
);

export default function MoreNav(props: {
  navigationList: NavInfoProps[];
  title: string;
}) {
  const { navigationList, title } = props;
  const dropdownRender = () => (
    <Row className={dcls} justify={"space-evenly"}>
      {navigationList.map((nav) => (
        <Col key={nav.title}>
          <SectionInfo navInfo={nav} />
        </Col>
      ))}
    </Row>
  );
  return (
    <Dropdown
      menu={{ items }}
      placement="bottom"
      align={{ offset: [0, 18] }}
      autoFocus
      dropdownRender={dropdownRender}
      // trigger={["click"]}
      overlayClassName="min-nav-drop-down"
    >
      <Button type="link">{title}</Button>
    </Dropdown >
  );
}
