import { Suspense, useState, lazy } from "react";
import { Card } from "antd";

const SlowList = lazy(() => import("./SlowList"));

export default function WithoutUseDeferredValue() {
  const [text, setText] = useState("");
  return (
    <Card title="不使用useDeferredValue渲染">
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <Suspense fallback="loading SlowList2 ">
        <SlowList text={text} />
      </Suspense>
    </Card>
  );
}
