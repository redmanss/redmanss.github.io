import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native"

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

    const openDetailScreen = item => {
        console.log('3', item)
    }
    
    //navigation.navigate('DetailScreenStack', {detailKey: item.inventory})

    return (
        <SafeAreaView style={styles.container}>
            <View >
            {isLoading ? <ActivityIndicator/> : (
                <FlatList
                    data={dataState}
                    keyExtractor={item => item.inventory}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity 
                        style={styles.blockitem}
                        onPress={openDetailScreen}
                        >
                            <Text>{item.inventory}:{item.name} - {index}</Text>
                        </TouchableOpacity>
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
    blockitem: {
        padding: 10,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 5,
    }
})