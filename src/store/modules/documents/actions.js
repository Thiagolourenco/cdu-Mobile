export function documentsFolkRequest(
  name_complete,
  birthdate,
  course,
  college,
  shift,
  cpf
) {
  return {
    type: "@documents/DOCUMENTS_FOLKS_REQUEST",
    payload: { name_complete, birthdate, course, college, shift, cpf }
  };
}

export function documentsFolksFailure() {
  return {
    type: "@documents/DOCUMENTS_FOLKS_FAILURE"
  };
}
