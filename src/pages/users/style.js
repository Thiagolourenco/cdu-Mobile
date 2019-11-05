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

export const ImagePerfil = styled.View`
  width: 157px;
  height: 152px;
  border-radius: 80px;
  background: rgba(196, 196, 196, 0.41);
  margin-top: 20px;
`;

export const Content = styled.View`
  margin-top: 50px;
  align-self: flex-start;
  margin-left: 15%;
`;

export const Label = styled.Text`
  font-size: 18;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 5px;
`;

export const InfoUser = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 5px;
  color: rgba(0, 0, 0, 0.6);
`;

export const ButtonGenerate = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  width: 200px;
  height: 50px;
  background: rgba(53, 79, 171, 0.94);
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
`;
