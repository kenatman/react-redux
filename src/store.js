import { createStore } from "redux";
import {
  configureStore,
  createSlice,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import logger from "redux-logger";

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ id: Date.now(), text: action.payload });
    },
    minus: (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload);
    },
  },
});

const store = configureStore({
  reducer: toDos.reducer,
  devTools: process.env.NODE_ENV !== `production`,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

export const { add, minus } = toDos.actions;
