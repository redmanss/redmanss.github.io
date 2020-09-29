import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, FlatList, Modal, TouchableOpacity } from "react-native"
import ImageViewer from 'react-native-image-zoom-viewer'

export const DetailScreen = ({navigation, route}) => {

    const postArray = route.params.post
    const setTitle = () => navigation.setOptions({ title: postArray.inventory })
    const [stateModal, setModal] = useState(false)
   
    setTitle()

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
  });
  