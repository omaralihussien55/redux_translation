import { configureStore } from "@reduxjs/toolkit";
import translateSlice from "../redux/translateSlice";

const store = configureStore({
    reducer:{
        arr:translateSlice
    }
})

export default store