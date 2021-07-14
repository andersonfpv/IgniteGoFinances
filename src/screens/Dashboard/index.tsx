import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
} from "./styles";

export function Dashboard(){
    return (
      <Container>
        <Header>
          <UserWrapper>
            <UserInfo>
              <Photo source={{ uri: "https://github.com/andersonfpv.png" }} />
              <User>
                <UserGreeting>Olá</UserGreeting>
                <UserName>Anderson</UserName>
              </User>
            </UserInfo>
            <Icon name="power"/>

          </UserWrapper>
        </Header>
        <HighlightCard />
      </Container>
    );
}
