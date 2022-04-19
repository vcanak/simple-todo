import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "../services/todoApi";

const store = configureStore({
  reducer: { [todoApi.reducerPath]: todoApi.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todoApi.middleware),
});

export default store;
