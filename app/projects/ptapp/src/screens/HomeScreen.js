import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Button } from 'react-native'
//import { loadInternetDb } from '../internetDb'
import { DB } from '../localDb'


export const HomeScreen = ({ navigation }) => {
    useEffect(() => {
        fetch ('https://pack-trade.com/app/datajcb.json')
          .then((response) => response.json())
          .then((json) => setData(json))
      }, [])

      const [dataState, setData] = useState([]);

      const showInternetDB = () => {
        console.log('Internet base: ', dataState)
      }

    const localBase = async () => {
        const load = await DB.getPosts()
        console.log('База данных Post', load)
      }
    
      try {
        DB.init()
        console.log('Database started...')
      } catch (e) {
        console.log('error: ', e)
      }

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
                onPress={localBase}
                title='Show local Base'
            />
            <Button 
                onPress={showInternetDB}
                title='Show Internet Base'
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


