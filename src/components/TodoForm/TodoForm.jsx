import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todos/operations";

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
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="enter title" />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
