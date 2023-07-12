import { Dimensions, PixelRatio } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const BASE_WIDTH = 375;

export const scaleSize = (size: number) => (WINDOW_WIDTH / BASE_WIDTH) * size;

export const scaleFont = (size: number) => size * PixelRatio.getFontScale();
