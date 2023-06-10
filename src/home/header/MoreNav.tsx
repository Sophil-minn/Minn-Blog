import {
  Col,
  Dropdown,
  Typography,
  Popover,
  Row,
  Tooltip,
  message,
} from "antd";
import { defaultGetPrefixCls } from "../../util/utils";
import "./index.scss";
import { NavInfoProps } from "../types";
import { items } from "../config";
import Button from "../../components/Button";

const dcls = defaultGetPrefixCls("dropdown-content");
const scls = defaultGetPrefixCls("section-info");

const { Title, Text } = Typography;

const SectionInfo = ({ navInfo }: { navInfo: NavInfoProps }) => (
  <div className={scls}>
    <Tooltip title={navInfo.description}>
      <Title level={5}>{navInfo.title}</Title>
    </Tooltip>
    <div className="navInfo-items-wrapper">
      {navInfo.list.map((item, index) => {
        const { title, statusCode, statusText, tips, path, pathType } = item;
        const tip = tips ? (
          <div className="menu-items-popover-title">{tips}</div>
        ) : null;
        const clsMap: Record<string, string> = {
          WAIT_ONLINE: 'wait-online',
          HOT: 'hot',
          NEW: 'new',
        };
        return (
          <div
            onClick={() => {
              if (pathType === "outer") {
                return window.open(path, "_blank");
              }
              if (path) {
                console.log("path: ", path);
                // history.push(path);
                //   setIsOpen(false);
              } else if (statusCode === "WAIT_ONLINE") {
                message.error("该功能正在建设中～");
              }
            }}
            key={title}
            className={`item-title ${["WAIT_ONLINE"].includes(statusCode) ? "text" : ""
              }`}
          >
            <Popover
              content={tip}
              // getPopupContainer={() => document.getElementById(title)}
              autoAdjustOverflow
              overlayStyle={{ width: "370px" }}
            >
              <Text>{title}</Text>
            </Popover>
            {statusText ? (
              <span className={`state-type ${clsMap[statusCode]}`}>{statusText}</span>
            ) : null}
          </div>
        );
      })}
    </div>
  </div>
);

export default function MoreNav(props: {
  navigationList: NavInfoProps[]
}) {
  const { navigationList } = props;
  const dropdownRender = () => {
    return (
      <Row className={dcls} justify={"space-evenly"}>
        {navigationList.map((nav) => (
          <Col key={nav.title}>
            <SectionInfo navInfo={nav} />
          </Col>
        ))}
      </Row>
    );
  };
  return (
    <Dropdown
      menu={{ items }}
      placement="bottom"
      arrow={{ pointAtCenter: true }}
      autoFocus
      dropdownRender={dropdownRender}
      trigger={["click"]}
      overlayClassName="min-nav-drop-down"
    >
      <Button type="link">更多</Button>
    </Dropdown>
  );
}
