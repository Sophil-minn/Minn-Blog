import Box from "./Box.js";
import { Card } from "antd";
import { useState } from "react";

export default function Demo5() {
  const [isIn, setIsIn] = useState();
  const color = isIn ? "red" : "green";
  return (
    <Card
      title="5、跟踪元素可见性"
      bodyStyle={{ maxHeight: 200, overflow: "auto", backgroundColor: color }}
    >
      <LongSection />
      <Box setIsIn={setIsIn} />
      <LongSection />
      <Box setIsIn={setIsIn} />
      <LongSection />
    </Card>
  );
}

function LongSection() {
  const items = [];
  for (let i = 0; i < 50; i++) {
    items.push(<li key={i}>Item #{i} (keep scrolling)</li>);
  }
  return <ul>{items}</ul>;
}
