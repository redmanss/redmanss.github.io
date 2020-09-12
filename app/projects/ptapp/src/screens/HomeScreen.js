import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { DB } from '../localDb'


export const HomeScreen = ({ navigation }) => {
    
    //   const showInternetDB = () => {
    //     console.log('Internet base: ', dataState)
    //   }

    // const localBase = async () => {
    //     const load = await DB.getPosts()
    //     console.log('База данных Post', load)
    //   }
    
      try {
        DB.init()
        console.log('Database started...App loaded.')
      } catch (e) {
        console.log('error: ', e)
      }
    return (
          <View style={styles.container}>
            <TouchableOpacity 
                onPress={
                    () => navigation.navigate('SpecialEquipmentStack')
                }
                style={styles.block}
            >
                <Text style={styles.blocktext}>Спецтехніка</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={
                    () => navigation.navigate('AgroTechStack')
                }
                style={styles.block}
            >
                <Text style={styles.blocktext}>Агротехніка</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={
                    () => navigation.navigate('RoadTechStack')
                }
                style={styles.block}
            >
                <Text style={styles.blocktext}>Дорожно-будівельна техніка</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={
                    () => navigation.navigate('CarsStack')
                }
                style={styles.block}
            >
                <Text style={styles.blocktext}>Автомобілі та причепи</Text>
            </TouchableOpacity>
          </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
    },
    block: {
        backgroundColor: '#fff',
        width: '50%',
        padding: 10,
        margin: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    blocktext: {
        color: '#333',
        textAlign: 'center',
    }
})


