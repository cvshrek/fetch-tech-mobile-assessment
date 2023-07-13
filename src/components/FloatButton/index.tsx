import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './float-button.styles';

interface FBProps extends TouchableOpacityProps {
  iconName?: string,
  iconColor?: string,
  iconSize?: number,
  position?: {
    top?: number,
    bottom?: number,
    right?: number,
    left?: number,
  }
}

function FloatButton(props: FBProps): React.ReactElement<FBProps> {
  const {
    onPress,
    iconName,
    iconColor,
    iconSize,
    position,
    style,
  } = props;
  return (
    <TouchableOpacity
      style={[styles.container, style, { ...position }]}
      onPress={onPress}
    >
      <Icon name={iconName || ''} color={iconColor} size={iconSize} />
    </TouchableOpacity>
  );
}

export default FloatButton;
