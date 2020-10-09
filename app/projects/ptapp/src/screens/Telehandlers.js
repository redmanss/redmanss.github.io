import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, FlatList, ActivityIndicator, StyleSheet } from "react-native"
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
        <SafeAreaView style={styles.container}>
            <View>
            {isLoading ? <ActivityIndicator/> : (
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
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
        justifyContent: 'center'
    },
})