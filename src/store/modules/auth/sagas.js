import { Alert } from "react-native";
import { all, takeLatest, call, put, take } from "redux-saga/effects";
import { showMessage } from "react-native-flash-message";

import { signInSuccess, signFailure } from "./actions";

import api from "../../../services/api";

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, "sessions", { email, password });

    const { token } = response.data;
    console.log(token);
    // console.log(username);
    // if (username.admin) {
    //   showMessage({
    //     message: "Erro ao Efetuar Login",
    //     description: "Verificar os dados informados",
    //     type: "danger"
    //   });
    //   return;
    // }

    // api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token));

    // history.push('/dashboard');
  } catch (err) {
    console.log(err);
    showMessage({
      message: "Falha na autenticaçao",
      description: "Houve um erro no login, verifique seus dados",
      type: "danger"
    });

    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  console.log(payload);
  try {
    const { username, email, password } = payload;

    yield call(api.post, "users", { username, email, password });

    showMessage({
      message: " Cadastro realizado com sucesso",
      type: "success"
    });
  } catch (err) {
    console.log(err);
    showMessage({
      message: "Erro no Cadastro",
      description: "Verifique seus dados, e-mail pode já existir",
      type: "warning"
    });
    yield put(signFailure());
  }
}

export function* forgotPassword({ payload }) {
  try {
    const { email, redirect_url } = payload;

    yield call(api.post, "passwords", { email, redirect_url });
    showMessage({
      message: "E-mail de recuperacao de senha, foi enviada com sucesso",
      type: "success"
    });
  } catch (err) {
    showMessage({
      message: "Houve um erro ao enviar um e-mail",
      type: "danger"
    });
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest("persist/REHYDRATE", setToken),
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_UP_REQUEST", signUp),
  takeLatest("@auth/FORGOT_PASSWORD_REQUEST", forgotPassword)
]);
