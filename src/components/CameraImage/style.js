import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const ButtonFoto = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  height: 202px;
  width: 231px;
  background: rgba(196, 196, 196, 0.41);
  border-radius: 15px;
  align-self: center;
  margin-bottom: 8px;
`;

export const ImageFoto = styled.View`
  height: 202px;
  width: 231px;
  /* background: rgba(196, 196, 196, 0.41);
  border-radius: 15px;
  align-self: center;
  margin-bottom: 8px; */
`;
