import { Dimens } from '@constants/dimens';
import { StyleSheet } from 'react-native';

const floatButtonStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'white',
    width: Dimens.DIMEN_40,
    height: Dimens.DIMEN_40,
    borderRadius: Dimens.DIMEN_40 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default floatButtonStyles;
