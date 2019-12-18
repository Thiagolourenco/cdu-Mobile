export function signInRequest(email, password) {
  return {
    type: "@auth/SIGN_IN_REQUEST",
    payload: { email, password }
  };
}

export function signInSuccess(token, user) {
  return {
    type: "@auth/SIGN_IN_SUCCESS",
    payload: { token, user }
  };
}

export function signUpRequest(name, email, password) {
  return {
    type: "@auth/SIGN_UP_REQUEST",
    payload: { name, email, password }
  };
}

export function forgotPasswordRequest(email, redirect_url) {
  return {
    type: "@auth/FORGOT_PASSWORD_REQUEST",
    payload: { email, redirect_url }
  };
}

export function signFailure() {
  return {
    type: "@auth/SIGN_FAILURE"
  };
}

export function signOut() {
  return {
    type: "@auth/SIGN_OUT"
  };
}
