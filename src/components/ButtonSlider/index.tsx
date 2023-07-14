import React, { useCallback } from 'react';
import { ActivityIndicator, ViewProps } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
  runOnJS, useAnimatedStyle, useSharedValue, withTiming,
} from 'react-native-reanimated';
import { SCREEN_WIDTH } from '@utils';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { moderateVerticalScale } from 'react-native-size-matters';

import textStyles from '@components/Text/text.style';
import { FontSizes } from '@constants/fonts';
import { Colors } from '@constants/colors';
import styles from './button-slider.styles';

interface Props extends ViewProps {
  label?: string,
  draggable?: boolean,
  showLoading?: boolean,
  onDragEnd?: (e: { x: number}) => void,
}

interface ButtonSliderRef {

}

const MAX_SLIDE_WIDTH = SCREEN_WIDTH - moderateVerticalScale(106);

const ButtonSlider = React.forwardRef<ButtonSliderRef, Props>((props, ref): React.JSX.Element => {
  const {
    label,
    draggable,
    showLoading,
    onDragEnd,
  } = props;
  const translateX = useSharedValue(0);
  const context = useSharedValue({ x: 0 });

  const handleDragEnd = useCallback(() => {
    'worklet';

    if (onDragEnd) {
      runOnJS(onDragEnd)({ x: translateX.value });
    }
  }, []);

  const gesture = Gesture.Pan()
    .enabled(!!draggable)
    .onStart(() => {
      context.value = { x: translateX.value };
    })
    .onUpdate((event) => {
      translateX.value = event.translationX + context.value.x;
    })
    .onEnd(() => {
      if (translateX.value < MAX_SLIDE_WIDTH / 2) {
        translateX.value = withTiming(0);
      }
      if (translateX.value >= MAX_SLIDE_WIDTH / 2) {
        translateX.value = withTiming(MAX_SLIDE_WIDTH, {}, handleDragEnd);
      }
    });

  const sliderStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: Math.min(Math.max(translateX.value, 0), MAX_SLIDE_WIDTH) }],
  }));

  const textStyle = useAnimatedStyle(() => ({
    color: translateX.value > 0 ? Colors.WHITE : Colors.BLACK,
  }));

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.container]}>
        <Animated.Text
          style={[
            textStyles.text,
            textStyles.textBold,
            {
              fontSize: FontSizes.FONT_18,
              opacity: 1,
            },
            textStyle,
          ]}
        >
          {label}
        </Animated.Text>
        <Animated.View style={[styles.circle, sliderStyle]}>
          {
            showLoading ? (
              <ActivityIndicator size="small" />
            ) : (
              <Icon name="swipe" size={26} />
            )
          }
        </Animated.View>
      </Animated.View>
    </GestureDetector>
  );
});

export default ButtonSlider;
