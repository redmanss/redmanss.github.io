import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"

export const SpecialEquipment = ({navigation}) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={
                    () => navigation.navigate('TelehandlersStack')
                }
                style={styles.block}
            >
                <Text style={styles.blocktext}>Телескопічні навантажувачі</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={
                    () => navigation.navigate('ExcavatorsStack')
                }
                style={styles.block}
            >
                <Text style={styles.blocktext}>Екскаватори</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={
                    () => navigation.navigate('LiftsStack')
                }
                style={styles.block}
            >
                <Text style={styles.blocktext}>Підіймачі</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={
                    () => navigation.navigate('ForkliftsStack')
                }
                style={styles.block}
            >
                <Text style={styles.blocktext}>Вилкові навантажувачі</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={
                    () => navigation.navigate('OtherTechStack')
                }
                style={styles.block}
            >
                <Text style={styles.blocktext}>Інша техніка</Text>
            </TouchableOpacity>
          </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    block: {
        backgroundColor: '#e5e5e5',
        width: '47.5%',
        padding: 10,
        margin: 5,
        
    },
    blocktext: {
        color: '#333',
        textAlign: 'center'
    }
})