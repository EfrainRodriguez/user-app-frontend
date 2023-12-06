import { createApi } from '@reduxjs/toolkit/query/react';

import { customBaseQuery } from '../../utils/customBaseQuery.util';

const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body
      })
    }),
    signup: builder.mutation({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body
      })
    }),
    getUsers: builder.query({
      query: () => ({
        url: '/',
        method: 'GET'
      })
    }),
    getUser: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: 'GET'
      })
    })
  })
});

export const {
  useLoginMutation,
  useSignupMutation,
  useGetUsersQuery,
  useGetUserQuery
} = userApi;

export default userApi;
