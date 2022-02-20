import React from 'react';
import Messages from './Messages';
import {connect} from 'react-redux';
import {updateMessageText, addMessage, getMessages} from '../../../../redux/messages-reducer';
import {withAuthRedirect} from '../../../../hoc/AuthRedirect';

class MessagesContainer extends React.Component {
    componentDidMount() {
        debugger;
        this.props.getMessages(this.props.userId);
    }

    render() {
        debugger;
        return <Messages users={this.props.users} userId={this.props.userId} messages={this.props.messages} dialogs={this.props.dialogs}/>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.users.users,
        dialogs: state.messagesPage.messages,
        dialogs: state.messagesPage.dialogs,
        userId: state.auth.userId
    }

}

let AuthRedirectComponent = withAuthRedirect(MessagesContainer);

export default connect(mapStateToProps, {updateMessageText, addMessage, getMessages})(AuthRedirectComponent);