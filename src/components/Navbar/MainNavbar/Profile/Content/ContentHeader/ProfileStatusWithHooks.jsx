import React, {useState, useEffect} from 'react';


const ProfileStatusWithHooks = ({status, saveStatus, userId, profile}) => {
    let [editMode, setEditMode] = useState(false);
    let [stateStatus, setStatus] = useState(status);

    useEffect(() => {
        setStatus(status);
    }, [status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        saveStatus(stateStatus);
    }

    const updateStatusText = event => {
        setStatus(event.target.value);
    }

    return (
        <div>
            {userId === profile.id
            ? (editMode
                ? <div>
                    <input autoFocus={true} onBlur={deactivateEditMode}
                    onChange={updateStatusText} value={status}/>
                  </div>
                : <div>
                    <span onDoubleClick={activateEditMode}>{status || '-------'}</span>
                  </div>
                )

            : (<span>{profile.aboutMe}</span>)
            }
        </div>
    )
}

export default ProfileStatusWithHooks;