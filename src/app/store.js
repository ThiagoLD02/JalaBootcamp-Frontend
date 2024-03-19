import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userDataReducer from "../features/userData/userDataSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    userData: userDataReducer,
  },
});
