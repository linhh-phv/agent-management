import {Dimensions, PixelRatio, StyleSheet} from 'react-native';
import {checkPlatform} from '../utils';
import {Colors} from './index';
import {Size} from './size';
import {Font} from './typography';

const WINDOW_WIDTH = Dimensions.get('window').width;
const guidelineBaseWidth = 390;

export const scaleSize = (size: number) =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const scaleFont = (size: number) => size * PixelRatio.getFontScale();

export function boxShadow(
  color: string,
  offsetWidth = 0,
  offsetHeight = 10,
  radius = 5,
  opacity = 0.25,
  elevation = 5,
) {
  return {
    shadowColor: color,
    shadowOffset: {
      width: offsetWidth,
      height: offsetHeight,
    },
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: elevation,
  };
}

const CommonStyles = StyleSheet.create({
  shadow: boxShadow('#7F5DF0', 0, 10, 3.5, 0.25, checkPlatform<number>(10, 5)),
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  textSmall: {
    fontSize: Font.FONT_SIZE_12,
  },
  textRegular: {
    fontSize: Font.FONT_SIZE_14,
  },
  textMedium: {
    fontSize: Font.FONT_SIZE_16,
  },
  textLarge: {
    fontSize: Font.FONT_SIZE_20,
  },
  headerStyle: {
    height: checkPlatform<number>(
      Size.height_header_android,
      Size.height_header_ios,
    ),
    paddingHorizontal: Size.size16,
    alignItems: 'center',
  },
});
export default CommonStyles;
