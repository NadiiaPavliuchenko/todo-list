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
import {
  StyledButton,
  StyledInput,
  StyledItem,
  StyledList,
} from "./Todos.styled";
import { FiEdit } from "react-icons/fi";
import { FiX } from "react-icons/fi";

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

  // handler function to mark todo as completed
  const handleCheckTodo = (e, id) => {
    const body = {
      id: id,
      completed: e.target.checked,
    };
    dispatch(updateTodoStatus(body));
  };

  //handler function to updadate todo
  const handleUpdateTodo = (todo) => {
    const newTodo = {
      id: todo.id,
      title: titleRefs.current[todo.id].value,
    };
    dispatch(updateTodo(newTodo));
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <StyledList>
      {/* if todos are available, display each item in the list */}
      {todos &&
        todos.map((todo) => (
          <StyledItem key={todo.id}>
            <input
              type="checkbox"
              name="copmleted"
              defaultChecked={todo.completed}
              onClick={(e) => handleCheckTodo(e, todo.id)}
            />
            <StyledInput
              type="text"
              name="title"
              ref={(ref) => (titleRefs.current[todo.id] = ref)}
              defaultValue={todo.title}
            />
            <div>
              <StyledButton
                type="button"
                onClick={() => handleUpdateTodo(todo)}
              >
                <FiEdit size={20} />
              </StyledButton>
              <StyledButton type="button" onClick={() => handleDelete(todo.id)}>
                <FiX size={20} />
              </StyledButton>
            </div>
          </StyledItem>
        ))}
    </StyledList>
  );
};

export default Todos;
