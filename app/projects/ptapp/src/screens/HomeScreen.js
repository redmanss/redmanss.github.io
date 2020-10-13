import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, SafeAreaView, ScrollView, View } from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

export const HomeScreen = ({ navigation }) => {

    return (
          <SafeAreaView style={ {backgroundColor: '#f0f4f5', flex: 1}}>
              <ScrollView>
                  <View style={styles.scrollview}>
                      <View style={styles.logoblock}>
                        <Image
                            style={styles.logo_img}
                            source={require('../img/packlogo.png')}
                        />
                        <Ionicons name="ios-notifications-outline" size={25} color="#37495f" />
                      </View>
                    
                    <View style={styles.h1block}>
                        <MaterialCommunityIcons name="file-document-box-search-outline" size={22} color="#009fe3" />
                        <Text style={styles.h1}>Прайс-листи</Text>
                    </View>
                    
                    <View style={styles.mainblock}>
                        <TouchableOpacity 
                            onPress={
                                () => navigation.navigate('SpecialEquipmentStack')
                            }
                            style={styles.block}
                        >
                            <Text style={styles.blocktext}>Спецтехніка</Text>
                            <Ionicons name="ios-arrow-forward" size={21} color="#99a7a8" />
                        </TouchableOpacity>
                        <View style={styles.hr}></View>
                        <TouchableOpacity 
                            onPress={
                                () => navigation.navigate('AgroTechStack')
                            }
                            style={styles.block}
                        >
                            <Text style={styles.blocktext}>Агротехніка</Text>
                            <Ionicons name="ios-arrow-forward" size={21} color="#99a7a8" />
                        </TouchableOpacity>
                        <View style={styles.hr}></View>
                        <TouchableOpacity 
                            onPress={
                                () => navigation.navigate('RoadTechStack')
                            }
                            style={styles.block}
                        >
                            <Text style={styles.blocktext}>Дорожно-будівельна техніка</Text>
                            <Ionicons name="ios-arrow-forward" size={21} color="#99a7a8" />
                        </TouchableOpacity>
                        <View style={styles.hr}></View>
                        <TouchableOpacity 
                            onPress={
                                () => navigation.navigate('CarsStack')
                            }
                            style={styles.block}
                        >
                            <Text style={styles.blocktext}>Автомобілі та причепи</Text>
                            <Ionicons name="ios-arrow-forward" size={21} color="#99a7a8" />
                        </TouchableOpacity>
                    </View>
                    
                    <Text style={[styles.h1, styles.inwork]}>Навісне обладнання</Text>
                    
                    <View style={styles.mainblock}>
                        <TouchableOpacity 
                            style={styles.block}
                        >
                            <Text style={[styles.blocktext, styles.inwork]}>В розробці</Text>
                            <Ionicons name="ios-arrow-forward" size={21} color="#99a7a8" />
                        </TouchableOpacity>
                    </View>
                    
                    <Text style={[styles.h1, styles.inwork]}>Склад</Text>

                    <View style={styles.mainblock}>
                        <TouchableOpacity 
                            style={styles.block}
                        >
                            <Text style={[styles.blocktext, styles.inwork]}>В розробці</Text>
                            <Ionicons name="ios-arrow-forward" size={21} color="#99a7a8" />
                        </TouchableOpacity>
                    </View>
                    
                  </View>
              </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    scrollview: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 10,
        paddingTop: 30,
        backgroundColor: '#f0f4f5',
    },
    mainblock: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 15
    },
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    blocktext: {
        color: '#2e3e51',
        fontSize: 15,
        fontFamily: 'OpenSans-SemiBold',
        paddingRight: 20,
    },
    h1block: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    h1: {
        fontSize: 19,
        fontFamily: 'OpenSans-Bold',
        marginBottom: 20,
        marginTop: 30,
        color: '#37495f',
        marginLeft: 10
    },
    hr: {
        height: 2,
        backgroundColor: '#f0f4f5',
        width: '100%'
    },
    inwork: {
        opacity: 0.5,
    },
    logoblock: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 20
    },
    logo_img: {
        width: 198,
        resizeMode: 'cover',
        height: 30,
        marginTop: 60,
        marginBottom: 20,
    },
})