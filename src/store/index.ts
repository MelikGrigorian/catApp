import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import catReducer from "./slices/CatsSlice";

const store = configureStore({
  reducer: {
    cat: catReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
