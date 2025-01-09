import { StyleSheet, ImageBackground } from 'react-native';

export const BACKGROUND_IMAGE = require('../assets/png/pinkSky.jpg'); // 배경 이미지 경로

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover', // 이미지 크기 조정 방식
    justifyContent: 'center', // 내용물 정렬
    alignItems: 'center',
    opacity: 0.8
  },
});
