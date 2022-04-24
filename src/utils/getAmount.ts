import { FIRST, SECOND } from "./constant";
import { currencyApi } from "../shared/api/CurrencyApi";

export const getAmount = async (
  currency: string,
  currency2: string,
  amount: string,
  type: string
) => {
  if (type === FIRST) {
    const result = await currencyApi.getAmount(currency, currency2, amount);
    return result.result[currency2];
  } else if (type === SECOND) {
    const result = await currencyApi.getAmount(currency2, currency, amount);
    return result.result[currency];
  }
};
