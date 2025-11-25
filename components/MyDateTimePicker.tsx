// components/MyDateTimePicker.js

import React from 'react';
import { Platform } from 'react-native';
import DatePicker from 'react-datepicker'; // 引入 Web 端的组件
import DateTimePicker from '@react-native-community/datetimepicker'; // 引入原生组件
import 'react-datepicker/dist/react-datepicker.css';

const MyDateTimePicker = ({ value, onChange }) => {
  // 检查当前平台是否为 Web
  if (Platform.OS === 'web') {
    return (
      <DatePicker
        selected={value}
        onChange={onChange}
        dateFormat="Y-M-d"
      />
    );
  }

  // 对于 iOS 和 Android，使用原生的 DateTimePicker
  return (
    <DateTimePicker
      value={value}
      mode="datetime"
      display="default"
      onChange={onChange}
    />
  );
};

export default MyDateTimePicker;