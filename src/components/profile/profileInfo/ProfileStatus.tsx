import { ChangeEvent, FC, useEffect, useRef, useState } from "react";


interface ProfileStatusProps {
    status: string,
    updateStatus: (status: string) => void
}

const ProfileStatus: FC<ProfileStatusProps> = ({status, updateStatus}) => {
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

    const onStatusChange = (e: ChangeEvent<HTMLInputElement> ) =>{
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