import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

// thunk to fetch all todos
export const getTodos = createAsyncThunk(
  "todos/getAll",
  async (_, thunkApi) => {
    try {
      const resp = await api.get("todos");
      return resp.data;
    } catch (e) {
      // handling errors by rejecting with an error message
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

// thunk to add todo
export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (newTodo, thunkApi) => {
    try {
      const createdTodo = {
        ...newTodo,
        id: Date.now(),
      };
      await api.post("todos", createdTodo);
      return createdTodo;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

// thunk to update todo
export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (updatedTodo, thunkApi) => {
    const { id, userId, title, completed } = updatedTodo;
    try {
      const resp = await api.put(`todos/${id}`, {
        id,
        userId,
        title,
        completed,
      });
      return [resp.data, id];
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

// thunk to delete todo
export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id, thunkApi) => {
    try {
      await api.delete(`todos/${id}`);
      return id;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

// thunk to mark todo as completed
export const updateTodoStatus = createAsyncThunk(
  "todos/updateTodoStatus",
  async ({ id, completed }, thunkApi) => {
    try {
      const resp = await api.patch(`todos/${id}`, { completed });
      return [resp.data, id];
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
