import {StyleSheet} from 'react-native';

const defaultFontsize = {
  fontSize: 30,
  color: 'red',
};

const styleInformation = StyleSheet.create({
  contoh: {
    ...defaultFontsize,
  },
  contoh2: {
    ...defaultFontsize,
  },
  warna: {
    color: 'blue',
  },
});

export default styleInformation;
