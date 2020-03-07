import React from 'react'
import { View, Button } from 'react-native'

export const Details = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
            title="go home"
            onPress={() => navigation.navigate('Home')}
            />
      </View>
    )
}
