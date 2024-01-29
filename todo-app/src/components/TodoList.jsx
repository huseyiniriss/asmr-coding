const TodoList = ({ todos, onComplete, onDelete, onEdit }) => {
  const onAction = (action, todo) => {
    if (action === "complete") {
      onComplete(todo.id, !todo.completed);
    }
    if (action === "delete") {
      const deleteTodo = confirm(`delete ${todo.todo}`);
      deleteTodo && onDelete(todo.id);
    }

    if (action === "edit") {
      const editTodo = prompt(`edit ${todo.todo}`, todo.todo);
      editTodo ? onEdit(todo.id, editTodo) : alert("todo must be");
    }
  };

  if (!todos.length) {
    return <p>no todos !</p>;
  }

  return (
    <ul id="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onAction("complete", todo)}
          />
          <span className={`${todo.completed === true && "completed"}`}>
            {todo.todo}
          </span>
          <button onClick={() => onAction("edit", todo)}>Edit</button>
          <button onClick={() => onAction("delete", todo)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
