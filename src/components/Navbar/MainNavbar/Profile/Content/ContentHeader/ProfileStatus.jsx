import React from 'react';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }

    updateStatusText = event => {
    this.setState({
        status: event.target.value
    })
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = event => {
        this.setState({
            editMode: false
        })
        this.props.saveStatus(this.state.status);
    }

    render() {
        return (
            <div>
                {this.props.userId === this.props.profile.id
                ? (this.state.editMode
                    ? <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode}
                        onChange={this.updateStatusText} value={this.state.status}/>
                      </div>
                    : <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                      </div>
                    )

                : (<span>{this.props.profile.aboutMe}</span>)
                }

            </div>
        )
    }
}

export default ProfileStatus;