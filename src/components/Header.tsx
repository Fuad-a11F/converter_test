import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../shared/custom-hooks/redux";
import { sagaActions } from "../redux/saga/sagaAction";
import styles from "./Header.module.scss";

const Header = () => {
  const dispatch = useAppDispatch();

  const usd: number | null = useAppSelector((state) => state.currencySlice.USD);
  const eur: number | null = useAppSelector((state) => state.currencySlice.EUR);

  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_USD });
    dispatch({ type: sagaActions.FETCH_EUR });
  }, []);

  return (
    <div className={styles.header}>
      <p className={styles.header__title}>Конвертер</p>

      <div>
        <div className={styles.row}>
          <p>
            <span>USD</span> - {usd?.toString() || "Загрузка..."} ₴
          </p>
          <p>
            <span>EUR</span> - {eur?.toString() || "Загрузка..."} ₴
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
