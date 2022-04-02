import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 320;

function normalize(size) {
  //   alert(PixelRatio);
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

const fontStyle = {
  mini: {
    fontSize: normalize(9),
  },
  small: {
    fontSize: normalize(12),
  },
  smallx: {
    fontSize: normalize(14),
  },
  medium: {
    fontSize: normalize(17),
  },
  large: {
    fontSize: normalize(20),
  },
  xlarge: {
    fontSize: normalize(24),
  },
};
const weight = {
  normal: {
    fontWeight: 'normal',
  },
  bold: {
    fontWeight: 'bold',
  },
  mini: {
    fontWeight: '200',
  },
  small: {
    fontWeight: '400',
  },
  medium: {
    fontWeight: '600',
  },
  large: {
    fontWeight: '700',
  },
  xlarge: {
    fontWeight: '800',
  },
};
export {fontStyle, weight};
