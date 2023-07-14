import React from 'react';
import { SafeAreaView, View, ViewProps } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '@constants/colors';
import styles from './container.styles';

interface Props extends ViewProps {
  safeArea?: boolean,
  gradientBackground?: boolean,
  noPadding?: boolean,
}

function Container(props: Props): React.ReactElement<Props> {
  const {
    style,
    children,
    safeArea,
    gradientBackground,
    noPadding,
  } = props;

  const mainView = (
    <View style={[styles.container, style, noPadding && { padding: 0 }]}>
      {
        gradientBackground ? (
          <LinearGradient
            locations={[0.6, 0.9]}
            colors={[Colors.WHITE, Colors.DARK_GRAY]}
            style={styles.shadowBackground}
          />
        ) : null
      }
      {children}
    </View>
  );
  if (safeArea) {
    return (
      <SafeAreaView style={styles.container}>
        {mainView}
      </SafeAreaView>
    );
  }
  return mainView;
}

export default Container;
