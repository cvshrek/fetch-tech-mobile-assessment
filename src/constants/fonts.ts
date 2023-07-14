import { scaleFont } from "@utils";

export enum Fonts {
  PRIMARY_FONT_LIGHT = 'PlusJakartaSans-ExtraLight',
  PRIMARY_FONT_REGULAR = 'PlusJakartaSans-Regular',
  PRIMARY_FONT_BOLD = 'PlusJakartaSans-SemiBold',
}

export enum FontSizes {
  FONT_10 = scaleFont(10),
  FONT_14 = scaleFont(14),
  FONT_16 = scaleFont(16),
  FONT_18 = scaleFont(18),
  FONT_22 = scaleFont(22),
  FONT_24 = scaleFont(24),
  FONT_28 = scaleFont(28),
  FONT_32 = scaleFont(32),
  FONT_64 = scaleFont(64),
}
