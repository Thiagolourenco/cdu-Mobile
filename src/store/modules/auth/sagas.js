import { Alert } from "react-native";
import { all, takeLatest, call, put, take } from "redux-saga/effects";

import { signInSuccess, signFailure } from "./actions";

import api from "../../../services/api";

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, "sessions", { email, password });

    const { token, user } = response.data;

    if (user.provider) {
      Alert.alert(
        "Erro no login",
        "O usuário não pode ser prestador de serviços"
      );
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    // history.push('/dashboard');
  } catch (err) {
    Alert.alert(
      "Falha na autenticação",
      "Houve um error no login, verifique seus dados"
    );
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, "users", { name, email, password });

    // Alert.alert(
    //   'Usuári',
    //   'O usuário não pode ser prestador de serviços',
    // );
  } catch (err) {
    Alert.alert(
      "Erro no Cadastro",
      "Verifique seus dados, e-mail pode já existir"
    );
    yield put(signFailure());
  }
}

export function* forgotPassword({ payload }) {
  try {
    const { email, redirect_url } = payload;

    yield call(api.post, "passwords", { email, redirect_url });
  } catch (err) {
    alert("Erro ao Cadastrar");
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
