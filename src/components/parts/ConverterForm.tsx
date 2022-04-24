import React, { FC } from "react";

import styles from "../Converter.module.scss";

interface ConverterFormPropTypes {
  value: string;
  currency: string;
  type: string;
  converterAmount: Function;
  converterCurrency: Function;
}

const ConverterForm: FC<ConverterFormPropTypes> = ({
  value,
  currency,
  converterAmount,
  converterCurrency,
  type,
}) => {
  return (
    <>
      <input
        value={value}
        onChange={(e) => converterAmount(e)}
        data-converter={type}
        type="number"
        className={styles.input}
        placeholder={"Введите сумму"}
      />

      <select
        className={styles.select}
        onChange={(e) => converterCurrency(e)}
        data-converter={type}
      >
        <option disabled={currency === "USD"} value="USD">
          USD
        </option>
        <option disabled={currency === "UAH"} value="UAH">
          UAH
        </option>
        <option disabled={currency === "EUR"} value="EUR">
          EUR
        </option>
      </select>
    </>
  );
};

export default ConverterForm;
