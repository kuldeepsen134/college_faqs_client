import { configureStore } from "@reduxjs/toolkit";

import commonSlice from "./commonSlice/commonSlice";

const store = configureStore({
  reducer: {
    commonHeader: commonSlice
  },
});
export default store;
