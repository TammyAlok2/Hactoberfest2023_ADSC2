import React from 'react';
import User from '../Contributer/User.js';
import './Profile.css';
import Header from './Header.jsx';

const Profile = () => {
  return (
    <div>
      <Header/>
      <div id='profileHeading'>Profiles of Contributors</div>
      {User.map((item) => (
        <div className="" key={item.github_username}>
          <div className="">
            <img
              src={`https://avatars.githubusercontent.com/${item.github_username}`}
              alt="alok"
              height={200}
            />
            <h3 className=""> {item.name}</h3>
            <p className=""> {item.about} </p>
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
