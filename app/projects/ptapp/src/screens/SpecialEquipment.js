import React from 'react'
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, ScrollView, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export const SpecialEquipment = ({navigation}) => {

    return (
        <SafeAreaView style={ {backgroundColor: '#f0f4f5', flex: 1}}>
            <ScrollView>
                <View style={styles.scrollview}>
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