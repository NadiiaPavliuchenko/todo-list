import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { FiChevronsLeft } from "react-icons/fi";
import { FiChevronsRight } from "react-icons/fi";
import { StyledButton, PaginationContainer } from "./Pagination.styled";
import {
  selectStart,
  selectLimit,
  selectTodos,
  selectPage,
} from "../../redux/todos/selectors";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  previousPage,
  nextPage,
  firstPage,
  lastPage,
  setPage,
} from "../../redux/todos/todosSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const start = useSelector(selectStart);
  const limit = useSelector(selectLimit);
  const todos = useSelector(selectTodos);
  const page = useSelector(selectPage);
  const numPages = todos.length / limit;

  const buttons = Array.from({ length: numPages }, (_, index) => index + 1);

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

  // handler to choose page
  const handleSetPage = (value) => {
    dispatch(setPage(value));
  };

  const isCurrentPage = (value) => page === value;

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
      <div>
        {buttons &&
          buttons.map((button) => (
            <StyledButton
              type="button"
              key={button}
              onClick={() => handleSetPage(button)}
              data-status={isCurrentPage(button)}
            >
              {button}
            </StyledButton>
          ))}
      </div>
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
