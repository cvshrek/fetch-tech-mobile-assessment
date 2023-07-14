import { Colors } from '@constants/colors';
import { SCREEN_HEIGHT } from '@utils';
import { StyleSheet } from 'react-native';

const bottomDialogStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    position: 'absolute',
    height: SCREEN_HEIGHT / 1.5,
    width: '100%',
    backgroundColor: Colors.WHITE,
    alignSelf: 'flex-end',
    bottom: 0,
  },
});

export default bottomDialogStyles;
