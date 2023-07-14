import React, { useEffect } from 'react';

import FloatButton from '@components/FloatButton';

import {
  Modal,
  Pressable,
  ScrollView,
  ViewProps,
} from 'react-native';
import { Colors } from '@constants/colors';
import { SCREEN_HEIGHT } from '@utils';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import styles from './bottom-dialog.styles';

interface Props extends ViewProps {
  onClose: () => void,
  visible?: boolean,
}

function BottomDialog(props: Props): React.ReactElement<Props> {
  const {
    onClose,
    visible,
    children,
  } = props;

  const translateY = useSharedValue(0);

  const contentStyle = useAnimatedStyle(() => ({
    transform: [{
      translateY: translateY.value,
    }],
  }));

  const handleClose = () => {
    if (onClose) onClose();
  };

  useEffect(() => {
    console.log(translateY.value);
    translateY.value = withTiming(visible ? 0 : SCREEN_HEIGHT, { duration: 350 });
  }, [visible]);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
    >
      <Pressable
        style={styles.container}
      >
        <Animated.View style={[
          styles.content,
          contentStyle,
        ]}
        >
          <FloatButton
            iconName="close"
            iconSize={24}
            iconColor={Colors.GRAY}
            onPress={handleClose}
            position={{
              top: 16,
              right: 16,
            }}
            style={{ zIndex: 1 }}
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            {children}
          </ScrollView>
        </Animated.View>
      </Pressable>
    </Modal>
  );
}

export default BottomDialog;
