import React from 'react'
import { View, Text, TouchableOpacity } from "react-native"

export const Telehandlers = ({navigation}) => {



    return (
        <View>
            <Text>TelehandlersStack</Text>
            <TouchableOpacity 
                onPress={
                    () => navigation.navigate('CataloglistStack')
                }
            >
                <Text>До списку</Text>
            </TouchableOpacity>
        </View>
    )

}