// import { createSelector } from "@reduxjs/toolkit";

// selector to access the list of todo items from the state
export const selectTodos = (state) => state.todos.items;

// selector tp access start value for pagination
export const selectStart = (state) => state.todos.start;

// selector to access maximum todos per page
export const selectLimit = (state) => state.todos.limit;
