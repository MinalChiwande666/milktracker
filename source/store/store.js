import { configureStore } from "@reduxjs/toolkit";

import { statusget } from "./slice/statusSlice";

export const store = configureStore({
    reducer:{
        status:statusget.reducer
    }
})