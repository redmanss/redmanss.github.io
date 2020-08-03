import React, { useEffect, useCallback, useState } from 'react'
import { View, StyleSheet, Text, TextInput, Button, ActivityIndicator } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

export const HomeScreen = ({ navigation }) => {


    // const sendToBase = () => {
    //      fetch('https://packtradeapp.firebaseio.com/telehandlers.json', {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json'
    //           },
    //         body: JSON.stringify({
    //             title: 'MANITOU MT625 с.н.952121 2015  р.',
    //             model: 'MT625',
    //             invnumber: '2191',
    //             enginehours: '3294.2',
    //             engine: '55.4',
    //             height: '1.9',
    //             weight: '4500',
    //             year: '2015'
    //         })
    //     })
    // }



    // useEffect(() => {
    //   fetch('https://packtradeapp.firebaseio.com/telehandlers.json')
    //     .then((response) => response.json())
    //     .then((json) => setData(json.telehandlers))
    //     .catch((error) => console.error(error))
    //     .finally(() => setLoading(false));
    // }, []);




    //const loadData = useCallback(async () => await giveOnBase(), [giveOnBase])

    useEffect(() => {
      giveOnBase()
    }, [])

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const giveOnBase = async () => {
        const response = await fetch('https://packtradeapp.firebaseio.com/telehandlers.json', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
        })
        const data = await response.json();
        const arrayData = Object.keys(data).map(key => ({...data[key], id:key}));
        //console.log(arrayData)
    }
    

    return (
          <View style={{ flex: 1, padding: 24 }}>
                {isLoading ? <ActivityIndicator/> : (
                  <FlatList
                    data={data}
                    renderItem={({ item }) => (
                      <Text>{item.title}</Text>
                    )}
                    keyExtractor={item => item.id}
                  />
                )}
          </View>


        // <View style={styles.navbar}>
        //     {/* <FlatList 
        //       data={loadData}
        //       renderItem={}
        //     /> */}
        // </View>
        
    )
}


const styles = StyleSheet.create({
    navbar: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
})


