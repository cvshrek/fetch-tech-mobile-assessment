import React from 'react';
import { Text, TextProps } from 'react-native';
import styles from './text.style';

interface Props extends TextProps {
  isBold?: boolean,
  isLight?: boolean,
}

function AppText(props: Props): React.ReactElement<Props> {
  const {
    style,
    isBold,
    isLight,
    children,
  } = props;
  return (
    <Text
      style={[
        styles.text,
        style,
        isBold && styles.textBold,
        isLight && styles.textLight,
      ]}
    >
      {children}
    </Text>
  );
}

export default AppText;
