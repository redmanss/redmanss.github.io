import React from 'react'
import { View, Text } from "react-native"

export const DetailScreen = ({navigation, route}) => {

    const postArray = route.params.post

    const setTitle = () => navigation.setOptions({ title: postArray.inventory })

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
        </View>
    )

}