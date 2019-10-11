import styled from "styled-components/native";

export const Background = styled.ImageBackground`
  flex: 1;
`;

export const Container = styled.KeyboardAvoidingView`
  justify-content: center;
  align-items: center;
  /* flex: 1; */
  margin-top: 30px;
`;

export const Logo = styled.Image`
  width: 90px;
  height: 90px;
  margin-left: 110px;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: rgba(229, 229, 299, 0.9);
  margin-top: 15px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 20px;
  padding: 0 25px;
`;

export const FormInput = styled.View`
  background-color: rgba(196, 196, 196, 0.41);
  height: 54px;
  flex-direction: row;
  margin-top: 20px;
  border-radius: 15px;
  align-items: center;
  padding-left: 10px;
`;

export const Input = styled.TextInput`
  color: #000;
  margin-left: 10px;
  flex: 1;
  font-size: 16px;
`;

export const ButtonReset = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  background-color: rgba(51, 81, 186, 0.9);
  height: 54px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  margin-top: 26px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  margin-left: 30px;
`;
