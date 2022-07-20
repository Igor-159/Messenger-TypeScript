import { Col, Layout, Row } from 'antd';
import React, { useEffect } from 'react';
import {useParams } from 'react-router-dom';
import MyPost from '../components/profile/myPosts/MyPost';
import ProfileInfo from '../components/profile/profileInfo/ProfileInfo';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Spinner from '../components/spinner/Spinner'



const Profile = () => {
    const {profile, status, error} = useTypedSelector(state => state.profile);
    const {user} = useTypedSelector(state => state.auth);
    const { updateStatus, 
            savePhoto, 
            saveProfile, 
            getUserProfile, 
            getStatus,
            setError
            } = useActions();
    
    let params =  Number(useParams().id);
    

    let isOwner = user.id === params
    
    
    useEffect(() => {
       getUserProfile(params)
       getStatus(params)
    }, [params]);
    
    
    if(!profile) {
        return <Spinner/>
    }
    return (
        <Layout>
            <Row justify='center'>
                <Col>
                    <ProfileInfo 
                        profile={profile} 
                        status={status} 
                        updateStatus={updateStatus}
                        isOwner={isOwner}
                        savePhoto={savePhoto}
                        saveProfile={saveProfile}
                        error={error}
                        setError={setError}
                    />
                    <MyPost />
                </Col>
            </Row>
        </Layout>
    );
};

export default Profile;