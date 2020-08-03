import React, { useEffect, useCallback, useState } from 'react'
import { View, StyleSheet, Text, TextInput, Button, ActivityIndicator } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

export const HomeScreen = ({ navigation }) => {


    // const sendToBase = () => {
    //      fetch('https://packtradeapp.firebaseio.com/base.json', {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json'
    //           },
    //         body: JSON.stringify({
    //             firstParam: '1',
    //             secondParam: '2'
    //         })
    //     })
    // }

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('https://reactnative.dev/movies.json')
        .then((response) => response.json())
        .then((json) => setData(json.movies))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    // const loadData = useCallback(async () => await giveOnBase(), [giveOnBase])

    // useEffect(() => {
    //   loadData()
    // }, [])
    
    const giveOnBase = async () => {
        const response = await fetch('https://packtradeapp.firebaseio.com/base.json', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
        })
        const data = await response.json();
        const parseData = Object.keys(data).map(key => ({ ...data[key], id:key}));
        // console.log('firebase', parseData);
    }

    return (
          <View style={{ flex: 1, padding: 24 }}>
                {isLoading ? <ActivityIndicator/> : (
                  <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                      <Text>{item.title}, {item.releaseYear}</Text>
                    )}
                  />
                )}
          </View>


        // <View style={styles.navbar}>
        //     <Text>123</Text>
        //     <TextInput>Ваш логин</TextInput>
        //     <Button
        //       onPress={giveOnBase}
        //       title="Отправить"
        //     />
            
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


