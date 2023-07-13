import { Dimens } from '@constants/dimens';
import { StyleSheet } from 'react-native';

const floatButtonStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'white',
    width: Dimens.DIMEN_48,
    height: Dimens.DIMEN_48,
    borderRadius: Dimens.DIMEN_48 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default floatButtonStyles;
