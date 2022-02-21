import React from "react";
import {useParams} from "react-router-dom";
import c from './Messages.module.css';
import {addMessage, updateMessageText} from "../../../../redux/messages-reducer";
import Messages from './Messages';
import {connect, useSelector} from 'react-redux';


function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let params = useParams();
      return (
        <Component {...props} router={ params }/>
      );
    }

    return ComponentWithRouterProp;
  }

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

let WithUrlDataContainerComponent = withRouter(MessagesContainer);

export default connect(mapStateToProps, {addMessage, updateMessageText})(WithUrlDataContainerComponent);
