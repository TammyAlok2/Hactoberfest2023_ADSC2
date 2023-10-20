import React from 'react';
import User from '../Contributer/User.js';
import './Profile.css';

const Profile = () => {
  return (
    <div>
      <div id='profileHeading'>Profiles of Contributors</div>
      {User.map((item) => (
        <div className="container" key={item.github_username}>
          <div className="box">
            <img
              src={`https://avatars.githubusercontent.com/${item.github_username}`}
              alt="alok"
              height={200}
            />
            <h3 className="id"> {item.name}</h3>
            <p className="description"> {item.about} </p>
            <button>
              <a href={item.linkedinProfile}>LinkedIn</a> 
            </button>
            <button>
              <a href={`https://github.com/${item.github_username}`}>GitHub</a>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profile;
