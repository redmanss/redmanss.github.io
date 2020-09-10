import React from 'react'
import { View, Text, TouchableOpacity } from "react-native"

export const RoadTech = ({navigation}) => {



    return (
        <View>
            <Text>RoadTechStack</Text>
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