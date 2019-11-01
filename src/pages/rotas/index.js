import React from "react";
import { Text } from "react-native";

import background from "../../assests/background.png";

import {
  Background,
  Container,
  Content,
  ContentValue,
  ContentInfo,
  TitleRoute,
  TextHora,
  TextTurno,
  TextHour
} from "./style";
import Icon from "@expo/vector-icons/MaterialIcons";

function Rotas() {
  return (
    <Background source={background}>
      <Container>
        <Content>
          <ContentValue>
            <Icon
              name="directions-bus"
              size={51}
              color="#000"
              style={{ marginLeft: 20 }}
            />
            <ContentInfo>
              <TitleRoute>ROTA: UNI7 - FIC</TitleRoute>
              <TextHora>HORÁRIO</TextHora>
              <TextTurno>Manhã</TextTurno>
              <TextHour>Saída: 06:10 e Chegada: 11:50</TextHour>
              <TextTurno>Noite</TextTurno>
              <TextHour>Saída: 17:10 e Chegada: 23:20</TextHour>
            </ContentInfo>
          </ContentValue>
        </Content>
        <Content>
          <ContentValue>
            <Icon
              name="directions-bus"
              size={51}
              color="#000"
              style={{ marginLeft: 20 }}
            />
            <ContentInfo>
              <TitleRoute>ROTA: UFC - IFCE</TitleRoute>
              <TextHora>HORÁRIO</TextHora>
              <TextTurno>Manhã</TextTurno>
              <TextHour>Saída: 06:10 e Chegada: 11:50</TextHour>
              <TextTurno>Noite</TextTurno>
              <TextHour>Saída: 17:10 e Chegada: 23:20</TextHour>
            </ContentInfo>
          </ContentValue>
        </Content>
        <Content>
          <ContentValue>
            <Icon
              name="directions-bus"
              size={51}
              color="#000"
              style={{ marginLeft: 20 }}
            />
            <ContentInfo>
              <TitleRoute>ROTA: FIC2</TitleRoute>
              <TextHora>HORÁRIO</TextHora>
              <TextTurno>Manhã</TextTurno>
              <TextHour>Saída: 06:10 e Chegada: 11:50</TextHour>
              <TextTurno>Noite</TextTurno>
              <TextHour>Saída: 17:10 e Chegada: 23:20</TextHour>
            </ContentInfo>
          </ContentValue>
        </Content>
      </Container>
    </Background>
  );
}

export default Rotas;
