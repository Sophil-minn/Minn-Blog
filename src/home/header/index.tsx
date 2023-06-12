import { Row } from "antd";
import "./index.scss";
import { defaultGetPrefixCls } from "../../util/utils";
import SearchInput from "./SearchInput";
import Menu from "./Menu";
import { forwardRef, useImperativeHandle, useRef } from "react";

const rclsHeader = defaultGetPrefixCls("header");
const rowCls = defaultGetPrefixCls("row");

function Header({ onSearch }: { onSearch: (e: any) => void }, ref: any) {
  const headerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => {
    return {
      getClientHeight() {
        return headerRef.current?.clientHeight;
      }
    };
  }, []);

  return (
    <>
      <header className={rclsHeader} ref={headerRef}>
        <Row className={rowCls} justify={"space-between"}>
          <SearchInput onSearch={onSearch} />
          <Menu />
        </Row>
      </header >
      {/* 占位 */}
      <div style={{ height: headerRef.current?.clientHeight }} />
    </>
  );
}


export default forwardRef(Header);