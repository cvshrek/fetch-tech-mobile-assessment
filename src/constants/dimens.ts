import { moderateScale, verticalScale } from "react-native-size-matters";

export enum Dimens {
  SPACE_4 = verticalScale(4),
  SPACE_8 = verticalScale(8),
  SPACE_16 = verticalScale(16),
  SPACE_24 = verticalScale(24),
  SPACE_32 = verticalScale(32),
  SPACE_64 = verticalScale(64),
  DIMEN_5 = moderateScale(5, 0.2),
  DIMEN_10 = moderateScale(10),
  DIMEN_40 = moderateScale(40),
  DIMEN_48 = moderateScale(48, 0.2),
  DIMEN_56 = moderateScale(56, 0.3)
}
