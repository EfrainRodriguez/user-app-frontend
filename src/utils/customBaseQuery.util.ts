import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BaseQueryFn } from '@reduxjs/toolkit/query/react';

import { RootState } from '../redux/store';
import { setAccessToken } from '../redux/slices/user.slice';

export const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_API_URL}/api/v1/user`,
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const { accessToken } = state.userSlice;
    if (accessToken) {
      headers.set('Authorization', accessToken);
    }
    return headers;
  }
});

export const customBaseQuery: BaseQueryFn = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    api.dispatch(setAccessToken(null));
  }

  return result;
};
