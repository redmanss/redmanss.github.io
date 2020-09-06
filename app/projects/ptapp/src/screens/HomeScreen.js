import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Button } from 'react-native'
import { loadInternetDb } from '../internetDb'


export const HomeScreen = ({ navigation }) => {
    
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
            
            <Button 
                onPress={loadInternetDb}
                title='Export from base'
            />
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


