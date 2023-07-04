import { Button, Input, Row } from "antd";
import { useState } from "react";

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <Input
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <Button onClick={() => setIsEditing(false)}>Save</Button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <Button onClick={() => setIsEditing(true)}>Edit</Button>
      </>
    );
  }
  return (
    <Row wrap={false} justify={"start"}>
      <Input
        type="checkbox"
        checked={task.done}
        style={{ width: 60, margin: 12 }}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {taskContent}
      <Button onClick={() => onDelete(task.id)}>Delete</Button>
    </Row>
  );
}
