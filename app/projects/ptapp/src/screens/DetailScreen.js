import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, FlatList, Modal, TouchableOpacity, Button, Alert, TextInput } from "react-native"
import ImageViewer from 'react-native-image-zoom-viewer'
import * as Print from 'expo-print'
import * as MediaLibrary from "expo-media-library"
import * as Sharing from "expo-sharing"
import * as FileSystem from 'expo-file-system'

export const DetailScreen = ({navigation, route}) => {

    const postArray = route.params.post
    const [stateModal, setModal] = useState(false)
    const [stateComModal, setComModal] = useState(false)
    const [stateName, setName] = useState()
    const [statePhone, setPhone] = useState()
    const [statePrice, setPrice] = useState()
    const [stateNote, setNote] = useState()
  
    useEffect(() => navigation.setOptions({ title: postArray.inventory }))


    // PDF GENERATE

    const htmlContent = () => {
        return (
            `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Pdf Content1</title>
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
                    <h1>${postArray.inventory}</h1>
                    <img src="https://pack-trade.com/partsimage/parts_products/large/ff5f02f2-d57d-11e9-9175-001e67ad4f85_20200812103236.JPG">
                    <p>Ім'я</p>
                    <p>${stateName}</p>
                    <p>Телефон</p>
                    <p>${statePhone}</p>
                    <p>Ціна</p>
                    <p>${statePrice}</p>
                    <p>Примітки</p>
                    <p>${stateNote}</p>
                </body>
                </html>
            `
        )}


const createPdf = (htmlFactory) => async () => {

    setComModal(false)

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
      
      const pdfName = `${uri.slice(0, uri.lastIndexOf('/') + 1 )}${postArray.inventory}.pdf`

    await FileSystem.moveAsync({
        from: uri,
        to: pdfName,
    })
    
      if (Platform.OS === "ios") {
        isShared = await Sharing.shareAsync(pdfName)
      } else {
        const permission = await MediaLibrary.requestPermissionsAsync()
        if (permission.granted) {
          await MediaLibrary.saveToLibraryAsync(pdfName)
          isShared = true
        }
      }
  
      if (!isShared) {
        throw new Error("Something went wrong...")
      }
      
    } catch (error) {
      console.log(error)
      throw err
    }
  }

  const saveToGallery = async () => {
    try {
      const localImgUrl = await Promise.all(postArray.imgblock.map(
        (item, index) => FileSystem.downloadAsync(item.url, FileSystem.cacheDirectory + `${postArray.inventory}-${index}.jpg`)
        ))

      localImgUrl.map(item => MediaLibrary.saveToLibraryAsync(item.uri))

      Alert.alert("Фото завантажені!")
    } catch(e) {
      console.error("Couldn't download gif files:", e)
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
              title='Згенерувати комерційну'
              onPress={()=> {setComModal(true)}} 
            />
            <Button
              title='Скачати фото'
              onPress={() => {saveToGallery()}} 
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
            <Modal visible={stateComModal} onRequestClose={() => {setComModal(false)}}>
              <TextInput 
                  onChangeText={(text) => {
                    setName(text)
                  }}
              />
              <TextInput 
                  onChangeText={(text) => {
                    setPhone(text)
                  }}
              />
              <TextInput 
                  onChangeText={(text) => {
                    setPrice(text)
                  }}
              />
              <TextInput 
                  onChangeText={(text) => {
                    setNote(text)
                  }}
              />
              <Button
                  onPress={createPdf(htmlContent)} 
                  title='Creat PDF'
              />
            </Modal>
            <Modal visible={stateModal} transparent={true} onRequestClose={() => {setModal(false)}}>
                <ImageViewer 
                    imageUrls={postArray.imgblock}
                    enableSwipeDown={true}
                    onCancel={() => {setModal(false)}}
                    onSave={uri => console.log(uri)}
                    renderHeader={
                      (props) => {

                        let linkToImage = postArray.imgblock.find((item, index) => index === props )

                        return (
                          <View>
                            <TouchableOpacity
                              style={styles.cancel}
                              onPress={()=> {setModal(false)}}
                            ></TouchableOpacity>
                            <TouchableOpacity
                              style={styles.download}
                              onPress={ async () => {
                                try {
                                  await FileSystem.downloadAsync(linkToImage.url, FileSystem.cacheDirectory + `${postArray.inventory}-${props}.jpg`).then(({uri}) => {
                                    MediaLibrary.saveToLibraryAsync(uri)
                                  })
                                  Alert.alert("Фото завантаженe!")
                                } catch (error) {
                                  console.log(error)
                                }
                              }}
                            ></TouchableOpacity>
                            <TouchableOpacity
                              style={styles.share}
                              onPress={ async () => {
                                try {
                                  await FileSystem.downloadAsync(linkToImage.url, FileSystem.cacheDirectory + `${postArray.inventory}-${props}.jpg`).then(({uri}) => {
                                    Sharing.shareAsync(uri)
                                  })
                                } catch (error) {
                                  console.log(error)
                                }
                              }}
                            ></TouchableOpacity>
                          </View>
                        )
                      }
                    }
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
    cancel: {
      width: 40,
      height: 40,
      backgroundColor: '#fff',
      position: 'absolute',
      zIndex: 1000,
      top: 90,
      right: 20
    },
    download: {
      width: 40,
      height: 40,
      backgroundColor: '#fff',
      position: 'absolute',
      zIndex: 1000,
      top: 90,
      right: 80
    },
    share: {
      width: 40,
      height: 40,
      backgroundColor: '#fff',
      position: 'absolute',
      zIndex: 1000,
      top: 90,
      right: 140
    }
  })
  