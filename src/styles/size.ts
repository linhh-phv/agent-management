import { Dimensions } from 'react-native';
import { scaleSize } from './common';

export const Size = {
  WINDOW_WIDTH: Dimensions.get('window').width,
  WINDOW_HEIGHT: Dimensions.get('window').height,
  borderRadiusMin: 15,
  borderRadiusMax: 50,
  height_header_android: scaleSize(56),
  height_header_ios: scaleSize(44),
  sizeIcon: scaleSize(28),
  sizeIconMin: scaleSize(22),
  size5: scaleSize(5),
  size10: scaleSize(10),
  size16: scaleSize(16),
  size24: scaleSize(24),
  size40: scaleSize(40),
  size60: scaleSize(60),
  size64: scaleSize(64),
  size56: scaleSize(56),
  size80: scaleSize(80)
};
