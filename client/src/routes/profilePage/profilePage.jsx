import './profilePage.css'
import Img from '../../components/img/img'
import { useState } from 'react'
import Gallery from '../../components/gallery/gallery'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'
import apiRequest from '../../utils/apiRequest'
import Boards from '../../components/boards/boards'
import FollowButton from './FollowButton'

const ProfilePage = () => {

const [type, setType] = useState('Saved');

const {username} = useParams()

const {isPending, error, data}= useQuery({
  queryKey:["profile",username],
  queryFn: () => apiRequest.get(`/users/${username}`).then((res)=>res.data),
});

if (isPending) return "Loading..."

if (error) return "An error has occured: " + error.message;

if(!data) return "User not found!"

  return (
    <div className='profilePage'>
      <Img className="profileImg" 
      w={100} 
      h={100} 
      src={ data.Img || "/general/noAvatar.png" }
      alt="" 
      />
      <h1 className='profileName'>{data.displayName}</h1>
      <span className='profileUsername'>@{data.username}</span>
      <div className='followCounts'>{data.followerCount} followers . {data.followingCount} following</div>
      <div className='profileInteractions'>
        <Img src="/general/share.svg" alt="" />
        <div className='profileButtons'>
        <button>Message</button>
        <FollowButton isFollowing={data.isFollowing} username={data.username} />
        </div>
        <Img src="/general/more.svg" alt="" />
      </div>
      <div className="profileOptions">
        <span onClick={() =>setType("created")} className={type==="created" ? "active" : ""}>Created</span>
        <span onClick={() =>setType("saved")} className={type==="saved" ? "active" : ""}>Saved</span>
      </div>
      {type==="created" ? <Gallery userId={data._id} /> : <Boards userId={data._id}/>}
    </div>
  )
}
export default ProfilePage