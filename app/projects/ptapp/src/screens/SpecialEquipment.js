import React from 'react'
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export const SpecialEquipment = ({navigation}) => {

    return (
        <SafeAreaView style={ {backgroundColor: '#f0f4f5', flex: 1, paddingTop: 60} }>
            <ScrollView style={styles.scrollview}>
                <TouchableOpacity 
                onPress={
                    () => navigation.navigate('TelehandlersStack')
                }
                style={styles.block}
                >
                    <Text style={styles.blocktext}>Телескопічні навантажувачі</Text>
                    <Ionicons name="ios-arrow-forward" size={24} color="#333" />
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={
                        () => navigation.navigate('ExcavatorsStack')
                    }
                    style={styles.block}
                >
                    <Text style={styles.blocktext}>Екскаватори</Text>
                    <Ionicons name="ios-arrow-forward" size={24} color="#333" />
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={
                        () => navigation.navigate('LiftsStack')
                    }
                    style={styles.block}
                >
                    <Text style={styles.blocktext}>Підіймачі</Text>
                    <Ionicons name="ios-arrow-forward" size={24} color="#333" />
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={
                        () => navigation.navigate('ForkliftsStack')
                    }
                    style={styles.block}
                >
                    <Text style={styles.blocktext}>Вилкові навантажувачі</Text>
                    <Ionicons name="ios-arrow-forward" size={24} color="#333" />
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={
                        () => navigation.navigate('OtherTechStack')
                    }
                    style={styles.block}
                >
                    <Text style={styles.blocktext}>Інша техніка</Text>
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
})