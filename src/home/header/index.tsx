import { Row } from "antd";
import "./index.scss";
import { defaultGetPrefixCls } from "../../util/utils";
import SearchInput from "./SearchInput";
import Menu from "./Menu";

const rclsHeader = defaultGetPrefixCls("header");
const rowCls = defaultGetPrefixCls("row");

export default function index() {
  return (
    <header className={rclsHeader}>
      <Row className={rowCls} justify={"space-between"}>
        <SearchInput />
        <Menu />
      </Row>
    </header >
  );
}
