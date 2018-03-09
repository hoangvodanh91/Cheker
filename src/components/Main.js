import { Container, Text, Content } from 'native-base';
import { Icon, Button} from 'native-base';
import React, { Component } from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import {Platform,} from 'react-native';
import MessageTab from './tabs/MessageTab';
import ContactTab from './tabs/ContactTab';
import FriendTab from './tabs/FriendTab';
import StoryTab from './tabs/StoryTab';
import GeneralTab from './tabs/GeneralTab';

import Chat from './Chat';

class LogoTitle extends Component {
    render() {
      return (
        <Image
          source={require('../images/spiro.png')}
          style={{ width: 30, height: 30 }}
        />
      );
    }
  }

class ModalScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 30 }}>This is a modal!</Text>
          <Button
            onPress={() => this.props.navigation.goBack()}
            title="Dismiss"
          />
        </View>
      );
    }
  }

export default class Main extends Component {
   
    render() {
        return <MainTabNavigator/>    
    }
}

const MessageTabNav = StackNavigator({
    MessageTab: { screen: MessageTab },
    Chat: { screen: Chat },
  });
  


const MainTabNavigator = TabNavigator(
    {
        MessageTab: {
            screen: MessageTabNav
        },
        ContactTab: {
            screen: ContactTab
        },
        FriendTab: {
            screen: FriendTab
        },
        StoryTab: {
            screen: StoryTab
        },
        GeneralTab: {
            screen: GeneralTab
        }        
    }, 
    {
        animationEnabled: true,
        swipeEnabled: true,
        tabBarPosition: 'bottom', 
        tabBarOptions: {
            showIcon: true,
            showLabel: false,  
            style: {
                backgroundColor: 'white',
            },          
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',   
        },
        

});