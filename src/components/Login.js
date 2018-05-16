import React, { Component } from 'react'
import {
    StyleSheet, Text, View, Image,
    TouchableWithoutFeedback, StatusBar,
    TextInput, SafeAreaView, Keyboard, TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native'

import {StackNavigator} from 'react-navigation'
import Main from './Main'

class LoginSreen extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password:''};
      }

      

    oPressLogin = () => {
        let username = this.state.username;
        var conn = new WebSocket('ws://ancient-reaches-48479.herokuapp.com/');
        conn.onopen = function () { 
            console.log("Connected to the signaling server"); 
            
	
            if (username.length > 0) { 
                send({ 
                type: "login", 
                name: username 
                }); 
            }
            

         };
         //when we got a message from a signaling server 
        conn.onmessage = function (msg) { 
            console.log("Got message", msg);
            console.log("Got message", msg.data);
            
            var data = JSON.parse(msg.data); 
            
            switch(data.type) { 
            case "login": 
                handleLogin(data.success); 
                break; 
            default: 
                break; 
            }
        };
        conn.onerror = function (err) { 
            console.log("Got error", err); 
         };
           
         //alias for sending JSON encoded messages 
         function send(message) { 
            console.log("Value of message", message); 
            //attach the other peer username to our messages  
            conn.send(JSON.stringify(message)); 
         };

        function handleLogin(success) { 
            if (success === false) { 
               //alert("Ooops...try a different username"); 
            } else { 
                //alert("Login OK"); 
                conn.close()    
            } 
         };

         
        // Fetch data from server
        this.props.navigation.navigate('Main')


    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" />
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container} 
                            onPress={Keyboard.dismiss}>
                        <View style={styles.logoContainer}>
                            <View style={styles.logoContainer}>
                                <Image style={styles.logo}
                                    source={require('../images/logo.png')}>
                                </Image>
                                <Text style={styles.title}>Account Information</Text>
                            </View>
                            <View style={styles.infoContainer}>
                                <TextInput style={styles.input}
                                    onChangeText={(username) => this.setState({username})}
                                    placeholder="Enter username/email"
                                    placeholderTextColor='rgba(255,255,255,0.8)'
                                    keyboardType='email-address'
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    onSubmitEditing={()=> this.refs.txtPassword.focus()}      
                                />
                                <TextInput style={styles.input} 
                                    onChangeText={(password) => this.setState({password})}
                                    placeholder="Enter password"
                                    placeholderTextColor='rgba(255,255,255,0.8)'
                                    returnKeyType='go'
                                    secureTextEntry
                                    autoCorrect={false}
                                    ref={"txtPassword"}
                                    
                                />
                                <TouchableOpacity style={styles.buttonContainer} onPress={this.oPressLogin}>
                                    <Text style={styles.buttonText}>SIGN IN</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(32, 53, 70)',
        flexDirection: 'column',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    logo: {
        width: 128,
        height: 56,
    },
    title: {
        color: '#f7c744',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5,
        opacity: 0.9
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        padding: 20,
        // backgroundColor: 'red'
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#f7c744',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color :'rgb(32, 53, 70)',
        fontWeight: 'bold',
        fontSize: 18
    }
})


const LoginStackNav = StackNavigator (
    {
        LoginSreen : { screen : LoginSreen},
        Main : {screen : Main},
    },
    {
        navigationOptions : {
            header: false,
        }
    }
    
)

export default class Login extends Component {
    render() {
        return (
            <LoginStackNav />
        )
    }
}