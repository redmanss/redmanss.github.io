import React, { useEffect, useState } from 'react'
import { SafeAreaView, FlatList, ActivityIndicator, StyleSheet, ScrollView, View } from "react-native"
import { ListProducts } from '../components/ListProducts'

export const Telehandlers = ({navigation}) => {
    
    useEffect(() => {
        fetch('https://pack-trade.com/app/telehandlers.json')
          .then((response) => response.json())
          .then((json) => setData(json.telehandlers))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);
    
    const [isLoading, setLoading] = useState(true);
    const [dataState, setData] = useState([]);
    const openPostHandler = post => {
        navigation.navigate('DetailScreenStack', {post})
    }
    
    return (
        <SafeAreaView style={ {backgroundColor: '#f0f4f5', flex: 1} }>
            <View style={styles.scrollview}>
            {isLoading ? <ActivityIndicator style={styles.activity} size="large" color="#009fe3"/> : (
                <FlatList
                    data={dataState}
                    keyExtractor={post => post.inventory}
                    renderItem={({ item }) => (
                        <ListProducts 
                            post={item}
                            onOpen={openPostHandler}
                        />
                    )}
                />
            )}
            </View>
        </SafeAreaView>  
    )
}

const styles = StyleSheet.create({
    scrollview: {
        flex: 1,
        paddingHorizontal: 10,
        paddingBottom: 10,
        paddingTop: 100,
        backgroundColor: '#f0f4f5',
    },
    activity: {
        flex: 1,
        justifyContent: "center",
      },
})