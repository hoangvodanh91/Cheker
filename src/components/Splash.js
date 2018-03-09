import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'
export default class Splash extends Component {
    render() {
        return (
            <View style={styles.Container} >
                <Text style={styles.Title} > Hello, This is Splash </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container : {
        backgroundColor : 'rgb(32, 53, 70)',
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'


    },
    Title : {
        fontWeight : 'bold',
        fontSize : 28,
        color : 'white'
    }
})