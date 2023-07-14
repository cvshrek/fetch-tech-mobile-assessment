import React, { useState } from 'react';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/Home';
import CoinScreen from '@screens/Coin';
import JobScreen from '@screens/Job';
import { FontSizes, Fonts } from '@constants/fonts';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Dimens } from '@constants/dimens';
import { Colors } from '@constants/colors';
import { isIphoneX } from '@utils';
import { verticalScale } from 'react-native-size-matters';

type TabsParamList = {
  HomeScreen: undefined;
  CoinScreen: undefined;
  JobScreen: undefined;
  MenuScreen: undefined;
};

const Tab = createBottomTabNavigator<TabsParamList>();
const tabsConfigs: BottomTabNavigationOptions = {
  lazy: true,
  headerTitleAlign: 'left',
  headerTitleStyle: {
    fontFamily: Fonts.PRIMARY_FONT_BOLD,
    fontSize: FontSizes.FONT_32,
    paddingHorizontal: Dimens.SPACE_8,
  },
  headerStyle: {
    elevation: 0,
    shadowColor: 'transparent',
  },
};

const getDefaultTabConfigs = (
  label: string,
  icon: string,
  title: string,
  showBadge: boolean = false,
): BottomTabNavigationOptions => ({
  tabBarAllowFontScaling: true,
  tabBarStyle: {
    padding: Dimens.SPACE_8,
    height: isIphoneX() ? verticalScale(86) : (76),
  },
  tabBarLabel: label,
  tabBarLabelStyle: {
    fontSize: FontSizes.FONT_14,
    fontFamily: Fonts.PRIMARY_FONT_REGULAR,
    paddingBottom: Dimens.SPACE_16,
  },
  tabBarActiveTintColor: Colors.BLUE,
  tabBarBadge: showBadge ? '' : undefined,
  tabBarBadgeStyle: {
    top: Dimens.DIMEN_5,
    left: 0,
    minWidth: Dimens.DIMEN_10,
    maxHeight: Dimens.DIMEN_10,
    borderRadius: Dimens.DIMEN_5,
    fontSize: Dimens.DIMEN_10,
    alignSelf: undefined,
  },
  tabBarIcon: ({ color, size }) => <Icon name={icon} size={size} color={color} />,
  headerTitle: title,
});

function AppTabs() {
  // if you wanna update badge, please update more logic to handle state here!
  // emit an event or redux state to update later
  const [hasNewJob] = useState(true);
  return (
    <Tab.Navigator screenOptions={tabsConfigs} initialRouteName="JobScreen">
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={getDefaultTabConfigs('Home', 'home-filled', 'Home')} />
      <Tab.Screen name="CoinScreen" component={CoinScreen} options={getDefaultTabConfigs('Coin', 'attach-money', 'Coin')} />
      <Tab.Screen name="JobScreen" component={JobScreen} options={getDefaultTabConfigs('Job', 'directions-car', 'Jobs', hasNewJob)} />
      <Tab.Screen name="MenuScreen" component={JobScreen} options={getDefaultTabConfigs('Menu', 'menu', 'Menu')} />
    </Tab.Navigator>
  );
}

export default AppTabs;
