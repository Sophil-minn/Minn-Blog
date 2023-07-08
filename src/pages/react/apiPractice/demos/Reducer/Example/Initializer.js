import { Card } from "antd";
import { useReducer } from "react";

function createInitialState(username) {
  console.log("username: ", 22222);
  const initialTodos = [];
  for (let i = 0; i < 50; i++) {
    initialTodos.push({
      id: i,
      text: username + "'s task #" + (i + 1),
    });
  }
  return {
    draft: "",
    todos: initialTodos,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "changed_draft": {
      return {
        draft: action.nextDraft,
        todos: state.todos,
      };
    }
    case "added_todo": {
      return {
        draft: "",
        todos: [
          {
            id: state.todos.length,
            text: state.draft,
          },
          ...state.todos,
        ],
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}

export default function Initializer({ username }) {
  const [state, dispatch] = useReducer(reducer, username, createInitialState);
  return (
    <Card style={{ maxHeight: 200, overflow: "auto" }}>
      <p>
        This example passes the initializer function, so the createInitialState
        function only runs during initialization. It does not run when component
        re-renders, such as when you type into the input.
      </p>
      <input
        value={state.draft}
        onChange={(e) => {
          dispatch({
            type: "changed_draft",
            nextDraft: e.target.value,
          });
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: "added_todo" });
        }}
      >
        Add
      </button>
      <ul>
        {state.todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </Card>
  );
}
