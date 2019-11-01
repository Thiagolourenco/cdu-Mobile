import styled from "styled-components/native";

export const Background = styled.ImageBackground`
  flex: 1;
`;

export const Container = styled.KeyboardAvoidingView`
  /* justify-content: center; */
  margin-top: 30px;
  align-items: center;
  /* flex: 1; */
`;

export const Content = styled.View`
  width: 90%;
  height: 178px;
  background: rgba(111, 134, 216, 0.96);
  margin-top: 30px;
  border-radius: 15px;
`;

export const ContentValue = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
`;

export const ContentInfo = styled.View`
  margin-left: 15px;
`;

export const TitleRoute = styled.Text`
  font-size: 16px;
  align-self: center;
  margin-bottom: 10px;
`;

export const TextHora = styled.Text`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const TextTurno = styled.Text`
  font-size: 14px;
`;

export const TextHour = styled.Text`
  font-size: 14px;
  margin-bottom: 12px;
`;
