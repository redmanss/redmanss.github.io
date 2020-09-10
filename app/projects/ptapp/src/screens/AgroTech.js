import React from 'react'
import { View, Text, TouchableOpacity } from "react-native"

export const AgroTech = ({navigation}) => {



    return (
        <View>
            <Text>AgroTechStack</Text>
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