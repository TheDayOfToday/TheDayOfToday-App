import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import AnalysisScreen from '../../screens/AnalysisScreen';
import CalendarScreen from '../../screens/CalendarScreen';
import RecordScreen from '../../screens/RecordScreen';
import { styles } from './styles';

type RootTabParamList = {
  Calendar: undefined;
  Analysis: undefined;
  Record: undefined;
  Setting: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

type SettingButtonProps = {
  navigation: BottomTabNavigationProp<RootTabParamList>;
};

const SettingButton: React.FC<SettingButtonProps> = ({ navigation }) => (
  <Text
    style={styles.settingButton}
    onPress={() => navigation.navigate('Setting')}
  >
    설정
  </Text>
);

const RecordButton = () => (
  <View style={styles.recordButton}>
    <Text style={styles.recordButtonText}>+</Text>
  </View>
);

const getHeaderRight =
  (navigation: BottomTabNavigationProp<RootTabParamList>) => () =>
    <SettingButton navigation={navigation} />;

const getScreenOptions = ({
  navigation,
}: {
  navigation: BottomTabNavigationProp<RootTabParamList>;
}) => ({
  title: '오늘의 하루',
  headerRight: getHeaderRight(navigation),
  headerShown: true,
});

const TAB_BAR_STYLE = {
  height: 60,
  position: 'absolute',
  borderTopRightRadius: 20,
  borderTopLeftRadius: 20,
} as const;

const createScreenOptions = (navigation: BottomTabNavigationProp<RootTabParamList>) => ({
  ...getScreenOptions({ navigation }),
  tabBarStyle: TAB_BAR_STYLE,
  tabBarActiveTintColor: '#92B741',
  tabBarInactiveTintColor: '#666666',
});

const RECORD_TAB_OPTIONS = {
  tabBarLabel: '',
  tabBarIcon: RecordButton,
};

const NavigatorBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Calendar"
      screenOptions={({ navigation }) => createScreenOptions(navigation)}
    >
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{ tabBarLabel: '캘린더' }}
      />
      <Tab.Screen
        name="Record"
        component={RecordScreen}
        options={RECORD_TAB_OPTIONS}
      />
      <Tab.Screen
        name="Analysis"
        component={AnalysisScreen}
        options={{ tabBarLabel: '분석' }}
      />
    </Tab.Navigator>
  );
};

export default NavigatorBar;
