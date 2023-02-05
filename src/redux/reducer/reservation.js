import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reservationsApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:3000/reservations/',
    prepareHeaders(headers) {
      headers.set('Authorization', localStorage.getItem('token'));
      headers.set('Host', 'blue-dreams-back-end.herokuapp.com');
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchReservations: builder.query({
        query: () => 'index',
      }),
    };
  },
});

// eslint-disable-next-line max-len
export const { useFetchReservationsQuery, useCreateReservationMutation, useDeleteReservationMutation } = reservationsApi;
