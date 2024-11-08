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

  // handler for previous page arrow
  const handlePrevious = () => {
    dispatch(previousPage());
  };

  // handler for next page arrow
  const handleNext = () => {
    dispatch(nextPage());
  };

  // handler for go to first page arrow
  const handleToFirst = () => {
    dispatch(firstPage());
  };

  // handler for go to last page arrow
  const handleToLast = () => {
    dispatch(lastPage());
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
