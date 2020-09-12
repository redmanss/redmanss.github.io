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
              <View style={styles.mainblock}>
                <TouchableOpacity 
                    onPress={
                        () => navigation.navigate('SpecialEquipmentStack')
                    }
                    style={styles.block}
                >
                    <Text style={styles.blocktext}>Спецтехніка</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.mainblock}>
                <TouchableOpacity 
                    onPress={
                        () => navigation.navigate('AgroTechStack')
                    }
                    style={styles.block}
                >
                    <Text style={styles.blocktext}>Агротехніка</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.mainblock}>
                <TouchableOpacity 
                    onPress={
                        () => navigation.navigate('RoadTechStack')
                    }
                    style={styles.block}
                >
                    <Text style={styles.blocktext}>Дорожно-будівельна техніка</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.mainblock}>
                <TouchableOpacity 
                    onPress={
                        () => navigation.navigate('CarsStack')
                    }
                    style={styles.block}
                >
                    <Text style={styles.blocktext}>Автомобілі та причепи</Text>
                </TouchableOpacity>
              </View>
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
    mainblock: {
        width: '50%',
        padding: 10,
    },
    block: {
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    blocktext: {
        color: '#333',
        textAlign: 'center',
    }
})


