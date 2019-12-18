import styled from "styled-components/native";
import {Platform} from 'react-native'
import { ifIphoneX } from "react-native-iphone-x-helper";

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

export const Header = styled.View`
  flex-direction: row;
  margin-top: ${Platform.OS === 'ios' ? 10 : 30}px;
`;

export const TitleCdu = styled.Text`
  font-size: ${Platform.OS === 'ios' ? 18 :24}px;
  font-weight: bold;
  margin-top: 5px;
  color: rgba(255, 255, 255, 0.8);
`;

export const ImagePerfil = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: rgba(196, 196, 196, 0.41);
  margin-top: 20px;
`;

export const Content = styled.View`
  margin-top: ${Platform.OS === 'ios' ? 10 :40}px;
  align-self: flex-start;
  margin-left: 30px;
`;

export const Label = styled.Text`
  font-size: ${Platform.OS === 'ios' ? 15 : 18}px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 5px;
`;

export const InfoUser = styled.Text`
  font-size: ${Platform.OS === 'ios' ? 15 : 18}px;
  font-weight: bold;
  margin-top: 5px;
  color: rgba(0, 0, 0, 0.6);
`;

export const Footer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

export const InfoImportant = styled.Text`
  font-size: 14px;
  font-weight: bold;
  align-self: center;
  color: rgba(0, 0, 0, 0.6);
`;
