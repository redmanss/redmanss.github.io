import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
  SafeAreaView
} from 'react-native';

export class SearchScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { isLoading: true, text: '' }
    this.arrayholder = []
  }

  componentDidMount() {
    return fetch('https://pack-trade.com/app/telehandlers.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.telehandlers,
          },
          function () {
            this.arrayholder = responseJson.telehandlers;
          }
        )
      })
      .catch((error) => {
        console.error(error)
      })
  }

  SearchFilterFunction (text) {
    const newData = this.arrayholder.filter(function (item) {
      const itemData = `${item.name.toLowerCase()} ${item.inventory.toLowerCase()}`
      const textData = text.toLowerCase()
      return itemData.indexOf(textData) > -1
    });
    this.setState({
      dataSource: newData,
      text: text,
    })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    }

    return (
    <SafeAreaView>
        <View>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={text => this.SearchFilterFunction(text)}
          value={this.state.text}
          placeholder="Search Here"
        />
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
          <Text style={styles.textStyle}>{item.inventory} : {item.name}</Text>
          )}
          enableEmptySections={true}
          keyExtractor={item => item.inventory.toString()}
        />
      </View>
    </SafeAreaView>
      
    )
  }
}
const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 40,
    padding: 16,
  },
  textStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});