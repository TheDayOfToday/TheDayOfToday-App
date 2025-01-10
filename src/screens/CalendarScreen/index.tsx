import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from '../../styles/common';

const CalendarScreen = () => {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.text}>캘린더 화면</Text>
    </View>
  );
};

export default CalendarScreen;
