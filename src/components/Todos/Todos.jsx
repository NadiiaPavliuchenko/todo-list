import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import {
  selectError,
  selectIsLoading,
  selectTodos,
} from "../../redux/todos/selectors";
import {
  deleteTodo,
  updateTodoStatus,
  updateTodo,
} from "../../redux/todos/operations";

const Todos = () => {
  // use selectors to get todos, loading state, and error from store
  const todos = useSelector(selectTodos);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const titleRefs = useRef({});

  // get the dispatch function
  const dispatch = useDispatch();

  // handler function for deleting todo
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleCheckTodo = (e, id) => {
    const body = {
      id: id,
      completed: e.target.checked,
    };
    dispatch(updateTodoStatus(body));
  };

  const handleUpdateTodo = (todo) => {
    const newTodo = {
      id: todo.id,
      userId: todo.userId,
      title: titleRefs.current[todo.id].value,
      completed: todo.completed,
    };
    dispatch(updateTodo(newTodo));
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {/* if todos are available, display each item in the list */}
      {todos &&
        todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="text"
              name="title"
              ref={(ref) => (titleRefs.current[todo.id] = ref)}
              defaultValue={todo.title}
            />
            <input
              type="checkbox"
              name="copmleted"
              defaultChecked={todo.completed}
              onClick={(e) => handleCheckTodo(e, todo.id)}
            />
            <button type="button" onClick={() => handleUpdateTodo(todo)}>
              Update
            </button>
            <button type="button" onClick={() => handleDelete(todo.id)}>
              Delete todo
            </button>
          </li>
        ))}
    </ul>
  );
};

export default Todos;
