// import { createSelector } from "@reduxjs/toolkit";

// selector to access the list of todo items from the state
export const selectTodos = (state) => state.todos.items;

export const selectStart = (state) => state.todos.start;

export const selectLimit = (state) => state.todos.limit;
