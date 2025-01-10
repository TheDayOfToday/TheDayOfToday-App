import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from '../../styles/common';

const HomeScreen = () => {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.text}>오늘의 하루</Text>
    </View>
  );
};

export default HomeScreen;
