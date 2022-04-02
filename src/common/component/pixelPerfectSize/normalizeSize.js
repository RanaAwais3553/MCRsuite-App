import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
// based on iphone 5s's scale
const scale = screenWidth / 320;

export function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export function bottomHstLogoMargin(height) {
  if (height <= 600) {
    return 30;
  } else if (height <= 650) {
    return 34;
  } else if (height <= 700) {
    return 26;
  } else if (height <= 750) {
    return 47;
  } else if (height <= 800) {
    return 59;
  } else if (height <= 850) {
    return 69;
  } else if (height <= 900) {
    return 80;
  }
}
export function bottomTabBarArea(height) {
  if (height <= 600) {
    return screenHeight / 6.5;
  } else if (height <= 650) {
    return screenHeight / 6.5;
  } else if (height <= 700) {
    return screenHeight / 6;
  } else if (height <= 750) {
    return screenHeight / 6;
  } else if (height <= 800) {
    return screenHeight / 6;
  } else if (height <= 850) {
    return screenHeight / 6;
  } else if (height <= 900) {
    return screenHeight / 6;
  }
}
export function tabBarButtonHeight(height) {
  if (height <= 600) {
    return 35;
  } else if (height <= 650) {
    return 42;
  } else if (height <= 700) {
    return 42;
  } else if (height <= 800) {
    return 50;
  } else if (height <= 900) {
    return 57;
  }
}
export function tabBarButtonMarginTop(height) {
  if (height <= 600) {
    return 58;
  } else if (height <= 700) {
    return 85;
  } else if (height <= 800) {
    return 52;
  } else if (height <= 850) {
    return 92;
  } else if (height <= 900) {
    return 114;
  }
}
export function tabBarButtonFontSize(height) {
  if (height <= 600) {
    return screenHeight / 5.5;
  } else if (height <= 700) {
    return screenHeight / 5;
  } else if (height <= 800) {
    return screenHeight / 4.5;
  } else if (height <= 900) {
    return screenHeight / 4;
  }
}

export function progressBarHeight(height) {
  if (height <= 600) {
    return 10;
  } else if (height <= 650) {
    return 11.5;
  } else if (height <= 700) {
    return 12.5;
  } else if (height <= 800) {
    return 15;
  } else if (height <= 850) {
    return 14;
  } else if (height <= 900) {
    return 17.5;
  }
}

export function headerMarginTop(height) {
  if (height <= 600) {
    return 32;
  } else if (height <= 700) {
    return 37;
  } else if (height <= 800) {
    return 45;
  } else if (height <= 900) {
    return 50;
  }
}

export function statCircleComponent(height) {
  if (height <= 600) {
    return 0.7;
  } else if (height <= 650) {
    return 0.7;
  } else if (height <= 700) {
    return 0.8;
  } else if (height <= 800) {
    return 1;
  } else if (height <= 850) {
    return 0.8;
  } else if (height <= 900) {
    return 0.9;
  }
}

export function progressBarContainerHeight(height) {
  if (height <= 600) {
    return screenHeight / 3.2;
  } else if (height <= 700) {
    return screenHeight / 3.1;
  } else if (height <= 800) {
    return screenHeight / 3;
  } else if (height <= 850) {
    return screenHeight / 3.2;
  } else if (height <= 900) {
    return screenHeight / 2.9;
  }
}
export function circleStatContainerHeight(height) {
  if (height <= 600) {
    return screenHeight / 4.3;
  } else if (height <= 700) {
    return screenHeight / 4.5;
  } else if (height <= 800) {
    return screenHeight / 4.4;
  } else if (height <= 850) {
    return screenHeight / 4.4;
  } else if (height <= 900) {
    return screenHeight / 4;
  }
}

export function barCodeScanerHeight(height) {
  if (height <= 600) {
    return screenWidth * 0.7;
  } else if (height <= 700) {
    return screenWidth * 0.9;
  } else if (height <= 750) {
    return screenWidth * 0.8;
  } else if (height <= 800) {
    return screenWidth * 0.7;
  } else if (height <= 850) {
    return screenWidth * 0.7;
  } else if (height <= 900) {
    return screenWidth * 0.7;
  }
}

export function barCodeScanerWidth(width) {
  if (width >= 420) {
    return screenWidth * 0.6;
  } else if (width >= 400) {
    return screenWidth * 0.7;
  } else if (width >= 380) {
    return screenWidth * 0.5;
  } else if (width >= 360) {
    return screenWidth * 0.6;
  } else if (width >= 340) {
    return screenWidth * 0.7;
  } else if (width >= 320) {
    return screenWidth * 0.7;
  } else if (width >= 300) {
    return screenWidth * 0.7;
  }
}
