import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const SHIPS_URL = 'https://blue-dreams-back-end.herokuapp.com/ships/';

export const shipsApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: SHIPS_URL,
  }),
  endpoints(builder) {
    return {
      fetchShips: builder.query({
        query: () => 'index',
      }),
    };
  },
});

export const { useFetchShipsQuery } = shipsApi;
