import React from 'react';
import { View, Text } from 'react-native';
import { commonStyles } from '../../styles/common';
import {Calendar} from 'react-native-calendars';

const CalendarScreen = () => {
  return (
    <View>
      <Calendar
        // 초기에 보이는 달. 기본값 = Date()
        current={'2022-03-01'}
        // 날짜를 눌렀을 때 처리하는 콜백 함수
        onDayPress={(day: any) => {
          console.log('선택된 날', day);
        }}
        // 월 형식을 표시할지 여부
        monthFormat={'yyyy MM'}
        // 월 페이지에 다른 달의 날짜를 보여주지 않음
        hideExtraDays={true}
        // firstDay=1이면 주는 월요일부터 시작.
        firstDay={1}
      />
    </View>
  );
};


export default CalendarScreen;
