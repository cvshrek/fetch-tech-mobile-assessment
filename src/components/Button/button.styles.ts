import { Colors } from '@constants/colors';
import { Dimens } from '@constants/dimens';
import { StyleSheet } from 'react-native';

const containerStyles = StyleSheet.create({
  wrapper: {
    height: Dimens.DIMEN_42,
    borderRadius: Dimens.DIMEN_42 / 2,
    backgroundColor: Colors.BLACK,
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: Dimens.SPACE_16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: Colors.WHITE,
  },
  inActive: {
    backgroundColor: Colors.LIGHT_GRAY,
  },
  inActiveLabel: {
    backgroundColor: Colors.DARK_GRAY,
  },
});

export default containerStyles;
