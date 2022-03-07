import React, {useState} from 'react';


const ProfileStatusWithHooks = props => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.saveStatus(status);
    }

    const updateStatusText = event => {
        setStatus(event.target.value);
    }

    return (
        <div>
            {props.userId === props.profile.id
            ? (editMode
                ? <div>
                    <input autoFocus={true} onBlur={deactivateEditMode}
                    onChange={updateStatusText} value={status}/>
                  </div>
                : <div>
                    <span onDoubleClick={activateEditMode}>{props.status || '-------'}</span>
                  </div>
                )

            : (<span>{props.profile.aboutMe}</span>)
            }
        </div>
    )
}

export default ProfileStatusWithHooks;