import React,{Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import { PARTNERS } from '../shared/partners';
import * as Animatable from 'react-native-animatable';
import { Card, Button, Icon } from 'react-native-elements';
import * as MailComposer from 'expo-mail-composer';

class Contact extends Component{
    state ={
        partners: PARTNERS,
    };
    static navigationOptions = {
        title:'Contact Us'
    };
    sendMail(){
        MailComposer.composeAsync({
            recipients: ['campsites@nucamp.co'],
            subject: 'Inquiry',
            body: 'To whom it may concern:'
        })
    }
    render(){
    return(   
        <ScrollView>
            <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
            <Card 
            title='Contact Information' 
            wrapperStyle={{margin: 20}}>
                <Text>1 Nucamp student</Text>
                <Text>Brooklyn,NY</Text>
                <Text>U.S.A.</Text>
                <Text> Welcome</Text>
                <Text>Phone: 1-206-555-1234</Text>
                <Text>Email:ciebaisf@gmail.com</Text>
                <Button
                            title="Send Email"
                            buttonStyle={{backgroundColor: '#5637DD', margin: 40}}
                            icon={<Icon
                                name='envelope-o'
                                type='font-awesome'
                                color='#fff'
                                iconStyle={{marginRight: 10}}
                            />}
                            onPress={() => this.sendMail()}
                        />
           </Card>
           </Animatable.View>
      </ScrollView>
    );
}
}
export default Contact;