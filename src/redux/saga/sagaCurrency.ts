import { call, takeEvery, put } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import { sagaActions } from "./sagaAction";
import {setEUR, setUSD} from "../currencySlice";
import {currencyApi} from "../../shared/api/CurrencyApi";

function* fetchUsd() {
  const contact: AxiosResponse<any> = yield call(() =>
    currencyApi.getUsdToUah()
  );

  yield put(setUSD(contact.data));
}

function* fetchEur() {
  const contact: AxiosResponse<any> = yield call(() =>
    currencyApi.getEurToUah()
  );

  yield put(setEUR(contact.data));
}

function* getCurrencySaga() {
  yield takeEvery(sagaActions.FETCH_USD, fetchUsd);
  yield takeEvery(sagaActions.FETCH_EUR, fetchEur);
}

export default getCurrencySaga;
