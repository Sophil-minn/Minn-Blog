import { Card } from "antd";
import { useState, useEffect, useRef } from "react";
import ModalDialog from "./ModalDialog.js";

export default function Demo4() {
  const [show, setShow] = useState(false);
  return (
    <Card title="4、控制模态对话框 ">
      在这个例子中，外部系统是浏览器 DOM。ModalDialog 组件渲染一个{" <"}dialog
      {"> "}元素。它使用 Effect 将 isOpen prop 同步到 showModal() 和 close()
      方法调用。
      <button onClick={() => setShow(true)}>Open dialog</button>
      <ModalDialog isOpen={show}>
        Hello there!
        <br />
        <button
          onClick={() => {
            setShow(false);
          }}
        >
          Close
        </button>
      </ModalDialog>
    </Card>
  );
}
