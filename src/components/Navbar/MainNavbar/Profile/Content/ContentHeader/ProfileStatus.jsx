import React from 'react';


class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    updateStatusText(event) {
        debugger;
        this.props.updateStatusText(event.target.value);
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode(event) {
        this.setState({
            editMode: false
        })
        this.props.saveStatus(this.props.userId, this.props.statusText);
    }

    render() {
        return (
            <div>
                {this.props.userId === this.props.profile.id
                ? (this.state.editMode
                    ? <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)}
                        onChange={this.updateStatusText.bind(this)} value={this.props.statusText}/>
                      </div>
                    : <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.statusText}</span>
                      </div>
                    )

                : (<span>{this.props.profile.aboutMe}</span>)
                }

            </div>
        )
    }
}

export default ProfileStatus;