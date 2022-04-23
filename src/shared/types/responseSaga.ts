export interface ResponseSaga {
  base: string;
  ms: number;
  result: Result;
  updated: string;
}

interface Result {
  UAH?: number;
  USD?: number;
  EUR?: number;
}
