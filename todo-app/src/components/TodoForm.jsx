import { useState } from "react";

const TodoForm = (props) => {
  const [value, setValue] = useState("");

  const onClickAdd = () => {
    if (!value.length) return alert("todo must be");
    const todo = {
      todo: value,
      id: new Date().getTime(),
      completed: false,
    };
    props.onAdd(todo);
    setValue("");
  };

  return (
    <section id="todo-form">
      <input
        placeholder="add a todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={onClickAdd}>add todo</button>
    </section>
  );
};

export default TodoForm;
