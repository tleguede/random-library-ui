import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Author, Book, EditionDate, LiteraryMovement} from "../types";
import {BASE_SERVER_URI} from "../constants";
import {useMemo} from "react";

// Define a service using a base URL and expected endpoints
export const libraryApi = createApi({
    reducerPath: 'libraryApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_SERVER_URI}),
    endpoints: (builder) => ({
        allAuthors: builder.query<Author[], string>({
            query: (name) => `authors/`,
        }),
        allEditionDates: builder.query<EditionDate[], string>({
            query: (name) => `edition_dates/`,
        }),
        allLiteraryMovements: builder.query<LiteraryMovement[], string>({
            query: (name) => `literary_movements/`,
        }),
        allBooks: builder.query<Book[], string>({
            query: (name) => `books/`,
        }),
    }),
})



// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useAllAuthorsQuery, useAllEditionDatesQuery, useAllLiteraryMovementsQuery, useAllBooksQuery} = libraryApi
