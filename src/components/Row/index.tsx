import React from 'react';
import { View, ViewProps } from 'react-native';
import styles from './row.styles';

interface Props extends ViewProps {
  justify?: 'center' | 'space-around' | 'space-between'
}

function Row(props: Props): React.ReactElement<Props> {
  const {
    style,
    children,
    justify,
  } = props;

  return (
    <View style={[styles.container, style, { justifyContent: justify }]}>
      {children}
    </View>
  );
}

export default Row;
