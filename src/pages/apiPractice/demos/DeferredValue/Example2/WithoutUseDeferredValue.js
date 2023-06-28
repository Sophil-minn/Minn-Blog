import { useState } from "react";
import SlowList from "./SlowList";
import { Card } from "antd";

export default function WithoutUseDeferredValue() {
  const [text, setText] = useState("");
  return (
    <Card title="不使用useDeferredValue渲染">
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <SlowList text={text} />
    </Card>
  );
}
