import { Colors } from '@constants/colors';
import { Dimens } from '@constants/dimens';
import { FontSizes } from '@constants/fonts';
import { StyleSheet } from 'react-native';

const containerStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BLACK,
    padding: Dimens.SPACE_16,
  },
  text: {
    color: Colors.WHITE,
  },
  infoText: {
    fontSize: FontSizes.FONT_14,
  },
  mainInfo: {
    fontSize: FontSizes.FONT_18,
  },
  amount: {
    fontSize: FontSizes.FONT_22,
    paddingBottom: Dimens.SPACE_4,
  },
  timeIcon: {
    marginRight: Dimens.SPACE_4,
  },
  routeContainer: {
    justifyContent: 'flex-start',
    marginVertical: Dimens.SPACE_16,
  },
  routeIcon: {
    color: Colors.BLUE,
    marginTop: 1,
  },
  lineContainer: {
    ...StyleSheet.absoluteFillObject,
    width: 20,
    alignItems: 'center',
  },
  line: {
    position: 'absolute',
    top: Dimens.SPACE_24,
    width: 4,
    bottom: Dimens.SPACE_4,
  },
  lineDraw: {
    flex: 1,
    width: 2,
    backgroundColor: Colors.BLUE,
  },
});

export default containerStyles;
