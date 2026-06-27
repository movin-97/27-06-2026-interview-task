import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/services/api";

export const fetchDemo = createAsyncThunk(
    "demo/fetchDemo",
    async () => {
        const response = await api.get("/demo");
        return response.data.demo;
    }
);

interface DemoState {
    demo: string;
    loading: boolean;
    error: string | null;
}

const initialState: DemoState = {
    demo: "Hello World, Redux!",
    loading: false,
    error: null,
};

const demoSlice = createSlice({
    name: "demo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(fetchDemo.pending, (state) => {
                state.loading = true;
            })

            .addCase(fetchDemo.fulfilled, (state, action) => {
                state.loading = false;
                state.demo = action.payload;
            })

            .addCase(fetchDemo.rejected, (state) => {
                state.loading = false;
                state.error = "API failed";
            });
    },
});

export default demoSlice.reducer;