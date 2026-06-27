import { Item } from "@/types/cart-type";
import basewaApi from "./api";

export const itemApi = basewaApi.injectEndpoints({
    endpoints: (builder) => ({
        getItems: builder.query({
            query: () => 'list',
            providesTags: ['Item']
        }),
        getItemById: builder.query<Item, string>({
            query: (id) => `list/${id}`,
            providesTags: (result, error, id) => [{ type: 'Item', id }],
        }),
    }),

});

export const { useGetItemsQuery, useGetItemByIdQuery } = itemApi;