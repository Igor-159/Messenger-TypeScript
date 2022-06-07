import { NavLink } from 'react-router-dom';
import {FC} from 'react'
import userPhoto from '../../assets/images/i.jpg';
import { IUser } from '../../models/IUser';




interface userProps{
    user: IUser,
    followingInProgress: number[],
    follow: (id: number) => void 
    unfollow: (id: number) => void
}


const User: FC<userProps> = ({user, followingInProgress, follow, unfollow}) =>{

    return(
    
        <div>
            <span>
                <div>
                    <NavLink end to={'/profile/'+ user.id}>
                    <img src={user.photos.small !=null ? user.photos.small : userPhoto} className='userPhoto'/>
                    </NavLink>
                </div>
                <div>
                    { (user.followed) 
                    ?  <button disabled={followingInProgress.some(id => id ===user.id)} onClick={() => {
                                        unfollow(user.id);
                                        
                        }}>Unfollow</button> 
                    : <button disabled={followingInProgress.some(id => id ===user.id)} onClick={() => {
                                    follow(user.id);
                                    
                        }}>Follow</button>}
                    
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                    
                </span>
            </span>

        </div>
    )
}


export default User;