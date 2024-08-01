import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { GenreType, TrackType, TrackCrateType } from '../types/appTypes';

export const musicApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Genre', 'Track'],
  endpoints: (builder) => ({
    getGenres: builder.query<GenreType[], void>({
      query: () => '/genres',
      providesTags: ['Genre'],
    }),
    getTrackById: builder.query<TrackType, number>({
      query: (id) => `/tracks/${id}`,
      providesTags: ['Track'],
    }),
    getTracksByGenre: builder.query<TrackType[], number>({
      query: (genreId) => `/tracks/genre/${genreId}`,
      providesTags: ['Track'],
    }),
    addTrack: builder.mutation<TrackType, TrackCrateType >({
      query: (track) => ({
        url: `/tracks/genre/${track.genre_id}`,
        method: 'POST',
        body: track,
      }),
      invalidatesTags: ['Track'],
    }),
    updateTrack: builder.mutation<TrackType, Partial<TrackType>>({
      query: (track) => ({
        url: `/tracks/${track.id}`,
        method: 'PATCH',
        body: {
          title: track.title,
          group: track.group,
          img: track.img,
          genre_id: track.genre_id,
        },
      }),
      invalidatesTags: ['Track'],
    }),
    deleteTrack: builder.mutation<{ success: boolean }, number>({
      query: (id) => ({
        url: `/tracks/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Track'],
    }),
  }),
});

export const {
  useGetGenresQuery,
  useGetTrackByIdQuery,
  useGetTracksByGenreQuery,
  useAddTrackMutation,
  useUpdateTrackMutation,
  useDeleteTrackMutation,
} = musicApi;
