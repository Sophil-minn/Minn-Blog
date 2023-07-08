import { useImmerReducer } from "use-immer";
import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";
import { Card } from "antd";

function tasksReducer(draft, action) {
  switch (action.type) {
    case "added": {
      draft.push({
        id: action.id,
        text: action.text,
        done: false,
      });
      break;
    }
    case "changed": {
      const index = draft.findIndex((t) => t.id === action.task.id);
      draft[index] = action.task;
      break;
    }
    case "deleted": {
      return draft.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export default function ConciseUpdateLogic() {
  const [tasks, dispatch] = useImmerReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  }

  return (
    <Card>
      <h1>使用 Immer 编写简洁的更新逻辑。</h1>
      如果在不使用变异的情况下更新数组和对象感觉很繁琐，您可以使用像 Immer
      这样的库来减少重复的代码。Immer
      允许您编写简洁的代码，就像您在变异对象一样，但在幕后它执行不可变的更新：
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </Card>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];
