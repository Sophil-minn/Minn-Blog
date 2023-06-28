import { useState, useDeferredValue } from "react";
import SlowList from "./SlowList";
import WithoutUseDeferredValue from "./WithoutUseDeferredValue";
import { Card } from "antd";

export default function Index() {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);
  return (
    <>
      <Card title="使用useDeferredValue渲染">
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <SlowList text={deferredText} />
      </Card>
      <WithoutUseDeferredValue />
    </>
  );
}
