import React from 'react'
import { View, Text } from 'react-native'

const fetchData = () => {
    const response = fetch('', {
        method: 'GET',
        headers:{'Content-Type': 'application/json'}
    })
    const data = response.json()
}

export const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
             <Text>12</Text>
        </View>
    )
}
