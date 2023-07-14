import { SCREEN_HEIGHT } from '@utils';
import { StyleSheet } from 'react-native';

const bottomSheetStyles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    width: '100%',
    backgroundColor: 'gray',
    position: 'absolute',
    borderRadius: 10,
    top: SCREEN_HEIGHT,
  },
});

export default bottomSheetStyles;
