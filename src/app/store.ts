import { userSlice } from "./../features/user/user-slice";
import { configureStore } from "@reduxjs/toolkit";

import { cakeSlice } from "./../features/cake/cake-slice";

const store = configureStore({
  reducer: {
    cake: cakeSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
