import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const basewaApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://alkyetest-738240239910.us-central1.run.app/myapp/" }),
    endpoints: (bilder) => ({}),
    tagTypes: ["Item"],
}
);

export default basewaApi;