import Todos from "../Todos/Todos";
import TodoForm from "../TodoForm/TodoForm";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodos } from "../../redux/todos/operations";

function App() {
  const dispatch = useDispatch();

  // use useEffect to load todos when the component is mounted
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <>
      <TodoForm />
      <Todos />
    </>
  );
}

export default App;
