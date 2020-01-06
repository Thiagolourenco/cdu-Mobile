import { all } from "redux-saga/effects";

import auth from "./auth/sagas";
import documents from "./documents/sagas"
// import user from './user/sagas';

export default function* rootSaga() {
  return yield all([auth, documents]);
}
