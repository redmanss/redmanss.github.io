import React from 'react'
import { View, Text, TouchableOpacity } from "react-native"

export const Excavators = ({navigation}) => {



    return (
        <View>
            <Text>ExcavatorsStack</Text>
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