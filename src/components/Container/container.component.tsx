import React from 'react';
import { View, ViewProps } from 'react-native';
import styles from './container.styles'


function Container(props: ViewProps): React.ReactElement<ViewProps> {
  return (
    <View {...props} style={[styles.container]}></View>
  )
}

export default Container;