import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width

const Header = () => {
    return (
        <View style={headerContainer}>
            <Text style={header}>Crypto Tracker</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        marginTop: 0,
        alignItems: 'center',
        backgroundColor: '#848584',
        width: screenWidth,
        paddingVertical: 10,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff'
    }
})

const { headerContainer, header } = styles

export default Header