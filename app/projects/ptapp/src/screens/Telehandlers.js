import React, { useEffect, useState } from 'react'
import { View, FlatList, Text, ActivityIndicator } from "react-native"

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


    return (
        <View style={{ flex: 1, padding: 24 }}>
            {isLoading ? <ActivityIndicator/> : (
                <FlatList
                    data={dataState}
                    keyExtractor={item => item.inventory.toString()}
                    renderItem={({ item }) => (
                    <Text>{item.inventory}:{item.name}</Text>
                    )}
                />
        )}
    </View>
    )

}