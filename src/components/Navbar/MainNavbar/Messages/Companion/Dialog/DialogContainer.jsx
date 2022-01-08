import React from "react";
import {useParams} from "react-router-dom";
import c from './Dialog.module.css';
import {addMessageActionCreator, updateMessageActionCreator} from "../../../../../../redux/messages-reducer";
import Dialog from './Dialog';
import {connect, useSelector} from 'react-redux';



let mapStateToProps = (state) => {
    let id = '1';
    let currentDialogs = state.messagesPage.dialogs.find(elem => elem.id.toString() === id);
    let companion = state.users.find(u => u.id.toString() === id);
    let currentUser = state.users.find(u => u.id === 100);
    return {
        currentDialogs: currentDialogs,
        newMessageText: state.messagesPage.newMessageText,
        companion: companion,
        currentUser: currentUser,
        id: id
    }
}

let mapDispatchToProps = (dispatch) => {
    let id = '1';
    return {
        updateMessage: (text) => {
            dispatch(updateMessageActionCreator(text));
        },
        addMsg: () => {
            dispatch(addMessageActionCreator(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);
