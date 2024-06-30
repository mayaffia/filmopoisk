
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3030' }),
    tagTypes: ['movie'],
    endpoints: (build) => ({
        getMovies: build.query({
            query: (params) => ({
                url :'/api/v1/search',
                params
            }),
        }),
        getMovieById : build.query({
            query: (id) => `/api/v1/movie/${id}`,
            providesTags: (id) => [{ type: 'movie', id }]
        }),
        rateMovie: build.mutation({
            query: ({ movieId, user_rate }) => ({
                url: '/api/v1/rateMovie',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                },
                body: {
                    movieId,
                    user_rate
                }
            }),
            invalidatesTags: ({ movieId }) => [{ type: 'movie', id: movieId }]
        }),
    }),
});






