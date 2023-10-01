import React from 'react'
import User from '../Contributer/User.js'
import './Profile.css'
const Profile = () => {
  return (

<>
<div id='profileHeading'> Profiles of Contributers</div>
{
  User.map((item)=>{
    return(
      <>
       <div className="container">
      <div className="box">
        <img src={`https://avatars.githubusercontent.com/${item.github_username}`}
 alt="alok" height={200} />
        <h3 className="id"> {item.name}</h3>
        <p className="description"> {item.about} </p>
        <button> <a href={item.linkdenProfile}>Linkden</a></button> 
        <button> <a href = {`https://github.com/${item.github_username}`}>  Github</a></button>
       

      </div>
    </div>
      </>
    )
  })
}


</>
  )
}

export default Profile
