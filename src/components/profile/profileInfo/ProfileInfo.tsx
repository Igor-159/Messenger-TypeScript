import './profileInfo.css';
import Spinner from '../../spinner/Spinner';
import userPhoto from '../../../assets/images/i.jpg';
import { ChangeEvent, FC, useState } from 'react';
import ProfileDataForm from './ProfileDataForm';
import ProfileData from './ProfileData';
import ProfileStatus from './ProfileStatus';
import {IProfile} from '../../../models/IProfile'
import { Col, Layout } from 'antd';



interface ProfileInfoProps {
    profile: IProfile,
    status: string,  
    updateStatus: (status: string) => void,
    isOwner: boolean,
    savePhoto: (file: File) => void,
    saveProfile: (profile: IProfile) => void,
    error: string,
    setError: (message: string) => void
}

const ProfileInfo: FC<ProfileInfoProps> = ({profile,
    status,
    updateStatus,
    isOwner,
    savePhoto,
    saveProfile,
    error,
    setError}) =>{
    
    let [editMode, setEditMode] = useState(false);


    if(Object.keys(profile).length === 0){
        return <Spinner/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) =>{
        if(e.target.files != null){
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: IProfile) =>{
        debugger
        saveProfile(formData) 
        if(!error){
        setEditMode(false);
        }
    }

    const goToEditMode = () => {
        setEditMode(true)
        setError('')
    }
   
    return(
        <Layout>
            <Col>
                <div >
                    <img alt='UserPhoto' src={profile.photos.large || userPhoto}/>
                    {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                </div>
                <ProfileStatus isOwner={isOwner} status={status} updateStatus={updateStatus}/>
                <div className='profileInfoContainer'>   
                    <div className=''>
                        
                        <img alt='UserPhoto' src={profile.photos.large !=null ? profile.photos.small : userPhoto} className='userPhoto'/>

                        {editMode 
                                ? <ProfileDataForm error={error} onSubmit={onSubmit} profile={profile}/> 
                                : <ProfileData goToEditMode={goToEditMode} profile={profile} isOwner={isOwner}/>
                        }
                    </div>
                </div>
            </Col>
        </Layout>
    )
}


export default ProfileInfo;