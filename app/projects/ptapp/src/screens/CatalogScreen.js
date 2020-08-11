import React from 'react'
import { View, Text, TouchableOpacity } from "react-native"

export const CatalogScreen = ({navigation}) => {



    return (
        <View>
            <Text>Каталог</Text>
            <TouchableOpacity 
                onPress={
                    () => navigation.push('CataloglistStack')
                }
            >
                <Text>До списку</Text>
            </TouchableOpacity>
        </View>
    )

}