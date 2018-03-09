import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';

export default class Chat extends Component {
   
    render() {
        return (<Container>
            <Content>
                <Text>
                    This is Chat message
                </Text>
            </Content>
        </Container>);
    }
}