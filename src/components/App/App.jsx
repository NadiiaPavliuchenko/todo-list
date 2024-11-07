import Todos from "../Todos/Todos";
import TodoForm from "../TodoForm/TodoForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../../redux/todos/operations";
import { selectTodos } from "../../redux/todos/selectors";
import { StyledContainer, StyledTitle } from "./App.styled";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  // use useEffect to load todos when the component is mounted
  useEffect(() => {
    // check if there is something in localStorage before fetching data from api
    if (!todos || todos.length === 0) {
      dispatch(getTodos());
    }
  }, [dispatch, todos]);

  return (
    <StyledContainer>
      <StyledTitle>To-do List</StyledTitle>
      <TodoForm />
      <Todos />
    </StyledContainer>
  );
}

export default App;
