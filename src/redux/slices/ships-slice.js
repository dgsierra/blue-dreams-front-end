import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const SHIPS_URL = 'http://127.0.0.1:3000/ships/';

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
      postShip: builder.mutation({
        query: (newShip) => ({
          url: 'create/',
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            accept: 'application/json',
            authorization: localStorage.getItem('token'),
          },
          body: newShip,
        }),
      }),
    };
  },
});

export const { useFetchShipsQuery, usePostShipMutation } = shipsApi;
