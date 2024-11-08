import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { todosReducer } from "./todos/todosSlice";
import { rootReducer } from "./root/rootSlice";

const persistConfig = {
  key: "todos",
  storage,
};

// creating the Redux store with configuration for persistence and reducers
export const store = configureStore({
  reducer: {
    // 'todosReducer' is wrapped by 'persistReducer' to enable persistence
    todos: persistReducer(persistConfig, todosReducer),
    // 'root' reducer is added normally, without persistence
    root: rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// creating the persistor instance
export const persistor = persistStore(store);
