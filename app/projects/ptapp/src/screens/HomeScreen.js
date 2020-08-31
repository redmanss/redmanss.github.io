import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native'

export const HomeScreen = ({ navigation }) => {

    useEffect(() => {
      fetch ('https://packtradeapp.firebaseio.com/telehandlers.json')
        .then((response) => response.json())
        .then((json) => setData(json))
    }, [])
    
    const [dataState, setData] = useState([]);
    // console.log(dataState)
    return (
          <View style={styles.container}>
            <TouchableOpacity 
                onPress={
                    () => navigation.navigate('CatalogStack')
                }
                style={styles.block}
            >
                <Text style={styles.blocktext}>До каталогу</Text>
            </TouchableOpacity>
          </View>
          
         
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    block: {
        backgroundColor: '#ccc',
        width: '50%',
        padding: 10
    },
    blocktext: {
        color: '#333',
        textAlign: 'center'
    }
})


