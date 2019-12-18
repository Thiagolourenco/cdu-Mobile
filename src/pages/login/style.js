import styled from "styled-components/native";
import {Platform} from 'react-native'
import {ifIphoneX} from 'react-native-iphone-x-helper'

export const Background = styled.ImageBackground`
  flex: 1;
`;

export const Container = styled.KeyboardAvoidingView`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Logo = styled.Image`
  margin-top: ${Platform.OS === 'ios' ? 10 : 0}px;
  width: 123px;
  height: 136px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 20px;
  padding: 0 25px;
`;

export const FormInput = styled.View`
  background-color: rgba(196, 196, 196, 0.41);
  height: ${Platform.OS === 'ios' ? 45 : 54 }px;
  flex-direction: row;
  margin-top: 20px;
  border-radius: 5px;
  align-items: center;
  padding-left: 10px;
`;

export const Input = styled.TextInput`
  color: #000;
  margin-left: 10px;
  flex: 1;
  font-size: 16px;
`;

export const ButtonEntrar = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  background-color: rgba(51, 81, 186, 0.9);
  height: ${Platform.OS === 'ios' ? 45 : 54}px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 26px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const ResetPassText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? 14 : 16}px;
  font-weight: bold;
  align-self: center;
  color: rgba(119, 123, 126, 0.9);
  margin-top: 12px;
`;

export const CadastrarText = styled.Text`
  color: rgba(119, 123, 126, 0.9);
  font-size: 13px;
  font-weight: bold;
  margin-top: ${Platform.OS === 'ios' ? 40 : 120}px;
  margin-top: ${() => ifIphoneX() ? 50 : 120 }px;
`;
