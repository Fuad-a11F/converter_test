import React, { FC } from "react";

import styles from "./ConverterForm.module.scss";

interface ConverterFormPropTypes {
  value: string;
  currency: string;
  type: string;
  placeholder: string;
  converterAmount: Function;
  converterCurrency: Function;
}

const ConverterForm: FC<ConverterFormPropTypes> = ({
  value,
  currency,
  converterAmount,
  converterCurrency,
  type,
  placeholder,
}) => {
  return (
    <div className={styles.form}>
      <input
        value={value}
        onChange={(e) => converterAmount(e)}
        data-converter={type}
        type="number"
        className={styles.input}
        placeholder={placeholder}
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
    </div>
  );
};

export default ConverterForm;
