import React, { ChangeEvent, useState } from "react";

import styles from "./Converter.module.scss";
import { FIRST, SECOND } from "../utils/constant";
import ArrowSvg from "./svg/ArrowSvg";
import { getAmount } from "../utils/getAmount";
import ConverterForm from "./parts/ConverterForm";

const Converter = () => {
  const [value, setValue] = useState<string>("");
  const [currency, setCurrency] = useState<string>("USD");
  const [value2, setValue2] = useState<string>("");
  const [currency2, setCurrency2] = useState<string>("UAH");

  const converterAmount = async (event: ChangeEvent<HTMLInputElement>) => {
    const type = event.target.dataset?.converter;
    const amount = event.target.value;
    let result;

    if (amount.length === 0) {
      setValue2("");
      setValue("");
      return;
    }

    switch (type) {
      case FIRST:
        setValue(amount);
        result = await getAmount(currency, currency2, amount, type);
        setValue2(result);
        break;

      case SECOND:
        setValue2(amount);
        result = await getAmount(currency, currency2, amount, type);
        setValue(result);
        break;
    }
  };

  const converterCurrency = async (event: ChangeEvent<HTMLSelectElement>) => {
    const currency_current = event.target.value;
    const type = event.target.dataset?.converter;
    let result;

    if (value === "" && value2 === "") {
      type === FIRST
        ? setCurrency(currency_current)
        : setCurrency2(currency_current);
      return;
    }

    switch (type) {
      case FIRST:
        setCurrency(currency_current);
        result = await getAmount(currency_current, currency2, value, type);
        setValue2(result);
        break;

      case SECOND:
        setCurrency2(currency_current);
        result = await getAmount(currency_current, currency, value2, type);
        setValue(result);
        break;
    }
  };

  return (
    <div className={styles.converter}>
      <h1>Онлайн конвертер</h1>

      <div className={styles.mb_30}>
        <ConverterForm
          converterAmount={converterAmount}
          value={value}
          converterCurrency={converterCurrency}
          currency={currency2}
          type={FIRST}
        />
      </div>

      <ArrowSvg />

      <div className={styles.mt_30}>
        <ConverterForm
          converterAmount={converterAmount}
          value={value2}
          converterCurrency={converterCurrency}
          currency={currency}
          type={SECOND}
        />
      </div>
    </div>
  );
};

export default Converter;
