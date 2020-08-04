import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

export const HomeScreen = ({ navigation }) => {

    useEffect(() => {
      fetch ('https://reactnative.dev/movies.json')
        .then((response) => response.json())
        .then((json) => setData(json.description))
    }, [])
    
    const [dataState, setData] = useState([]);

    return (
          <View style={styles}>
            <Text>{dataState}</Text>
            <FlatList 
              data={dataState}
              renderItem={({ item }) => (
              <Text></Text>
              )}
            />
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


