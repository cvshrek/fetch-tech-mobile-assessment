import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import JobDetailsScreen from '@screens/JobDetails';

import TabsNavigator from './tabs.navigator';

type RootStackParamList = {
  TabsNavigator: undefined;
  JobDetailsScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabsNavigator" screenOptions={screenOptions}>
        <Stack.Screen name="TabsNavigator" component={TabsNavigator} />
        <Stack.Screen name="JobDetailsScreen" component={JobDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
