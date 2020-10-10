import React, { useEffect, useState } from 'react'
import { SafeAreaView, FlatList, ActivityIndicator, StyleSheet, ScrollView } from "react-native"
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
        
        <SafeAreaView style={styles.scrollview}>
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
        </SafeAreaView>  
    )
}

const styles = StyleSheet.create({
    scrollview: {
        paddingHorizontal: 10,
        paddingBottom: 10,
        paddingTop: 90,
        backgroundColor: '#f0f4f5',
    },
    activity: {
        flex: 1,
        justifyContent: "center",
      },
})