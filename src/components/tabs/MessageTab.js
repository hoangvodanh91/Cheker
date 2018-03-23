import React, { Component } from 'react';
import { Header, List, ListItem, Left, Right, Thumbnail, Body, Container, Text, Content, Icon } from 'native-base';

import {View, FlatList, Platform, Alert, TouchableOpacity , Image} from 'react-native'

import messageList from '../../config/messageList';

export default class MessageTab extends Component {
	static navigationOptions = {	
        title: "Tin nhắn",
		tabBarIcon: ({ tintColor }) => {
			
			return <Image
				source={require("../../images/icons/message_tab.png")}
				style={{width : 24, height: 24, tintColor: "#822682" }}
			/>
			//return <Icon name="ios-chatbubbles-outline" style={{ color: tintColor }} />
		}
		
	}

	onPress = () => {
		
		this.props.navigation.navigate('Chat')
		//Alert.alert('Touched')
	}

	componentDidMount() {}

	render() {
		return (	

				<FlatList 
					data={messageList}
					renderItem={({item})=>{
						return (
							
							<ListItem avatar button={true} onPress={this.onPress} >
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
							
						  );
					}}
					keyExtractor={(item, index) => index}
				>
				</FlatList>
	
		);
			
	}
}