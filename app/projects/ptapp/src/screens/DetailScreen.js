import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, FlatList, Modal, TouchableOpacity, Button, Alert } from "react-native"
import ImageViewer from 'react-native-image-zoom-viewer'
import * as Print from 'expo-print'
import * as MediaLibrary from "expo-media-library"
import * as Sharing from "expo-sharing"

export const DetailScreen = ({navigation, route}) => {

    const postArray = route.params.post
    //const setTitle = () => navigation.setOptions({ title: postArray.inventory })
    const [stateModal, setModal] = useState(false)
    //setTitle()

    // PDF GENERATE
    
    const htmlContent = () => {
        return (
            `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Pdf Content</title>
                    <style>
                        body {
                            font-size: 16px;
                            color: rgb(255, 196, 0);
                        }
                        h1 {
                            text-align: center;
                        }
                    </style>
                </head>
                <body>
                    <h1>Hello, UppLabs!</h1>
                </body>
                </html>
            `
        )}
const createPdf = (htmlFactory) => async () => {
    try {
      const html = await htmlFactory()
      if (html) {
        await createAndSavePDF(html)
        Alert.alert("Success!", "Document has been successfully saved!")
      }
    } catch (error) {
      Alert.alert("Error", error.message || "Something went wrong...")
    }
  }

  const createAndSavePDF = async (html) => {
    try {
      let isShared = false
      const { uri } = await Print.printToFileAsync({ html })

    //   const pdfName = `${uri.slice(
    //     0,
    //     uri.lastIndexOf('/') + 1
    //     )}invoice_1.pdf`

    //     await FileSystem.moveAsync({
    //         from: uri,
    //         to: pdfName,
    //     })
    
      if (Platform.OS === "ios") {
        isShared = await Sharing.shareAsync(uri)
      } else {
        const permission = await MediaLibrary.requestPermissionsAsync()
  
        if (permission.granted) {
          await MediaLibrary.createAssetAsync(uri)
          isShared = true
        }
      }
  
      if (!isShared) {
        throw new Error("Something went wrong...")
      }
      //onsole.log(pdfName)

    } catch (error) {
      console.log(error)
      throw err
    }
  }
    
    


    // END PDF GANERATE
    return (
        <View>
            <Text>Інвентарний номер: {postArray.inventory}</Text>
            <Text>ТМЦ: {postArray.name}</Text>
            <Text>Модель: {postArray.model}</Text>
            <Text>Рік випуску: {postArray.yeaer}</Text>
            <Text>Вага: {postArray.weight}</Text>
            <Text>Габар. висота: {postArray.height}</Text>
            <Text>Потужність двигуна: {postArray.engine}</Text>
            <Text>Напрацювання: {postArray.enginehours}</Text>
            <Text>Стадія підготовки: {postArray.stage}</Text>
            <Text>Механіка: {postArray.mechanics}</Text>
            <Text>Фарбування: {postArray.painting}</Text>
            <Text>Електрика: {postArray.electrick}</Text>
            <Text>Мийка: {postArray.washing}</Text>
            <Text>Хар. Кабіни: {postArray.specifications}</Text>
            <Text>Шини: {postArray.tires}</Text>
            <Text>Ціна: {postArray.price}</Text>
            <Text>Примітки: {postArray.note}</Text>
            <Button
                onPress={createPdf(htmlContent)} 
                title='Creat PDF'
            />
            <View style={styles.container}>
                <FlatList
                    data={postArray.imgblock}
                    keyExtractor={ (item, index) => item + index}
                    renderItem={({ item }) => (
                        <TouchableOpacity 
                            onPress={()=> {setModal(true)}}
                        >
                            <Image
                                style={styles.image}
                                source={{ uri: item.url }}
                            />
                        </TouchableOpacity>
                        
                    )}
                />
            </View>
            <Modal visible={stateModal} transparent={true} onRequestClose={() => {setModal(false)}}>
                <ImageViewer 
                    imageUrls={postArray.imgblock}
                    enableSwipeDown={true}
                    onCancel={() => {setModal(false)}}
                />
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '50%',
        height: 100,
    },
    imageblock: {
        width: '100%'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
  })
  