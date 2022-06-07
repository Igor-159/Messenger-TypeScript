import { FC } from "react"
import { IProfile } from "../../../models/IProfile"
import Contact from "./ProfileContact"

interface ProfileDataProps{
    profile: IProfile,
    isOwner: boolean,
    goToEditMode: () => void
}


const ProfileData: FC<ProfileDataProps> = ({profile, isOwner, goToEditMode}) =>{
    return   <div>  
                <div>
                    {isOwner && <button onClick={goToEditMode}>edit</button>}
                </div>
                <div>
                    fullName: {profile.fullName}
                </div>
                <div>
                    Looking for a job: {profile.lookingForAJob ? "yes" : "no"}
                </div>
                <div>
                    My professional skills: {profile.lookingForAJob ? "yes" : "no"}
                </div>
                <div>
                    About me: 
                </div>
                <div>
                    Contact: {Object.keys(profile.contacts).map(key => {
                       return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                    })}
                </div>
                </div>
    }

    export default ProfileData