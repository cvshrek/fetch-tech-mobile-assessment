import React from 'react';
import {
  View,
  ViewProps,
} from 'react-native';

import styles from './time-line.styles';

interface TimeLineProps extends ViewProps {
  renderIcon?: React.ReactNode,
  shouldDrawLine?: boolean,
}

function TimeLine(props: TimeLineProps): React.ReactElement<TimeLineProps> {
  const {
    renderIcon,
    style,
    shouldDrawLine,
  } = props;
  return (
    <View style={[styles.lineContainer, style]}>
      <View style={[styles.line]}>
        <View style={[shouldDrawLine ? styles.lineDraw : { width: 0 }]} />
      </View>
      {renderIcon}
    </View>
  );
}

export default TimeLine;
