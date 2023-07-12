import { Container, Text } from '@components';
import React from 'react';

function JobDetailsScreen(): React.ReactElement {
  return (
    <Container>
      <Text style={{ fontSize: 20 }} isBold>
        JOB DETAILS
      </Text>
    </Container>
  );
}

export default JobDetailsScreen;
