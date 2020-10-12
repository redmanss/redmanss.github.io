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
            `
              
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, width=device-width">
    <meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE">
    <meta name="format-detection" content="telephone=no">
    <style type="text/css">

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
      display: block;
    }
    body {
      line-height: 1;
    }
    ol, ul {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
/* COM-PDF */
    
    .n-com-pdf-block {
        font-family: "Roboto", sans-serif;
        position: relative;
    }
    .ncpb-img-block img {
        width: 100%;
    }
    .ncpb-header-img {
        width: 75mm;
    }
    .ncpb-info-block {
        display: inline-block;
        border-left: 0.5mm solid #009fe3;
        margin-left: 10mm;
        padding-left: 10mm;
        font-size: 9pt;
        line-height: 13pt;
    }
    .ncpb-info-block p:nth-child(2), .ncpb-info-block p:nth-child(3) {
        color: #009fe3;
    } 
    .ncpb-manager {
        margin: 10mm 0;
        text-align: right;
        line-height: 24px;
    }
    .ncpb-manager p:first-child {
        font-size: 12pt;
        color: #767171;
    }
    .ncpb-manager p:nth-child(2) {
        font-size: 16pt;
        font-weight: 700;
    }
    .ncpb-com {
        font-size: 20pt;
    }
    .ncpb-name {
        font-size: 24pt;
        font-weight: 900;
        margin: 3mm 0;
    }
    .ncpb-inv {
        font-size: 16pt;
        color: #009fe3;
    }
    .ncpb-img-block {
        font-size: 0;
        margin: 10mm 0;
    }
    .ncpb-img-block div {
        display: inline-block;
        vertical-align: top;
    }
    .ncpb-img-block div:last-child {
        width: 61mm;
    }
    .ncpb-main-img {
        width: 125mm;
        margin-right: 2mm;
    }
    .ncpb-img-block div img:first-child {
        margin-bottom: 2mm;
    }
    .ncpb-footer div {
        display: inline-block;
        vertical-align: middle;
    }
    .ncpb-footer-info {
        line-height: 18px;
        margin-top: 5mm;
        font-size: 9.5pt;
    }
    .ncpb-footer-info p:last-child {
        margin-top: 5mm;
        font-size: 11pt;
        font-weight: 700;
        color: #009FE3;
    }
    .ncpb-footer-info a {
        color: #009FE3;
    }
    .ncpb-footer-qr {
        width: 14mm;
        margin-left: 10mm;
    }
    .ncpb-footer-qr img {
        width: 100%;
    }
    .ncpb-table table {
        width: 100%;
    }
    .ncpb-table td {
        width: 50%;
        padding: 1mm;
    }
    .ncpb-table td:first-child {
        border-right: 0.5mm solid #d9d9d9;
    }
    .ncpb-table tr {
        border: 0.5mm solid #d9d9d9;
    }
    .com-note {
      font-weight: 700;
      font-size: 10pt;
   }
  </style>
</head>
<body>
<main>
    <div class="n-com-pdf-block">
        <div class="ncpb-header">
            <img class="ncpb-header-img" src="https://pack-trade.com/n-img/packlogo.svg" alt="seo" title="seo">
            <div class="ncpb-info-block">
                <p>ФОП Томчук Андрій Михайлович</p>
                <p>Головний офіс: 10007, м. Житомир, вул. Коростишівська, 45</p>
                <p>РНОКПП 3041324133</p>
                <p>тел.: +38 (067) 411-00-64, +38 (0412) 42-88-88</p>
            </div>
        </div>
        <div class="ncpb-manager">
            <p>Ваш персональний менеджер:</p>
            <p>${stateName}: ${statePhone}</p>
        </div>
        <div class="ncpb-com">Комерційна пропозиція</div>
        <div class="ncpb-name">${postArray.model}</div>
        <div class="ncpb-inv">${postArray.inventory}</div>
        <div class="ncpb-img-block">
            <div class="ncpb-main-img">
                <img src="https://pack-trade.com/images/Products/6/900/0601_jcb_536-60_agri_super__2008_-3678_kU-_oU.jpg" alt="seo" title="seo">
            </div>
            <div>
                <img src="https://pack-trade.com/images/Products/6/900/0601_jcb_536-60_agri_super__2008_-3674_yfP4ZP.jpg" alt="seo" title="seo">
                <img src="https://pack-trade.com/images/Products/6/900/0601_jcb_536-60_agri_super__2008_-3674_yfP4ZP.jpg" alt="seo" title="seo">
            </div>
            
        </div>
        <div class="ncpb-table">
            <p>${statePrice}</p>
            <div class="com-note">Примітки:</div>
            <p>${stateNote}</p>
        </div>
        <div class="ncpb-footer">
            <div class="ncpb-footer-info">
                <p>ФОП Томчук Андрій Михайлович</p>
                <p>Юридична адреса: 12424, Житомирська обл., Житомирський район, с. Висока Піч, вул. Чуднівська, буд. 2</p>
                <p>IBAN: UA04 3802 8100 0000 0260 0910 4240 1 в АТ «Банк інвестицій та заощаджень», МФО 380281</p>
                <p><a href="https://pack-trade.com/">www.pack-trade.com</a>, <a href="https://atom-attachments.com/">www.atom-attachments.com</a></p>
            </div>
            <div class="ncpb-footer-qr">
                <img src="https://pack-trade.com/app/qr-pt-com.svg" alt="SEO" title="SEO">
            </div>
        </div>
    </div>
</main>
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
      borderRadius: 5,
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
  