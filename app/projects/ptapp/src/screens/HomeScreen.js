import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'

export const HomeScreen = ({ navigation }) => {

    // useEffect(() => {
    //   fetch ('https://reactnative.dev/movies.json')
    //     .then((response) => response.json())
    //     .then((json) => setData(json.description))
    // }, [])
    
    // const [dataState, setData] = useState([]);

    return (
          // <View style={styles}>
          //   <Text>{dataState}</Text>
            
          // </View>

          <View>
            <Text>Екран направлення1</Text>
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


