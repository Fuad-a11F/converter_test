import React, { ChangeEvent, useState } from "react";

import styles from "./Converter.module.scss";
import { currencyApi } from "../shared/api/CurrencyApi";
import { FIRST, SECOND } from "../utils/constant";
import ArrowSvg from "./svg/ArrowSvg";

const Converter = () => {
  const [value, setValue] = useState<string>("");
  const [currency, setCurrency] = useState<string>("USD");
  const [value2, setValue2] = useState<string>("");
  const [currency2, setCurrency2] = useState<string>("UAH");

  const converterAmount = async (
    event: ChangeEvent<HTMLInputElement>,
    setState: Function,
    setState2: Function
  ) => {
    const amount = event.target.value;

    setState(amount);

    if (amount.length !== 0) {
      let result;

      if (event.target.dataset?.converter === FIRST) {
        result = await currencyApi.getAmount(currency, currency2, amount);
        setState2(result.result[currency2]);
      } else if (event.target.dataset?.converter === SECOND) {
        result = await currencyApi.getAmount(currency2, currency, amount);
        setState2(result.result[currency]);
      }
    } else {
      setState2(amount);
    }
  };

  const converterCurrency = async (
    event: ChangeEvent<HTMLSelectElement>,
    setState: Function,
    setState3: Function,
    setState4: Function
  ) => {
    const currency_current = event.target.value;

    setState(currency_current);

    if (value !== "" && value2 !== "") {
      let result;

      if (event.target.dataset?.converter === FIRST) {
        result = await currencyApi.getAmount(
          currency_current,
          currency2,
          value
        );
        setState4(result.result[currency2]);
      } else if (event.target.dataset?.converter === SECOND) {
        result = await currencyApi.getAmount(
          currency_current,
          currency,
          value2
        );
        console.log(result);
        console.log(currency);
        setState4(result.result[currency]);
      }
    }
  };

  return (
    <div className={styles.converter}>
      <h1>Онлайн конвертер</h1>

      <div className={styles.mb_30}>
        <input
          value={value}
          onChange={(e) => converterAmount(e, setValue, setValue2)}
          data-converter={FIRST}
          type="number"
          className={styles.input}
          placeholder={"Введите сумму"}
        />

        <select
          className={styles.select}
          onChange={(e) =>
            converterCurrency(e, setCurrency, setValue, setValue2)
          }
          data-converter={FIRST}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="UAH">UAH</option>
        </select>
      </div>

      <ArrowSvg />

      <div className={styles.mt_30}>
        <input
          value={value2}
          onChange={(e) => converterAmount(e, setValue2, setValue)}
          data-converter={SECOND}
          type="number"
          className={styles.input}
          placeholder={"Ответ"}
        />

        <select
          className={styles.select}
          onChange={(e) =>
            converterCurrency(e, setCurrency2, setValue2, setValue)
          }
          data-converter={SECOND}
        >
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    </div>
  );
};

export default Converter;
