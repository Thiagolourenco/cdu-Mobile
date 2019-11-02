import styled from "styled-components/native";

export const Background = styled.ImageBackground`
  flex: 1;
`;

export const Container = styled.KeyboardAvoidingView`
  /* justify-content: center; */
  margin-top: 50px;
  align-items: center;
  /* flex: 1; */
`;

export const Title = styled.Text`
  font-size: 26px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
`;

export const Content = styled.View`
  flex: 1;
  margin-top: 15px;
  /* justify-content: flex-start; */
`;

export const InputText = styled.Text`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
  margin-bottom: 14px;
`;

export const Input = styled.TextInput`
  width: 345px;
  height: 55px;
  border-radius: 15px;
  background: rgba(196, 196, 196, 0.41);
`;

export const ButtonAdd = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  height: 70px;
  width: 70px;
  border-radius: 35px;
  background: rgba(53, 79, 171, 0.94);
  justify-content: center;
  align-items: center;
  position: relative;
  align-self: flex-end;
  margin-top: 500px;
  margin-right: 40px;
`;
