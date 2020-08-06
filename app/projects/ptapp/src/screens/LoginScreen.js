import React from 'react'
import { ScrollView, StyleSheet, TextInput, Button, Image } from 'react-native'

export const LoginScreen = ({ navigation }) => {


    return (
          <ScrollView style={styles.main}>
            <Image
                style={styles.logo}
                // source={require('../img/packlogo.jpg')}
            />
            <TextInput
                style={styles.input}
                placeholder = 'Номер телефону'
                defaultValue = '+38'
                placeholderTextColor = '#9b9b9b'
                underlineColorAndroid = '#000'
                
                
            />
            <TextInput
               style={styles.input}
               placeholder = 'Пароль'
               placeholderTextColor = '#9b9b9b'
               underlineColorAndroid = '#000'
            />
            <Button
                style={styles.button}
                title= 'Увійти'
            />
          </ScrollView>
    )
}

const styles = StyleSheet.create({
    main: {
        padding: 30,
        backgroundColor: '#fafafa'
    },
    logo: {
        resizeMode: 'contain'
    },
    input: {
        fontSize: 18,
        marginBottom: 20,
        height: 55,
        paddingLeft: 15,
        paddingRight: 15
    },
    button: {
        fontSize: 40,
    }
})