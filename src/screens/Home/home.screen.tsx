import { Container, Text } from '@components';
import React from 'react';

function HomeScreen(): React.ReactElement {
  return (
    <Container safeArea>
      <Text style={{ fontSize: 20 }} isBold>
        HOME
      </Text>
      <Container style={{ backgroundColor: 'blue', padding: 16 }}>
        <Text style={{ fontSize: 20 }} isBold>
          HOME
        </Text>
      </Container>
    </Container>
  );
}

export default HomeScreen;
