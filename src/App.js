import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Main from './components/Main';
import MessageTab from './components/tabs/MessageTab';
import Chat from './components/Chat';



export default class App extends Component {
	render() {
		return (
				<Main />	
		);
	}
}