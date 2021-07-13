import React from 'react';
import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
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
            </UserWrapper>
        </Header>
      </Container>
    );
}
