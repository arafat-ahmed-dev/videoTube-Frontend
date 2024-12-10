import { configureStore } from "@reduxjs/toolkit";
import AuthSilce from "./Slice/AuthSilce";
const store = configureStore({
  reducer: {
    auth: AuthSilce
  },
});

export default store;
