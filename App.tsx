import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import { View, ImageBackground } from 'react-native';
// import { commonStyles, BACKGROUND_IMAGE } from './src/styles/common';

import LoginScreen from './src/screens/Auth/LoginScreen';
import SignupScreen from './src/screens/Auth/SignupScreen';
import NavigatorBar from './src/components/NavigatorBar';
import HomeScreen from './src/screens/HomeScreen';
import CalendarScreen from './src/screens/CalendarScreen';

const Stack = createNativeStackNavigator();

enableScreens();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1.5초 후에 홈 화면에서 메인 탭으로 전환
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoading ? (
        <Stack.Screen name="Home" component={HomeScreen} />
      ) : (
        <>
          <Stack.Screen name="MainTabs" component={NavigatorBar} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Calendar" component={CalendarScreen} />
        </>
      )}
    </Stack.Navigator>
  </NavigationContainer>

  // 이 부분 추가 시 배경화면만 나오네 흠
    // <ImageBackground source={BACKGROUND_IMAGE} style={commonStyles.background}>
    //   <View style={commonStyles.container}>
    //     <NavigationContainer>
    //       <Stack.Navigator screenOptions={{ headerShown: false }}>
    //         {isLoading ? (
    //           <Stack.Screen name="Home" component={HomeScreen} />
    //         ) : (
    //           <>
    //             <Stack.Screen name="MainTabs" component={NavigatorBar} />
    //             <Stack.Screen name="Login" component={LoginScreen} />
    //             <Stack.Screen name="Signup" component={SignupScreen} />
    //           </>
    //         )}
    //       </Stack.Navigator>
    //     </NavigationContainer>
    //   </View>
    // </ImageBackground>
  );
}

export default App;
