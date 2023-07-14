import { render } from '@testing-library/react-native';
import React from 'react';
import Button from '../index';

jest.mock('react-native-linear-gradient', () => 'LinearGradient');
jest.mock('react-native-size-matters', () => ({
  verticalScale: jest.fn(),
  moderateScale: jest.fn(),
  moderateVerticalScale: jest.fn(),
}));

describe('Button', () => {
  test("Should component render correctly", () => {
    const wrapper = render(<Button label="" onPress={jest.fn()} />);
    wrapper.findByTestId("button");
  });
});
