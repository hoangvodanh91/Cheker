
import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';
import { GiftedChat } from 'react-native-gifted-chat'

export default class Chat extends Component {
  state = {
    messages: [],
  }

  static navigationOptions = {
    tabBarVisible: false
}

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }
}

