import { Text } from '@components';
import React, { ReactNode } from 'react';
import {
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import styles from './button.styles';

interface Props extends TouchableOpacityProps {
  label?: string,
  containerStyle?: ViewStyle,
  labelStyle?: TextStyle,
  backgroundColor?: string,
  labelColor?: string,
  icon?: ReactNode,
}

function Button(props: Props):React.ReactElement {
  const {
    onPress,
    style,
    containerStyle,
    label,
    labelStyle,
    disabled,
  } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.wrapper, style]}
      testID="button"
    >
      <View style={[styles.container, containerStyle]}>
        <Text style={[styles.label, labelStyle]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default Button;
