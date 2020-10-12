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

  return (
    <SafeAreaView style={ {backgroundColor: '#f0f4f5', flex: 1}}>
      <View style={styles.scrollview}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Пошук..."
        />
        {isLoading ? <ActivityIndicator/> : (
                <FlatList
                data={filteredDataSource}
                keyExtractor={post => post.inventory.toString()}
                renderItem={ItemView}
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
      paddingTop: 60,
      backgroundColor: '#f0f4f5',
},
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
    backgroundColor: '#fff',
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginBottom: 15,
    borderRadius: 10
  },
});
