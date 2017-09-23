export interface ColorPalate {
  transparent: string;
  black: string;
  white: string;
  light: {
    black: string;
    white: string;
    bar: string;
    gray01: string;
    gray02: string;
    gray03: string;
    gray04: string;
    gray06: string;
    gray08: string;
    gray10: string;
    gray12: string;
    brand00Dark: string;
    brand00: string;
    brand04: string;
    brand06: string;
    brand08: string;
    red: string;
    magenta: string;
    yellow: string;
    green: string;
  };
  dark: {
    black: string;
    white: string;
    bar: string;
    gray02: string;
    gray03: string;
    gray04: string;
    gray06: string;
    gray08: string;
    gray10: string;
    gray11: string;
    gray12: string;
    brand00Light: string;
    brand00: string;
    brand04: string;
    brand06: string;
    brand08: string;
    red: string;
    magenta: string;
    yellow: string;
    green: string;
  };
  highContrast: {
    black: string;
    yellow: string;
    green: string;
  };
  avatars: {
    avatar1: string;
    avatar2: string;
    avatar3: string;
    avatar4: string;
    avatar5: string;
    avatar6: string;
    avatar7: string;
    avatar8: string;
    avatar9: string;
    avatar10: string;
    avatar11: string;
  };
}

export const Colors: ColorPalate = {
  transparent: 'transparent',
  black: '#000000',
  white: '#FFFFFF',
  light: {
    black: '#16233A',
    white: '#FFFFFF',
    bar: '#29384F',
    gray01: '#4e586a',
    gray02: '#525C6D',
    gray03: '#6A7281',
    gray04: '#858C98',
    gray06: '#ABB0B8',
    gray08: '#DEE0E3',
    gray10: '#EEF1F5 ',
    gray12: '#F3F4F5',
    brand00Dark: '#9FA4FE',
    brand00: '#5558AF',
    brand04: '#484B95',
    brand06: '#404283',
    brand08: '#2B2C58',
    red: '#C50E2E',
    magenta: '#E3008C',
    yellow: '#FCD116',
    green: '#7FBA00',
  },
  dark: {
    black: '#2B2B30',
    white: '#FFFFFF',
    bar: '#222226',
    gray02: '#C8C8C9',
    gray03: '#B3B3B4',
    gray04: '#9A9A9C',
    gray06: '#77777B',
    gray08: '#49494D',
    gray10: '#404045',
    gray11: '#3A3A3F',
    gray12: '#36363B',
    brand00Light: '#5558AF',
    brand00: '#9FA4FE',
    brand04: '#878BD8',
    brand06: '#777BBF',
    brand08: '#50527F',
    red: '#ED1B3E',
    magenta: '#F236B8',
    yellow: '#FBC940',
    green: '#88BC2B',
  },
  highContrast: {
    black: '#000000',
    yellow: '#FFFF01',
    green: '#3FF23F',
  },
  avatars: {
    avatar1: '#B3DBF2',
    avatar2: '#A7CFE8',
    avatar3: '#64A2CC',
    avatar4: '#62CCDD',
    avatar5: '#92E0EA',
    avatar6: '#ABDDD3',
    avatar7: '#D8E27D',
    avatar8: '#F7B189',
    avatar9: '#EF6950',
    avatar10: '#E6808A',
    avatar11: '#EE9889',
  },
};