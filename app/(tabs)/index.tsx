import React, { useState } from "react";
import { View, Text, SafeAreaView, Pressable, ScrollView } from "react-native";
// import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/zh-cn';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import Typography from '@mui/material/Typography';
import RecordCard from "@/components/RecordCard";

export default function HomeScreen() {

    // const [date, setDate] = useState(new Date())
    const [date, setDate] = React.useState<Dayjs | null>(dayjs(new Date()));
    const [showDatePicker, setShowDatePicker] = useState(false)

    return (
        <SafeAreaView className="flex-1 flex gap-4 mx-4">
            {/* 日期 */}
            <View className="flex flex-row justify-between">
                <Typography className="font-bold">{date.format('YYYY-M-D')}</Typography>
                <Pressable onPress={() => setShowDatePicker(true)}>
                    <Text className="text-gray-500">选择日期</Text>
                </Pressable>
            </View>
            {/* 日期选择器 */}
            {showDatePicker && (
                // <DatePicker
                //     selected={date}
                //     dateFormat="Y-M-d"
                //     onChange={(selectDate) => {
                //         if (selectDate) {
                //             setDate(selectDate)
                //             setShowDatePicker(false)
                //         }
                //     }}
                // />
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="zh-cn">
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker
                            defaultValue={dayjs(new Date)}
                            onChange={(selectDate) => {
                                if (selectDate) {
                                    setDate(selectDate)
                                    setShowDatePicker(false)
                                }
                            }}
                            onAccept={(selectDate) => {
                                setDate(selectDate)
                                setShowDatePicker(false)
                            }}
                            onClose={() => {
                                setShowDatePicker(false)
                            }}
                        />
                    </DemoContainer>
                </LocalizationProvider>
            )}
            {/* 收入和支出 */}
            <View className="h-1/8 flex flex-row justify-between gap-2">
                <View className="flex-1 bg-green-50 rounded-lg p-4 flex items-center justify-center">
                    <View className="w-full flex flex-row justify-between">
                        <Text className="font-bold">收入</Text>
                        <Text className="text-green-500">1000</Text>
                    </View>
                </View>
                <View className="flex-1 bg-red-50 rounded-lg p-4 flex items-center justify-center">
                    <View className="w-full flex flex-row justify-between">
                        <Text className="font-bold">支出</Text>
                        <Text className="text-red-500">1000</Text>
                    </View>
                </View>
            </View>
            {/* 详细记录 */}
            <View className="flex-1 bg-gray-100 rounded-lg py-4 gap-2">
                <Text className="text-gray-500">
                    详细记录
                </Text>
                <ScrollView className="flex-1">
                    <RecordCard record={{
                        id: 1,
                        title: "收入",
                        amount: 100,
                        createdAt: "2025-11-25"
                    }} />
                </ScrollView>
            </View>
        </SafeAreaView>

    )
}
