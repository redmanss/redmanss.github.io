import React from 'react'
import { View, Text, TouchableOpacity } from "react-native"

export const SpecialEquipment = ({navigation}) => {



    return (
        <View>
            <Text>SpecialEquipmentStack</Text>
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