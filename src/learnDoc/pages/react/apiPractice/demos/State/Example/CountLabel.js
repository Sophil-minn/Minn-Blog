import { useState } from "react";

export default function CountLabel({ count }) {
  console.log("count: ", count);
  const [prevCount, setPrevCount] = useState(count);
  console.log("prevCount: ", prevCount);
  const [trend, setTrend] = useState(null);
  if (prevCount !== count) {
    setPrevCount(count);
    setTrend(count > prevCount ? "increasing" : "decreasing");
  }
  return (
    <>
      <h1>{count}</h1>
      {trend && <p>The count is {trend}</p>}
    </>
  );
}
