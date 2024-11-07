import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

// thunk to fetch all todos
export const getTodos = createAsyncThunk(
  "todos/getAll",
  async (_, thunkApi) => {
    try {
      const todos = await api.get("todos");
      return todos.json();
    } catch (e) {
      // handling errors by rejecting with an error message
      thunkApi.rejectWithValue(e.message);
    }
  }
);

// thunk to add todo
export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (newTodo, thunkApi) => {
    const { userId, title, completed } = newTodo;
    try {
      const resp = await api.post("totos", { userId, title, completed });
      return resp.json();
    } catch (e) {
      thunkApi.rejectWithValue(e.message);
    }
  }
);

// thunk to update todo
export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (updatedTodo, thunkApi) => {
    const { id, userId, title, completed } = updatedTodo;
    try {
      const resp = await api.put(`todos/${id}`, { userId, title, completed });
      return resp.json();
    } catch (e) {
      thunkApi.rejectWithValue(e.message);
    }
  }
);

// thunk to delete todo
export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id, thunkApi) => {
    try {
      const resp = await api.delete(`todos/${id}`);
      return resp.json();
    } catch (e) {
      thunkApi.rejectWithValue(e.message);
    }
  }
);

// thunk to mark todo as completed
export const updateTodoStatus = createAsyncThunk(
  "todos/updateTodoStatus",
  async ({ id, body }, thunkApi) => {
    try {
      const resp = await api.put(`todos/${id}`, body);
      return resp.json();
    } catch (e) {
      thunkApi.rejectWithValue(e.message);
    }
  }
);
