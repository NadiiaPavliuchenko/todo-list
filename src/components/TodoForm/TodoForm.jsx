import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todos/operations";
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "./TodoForm.styled";

// component for adding new todos
const TodoForm = () => {
  const dispatch = useDispatch();

  // handler function for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // creating a new todo object with default values
    const newTodo = {
      userId: 1,
      title: e.target.elements.title.value,
      completed: false,
    };
    dispatch(addTodo(newTodo));
    e.target.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        <StyledInput type="text" name="title" placeholder="Add your task" />
        <StyledButton type="submit">ADD</StyledButton>
      </StyledLabel>
    </StyledForm>
  );
};

export default TodoForm;
