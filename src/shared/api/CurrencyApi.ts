import axios from "axios";

import { API_KEY, BASE_URL } from "../../utils/constant";

export const currencyApi = {
  getUsdToUah: async () => {
    const currency = await axios.get(
      `${BASE_URL}/fetch-one?from=USD&to=UAH&api_key=${API_KEY}`
    );

    return currency.data;
  },

  getEurToUah: async () => {
    const currency = await axios.get(
      `${BASE_URL}/fetch-one?from=EUR&to=UAH&api_key=${API_KEY}`
    );

    return currency.data;
  },

  getAmount: async (from: string, to: string, amount: string) => {
    const currency = await axios.get(
      `${BASE_URL}/convert?from=${from}&to=${to}&amount=${amount}&api_key=${API_KEY}`
    );

    return currency.data;
  },
};
