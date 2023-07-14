import { Colors } from '@constants/colors';
import { Dimens } from '@constants/dimens';
import { StyleSheet } from 'react-native';

const buttonSliderStyles = StyleSheet.create({
  container: {
    height: Dimens.DIMEN_56,
    width: '100%',
    backgroundColor: Colors.BLUE,
    position: 'absolute',
    borderRadius: Dimens.DIMEN_56 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  circle: {
    position: 'absolute',
    left: 2,
    width: Dimens.DIMEN_56 - 4,
    height: Dimens.DIMEN_56 - 4,
    borderRadius: Dimens.DIMEN_56 / 2,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default buttonSliderStyles;
