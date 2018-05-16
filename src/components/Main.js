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
import ProfileUser from './Profile'
import VideoCall from './videocall/VideoCall'

export default class Main extends Component {
   
    render() {
        return <MainTabNavigator/>    
    }
}

const MessageTabStackNav = StackNavigator({
    MessageTab: { screen: MessageTab },
    Chat: { screen: Chat },
  });

const ContactTabStackNav = StackNavigator({
    ContactTab: { screen: ContactTab },
    Chat: { screen: Chat },
    VideoCall : {screen: VideoCall},
  }, 
  {
    initialRouteName : 'ContactTab',
  }
);

const GeneralTabStackNav = StackNavigator({
    GeneralTab : { screen : GeneralTab},
    ProfileUser : { screen : ProfileUser},
});


const MainTabNavigator = TabNavigator(
    {
        MessageTab: {
            screen: MessageTabStackNav
        },
        ContactTab: {
            screen: ContactTabStackNav
        },
        FriendTab: {
            screen: FriendTab
        },
        StoryTab: {
            screen: StoryTab
        },
        GeneralTab: {
            screen: GeneralTabStackNav
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