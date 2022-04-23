import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import currencySlice from "./currencySlice";
import getCurrencySaga from "./saga/sagaCurrency";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { currencySlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(
      sagaMiddleware
    ),
});

sagaMiddleware.run(getCurrencySaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
