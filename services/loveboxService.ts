import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from '../constants';
import {
  RetrieveLoveboxQuery,
  RetrieveLoveboxResponse,
} from '../interfaces/LoveboxItemInterface';

export const loveboxApi = createApi({
  reducerPath: 'loveboxesApi',
  baseQuery: fetchBaseQuery({baseUrl: `${BASE_URL}/lovebox`}),
  endpoints: build => ({
    retrieveLoveboxes: build.query<
      RetrieveLoveboxResponse,
      RetrieveLoveboxQuery
    >({
      query: ({token}) => ({
        url: '/retrieve',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {useRetrieveLoveboxesQuery} = loveboxApi;
