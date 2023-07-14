import React, { useState, useEffect } from 'react';
import { Text, View, Animated } from 'react-native';


const WordColorAnimation = () => {
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  };

  const interpolateColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['black', 'red'], // Change the colors as per your requirement
  });

  return (
    <View>
      <Text>
        {animation &&
          animation._value &&
          animation._value.toString().split(' ').map((word, index) => (
            <Animated.Text
              key={index}
              style={{ color: interpolateColor }}
            >
              {word}{' '}
            </Animated.Text>
          ))}
      </Text>
    </View>
  );
};

export default WordColorAnimation;