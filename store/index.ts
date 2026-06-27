import { configureStore } from "@reduxjs/toolkit";
import demoReducer from "./slices/demoSlice";
import { itemApi } from "@/services/itemApi";

export const store = configureStore({
    reducer: {
        demo: demoReducer,
        [itemApi.reducerPath]: itemApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(itemApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;