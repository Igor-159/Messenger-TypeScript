import style from "../../common/formsControl/FormsControls.module.css";
import {FC, useState} from 'react'
import { IProfile } from '../../../models/IProfile';
import { Button, Checkbox, Form, Input } from 'antd';

interface ProfileDataFormProps{
    onSubmit: (profile: IProfile) => void,
    profile: IProfile,
    error: string
}


const ProfileDataForm: FC<ProfileDataFormProps> = ({onSubmit, profile, error}) =>{
    const [newProfile, setNewProfile] = useState<IProfile>(profile)

    


    const onSubmitProfileDataForm = () => {
        debugger
        onSubmit(newProfile)
    }
    
    const upDataProfile = (key: string, value: string | boolean) =>{
        if(typeof profile.contacts[key] !== "undefined"){
            setNewProfile({...newProfile, contacts:{ ...newProfile.contacts, [key]: value}})
        }else{
        setNewProfile({...newProfile, [key]: value})
        }
    }

                                           
    return(   
            <Form 
                onFinish={onSubmitProfileDataForm}>

                <Form.Item>
                    <Button type="primary" htmlType="submit" >
                        save
                    </Button>
                </Form.Item>
                    
                {error && <div className={style.formSummaryError}>
                {error}
                </div>}
                <Form.Item
                    label="Full Name"
                    name="fullName"
                >
                    <Input
                        id="fullName"
                        value={newProfile.fullName}
                        defaultValue={newProfile.fullName}
                        onChange={e => upDataProfile(e.target.id, e.target.value)}
                    />
                </Form.Item>
                <Form.Item
                    label="Looking for a job"
                    name='lookingForAJob'
                >
                    <Checkbox 
                        checked={newProfile.lookingForAJob}
                        defaultChecked={newProfile.lookingForAJob}
                        onChange={e => upDataProfile('lookingForAJob', e.target.checked)}
                    >        
                    </Checkbox>
                </Form.Item>    
                <Form.Item
                    label="My professional skills:"
                    name='lookingForAJobDescription'
                >
                    <Input
                        value={newProfile.lookingForAJobDescription}
                        defaultValue={newProfile.lookingForAJobDescription}
                        onChange={e => upDataProfile(e.target.id, e.target.value)}
                    />
                </Form.Item>   
                <Form.Item
                    label="Contact:"
                    name='Contact'
                >
                    {Object.keys(profile.contacts).map(key => {
                        return <Form.Item 
                                    key={key}
                                    label={ key}
                                    name={ key}
                                >
                                    <Input
                                        id={key}
                                        value={newProfile.contacts[key]}
                                        defaultValue={newProfile.contacts[key]}
                                        onChange={e => upDataProfile(e.target.id, e.target.value)}
                                    />
                                </Form.Item>
                    })
                    }
                </Form.Item>  
            </Form>
        )
    }

    

    export default ProfileDataForm