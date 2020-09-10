import React from 'react'
import { View, Text, TouchableOpacity } from "react-native"

export const Lifts = ({navigation}) => {



    return (
        <View>
            <Text>LiftsStack</Text>
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