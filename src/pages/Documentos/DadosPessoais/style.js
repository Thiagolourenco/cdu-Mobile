import styled from "styled-components/native";
import { Platform } from "react-native";

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
  font-size: ${Platform.OS === 'ios' ? 20 :26}px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
`;

export const Content = styled.View`
  flex: 1;
  margin-top: 15px;
  /* justify-content: flex-start; */
`;

export const TextButton = styled.Text`
  font-size: ${Platform.OS === 'ios' ? 16 : 18 }px ;
  color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Input = styled.TextInput`
  width: ${Platform.OS === 'ios' ? 290 : 345}px;
  height: ${Platform.OS === 'ios' ? 45 : 50 }px;
  color: rgba(255, 255, 255, 0.8);
  padding-left: 10px;
  border-radius: 5px;
  background: rgba(196, 196, 196, 0.41);
`;

export const ButtonSelectPicker = styled.TouchableOpacity`
  width: ${Platform.OS === 'ios' ? 290 : 345}px;
  height: ${Platform.OS === 'ios' ? 45 : 50 }px;
  color: rgba(255, 255, 255, 0.8);
  padding-left: 10px;
  border-radius: 5px;
  background: rgba(196, 196, 196, 0.41);
`;

export const SelectPicker = styled.Picker`
  color: rgba(255, 255, 255, 0.8);
  padding-left: 10px;
  border-radius: 5px;
  background: rgba(196, 196, 196, 0.41);

`;

export const ButtonAdd = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  height: ${Platform.OS === 'ios' ? 60 :70 }px;
  width: ${Platform.OS === 'ios' ? 60 :70 }px;
  border-radius: 35px;
  background: rgba(53, 79, 171, 0.94);
  justify-content: center;
  align-items: center;
  position: relative;
  align-self: flex-end;
  margin-top: ${Platform.OS === 'ios' ? 330 : 470}px;
  margin-right: ${Platform.OS === 'ios' ? 20 : 40}px;
`;
