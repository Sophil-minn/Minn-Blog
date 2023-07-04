import { useReducer } from "react";
import { Button, Card, Input } from "antd";

function reducer(state, action) {
  switch (action.type) {
    case "incremented_age": {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
    case "changed_name": {
      return {
        name: action.nextName,
        age: state.age,
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}

const initialState = { name: "Taylor", age: 42 };

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleButtonClick() {
    dispatch({ type: "incremented_age" });
  }

  function handleInputChange(e) {
    dispatch({
      type: "changed_name",
      nextName: e.target.value,
    });
  }

  return (
    <Card>
      <p>
        In this example, the reducer manages a state object with two fields:
        name and age.
      </p>
      <p>
        <Input value={state.name} onChange={handleInputChange} />
      </p>
      <p>
        <Button onClick={handleButtonClick}>Increment age</Button>
      </p>
      <p>
        Hello, {state.name}. You are {state.age}.
      </p>
    </Card>
  );
}
