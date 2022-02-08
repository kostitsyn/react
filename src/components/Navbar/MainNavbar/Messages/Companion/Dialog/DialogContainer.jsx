import React from "react";
import {useParams} from "react-router-dom";
import c from './Dialog.module.css';
import {addMessage, updateMessageText} from "../../../../../../redux/messages-reducer";
import Dialog from './Dialog';
import {connect, useSelector} from 'react-redux';



let mapStateToProps = (state) => {
    let id = '1';
    let currentDialogs = state.messagesPage.dialogs.find(elem => elem.id.toString() === id);
    let companion = state.users.users.find(u => u.id.toString() === id);
    let currentUser = state.users.users.find(u => u.id === 100);
    return {
        currentDialogs: currentDialogs,
        newMessageText: state.messagesPage.newMessageText,
        companion: companion,
        currentUser: currentUser,
        id: id
    }
}

export default connect(mapStateToProps, {addMessage, updateMessageText})(Dialog);
