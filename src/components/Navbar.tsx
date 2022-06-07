import { FC } from "react";
import { NavLink } from "react-router-dom";


const NavBar: FC = () =>{
    
    return (
        <div className='nav'>
        
                <ul>
                    <li><NavLink to='/profile'>Profile</NavLink></li>
                    <li><NavLink to='/dialogs'>Message</NavLink></li>
                    <li><NavLink to='/users'>Users</NavLink></li>
                    <li><NavLink to='/news'>News</NavLink></li>
                    <li><NavLink to='/music'>Music</NavLink></li>
                    <li><NavLink to='/settings'>Settings</NavLink></li>

                </ul>
        
        </div>
    )
}

export default NavBar;