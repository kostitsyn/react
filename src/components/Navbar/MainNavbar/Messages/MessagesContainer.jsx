import React from 'react';
import Messages from './Messages';
import {connect} from 'react-redux';
import {updateMessageText, addMessage} from '../../../../redux/messages-reducer';
import {withAuthRedirect} from '../../../../hoc/AuthRedirect';

class MessagesContainer extends React.Component {
    render() {
        return <Messages users={this.props.users} messages={this.props.messages} dialogs={this.props.dialogs}/>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.users.users,
        messages: state.messagesPage.messages,
        dialogs: state.messagesPage.dialogs,
    }

}

let AuthRedirectComponent = withAuthRedirect(MessagesContainer);

export default connect(mapStateToProps, {updateMessageText, addMessage})(AuthRedirectComponent);