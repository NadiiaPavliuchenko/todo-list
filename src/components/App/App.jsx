import Todos from "../Todos/Todos";
import TodoForm from "../TodoForm/TodoForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../../redux/todos/operations";
import {
  selectLimit,
  selectStart,
  selectTodos,
} from "../../redux/todos/selectors";
import { StyledContainer, StyledTitle } from "./App.styled";
import Pagination from "../Pagination/Pagination";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const start = useSelector(selectStart);
  const limit = useSelector(selectLimit);

  // use useEffect to load todos when the component is mounted
  useEffect(() => {
    // check if there is something in localStorage before fetching data from api
    if (!todos || todos.length === 0) {
      dispatch(getTodos());
    }
  }, [dispatch, todos]);

  const paginateTodos = (todos, start, limit) => {
    const startIndex = start;
    console.log(startIndex);
    const endIndex = startIndex + limit;
    console.log(endIndex);
    return todos.slice(startIndex, endIndex);
  };

  return (
    <StyledContainer>
      <StyledTitle>To-do List</StyledTitle>
      <TodoForm />
      <Todos visibleTodos={paginateTodos(todos, start, limit)} />
      <Pagination />
    </StyledContainer>
  );
}

export default App;
