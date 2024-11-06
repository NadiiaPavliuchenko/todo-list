import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const getTodos = createAsyncThunk(
  "todos/getAll",
  async (_, thunkApi) => {
    try {
      const todos = await api.get("todos");
      return todos.json();
    } catch (e) {
      thunkApi.rejectWithValue(e.message);
    }
  }
);

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
