import React from 'react';
import Container from '@components/Container';

import { Button, Text } from '@components';
import { FontSizes } from '@constants/fonts';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors } from '@constants/colors';
import styles from './notification-board.styles';

function NotificationBoard(): React.ReactElement {
  return (
    <Container
      style={styles.container}
    >
      <Container style={{ alignItems: 'center' }}>
        <Icon name="taxi-alert" size={176} color="orange" style={{ paddingVertical: 24 }} />
        <Text
          isBold
          style={{
            fontSize: FontSizes.FONT_32,
            textAlign: 'center',
            marginBottom: 16,
          }}
        >
          You have not arrived back at Expo
        </Text>
        <Text
          style={{
            fontSize: FontSizes.FONT_18,
            textAlign: 'center',
            marginBottom: 16,
            color: Colors.GRAY,
          }}
        >
          Please report back at Foyer 1 to complete the job.

        </Text>
      </Container>
      <Button label="Ok" style={{ height: 56, borderRadius: 5 }} />
    </Container>
  );
}

export default NotificationBoard;
