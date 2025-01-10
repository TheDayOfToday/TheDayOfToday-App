import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AnalysisScreen from '../../screens/AnalysisScreen';
import CalendarScreen from '../../screens/CalendarScreen';
import RecordScreen from '../../screens/RecordScreen';
import SettingScreen from '../../screens/SettingScreen';

const Tab = createBottomTabNavigator();

const NavigatorBar = () => {
  return (
    <Tab.Navigator initialRouteName="Calendar">
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{ title: '캘린더' }}
      />
      <Tab.Screen
        name="Analysis"
        component={AnalysisScreen}
        options={{ title: '분석' }}
      />
      <Tab.Screen
        name="Record"
        component={RecordScreen}
        options={{ title: '기록' }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{ title: '설정' }}
      />
    </Tab.Navigator>
  );
};

export default NavigatorBar;
