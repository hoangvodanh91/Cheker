import React, { Component } from 'react';
import { Header, List, ListItem, Left, Right, Thumbnail, Body, Container, Text, Content, Icon } from 'native-base';

import {View, FlatList, Platform, Alert, TouchableOpacity } from 'react-native'

import messageList from '../../config/messageList';

export default class MessageTab extends Component {
	static navigationOptions = {	
        title: "NativeBase Example",
		tabBarIcon: ({ tintColor }) => {
			return <Icon name="ios-chatbubbles-outline" style={{ color: tintColor }} />
		}
	}

	onPress = () => {
		
		this.props.navigation.navigate('Chat')
		//Alert.alert('Touched')
	}

	render() {
		return (	

				<FlatList 
					data={messageList}
					renderItem={({item})=>{
						return (
							<TouchableOpacity onPress={this.onPress}>
							<ListItem avatar>
							<Left>
								<Thumbnail source={{ uri: item.avatar_url }} />
							</Left>
							<Body>
								<Text>{item.name}</Text>
								<Text note>{item.last_message}</Text>
							</Body>
							<Right>
								<Text note>{item.last_time}</Text>
							</Right>
							</ListItem>
							</TouchableOpacity>
						  );
					}}
				>
				</FlatList>
	
		);
			
	}
}