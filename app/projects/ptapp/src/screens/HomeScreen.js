import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView } from 'react-native'

export const HomeScreen = ({ navigation }) => {

    console.log('App loaded.')
    return (
          <SafeAreaView style={styles.container}>
              <Text style={styles.h1}>Прайс-листи</Text>
                <TouchableOpacity 
                    onPress={
                        () => navigation.navigate('SpecialEquipmentStack')
                    }
                    style={styles.block}
                >
                    <Text style={styles.blocktext}>Спецтехніка</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={
                        () => navigation.navigate('AgroTechStack')
                    }
                    style={styles.block}
                >
                    <Text style={styles.blocktext}>Агротехніка</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={
                        () => navigation.navigate('RoadTechStack')
                    }
                    style={styles.block}
                >
                    <Text style={styles.blocktext}>Дорожно-будівельна техніка</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={
                        () => navigation.navigate('CarsStack')
                    }
                    style={styles.block}
                >
                    <Text style={styles.blocktext}>Автомобілі та причепи</Text>
                </TouchableOpacity>
                <Text style={[styles.h1, styles.inwork]}>Навісне обладнання</Text>
                <TouchableOpacity 
                    style={styles.block}
                >
                    <Text style={[styles.blocktext, styles.inwork]}>В розробці</Text>
                </TouchableOpacity>
                <Text style={[styles.h1, styles.inwork]}>Склад</Text>
                <TouchableOpacity 
                    style={styles.block}
                >
                    <Text style={[styles.blocktext, styles.inwork]}>В розробці</Text>
                </TouchableOpacity>
          </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 20,
        backgroundColor: '#f0f4f5',
    },
    block: {
        backgroundColor: '#fff',
        padding: 20,
        width: '100%',
        borderBottomWidth: 3,
        borderBottomColor: '#f0f4f5',
        borderRadius: 5,
        borderRadius: 5
    },
    blocktext: {
        color: '#333',
        fontSize: 14,
        fontFamily: 'OpenSans-Regular'
    },
    h1: {
        fontSize: 18,
        fontFamily: 'OpenSans-Bold',
        marginBottom: 20,
        marginTop: 30,
        color: '#37495f'
    },
    inwork: {
        opacity: 0.5
    }
})


