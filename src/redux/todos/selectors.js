// import { createSelector } from "@reduxjs/toolkit";

// selector to access the list of todo items from the state
export const selectTodos = (state) => state.todos.items;

// selector to access the loading status from the state
export const selectIsLoading = (state) => state.isLoading;

// selector to access the error status from the state
export const selectError = (state) => state.error;
