import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CalendarScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>캘린더 화면</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default CalendarScreen;
