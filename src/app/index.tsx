import { View, Text } from "react-native"
import React from "react"
import { StatusBar } from "expo-status-bar"

export default function Home(){
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text>Hello React Native</Text>
            <StatusBar style="auto" />
        </View>
    )
}