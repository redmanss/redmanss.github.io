import React from 'react'
import { View, Text, TouchableOpacity } from "react-native"

export const OtherTech = ({navigation}) => {



    return (
        <View>
            <Text>OtherTechStack</Text>
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