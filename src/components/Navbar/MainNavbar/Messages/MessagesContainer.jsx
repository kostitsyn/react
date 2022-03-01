import React from "react";
import {addMessage} from "../../../../redux/messages-reducer";
import Messages from './Messages';
import {connect} from 'react-redux';
import {withRouter} from '../../../../hoc/withRouter';
import {compose} from 'redux';


class MessagesContainer extends React.Component {
    render() {
        return <Messages {...this.props}/>
    }
}


let mapStateToProps = (state) => {
    return {
        messages: state.messagesPage.messages,
        newMessageText: state.messagesPage.newMessageText,
        isAuth: state.auth.isAuthenticated,
        userId: state.auth.userId,
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {addMessage})
)(MessagesContainer);

