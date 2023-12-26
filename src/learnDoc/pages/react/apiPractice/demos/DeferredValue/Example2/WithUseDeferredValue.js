import { useState, Suspense, lazy } from "react";
import { Card } from "antd";

const SlowList = lazy(() => import("./SlowList"));

export default function WithUseDeferredValue() {
  const [text, setText] = useState("");
  return (
    <Suspense fallback="使用useDeferredValue渲染">
      <Card title="使用useDeferredValue渲染">
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <Suspense fallback="loading SlowList ">
          <SlowList text={text} />
        </Suspense>
      </Card>
    </Suspense>
  );
}
