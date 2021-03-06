import styled from "styled-components/native";
import { Platform } from "react-native";

export const Background = styled.ImageBackground`
  flex: 1;
`;

export const Container = styled.KeyboardAvoidingView`
  /* justify-content: center; */
  margin-top: 30px;
  align-items: center;
  /* flex: 1; */
`;

export const Header = styled.View`
  background: #f9f0f0;
  margin-top: 20px;
  border-radius: 20px;
  /* width: ${Platform.OS === 'ios' ? 290 : 349}px; */
  width: 90%;
  height: ${Platform.OS === 'ios' ? 140 : 180}px;
`;

export const Content = styled.View``;

export const List = styled.View`
  background: rgba(111, 134, 216, 0.94);
  height: 98px;
  width: 90%;
  border-radius: 15px;
  margin-left: 23px;
  margin-top: 30px;
`;
