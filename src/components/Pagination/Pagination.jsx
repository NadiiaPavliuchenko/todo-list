import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronsLeft } from "react-icons/fi";
import { FiChevronsRight } from "react-icons/fi";
import { StyledButton, PaginationContainer } from "./Pagination.styled";
import {
  selectStart,
  selectLimit,
  selectTodos,
} from "../../redux/todos/selectors";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  previousPage,
  nextPage,
  firstPage,
  lastPage,
} from "../../redux/todos/todosSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const start = useSelector(selectStart);
  const limit = useSelector(selectLimit);
  const todos = useSelector(selectTodos);

  const handlePrevious = () => {
    dispatch(previousPage());
    // dispatch(getTodos({ start: start - limit, limit }));
  };

  const handleNext = () => {
    dispatch(nextPage());
    // dispatch(getTodos({ start: start + limit, limit }));
  };

  const handleToFirst = () => {
    dispatch(firstPage());
    // dispatch(getTodos({ start: 0, limit }));
  };

  const handleToLast = () => {
    dispatch(lastPage());
    // dispatch(getTodos({ start: length - limit, limit }));
  };

  return (
    <PaginationContainer>
      <StyledButton type="button" onClick={() => handleToFirst()}>
        <FiChevronsLeft />
      </StyledButton>
      <StyledButton
        type="button"
        onClick={() => handlePrevious()}
        disabled={start === 0}
      >
        <FiChevronLeft />
      </StyledButton>
      <StyledButton
        type="button"
        onClick={() => handleNext()}
        disabled={start === todos.length - limit}
      >
        <FiChevronRight />
      </StyledButton>
      <StyledButton type="button" onClick={() => handleToLast()}>
        <FiChevronsRight />
      </StyledButton>
    </PaginationContainer>
  );
};

export default Pagination;
