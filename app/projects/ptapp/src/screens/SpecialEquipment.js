import React from 'react'
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, ScrollView, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export const SpecialEquipment = ({navigation}) => {

    return (
        <SafeAreaView style={ {backgroundColor: '#f0f4f5', flex: 1}}>
            <ScrollView>
                <View style={styles.scrollview}>
                    <View style={styles.mainblock}>
                        <TouchableOpacity 
                        onPress={
                            () => navigation.navigate('TelehandlersStack')
                        }
                        style={styles.block}
                        >
                            <Text style={styles.blocktext}>Телескопічні навантажувачі</Text>
                            <Ionicons name="ios-arrow-forward" size={24} color="#333" />
                        </TouchableOpacity>
                        <View style={styles.hr}></View>
                        <TouchableOpacity 
                            onPress={
                                () => navigation.navigate('ExcavatorsStack')
                            }
                            style={styles.block}
                        >
                            <Text style={styles.blocktext}>Екскаватори</Text>
                            <Ionicons name="ios-arrow-forward" size={24} color="#333" />
                        </TouchableOpacity>
                        <View style={styles.hr}></View>
                        <TouchableOpacity 
                            onPress={
                                () => navigation.navigate('LiftsStack')
                            }
                            style={styles.block}
                        >
                            <Text style={styles.blocktext}>Підіймачі</Text>
                            <Ionicons name="ios-arrow-forward" size={24} color="#333" />
                        </TouchableOpacity>
                        <View style={styles.hr}></View>
                        <TouchableOpacity 
                            onPress={
                                () => navigation.navigate('ForkliftsStack')
                            }
                            style={styles.block}
                        >
                            <Text style={styles.blocktext}>Вилкові навантажувачі</Text>
                            <Ionicons name="ios-arrow-forward" size={24} color="#333" />
                        </TouchableOpacity>
                        <View style={styles.hr}></View>
                        <TouchableOpacity 
                            onPress={
                                () => navigation.navigate('OtherTechStack')
                            }
                            style={styles.block}
                        >
                            <Text style={styles.blocktext}>Інша техніка</Text>
                            <Ionicons name="ios-arrow-forward" size={24} color="#333" />
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
        paddingTop: 100,
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
})