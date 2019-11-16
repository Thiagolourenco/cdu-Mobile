import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const ButtonFoto = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  align-self: center;
  margin-bottom: 8px;
`;

export const ButtonFotoSelect = styled.Text`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ImageFoto = styled.Image`
  height: 150px;
  width: 150px;
  border-radius: 15px;
`;
