import { createSlice } from "@reduxjs/toolkit";
import {
  getTodos,
  addTodo,
  deleteTodo,
  //   updateTodo,
  //   updateTodoStatus,
} from "./operations";

// initial state for todos slice
const initialTodosState = {
  items: [], // array to store todos
  isLoading: false, // indicates loading state
  error: null, // error state
};

// creating slice for todos
const todoSlice = createSlice({
  name: "todos",
  initialState: initialTodosState, // setting initial state
  extraReducers: (builder) => {
    builder
      // case for pending state
      .addCase(getTodos.pending, (state) => {
        state.isLoading = true; // setting loading to true
        state.error = null; // resetting error
        state.items = null; // clearing previous items
      })
      // case for fulfilled state
      .addCase(getTodos.fulfilled, (state, action) => {
        state.isLoading = false; // loading complete
        state.items = action.payload; // storing fetched items
      })
      // case for rejected state
      .addCase(getTodos.rejected, (state, action) => {
        state.error = action.payload; // setting error message
        state.isLoading = false;
      })
      .addCase(addTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(addTodo.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        let index = state.items.findIndex((elem) => elem.id === action.payload);
        state.items.splice(index, 1);
      })
      .addCase(deleteTodo.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const todosReducer = todoSlice.reducer;
