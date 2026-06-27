import basewaApi from "./api";

export const itemApi = basewaApi.injectEndpoints({
    endpoints: (builder) => ({
        getItems: builder.query({
            query: () => 'list',
            providesTags: ['Item']
        }),
    }),

});

export const { useGetItemsQuery } = itemApi;