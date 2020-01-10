import { all, takeLatest, call, put, take } from "redux-saga/effects";
import { showMessage } from "react-native-flash-message";

export { documentsFolksFailure } from "./actions";
import api from "../../../services/api";

export function* documentFolk({ payload }) {
  try {
    const { name_complete, birthdate, course, college, shift, cpf } = payload;

    yield call(api.post, "documents_folk", {
      name_complete,
      birthdate,
      course,
      college,
      shift,
      cpf
    });

    showMessage({
      message: " Cadastro Dos Documento realizado, aguarde confirmação ",
      type: "success"
    });
  } catch (err) {
    showMessage({
      message: "Erro no Cadastro",
      description: "Verifique seus dados, e-mail pode já existir",
      type: "warning"
    });
    // yield put(documentsFolksFailure());
  }
}

export default all([
  takeLatest("@documents/DOCUMENTS_FOLKS_REQUEST", documentFolk)
]);
