import styled from "styled-components/native";
import {Platform} from 'react-native'
import {ifIphoneX} from 'react-native-iphone-x-helper'

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

export const ImagePerfil = styled.Image`
  width: ${Platform.OS === 'ios' ? 130 : 157}px;
  height: ${Platform.OS === 'ios' ? 125 : 152}px;
  border-radius: ${Platform.OS === 'ios' ? 65 : 80}px;
  background: rgba(196, 196, 196, 0.41  );
  margin-top: 30px;
`;

export const Content = styled.View`
  margin-top: ${Platform.OS === 'ios' ? 20 : 50}px;

  align-self: flex-start;
  margin-left: 15%;
`;

export const Label = styled.Text`
  font-size: ${Platform.OS === 'ios' ? 15 : 18}px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 5px;
`;

export const InfoUser = styled.Text`
  font-size: ${Platform.OS === 'ios' ? 15 : 18};
  font-weight: bold;
  margin-top: 5px;
  color: rgba(0, 0, 0, 0.6);
`;

export const ButtonGenerate = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  width: ${Platform.OS === 'ios' ? 180 : 200}px;
  height: ${Platform.OS === 'ios' ? 45 : 50}px;
  background: rgba(53, 79, 171, 0.94);
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-top: ${Platform.OS ===  'ios' ? 25 : 80}px;
`;

export const ButtonText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? 15 : 18}px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
`;
