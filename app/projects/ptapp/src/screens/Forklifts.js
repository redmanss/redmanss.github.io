import React from 'react'
import { View, Text, TouchableOpacity } from "react-native"

export const Forklifts = ({navigation}) => {



    return (
        <View>
            <Text>ForkliftsStack</Text>
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