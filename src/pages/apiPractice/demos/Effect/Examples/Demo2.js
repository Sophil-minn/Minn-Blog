import { useState, useEffect } from "react";
import { Card } from "antd";

export default function Demo2() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("pointermove", handleMove);
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return (
    <Card
      title="2、监听全局的浏览器事件"
      style={{ position: "relative", overflow: "auto" }}
    >
      在这个例子中，外部系统就是浏览器 DOM 本身。通常，你会使用 JSX
      指定事件监听，但是你不能以这种方式监听全局的 window 对象。你可以通过
      Effect 连接到 window 对象并监听其事件。如监听 pointermove
      事件可以让你追踪光标（或手指）的位置，并更新红点以随之移动。
      <div
        style={{
          position: "absolute",
          backgroundColor: "pink",
          borderRadius: "50%",
          opacity: 0.6,
          transform: `translate(${position.x}px, ${position.y}px)`,
          pointerEvents: "none",
          left: -420,
          top: -420,
          width: 40,
          height: 40,
        }}
      />
    </Card>
  );
}
