import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native'

export const HomeScreen = ({ navigation }) => {

    // useEffect(() => {
    //   fetch ('https://reactnative.dev/movies.json')
    //     .then((response) => response.json())
    //     .then((json) => setData(json.description))
    // }, [])
    
    // const [dataState, setData] = useState([]);

    return (
          <View style={styles}>
            <Text>Направлення</Text>
            <TouchableOpacity 
                onPress={
                    () => navigation.navigate('CatalogStack')
                }
            >
                <Text>До каталогу</Text>
            </TouchableOpacity>
          </View>
          
         
    )
}


const styles = StyleSheet.create({
    navbar: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
})


