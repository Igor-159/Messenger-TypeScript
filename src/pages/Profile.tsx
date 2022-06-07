import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MyPost from '../components/profile/myPosts/MyPost';
import ProfileInfo from '../components/profile/profileInfo/ProfileInfo';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Profile = () => {
    const {profile, status} = useTypedSelector(state => state.profile);
    const {user} = useTypedSelector(state => state.auth);
    const { updateStatus, 
            savePhoto, 
            saveProfile, 
            getUserProfile, 
            getStatus,
            } = useActions();
    let params =  useParams().id;
    const isOwner = user.id === params


    if(!params){
        params = user.id
    }

    
    useEffect(() => {
       getUserProfile(params)
    
    }, [params]);
    
    useEffect(() => {
        getStatus(params)
     
     }, [params]);


    return (
        <div>
            <ProfileInfo profile={profile} status={status} 
            updateStatus={updateStatus}
            isOwner={isOwner}
            savePhoto={savePhoto}
            saveProfile={saveProfile}/>
            <MyPost />
        </div>
    );
};

export default Profile;