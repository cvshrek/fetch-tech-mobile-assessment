import { Colors } from '@constants/colors';
import { Dimens } from '@constants/dimens';
import { StyleSheet } from 'react-native';

const containerStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Dimens.SPACE_16,
    backgroundColor: Colors.WHITE,
  },
  shadowBackground: {
    ...StyleSheet.absoluteFillObject,
    width: null,
    height: null,
  },
});

export default containerStyles;
