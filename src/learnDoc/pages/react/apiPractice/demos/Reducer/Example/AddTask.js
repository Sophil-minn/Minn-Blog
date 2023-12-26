import { Button, Input, Row } from "antd";
import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");
  return (
    <Row wrap={false}>
      <Input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        Add
      </Button>
    </Row>
  );
}
