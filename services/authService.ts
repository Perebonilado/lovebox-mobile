import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {LoginPayload, LoginResponse} from '../interfaces/Auth';
import { BASE_URL } from '../constants';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: build => ({
    login: build.mutation<LoginResponse, LoginPayload>({
      query: ({email, password}) => ({
        url: '/auth/login',
        method: 'POST',
        body: {email, password},
      }),
    }),
  }),
});

export const {useLoginMutation} = authApi;
