import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';
import {Image} from 'react-native'


export default class GeneralTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
            return <Image
            source={require("../../images/icons/general_tab.png")}
            style={{width : 24, height: 24, tintColor: "#822682" }} 
            />
            //<Icon name="ios-add-outline" style={{ color: tintColor }} />
        }
    }
    render() {
        return (<Container>
            <Content>
                <Text>
                    This is General Tab
                </Text>
            </Content>
        </Container>);
    }
}