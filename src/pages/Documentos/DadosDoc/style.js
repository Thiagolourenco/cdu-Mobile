import styled from "styled-components/native";

export const Background = styled.ImageBackground`
  flex: 1;
`;

export const Container = styled.KeyboardAvoidingView`
  /* margin-top: 40px; */
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 26px;
  color: rgba(255, 255, 255, 0.8);
  /* text-align: center; */
  font-weight: bold;
  margin-left: 85px;
`;

export const Header = styled.View`
  margin-left: 20px;
  margin-top: 35px;
  align-self: flex-start;
  flex-direction: row;
`;

export const Content = styled.ScrollView`
  margin-top: 15px;
`;

export const TextButton = styled.Text`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ButtonFile = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  width: 345px;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-radius: 15px;
  background: rgba(196, 196, 196, 0.41);
  margin-bottom: 8px;
`;

export const Input = styled.TextInput`
  width: 345px;
  height: 50px;
  padding-left: 10px;
  border-radius: 15px;
  background: rgba(196, 196, 196, 0.41);
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 20px;
`;

export const ButtonFinalizar = styled.TouchableOpacity`
  width: 161px;
  height: 50px;
  border-radius: 15px;
  background: rgba(53, 79, 171, 0.94);
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const ButtonTextFinal = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
  font-weight: bold;
`;

export const ButtonFileText = styled.Text`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
`;
