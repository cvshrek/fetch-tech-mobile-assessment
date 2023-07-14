import { StyleSheet } from 'react-native';
import { Colors } from '@constants/colors';
import { FontSizes, Fonts } from '@constants/fonts';

const textStyles = StyleSheet.create({
  text: {
    fontFamily: Fonts.PRIMARY_FONT_REGULAR,
    fontSize: FontSizes.FONT_16,
    color: Colors.BLACK,
  },
  textLight: {
    fontFamily: Fonts.PRIMARY_FONT_LIGHT,
  },
  textBold: {
    fontFamily: Fonts.PRIMARY_FONT_BOLD,
  },
});

export default textStyles;
