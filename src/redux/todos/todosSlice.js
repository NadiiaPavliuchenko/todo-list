import { createSlice } from "@reduxjs/toolkit";
import {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo,
  updateTodoStatus,
} from "./operations";

// initial state for todos slice
const initialTodosState = {
  items: [], // array to store todos
  start: 0, // start value for pagination
  limit: 10, // number of todos per page
};

// creating slice for todos
const todoSlice = createSlice({
  name: "todos",
  initialState: initialTodosState, // setting initial state
  reducers: {
    // action to move to the next page
    nextPage(state) {
      if (state.start <= state.items.length - state.limit)
        state.start += state.limit;
    },
    // action to returt to previous page
    previousPage(state) {
      if (state.start >= state.limit) {
        state.start -= state.limit;
      }
    },
    // action to get to the first page
    firstPage(state) {
      state.start = 0;
    },
    // action to get to the last page
    lastPage(state) {
      state.start =
        Math.floor((state.items.length - 1) / state.limit) * state.limit;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        state.items = null;
      })
      // case for fulfilled state
      .addCase(getTodos.fulfilled, (state, action) => {
        state.items = action.payload; // storing fetched items
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
        state.totalLength += 1;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        let index = state.items.findIndex((elem) => elem.id === action.payload);
        state.items.splice(index, 1);
        state.totalLength -= 1;
      })
      .addCase(updateTodoStatus.fulfilled, (state, action) => {
        let index = state.items.findIndex(
          (elem) => elem.id === action.payload[1]
        );
        if (index !== -1) {
          state.items[index].completed = action.payload[0].completed;
        }
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        let index = state.items.findIndex(
          (elem) => elem.id === action.payload[1]
        );
        if (index !== -1) {
          state.items[index].title = action.payload[0].title;
        }
      });
  },
});

export const { nextPage, previousPage, firstPage, lastPage } =
  todoSlice.actions;
export const todosReducer = todoSlice.reducer;
