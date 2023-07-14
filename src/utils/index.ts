import { Dimensions, PixelRatio, Platform } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const BASE_WIDTH = 375;
export const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

export const scaleSize = (size: number) => (WINDOW_WIDTH / BASE_WIDTH) * size;

export const scaleFont = (size: number) => size * PixelRatio.getFontScale();

export const isIphoneX = () => {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios'
    && !Platform.isPad
    && !Platform.isTV
    && (dimen.height === 780
      || dimen.width === 780
      || dimen.height === 812
      || dimen.width === 812
      || dimen.height === 844
      || dimen.width === 844
      || dimen.height === 896
      || dimen.width === 896
      || dimen.height === 926
      || dimen.width === 926
      || dimen.height === 852
      || dimen.width === 852
      || dimen.height === 932
      || dimen.width === 932)
  );
};
