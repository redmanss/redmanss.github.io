import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export const HomeScreen = ({ navigation }) => {

    return (
          <SafeAreaView style={ {backgroundColor: '#f0f4f5', flex: 1} }>
              <ScrollView style={styles.scrollview}>
                <Image
                        style={styles.logo_img}
                        source={require('../img/packlogo.png')}
                />
                <Text style={styles.h1}>Прайс-листи</Text>
                <TouchableOpacity 
                    onPress={
                        () => navigation.navigate('SpecialEquipmentStack')
                    }
                    style={styles.block}
                >
                    <Text style={styles.blocktext}>Спецтехніка</Text>
                    <Ionicons name="ios-arrow-forward" size={24} color="#333" />
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={
                        () => navigation.navigate('AgroTechStack')
                    }
                    style={styles.block}
                >
                    <Text style={styles.blocktext}>Агротехніка</Text>
                    <Ionicons name="ios-arrow-forward" size={24} color="#333" />
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={
                        () => navigation.navigate('RoadTechStack')
                    }
                    style={styles.block}
                >
                    <Text style={styles.blocktext}>Дорожно-будівельна техніка</Text>
                    <Ionicons name="ios-arrow-forward" size={24} color="#333" />
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={
                        () => navigation.navigate('CarsStack')
                    }
                    style={styles.block}
                >
                    <Text style={styles.blocktext}>Автомобілі та причепи</Text>
                    <Ionicons name="ios-arrow-forward" size={24} color="#333" />
                </TouchableOpacity>
                <Text style={[styles.h1, styles.inwork]}>Навісне обладнання</Text>
                <TouchableOpacity 
                    style={styles.block}
                >
                    <Text style={[styles.blocktext, styles.inwork]}>В розробці</Text>
                    <Ionicons name="ios-arrow-forward" size={24} color="#333" />
                </TouchableOpacity>
                <Text style={[styles.h1, styles.inwork]}>Склад</Text>
                <TouchableOpacity 
                    style={styles.block}
                >
                    <Text style={[styles.blocktext, styles.inwork]}>В розробці</Text>
                    <Ionicons name="ios-arrow-forward" size={24} color="#333" />
                </TouchableOpacity>
              </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    scrollview: {
        marginHorizontal: 20,
        marginBottom: 10,
        marginTop: 30,
        backgroundColor: '#f0f4f5',
    },
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
        borderBottomWidth: 3,
        borderBottomColor: '#f0f4f5',
        borderRadius: 5,
        borderRadius: 5,
    },
    blocktext: {
        color: '#333',
        fontSize: 15,
        fontFamily: 'OpenSans-Regular',
        paddingRight: 20,
    },
    h1: {
        fontSize: 19,
        fontFamily: 'OpenSans-Bold',
        marginBottom: 20,
        marginTop: 30,
        color: '#37495f',
    },
    inwork: {
        opacity: 0.5,
    },
    logo_img: {
        width: 250,
        resizeMode: 'cover',
        height: 38,
        marginTop: 60,
        marginBottom: 20,
    },
})