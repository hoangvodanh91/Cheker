import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';

export default class StoryTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            return <Icon name="md-timer" style={{ color: tintColor }} />
        }
    }
    render() {
        return (<Container>
            <Content>
                <Text>
                    This is Story Tab
                </Text>
            </Content>
        </Container>);
    }
}