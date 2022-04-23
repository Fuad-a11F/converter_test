import { call, takeEvery, put } from "redux-saga/effects";

import { sagaActions } from "./sagaAction";
import { setEUR, setUSD } from "../currencySlice";
import { currencyApi } from "../../shared/api/CurrencyApi";
import { ResponseSaga } from "../../shared/types/responseSaga";

function* fetchUsd() {
  const contact: ResponseSaga = yield call(() => currencyApi.getUsdToUah());

  yield put(setUSD(contact.result.UAH!));
}

function* fetchEur() {
  const contact: ResponseSaga = yield call(() => currencyApi.getEurToUah());

  yield put(setEUR(contact.result.UAH!));
}

function* getCurrencySaga() {
  yield takeEvery(sagaActions.FETCH_USD, fetchUsd);
  yield takeEvery(sagaActions.FETCH_EUR, fetchEur);
}

export default getCurrencySaga;
