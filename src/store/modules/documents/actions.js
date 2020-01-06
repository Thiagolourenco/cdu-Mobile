export function documentsFolkRequest(
  namecomplete,
  birthdate,
  course,
  college,
  shift,
  cpf
) {
  return {
    type: "@documents/DOCUMENTS_FOLKS_REQUEST",
    payload: { namecomplete, birthdate, course, college, shift, cpf }
  };
}

export function documentsFolksFailure() {
  return {
    type: "@documents/DOCUMENTS_FOLKS_FAILURE"
  };
}
