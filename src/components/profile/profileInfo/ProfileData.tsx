import { Button, Layout } from "antd"
import { FC } from "react"
import { IProfile } from "../../../models/IProfile"
import Contact from "./ProfileContact"

interface ProfileDataProps{
    profile: IProfile,
    isOwner: boolean,
    goToEditMode: () => void
}


const ProfileData: FC<ProfileDataProps> = ({profile, isOwner, goToEditMode}) =>{
    

    
    return   <Layout>  
                <div>
                    {isOwner && <Button type="primary" onClick={goToEditMode}>edit</Button>}
                </div>
                <div>
                    fullName: {profile.fullName}
                </div>
                <div>
                    Looking for a job: {profile.lookingForAJob ? "yes" : "no"}
                </div>
                <div>
                    My professional skills: {profile.lookingForAJobDescription}
                </div>
                <div>
                    About me: 
                </div>
                <div>
                    
                    Contact: {Object.keys(profile.contacts).map(key  => {
                       return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                    })}
                </div>
                </Layout>
    }

    export default ProfileData