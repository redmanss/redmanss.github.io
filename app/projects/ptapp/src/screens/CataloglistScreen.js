import React from 'react'
import { View, Text, TouchableOpacity } from "react-native"

export const CataloglistScreen = ({navigation}) => {



    return (
        <View>
            <Text>Екран список продукції</Text>
            <TouchableOpacity 
                onPress={
                    () => navigation.push('DetailsStack')
                }
            >
                <Text>Сторінка продукції</Text>
            </TouchableOpacity>
        </View>
    )

}