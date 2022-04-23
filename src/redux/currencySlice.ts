import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initialStateTypes } from "../shared/types/redux/currency";

const initialState: initialStateTypes = {
  USD: null,
  EUR: null,
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setUSD: (state, payload: PayloadAction<number>) => {
      state.USD = payload.payload;
    },

    setEUR: (state, payload: PayloadAction<number>) => {
      state.EUR = payload.payload;
    },
  },
});

export const { setUSD, setEUR } = currencySlice.actions;

export default currencySlice.reducer;
