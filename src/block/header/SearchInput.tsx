import { Col, Input, Space } from "antd";
import "./index.scss";
import Tag from "../../components/Tag";
// import SVGImg from '../../img/command.png';
import { useEffect, useRef } from "react";
import CommandKSuffix from "../../components/CommandKSuffix";

export default function SearchInput({ onSearch }: { onSearch: (e: any) => void }) {
  const inputRef = useRef(null);
  useEffect(() => {
    function handleKeyDown(e: any) {
      if (e.metaKey && e.key === 'k' && inputRef.current) {
        (inputRef.current as unknown as any).focus();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Col>
      <Space size={0}>
        {/* <Icon /> */}
        <Input
          placeholder="输入关键字搜索..."
          onPressEnter={onSearch}
          ref={inputRef}
          suffix={<CommandKSuffix />}
        />
      </Space>
    </Col>
  )
}