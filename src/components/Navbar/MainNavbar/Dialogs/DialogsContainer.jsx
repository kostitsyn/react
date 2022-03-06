import React from 'react';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {getDialogs} from '../../../../redux/dialogs-reducer';
import {withAuthRedirect} from '../../../../hoc/AuthRedirect';
import {compose} from 'redux';


class DialogsContainer extends React.Component {
    componentDidMount() {
        this.props.getDialogs(this.props.userId);
    }

    render() {
        return <Dialogs {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.users.users,
        dialogs: state.dialogsPage.dialogs,
        userId: state.auth.userId
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {getDialogs}))(DialogsContainer);
