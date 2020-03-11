import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

// const fetchData = () => {
//     const response = fetch('', {
//         method: 'GET',
//         headers:{'Content-Type': 'application/json'}
//     })
//     const data = response.json()
// }

export const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.navbar}>
            <Text>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
})


