import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, StyleSheet, View, FlatList, TextInput, ActivityIndicator } from 'react-native'
import { ListProducts } from '../components/ListProducts'

export const SearchScreen = ({navigation}) => {

  const [isLoading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filteredDataSource, setFilteredDataSource] = useState([])
  const [masterDataSource, setMasterDataSource] = useState([])

  useEffect(() => {
    fetch('https://pack-trade.com/app/telehandlers.json')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson.telehandlers)
        setMasterDataSource(responseJson.telehandlers)
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setLoading(false))
  }, [])

  const searchFilterFunction = (text) => {

    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = `${item.name.toLowerCase()} ${item.inventory.toLowerCase()}`
        const textData = text.toLowerCase()
        return itemData.indexOf(textData) > -1
      })
      setFilteredDataSource(newData)
      setSearch(text)
    } else {
      setFilteredDataSource(masterDataSource)
      setSearch(text)
    }
  }

  const openPostHandler = post => {
    navigation.navigate('DetailScreenStack', {post})
  }

  const ItemView = ({ item }) => {
    return (
      <ListProducts 
          post={item}
          onOpen={openPostHandler}
      />
    )
  }

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
        {isLoading ? <ActivityIndicator/> : (
                <FlatList
                data={filteredDataSource}
                keyExtractor={post => post.inventory.toString()}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={ItemView}
              />
            )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
  textStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});
