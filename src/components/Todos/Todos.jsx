import { useSelector, useDispatch } from "react-redux";
import {
  selectError,
  selectIsLoading,
  selectTodos,
} from "../../redux/todos/selectors";
import { getTodos } from "../../redux/todos/operations";
import { useEffect } from "react";

const Todos = () => {
  // use selectors to get todos, loading state, and error from store
  const todos = useSelector(selectTodos);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  //Get the dispatch function
  const dispatch = useDispatch();

  // use useEffect to load todos when the component is mounted
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {/* if todos are available, display each item in the list */}
      {todos &&
        todos.map((todo) => (
          <li key={todo.id}>
            <input type="text" name="title" defaultValue={todo.title} />
            <input
              type="checkbox"
              name="copmleted"
              defaultValue={todo.completed}
            />
          </li>
        ))}
    </ul>
  );
};

export default Todos;
