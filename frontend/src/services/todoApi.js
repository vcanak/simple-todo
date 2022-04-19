import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    todos: builder.query({
      query: () => "tasks",
      providesTags: ["Task"],
    }),
    addTodo: builder.mutation({
      query: (content) => ({
        url: "tasks",
        method: "POST",
        body: content,
      }),
      invalidatesTags: ["Task"],
    }),
    updateTodo: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `tasks/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Task"],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Task"],
    }),
  }),
});

export const { useTodosQuery, useAddTodoMutation, useDeleteTodoMutation, useUpdateTodoMutation } =
  todoApi;
