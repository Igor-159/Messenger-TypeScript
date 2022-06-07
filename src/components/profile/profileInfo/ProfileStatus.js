import React, { useEffect, useRef, useState } from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";


const ProfileStatus = () => {
    const {status} = useTypedSelector(state => state.profile);
    const {updateStatus} = useActions
    const [editMode, setEditMode] = useState(false)
    const [newStatus, setNewStatus] = useState ('')

    useEffect(() => {
        setNewStatus (status)
    }, [status]);

    const statusInputRef = useRef();


    const activateEditMode = () =>{
        setEditMode (true)  
    }

    const deactivateEditMode = () =>{
        setEditMode (false);
        updateStatus(newStatus);
    }

    const onStatusChange = (e) =>{
        setNewStatus(e.currentTarget.value);
    }

    return(
        <>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{status || '-----'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange}
                autoFocus={true} onBlur={deactivateEditMode} 
                value={newStatus}/>
            </div>
            }
        </>
        )
}

export default ProfileStatus;