import './profileInfo.css';
import Spinner from '../../spinner/Spinner';
import userPhoto from '../../../assets/images/i.jpg';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';
import ProfileData from './ProfileData';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) =>{
    
    let [editMode, setEditMode] = useState(false);


    if(Object.keys(props.profile).length === 0){
        return <Spinner/>
    }

    const onMainPhotoSelected = (e) =>{
        if(e.target.files.length){
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) =>{
        props.saveProfile(formData).then(()=>{ 
        setEditMode(false);
    })
    }
   
    return(
        <div>
            <div>
               <img src={props.profile.photos.large || userPhoto}/>
               {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <div className='profileInfoContainer'>   
                <div className=''>
                    
                    <img src={props.profile.photos.large !=null ? props.profile.photos.small : userPhoto} className='userPhoto'/>

                    {editMode 
                            ? <ProfileDataForm initialValues={props.profile} onSubmit={onSubmit} profile={props.profile}/> 
                            : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={props.profile} isOwner={props.isOwner}/>
                    }
                </div>
            </div>
        </div>
    )
}


export default ProfileInfo;