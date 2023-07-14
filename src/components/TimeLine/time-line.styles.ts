import { Colors } from '@constants/colors';
import { Dimens } from '@constants/dimens';
import { StyleSheet } from 'react-native';

const timeLineStyles = StyleSheet.create({
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

export default timeLineStyles;
