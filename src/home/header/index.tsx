import { Row } from "antd";
import "./index.scss";
import { defaultGetPrefixCls } from "../../util/utils";
import SearchInput from "./SearchInput";
import Menu from "./Menu";

const rclsHeader = defaultGetPrefixCls("header");
const rowCls = defaultGetPrefixCls("row");

export default function index({ onSearch }: { onSearch: (e: any) => void }) {
  return (
    <header className={rclsHeader}>
      <Row className={rowCls} justify={"space-between"}>
        <SearchInput onSearch={onSearch} />
        <Menu />
      </Row>
    </header >
  );
}
