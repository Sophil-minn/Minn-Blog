import { Affix, Col, Row } from "antd";
import "./index.scss";
import { defaultGetPrefixCls } from "../utils";
import SearchInput from "./SearchInput";
import { forwardRef, useImperativeHandle, useRef } from "react";
import ToGithub from "./ToGithub";

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
    <Affix offsetTop={0}>
      <header className={rclsHeader} ref={headerRef}>
        <Row className={rowCls} justify={"space-between"}>
          <SearchInput onSearch={onSearch} />
          <Col><ToGithub /></Col>
        </Row>
      </header >
    </Affix>
  );
}


export default forwardRef(Header);