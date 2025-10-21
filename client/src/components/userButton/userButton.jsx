import { useState } from 'react';
import './userButton.css'
import Img from '../img/img';
import apiRequest from '../../utils/apiRequest';
import { Link, useNavigate } from 'react-router';
import useAuthStore from '../../utils/authStore';

const UserButton = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
    //const currentUser = true;

    const {currentUser,removeCurrentUser} = useAuthStore()

    console.log(currentUser);


    const handleLogout = async () =>{
        try{
       await apiRequest.post("/users/auth/logout",{});
       removeCurrentUser();
       navigate("/auth");
        }catch(err){
         console.log(err);
        }
    }

  return currentUser ? (
    <div className='userButton'>
        <Img src={currentUser.img || '/general/noAvatar.png'} alt='' />
        <div onClick={() => setOpen((prev) => !prev)} >
        <Img 
        
        src='/general/arrow.svg' alt='' className='arrow' />
        </div>
        {open && (
        <div className='userOptions'>
            <Link to={`/profile/${currentUser.username}`} className='userOption'>Profile</Link>
            <div className='userOption'>Settings</div>
            <div className='userOption' onClick={handleLogout}>Logout</div>
        </div>
        )}
    </div>
    ) : (
    <Link to='/auth' className='loginLink'>
        Login / Sign Up
    </Link>
    ); 
};
export default UserButton;