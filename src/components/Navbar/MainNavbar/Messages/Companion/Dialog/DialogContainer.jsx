import React from "react";
import {useParams} from "react-router-dom";
import c from './Dialog.module.css';
import {addMessage, updateMessageText} from "../../../../../../redux/messages-reducer";
import Dialog from './Dialog';
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

class DialogContainer extends React.Component {
    componentDidMount() {
        debugger;
        let userId = this.props.router.userId;
        if (!userId) {
            userId = 1;
        }
    }
    render() {
        return <Dialog {...this.props}/>
    }
}


let mapStateToProps = (state) => {
    debugger;
    let id = state.profilePage.profile.id;
    let currentDialogs = state.messagesPage.dialogs.find(elem => elem.id === id);
    let companion = state.users.users.find(u => u.id === id);
    let currentUser = state.users.users.find(u => u.id === 100);
    return {
        currentDialogs: currentDialogs,
        newMessageText: state.messagesPage.newMessageText,
        companion: companion,
        currentUser: currentUser,
        id: id
    }
}

let WithUrlDataContainerComponent = withRouter(DialogContainer);

export default connect(mapStateToProps, {addMessage, updateMessageText})(WithUrlDataContainerComponent);
