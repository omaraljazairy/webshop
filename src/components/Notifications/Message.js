import React from 'react';
import {Message} from 'semantic-ui-react';
import '../../assets/css/message.css';

const NotificationMessage = (props) => (
    <Message color={props.color ? props.color : 'blue'}>{props.text}</Message>
)

export default NotificationMessage