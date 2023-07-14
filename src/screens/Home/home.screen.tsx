import { Container, Text } from '@components';
import React from 'react';

function HomeScreen(): React.ReactElement {
  return (
    <Container safeArea>
      <Text isBold>
        HOME
      </Text>
    </Container>
  );
}

export default HomeScreen;
