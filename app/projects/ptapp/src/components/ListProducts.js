import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export const ListProducts = ({post, onOpen}) => {

    return (
        <TouchableOpacity
            onPress={() => onOpen(post)}
            style={styles.blockitem}
        >
            <Text>{post.inventory} : {post.name}</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    blockitem: {
        padding: 10,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 5,
        fontFamily: 'OpenSans-Regular',
        fontSize: 15,
    }
})