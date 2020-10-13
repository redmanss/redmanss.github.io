import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, FlatList, Modal, TouchableOpacity, Alert, TextInput, SafeAreaView } from "react-native"
import ImageViewer from 'react-native-image-zoom-viewer'
import * as Print from 'expo-print'
import * as MediaLibrary from "expo-media-library"
import * as Sharing from "expo-sharing"
import * as FileSystem from 'expo-file-system'
import { Ionicons } from '@expo/vector-icons'

export const DetailScreen = ({navigation, route}) => {

    const postArray = route.params.post
    const [stateModal, setModal] = useState(false)
    const [stateComModal, setComModal] = useState(false)
    const [stateName, setName] = useState('-')
    const [statePhone, setPhone] = useState('-')
    const [statePrice, setPrice] = useState('-')
    const [stateNote, setNote] = useState('-')
    const [isLoading, setLoading] = useState(true);
    const numList = 3
    useEffect(() => navigation.setOptions({ title: postArray.inventory }))


    // PDF GENERATE

    const htmlContent = () => {
        return (
          `<!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <style>

                  html {
                      height: 100%;
                      margin: 10mm;
                  }
                  body {
                      margin: 0;
                      min-height: 100%;
                      overflow-x: hidden;
                      font-family: "Roboto", sans-serif;
                      font-size: 12pt;
                  }
  
                  * {
                      box-sizing: border-box;
                  }
                  @page {
                      margin: 0;
                      padding: 0;
                  }
                  

                  .ncpb-header, .ncpb-footer, .ncpb-img-block {
                    display: flex;
                  }
                  .ncpb-img-block img {
                    width: 100%;
                  }
                  .ncpb-header-img {
                    width: 45%;
                  }
                  .ncpb-main-img {
                    width: 67.5%;
                  }
                  .ncpb-sub-img {
                    width: 32.5%;
                  }
                  .blue-font {
                    color: #009fe3;
                  }
                  .ncpb-manager {
                    text-align: right;
                  }
                  .ncpb-info-block {
                    border-left: 0.5mm solid #009fe3;
                    margin-left: 6mm;
                    padding-left: 6mm;
                    font-size: 8pt;
                    line-height: 10pt;
                  }
                  .ncpb-manager {
                    margin: 8mm 0;
                  }
                  .pers-manager {
                    font-size: 12pt;
                    color: #767171;
                  }
                  .name-phone {
                    font-size: 16pt;
                    font-weight: 700;
                  }
                  .ncpb-com {
                    font-size: 20pt;
                  }
                  .ncpb-name {
                    font-size: 24pt;
                    font-weight: 900;
                  }
                  .ncpb-inv {
                    font-size: 16pt;
                    color: #009fe3;
                  }
                  .ncpb-img-block {
                    font-size: 0;
                    margin: 5mm 0;
                  }
                  .ncpb-main-img {
                    margin-right: 2mm;
                  }
                  .img-margin {
                    margin-bottom: 2mm;
                  }
                  .blue-footer {
                    margin-top: 5mm;
                    font-weight: 700;
                    color: #009FE3;
                  }
              </style>
          </head>
          <body>
              <div class="n-com-pdf-block">
                  <div class="ncpb-header">
                      <img class="ncpb-header-img" src="https://pack-trade.com/n-img/packlogo.svg">
                      <div class="ncpb-info-block">
                          <div>ФОП Томчук Андрій Михайлович</div>
                          <div class="blue-font">Головний офіс: 10007, м. Житомир, вул. Коростишівська, 45</div>
                          <div class="blue-font">РНОКПП 3041324133</div>
                          <div>тел.: +38 (067) 411-00-64, +38 (0412) 42-88-88</div>
                      </div>
                  </div>
                  <div class="ncpb-manager">
                      <div class="pers-manager">Ваш персональний менеджер:</div>
                      <div class="name-phone">${stateName}: ${statePhone}</div>
                  </div>
                  <div class="ncpb-com">Комерційна пропозиція</div>
                  <div class="ncpb-name">${postArray.model}</div>
                  <div class="ncpb-inv">${postArray.inventory}</div>
                  <div class="ncpb-img-block">
                      <div class="ncpb-main-img">
                          <img src="https://pack-trade.com/images/Products/6/900/0601_jcb_536-60_agri_super__2008_-3678_kU-_oU.jpg">
                      </div>
                      <div class="ncpb-sub-img">
                          <img class="img-margin" src="https://pack-trade.com/images/Products/6/900/0601_jcb_536-60_agri_super__2008_-3674_yfP4ZP.jpg">
                          <img src="https://pack-trade.com/images/Products/6/900/0601_jcb_536-60_agri_super__2008_-3674_yfP4ZP.jpg">
                      </div>
                      
                  </div>
                  
              </div>
          </body>
          </html>`
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

      const { uri } = await Print.printToFileAsync({ html, width: 595, height: 843 })
      
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

      const permission = await MediaLibrary.requestPermissionsAsync()
        if (permission.granted) {
          localImgUrl.map(item => MediaLibrary.saveToLibraryAsync(item.uri))
        }

      Alert.alert("Фото завантажені!")
    } catch(e) {
      console.error("Couldn't download gif files:", e)
    }
  }

  const listHeader = () => {
    return (
      <View style={{marginBottom:30}}>
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
      </View>
    )
  }

  const listFooter = () => {
    return (
      <View>
        <TouchableOpacity
        style={[styles.button, {marginTop: 30}]}
          onPress={()=> {setComModal(true)}} 
        >
          <Text style={styles.buttontext}>Згенерувати комерційну</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={[styles.button, {marginBottom: 50}]}
          onPress={() => {saveToGallery()}}
        >
          <Text style={styles.buttontext}>Скачати всі фото</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const renderImages = ({ item }) => (
    <TouchableOpacity 
        onPress={()=> {setModal(true)}}
        style={styles.imageblock}
    >
        <Image
            style={styles.image}
            source={{ uri: item.url }}
        />
    </TouchableOpacity>
  )

  const renderImagesView = (props) => {

    let linkToImage = postArray.imgblock.find((item, index) => index === props )

    const downloadImage = () => {
      try {
          FileSystem.downloadAsync(linkToImage.url, FileSystem.cacheDirectory + `${postArray.inventory}-${props}.jpg`).then(({uri}) => {
          const permission = MediaLibrary.requestPermissionsAsync()
          if (permission.granted) {
            MediaLibrary.saveToLibraryAsync(uri)
          }
          
        })
        Alert.alert("Фото завантаженe!")
      } catch (error) {
        console.log(error)
      }
    }

    const shareImage = () => {
      try {
          FileSystem.downloadAsync(linkToImage.url, FileSystem.cacheDirectory + `${postArray.inventory}-${props}.jpg`).then(({uri}) => {
          Sharing.shareAsync(uri)
        })
      } catch (error) {
        console.log(error)
      }
    }

    return (
      <View style={styles.iconblock}>
        <TouchableOpacity
          style={styles.share}
          onPress={shareImage}
        ><Ionicons name="md-share" size={28} color="#fff" /></TouchableOpacity>
        <TouchableOpacity
          style={styles.download}
          onPress={downloadImage}
        ><Ionicons name="md-download" size={28} color="#fff" /></TouchableOpacity>
        <TouchableOpacity
          style={styles.cancel}
          onPress={()=> {setModal(false)}}
        ><Ionicons name="md-close" size={30} color="#fff" /></TouchableOpacity>
      </View>
    )
  }
    return (
      <SafeAreaView style={ {backgroundColor: '#f0f4f5', flex: 1} }>
        <View style={styles.scrollview}>
          <FlatList
              ListHeaderComponent={listHeader}
              data={postArray.imgblock}
              keyExtractor={ (item, index) => item + index}
              renderItem={renderImages}
              ListFooterComponent={listFooter}
              numColumns={numList}
          />
        </View>
        <Modal visible={stateComModal} onRequestClose={() => {setComModal(false)}}>
          <TouchableOpacity
          style={styles.close}
              onPress={()=> {setComModal(false)}} 
            >
              <Ionicons name="md-close" size={30} color="black" />
            </TouchableOpacity>
          <View style={{paddingHorizontal: 10, paddingVertical: 100}}>
          <TextInput
              placeholder="Ім'я"
              style={styles.input}
              onChangeText={(text) => {
                setName(text)
              }}
          />
          <TextInput 
          style={styles.input}
          placeholder="Номер телефону"
              onChangeText={(text) => {
                setPhone(text)
              }}
          />
          <TextInput 
          placeholder="Ціна"
          style={styles.input}
              onChangeText={(text) => {
                setPrice(text)
              }}
          />
          <TextInput 
          style={styles.input}
          placeholder="Примітки"
              onChangeText={(text) => {
                setNote(text)
              }}
          />
          <TouchableOpacity
          style={styles.button}
            onPress={createPdf(htmlContent)} 
          >
            <Text style={styles.buttontext}>Створити PDF</Text>
          </TouchableOpacity>
          </View>
        </Modal>

        <Modal visible={stateModal} transparent={true} onRequestClose={() => {setModal(false)}}>
            <ImageViewer 
                imageUrls={postArray.imgblock}
                enableSwipeDown={true}
                onCancel={() => {setModal(false)}}
                onSave={uri => console.log(uri)}
                renderHeader={renderImagesView}
            />
        </Modal>
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
    image: {
      width: '100%',
      height: 100,
    },
    imageblock: {
      width: '33.3%',
      padding: 2
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    iconblock: {
      position: 'absolute',
      zIndex: 1000,
      flex: 1,
      flexDirection: 'row',
      right: 0,
      top: 100
    },
    cancel: {
      width: 50,
      height: 50
    },
    download: {
      width: 50,
      height: 50,
      marginRight: 20
    },
    share: {
      width: 50,
      height: 50,
      marginRight: 20
    }, 
    button: {
      width: '100%',
      backgroundColor: '#009fe3',
      padding: 20,
      marginBottom: 15,
      borderRadius: 50,
    },
    buttontext: {
      color: '#fff',
      textAlign: 'center',
      fontFamily: 'OpenSans-Bold',
      fontSize: 16,
    },
    input: {
      backgroundColor: '#eee',
      marginBottom: 10,
      paddingHorizontal: 15,
      paddingVertical: 5
    },
    close: {
      position: 'absolute',
      top: 30,
      right: 20,
      zIndex: 1000,
    }
  })
  