import React, { useCallback, useEffect, useImperativeHandle } from 'react';
import { ViewProps } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { SCREEN_HEIGHT } from '@utils';

import styles from './bottom-sheet.styles';

interface Props extends ViewProps {
  minHeight?: number,
  maxHeight?: number,
  defaultHeight?: number,
  draggable?: boolean,
  showBackDrop?: boolean,
  onDragEnd?: (e: { y: number}) => void,
}

export interface BottomSheetRef {
  scrollTo: (destination: number) => void,
}

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

const BottomSheet = React.forwardRef<BottomSheetRef, Props>((props, ref): React.JSX.Element => {
  const {
    children,
    minHeight,
    maxHeight,
    defaultHeight,
    draggable,
    onDragEnd,
  } = props;
  const translateY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });

  const handleDragEnd = useCallback(() => {
    'worklet';

    if (onDragEnd) {
      runOnJS(onDragEnd)({ y: translateY.value });
    }
  }, []);

  const scrollTo = useCallback((destination: number) => {
    'worklet';

    translateY.value = withTiming(-destination);
  }, []);

  useImperativeHandle(ref, () => ({
    scrollTo,
  }), []);

  const gesture = Gesture.Pan()
    .enabled(draggable ?? true)
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      if (event.translationY < -(minHeight || 0)) return;
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      if (translateY.value > -(minHeight || 0)) {
        translateY.value = withTiming(-(minHeight ?? 0));
      }
      if (translateY.value < -SCREEN_HEIGHT / 1.9) {
        translateY.value = withTiming(-(maxHeight ?? SCREEN_HEIGHT), {}, handleDragEnd);
      }
      handleDragEnd();
    });

  useEffect(() => {
    translateY.value = withTiming(-(defaultHeight ?? SCREEN_HEIGHT / 2));
  }, []);

  const rBottomSheetStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.container, rBottomSheetStyle]}>
        {children}
      </Animated.View>
    </GestureDetector>
  );
});

export default BottomSheet;
