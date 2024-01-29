import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const INIT_TODOS = [
  {
    todo: "Learn React",
    id: 1,
    completed: false,
  },
  {
    todo: "React Todo App Tutorial",
    id: 2,
    completed: true,
  },
];
function App() {
  const [todos, setTodos] = useState(INIT_TODOS);

  const onComplete = (id, completed) => {
    const todoList = todos.map((value) => {
      if (id === value.id) {
        return { ...value, completed };
      }
      return value;
    });
    setTodos(todoList);
  };

  const onEdit = (id, todo) => {
    const todoList = todos.map((value) => {
      if (id === value.id) {
        return { ...value, todo };
      }
      return value;
    });
    setTodos(todoList);
  };

  const onDelete = (id) => {
    const todoList = todos.filter((value) => value.id !== id);
    setTodos(todoList);
  };

  return (
    <main id="todo-container">
      <h1>Todo App</h1>
      <TodoForm onAdd={(todo) => setTodos([...todos, todo])} />
      <TodoList
        todos={todos}
        onComplete={onComplete}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    </main>
  );
}

export default App;
