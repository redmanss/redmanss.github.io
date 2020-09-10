import React from 'react'
import { View, Text, TouchableOpacity } from "react-native"

export const Cars = ({navigation}) => {



    return (
        <View>
            <Text>CarsStack</Text>
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