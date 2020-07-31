import React, { useEffect, useCallback, useState } from 'react'
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'

export const HomeScreen = ({ navigation }) => {


    const sendToBase = () => {
         fetch('https://packtradeapp.firebaseio.com/base.json', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                firstParam: '1',
                secondParam: '2'
            })
        })
    }
    
    const giveOnBase = async () => {
        const response = await fetch('https://packtradeapp.firebaseio.com/base.json', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
        })
        console.log(response);
        alert(response);
    }

    return (
        <View style={styles.navbar}>
            <Text>123</Text>
            <TextInput>Ваш логин</TextInput>
            <Button
            onPress={giveOnBase}
            title="Отправить"
            />
            
        </View>
        
    )
}


const styles = StyleSheet.create({
    navbar: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
})


